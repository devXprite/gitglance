'use client';

import colors from 'tailwindcss/colors';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors, Title } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, Title, Colors);

ChartJS.defaults.plugins.colors.forceOverride = true;

ChartJS.defaults.plugins.legend.position = 'bottom';
ChartJS.defaults.plugins.legend.align = 'center';
ChartJS.defaults.plugins.legend.display = false;

ChartJS.defaults.plugins.legend.labels.color = 'white';

ChartJS.defaults.plugins.legend.labels.pointStyle = 'rect';
ChartJS.defaults.plugins.legend.labels.usePointStyle = true;

ChartJS.defaults.plugins.title.display = true;
ChartJS.defaults.plugins.title.color = 'white';
// ChartJS.defaults.plugins.title.padding = { top: 10, bottom: 30 };


// shuffle colors
let bgColors = Object.values(colors.zinc);
bgColors = bgColors.sort(() => Math.random() - 0.5);

// ChartJS.defaults.backgroundColor = bgColors;

const ChartInit = () => {
    return <div></div>;
};

export default ChartInit;
