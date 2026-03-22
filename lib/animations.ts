import { type Variants, type Transition } from "framer-motion";

/* ─── Easing Curves ──────────────────────────────────────── */
export const ease = {
  smooth: [0.25, 0.1, 0.25, 1] as const,
  snappy: [0.16, 1, 0.3, 1] as const,
  spring: { type: "spring", stiffness: 260, damping: 20 } as Transition,
  springGentle: { type: "spring", stiffness: 120, damping: 14 } as Transition,
  springBouncy: { type: "spring", stiffness: 300, damping: 15 } as Transition,
};

/* ─── Fade Variants ──────────────────────────────────────── */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: ease.smooth },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ease.snappy },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: ease.snappy },
  },
};

/* ─── Blur Fade Variants ─────────────────────────────────── */
export const blurFadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: ease.smooth },
  },
};

export const blurFadeInUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: ease.snappy },
  },
};

/* ─── Scale Variants ─────────────────────────────────────── */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: ease.snappy },
  },
};

export const scaleInSpring: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: ease.springGentle,
  },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: ease.springBouncy,
  },
};

/* ─── Slide Variants ─────────────────────────────────────── */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.snappy },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.snappy },
  },
};

/* ─── Container / Stagger Variants ───────────────────────── */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

/* ─── Draw / Line Variants ───────────────────────────────── */
export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: ease.smooth },
  },
};

/* ─── Hover Presets (use with whileHover) ────────────────── */
export const hoverLift = {
  y: -6,
  transition: { duration: 0.25, ease: ease.smooth },
};

export const hoverScale = {
  scale: 1.05,
  transition: ease.spring,
};

export const hoverGlow = {
  boxShadow: "0 0 30px rgba(108, 92, 231, 0.3)",
  borderColor: "rgba(108, 92, 231, 0.3)",
  transition: { duration: 0.3 },
};

/* ─── Tap Presets (use with whileTap) ────────────────────── */
export const tapShrink = {
  scale: 0.97,
  transition: { duration: 0.1 },
};

/* ─── Infinite Animations (use with animate) ─────────────── */
export const floatAnimation = {
  y: [0, -10, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

export const pulseGlow = {
  boxShadow: [
    "0 0 15px rgba(108, 92, 231, 0.2)",
    "0 0 30px rgba(108, 92, 231, 0.4)",
    "0 0 15px rgba(108, 92, 231, 0.2)",
  ],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};

export const breathe = {
  scale: [1, 1.05, 1],
  opacity: [0.7, 1, 0.7],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};
