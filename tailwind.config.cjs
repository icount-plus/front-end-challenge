/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          1: '#0D1117',
          2: '#30363D',
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
