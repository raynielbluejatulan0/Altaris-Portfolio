"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, MessageCircle } from "lucide-react";
import { ABOUT_PROFILE } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-primary border border-primary/30 px-3 py-1.5 rounded-sm bg-primary/5">
                {ABOUT_PROFILE.title}
              </span>
            </motion.div>

            {/* Headline — matches kim-b exactly */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-heading font-bold text-foreground leading-[1.05] uppercase tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Automate Your Operations &amp; Scale{" "}
              <span className="text-primary glow-text">
                Without Hiring More Staff
              </span>
            </motion.h1>

            {/* Subtext — matches kim-b exactly */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-sm font-mono text-foreground-muted leading-relaxed mb-3 max-w-lg mx-auto lg:mx-0"
            >
              I build automation systems using n8n, AI, and workflow design to
              eliminate manual work, streamline operations, and improve
              efficiency.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-xs text-foreground-dim font-mono mb-10"
            >
              {ABOUT_PROFILE.availability} &middot; {ABOUT_PROFILE.timezone}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#what-i-can-build"
                className="flex items-center gap-2 px-7 py-3 bg-primary text-black font-heading font-bold text-sm rounded-sm hover:bg-primary/90 transition-all duration-200 shadow-glow-sm"
              >
                See My Work
                <ArrowDown size={15} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3 border border-primary/40 text-primary font-mono text-sm rounded-sm hover:bg-primary/10 hover:border-primary/70 transition-all duration-200 glow-border"
              >
                <MessageCircle size={15} />
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-primary/15 blur-3xl scale-105 pointer-events-none" />
              <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[410px] lg:w-[360px] lg:h-[460px] rounded-2xl overflow-hidden border border-primary/25 shadow-glow-md">
                <Image
                  src={ABOUT_PROFILE.photo}
                  alt={ABOUT_PROFILE.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
