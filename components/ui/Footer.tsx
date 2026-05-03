"use client";

import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-primary/10 bg-background pt-16 pb-10" role="contentinfo">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/4 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand */}
        <p className="text-2xl font-heading font-bold text-primary glow-text tracking-widest uppercase mb-2">
          Altaris
        </p>

        {/* Title */}
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-primary/70 mb-4">
          {SITE.tagline}
        </p>

        {/* Tagline */}
        <p className="text-xs font-mono text-foreground-dim mb-10">
          Building AI systems that handle calls, bookings, and follow-ups — automatically.
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-primary/10 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-mono text-foreground-dim/60">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs font-mono text-foreground-dim/60 hover:text-primary transition-colors"
            aria-label="Scroll back to top"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
