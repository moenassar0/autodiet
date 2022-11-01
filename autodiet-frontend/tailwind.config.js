/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ad-golden": "#FDAD00",
        "ad-darkgrey": "#141414",
        "ad-lightgrey": "#363636",
        "ad-hoveredblack": "#0d0d0d",
      }
    },
  },
  plugins: [],
}