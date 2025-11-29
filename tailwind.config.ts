import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#030014", // Deep void
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#4338ca", // Electric Blue
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#7c3aed", // Neon Purple
          foreground: "#ffffff",
        },
        accent: {
          cyan: "#00f0ff",
          pink: "#ff0080",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "reverse-spin": "reverse-spin 1s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 20px rgba(67, 56, 202, 0.5)",
          },
          "50%": {
            opacity: "0.8",
            boxShadow: "0 0 40px rgba(124, 58, 237, 0.6)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
