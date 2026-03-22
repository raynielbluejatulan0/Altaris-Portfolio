"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { staggerContainer, blurFadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";

const FAQ_ITEMS = [
  {
    question: "What is AI automation for business?",
    answer:
      "AI automation uses intelligent agents and workflow tools to handle repetitive business tasks — answering calls, booking appointments, responding to messages, and managing leads. It replaces manual front-desk work so your team can focus on delivering services.",
  },
  {
    question: "What businesses benefit most from this?",
    answer:
      "Service-based businesses that rely on calls, messages, and appointments benefit the most — dental clinics, med spas, salons, HVAC companies, law firms, real estate agencies, and marketing agencies managing multiple clients.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most systems are designed, built, and deployed within 2-4 weeks. Simple setups (single voice agent + booking) can go live in under a week. Complex multi-channel systems with CRM integration take closer to 3-4 weeks.",
  },
  {
    question: "Do I need technical knowledge to use this?",
    answer:
      "Not at all. Once your system is live, it runs on autopilot. You'll get a simple dashboard to monitor calls, messages, and bookings. I handle all the technical setup, integrations, and ongoing maintenance.",
  },
  {
    question: "What channels does the AI agent support?",
    answer:
      "The AI agent works across 8 channels: phone calls (voice AI), SMS, Facebook Messenger, Instagram DM, WhatsApp, Email, Live Chat, and Google Business Messages — all managed by a single AI brain.",
  },
  {
    question: "What happens if the AI can't handle a request?",
    answer:
      "The system has built-in human handoff. If a caller or message requires a real person, the AI transfers them to your team with full context — who they are, what they need, and what was already discussed.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-btn-${index}`;

  return (
    <div className="border-b border-white/5 last:border-b-0">
      <button
        id={buttonId}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between py-5 px-1 text-left group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-lg"
      >
        <span className="text-sm sm:text-base font-medium text-foreground group-hover:text-primary-300 transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown
            size={18}
            className="text-foreground-dim group-hover:text-primary-300 transition-colors"
          />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 px-1 text-sm text-foreground-muted leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  return (
    <SectionContainer id="faq">
      <div className="text-center mb-12">
        <Badge>FAQ</Badge>
        <h2 className="section-title">
          Common{" "}
          <span className="text-gradient">Questions</span>
        </h2>
        <p className="section-subtitle">
          Everything you need to know before getting started.
        </p>
      </div>

      <motion.div
        className="max-w-3xl mx-auto rounded-2xl bg-surface border border-white/5 px-6 sm:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {FAQ_ITEMS.map((item, i) => (
          <motion.div key={item.question} variants={blurFadeInUp}>
            <FAQItem
              question={item.question}
              answer={item.answer}
              index={i}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
