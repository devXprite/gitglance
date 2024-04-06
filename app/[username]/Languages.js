import GridContainer from '@/components/GridContainer';
import LanguageIcon from '@/components/LanguageIcon';

const Languages = ({ languages }) => {
    return (
        <GridContainer name="Most Used Languages" className={'md:grid-cols-4'}>
            {languages.map(({ name, size }) => (
                <div key={name} className="box group flex items-center justify-around gap-4 p-3">
                    <LanguageIcon
                        name={name}
                        className="size-8 transition-all duration-300 group-hover:grayscale-0 group-hover:rotate-y-180 md:size-10"
                    />
                    <div>
                        <p className="font-[Electrolize] text-base font-bold md:text-xl">
                            {size}
                            <span className="ml-1 text-sm md:text-lg">%</span>
                        </p>
                        <h5 className="-mt-1 text-sm text-gray-400 md:text-base">{name}</h5>
                    </div>
                </div>
            ))}
        </GridContainer>
    );
};

export default Languages;
