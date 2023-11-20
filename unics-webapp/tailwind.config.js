/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "unics-black": "#252824",
        "unics-black-black": "#141513",
        "unics-purple": "#8A3EB0",
        "unics-yellow": "#FCCD40",
        "unics-white": "#F1F1F1",
      },
      fontFamily: {},
      backgroundImage: {},
    },
  },
  plugins: [],
};
