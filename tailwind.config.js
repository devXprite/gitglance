/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: { ...colors.cyan, DEFAULT: colors.cyan[500] },
                gray: { ...colors.neutral, DEFAULT: colors.neutral[500] },
            },
        },
    },
    plugins: [],
};
