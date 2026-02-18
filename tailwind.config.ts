import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1F6F4A",
          soft: "#4B8E6D",
          dark: "#184E36",
          tint: "#E9F2EC"
        },
        canvas: "#F7F7F5"
      },
      boxShadow: {
        premium: "0 8px 30px rgba(15, 23, 42, 0.06)"
      },
      borderRadius: {
        soft: "1rem"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;
