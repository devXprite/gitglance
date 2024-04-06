const getReposPerLanguage = repos => {
    if (!repos) return {};

    const languages = {};

    repos.forEach(repo => {
        repo.languages.edges.forEach(({ node: { name } }) => {
            if (languages[name]) languages[name]++;
            else languages[name] = 1;
        });
    });

    return languages;
};

export default getReposPerLanguage;
