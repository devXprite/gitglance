import connectDb from '@/lib/connectDb';
import RecentProfiles from '@/models/RecentProfiles';

export default async function sitemap() {
    await connectDb();
    const recenetProfiles = await RecentProfiles.find({}).sort().limit(250);
    const baseUrl = 'https://git-glance.vercel.app';

    const sitemap = recenetProfiles.map(profile => ({
        url: `${baseUrl}/${profile.username}`,
        changefreq: 'monthly',
        priority: 0.7,
    }));

    return sitemap;
}
