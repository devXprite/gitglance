'use client';

import GridContainer from '@/components/GridContainer';
import { Bar, Doughnut, Line, Radar } from 'react-chartjs-2';

const backgroundColor = [
    'rgba(153, 102, 255, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(201, 203, 207, 0.5)',
    'rgba(255, 99, 132, 0.5)',
];

const borderColor = [
    'rgba(153, 102, 255, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(201, 203, 207, 0.8)',
    'rgba(255, 99, 132, 0.8)',
];

const chartConfig = {
    backgroundColor,
    borderColor,
};

const FollowUp = ({ follwoup }) => {
    const { issues_by_user, pr_by_user, issues_on_user, pr_on_user, login } = follwoup;

    return (
        <GridContainer name="Follow Up" className={'grid-cols-2 gap-x-10 md:grid-cols-4'}>
            <div>
                <Doughnut
                    options={{ plugins: { title: { text: `Issues opened by ${login}` } } }}
                    data={{
                        labels: Object.keys(issues_by_user),
                        datasets: [
                            {
                                data: Object.values(issues_by_user),
                                ...chartConfig,
                            },
                        ],
                    }}
                />
            </div>

            <div>
                <Doughnut
                    options={{ plugins: { title: { text: `Pull Requests by ${login}` } } }}
                    data={{
                        labels: Object.keys(pr_by_user),
                        datasets: [
                            {
                                data: Object.values(pr_by_user),
                                ...chartConfig,
                            },
                        ],
                    }}
                />
            </div>

            <div>
                <Doughnut
                    options={{ plugins: { title: { text: `Issues opened on ${login}'s repos` } } }}
                    data={{
                        labels: Object.keys(issues_on_user),
                        datasets: [
                            {
                                data: Object.values(issues_on_user),
                                ...chartConfig,
                            },
                        ],
                    }}
                />
            </div>

            <div>
                <Doughnut
                    options={{ plugins: { title: { text: `Pull Requests opened on ${login}'s repos` } } }}
                    data={{
                        labels: Object.keys(pr_on_user),
                        datasets: [
                            {
                                data: Object.values(pr_on_user),
                                ...chartConfig,
                            },
                        ],
                    }}
                />
            </div>
        </GridContainer>
    );
};

export default FollowUp;
