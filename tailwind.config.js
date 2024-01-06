/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Manrope", "sans-serif"],
      },
      colors: {
        LightCyan: "#CEE3E9",
        NeonGreen: "#52FFA8",
        GrayishBlue: "#4E5D73",
        DarkGrayishBlue: "#323A49",
        DarkBlue: "#1F2632",
      },
    },
  },
  plugins: [],
}

