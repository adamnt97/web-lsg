import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#990000",
        secondary: "#828179",
        accent: "#990000",
        background: {
          DEFAULT: "#FAFAF8",
          dark: "#1a1a1a",
        },
        surface: {
          DEFAULT: "#fff",
          dark: "#2d2d2d",
        },
        muted: {
          DEFAULT: "#C4C3BB",
          dark: "#666666",
        },
        "muted-foreground": {
          DEFAULT: "#A3A299",
          dark: "#888888",
        },
        border: {
          DEFAULT: "#E6E4DD",
          dark: "#404040",
        },
        input: {
          DEFAULT: "#F0EFEA",
          dark: "#333333",
        },
        foreground: {
          DEFAULT: "#1a1a1a",
          dark: "#ffffff",
        },
      },
      textColor: {
        foreground: {
          DEFAULT: "#1a1a1a",
          dark: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["SF Pro Display", "system-ui", "sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;