/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        colorBody: "#EAEAEA",
        colorContainer: "#F7F7F5",
        cardBlack: "#0F1412",
        colorButton: "#50B533",
        textColorPrimary: "#314660",
        textColor: "#449A2B",
        brandColor: "#B37BFF",
      },
    },
  },
  plugins: [],
};
