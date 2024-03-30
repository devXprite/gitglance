'use client';

import GridContainer from '@/components/GridContainer';
import { Doughnut } from 'react-chartjs-2';

const Charts = ({ commitsPerRepo, starsPerRepo, reposPerLanguages, starsPerLanguages }) => {
    return (
        <GridContainer name="Charts" className={'grid-cols-2 gap-0 gap-y-6 md:grid-cols-4 md:gap-8 '}>
            <div className="">
                <Doughnut
                    title="Commits per Repo"
                    options={{ plugins: { title: { text: 'Commits per Repo' } } }}
                    data={{
                        labels: Object.keys(commitsPerRepo),
                        datasets: [
                            {
                                label: 'Commits',
                                data: Object.values(commitsPerRepo),
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
                            },
                        ],
                    }}
                />
            </div>
        </GridContainer>
    );
};

export default Charts;
