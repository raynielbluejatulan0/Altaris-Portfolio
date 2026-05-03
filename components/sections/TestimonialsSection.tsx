"use client";

import { motion } from "framer-motion";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 bg-surface/20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-3">
            Social Proof
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Testimonials
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="glow-card rounded-xl p-12 border-dashed">
            <p className="text-foreground-dim text-sm font-mono">
              Client testimonials coming soon.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
