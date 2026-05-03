"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
              <span className="text-[10px] font-heading font-bold text-primary tracking-tight leading-none">
                RBJ
              </span>
            </span>
            <span className="flex flex-col">
              <span
                className="font-heading font-bold text-lg text-primary glow-text leading-tight"
                style={{ fontFamily: "var(--font-bai-jamjuree)" }}
              >
                Rayniel Blue Jatulan
              </span>
              <span
                className="h-px w-full"
                style={{
                  background: "linear-gradient(to right, #00FFFF, rgba(0,255,255,0.1))",
                  boxShadow: "0 0 6px 1px rgba(0,255,255,0.5)",
                }}
              />
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground-muted hover:text-primary transition-colors duration-200"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm font-mono border border-primary/40 text-primary px-4 py-1.5 rounded hover:bg-primary/10 hover:border-primary/70 transition-all duration-200 glow-border"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground-muted hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-surface/95 backdrop-blur-md border-b border-primary/10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-foreground-muted hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-primary/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-sm text-center border border-primary/40 text-primary px-4 py-2 rounded hover:bg-primary/10 transition-all"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
