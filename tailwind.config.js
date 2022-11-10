/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'lightpurple': '#7a81a8',
      },
      height: {
        '80': '80vh',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
