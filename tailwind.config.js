/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      mobile: { max: "430px" }, // applies to <= 430px
      desktop: "1020px",        // applies to >= 1700px
    },
  },
  plugins: [],
};
