"use client";

import { motion } from "framer-motion";
import {
  PhoneOff,
  PhoneIncoming,
  ClockAlert,
  Zap,
  CalendarX,
  CalendarCheck,
  Building2,
  Stethoscope,
  Briefcase,
  ArrowRight,
  UserX,
  RefreshCw,
} from "lucide-react";
import { staggerContainer, blurFadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";

const audiences = [
  {
    icon: Stethoscope,
    label: "Clinics & Healthcare",
    examples: "Dental, plastic surgery, med spas, dermatology, chiropractic",
  },
  {
    icon: Building2,
    label: "Service Businesses",
    examples: "Salons, HVAC, roofing, law firms, real estate agencies",
  },
  {
    icon: Briefcase,
    label: "Agencies & Consultants",
    examples: "Marketing agencies, coaches, multi-location businesses",
  },
];

const problemSolutions = [
  {
    problem: { icon: PhoneOff, text: "Missed calls go to voicemail" },
    solution: { icon: PhoneIncoming, text: "AI answers every call instantly" },
  },
  {
    problem: { icon: ClockAlert, text: "Slow replies lose hot leads" },
    solution: { icon: Zap, text: "AI responds in under 5 seconds" },
  },
  {
    problem: { icon: CalendarX, text: "Manual booking wastes staff time" },
    solution: {
      icon: CalendarCheck,
      text: "AI books appointments automatically",
    },
  },
  {
    problem: { icon: UserX, text: "No follow-ups after initial contact" },
    solution: {
      icon: RefreshCw,
      text: "Automated CRM + follow-up sequences",
    },
  },
];

export function ConversionSection() {
  return (
    <SectionContainer id="who-its-for" className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary">Who This Is For</Badge>
          <h2 className="section-title">
            Built for Businesses That{" "}
            <span className="text-gradient">Can&apos;t Afford to Miss</span>{" "}
            a Lead
          </h2>
          <p className="section-subtitle">
            If your business relies on calls, messages, or appointments — this
            system was built for you.
          </p>
        </div>

        {/* Audience cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {audiences.map((a) => (
            <motion.div
              key={a.label}
              variants={blurFadeInUp}
              whileHover={{
                y: -6,
                borderColor: "rgba(108, 92, 231, 0.25)",
                boxShadow:
                  "0 12px 30px rgba(0, 0, 0, 0.2), 0 0 12px rgba(108, 92, 231, 0.08)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group rounded-2xl bg-surface border border-white/5 p-6 text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/10 group-hover:border-primary/30 mx-auto mb-4 transition-colors">
                <a.icon size={24} className="text-primary-300" />
              </div>
              <h3 className="font-heading font-semibold text-foreground">
                {a.label}
              </h3>
              <p className="mt-2 text-body-xs text-foreground-dim leading-relaxed">
                {a.examples}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Problem → Solution mapping */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-center text-sm font-medium text-foreground-dim uppercase tracking-widest mb-10">
            The Problem → Our Solution
          </h3>

          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {problemSolutions.map((ps) => (
              <motion.div
                key={ps.problem.text}
                variants={blurFadeInUp}
                className="grid grid-cols-[1fr,auto,1fr] items-center gap-4 rounded-xl bg-surface border border-white/5 p-5 sm:p-6"
              >
                {/* Problem */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/10">
                    <ps.problem.icon size={18} className="text-red-400" />
                  </div>
                  <span className="text-sm text-foreground-muted">
                    {ps.problem.text}
                  </span>
                </div>

                {/* Arrow */}
                <ArrowRight size={18} className="text-primary/60 flex-shrink-0" />

                {/* Solution */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-success/10 border border-success/10">
                    <ps.solution.icon size={18} className="text-success" />
                  </div>
                  <span className="text-sm text-foreground font-medium">
                    {ps.solution.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Result callout */}
          <motion.div
            className="mt-10 text-center rounded-2xl bg-gradient-to-r from-primary/10 via-surface to-secondary/10 border border-white/5 p-8"
            variants={blurFadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-lg font-heading font-semibold text-foreground">
              The Result?
            </p>
            <p className="mt-2 text-foreground-muted max-w-lg mx-auto">
              More appointments booked, faster response times, and zero missed
              opportunities — without hiring extra staff.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
