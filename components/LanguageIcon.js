const LanguageIcon = ({ name, className }) => {

    const namesToUpdate = {
        SCSS: 'SASS',
        'C++': 'CPP',
        JADE: 'PUG',
        'C#': 'C Sharp',
    };

    if (namesToUpdate[name]) name = namesToUpdate[name];

    return (
        <img
            src={`https://gitvio.vercel.app/images/icons/${name.toLowerCase()}.svg`}
            // onError={e => {
            //     e.target.src = `https://gitvio.vercel.app/images/icons/unknown.svg`;
            // }}
            className={className}
        />
    );
};

export default LanguageIcon;
