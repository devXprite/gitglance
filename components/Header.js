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
                <a
                    href="https://www.producthunt.com/posts/gitglance?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-gitglance"
                    target="_blank"
                    className='ml-auto'
                >
                    <img
                        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=450495&theme=neutral"
                        alt="GitGlance - Tool&#0032;for&#0032;visualizing&#0032;a&#0032;developer&#0039;s&#0032;GitHub&#0032;profile | Product Hunt"
                        // style="width: 250px; height: 54px;"
                        // width="250"
                        // height="54"
                        className="h-9"
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;
