/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      brightBlue: "hsl(220, 98%, 61%)",
      // Light theme
      veryLightGray: "#fafafa",
      veryLightGayishBlue: "#e4e5f1",
      lightGrayishBlue: "#d2d3db",
      darkGrayishBlue: "#9394a5",
      veryDarkGrayishBlue: "#484b6a",
      // Dark theme
      veryDarkBlue: "#161722",
      verydarkDesaturatedBlue: "#25273c",
      lightGrayishBlueDark: "#cacde8",
      lightGrayishBlueDarkHover: "#e4e5f1",
      darkGrayishBlueDark: "#777a92",
      veryDarkGrayishBlueDark: "#4d5066",
      veryDarkGrayishBlueDark2: "#393a4c",
    },
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
