/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        sidebarShadow: "2px 0 4px rgba(0,0,0,0.2)",
        topbarShadow: "0px 2px 4px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
