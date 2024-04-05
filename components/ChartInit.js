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
    {
        id: 'NoData',
        afterDraw: function (chart) {
            // you can use the previous examples "if" here instead if you want.
            // This not only checks the dataset lenght but also the data in each set.
            // If there is no data across all datasets, the message will display
            // console.log('No data to display detected. Displaying message.');

            // console.log(chart.data.datasets.map(d => d.data.reduce((p, a) => p + a, 0)).reduce((p, a) => p + a, 0));

            if (chart.data.datasets.map(d => d.data.reduce((p, a) => p + a, 0)).reduce((p, a) => p + a, 0) === 0) {
                const ctx = chart.ctx;
                const width = chart.width;
                const height = chart.height;
                // chart.clear();

                ctx.save();
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                // you can specify a font if you want instead, this gets the font family from the body tag
                ctx.font = `12px ${window.getComputedStyle(document.body).fontFamily}`;
                ctx.fillStyle = '#a3a3a3';
                ctx.fillText('No data to display', width / 2, height / 2);
                ctx.restore();
            }
        },
    },
);

ChartJS.register();

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
