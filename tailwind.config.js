/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mehndi-dark': '#4A2c2A', 
        'mehndi-light': '#D69E2E',
        'mehndi-bg': '#FFFBF0',
      },
      fontFamily: {
        'handwriting': ['Great Vibes', 'cursive'],
      }
    },
  },
  plugins: [],
}