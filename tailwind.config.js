/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)",
        brightCyan: "#2BB7D1",
        grayishBlue: " hsl(233, 8%, 62%)",
        lightGrayishBlue: "hsl(220, 16%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        customFont: ["Public Sans", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, hsl(136, 65%,51%) , #2BB7D1)",
      },
    },
  },
  plugins: [],
};
