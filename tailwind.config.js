/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      maxWidth: {
        header: "975px",
        body: "975px",
        stories: "470px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
