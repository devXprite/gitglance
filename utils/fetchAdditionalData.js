import githubGraphql from './githubGraphql';

const getLanguagesData = repos => {
    let languages = { totalSize: 0 };

    repos.forEach(repo => {
        repo.languages.edges.forEach(({ node: { name }, size }) => {
            if (languages[name]) languages[name] += size;
            else languages[name] = size;
            languages.totalSize += size;
        });
    });

    for (const lang in languages) {
        if (lang === 'totalSize') continue;
        languages[lang] = ((languages[lang] / languages.totalSize) * 100).toFixed(2);
    }

    delete languages.totalSize;

    languages = Object.entries(languages).map(([name, size]) => ({ name, size }));
    languages.sort((a, b) => b.size - a.size);

    return languages.slice(0, 8);
};

const getCommitsPerRepo = repos => {
    const reposObj = {};
    repos.slice(0, 25).forEach(repo => {
        const commits = repo.defaultBranchRef?.target?.history?.totalCount;
        reposObj[repo.name] = commits;
    });
    return reposObj;
};

const getStarsPerRepo = repos => {
    const reposObj = {};
    repos.slice(0, 25).forEach(repo => (reposObj[repo.name] = repo.stargazerCount));
    return reposObj;
};

const getReposPerLanguages = repos => {
    const languages = {};

    repos.forEach(repo => {
        repo.languages.edges.forEach(({ node: { name } }) => {
            if (languages[name]) languages[name]++;
            else languages[name] = 1;
        });
    });

    return languages;
};

const getStarsPerLanguages = repos => {
    const languages = {};

    repos.forEach(repo => {
        repo.languages.edges.forEach(({ node: { name } }) => {
            if (languages[name]) languages[name] += repo.stargazerCount;
            else languages[name] = repo.stargazerCount;
        });
    });

    return languages;
};

const fetchAdditionalData = async login => {
    const query = `
    query ($username: String!) {
      user(login: $username) {
        repositories(
          ownerAffiliations: OWNER
          isFork: false
          first: 50
          orderBy: {field: STARGAZERS, direction: DESC}
        ) {
          nodes {
            name
            stargazerCount
            defaultBranchRef {
              target {
                ... on Commit {
                  history {
                    totalCount
                  }
                }
              }
            }
            languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
              edges {
                size
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
    `;

    const response = await githubGraphql({ query, username: login });
    const repositories = response.user.repositories.nodes;

    const languages = getLanguagesData(repositories);
    const commitsPerRepo = getCommitsPerRepo(repositories);
    const starsPerRepo = getStarsPerRepo(repositories);
    const reposPerLanguages = getReposPerLanguages(repositories);
    const starsPerLanguages = getStarsPerLanguages(repositories);

    return { languages, commitsPerRepo, starsPerRepo, reposPerLanguages, starsPerLanguages };
};

export default fetchAdditionalData;
