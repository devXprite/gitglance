// 'use client';

import GridContainer from '@/components/GridContainer';
import { IoGitPullRequestSharp, IoGitMergeSharp } from 'react-icons/io5';
import { RiGitClosePullRequestLine } from 'react-icons/ri';

const PrIcon = ({ status }) => {
    if (status === 'MERGED') {
        return (
            <div className="rounded bg-purple-500 p-[3px] text-white text-sm md:text-base">
                <IoGitMergeSharp />
            </div>
        );
    }

    if (status === 'CLOSED') {
        return (
            <div className="rounded bg-red-500 p-[3px] text-white text-sm md:text-base">
                <RiGitClosePullRequestLine />
            </div>
        );
    }

    return (
        <div className="rounded bg-green-600 p-[3px] text-white text-sm md:text-base">
            <IoGitPullRequestSharp />
        </div>
    );
};

const TopContributions = ({ contributions }) => {
    return (
        <GridContainer
            name="Top Contributions"
            description="Top contributions made by the user in the last year."
            className={'grid-cols-1 md:grid-cols-3'}
        >
            {contributions.map(({ repository, contributions }, i) => (
                <div key={i} className="box flex flex-col gap-5 px-4 py-3 text-left">
                    <h3 className="flex items-center gap-2 md:text-lg font-bold">
                        <img className="mr-1 size-10 md:size-11 rounded-md" src={repository.owner.avatarUrl} />

                        <div>
                            <p className='truncate'>{repository.name}</p>
                            <a
                                href={repository.owner.url}
                                target="_blank"
                                className="-mt-1 block text-sm text-gray-400 hover:underline"
                            >
                                @{repository.owner.login}
                            </a>
                        </div>

                        <p className="ml-auto rounded-md border border-gray-600 bg-gray-700 p-1.5">
                            {contributions.totalCount < 10 ? `0${contributions.totalCount}` : contributions.totalCount}
                        </p>
                    </h3>

                    <ul className="space-y-1">
                        {contributions.nodes.splice(0, 3).map(({ pullRequest }, i) => (
                            <div key={i} className="flex items-center justify-between gap-2 ">
                                <a href={pullRequest.url} target="_blank" className="line-clamp-1 text-sm text-gray-300 md:text-base font-medium hover:underline">
                                    {pullRequest.title}
                                </a>
                                <PrIcon status={pullRequest.state} />
                            </div>
                        ))}
                    </ul>
                </div>
            ))}
        </GridContainer>
    );
};

export default TopContributions;
