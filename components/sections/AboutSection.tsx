"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Shield, Headphones } from "lucide-react";
import { slideInLeft, staggerContainer, scaleInSpring } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";

const differentiators = [
  {
    icon: Layers,
    title: "Custom-Built Systems",
    description: "No cookie-cutter templates — every system is tailored to your business.",
  },
  {
    icon: Cpu,
    title: "AI Agent Expertise",
    description: "Deep expertise in voice AI, chatbots, and intelligent workflow automation.",
  },
  {
    icon: Shield,
    title: "End-to-End Delivery",
    description: "From audit to deployment to optimization — we handle it all.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Continuous monitoring, optimization, and support after launch.",
  },
];

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Badge>About Altaris</Badge>
          <h2 className="mt-4 text-display-sm sm:text-display-md font-heading font-bold text-foreground">
            Built by{" "}
            <span className="text-gradient">Automation Obsessives</span>
          </h2>
          <p className="mt-6 text-foreground-muted leading-relaxed">
            Altaris is an AI automation studio focused on helping businesses
            replace manual, repetitive work with intelligent systems. We
            specialize in building AI voice agents, chatbots, and workflow
            automation that actually works in the real world.
          </p>
          <p className="mt-4 text-foreground-muted leading-relaxed">
            We don&apos;t just set up tools — we architect complete automation
            systems that integrate seamlessly with your existing operations and
            scale as your business grows.
          </p>
        </motion.div>

        {/* Right: Feature grid with scale-in spring */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.title}
              variants={scaleInSpring}
              whileHover={{
                y: -6,
                borderColor: "rgba(108, 92, 231, 0.25)",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2), 0 0 12px rgba(108, 92, 231, 0.08)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group rounded-2xl bg-surface border border-white/5 p-6"
            >
              <motion.div
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/10 group-hover:border-primary/30 mb-4 transition-colors"
                whileHover={{ rotate: 8 }}
              >
                <item.icon size={20} className="text-primary-300" />
              </motion.div>
              <h4 className="font-heading font-semibold text-foreground text-sm">
                {item.title}
              </h4>
              <p className="mt-1.5 text-body-xs text-foreground-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
