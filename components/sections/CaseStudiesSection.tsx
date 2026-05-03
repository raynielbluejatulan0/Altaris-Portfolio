"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { blurFadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { CASE_STUDIES } from "@/lib/constants";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function CaseStudiesSection() {
  return (
    <SectionContainer id="projects" className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-300 mb-4">
            Projects
          </p>
          <h2 className="section-title">
            Here&apos;s what I built and what happened.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {CASE_STUDIES.map((study) => (
            <motion.div
              key={study.title}
              variants={blurFadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-2xl bg-surface border border-white/5 overflow-hidden"
            >
              {/* Top bar */}
              <div className="px-8 sm:px-10 pt-8 sm:pt-10 pb-6 border-b border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      {study.title}
                    </h3>
                    <p className="mt-1 text-sm text-foreground-dim">
                      {study.client} &middot; {study.industry}
                    </p>
                  </div>
                  <span className="self-start text-[10px] font-mono font-medium text-primary-300 bg-primary/10 border border-primary/15 rounded-md px-3 py-1.5 whitespace-nowrap">
                    {study.techBuilt}
                  </span>
                </div>
              </div>

              {/* Before → After block */}
              <div className="grid md:grid-cols-[1fr,auto,1fr] border-b border-white/5">
                <motion.div
                  className="p-8 sm:p-10"
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 text-red-400 mb-3">
                    <AlertCircle size={14} />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Before
                    </span>
                  </div>
                  <p className="text-foreground-muted text-body-sm leading-relaxed">
                    {study.before}
                  </p>
                </motion.div>

                <div className="hidden md:flex items-center">
                  <ArrowRight size={18} className="text-primary-300/60" />
                </div>

                <motion.div
                  className="p-8 sm:p-10"
                  variants={slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 text-success mb-3">
                    <CheckCircle2 size={14} />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      After
                    </span>
                  </div>
                  <p className="text-foreground-muted text-body-sm leading-relaxed">
                    {study.after}
                  </p>
                </motion.div>
              </div>

              {/* What I built */}
              <div className="p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground-dim mb-3">
                  What I built
                </p>
                <p className="text-foreground-muted text-body-sm leading-relaxed">
                  {study.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
