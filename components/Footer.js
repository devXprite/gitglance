const Footer = () => {
    return (
        <footer className=" mt-10 border-t border-gray-700 bg-gray-800 p-2.5 text-center text-sm text-gray-300 backdrop-brightness-150 md:text-base [&_a]:text-cyan-400 hover:[&_a]:underline">
            <div className="mx-auto max-w-screen-lg">
                Git Glance is built with <a href="https://nextjs.org">Nextjs v14.1.0</a> &{' '}
                <a href="https://tailwindcss.com/">TailwindCSS</a> By{' '}
                <a href="http://github.com/devXprite/">devxprite</a>. Source is on{' '}
                <a href="https://github.com/devXprite/gitglance">Github</a>
            </div>
        </footer>
    );
};

export default Footer;
