/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'lite': '#eeeeee',
      'lite-gray': '#efefef',
      'gold': '#ffd700',
      'blue': '#021239',
      'slate': '#0f172a',
      'orange': '#e8531f',
    },
    extend: {
      backgroundImage: {
        'hero': "url('../assets/images/banner-bg.png')",
      },
      screens: {
        'xs': '400px',
        'xs2': '515px',
        'sm': '568px',
        'md': '640px',
        'lg': '768px',
        'xl': '1024px',
        '2xl': '1280px',
        '3xl': '1536px',
      },
    },
  },
  plugins: [],
};