module.exports = {
  purge: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom: {
          background: "#262728",
          field: "#DADADA",
        },
      },
      boxShadow: {
        custom: "0px 0px 40px -10px rgba(16, 185, 129, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
