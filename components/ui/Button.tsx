"use client";

import { motion } from "framer-motion";
import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { ease, tapShrink } from "@/lib/animations";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
}

const variantStyles = {
  primary:
    "bg-primary-500 hover:bg-primary-600 text-white shadow-glow-sm hover:shadow-glow-md",
  secondary:
    "bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20 hover:border-secondary/40",
  outline:
    "bg-transparent text-foreground border border-white/10 hover:border-primary/40 hover:bg-white/5",
  ghost:
    "bg-transparent text-foreground-muted hover:text-foreground hover:bg-white/5",
};

const sizeStyles = {
  sm: "px-4 py-2 text-body-sm gap-1.5",
  md: "px-6 py-3 text-body-md gap-2",
  lg: "px-8 py-4 text-body-lg gap-2.5",
};

const hoverVariants = {
  primary: {
    scale: 1.04,
    boxShadow: "0 0 35px rgba(108, 92, 231, 0.35)",
    transition: { ...ease.spring },
  },
  secondary: {
    scale: 1.04,
    boxShadow: "0 0 25px rgba(0, 209, 255, 0.2)",
    transition: { ...ease.spring },
  },
  outline: {
    scale: 1.03,
    borderColor: "rgba(108, 92, 231, 0.5)",
    transition: { ...ease.spring },
  },
  ghost: {
    scale: 1.03,
    transition: { ...ease.spring },
  },
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={hoverVariants[variant]}
        whileTap={tapShrink}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={hoverVariants[variant]}
      whileTap={tapShrink}
      {...(props as object)}
    >
      {children}
    </motion.button>
  );
}
