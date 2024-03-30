'use client';

import GridContainer from '@/components/GridContainer';
import CountUp from 'react-countup';

const Stats = props => {
    const stats = {
        Followers: props.followers.totalCount,
        Following: props.following.totalCount,
        repositories: props.repositories.totalCount,
        organizations: props.organizations.totalCount,
        gists: props.gists.totalCount,
        pullRequests: props.pullRequests.totalCount,
        issues: props.issues.totalCount,
        commits: props.contributionsCollection.totalCommitContributions,
        issues: props.issues.totalCount,
        issuesx: props.issues.totalCount,
        ContributedTo: props.repositoriesContributedTo.totalCount,
    };

    return (
        <GridContainer name="GitHub Stats">
            {Object.keys(stats).map(key => (
                <div key={key} className="small-box">
                    <p className="font-[Electrolize] text-2xl font-bold">
                        <CountUp start={0} end={stats[key]} />
                    </p>
                    <h5 className="-mt-1 text-gray-400">{key}</h5>
                </div>
            ))}
        </GridContainer>
    );
};

export default Stats;
