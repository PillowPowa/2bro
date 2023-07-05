/** @type {import('tailwindcss').Config} */
module.exports = {
  function ({ addVariant }) {
    addVariant('child', '& > *');
    addVariant('child-hover', '& > *:hover');
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        primary: "#E4371E",
        gray: "#D9D9D9",
        black: "#202020",
        "gray-rgba": "rgba(32, 32, 32, 0.05);",
        "primary-rgba": "rgba(228, 55, 30, 0.9);"
      },
      fontFamily: {
        inter: "Inter",
      },
      padding: {
        "wrapper-lg": "80px",
      },
      minHeight: {
        "screen-wrapper": "calc(100vh - 80px - 40px)"
      },
      height: {
        "screen-wrapper": "calc(100vh - 80px - 40px)"
      },
      flex: {
        "card": "1 0 360px",
      },
    },
  },
  plugins: [],
}

