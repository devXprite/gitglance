import connectDb from '@/lib/connectDb';
import RecentProfiles from '@/models/RecentProfiles';

export default async function sitemap() {
    await connectDb();
    const recenetProfiles = await RecentProfiles.find({}).sort().limit(1000);
    const baseUrl = process.env.BASE_URL;

    const sitemapProfils = recenetProfiles.map(profile => ({
        url: `${baseUrl}/${profile.username}`,
        changefreq: 'weekly',
        priority: 0.9,
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
