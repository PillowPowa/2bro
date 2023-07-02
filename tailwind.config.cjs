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
      },
      fontFamily: {
        inter: "Inter",
      },
    },
  },
  plugins: [],
}

