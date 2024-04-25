import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

export const metadata = {
    title: 'Page Not Found!',
}

const page = () => {
    return (
        <main className="grid min-h-screen place-items-center text-center ">
            <div className="mx-auto max-w-screen-sm">
                <h1 className="text-gradient font-[Electrolize] text-8xl font-bold md:text-9xl">404</h1>
                <h2 className="text-gradient mt-4 text-4xl font-bold md:text-5xl ">Page Not Found!</h2>
                <p className="mt-3 text-lg font-medium text-gray-400 md:text-2xl">
                    The page you are looking for does not exist. Please check the URL and try again.
                </p>

                <Link
                    href={'/'}
                    className="mx-auto mt-12 flex w-max items-center gap-4 rounded bg-gray-100 px-6 py-1.5 font-bold text-black md:px-8 md:text-xl"
                >
                    <FaHome />
                    <span>Go to Home</span>
                </Link>
            </div>
        </main>
    );
};

export default page;
