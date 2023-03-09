/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          1: '#1F6FEB',
        },
        gray: {
          1: '#C9D1D9',
        },
      },
      fontFamily: {
        lalezar: ['Lalezar', 'cursive'],
      },
    },
  },
  plugins: [],
};
