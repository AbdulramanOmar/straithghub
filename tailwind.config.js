/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(300%)" },
          "100%": { transform: "translateX(-40%)" },
        },
      },
      animation: {
        scroll: "scroll 50s linear infinite",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "576px",
          md: "750px",
          lg: "970px",
          xl: "1170px",
          "2xl": "1350px",
        },
      },
      screens: {
        sm: "576px",
        md: "769px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors: {
        straighthub: "#266E77",
        secondary: " #71BEA4",
      },
    },
  },
  plugins: [],
};
