import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#0F4628",
          950: "#082916",
          dark: "#051A0E",
        },
        ivory: {
          50: "#FDFDFB",
          100: "#FAF9F5",
          200: "#F3F1E7",
          300: "#E9E5D4",
          400: "#DBD5BE",
          500: "#C7BEA0",
        },
        gold: {
          300: "#F6E05E",
          400: "#ECC94B",
          500: "#D4AF37",
          600: "#B7791F",
        },
        charcoal: {
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
          500: "#64748B",
          400: "#94A3B8",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        "apple-sm": "0 2px 8px -2px rgba(8, 41, 22, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)",
        "apple-md": "0 12px 32px -8px rgba(8, 41, 22, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)",
        "apple-lg": "0 24px 48px -12px rgba(8, 41, 22, 0.12), 0 8px 24px -4px rgba(0, 0, 0, 0.06)",
        "apple-3d": "0 20px 40px -15px rgba(8, 41, 22, 0.15), 0 0 0 1px rgba(8, 41, 22, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
        "inner-glow": "inset 0 1px 2px rgba(255, 255, 255, 0.6), inset 0 -1px 2px rgba(0, 0, 0, 0.05)",
        "glass-emerald": "0 20px 50px -10px rgba(8, 41, 22, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
