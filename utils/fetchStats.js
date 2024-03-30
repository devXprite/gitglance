import githubGraphql from './githubGraphql';

const fetchStats = async login => {
    const query = `
    query ($username: String!) {
      user(login: $username) {
        following {
          totalCount
        }
        followers {
          totalCount
        }
        gists {
          totalCount
        }
        contributionsCollection {
          totalCommitContributions
        }
        repositoriesContributedTo(
          first: 1
          contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]
        ) {
          totalCount
        }
        pullRequests(first: 1) {
          totalCount
        }
        issues(first: 1) {
          totalCount
        }
        organizations(first: 1) {
          totalCount
        }
        sponsoring(first: 1) {
          totalCount
        }
        sponsors{
          totalCount
        }
        createdAt
        updatedAt
       
        repositories(
          first: 100
          ownerAffiliations: OWNER
          orderBy: {field: STARGAZERS, direction: DESC}
        ) {
          totalCount
          nodes {
            stargazerCount
          }
        }
      }
    }
    `;

    // repositories(first: 1, ownerAffiliations: OWNER) {
    //   totalCount
    // }

    const { user } = await githubGraphql({ query, username: login });
    user['starsEarn'] = user.repositories.nodes.reduce((acc, repo) => acc + repo.stargazerCount, 0);

    return user;
};

export default fetchStats;
