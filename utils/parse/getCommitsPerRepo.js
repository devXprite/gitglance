const getCommitsPerRepo = repos => {
    const reposObj = {};
    repos.slice(0, 25).forEach(repo => {
        const commits = repo.defaultBranchRef?.target?.history?.totalCount;
        reposObj[repo.name] = commits;
    });
    return reposObj;
};

export default getCommitsPerRepo;