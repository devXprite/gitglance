import { redirect } from 'next/navigation';
import SearchBox from './SearchBox';
import RecentProfiles from '@/models/RecentProfiles';
import connectDb from '@/lib/connectDb';
import Link from 'next/link';
import GridContainer from '@/components/GridContainer';
import { unstable_noStore as noStore } from 'next/cache';
import Header from '@/components/Header';

export default async function Home() {
    noStore();
    let recenetProfiles = [];

    try {
        await connectDb();
        recenetProfiles = await RecentProfiles.find({ }).sort({ updatedAt: 'desc' }).limit(8);
    } catch (error) {
        console.log('An error occurred in Home Page while fetching recent profiles');
    }

    const formAction = async formData => {
        'use server';
        const username = formData.get('username');
        redirect(`/${username}`);
    };

    return (
        <>
            <Header />

            <main className="px-4">
                <div className="mx-auto max-w-screen-md pt-[10vh] text-center">
                    <h1 className="text-gradient text-4xl font-bold md:text-7xl">Git Glance</h1>
                    <p className="text-gradient mb-16 mt-2 text-xl font-medium md:text-3xl ">
                        Visualize Your GitHub Profile
                    </p>

                    <SearchBox formAction={formAction} />
                </div>

                {recenetProfiles.length > 0 && (
                    <div className="mx-auto mt-32 max-w-screen-xl md:mt-36">
                        <GridContainer
                            className={'grid-cols-1 gap-3 md:grid-cols-4'}
                            name={'Recent Profiles'}
                            description={'Profiles that have been viewed recently'}
                        >
                            {recenetProfiles.map(profile => (
                                <Link
                                    key={profile._id}
                                    href={`/${profile.username}`}
                                    prefetch={false}
                                    className="box flex items-center gap-3 text-left md:gap-5"
                                >
                                    <img
                                        src={profile.avatarUrl}
                                        alt={profile.username}
                                        className="size-10 grow-0 rounded-full md:size-12"
                                    />
                                    <div>
                                        <p className="text-base font-semibold md:text-lg">
                                            {profile.name ?? profile.username}
                                        </p>
                                        <p className="-mt-1 text-sm text-gray-400 md:text-base">@{profile.username}</p>
                                    </div>
                                </Link>
                            ))}
                        </GridContainer>
                    </div>
                )}
            </main>
        </>
    );
}
