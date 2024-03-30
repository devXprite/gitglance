'use client';

import GridContainer from '@/components/GridContainer';
import CountUp from 'react-countup';

const Stats = props => {
    const stats = {
        Followers: props.followers.totalCount,
        "Stars Earned": props.starsEarn,
        Repositories: props.repositories.totalCount,
        Organizations: props.organizations.totalCount,
        Gists: props.gists.totalCount,
        "Pull Requests": props.pullRequests.totalCount,
        Issues: props.issues.totalCount,
        Commits: props.contributionsCollection.totalCommitContributions,
        Issues: props.issues.totalCount,
        Sponsors: props.sponsors.totalCount,
        "Contributed To": props.repositoriesContributedTo.totalCount,
    };

    return (
        <GridContainer name="GitHub Stats">
            {Object.keys(stats).map(key => (
                <div key={key} className="box">
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
