const UserInfo = props => {
    return (
        <>
            <div className="mx-auto flex max-w-screen-md flex-col items-center justify-around gap-4 md:flex-row pb-6 md:gap-20">
                <img
                    className="size-36 md:size-44 rounded-full border-[4px] border-gray-600"
                    src={props.avatarUrl}
                    alt={props.name}
                />

                <div className="flex h-full flex-col text-center md:text-left">
                    <h2 className="text-gradient text-4xl font-bold md:text-6xl">{props.name}</h2>
                    <h4 className="mb-2 text-xl text-gray-400 -mt-1.5 md:mt-0 md:mb-4 md:text-3xl">@{props.username}</h4>

                    <p className="mt-auto text-gray-300">{props.bio}</p>
                </div>
            </div>
        </>
    );
};

export default UserInfo;
