import fetchUserInfo from '@/utils/fetchUserInfo';
import UserInfo from './UserInfo';
import fetchStats from '@/utils/fetchStats';
import Stats from './Stats';
import Calendar from './Calendar';
import fetchCalendar from '@/utils/fetchCalendar';
import fetchLanguages from '@/utils/fetchLanguages';
import Languages from './Languages';
import fetchPopularProjects from '@/utils/fetchPopularProjects';
import PopularProjects from './PopularProjects';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const page = async ({ params: { username } }) => {
    console.log('Username:', username);

    const userInfo = await fetchUserInfo(username);
    const userStats = await fetchStats(username);
    const userCalendar = await fetchCalendar(username);
    const usedLanguages = await fetchLanguages(username);
    const popularProjects = await fetchPopularProjects(username);

    console.log(popularProjects);

    return (
        <main className="mx-auto max-w-screen-xl space-y-8 px-2 pb-10 pt-16 md:space-y-16">
            <UserInfo {...userInfo} />
            <Stats {...userStats} />
            <Languages languages={usedLanguages} />
            <PopularProjects projects={popularProjects} />
            <Calendar contributions={userCalendar} />
        </main>
    );
};

export default page;
