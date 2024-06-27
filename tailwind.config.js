/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        "pastel-purple": "#F2E8FF",
        "pastel-purple-shadow": "#DDC6FF",
        "pastel-orange": "#FFE4D6",
        "pastel-orange-shadow": "#FFC6A8",
        "pastel-blue": "#E8FAFF",
        "pastel-blue-shadow": "#B5EBF9",
        "pastel-green": "#E7FFEA",
        "pastel-green-shadow": "#BAF5C0",
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
      borderRadius: {
        large: "2rem",
      },
    },
  },
  plugins: [],
};
