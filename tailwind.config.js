/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lighten: "#08a88a",
        global_color_primary: "#BAFF39",
        global_color_secondary: "#383838",
        brownPrimary: "#9B7355",
        lightBlue: "#557D9B",
        tertiary: "#A3BBCD",
        background: "#6E6E6E",
        light_secondary: "#282828",
      },
    },
  },
  plugins: [],
};
