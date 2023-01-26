/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '450px',
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        '1xl': '1350px',
        '1xxl':'1400px',
        '3xl':'1736px',
        '4xl':'1936px',
        '5xl':'2136px',
        '6xl':'2336px',
        '7xl':'2560px',
        '8xl':'3136px'
      },
    },
  },
  plugins: [],
}
