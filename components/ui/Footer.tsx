"use client";

import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-surface/30 py-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-foreground-dim">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs font-mono text-foreground-dim/60">
            Built with AI. Powered by automation.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs font-mono text-foreground-dim hover:text-primary transition-colors"
            aria-label="Scroll back to top of page"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
