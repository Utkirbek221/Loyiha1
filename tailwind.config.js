/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: { 
      my: { max: '1024px' },
      mr: { max: '768px' },
      ma: { max: '425px' },
      ml: { max: '375px' },
      mp: { max: '320px' },
     

    },
    extend: {
      backgroundImage: {
        'img': "url('/img/img.png')",
      }
    },
  },
  plugins: [],
}
