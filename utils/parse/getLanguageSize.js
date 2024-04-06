const getLanguageSize = repos => {
    let languages = { totalSize: 0 };

    repos?.forEach(repo => {
        repo.languages.edges.forEach(({ node: { name }, size }) => {
            if (languages[name]) languages[name] += size;
            else languages[name] = size;
            languages.totalSize += size;
        });
    });

    for (const lang in languages) {
        if (lang === 'totalSize') continue;
        languages[lang] = ((languages[lang] / languages.totalSize) * 100).toFixed(2);
    }

    delete languages.totalSize;

    languages = Object.entries(languages).map(([name, size]) => ({ name, size }));
    languages.sort((a, b) => b.size - a.size);

    return languages.slice(0, 8);
};

export default getLanguageSize;