const Resume = ({ userInfo }) => {
    return (
        <section id="resume">
            <div className="flex items-start justify-between">
                <div className="flex h-full flex-col">
                    <h2 className="text-3xl font-bold">{userInfo.name}</h2>
                    <h4 className="mb-4 text-lg text-gray-400">@{userInfo.username}</h4>

                    <p className="mt-auto text-lg text-gray-300">{userInfo.bio}</p>
                </div>
                <img
                    className="size-40 rounded-full border-[4px] border-gray-600"
                    src={userInfo.avatarUrl}
                    alt={userInfo.name}
                />
            </div>

            <div className="">
                <h3>Github States:</h3>

                <div className="mt-6 grid grid-cols-2 gap-3">
                    <p>
                        Followers: <span>{userInfo.followers.totalCount}</span>{' '}
                    </p>
                    <p>
                        Followers: <span>{userInfo.followers.totalCount}</span>{' '}
                    </p>
                    <p>
                        Followers: <span>{userInfo.followers.totalCount}</span>{' '}
                    </p>
                    <p>
                        Followers: <span>{userInfo.followers.totalCount}</span>{' '}
                    </p>
                    <p>
                        Followers: <span>{userInfo.followers.totalCount}</span>{' '}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Resume;
