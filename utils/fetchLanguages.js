import githubGraphql from './githubGraphql';

const fetchLanguages = async login => {
    let languages = { totalSize: 0 };

    const query = `
    query ($username: String!) {
      user(login: $username) {
        repositories(ownerAffiliations: OWNER, isFork: false, first: 100) {
          nodes {
            languages(first: 15, orderBy: {field: SIZE, direction: DESC}) {
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

    // Get languages and their sizes
    response.user.repositories.nodes.forEach(repo => {
        repo.languages.edges.forEach(({ node: { name }, size }) => {
            if (languages[name]) languages[name] += size;
            else languages[name] = size;
            languages.totalSize += size;
        });
    });

    // Convert sizes to percentages
    for (const lang in languages) {
        if (lang === 'totalSize') continue;
        languages[lang] = ((languages[lang] / languages.totalSize) * 100).toFixed(2);
    }

    // delete totalSize property
    delete languages.totalSize;

    // Convert to array
    languages = Object.entries(languages).map(([name, size]) => ({ name, size }));

    // Sort by size
    languages.sort((a, b) => b.size - a.size);

    // return top 8 languages
    return languages.slice(0, 8);
};

export default fetchLanguages;
