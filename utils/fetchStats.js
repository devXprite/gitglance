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
        repositories(first: 1, ownerAffiliations: OWNER) {
          totalCount
        }
        organizations(first: 1) {
          totalCount
        }
        sponsoring(first: 1) {
          totalCount
        }
        createdAt
        updatedAt
      }
    }
    `;

    const { user } = await githubGraphql({ query, username: login });
    return { ...user };
};

export default fetchStats;
