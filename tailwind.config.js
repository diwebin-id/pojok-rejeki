/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "green-bg": "rgba(9, 246, 124, 0.76)",
        "blue-bg": "rgba(92, 132, 235, 0.50)",
        "blue-footer": "rgba(92, 132, 235, 0.90)",
        "green-footer": "rgba(4, 166, 85, 0.80)",
      },
    },
    container: {
      center: true,
    },
    screens: {
      mobile: "320px",
      mobileL: "375px",
      mobileXL: "425px",
      tablet: "768px",
      laptop: "1024px",
    },
  },

  plugins: [],
};
