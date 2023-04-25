module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "960px",
      lg: "1394px",
    },
    extend: {
      colors: {
        white: "#ffffff",
        dark: "#363636",
        grey: "#EAEAEA",
        orange: "#FEDB60",
        darkOrange: "#C4AA4A",
        brown: "#665726",
      },
      boxShadow: {
        "dp-1": "0px 8px 24px rgba(0, 0, 0, 0.05);",
      },
      fill: {
        current: "currentColor",
      },
    },
    fontFamily: {
      sans: ['"Montserrat"', "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
