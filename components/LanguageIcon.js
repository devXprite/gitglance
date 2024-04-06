'use client';

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
            src={`/icons/${name.toLowerCase()}.svg`}
            onError={e => {
                e.target.src = `/icons/unknown.svg`;
            }}
            className={className}
        />
    );
};

export default LanguageIcon;
