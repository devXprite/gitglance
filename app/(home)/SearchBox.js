import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ formAction }) => {
    return (
        <form
            action={formAction}
            className="group mx-auto mt-20 md:mt-28 flex max-w-screen-sm items-center gap-3 overflow-hidden rounded-md border-2 border-gray-600 focus-within:border-gray-300"
        >
            <input
                className="block flex-1 bg-transparent pl-4 text-lg outline-none"
                name="username"
                type="text"
                placeholder="Enter your github Username"
            />

            <button className="w-14 md:w-20 bg-gray-700/50 px-5 py-2.5 hover:bg-gray-600 group-focus-within:bg-gray-600 group-focus-within:text-white  ">
                <FaSearch className="mx-auto text-xl md:text-2xl" />
            </button>
        </form>
    );
};

export default SearchBox;
