import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ formAction }) => {
    return (
        <form
            action={formAction}
            className="group mx-auto flex items-center gap-3 overflow-hidden rounded-md border-2 border-gray-500 bg-gray-900 focus-within:border-gray-300"
        >
            <input
                className="block flex-1 bg-transparent pl-4 text-lg md:text-xl outline-none"
                name="username"
                type="text"
                placeholder="Enter github Username"
            />

            <button className="w-14 bg-gray-700 px-5 py-3 md:py-3.5 hover:bg-gray-600 group-focus-within:bg-gray-600 group-focus-within:text-white md:w-20  ">
                <FaSearch className="mx-auto text-xl md:text-2xl" />
            </button>
        </form>
    );
};

export default SearchBox;
