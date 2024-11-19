/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradientWhiteToBlue: {
          100: "#FFFFFF",
          200: "#B1CBFF",
        },
      },
      backgroundImage: {
        'white-to-blue': "linear-gradient(to bottom, #FFFFFF, #B1CBFF)",
      },
    },
  },
  plugins: [],
};
