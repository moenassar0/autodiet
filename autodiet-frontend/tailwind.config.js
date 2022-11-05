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
        "admin-grey-background": "#F3F4F8",
        "admin-button": "#737DF4",
        "admin-misc": "#DDDFFC",
        "admin-hoverednav": "#0C3549",
      }
    },
  },
  plugins: [],
}