/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        common:{
          blue:'#0a2141',
          white:'#ffffff',
          buttonBlue:'#0d6efd'
        },
        navigationHover:'#f6ad26'
      }
    },
  },
  plugins: [],
}