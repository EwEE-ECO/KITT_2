/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EFF4FB",
          100: "#D8E4F4",
          200: "#B3C9E9",
          300: "#82A7DA",
          400: "#5585C8",
          500: "#2A6DB5",
          600: "#1B4F8B",
          700: "#0E3460",
          800: "#092244",
          900: "#05152B",
          950: "#030B17",
        },
        accent: {
          DEFAULT: "#E8632C",
          light: "#F07A4A",
          dark: "#C94E1A",
        },
        surface: {
          DEFAULT: "#F5F7FA",
          card: "#FFFFFF",
          dark: "#0F172A",
        },
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "shimmer": "shimmer 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(27,79,139,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(27,79,139,0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
}
