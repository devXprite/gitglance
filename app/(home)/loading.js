import { CgSpinner } from 'react-icons/cg';

const loading = () => {
    return (
        <div className="grid min-h-[calc(100vh-7.5rem)] place-items-center">
            {/* <CgSpinner className="animate-spin text-5xl md:text-6xl" /> */}
            <img className='w-24 md:w-32' src="/loading.gif" alt="loader" />
        </div>
    );
};

export default loading;
