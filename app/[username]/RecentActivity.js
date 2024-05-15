import GridContainer from '@/components/GridContainer';
import { FaRegStar, FaCodeBranch } from 'react-icons/fa';
import { FaCodeCommit, FaCodeFork } from 'react-icons/fa6';
import { FaTag } from 'react-icons/fa6';
import { VscRepo } from 'react-icons/vsc';
import { GoIssueOpened } from 'react-icons/go';

import { IoGitPullRequestSharp } from 'react-icons/io5';

const Activity = ({ event: { type, action, repo, size, issue, commits, branch, ref, pull_request } }) => {
    switch (type) {
        case 'star': {
            return (
                <div>
                    <FaRegStar className="mr-2 inline-block text-white uppercase" />
                    {action} repository <a href={repo.url}>{repo.name}</a>
                </div>
            );
        }

        case 'create': {
            return (
                <div>
                    {ref.type == 'branch' ?
                        <FaCodeBranch className="mr-2 inline-block text-white" />
                    :   <FaTag className="mr-2 inline-block text-white" />}
                    Created New {ref.type} on <a href={repo.url}>{repo.name} </a>
                    {ref.type == 'branch' && (
                        <>
                            branch
                            <span className="rounded bg-gray-700 px-1 py-0.5 font-[monospace] text-sm">{ref.name}</span>
                        </>
                    )}
                </div>
            );
        }

        case 'public': {
            return (
                <div>
                    <VscRepo className="mr-2 inline-block text-white" />
                    Made <a href={repo.url}>{repo.name}</a> public
                </div>
            );
        }

        case 'fork': {
            return (
                <div>
                    <FaCodeFork className="mr-2 inline-block text-white" />
                    Forked <a href={repo.link}>{repo.name}</a> to <a href={repo.url}>{repo.forked}</a>
                </div>
            );
        }

        case 'pull_request': {
            return (
                <div>
                    <IoGitPullRequestSharp className="mr-2 inline-block text-white" />
                    {action} pull request <a href={pull_request.url}>{pull_request.title}</a> on{' '}
                    <a href={repo.url}>{repo.name}</a>
                </div>
            );
        }

        case 'issue': {
            return (
                <div>
                    <GoIssueOpened className="mr-2 inline-block text-white" />
                    {action} issue <a href={issue.url}>{issue.title}</a> on <a href={repo.url}>{repo.name}</a>
                </div>
            );
        }

        case 'push': {
            return (
                <div>
                    <FaCodeCommit className="mr-2 inline-block text-white" />
                    Pushed {size} commit(s) to <a href={repo.url}>{repo.name}</a> on branch{' '}
                    <span className="rounded bg-gray-700 px-1 py-0.5 font-[monospace] text-sm">{branch}</span>
                    <ol className="mt-1 list-inside list-disc text-xs md:text-sm text-gray-400">
                        {commits.map((commit, i) => (
                            <li key={i}>{commit.message}</li>
                        ))}
                    </ol>
                </div>
            );
        }
    }
};

const RecentActivity = ({ activity }) => {
    return (
        <GridContainer name="Recent Activity" className={'grid-cols-1 md:grid-cols-1'}>
            {activity.map((event, i) => {
                return (
                    <div key={i} className="box overflow-hidden text-left hover:scale-100">
                        <p className="text-sm text-gray-400">{new Date(event.timestamp).toLocaleString('en-US', {
                                timeZone: 'Asia/Kolkata',
                            })}</p>

                        <div className="mt-2.5 font-medium text-gray-200 text-sm md:text-lg [&_a]:text-cyan-500 [&_a]:hover:underline">
                            <Activity event={event} />
                        </div>
                    </div>
                );
            })}
        </GridContainer>
    );
};

export default RecentActivity;
