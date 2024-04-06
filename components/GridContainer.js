import { twMerge } from 'tailwind-merge';

const GridContainer = ({ name, description, className, children }) => {
    return (
        <section className="rounded-md border border-gray-700 bg-gray-900 shadow-lg shadow-black">
            <div className="bg-gray-800 px-5 py-3">
                <h3 className="text-xl font-semibold text-gray-200">{name}</h3>
                {description && <p className="text-xs md:text-sm text-gray-400">{description}</p>}
            </div>

            <div className={twMerge('grid grid-cols-2 gap-4 bg-gray-800/50 p-3 md:grid-cols-5 md:p-5', className)}>
                {children}
                {children?.length === 0 && (
                    <div className="col-span-full flex w-full items-center justify-center py-8 md:text-lg">
                        <p className="text-gray-500">Not enough data.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GridContainer;
