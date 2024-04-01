'use client';

import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    Tooltip,
    Legend,
    Title,
    Filler,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    RadialLinearScale,
} from 'chart.js';
ChartJS.register(
    ArcElement,
    LineElement,
    RadialLinearScale,
    Filler,
    PointElement,
    Tooltip,
    Legend,
    Title,
    CategoryScale,
    LinearScale,
    BarElement,
);

// ChartJS.defaults.plugins.colors.forceOverride = true;

ChartJS.defaults.plugins.legend.position = 'bottom';
ChartJS.defaults.plugins.legend.align = 'center';
ChartJS.defaults.plugins.legend.display = false;

ChartJS.defaults.plugins.legend.labels.color = 'white';

ChartJS.defaults.plugins.legend.labels.pointStyle = 'rect';
ChartJS.defaults.plugins.legend.labels.usePointStyle = true;

ChartJS.defaults.plugins.title.display = true;
ChartJS.defaults.plugins.title.color = '#ccc';

ChartJS.defaults.scale.grid.color = 'rgba(256, 256, 256, 0.07)';

ChartJS.defaults.backgroundColor = [
    'rgba(255, 99, 132, 0.5)',
    'rgba(255, 159, 64, 0.5)',
    'rgba(255, 205, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(153, 102, 255, 0.5)',
    'rgba(201, 203, 207, 0.5)',
];

// const backgroundColor = [];
// for (let i = 30; i <= 100; i += 7) backgroundColor.push(`hsla(0, 0%, ${i}%, 0.6)`);
// ChartJS.defaults.backgroundColor = backgroundColor;

const ChartInit = () => {
    return <div></div>;
};

export default ChartInit;
