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

const page = async ({ params: { username } }) => {
    console.log('Username:', username);

    const userInfo = await fetchUserInfo(username);
    const userActivity = await fetchActivity(username);
    
    // TO DO: Add Social Profiles

    
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
            <UserInfo {...userInfo} />
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
