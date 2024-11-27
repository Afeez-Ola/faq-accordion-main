/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets", "./css"],
  theme: {
    extend: {},
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
    fontWeight: {
      DEFAULT: "400",
      "bold": "600",
      "extrabold": "700"

    }
  },
  plugins: [],
}