import Stats from './Stats';
import Calendar from './Calendar';
import PopularProjects from './PopularProjects';

import UserInfo from './UserInfo';
import fetchUserInfo from '@/utils/fetchUserInfo';
import fetchUserData from '@/utils/fetchUserData';
import Charts from './Charts';
import ActivityGraph from './ActivityGraph';
import TopContributions from './TopContributions';
import Languages from './Languages';
import RecentActivity from './RecentActivity';
import FollowUp from './FollowUp';
import fetchActivity from '@/utils/fetchActivity';
import { notFound } from 'next/navigation';
import RecentProfiles from '@/models/RecentProfiles';
import connectDb from '@/lib/connectDb';

// meta data
export const generateMetadata = async ({ params: { username } }) => {
    await connectDb();
    const userInfo = await fetchUserInfo(username);
    return {
        title: `${username} - GitHub Profile`,
        description: `${username} is a developer on GitHub with ${userInfo.followers.totalCount} followers and ${userInfo.repositories.totalCount} repositories.`,
        openGraph: {
            images: userInfo.avatarUrl,
        },
    };
};

const page = async ({ params: { username } }) => {
    await connectDb();
    console.log('Username:', username);

    const userInfo = await fetchUserInfo(username);
    // console.log(userInfo);
    if (!userInfo) return notFound();

    await RecentProfiles.findOneAndUpdate(
        { username },
        {
            name: userInfo.name ?? userInfo.username,
            username: userInfo.username,
            following: userInfo.following.totalCount,
            followers: userInfo.followers.totalCount,
            avatarUrl: userInfo.avatarUrl,
        },
        { upsert: true, new: true, setDefaultsOnInsert: true },
    );

    const userActivity = await fetchActivity(username);

    const {
        languagesSize,
        contributionCalendar,
        commitsPerRepo,
        starsPerRepo,
        reposPerLanguages,
        starsPerLanguages,
        popularRepositories,
        userStats,
        topContributions,
        followUp,
    } = await fetchUserData(username);

    return (
        <main className="mx-auto max-w-screen-xl space-y-8 px-3 pb-10 pt-16 md:space-y-16">
            <UserInfo username={username} {...userInfo} />
            <Stats stats={userStats} />
            <Languages languages={languagesSize} />
            <PopularProjects projects={popularRepositories} />
            <TopContributions contributions={topContributions} />

            <Charts
                commitsPerRepo={commitsPerRepo}
                reposPerLanguages={reposPerLanguages}
                starsPerRepo={starsPerRepo}
                starsPerLanguages={starsPerLanguages}
            />
            <FollowUp follwoup={followUp} />
            <ActivityGraph activity={contributionCalendar} />
            <Calendar contributions={contributionCalendar} />
            <RecentActivity activity={userActivity} />
        </main>
    );
};

export default page;
