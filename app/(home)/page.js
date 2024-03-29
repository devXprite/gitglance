export default function Home() {
    return (
        <main className="grid min-h-screen place-items-center">
            <div className="max-w-screen-md text-center md:-translate-y-1/4">
                <h1 className="text-gradient text-7xl font-bold">Lorem dolor sit</h1>
                <p className="text-gradient mt-2 text-3xl font-medium ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <form className="mx-auto group mt-28 flex max-w-screen-sm items-center gap-3 rounded-full border border-gray-600 px-2 py-2 focus-within:border-2 focus-within:border-gray-400 ">
                    <input
                        className="block flex-1 bg-transparent pl-4 text-xl outline-none"
                        type="text"
                        placeholder="Enter your github Username"
                    />

                    <button className="btn text-xl group-focus-within:bg-gray-700 ">Search</button>
                </form>
            </div>
        </main>
    );
}
