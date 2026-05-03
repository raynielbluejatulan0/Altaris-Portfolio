"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { AlertCircle, CheckCircle2, TrendingUp, ArrowRight } from "lucide-react";
import { blurFadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { CASE_STUDIES } from "@/lib/constants";
import { SectionContainer } from "@/components/ui/SectionContainer";

function AnimatedMetric({ value, delay }: { value: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numMatch = value.match(/(\d+)/);
    if (!numMatch) {
      setDisplayed(value);
      return;
    }

    const target = parseInt(numMatch[1], 10);
    const suffix = value.replace(/\d+/, "");
    const duration = 1200;
    const start = performance.now();

    const timer = setTimeout(() => {
      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        setDisplayed(`${current}${suffix}`);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-heading font-bold text-gradient">
      {displayed}
    </div>
  );
}

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
                  <div className="flex flex-col items-center gap-1">
                    <ArrowRight size={18} className="text-primary-300/60" />
                  </div>
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
              <div className="p-8 sm:p-10 border-b border-white/5">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground-dim mb-3">
                  What I built
                </p>
                <p className="text-foreground-muted text-body-sm leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {/* Results */}
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-2 text-secondary mb-6">
                  <TrendingUp size={16} />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Results
                  </span>
                </div>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {study.results.map((result, i) => (
                    <motion.div
                      key={result.label}
                      variants={blurFadeInUp}
                      whileHover={{
                        y: -4,
                        borderColor: "rgba(108, 92, 231, 0.2)",
                        transition: { duration: 0.2 },
                      }}
                      className="relative text-center rounded-xl bg-background/60 border border-white/5 p-6 overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <AnimatedMetric value={result.metric} delay={i * 200} />
                        <p className="mt-2 text-sm text-foreground-dim">
                          {result.label}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
