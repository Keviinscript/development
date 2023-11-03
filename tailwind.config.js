/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      source: [ 'Source Sans Pro', 'sans-serif'],
      poppins: [ 'Poppins', 'sans-serif'],
      lato: [ 'Lato', 'sans-serif'],
      lora: [ 'Lora', 'serif'],
    },
    extend: {
      colors:{
        'mainred': 'rgb(199, 0, 33)',
        'maingrey': 'rgb(32, 32, 70)',
        'maingrey7': ' rgba(229, 231, 235, .1)',
      },
    },
  },
  plugins: [],
}
