import githubGraphql from './githubGraphql';
import getCommitsPerRepo from './parse/getCommitsPerRepo';
import getContributionCalendar from './parse/getContributionCalendar';
import getLanguageSize from './parse/getLanguageSize';
import getReposPerLanguage from './parse/getReposPerLanguage';
import getStarsPerLanguage from './parse/getStarsPerLanguage';
import getStarsPerRepo from './parse/getStarsPerRepo';
import getUserStats from './parse/getUserStats';

const repositoriesQuery = `
  repositories(
    ownerAffiliations: OWNER
    isFork: false
    first: 25
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
`;

const popularRepositoriesQuery = `
popularRepositories: repositories(
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
`;

const contributionsCollectionQuery = `
contributionsCollection{
  contributionCalendar{
    weeks{
      contributionDays{
        contributionCount
        contributionLevel
        date
      }
    }
  }
}
`;

const userStatsQuery = `
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
  repositoriesWithStargazerCount: repositories(
    first: 100
    ownerAffiliations: OWNER
    orderBy: {field: STARGAZERS, direction: DESC}
  ) {
    totalCount
    nodes {
      stargazerCount
    }
  }
`;

const fetchUserData = async login => {
    const query = `
    query ($username: String!) {
      user(login: $username) {
      ${userStatsQuery}
      ${repositoriesQuery}
      ${popularRepositoriesQuery}
      ${contributionsCollectionQuery}
      }
      rateLimit{
        cost
        limit
        remaining
        used
        resetAt
      }
    }
    `;

    const { user, rateLimit } = await githubGraphql({ query, username: login });
    const repositories = user.repositories.nodes;

    const languagesSize = getLanguageSize(repositories);
    const commitsPerRepo = getCommitsPerRepo(repositories);
    const starsPerRepo = getStarsPerRepo(repositories);
    const reposPerLanguages = getReposPerLanguage(repositories);
    const starsPerLanguages = getStarsPerLanguage(repositories);
    const contributionCalendar = getContributionCalendar(user.contributionsCollection);
    const popularRepositories = user.popularRepositories.nodes;
    const userStats = getUserStats(user);

    console.log(rateLimit);

    return {
        languagesSize,
        commitsPerRepo,
        starsPerRepo,
        reposPerLanguages,
        starsPerLanguages,
        popularRepositories,
        contributionCalendar,
        userStats,
    };
};

export default fetchUserData;
