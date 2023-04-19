/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7418",
        secondary: "#595959",
        accent: "#88B5D0",
      },
    },
  },
  plugins: [],
};
