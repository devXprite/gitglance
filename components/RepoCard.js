import { VscRepo } from 'react-icons/vsc';
import { GoRepoForked } from 'react-icons/go';
import { GoIssueOpened } from 'react-icons/go';
import { FaRegStar } from 'react-icons/fa';
import { FaCodePullRequest } from 'react-icons/fa6';

const RepoCard = props => {
    return (
        <a href={props.url} target='_blank' className="box flex flex-col px-4 py-3 text-left">
            <h3 className="flex items-center gap-2 md:text-lg font-bold ">
                <VscRepo /> {props.name}
            </h3>
            <p className="mb-3 mt-2 line-clamp-3 text-xs md:text-sm font-medium text-gray-400">
                {props.description || 'No description'}
            </p>

            <div className="mt-auto flex items-center justify-between gap-4 text-xs md:text-sm font-medium md:justify-start">
                <p className="flex items-center gap-2 text-gray-300">
                    <span
                        className="size-3 rounded-full"
                        style={{
                            backgroundColor: props.primaryLanguage?.color || '#ccc',
                        }}
                    ></span>
                    <span>{props.primaryLanguage?.name || 'Unknown'}</span>
                </p>
                <p className="flex items-center gap-1">
                    <FaRegStar /> {props.stargazerCount}
                </p>
                <p className="flex items-center gap-1">
                    <GoRepoForked /> {props.forkCount}
                </p>
                <p className="hidden items-center gap-1 md:flex">
                    <GoIssueOpened /> {props.issues.totalCount}
                </p>
                <p className="flex items-center gap-1">
                    <FaCodePullRequest /> {props.pullRequests.totalCount}
                </p>
            </div>
        </a>
    );
};

export default RepoCard;
