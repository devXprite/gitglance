const UserInfo = props => {
    return (
        <>
            <div className="mx-auto flex max-w-screen-md flex-col items-center justify-around gap-4 pb-6 md:flex-row md:gap-20">
                <div className="relative size-36 rounded-full border-[4px] border-gray-600 md:size-44">
                    <img className="rounded-full" src={props.avatarUrl} alt={props.name} />

                    {/* {props.status && (
                        <div className="absolute bottom-[10%] right-[10%] translate-x-1/2 ">
                            <p
                                className="grid size-10 place-items-center rounded-full border border-gray-600 bg-gray-700 md:size-12"
                                dangerouslySetInnerHTML={{ __html: props.status.emojiHTML }}
                            ></p>
                        </div>
                    )} */}
                </div>

                <div className="flex h-full flex-col text-center md:text-left">
                    <h2 className="text-gradient text-4xl font-bold md:text-6xl">{props.name}</h2>
                    <h4 className="-mt-1.5 mb-2 text-xl text-gray-400 md:mb-4 md:mt-0 md:text-3xl">
                        @{props.username}
                    </h4>

                    <p className="mt-auto text-gray-300">{props.bio}</p>
                </div>
            </div>
        </>
    );
};

export default UserInfo;
