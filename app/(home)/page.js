import { redirect } from 'next/navigation';
import SearchBox from './SearchBox';

export default function Home() {
    const formAction = async formData => {
        'use server';
        const username = formData.get('username');
        redirect(`/${username}`);
    };

    return (
        <main className="">
            <div className="mx-auto max-w-screen-md px-4 pt-[15vh] text-center md:pt-[20vh]">
                <h1 className="text-gradient text-5xl font-bold md:text-8xl">GitVio</h1>
                <p className="text-gradient mt-2 text-2xl font-medium md:text-3xl ">
                    Lorem ipsum dolor sit amet consectetur
                </p>

                <SearchBox formAction={formAction} />
            </div>
        </main>
    );
}
