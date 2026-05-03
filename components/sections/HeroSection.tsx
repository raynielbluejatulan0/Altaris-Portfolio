"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { heroStagger, blurFadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { ABOUT_PROFILE } from "@/lib/constants";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary/8 via-transparent to-transparent" />

      {/* Grid dot pattern */}
      <motion.div
        className="absolute inset-0 bg-grid"
        style={{ opacity: gridOpacity }}
      />

      {/* Gradient orb */}
      <motion.div
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px] pointer-events-none"
        style={{ y: orbY }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        <div className="lg:grid lg:grid-cols-[1fr,420px] lg:gap-16 xl:gap-24 lg:items-center">
          {/* Left column — copy */}
          <div className="text-center lg:text-left">
            <motion.p
              variants={blurFadeInUp}
              className="text-sm font-medium text-primary-300 tracking-wide uppercase mb-4"
            >
              {ABOUT_PROFILE.title}
            </motion.p>

            <motion.h1
              variants={blurFadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground leading-[1.08] text-balance"
            >
              {ABOUT_PROFILE.name}
            </motion.h1>

            <motion.p
              variants={blurFadeInUp}
              className="mt-7 text-xl sm:text-2xl lg:text-xl xl:text-2xl text-foreground-muted leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              I build AI systems that answer calls, book appointments, and update
              CRMs — while the business runs.
            </motion.p>

            <motion.p
              variants={blurFadeInUp}
              className="mt-5 text-sm text-foreground-dim"
            >
              {ABOUT_PROFILE.availability} &middot; {ABOUT_PROFILE.timezone}
            </motion.p>

            <motion.div
              variants={blurFadeInUp}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button size="lg" href="#projects">
                See My Work
                <ArrowDown size={16} />
              </Button>
              <Button variant="outline" size="lg" href="#contact">
                Get in Touch
              </Button>
            </motion.div>
          </div>

          {/* Right column — photo */}
          <motion.div
            variants={blurFadeInUp}
            className="mt-14 lg:mt-0 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Subtle glow behind photo */}
              <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl scale-110 pointer-events-none" />
              <div className="relative w-[300px] h-[380px] sm:w-[340px] sm:h-[430px] lg:w-[380px] lg:h-[480px] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={ABOUT_PROFILE.photo}
                  alt={ABOUT_PROFILE.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 380px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
