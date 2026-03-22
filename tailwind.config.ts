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
        // Brand
        primary: {
          DEFAULT: "#6C5CE7",
          50: "#F0EEFF",
          100: "#DDD8FC",
          200: "#BBB1F9",
          300: "#9A8BF6",
          400: "#8370F0",
          500: "#6C5CE7",
          600: "#5A47D6",
          700: "#4735B8",
          800: "#35278F",
          900: "#241B66",
        },
        secondary: {
          DEFAULT: "#00D1FF",
          50: "#E5FAFF",
          100: "#B3F0FF",
          200: "#80E6FF",
          300: "#4DDBFF",
          400: "#26D6FF",
          500: "#00D1FF",
          600: "#00A8CC",
          700: "#007F99",
          800: "#005566",
          900: "#002C33",
        },

        // Surfaces
        background: "#0F172A",
        surface: {
          DEFAULT: "#111827",
          50: "#1E293B",
          100: "#1A2332",
          200: "#151D2B",
        },
        foreground: {
          DEFAULT: "#E5E7EB",
          muted: "#B0B8C4",
          dim: "#8891A0",
        },

        // Semantic
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",
      },

      /* ─── Typography ────────────────────────────────────── */
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: [
          "var(--font-geist-sans)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        // Display sizes — hero headlines
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        // Body sizes
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
        "glow-sm": "0 0 15px rgba(108, 92, 231, 0.15)",
        "glow-md": "0 0 30px rgba(108, 92, 231, 0.2)",
        "glow-lg": "0 0 60px rgba(108, 92, 231, 0.25)",
        "glow-secondary-sm": "0 0 15px rgba(0, 209, 255, 0.15)",
        "glow-secondary-md": "0 0 30px rgba(0, 209, 255, 0.2)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.2)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.3)",
        "nav": "0 2px 16px rgba(0, 0, 0, 0.25)",
      },

      /* ─── Backdrop Blur ─────────────────────────────────── */
      backdropBlur: {
        xs: "2px",
      },

      /* ─── Animations ────────────────────────────────────── */
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 15px rgba(108, 92, 231, 0.2)" },
          "50%": { boxShadow: "0 0 30px rgba(108, 92, 231, 0.4)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "float": "float 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 6s ease infinite",
      },

      /* ─── Background Image ──────────────────────────────── */
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse at top, rgba(108, 92, 231, 0.15) 0%, transparent 60%)",
        "hero-glow-secondary": "radial-gradient(ellipse at bottom right, rgba(0, 209, 255, 0.08) 0%, transparent 50%)",
        "card-gradient": "linear-gradient(135deg, rgba(108, 92, 231, 0.05) 0%, rgba(0, 209, 255, 0.05) 100%)",
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
