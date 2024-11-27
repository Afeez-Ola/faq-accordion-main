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
      pink:{
        light: "hsl(275, 100%, 97%)",
        default: "#AD28EB"
      } ,
      purple: {
        light: "hsl(292, 16%, 49%)",
        dark: "hsl(292, 42%, 14%)",
        pale: "#8B6990"
      }
    },
    fontFamily:{
      work: ["Work Sans", "sans-serif"],
    },fontWeight: {
      bold: 600,
      extrabold: 700,
      default: 400
    }

  },
  plugins: [],
}