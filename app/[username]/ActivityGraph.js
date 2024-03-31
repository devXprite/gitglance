'use client';

import GridContainer from '@/components/GridContainer';
import { Bar, Line } from 'react-chartjs-2';

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
        <GridContainer name="Activity Graph" className={'grid-cols-1 md:grid-cols-2 gap-x-10'}>
          

            <div className="">
                <Bar
                    options={{
                        borderColor: 'rgba(256, 256, 256, 1)',
                        plugins: {
                            title:{
                                text: 'Monthly Activity (1 year)',
                            }
                        }
                    }}
                    data={{
                        labels: Object.keys(monthlyActivity),
                        datasets: [
                            {
                                label: 'Commits',
                                data: Object.values(monthlyActivity),

                                backgroundColor: 'rgba(256, 256, 256, 0.4)',
                                borderColor: 'rgba(256, 256, 256, 0.8)',
                                borderWidth: 1,
                            },
                        ],
                    }}
                />
            </div>
            <div className="">
                <Bar
                    title="Activity Graph"
                    options={{
                        borderColor: 'rgba(256, 256, 256, 1)',
                        plugins: {
                            title:{
                                text: 'Weekly Activity (1 Year)',
                            }
                        }
                    }}
                    data={{
                        labels: Object.keys(weekDaysActivity),
                        datasets: [
                            {
                                label: 'Commits',
                                data: Object.values(weekDaysActivity),

                                backgroundColor: 'rgba(256, 256, 256, 0.4)',
                                borderColor: 'rgba(256, 256, 256, 0.8)',
                                borderWidth: 1,
                            },
                        ],
                    }}
                />
            </div>
        </GridContainer>
    );
};

export default ActivityGraph;
