import { twMerge } from 'tailwind-merge';

const GridContainer = ({ name, className, children }) => {
    return (
        <section className="rounded-md border border-gray-700 bg-gray-900 shadow-lg shadow-black">
            <h3 className="bg-gray-800 px-5 py-3 text-xl font-semibold text-gray-200">{name}</h3>
            <div className={twMerge('grid grid-cols-2 gap-4 p-3 md:p-5 md:grid-cols-5 bg-gray-800/50', className)}>{children}</div>
        </section>
    );
};

export default GridContainer;
