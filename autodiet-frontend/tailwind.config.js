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
        
        "admin-main": "#0E2238",
        "admin-grey-background": "#F1F5F7",
        "admin-button": "#00BAC7",
        "admin-hoveredbutton": "#009EA9",
        "admin-misc": "#DDDFFC",
        "admin-hoverednav": "#0C3549",
        "admin-hoveredtext": "#00BAC7"
      }
    },
  },
  plugins: [],
}