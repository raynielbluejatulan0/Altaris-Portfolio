"use client";

import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-primary/10 bg-background pt-16 pb-10" role="contentinfo">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        {/* Brand name */}
        <p className="text-3xl font-heading font-bold text-primary glow-text tracking-[0.15em] uppercase mb-3">
          Rayniel Blue Jatulan
        </p>

        {/* Subtitle */}
        <p className="text-xs font-mono tracking-[0.3em] uppercase text-foreground-dim mb-5">
          {SITE.tagline}
        </p>

        {/* Description */}
        <p className="text-xs font-mono text-foreground-dim/60 leading-relaxed mb-10">
          Helping businesses automate workflows and improve operations.
        </p>

        {/* Copyright — centered */}
        <p className="text-xs font-mono text-foreground-dim/40">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
