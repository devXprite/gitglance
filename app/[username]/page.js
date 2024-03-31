import Stats from './Stats';
import Calendar from './Calendar';
import Languages from './Languages';
import PopularProjects from './PopularProjects';

import UserInfo from './UserInfo';
import fetchStats from '@/utils/fetchStats';
import fetchCalendar from '@/utils/fetchCalendar';
import fetchUserInfo from '@/utils/fetchUserInfo';
import fetchAdditionalData from '@/utils/fetchAdditionalData';
import fetchPopularProjects from '@/utils/fetchPopularProjects';
import Charts from './Charts';
import ActivityGraph from './ActivityGraph';

const page = async ({ params: { username } }) => {
    console.log('Username:', username);

    const userInfo = await fetchUserInfo(username);
    const userStats = await fetchStats(username);
    const userCalendar = await fetchCalendar(username);
    const popularProjects = await fetchPopularProjects(username);
    const { languages, commitsPerRepo, starsPerRepo, reposPerLanguages, starsPerLanguages } =
        await fetchAdditionalData(username);

    return (
        <main className="mx-auto max-w-screen-xl space-y-8 px-3 pb-10 pt-16 md:space-y-16">
            <UserInfo {...userInfo} />
            <Stats {...userStats} />
            <Languages languages={languages} />
            <PopularProjects projects={popularProjects} />

            <Charts
                commitsPerRepo={commitsPerRepo}
                reposPerLanguages={reposPerLanguages}
                starsPerRepo={starsPerRepo}
                starsPerLanguages={starsPerLanguages}
            />
            <ActivityGraph activity={userCalendar} />
            <Calendar contributions={userCalendar} />
        </main>
    );
};

export default page;
