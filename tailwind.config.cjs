/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgblue: '#0D1117',
        bgblue2: '#30363D',
        textBlue: '#58A6FF',
        bgButtonBlue: '#1F6FEB',
        bdButtonBlue: '#044082',
        textGray: '#C9D1D9',
        textGray2: '#7B7B7C',
        bgGray: '#21262D',
        bgButtonGreen: '#38B158',
        bdButtonGreen: '#027C44',
      },
      fontFamily: {
        lalezar: ['Lalezar', 'Inter'],
      },
      maxWidth: {
        16: '4rem',
        20: '5rem',
        32: '8rem',
        40: '10rem',
      },
    },
  },
  plugins: [],
};
