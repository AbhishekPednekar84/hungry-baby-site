module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      colors: {
        brandColor: "#DB2777",
      },
      boxShadow: {
        latestRecipeCard: "-1rem 0 2rem rgb(41, 40, 40)",
      },
      textDecorationThickness: {
        6: "6px",
      },
    },
  },
  plugins: [],
};
