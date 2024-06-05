import githubGraphql from '@/utils/githubGraphql';
import { unstable_cache } from 'next/cache';
import Link from 'next/link';
import { FaGithub, FaStar } from 'react-icons/fa';

const getStars = unstable_cache(
    async () => {
        try {
            const response = await githubGraphql({
                query: `
            query {
                repository(owner: "devxprite", name: "gitglance") {
                    stargazerCount
                }
            }
        `,
            });
            return response?.repository?.stargazerCount || 50;
        } catch (error) {
            console.log(error);
            return 50;
        }
    },
    ['stars'],
    {
        tags: ['stars'],
        revalidate: 60 * 60 * 1,
    },
);

const Header = async () => {
    const stars = await getStars();

    return (
        <header className=" border-gray-700 bg-gray-900 px-3 py-3">
            <div className="mx-auto flex max-w-screen-xl items-center">
                <Link href="/" className="text-gradient text-xl font-bold">
                    Git Glance
                </Link>

                <a
                    href="https://github.com/devxprite/gitglance"
                    target="_blank"
                    className="ml-auto flex items-center overflow-hidden rounded bg-gray-50  text-sm font-bold text-gray-700 md:text-base "
                >
                    <span className="flex items-center gap-2 px-2 py-1 md:px-2.5 md:py-1.5">
                        <FaStar className="md:text-xl" />
                        <span>Star Us</span>
                    </span>
                    <span className="bg-gray-200 px-2 py-1 md:px-2.5 md:py-1.5">{stars}</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
