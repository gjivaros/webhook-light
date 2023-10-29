/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Montserrat', 'sans'],
      },
      colors: {
        primary: '#3498db',
        secondary: '#f39c12',
      },
    },
  },
  plugins: [],
}

