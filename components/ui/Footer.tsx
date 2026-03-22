"use client";

import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-surface/50 border-t border-white/5 py-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/50">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-sm text-foreground/40">
            Built with AI. Powered by automation.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-foreground/50 hover:text-foreground transition-colors"
            aria-label="Scroll back to top of page"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
