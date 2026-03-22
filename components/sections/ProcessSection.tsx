"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket, LineChart } from "lucide-react";
import { staggerContainer, blurFadeInUp } from "@/lib/animations";
import { PROCESS_STEPS } from "@/lib/constants";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { type LucideIcon } from "lucide-react";

const stepIcons: LucideIcon[] = [Search, PenTool, Rocket, LineChart];

export function ProcessSection() {
  return (
    <SectionContainer id="process">
      <div className="text-center mb-16">
        <Badge>Process</Badge>
        <h2 className="section-title">
          How We Work
        </h2>
        <p className="section-subtitle">
          A proven four-step process to design, build, and optimize your
          automation systems.
        </p>
      </div>

      <motion.div
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Animated connecting line (desktop only) */}
        <svg
          className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-[2px] overflow-visible"
          style={{ width: "75%" }}
        >
          <motion.line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            stroke="url(#lineGrad)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          />
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(108, 92, 231, 0.4)" />
              <stop offset="50%" stopColor="rgba(108, 92, 231, 0.2)" />
              <stop offset="100%" stopColor="rgba(108, 92, 231, 0.4)" />
            </linearGradient>
          </defs>
        </svg>

        {PROCESS_STEPS.map((step, index) => {
          const Icon = stepIcons[index];
          return (
            <motion.div
              key={step.step}
              variants={blurFadeInUp}
              className="relative group"
            >
              <div className="flex flex-col items-center text-center">
                {/* Step icon with hover lift */}
                <div className="relative">
                  <motion.div
                    className="flex items-center justify-center w-20 h-20 rounded-2xl bg-surface border border-white/10 group-hover:border-primary/30 transition-all duration-300"
                    whileHover={{
                      y: -6,
                      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2), 0 0 15px rgba(108, 92, 231, 0.1)",
                      transition: { type: "spring", stiffness: 300, damping: 20 },
                    }}
                  >
                    <Icon size={28} className="text-primary" />
                  </motion.div>

                  {/* Step number badge with pulse */}
                  <motion.div
                    className="absolute -top-2 -right-2 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-xs font-bold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + index * 0.15,
                      type: "spring",
                      stiffness: 400,
                      damping: 12,
                    }}
                  >
                    {step.step}
                  </motion.div>
                </div>

                <h3 className="mt-6 text-lg font-heading font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-body-sm text-foreground-muted leading-relaxed max-w-[260px]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
