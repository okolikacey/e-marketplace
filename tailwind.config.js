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
        'clightgreen': '#E7FFE5',
        'cyellow': '#FDD922',
        'ctransgreen': 'rgba(73, 177, 66, 0.25)',
        'clightgrey': 'radial-gradient(50.33% 50.33% at 49.84% 44.15%, rgba(247, 247, 247, 0) 0%, rgba(247, 247, 247, 0) 21.54%, #F7F7F7 100%)'
      },
      padding: {
        '1/2': '50%',
        full: '100%'
      }
    },
  },
  plugins: [],
}
