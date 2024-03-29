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
                primary: { ...colors.teal, DEFAULT: colors.teal[500] },
                gray: { ...colors.zinc, DEFAULT: colors.zinc[500] },
            },
        },
    },
    plugins: [],
};
