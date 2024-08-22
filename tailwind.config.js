/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      test: "1400px",
      "2xl": "1536px",
      "3xl": "1680px",
    },
    extend: {
      fontFamily: {
        sans: ["Pretendard", "sans-serif"], // Set Pretendard as the default sans-serif font
        poppins: ["Poppins", "sans-serif"], // Add Poppins as an option
      },
      lineHeight: {
        80: "80px", // Add custom line-height value
      },
    },
  },
  plugins: [],
};
