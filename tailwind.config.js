/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        softblue: "#f9fbfc",
        blue: "#3a38ff",
        softpurple: "#e5e4ff",
        navy: "#111849",
        darkgrey: "#949293",
        darkgrey2: "#e7ebed",
        grey: "#dfe2e7",
        purple: "#6261d8",
        green: "#316762",
        white: "#ffffff",
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
