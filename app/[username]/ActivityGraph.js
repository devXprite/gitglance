'use client';

import GridContainer from '@/components/GridContainer';
import { Bar } from 'react-chartjs-2';

const graphConfig = {
    backgroundColor: 'rgba(256, 256, 256, 0.3)',
    borderColor: 'rgba(256, 256, 256, 0.6)',
    hoverBackgroundColor: 'rgba(256, 256, 256, 0.8)',
    borderWidth: 1,
    label: 'Commits',
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

    return (
        <GridContainer name="Activity Graph" className={'grid-cols-1 gap-x-10 md:grid-cols-2'}>
            <div className="">
                <Bar
                    options={{
                        plugins: {
                            title: {
                                text: 'Monthly Activity (1 year)',
                            },
                        },
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
            <div className="">
                <Bar
                    title="Activity Graph"
                    options={{
                        plugins: {
                            title: {
                                text: 'Weekly Activity (1 Year)',
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
        </GridContainer>
    );
};

export default ActivityGraph;
