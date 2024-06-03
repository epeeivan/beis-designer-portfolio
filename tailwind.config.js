/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1700px",
      },
      colors: {
        silver: "#EAEFF2",
        base_yellow: "#FECC3E",
        dark: {
          100: "#515665",
          200: "#404450",
          300: "#31333E",
          400: "#1F2128",
        },
      },
    },
  },
  plugins: [],
};
