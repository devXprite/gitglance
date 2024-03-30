import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

const page = () => {
    return (
        <main className="grid min-h-screen place-items-center text-center">
            <div>
                <h1 className="text-gradient text-9xl font-bold">404</h1>
                <h2 className="text-gradient mt-4 text-4xl font-bold">Page Not Found!</h2>

                <Link href={'/'} className="mx-auto w-max mt-12 flex items-center gap-4 bg-gray-100 px-6 py-1.5 rounded text-black font-bold">
                    <FaHome />
                    <span>Go to Home</span>
                </Link>
            </div>
        </main>
    );
};

export default page;
