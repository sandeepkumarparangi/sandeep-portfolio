/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "Poppins", "Inter", "sans-serif"],
        display: ["Poppins", "Space Grotesk", "Inter", "sans-serif"]
      },
      colors: {
        night: "#050816",
        ink: "#f8fbff",
        muted: "#9aa8c7",
        cyan: "#38bdf8",
        violet: "#8b5cf6",
        electric: "#6ee7f9"
      },
      boxShadow: {
        glow: "0 0 50px rgba(56, 189, 248, 0.24)",
        violet: "0 0 70px rgba(139, 92, 246, 0.22)"
      },
      animation: {
        "slow-spin": "spin 24s linear infinite",
        "pulse-glow": "pulseGlow 3.8s ease-in-out infinite",
        "grid-drift": "gridDrift 22s linear infinite"
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.06)" }
        },
        gridDrift: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "80px 80px" }
        }
      }
    }
  },
  plugins: []
};
