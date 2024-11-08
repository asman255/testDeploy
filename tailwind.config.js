/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ga-primary': '#00A4B6',
        'ga-secondary': '#FE6B57',
        'ga-bg': '#F6F6F6',
      }
    },
  },
  plugins: [],
}

