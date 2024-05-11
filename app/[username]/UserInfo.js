import { FaCalendar } from 'react-icons/fa';

const UserInfo = props => {
    return (
        <>
            <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-evenly gap-4 pb-6 md:flex-row md:gap-14">
                <div className="relative size-36 flex-none rounded-full border-[4px] border-gray-600 md:size-48">
                    <img className="rounded-full w-full" src={props.avatarUrl} alt={props.name} />

                    {props.status && (
                        <div className="absolute bottom-[10%] right-[10%] translate-x-1/2 ">
                            <p
                                className="grid size-10 place-items-center rounded-full border border-gray-600 bg-gray-800 text-xl md:text-2xl md:size-12"
                                dangerouslySetInnerHTML={{ __html: props.status.emojiHTML }}
                            ></p>
                        </div>
                    )}
                </div>

                <div className="flex h-full flex-col text-center md:text-left">
                    <h2 className="text-gradient text-4xl font-bold md:text-6xl">{props.name || props.username}</h2>
                    <h3 className="-mt-1 text-gray-400  md:mb-1 md:text-3xl">@{props.username}</h3>

                    <p className="mb-3 flex items-center justify-center md:justify-start gap-2">
                        <FaCalendar />
                        <span>
                            Joined on{' '}
                            <span className="font-medium">
                                {new Date(props.createdAt).toLocaleDateString('en-IN', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </span>
                        </span>
                    </p>

                    <p className="mt-auto md:line-clamp-2 md:text-base text-sm text-gray-300 md:max-w-lg">{props.bio}</p>
                </div>
            </div>
        </>
    );
};

export default UserInfo;
