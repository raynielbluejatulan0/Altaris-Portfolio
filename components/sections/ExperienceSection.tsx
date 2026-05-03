"use client";

import { motion } from "framer-motion";
import { ABOUT_PROFILE } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 bg-surface/20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-6">
            {ABOUT_PROFILE.timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-14 sm:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-0 top-5 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-primary/30 bg-background flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                </div>

                <div className="glow-card rounded-lg px-6 py-5 hover:border-primary/30 transition-all duration-300">
                  <span className="text-xs font-mono text-primary font-bold tracking-wider">
                    {item.year}
                  </span>
                  <h3 className="font-heading font-semibold text-foreground text-sm mt-1 mb-2">
                    {item.label}
                  </h3>
                  <p className="text-foreground-dim text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
