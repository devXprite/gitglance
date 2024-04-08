'use client';

import GridContainer from '@/components/GridContainer';
import { Bar, Line } from 'react-chartjs-2';

const graphConfig = {
    hoverBackgroundColor: 'rgba(256, 256, 256, 0.8)',
    borderColor: 'rgba(256, 256, 256, 0.6)',
    borderWidth: 2,
    label: 'Commits',
    tension: 0.3,
    fill: true,
    backgroundColor: 'rgba(256, 256, 256, 0.1)',
    backgroundColor: context => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 250);
        gradient.addColorStop(0, 'rgba(256, 256, 256,0.4)');
        gradient.addColorStop(1, 'rgba(256, 256, 256,0)');
        return gradient;
    },
};

const graphOptions = {
    maintainAspectRatio: false,
    interaction: {
        mode: 'index',
        intersect: false,
    },
};

const ActivityGraph = ({ activity }) => {
    const monthlyActivity = activity.reduce((acc, curr) => {
        const month = new Date(curr.date).toLocaleString('default', { month: 'short', year: '2-digit' });
        if (!acc[month]) acc[month] = 0;
        acc[month] += curr.contributionCount;
        return acc;
    }, []);

    const weekDaysActivity = activity.reduce((acc, curr) => {
        const day = new Date(curr.date).toLocaleString('default', { weekday: 'long' });
        if (!acc[day]) acc[day] = 0;
        acc[day] += curr.contributionCount;
        return acc;
    }, []);

    // last 30 days
    const lastMonthActivity = activity.slice(-30).reduce((acc, curr) => {
        const day = new Date(curr.date).toLocaleString('default', { month: 'short', day: '2-digit' });
        if (!acc[day]) acc[day] = 0;
        acc[day] += curr.contributionCount;
        return acc;
    }, []);

    return (
        <GridContainer
            name="Activity Graph"
            className={'grid-cols-1 gap-x-10 md:grid-cols-2 [&>div]:h-60 [&>div]:md:h-72'}
        >
            <div>
                <Line
                    options={{
                        plugins: {
                            title: {
                                text: 'Monthly Activity (1 year)',
                            },
                        },
                        ...graphOptions,
                    }}
                    data={{
                        labels: Object.keys(monthlyActivity),
                        datasets: [
                            {
                                data: Object.values(monthlyActivity),
                                ...graphConfig,
                            },
                        ],
                    }}
                />
            </div>
            <div>
                <Line
                    title="Activity Graph"
                    options={{
                        ...graphOptions,

                        plugins: {
                            title: {
                                text: 'Weekly Frequency (1 year)',
                            },
                        },
                    }}
                    data={{
                        labels: Object.keys(weekDaysActivity),
                        datasets: [
                            {
                                data: Object.values(weekDaysActivity),
                                ...graphConfig,
                            },
                        ],
                    }}
                />
            </div>
            <div className="col-span-full md:mt-8">
                <Line
                    options={{
                        ...graphOptions,
                        plugins: {
                            title: {
                                text: 'Last 30 days',
                            },
                        },
                    }}
                    data={{
                        labels: Object.keys(lastMonthActivity),
                        datasets: [
                            {
                                data: Object.values(lastMonthActivity),
                                ...graphConfig,
                            },
                        ],
                    }}
                />
            </div>
        </GridContainer>
    );
};

export default ActivityGraph;
