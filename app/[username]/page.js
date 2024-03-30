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


const page = async ({ params: { username } }) => {
    console.log('Username:', username);

    const userInfo = await fetchUserInfo(username);
    const userStats = await fetchStats(username);
    const userCalendar = await fetchCalendar(username);
    const popularProjects = await fetchPopularProjects(username);
    const {languages} = await fetchAdditionalData(username);

    

    return (
        <main className="mx-auto max-w-screen-xl space-y-8 px-2 pb-10 pt-16 md:space-y-16">
            <UserInfo {...userInfo} />
            <Stats {...userStats} />
            <Languages languages={languages} />
            <PopularProjects projects={popularProjects} />
            <Calendar contributions={userCalendar} />
        </main>
    );
};

export default page;
