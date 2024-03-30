import fetchUserInfo from '@/utils/fetchUserInfo';
import UserInfo from './UserInfo';
import fetchStats from '@/utils/fetchStats';
import Stats from './Stats';
import Calendar from './Calendar';
import fetchCalendar from '@/utils/fetchCalendar';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const page = async ({ params: { username } }) => {
    console.log('Username:', username);

    const userInfo = await fetchUserInfo(username);
    const userStats = await fetchStats(username);
    const userCalendar = await fetchCalendar(username);

    return (
        <main className="mx-auto max-w-screen-xl space-y-8 md:space-y-16 px-2 pb-10 pt-16">
            <UserInfo {...userInfo} />
            <Stats {...userStats} />
            <Calendar contributions={userCalendar} />
        </main>
    );
};

export default page;
