const getStarsPerRepo = repos => {
    if (!repos) return {};
    const reposObj = {};
    repos.slice(0, 25).forEach(repo => (reposObj[repo.name] = repo.stargazerCount));
    return reposObj;
};

export default getStarsPerRepo;