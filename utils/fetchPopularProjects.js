import githubGraphql from './githubGraphql';

const fetchPopularProjects = async login => {
    const query = `
    query ($username: String!) {
      user(login: $username) {
        repositories(
          first: 6
          isFork: false
          ownerAffiliations: OWNER
          orderBy: {direction: DESC, field: STARGAZERS}
        ) {
          nodes {
            name
            description
            stargazerCount
            forkCount
            diskUsage
            url
            createdAt
            primaryLanguage {
              name
              color
            }
            issues{
              totalCount
            }
            pullRequests{
              totalCount
            }
          }
        }
      }
    }
    `;

    const {
        user: {
            repositories: { nodes },
        },
    } = await githubGraphql({ query, username: login });
    return nodes;
};

export default fetchPopularProjects;
