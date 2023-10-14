/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "1.5rem",
      },
    },
    extend: {
      colors: {
        primary: "#0F2C59",
        secondary: "#5b86e5",
        tertiary: "#36d1dc",
      },
      boxShadow: {
        one: "0px 5px 21px 0 rgba(36, 135, 206, 0.251)",
      },
    },
  },
  plugins: [],
};
