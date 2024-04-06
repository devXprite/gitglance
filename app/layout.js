import './globals.scss';
import GithubCorner from '@/components/GithubCorner';
import ParticlesJs from '@/components/ParticlesJs';
import ChartInit from '@/components/ChartInit';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
    title: 'GitHub Profile Visualizer',
    description:
        'Gain valuable insights into your GitHub profile effortlessly. Explore your coding journey with intuitive visualizations and unlock a deeper understanding of your contributions, repositories, and activity. Dive into your GitHub universe with ease and clarity.',
    colorScheme: 'dark',
    openGraph: {
        title: 'Git Glance',
        images: `${process.env.BASE_URL}/banner.png`,
        icons: {
            icon: '/favicon.ico',
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <GoogleTagManager gtmId="GTM-K3M9GGRW" />
            <head>
                <meta name="color-scheme" content="dark" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </head>

            <body>
                <ChartInit />
                <ParticlesJs />
                <GithubCorner />
                {children}
            </body>
        </html>
    );
}
