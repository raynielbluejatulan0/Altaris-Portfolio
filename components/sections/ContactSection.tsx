"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/6 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-3">
            Available Now
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Contact
          </h2>
          <p className="text-foreground-muted max-w-md mx-auto text-sm">
            Let&apos;s talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-lg mx-auto"
        >
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-full sm:w-auto justify-center px-8 py-4 bg-primary text-black font-heading font-bold text-sm rounded-sm hover:bg-primary/90 transition-all duration-200 shadow-glow-sm"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-3 w-full sm:w-auto justify-center px-8 py-4 border border-primary/40 text-primary font-mono text-sm rounded-sm hover:bg-primary/10 hover:border-primary/70 transition-all duration-200 glow-border"
          >
            <Mail size={16} />
            {CONTACT.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
