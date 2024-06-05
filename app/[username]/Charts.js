'use client';

import GridContainer from '@/components/GridContainer';
import { Doughnut } from 'react-chartjs-2';

const borderColor = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
];

// const borderColor = []
// for (let i = 30; i <= 100; i += 5) borderColor.push(`hsla(0, 0%, ${i}%, 1)`);

const Charts = ({ commitsPerRepo, starsPerRepo, reposPerLanguages, starsPerLanguages }) => {
    return (
        <GridContainer name="Charts" className={'flex flex-row flex-wrap justify-evenly gap-0 gap-y-6 px-2 md:gap-8 md:px-6'}>
            <div className="">
                <Doughnut
                    title="Commits per Repo"
                    options={{
                        plugins: { title: { text: 'Commits per Repo' } },
                    }}
                    data={{
                        labels: Object.keys(commitsPerRepo),
                        datasets: [
                            {
                                label: 'Commits',
                                data: Object.values(commitsPerRepo),
                                borderColor: borderColor,
                            },
                        ],
                    }}
                />
            </div>

            <div className="">
                <Doughnut
                    title="Stars per Repo"
                    options={{ plugins: { title: { text: 'Stars per Repo' } } }}
                    data={{
                        labels: Object.keys(starsPerRepo),
                        datasets: [
                            {
                                label: 'Stars',
                                data: Object.values(starsPerRepo),
                                borderColor: borderColor,
                            },
                        ],
                    }}
                />
            </div>

            <div className="">
                <Doughnut
                    title="Repos Per Language"
                    options={{ plugins: { title: { text: 'Repos Per Language' } } }}
                    data={{
                        labels: Object.keys(reposPerLanguages),
                        datasets: [
                            {
                                label: 'Repo',
                                data: Object.values(reposPerLanguages),
                                borderColor: borderColor,
                            },
                        ],
                    }}
                />
            </div>

            <div className="">
                <Doughnut
                    title="Stars Per Language"
                    options={{ plugins: { title: { text: 'Stars Per Language' } } }}
                    data={{
                        labels: Object.keys(starsPerLanguages),
                        datasets: [
                            {
                                label: 'Stars',
                                data: Object.values(starsPerLanguages),
                                borderColor: borderColor,
                            },
                        ],
                    }}
                />
            </div>
        </GridContainer>
    );
};

export default Charts;
