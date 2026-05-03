import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ─── Color Palette ─────────────────────────────────── */
      colors: {
        primary: {
          DEFAULT: "#00FFFF",
          50: "#E0FFFF",
          100: "#B3FFFF",
          200: "#80FFFF",
          300: "#4DFFFF",
          400: "#26FFFF",
          500: "#00FFFF",
          600: "#00CCCC",
          700: "#009999",
          800: "#006666",
          900: "#003333",
        },
        secondary: {
          DEFAULT: "#FBBD23",
          50: "#FFF8E1",
          100: "#FFEDB3",
          200: "#FFE080",
          300: "#FFD34D",
          400: "#FFC926",
          500: "#FBBD23",
          600: "#E0A81E",
          700: "#C49019",
          800: "#A87814",
          900: "#8C620F",
        },

        // Surfaces
        background: "#0A0D1A",
        surface: {
          DEFAULT: "#0D1120",
          50: "#141828",
          100: "#111525",
          200: "#0F1322",
        },
        foreground: {
          DEFAULT: "#E0E0E0",
          muted: "#A0A8B8",
          dim: "#6B7280",
        },

        // Semantic
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",
      },

      /* ─── Typography ────────────────────────────────────── */
      fontFamily: {
        sans: ["var(--font-space-mono)", "monospace"],
        heading: ["var(--font-bai-jamjuree)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "body-xl": ["1.25rem", { lineHeight: "1.75" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.75" }],
        "body-sm": ["0.875rem", { lineHeight: "1.65" }],
        "body-xs": ["0.75rem", { lineHeight: "1.5" }],
      },

      /* ─── Spacing System ────────────────────────────────── */
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
        "section": "6rem",
        "section-lg": "8rem",
      },

      /* ─── Border Radius ─────────────────────────────────── */
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      /* ─── Box Shadows ───────────────────────────────────── */
      boxShadow: {
        "glow-sm": "0 0 15px rgba(0, 255, 255, 0.15)",
        "glow-md": "0 0 30px rgba(0, 255, 255, 0.2), 0 0 60px rgba(0, 255, 255, 0.05)",
        "glow-lg": "0 0 60px rgba(0, 255, 255, 0.25), 0 0 120px rgba(0, 255, 255, 0.08)",
        "glow-strong": "0 0 20px rgba(0, 255, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.15)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.5)",
        "nav": "0 2px 16px rgba(0, 0, 0, 0.5)",
      },

      /* ─── Backdrop Blur ─────────────────────────────────── */
      backdropBlur: {
        xs: "2px",
      },

      /* ─── Animations ────────────────────────────────────── */
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 15px rgba(0, 255, 255, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 255, 255, 0.5)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 30s linear infinite",
        "marquee-right": "marquee-right 30s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "float": "float 4s ease-in-out infinite",
        "scan": "scan 8s linear infinite",
      },

      /* ─── Background Image ──────────────────────────────── */
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse at top, rgba(0, 255, 255, 0.08) 0%, transparent 60%)",
        "card-gradient": "linear-gradient(135deg, rgba(0, 255, 255, 0.04) 0%, transparent 100%)",
      },

      /* ─── Grid Template ─────────────────────────────────── */
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
export default config;
