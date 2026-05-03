"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TechTag {
  label: string;
  color: string;
}

interface FlowNode {
  label: string;
  type: "trigger" | "ai" | "action" | "output";
}

interface Project {
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  featureTags: string[];
  before: string;
  after: string;
  result: string;
  bullets: string[];
  techTags: TechTag[];
  outcomes: string[];
  flow: FlowNode[];
}

const PROJECTS: Project[] = [
  {
    category: "VOICE AI AUTOMATION",
    categoryColor: "text-violet-400 border-violet-400/30 bg-violet-400/8",
    title: "AI Voice Receptionist System",
    description:
      "A 24/7 AI phone agent built on VAPI, Claude, and ElevenLabs. Answers every inbound call, pulls knowledge base context, checks live calendar availability, and books appointments — no human required.",
    featureTags: ["24/7 CALL HANDLING", "REAL-TIME BOOKING", "HUMAN HANDOFF"],
    before: "Missed calls daily, staff overwhelmed with phones, bookings lost after hours",
    after: "AI answers every call, checks live calendar, and books appointments instantly",
    result: "Zero missed calls — business runs 24/7 without front desk staff",
    bullets: [
      "VAPI voice AI with ElevenLabs natural voice",
      "Knowledge base lookup on every call",
      "Real-time calendar availability via GHL API",
      "Automatic appointment creation + confirmation SMS",
      "Human handoff trigger on complex requests",
      "Multilingual support — English & Spanish",
    ],
    techTags: [
      { label: "N8N", color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/8" },
      { label: "VAPI", color: "text-violet-400 border-violet-400/30 bg-violet-400/8" },
      { label: "CLAUDE", color: "text-sky-400 border-sky-400/30 bg-sky-400/8" },
      { label: "ELEVENLABS", color: "text-purple-400 border-purple-400/30 bg-purple-400/8" },
      { label: "GHL", color: "text-teal-400 border-teal-400/30 bg-teal-400/8" },
    ],
    outcomes: ["Zero missed calls", "24/7 availability", "Auto CRM logging"],
    flow: [
      { label: "Inbound Phone Call", type: "trigger" },
      { label: "VAPI Voice AI Agent", type: "ai" },
      { label: "Knowledge Base Lookup", type: "action" },
      { label: "Calendar Availability Check", type: "action" },
      { label: "Book Appointment + SMS", type: "output" },
    ],
  },
  {
    category: "AI MESSAGING AUTOMATION",
    categoryColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/8",
    title: "Multi-Channel AI Messaging Agent",
    description:
      "A single AI agent deployed across 8 messaging platforms simultaneously — SMS, WhatsApp, Messenger, Instagram DM, Email, Live Chat, and more. Qualifies leads, answers FAQs, and books appointments automatically.",
    featureTags: ["8-CHANNEL UNIFIED", "AI QUALIFICATION", "AUTO-BOOKING"],
    before: "Leads across 8 channels, 1 overwhelmed staff member, 4-hour avg response time",
    after: "Single AI handles all channels instantly, qualifies and books without human input",
    result: "5-second response time across all channels — zero missed inquiries",
    bullets: [
      "Universal channel router via n8n webhook",
      "Claude AI for intent detection & qualification",
      "Automated FAQ responses from knowledge base",
      "Real-time booking across calendar providers",
      "CRM contact creation on every new lead",
      "Auto-escalation on complaints or urgent requests",
    ],
    techTags: [
      { label: "N8N", color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/8" },
      { label: "CLAUDE", color: "text-sky-400 border-sky-400/30 bg-sky-400/8" },
      { label: "WHATSAPP API", color: "text-green-400 border-green-400/30 bg-green-400/8" },
      { label: "MESSENGER API", color: "text-blue-400 border-blue-400/30 bg-blue-400/8" },
      { label: "GHL", color: "text-teal-400 border-teal-400/30 bg-teal-400/8" },
    ],
    outcomes: ["5s response time", "8 channels unified", "Zero missed leads"],
    flow: [
      { label: "Message from Any Channel", type: "trigger" },
      { label: "Universal Channel Router", type: "action" },
      { label: "Claude AI — Intent & Qualification", type: "ai" },
      { label: "Calendar Check + CRM Lookup", type: "action" },
      { label: "Reply + Book + Log to CRM", type: "output" },
    ],
  },
  {
    category: "CRM AUTOMATION",
    categoryColor: "text-amber-400 border-amber-400/30 bg-amber-400/8",
    title: "Lead Qualification & CRM Pipeline",
    description:
      "An AI workflow that captures incoming leads, scores them automatically, creates CRM records, moves pipeline stages, and triggers follow-up sequences — with no manual data entry ever.",
    featureTags: ["AI LEAD SCORING", "AUTO CRM UPDATES", "FOLLOW-UP SEQUENCES"],
    before: "Leads entered manually, slow CRM updates, follow-ups missed, no scoring logic",
    after: "AI scores every lead instantly, CRM auto-updated, follow-ups fire without human input",
    result: "Sales reps only work warm leads — conversion rate doubled in 6 weeks",
    bullets: [
      "Webhook trigger on form submission or call end",
      "Claude AI lead scoring (Hot / Warm / Cold)",
      "Automatic contact creation in GoHighLevel",
      "Pipeline stage mapping by lead score",
      "Missed call task creation for follow-up",
      "Drip sequence trigger based on lead behavior",
    ],
    techTags: [
      { label: "N8N", color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/8" },
      { label: "CLAUDE", color: "text-sky-400 border-sky-400/30 bg-sky-400/8" },
      { label: "GHL", color: "text-teal-400 border-teal-400/30 bg-teal-400/8" },
      { label: "SUPABASE", color: "text-green-400 border-green-400/30 bg-green-400/8" },
      { label: "WEBHOOKS", color: "text-amber-400 border-amber-400/30 bg-amber-400/8" },
    ],
    outcomes: ["Auto lead scoring", "CRM auto-updated", "Follow-ups triggered"],
    flow: [
      { label: "Lead Captured (Form / Call / SMS)", type: "trigger" },
      { label: "Claude AI — Score & Classify Lead", type: "ai" },
      { label: "Create / Update CRM Contact", type: "action" },
      { label: "Move Pipeline Stage", type: "action" },
      { label: "Trigger Follow-Up Sequence", type: "output" },
    ],
  },
  {
    category: "AI WORKFLOW",
    categoryColor: "text-sky-400 border-sky-400/30 bg-sky-400/8",
    title: "End-of-Call Intelligence Pipeline",
    description:
      "After every call ends, this workflow automatically processes the full transcript — extracting contact details, mapping outcomes to CRM stages, sending booking confirmation SMS, and logging call analytics.",
    featureTags: ["TRANSCRIPT PROCESSING", "AUTO CRM MAPPING", "SMART FOLLOW-UPS"],
    before: "Manual call notes, lost contact info, no post-call system, zero analytics",
    after: "AI extracts all data from transcript and routes it to the right system automatically",
    result: "Zero manual post-call work — 100% of calls logged with full intelligence",
    bullets: [
      "VAPI call-end webhook triggers pipeline",
      "Claude AI extracts contact info from transcript",
      "Outcome mapped to CRM pipeline stage",
      "Booking confirmation sent via SMS (Twilio)",
      "Call analytics stored in Supabase",
      "Failed extractions flagged for manual review",
    ],
    techTags: [
      { label: "N8N", color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/8" },
      { label: "VAPI", color: "text-violet-400 border-violet-400/30 bg-violet-400/8" },
      { label: "CLAUDE", color: "text-sky-400 border-sky-400/30 bg-sky-400/8" },
      { label: "TWILIO", color: "text-red-400 border-red-400/30 bg-red-400/8" },
      { label: "SUPABASE", color: "text-green-400 border-green-400/30 bg-green-400/8" },
    ],
    outcomes: ["Zero manual data entry", "Auto SMS sent", "Full call analytics"],
    flow: [
      { label: "Call Ends — VAPI Webhook Fires", type: "trigger" },
      { label: "Claude AI — Parse Transcript", type: "ai" },
      { label: "Extract Contact + Map Outcome", type: "action" },
      { label: "Update CRM + Log to Supabase", type: "action" },
      { label: "Send Confirmation SMS via Twilio", type: "output" },
    ],
  },
  {
    category: "BUSINESS AUTOMATION",
    categoryColor: "text-orange-400 border-orange-400/30 bg-orange-400/8",
    title: "White-Label Client Onboarding System",
    description:
      "A config-driven onboarding system that provisions a new client's complete AI setup in under 10 minutes — isolated knowledge base, credentials, CRM connection, and calendar — with zero workflow modifications.",
    featureTags: ["CONFIG-ONLY SETUP", "PER-CLIENT ISOLATION", "ZERO WORKFLOW CHANGES"],
    before: "2+ hours manual setup per client, risk of config errors, not scalable past 5 clients",
    after: "Fill config form → system provisions everything automatically in under 10 minutes",
    result: "Onboard unlimited clients at agency scale with one operator and zero dev changes",
    bullets: [
      "Single config form triggers entire onboarding",
      "Supabase stores isolated credentials per client",
      "Knowledge base created and populated automatically",
      "GHL sub-account provisioned and connected",
      "Calendar integration activated per client",
      "Confirmation sent to client and internal team",
    ],
    techTags: [
      { label: "N8N", color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/8" },
      { label: "SUPABASE", color: "text-green-400 border-green-400/30 bg-green-400/8" },
      { label: "POSTGRESQL", color: "text-teal-400 border-teal-400/30 bg-teal-400/8" },
      { label: "GHL", color: "text-teal-400 border-teal-400/30 bg-teal-400/8" },
      { label: "WEBHOOKS", color: "text-amber-400 border-amber-400/30 bg-amber-400/8" },
    ],
    outcomes: ["10-min onboarding", "Fully isolated", "Unlimited scale"],
    flow: [
      { label: "Config Form Submitted", type: "trigger" },
      { label: "Provision Supabase Credentials", type: "action" },
      { label: "Create Knowledge Base + GHL Account", type: "action" },
      { label: "Connect Calendar + Activate Agent", type: "action" },
      { label: "Notify Client + Internal Team", type: "output" },
    ],
  },
];

const NODE_STYLES: Record<string, string> = {
  trigger: "border-primary/40 bg-primary/8 text-primary",
  ai:      "border-violet-400/40 bg-violet-400/8 text-violet-300",
  action:  "border-foreground-dim/20 bg-surface text-foreground-muted",
  output:  "border-emerald-400/40 bg-emerald-400/8 text-emerald-300",
};

const NODE_DOT: Record<string, string> = {
  trigger: "bg-primary",
  ai:      "bg-violet-400",
  action:  "bg-foreground-dim/50",
  output:  "bg-emerald-400",
};

function WorkflowViz({ flow }: { flow: FlowNode[] }) {
  return (
    <div className="flex flex-col items-center gap-0 w-full max-w-xs mx-auto">
      {flow.map((node, i) => (
        <div key={node.label} className="flex flex-col items-center w-full">
          <div
            className={`w-full rounded-md border px-4 py-3 text-center text-xs font-mono font-medium transition-all duration-200 ${NODE_STYLES[node.type]}`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${NODE_DOT[node.type]}`} />
              {node.label}
            </div>
          </div>
          {i < flow.length - 1 && (
            <div className="flex flex-col items-center py-1">
              <div className="w-px h-4 bg-primary/20" />
              <div
                className="w-0 h-0"
                style={{
                  borderLeft: "4px solid transparent",
                  borderRight: "4px solid transparent",
                  borderTop: "5px solid rgba(0,255,255,0.25)",
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function AutomationProjectsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };
  const prev = () => go((current - 1 + PROJECTS.length) % PROJECTS.length);
  const next = () => go((current + 1) % PROJECTS.length);

  const p = PROJECTS[current];

  return (
    <section id="projects" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-primary mb-3">
            Featured Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground uppercase tracking-wide mb-4">
            Automation Systems
          </h2>
          <p className="text-sm font-mono text-foreground-muted max-w-lg mx-auto leading-relaxed">
            Real systems built for real businesses. Every workflow is
            production-ready.
          </p>
          <div className="w-12 h-0.5 bg-primary mx-auto mt-5" />
        </motion.div>

        {/* Carousel card */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-primary/20 bg-surface/60 shadow-glow-sm overflow-hidden"
              style={{ boxShadow: "0 0 40px rgba(0,255,255,0.06), inset 0 0 0 1px rgba(0,255,255,0.12)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr,340px] gap-0">

                {/* Left — content */}
                <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-primary/10">

                  {/* Category badge */}
                  <span className={`inline-block text-[10px] font-mono font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-sm border mb-5 ${p.categoryColor}`}>
                    {p.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-foreground text-xl sm:text-2xl mb-4 leading-snug">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs font-mono text-foreground-muted leading-relaxed mb-5">
                    {p.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.featureTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono tracking-wider text-foreground-dim border border-foreground-dim/20 px-2.5 py-1 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Before / After / Result */}
                  <div className="border border-primary/10 rounded-md overflow-hidden mb-6 font-mono text-xs">
                    {[
                      { label: "BEFORE", value: p.before, className: "text-foreground-muted" },
                      { label: "AFTER",  value: p.after,  className: "text-foreground" },
                      { label: "RESULT", value: p.result, className: "text-primary font-bold" },
                    ].map((row, i) => (
                      <div
                        key={row.label}
                        className={`flex gap-4 px-4 py-3 ${i < 2 ? "border-b border-primary/8" : ""}`}
                      >
                        <span className="text-foreground-dim/60 tracking-widest w-12 shrink-0 pt-px">
                          {row.label}
                        </span>
                        <span className={row.className + " leading-relaxed"}>
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1.5 mb-6">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs font-mono text-foreground-muted">
                        <span className="text-primary mt-px shrink-0">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.techTags.map((t) => (
                      <span
                        key={t.label}
                        className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-sm border ${t.color}`}
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>

                  {/* Outcome boxes */}
                  <div className="grid grid-cols-3 gap-3">
                    {p.outcomes.map((o) => (
                      <div
                        key={o}
                        className="text-center text-[10px] font-mono text-foreground-muted border border-primary/10 rounded-sm px-2 py-3 bg-surface/50"
                      >
                        {o}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — workflow visualization */}
                <div className="p-8 flex flex-col items-center justify-center bg-background/40">
                  <p className="text-[10px] font-mono tracking-widest uppercase text-foreground-dim/50 mb-6">
                    Workflow Flow
                  </p>
                  <WorkflowViz flow={p.flow} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrow buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full border border-primary/20 bg-surface flex items-center justify-center text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 hidden lg:flex"
            aria-label="Previous project"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full border border-primary/20 bg-surface flex items-center justify-center text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 hidden lg:flex"
            aria-label="Next project"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Mobile nav + dots */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={prev} className="lg:hidden text-foreground-dim hover:text-primary transition-colors">
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-foreground-dim/30 hover:bg-foreground-dim/60"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          <button onClick={next} className="lg:hidden text-foreground-dim hover:text-primary transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
