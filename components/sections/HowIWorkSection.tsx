"use client";

import { motion } from "framer-motion";
import { HOW_I_WORK } from "@/lib/constants";

export function HowIWorkSection() {
  return (
    <section id="how-i-work" className="relative py-24 overflow-hidden">
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
            Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            How I Work
          </h2>
          <p className="text-foreground-muted max-w-md mx-auto text-sm">
            Three steps. No fluff. Just results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {HOW_I_WORK.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line (between steps) */}
              {i < HOW_I_WORK.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/20 to-transparent -translate-y-1/2 z-0" />
              )}

              <div className="relative glow-card rounded-lg p-7 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-heading font-bold text-primary/20 leading-none">
                    {step.step}
                  </span>
                  <div className="h-px flex-1 bg-primary/10" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-base mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground-dim text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
