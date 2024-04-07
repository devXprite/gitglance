import Link from 'next/link';

const Header = () => {
    return (
        <header className=" border-gray-700 bg-gray-900 px-3 py-3">
            <div className="mx-auto flex max-w-screen-xl items-center">
                <Link href="/" className="text-gradient text-xl font-bold">
                    Git Glance
                </Link>
                {/* <img
                className="ml-auto h-9"
                 src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=434915&theme=neutral" alt="" /> */}
            </div>
        </header>
    );
};

export default Header;
