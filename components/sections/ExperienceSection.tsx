"use client";

import { motion } from "framer-motion";
import { ABOUT_PROFILE } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 bg-surface/20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-3">
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-foreground-muted max-w-md mx-auto text-sm">
            3+ years in AI. Each year, a sharper focus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" />

            <div className="space-y-8">
              {ABOUT_PROFILE.timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative pl-12"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full border border-primary/30 bg-surface flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  <div className="glow-card rounded-lg px-5 py-4 hover:border-primary/30 transition-all duration-300">
                    <span className="text-xs font-mono text-primary font-bold">
                      {item.year}
                    </span>
                    <p className="text-sm text-foreground-muted mt-1 leading-relaxed">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {ABOUT_PROFILE.metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glow-card rounded-lg p-5 text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-2xl font-heading font-bold text-primary glow-text">
                  {metric.value}
                </div>
                <div className="text-[11px] font-mono text-foreground-dim mt-1">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
