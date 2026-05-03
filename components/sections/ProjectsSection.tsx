"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { CASE_STUDIES } from "@/lib/constants";

export function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % CASE_STUDIES.length);
  };

  const study = CASE_STUDIES[current];

  return (
    <section id="projects" className="relative py-24 bg-surface/30 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-3">
            Case Studies
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Automation Systems
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto text-sm">
            Real systems. Real results. Here&apos;s what I built and what happened.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glow-card rounded-xl overflow-hidden"
            >
              {/* Header */}
              <div className="px-8 py-7 border-b border-primary/10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground">
                      {study.title}
                    </h3>
                    <p className="mt-1 text-xs font-mono text-foreground-dim">
                      {study.client} &middot; {study.industry}
                    </p>
                  </div>
                  <span className="self-start text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 rounded-sm px-3 py-1.5 whitespace-nowrap">
                    {study.techBuilt}
                  </span>
                </div>
              </div>

              {/* Before / After */}
              <div className="grid md:grid-cols-[1fr,32px,1fr] border-b border-primary/10">
                <div className="p-8">
                  <div className="flex items-center gap-2 text-red-400 mb-3">
                    <AlertCircle size={13} />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                      Before
                    </span>
                  </div>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {study.before}
                  </p>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight size={16} className="text-primary/40" />
                </div>

                <div className="p-8 md:border-l border-t md:border-t-0 border-primary/10">
                  <div className="flex items-center gap-2 text-emerald-400 mb-3">
                    <CheckCircle2 size={13} />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                      After
                    </span>
                  </div>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {study.after}
                  </p>
                </div>
              </div>

              {/* What I built */}
              <div className="p-8">
                <p className="text-[10px] font-mono uppercase tracking-widest text-foreground-dim mb-2">
                  What I built
                </p>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {study.solution}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="flex items-center gap-2 text-sm font-mono text-foreground-dim hover:text-primary transition-colors"
            >
              <ChevronLeft size={18} />
              Prev
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {CASE_STUDIES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2 bg-primary"
                      : "w-2 h-2 bg-foreground-dim/40 hover:bg-foreground-dim/70"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex items-center gap-2 text-sm font-mono text-foreground-dim hover:text-primary transition-colors"
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
