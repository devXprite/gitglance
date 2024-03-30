/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin')


const rotateY = plugin(function ({ addUtilities }) {
    addUtilities({
      '.rotate-y-180': {
        transform: 'rotateY(360deg)',
      },
    })
  })

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
                gray: { ...colors.zinc, DEFAULT: colors.zinc[500] },
            },
        },
    },
    plugins: [rotateY],
};
