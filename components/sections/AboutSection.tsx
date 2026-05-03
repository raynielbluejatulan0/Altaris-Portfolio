"use client";

import { motion } from "framer-motion";
import { staggerContainer, blurFadeInUp } from "@/lib/animations";
import { ABOUT_PROFILE } from "@/lib/constants";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Section label */}
          <motion.p
            variants={blurFadeInUp}
            className="text-xs font-semibold uppercase tracking-widest text-primary-300 mb-8"
          >
            About
          </motion.p>

          {/* Bio */}
          <motion.div variants={blurFadeInUp} className="space-y-5">
            {ABOUT_PROFILE.bio.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-lg sm:text-xl text-foreground-muted leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Metrics */}
          <motion.div
            variants={blurFadeInUp}
            className="mt-12 grid grid-cols-3 gap-4 sm:gap-6"
          >
            {ABOUT_PROFILE.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-gradient">
                  {m.value}
                </div>
                <p className="mt-1 text-xs sm:text-sm text-foreground-dim leading-snug">
                  {m.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Differentiators */}
        <motion.div
          className="mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p
            variants={blurFadeInUp}
            className="text-xs font-semibold uppercase tracking-widest text-foreground-dim mb-8"
          >
            Why work with me
          </motion.p>

          <div className="space-y-5">
            {ABOUT_PROFILE.differentiators.map((item) => (
              <motion.div
                key={item.title}
                variants={blurFadeInUp}
                className="rounded-2xl bg-surface border border-white/5 p-6 sm:p-7"
              >
                <h4 className="text-base font-heading font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-body-sm text-foreground-muted leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey timeline */}
        <motion.div
          className="mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p
            variants={blurFadeInUp}
            className="text-xs font-semibold uppercase tracking-widest text-foreground-dim mb-10"
          >
            Journey
          </motion.p>

          <div className="space-y-6">
            {ABOUT_PROFILE.timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="flex items-start gap-6 sm:gap-8"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="shrink-0 w-12 text-right">
                  <span className="text-sm font-bold text-primary-300 font-heading tabular-nums">
                    {item.year}
                  </span>
                </div>

                <div className="relative shrink-0 flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-primary/60 ring-4 ring-background z-10 mt-1.5" />
                  {i < ABOUT_PROFILE.timeline.length - 1 && (
                    <div className="w-px flex-1 bg-white/5 mt-2 h-6" />
                  )}
                </div>

                <p className="text-foreground-muted leading-relaxed pt-0.5">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
