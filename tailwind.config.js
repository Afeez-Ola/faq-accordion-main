/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets", "./css"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        xl: "1440px"
      },
      backgroundImage: {
        "hero-mobile": "url('../assets/images/background-pattern-mobile.svg')",
        "hero-desktop": "url('../assets/images/background-pattern-desktop.svg')"
      },
    },
    container: {
      center: true,
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      pink: "hsl(275, 100%, 97%)",
      purple: {
        light: "hsl(292, 16%, 49%)",
        dark: "hsl(292, 42%, 14%)",
      }
    },
    fontFamily: ["Work Sans", "sans-serif"],

  },
  plugins: [],
}