const getStarsPerLanguage = repos => {
    if (!repos) return {};
    const languages = {};

    repos.forEach(repo => {
        repo.languages.edges.forEach(({ node: { name } }) => {
            if (languages[name]) languages[name] += repo.stargazerCount;
            else languages[name] = repo.stargazerCount;
        });
    });

    return languages;
};

export default getStarsPerLanguage;