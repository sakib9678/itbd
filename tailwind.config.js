import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {animation: {
      // textBounce: "textBounce 3s ease-in-out infinite",
    },
    // keyframes: {
    //   textBounce: {
    //     "0%": { transform: "translateY(0)" },
    //     "100%": { transform: "translateY(-10px)" },
    //   },
    // },
  },
  },
  plugins: [],
}

