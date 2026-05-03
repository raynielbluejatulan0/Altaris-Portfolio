"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const CARDS = [
  {
    title: "AI SYSTEMS I BUILD",
    items: [
      "AI Voice Receptionists — VAPI + Claude + ElevenLabs",
      "Multi-Channel Messaging Agents (8 platforms)",
      "Intelligent Booking & Calendar Automation",
      "Outbound AI Follow-Up Call Systems",
      "CRM Integration & Pipeline Automation",
      "End-of-Call Intelligence & Transcript Logging",
    ],
  },
  {
    title: "TOOLS & BACKGROUND",
    items: [
      "3+ years working with AI tools professionally",
      "n8n workflow automation — 18 workflows, 146 nodes built",
      "Prompt engineering across Claude, GPT-4, and Gemini",
      "Integrations: GoHighLevel, Supabase, WhatsApp, Twilio",
      "Voice stack: VAPI, Deepgram Nova-3, ElevenLabs",
      "Multilingual AI support — English & Spanish",
    ],
  },
];

function AccordionCard({ title, items }: { title: string; items: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`glow-card rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
        open ? "border-primary/40" : "hover:border-primary/30"
      }`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-5">
        <span className="text-xs font-mono font-bold tracking-[0.15em] uppercase text-primary">
          {title}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={16} className="text-primary/60" />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="px-6 pb-5 space-y-2.5 border-t border-primary/10 pt-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground-muted text-xs leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AboutMeSection() {
  return (
    <section id="about" className="relative py-24 bg-surface/20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-4">
              About Me
            </p>
            {/* Cyan underline accent */}
            <div className="w-12 h-0.5 bg-primary mb-8" />

            <p className="text-sm font-mono text-foreground-muted leading-relaxed mb-6">
              AI Automation Specialist with 3+ years building production systems
              that replace manual work. Background spans generative AI content
              creation, prompt engineering for LLMs, and full-stack workflow
              automation — a unique lens on what AI can realistically do for a
              business today.
            </p>
            <p className="text-sm font-mono text-foreground-muted leading-relaxed">
              Specializing in voice agents, multi-channel messaging bots, and
              n8n workflow design. Every system runs live, handles real
              interactions, and operates 24/7 — without anyone babysitting it.
            </p>
          </motion.div>

          {/* Right — accordion cards + what I can help with */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 lg:pt-16"
          >
            {CARDS.map((card) => (
              <AccordionCard key={card.title} title={card.title} items={card.items} />
            ))}

            {/* What I can help with */}
            <div className="glow-card rounded-lg p-6">
              <p className="text-xs font-mono font-bold tracking-[0.15em] uppercase text-primary mb-4">
                What I Can Help With
              </p>
              <ul className="space-y-2.5">
                {[
                  "Automating research and data pipelines",
                  "Building AI chat and voice agents",
                  "Internal workflow automation for teams",
                  "CRM integrations and lead management",
                  "End-to-end agency delivery systems",
                  "Custom AI tools for business operations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground-muted text-xs leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
