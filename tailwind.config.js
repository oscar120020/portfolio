/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#131515",
        secondary: "#181b1b",
        tertiary: "#7DE2D1",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#FFFAFB",
        "white-200": "#afafaf",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #7de2d116",
      },
      screens: {
        xs: "450px",
        xxs: "315px"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}

