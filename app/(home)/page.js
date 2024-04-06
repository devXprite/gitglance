import { redirect } from 'next/navigation';
import SearchBox from './SearchBox';
import RecentProfiles from '@/models/RecentProfiles';
import connectDb from '@/lib/connectDb';
import Link from 'next/link';

export default async function Home() {
    await connectDb();
    const recenetProfiles = await RecentProfiles.find({}).sort({ updatedAt: 'desc' }).limit(8);

    const formAction = async formData => {
        'use server';
        const username = formData.get('username');
        redirect(`/${username}`);
    };

    return (
        <main className="px-4">
            <div className="mx-auto max-w-screen-md px-4 pt-[15vh] text-center md:pt-[20vh]">
                <h1 className="text-gradient text-5xl font-bold md:text-7xl">Git Glance</h1>
                <p className="text-gradient mb-16 mt-2 text-2xl font-medium md:mb-20 md:text-3xl ">
                    Visualize Your GitHub Profile
                </p>

                <SearchBox formAction={formAction} />
            </div>

            <div className="mx-auto mt-40 max-w-screen-xl text-left">
                <h2 className="text-3xl font-semibold">Recent Profiles</h2>

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
                    {recenetProfiles.map(profile => (
                        <Link
                            key={profile._id}
                            href={`/${profile.username}`}
                            className="box grid grid-cols-[3rem_1fr] items-center gap-5 text-left"
                        >
                            <img
                                src={profile.avatarUrl}
                                // src="https://github.com/devxprite.png"
                                alt={profile.username}
                                className="mx-auto size-12 rounded-full"
                            />
                            <div>
                                <p className="text-lg font-semibold">{profile.name ?? profile.username}</p>
                                <p className="text-gray-400">@{profile.username}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
