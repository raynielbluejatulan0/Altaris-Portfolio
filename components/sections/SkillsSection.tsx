"use client";

import { motion } from "framer-motion";
import { SKILLS_MARQUEE } from "@/lib/constants";

const HALF = Math.ceil(SKILLS_MARQUEE.length / 2);
const ROW1 = SKILLS_MARQUEE.slice(0, HALF);
const ROW2 = SKILLS_MARQUEE.slice(HALF);

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-2">
      <div
        className={`flex gap-3 w-max ${reverse ? "animate-marquee-right" : "animate-marquee-left"}`}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 px-4 py-2 text-xs font-mono text-foreground-muted bg-surface border border-primary/10 rounded-sm hover:border-primary/30 hover:text-primary transition-colors duration-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-4"
        >
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-3">
            Tools & Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Skills
          </h2>
          <p className="text-foreground-muted max-w-md mx-auto text-sm">
            The tools I actually use. All production-tested.
          </p>
        </motion.div>

        <div className="space-y-3">
          <MarqueeRow items={ROW1} />
          <MarqueeRow items={ROW2} reverse />
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
}
