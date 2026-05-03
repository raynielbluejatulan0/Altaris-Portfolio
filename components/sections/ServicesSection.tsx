"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            What I Can Do For You
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto text-sm">
            End-to-end AI automation — from first call to closed deal, without manual work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glow-card rounded-lg p-6 hover:border-primary/35 transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <span className="text-primary font-mono text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-foreground-dim text-xs leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
