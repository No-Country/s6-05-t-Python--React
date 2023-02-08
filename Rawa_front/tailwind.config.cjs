/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Mon: ["Montserrat", "sans-serif"],
        moch: ["Mochiy Pop One", "sans-serif"],
      },
      colors: {
        priColor: "#21D19F",
        secColor: "#68EDC6",
        rojo: "#FF4365",
        btnGoogle: "#E94235",
        btnTwitter: "#1D9BF0",
      },
    },
  },
  plugins: [require("daisyui")],
};
