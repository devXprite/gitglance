const getUserStats = userData => {
    const stats = {
        Followers: userData.followers.totalCount,
        Repositories: userData.repositoriesWithStargazerCount.totalCount,
        Organizations: userData.organizations.totalCount,
        Gists: userData.gists.totalCount,
        'Pull Requests': userData.pullRequests.totalCount,
        Issues: userData.issues.totalCount,
        Commits: userData.contributionsCollection.totalCommitContributions,
        Issues: userData.issues.totalCount,
        Sponsors: userData.sponsors.totalCount,
        'Contributed To': userData.repositoriesContributedTo.totalCount,
    };

    stats['Star Earned'] = userData.repositoriesWithStargazerCount.nodes.reduce((acc, repo) => acc + repo.stargazerCount, 0);

    return stats;
};

export default getUserStats;
