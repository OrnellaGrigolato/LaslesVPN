/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#4F5665",
        black: "#0B132A",
        red: "#F53838",
      },
      boxShadow: {
        myRed: "0 28px 31px -8px rgba(245,56,56,0.35)",
        myBlack: "0 12px 54px -32px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};
