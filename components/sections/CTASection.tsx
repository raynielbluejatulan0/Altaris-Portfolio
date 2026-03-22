"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Mail } from "lucide-react";
import { blurFadeInUp, heroStagger } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

export function CTASection() {
  return (
    <section id="cta" className="relative py-section sm:py-section-lg px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-surface to-secondary/10" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[100px] pointer-events-none"
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        variants={heroStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={blurFadeInUp} className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary-300 mb-6">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={14} />
          </motion.div>
          <span>Free Consultation</span>
        </motion.div>

        <motion.h2
          variants={blurFadeInUp}
          className="text-display-sm sm:text-display-md lg:text-display-lg font-heading font-bold text-foreground text-balance"
        >
          Ready to{" "}
          <span className="text-gradient">Automate</span>{" "}
          Your Business?
        </motion.h2>

        <motion.p
          variants={blurFadeInUp}
          className="mt-6 text-body-lg text-foreground-muted max-w-xl mx-auto"
        >
          Stop losing leads to missed calls and slow replies. Let&apos;s talk
          about how AI can fill your calendar on autopilot.
        </motion.p>

        <motion.div variants={blurFadeInUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" href={CONTACT.whatsapp}>
            Message Me on WhatsApp
            <ArrowRight size={18} />
          </Button>
          <Button variant="outline" size="lg" href={`mailto:${CONTACT.email}`}>
            <Mail size={18} />
            Send Me an Email
          </Button>
        </motion.div>

        <motion.p
          variants={blurFadeInUp}
          className="mt-4 text-xs text-foreground-dim"
        >
          Free 20-min consultation · No commitment required
        </motion.p>

        <motion.p
          variants={blurFadeInUp}
          className="mt-3 text-body-sm text-foreground-dim"
        >
          Fast setup &bull; Custom-built &bull; Scalable for agencies
        </motion.p>
      </motion.div>
    </section>
  );
}
