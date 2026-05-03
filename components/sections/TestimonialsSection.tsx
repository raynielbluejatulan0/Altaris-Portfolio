"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "Blue built us an AI phone system that now handles every after-hours call. We went from 12 missed calls a day to zero. The booking system talks to our calendar in real time — it's been running for 3 months without a single failure.",
    name: "Sarah Mendez",
    role: "Practice Manager",
    company: "Bayside Dental Group",
    initials: "SM",
    color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    quote:
      "We were losing emergency repair jobs overnight to competitors. Blue set up an AI voice receptionist that qualifies calls, dispatches our on-call tech via SMS, and logs everything to our CRM automatically. Game changer.",
    name: "James Thornton",
    role: "Owner",
    company: "Coastal Air Services",
    initials: "JT",
    color: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  },
  {
    quote:
      "1,200 messages a month across 6 platforms — Instagram, WhatsApp, website. Blue connected everything to one AI agent. It answers, qualifies, and books consultations. Our front desk went from overwhelmed to fully focused on in-clinic care.",
    name: "Camille Park",
    role: "Director",
    company: "Lumiere Med Spa",
    initials: "CP",
    color: "text-pink-400 bg-pink-400/10 border-pink-400/20",
  },
  {
    quote:
      "I brought Blue in to automate our client onboarding. What took 2 hours of manual setup per client now takes 8 minutes with zero human involvement. It's become one of our core competitive advantages.",
    name: "Daniel Cruz",
    role: "CEO",
    company: "Elevate Agency",
    initials: "DC",
    color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  },
  {
    quote:
      "Blue built an AI lead qualification system for our outbound campaigns. It scores every lead before a human ever touches it. Our reps now only call warm prospects — conversion rate doubled in 6 weeks.",
    name: "Priya Nair",
    role: "Founder",
    company: "Convrt Digital",
    initials: "PN",
    color: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  },
  {
    quote:
      "We needed a WhatsApp bot that could handle membership inquiries, class bookings, and payment reminders — all at once. Blue delivered it in under 2 weeks. Clean system, solid documentation, and it just works.",
    name: "Marcus Reid",
    role: "Operations Manager",
    company: "Studio Strong",
    initials: "MR",
    color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 bg-surface/20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-3">
            Social Proof
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Testimonials
          </h2>
          <p className="text-foreground-muted max-w-md mx-auto text-sm">
            From clients who let AI run their front desk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glow-card rounded-lg p-6 flex flex-col hover:border-primary/30 transition-all duration-300"
            >
              <StarRow />

              <p className="text-foreground-muted text-xs leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                <div
                  className={`w-9 h-9 rounded-full border flex items-center justify-center text-[10px] font-mono font-bold shrink-0 ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-foreground text-xs font-heading font-semibold">
                    {t.name}
                  </p>
                  <p className="text-foreground-dim text-[10px] font-mono">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
