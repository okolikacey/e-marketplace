/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cblack': '#21252B',
        'cgreen': '#49B142',
        'cgrey': '#F1F1F1',
      }
    },
  },
  plugins: [],
}
