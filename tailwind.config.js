const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      navShadow: "0 10px 30px -10px #ffe267d4",
    },
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "my-rose": "#90ee90",
        amber: colors.amber,
        piniaMain: "#ffe267",
        piniaSub: "#70dd82",
      },
    },
  },
  plugins: [],
};
