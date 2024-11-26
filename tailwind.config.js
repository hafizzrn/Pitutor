/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "2.5rem",
          lg: "3rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: "#21A7D5",
        secondary: "#EAF7FB",
      },
    },
  },
  plugins: [],
};
