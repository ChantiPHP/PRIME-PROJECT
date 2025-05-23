/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'], // Add Gotham font
      },
    },
  },
  plugins: [],
};