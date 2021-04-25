const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./components/**/*.(t|j)sx?","./pages/**/*.(t|js)x?"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black: "#000",
      white: "#fff",
      gray: colors.trueGray,
      teal: colors.teal,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
