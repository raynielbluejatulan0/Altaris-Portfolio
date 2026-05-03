"use client";

import { motion } from "framer-motion";

const TIERS = [
  {
    level: "BEGINNER",
    label: "AUTOMATION FOUNDATIONS",
    subtext: "Fast builds. Reliable. Always in demand.",
    tagColor: "text-emerald-400",
    tagBg: "bg-emerald-400/10 border-emerald-400/25",
    dotColor: "bg-emerald-400",
    items: [
      "Lead Capture → CRM",
      "Contact Form → Auto Email Responder",
      "Appointment Booking Confirmation Flow",
      "WhatsApp Auto-Reply Bot",
      "Invoice Generator (Form → PDF → Email)",
      "Customer FAQ Auto-Responder",
    ],
  },
  {
    level: "INTERMEDIATE",
    label: "AI + BUSINESS WORKFLOWS",
    subtext: "Multi-step logic. AI decision making. Real business value.",
    tagColor: "text-amber-400",
    tagBg: "bg-amber-400/10 border-amber-400/25",
    dotColor: "bg-amber-400",
    items: [
      "AI Lead Qualification & Scoring Bot",
      "CRM Automation (Deal Stages + Follow-ups)",
      "AI Cold Email Personalization System",
      "AI Customer Support Agent",
      "AI Meeting Notes Generator",
      "AI Proposal Generator",
      "Customer Feedback Analysis System",
      "Automated Client Reporting System",
      "Subscription Payment Failure Follow-up",
    ],
  },
  {
    level: "ADVANCED",
    label: "AGENCY-LEVEL SYSTEMS",
    subtext: "Multi-agent AI. Scalable. High-ticket. Production-ready.",
    tagColor: "text-red-400",
    tagBg: "bg-red-400/10 border-red-400/25",
    dotColor: "bg-red-400",
    items: [
      "Full WhatsApp AI Customer Agent",
      "AI Sales Funnel Automation",
      "AI-Powered CRM with Memory",
      "Multi-Agent Support System",
      "Real-Time Lead Routing System",
      "End-to-End Agency Delivery System",
      "AI Voice Assistant for Businesses",
      "Fully Autonomous AI Business Agent",
      "AI Content Factory (Research → Publish)",
      "SaaS Onboarding Automation System",
    ],
  },
];

export function WhatICanBuildSection() {
  return (
    <section
      id="what-i-can-build"
      className="relative py-24 bg-surface/20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground uppercase tracking-wide mb-4">
            What I Can Build
          </h2>
          <p className="text-foreground-muted max-w-md mx-auto text-sm">
            From quick wins to full AI systems — here&apos;s the full range.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card rounded-lg overflow-hidden flex flex-col hover:border-primary/30 transition-all duration-300"
            >
              {/* Card header */}
              <div className="px-6 pt-6 pb-5 border-b border-primary/10">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-sm border ${tier.tagBg} ${tier.tagColor}`}
                  >
                    {tier.level}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-foreground text-sm uppercase tracking-wide mb-2">
                  {tier.label}
                </h3>
                <p className="text-foreground-dim text-xs leading-relaxed">
                  {tier.subtext}
                </p>
              </div>

              {/* List */}
              <ul className="px-6 py-5 space-y-2.5 flex-1">
                {tier.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className={`mt-[5px] w-1.5 h-1.5 rounded-full shrink-0 ${tier.dotColor}`}
                    />
                    <span className="text-foreground-muted text-xs leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-xs font-mono tracking-[0.12em] text-primary/70 uppercase"
        >
          All built on n8n &nbsp;&middot;&nbsp; All production-ready &nbsp;&middot;&nbsp; All deployable in days.
        </motion.p>
      </div>
    </section>
  );
}
