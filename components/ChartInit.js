'use client';

import colors from 'tailwindcss/colors';
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    Tooltip,
    Legend,
    Colors,
    Title,
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
// ChartJS.defaults.plugins.title.padding = { top: 10, bottom: 30 };

ChartJS.defaults.backgroundColor = [
    'rgba(255, 99, 132, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(255, 205, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(201, 203, 207, 0.6)',
];

const ChartInit = () => {
    return <div></div>;
};

export default ChartInit;
