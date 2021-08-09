module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sidebarBlue: "#004E96",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
