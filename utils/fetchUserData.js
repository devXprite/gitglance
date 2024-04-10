import githubGraphql from './githubGraphql';
import getCommitsPerRepo from './parse/getCommitsPerRepo';
import getContributionCalendar from './parse/getContributionCalendar';
import getFollowUp from './parse/getFollowUp';
import getLanguageSize from './parse/getLanguageSize';
import getReposPerLanguage from './parse/getReposPerLanguage';
import getStarsPerLanguage from './parse/getStarsPerLanguage';
import getStarsPerRepo from './parse/getStarsPerRepo';
import getUserStats from './parse/getUserStats';

const repositoriesQuery = `
  repositories(
    ownerAffiliations: OWNER
    isFork: false
    first: 10
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
contributionsCollection {
  pullRequestContributionsByRepository {
    contributions(last: 10) {
      totalCount
      nodes {
        pullRequest {
          id
          url
          title
          state
        }
      }
    }
    repository {
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
    owner{
      avatarUrl(size: 50)
      url
      login
    }
    }
  }
  contributionCalendar {
    weeks {
      contributionDays {
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

const followupQuery = login => {
    return `
  issues_open_by:search(query: "is:issue author:${login} is:open", type: ISSUE, first: 0) {
    issueCount
  }
  issues_drafts_by:search(query: "is:issue author:${login} draft:true", type: ISSUE, first: 0) {
    issueCount
  }
  issues_skipped_by:search(query: "is:issue author:${login} is:closed label:wontfix,duplicate", type: ISSUE, first: 0) {
    issueCount
  }
  issues_closed_by:search(query: "is:issue author:${login} is:closed", type: ISSUE, first: 0) {
    issueCount
  }
  pr_open_by:search(query: "is:pr author:${login} is:open draft:false", type: ISSUE, first: 0) {
    issueCount
  }
  pr_drafts_by:search(query: "is:pr author:${login} draft:true", type: ISSUE, first: 0) {
    issueCount
  }
  pr_closed_by:search(query: "is:pr author:${login} is:unmerged is:closed draft:false", type: ISSUE, first: 0) {
    issueCount
  }
  pr_merged_by:search(query: "is:pr author:${login} is:merged", type: ISSUE, first: 0) {
    issueCount
  }

  issues_open_on:search(query: "user:${login} is:issue is:open", type: ISSUE, first: 0) {
    issueCount
  }
  issues_drafts_on:search(query: "user:${login} is:issue draft:true", type: ISSUE, first: 0) {
    issueCount
  }
  issues_skipped_on:search(query: "user:${login} is:issue is:closed label:wontfix,duplicate", type: ISSUE, first: 0) {
    issueCount
  }
  issues_closed_on:search(query: "user:${login} is:issue is:closed", type: ISSUE, first: 0) {
    issueCount
  }
  pr_open_on:search(query: "user:${login} is:pr is:open draft:false", type: ISSUE, first: 0) {
    issueCount
  }
  pr_drafts_on:search(query: "user:${login} is:pr draft:true", type: ISSUE, first: 0) {
    issueCount
  }
  pr_closed_on:search(query: "user:${login} is:pr is:unmerged is:closed draft:false", type: ISSUE, first: 0) {
    issueCount
  }
  pr_merged_on:search(query: "user:${login} is:pr is:merged", type: ISSUE, first: 0) {
    issueCount
  }

  `;
};

const fetchUserData = async login => {
    const query = `
    query ($username: String!) {
      user(login: $username) {
        ${userStatsQuery}
        ${repositoriesQuery}
        ${popularRepositoriesQuery}
        ${contributionsCollectionQuery}
      }
      ${followupQuery(login)}
      rateLimit{
        cost
        limit
        remaining
        used
        resetAt
      }
    }
    `;

    const { user, rateLimit, ...response } = await githubGraphql({ query, variables: { username: login } });
    const repositories = user?.repositories?.nodes;

    const languagesSize = getLanguageSize(repositories);
    const commitsPerRepo = getCommitsPerRepo(repositories);
    const starsPerRepo = getStarsPerRepo(repositories);
    const reposPerLanguages = getReposPerLanguage(repositories);
    const starsPerLanguages = getStarsPerLanguage(repositories);
    const contributionCalendar = getContributionCalendar(user?.contributionsCollection);
    const popularRepositories = user.popularRepositories.nodes;
    const userStats = getUserStats(user);
    const followUp = getFollowUp(response, login);

    const topContributions = user.contributionsCollection.pullRequestContributionsByRepository
        .filter(contribution => contribution.repository.owner.login !== login)
        .splice(0, 9);

    return {
        languagesSize,
        commitsPerRepo,
        starsPerRepo,
        reposPerLanguages,
        starsPerLanguages,
        popularRepositories,
        contributionCalendar,
        topContributions,
        userStats,
        followUp,
        rateLimit
    };
};

export default fetchUserData;
