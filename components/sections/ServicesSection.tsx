"use client";

import { motion } from "framer-motion";
import { staggerContainer, blurFadeInUp } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function ServicesSection() {
  return (
    <SectionContainer id="skills" className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-300 mb-4">
            Capabilities
          </p>
          <h2 className="section-title">What I Build</h2>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={blurFadeInUp}
              whileHover={{
                y: -4,
                borderColor: "rgba(108, 92, 231, 0.2)",
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="group relative rounded-2xl bg-surface border border-white/5 p-7 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              <div className="relative z-10">
                <h3 className="text-base font-heading font-semibold text-foreground group-hover:text-gradient transition-colors duration-300 leading-snug">
                  {service.title}
                </h3>
                <p className="mt-3 text-body-sm text-foreground-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
