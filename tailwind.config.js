/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [".swiper-pagination-bullet", ".swiper-pagination-bullet-active", ".swiper-button-next", ".swiper-button-prev", ".swiper-wrapper", ".swiper-pagination"],

  theme: {
    extend: {
       colors:{
           "primaryColor": "#F46720",
           "secondaryColor": "#08101A",
           "tertiaryColor": "#89857C",
           "borderColor": "#A89F8B"
       }
    },
  },
  plugins: [],
}

