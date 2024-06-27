/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        "pastel-purple": "#FAE7FF",
        "pastel-purple-shadow": "#DEC9F9",
        "pastel-orange": "#FDC4AC",
        "pastel-blue": "#B2D9F7",
        "pastel-green-shadow": "#BFF19E",
        "pastel-pink": "#FFF6F6",
        "pastel-hot-pink": "#E380FF",
        "pastel-gray": "#343434",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1400px",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1400px",
      },
      spacing: {
        "header-offset": "200px", // Adjust based on the height of your header
      },
      borderRadius: {
        large: "2rem",
      },
    },
  },
  plugins: [],
};
