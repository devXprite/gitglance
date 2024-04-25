import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

export const metadata = {
    title: 'User Not Found!',
}

const page = () => {
    return (
        <main className="grid min-h-screen place-items-center text-center ">
            <div className="mx-auto max-w-screen-sm">
                <h1 className="text-gradient text-8xl md:text-9xl font-bold font-[Electrolize]">404</h1>
                <h2 className="text-gradient mt-4 text-4xl md:text-5xl font-bold ">User Not Found!</h2>
                <p className="text-lg md:text-2xl font-medium text-gray-400 mt-3">
                    The user you are looking for does not exist. Please check the username and try again.
                </p>

                <Link
                    href={'/'}
                    className="mx-auto mt-12 flex w-max items-center gap-4 rounded bg-gray-100 px-6 md:px-8 md:text-xl py-1.5 font-bold text-black"
                >
                    <FaHome />
                    <span>Go to Home</span>
                </Link>
            </div>
        </main>
    );
};

export default page;
