/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgblue: '#0D1117',
        bgblue2: '#30363D',
        bgButtonBlue: '#1F6FEB',
        bdButtonBlue: '#044082',
        textGray: '#C9D1D9',
        bgGray: '#21262D',
        bgButtonGreen: '#38B158',
        bdButtonGreen: '#027C44',
      },
      fontFamily: {
        lalezar: ['Lalezar', 'Inter'],
      },
    },
  },
  plugins: [],
};
