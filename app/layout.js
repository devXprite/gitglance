import './globals.scss';
import GithubCorner from '@/components/GithubCorner';
import ParticlesJs from '@/components/ParticlesJs';
import ChartInit from '@/components/ChartInit';
import { GoogleAnalytics } from '@next/third-parties/google';
import Footer from '@/components/Footer';
import RateLimit from '@/components/RateLimit';
import Header from '@/components/Header';

export const metadata = {
    title: 'GitHub Profile Visualizer',
    description:
        'Gain valuable insights into your GitHub profile effortlessly. Explore your coding journey with intuitive visualizations and unlock a deeper understanding of your contributions, repositories, and activity. Dive into your GitHub universe with ease and clarity.',
    openGraph: {
        title: 'Git Glance',
        images: `${process.env.BASE_URL}/banner.png`,
        icons: {
            icon: '/favicon.ico',
        },
    },
};

export default function RootLayout({ children }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'GitGlance',
        url: process.env.BASE_URL,
        alternateName: [
            'GitHub Profile Visualizer',
            'GitHub Profile Analyzer',
            'GitHub Profile Insights',
            'GitHub Profile Stats',
        ],

        '@type': 'SoftwareApplication',
        name: 'GitGlance',
        operatingSystem: 'Web',
        applicationCategory: 'DeveloperApplication',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
    };
    return (
        <html lang="en">
            <GoogleAnalytics gaId="G-C2EK8WWR4Y" />
            <head>
                <meta name="google-site-verification" content="koBxrTJwnDsFGPdjUesKqkWAgmhsZyvWWlDkwv4cOpw" />
                <meta name="color-scheme" content="dark" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            </head>

            <body>
                <ChartInit />
                <ParticlesJs />
                <div className="min-h-[calc(100vh-5rem)]">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
