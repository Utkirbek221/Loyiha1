/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      ml: { max: '375px' },
      ma: { max: '320px' },
      mr: { max: '275px' },
    },
    extend: {
      backgroundImage: {
      'img': "url('/img/img.png')",
      }
    },
  },
  plugins: [],
}
