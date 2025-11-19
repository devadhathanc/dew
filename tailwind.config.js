/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myorange: 'rgb(226,132,48)',
      },
      fontFamily:{
        mono: ['Roboto Mono', 'HelveticaNeue', 'Arial', 'sans-serif'],
        copper: ['CopperPlate', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

