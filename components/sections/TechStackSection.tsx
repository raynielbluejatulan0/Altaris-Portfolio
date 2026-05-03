"use client";

import { motion } from "framer-motion";
import { staggerContainer, blurFadeInUp } from "@/lib/animations";
import { TECH_STACK_TABLE } from "@/lib/constants";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function TechStackSection() {
  return (
    <SectionContainer id="stack">
      <motion.div
        className="max-w-3xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div variants={blurFadeInUp} className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-300 mb-4">
            Stack
          </p>
          <h2 className="section-title text-left">
            The tools I actually use.
          </h2>
        </motion.div>

        <motion.div
          variants={blurFadeInUp}
          className="rounded-2xl bg-surface border border-white/5 overflow-hidden"
        >
          {TECH_STACK_TABLE.map((row, i) => (
            <motion.div
              key={row.layer}
              className={`grid grid-cols-[140px,1fr] sm:grid-cols-[180px,1fr,1fr] gap-0 ${
                i < TECH_STACK_TABLE.length - 1 ? "border-b border-white/5" : ""
              }`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Layer label */}
              <div className="px-6 py-5 border-r border-white/5">
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground-dim">
                  {row.layer}
                </span>
              </div>

              {/* Tools */}
              <div className="px-6 py-5 sm:border-r border-white/5">
                <span className="text-sm font-medium text-foreground">
                  {row.tools}
                </span>
              </div>

              {/* Note */}
              {row.note && (
                <div className="hidden sm:block px-6 py-5">
                  <span className="text-xs text-foreground-dim">{row.note}</span>
                </div>
              )}
              {!row.note && (
                <div className="hidden sm:block px-6 py-5" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
