import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aws: {
          dark: "#232f3e",
          darker: "#1a242f",
          sidebar: "#232f3e",
          topbar: "#232f3e",
          orange: "#FF9900",
          orangeHover: "#ec7211",
          blue: "#0073bb",
          blueHover: "#005a8e",
          border: "#414d5c",
          borderLight: "#545b64",
          hover: "#2d3948",
          card: "#ffffff",
          cardDark: "#16191f",
          text: "#16191f",
          textLight: "#545b64",
          background: "#f2f3f3",
          link: "#0073bb",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-in": "slideIn 0.4s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
