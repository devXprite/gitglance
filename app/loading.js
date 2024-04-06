import { CgSpinner } from 'react-icons/cg';

const loading = () => {
    return (
        <div className="grid min-h-screen place-items-center">
            <CgSpinner className="animate-spin text-5xl md:text-6xl" />
        </div>
    );
};

export default loading;
