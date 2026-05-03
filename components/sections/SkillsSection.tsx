"use client";

import { motion } from "framer-motion";
import { SKILLS_MARQUEE } from "@/lib/constants";

const SKILL_COLORS: Record<string, string> = {
  "n8n":            "text-orange-400 border-orange-400/25 bg-orange-400/8",
  "Make.com":       "text-orange-300 border-orange-300/25 bg-orange-300/8",
  "VAPI":           "text-violet-400 border-violet-400/25 bg-violet-400/8",
  "Deepgram":       "text-violet-300 border-violet-300/25 bg-violet-300/8",
  "ElevenLabs":     "text-purple-400 border-purple-400/25 bg-purple-400/8",
  "Claude":         "text-sky-400 border-sky-400/25 bg-sky-400/8",
  "Gemini":         "text-blue-400 border-blue-400/25 bg-blue-400/8",
  "GoHighLevel":    "text-emerald-400 border-emerald-400/25 bg-emerald-400/8",
  "ActiveCampaign": "text-emerald-300 border-emerald-300/25 bg-emerald-300/8",
  "Supabase":       "text-green-400 border-green-400/25 bg-green-400/8",
  "PostgreSQL":     "text-teal-400 border-teal-400/25 bg-teal-400/8",
  "Next.js":        "text-slate-200 border-slate-200/25 bg-slate-200/5",
  "TypeScript":     "text-blue-500 border-blue-500/25 bg-blue-500/8",
  "Tailwind CSS":   "text-cyan-400 border-cyan-400/25 bg-cyan-400/8",
  "Framer Motion":  "text-pink-400 border-pink-400/25 bg-pink-400/8",
  "Vercel":         "text-slate-300 border-slate-300/25 bg-slate-300/5",
  "Google Docs":    "text-yellow-400 border-yellow-400/25 bg-yellow-400/8",
  "Webhooks":       "text-amber-400 border-amber-400/25 bg-amber-400/8",
  "Messenger API":  "text-blue-400 border-blue-400/25 bg-blue-400/8",
  "WhatsApp API":   "text-green-400 border-green-400/25 bg-green-400/8",
  "Twilio":         "text-red-400 border-red-400/25 bg-red-400/8",
};

const DEFAULT_COLOR = "text-cyan-400 border-cyan-400/20 bg-cyan-400/5";

const HALF = Math.ceil(SKILLS_MARQUEE.length / 2);
const ROW1 = SKILLS_MARQUEE.slice(0, HALF);
const ROW2 = SKILLS_MARQUEE.slice(HALF);

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-1.5">
      <div
        className={`flex gap-3 w-max ${reverse ? "animate-marquee-right" : "animate-marquee-left"}`}
      >
        {doubled.map((item, i) => {
          const color = SKILL_COLORS[item] ?? DEFAULT_COLOR;
          return (
            <span
              key={`${item}-${i}`}
              className={`shrink-0 px-4 py-2 text-xs font-mono border rounded-sm transition-all duration-200 hover:scale-105 ${color}`}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-4"
        >
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-3">
            Tools & Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Skills
          </h2>
          <p className="text-foreground-muted max-w-md mx-auto text-sm">
            The tools I actually use. All production-tested.
          </p>
        </motion.div>

        <div className="space-y-3">
          <MarqueeRow items={ROW1} />
          <MarqueeRow items={ROW2} reverse />
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
}
