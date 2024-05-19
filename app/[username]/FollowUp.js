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
        <GridContainer name="Follow Up" className={'flex flex-row flex-wrap justify-evenly gap-0 gap-y-6 px-2 md:gap-8 md:px-6'}>
            <div>
                <Doughnut
                    options={{ plugins: { title: { text: `Issues by ${login}` } } }}
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
                    options={{ plugins: { title: { text: `PR by ${login}` } } }}
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
                    options={{ plugins: { title: { text: `Issues on ${login}'s repos` } } }}
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
                    options={{ plugins: { title: { text: `PRs on ${login}'s repos` } } }}
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
