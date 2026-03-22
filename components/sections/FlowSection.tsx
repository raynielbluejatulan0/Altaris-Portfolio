"use client";

import { motion } from "framer-motion";
import {
  PhoneIncoming,
  BrainCircuit,
  CalendarCheck,
  ChevronRight,
  ShieldCheck,
  Clock,
  TrendingUp,
} from "lucide-react";
import { staggerContainer, blurFadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";

const steps = [
  {
    icon: PhoneIncoming,
    step: "01",
    title: "Lead Comes In",
    description:
      "A potential customer calls your business or sends a message on any platform. Instead of going to voicemail or waiting hours for a reply — your AI picks up instantly.",
  },
  {
    icon: BrainCircuit,
    step: "02",
    title: "AI Understands & Checks",
    description:
      "The AI understands what the customer needs, answers their questions, and checks your real-time calendar availability — no human needed.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Booked & Updated",
    description:
      "The appointment is booked automatically. Your calendar, CRM, and team are all updated in real time. The customer gets a confirmation instantly.",
  },
];

const whyItems = [
  {
    icon: Clock,
    text: "Never miss a lead — even at 2 AM",
  },
  {
    icon: ShieldCheck,
    text: "No manual data entry or follow-up needed",
  },
  {
    icon: TrendingUp,
    text: "More bookings with zero extra staff",
  },
];

export function FlowSection() {
  return (
    <SectionContainer id="flow" className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <Badge>How It Works</Badge>
          <h2 className="section-title">
            From Missed Call to{" "}
            <span className="text-gradient">Booked Appointment</span>
          </h2>
          <p className="section-subtitle">
            Your AI system handles the entire journey — from the first ring to a
            confirmed booking — in under 60 seconds.
          </p>
        </div>

        {/* 3-Step Flow */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              variants={blurFadeInUp}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                {/* Step icon */}
                <motion.div
                  className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-surface border border-white/10 group"
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(108, 92, 231, 0.4)",
                    boxShadow:
                      "0 8px 30px rgba(108, 92, 231, 0.15)",
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    },
                  }}
                >
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border border-primary/20"
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                  />
                  <step.icon size={32} className="text-primary relative z-10" />

                  {/* Step number badge */}
                  <motion.div
                    className="absolute -top-2 -right-2 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-xs font-bold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + i * 0.15,
                      type: "spring",
                      stiffness: 400,
                      damping: 12,
                    }}
                  >
                    {i + 1}
                  </motion.div>
                </motion.div>

                {/* Connector arrow (between steps on desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 lg:-right-[18px]">
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                      }}
                    >
                      <ChevronRight
                        size={20}
                        className="text-primary/40"
                      />
                    </motion.div>
                  </div>
                )}

                <h3 className="mt-6 text-lg font-heading font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-body-sm text-foreground-muted leading-relaxed max-w-[300px]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why This Matters panel */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          variants={blurFadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="rounded-2xl bg-surface border border-white/5 p-8 sm:p-10">
            <h3 className="text-lg font-heading font-semibold text-foreground text-center mb-6">
              Why This Matters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {whyItems.map((item) => (
                <div
                  key={item.text}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/10">
                    <item.icon size={20} className="text-primary-300" />
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
