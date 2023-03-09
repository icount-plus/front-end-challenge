/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          1: '#0D1117',
          2: '#30363D',
          3: '#1F6FEB',
          4: '#044082',
        },
        gray: {
          1: '#C9D1D9',
          2: '#21262D',
        },
        green: {
          1: '#38B158',
          2: '#027C44',
        },
      },
      fontFamily: {
        lalezar: ['Lalezar', 'cursive'],
      },
    },
  },
  plugins: [],
};
