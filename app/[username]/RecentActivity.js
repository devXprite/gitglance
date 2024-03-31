// 'use client';

import GridContainer from '@/components/GridContainer';
import { IoGitPullRequestSharp, IoGitMergeSharp } from 'react-icons/io5';
import { RiGitClosePullRequestLine } from 'react-icons/ri';

const PrIcon = ({ status }) => {
    if (status === 'MERGED') {
        return (
            <div className="rounded bg-purple-500 p-[3px] text-white">
                <IoGitMergeSharp />
            </div>
        );
    }

    if (status === 'CLOSED') {
        return (
            <div className="rounded bg-red-500 p-[3px] text-white">
                <RiGitClosePullRequestLine />
            </div>
        );
    }

    return (
        <div className="rounded bg-green-600 p-[3px] text-white">
            <IoGitPullRequestSharp />
        </div>
    );
};

const RecentActivity = ({ activity }) => {
    return (
        <GridContainer name="Recent Activity" className={'grid-cols-1 md:grid-cols-3'}>
                    
        </GridContainer>
    );
};

export default RecentActivity;
