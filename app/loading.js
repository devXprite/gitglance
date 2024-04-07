import { CgSpinner } from 'react-icons/cg';

const loading = () => {
    return (
        <div className="grid min-h-[calc(100vh-6rem)] place-items-center">
            <CgSpinner className="animate-spin text-5xl md:text-6xl" />
        </div>
    );
};

export default loading;
