module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fntFamily: {
        primary: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#e9e8fc",
          200: "#bcbbf6",
          300: "#908ef1",
          400: "#6360eb",
          500: "#6360eb",
          600: "#6360eb",
          700: "#6360eb",
          800: "#6360eb",
          900: "#6360eb",
        },
        secondary: {
          100: "#ffe6e9",
          200: "#feb4bc",
          300: "#fd818f",
          400: "#fd818f",
          500: "#fc1d36",
          600: "#e2031c",
          700: "#b00316",
          800: "#7e0210",
          900: "#7e0210",
        },
        header: {
          100:"#f2f2f2",
          400:"#a6a6a6",
          500:"#8c8c8c",
          600:"#737373",
          800:"#262626",
          900: "#0D0D0D",
        },
        topbar: {
          100: "#665AEF",
          200: "#FC364C",
        },
      },
    },
  },
  plugins: [],
};
