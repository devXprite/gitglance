import connectDb from '@/lib/connectDb';
import RecentProfiles from '@/models/RecentProfiles';

export default async function sitemap() {
    await connectDb();
    const recenetProfiles = await RecentProfiles.find({}).sort().limit(250);
    const baseUrl = process.env.BASE_URL;

    const sitemapProfils = recenetProfiles.map(profile => ({
        url: `${baseUrl}/${profile.username}`,
        changefreq: 'monthly',
        priority: 0.7,
    }));

    const sitemap = [
        {
            url: baseUrl,
            changefreq: 'weekly',
            priority: 1,
        },
        ...sitemapProfils
    ]

    return sitemap;
}
