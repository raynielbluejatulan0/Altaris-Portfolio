"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  GitBranch,
  PhoneCall,
  Rocket,
  Database,
  Mic,
  AudioLines,
  Globe,
  Palette,
  FileCode,
  Triangle,
  FileText,
  Webhook,
} from "lucide-react";
import { blurFadeInUp } from "@/lib/animations";
import { TECH_STACK_ROW1, TECH_STACK_ROW2 } from "@/lib/constants";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Sparkles,
  GitBranch,
  PhoneCall,
  Rocket,
  Database,
  Mic,
  AudioLines,
  Globe,
  Palette,
  FileCode,
  Triangle,
  FileText,
  Webhook,
};

function MarqueeRow({
  items,
  direction = "left",
  speed = 30,
}: {
  items: { name: string; icon: string }[];
  direction?: "left" | "right";
  speed?: number;
}) {
  // Duplicate items enough times for seamless loop
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicated.map((tech, i) => {
          const Icon = iconMap[tech.icon];
          return (
            <div
              key={`${tech.name}-${i}`}
              className="group flex items-center gap-3 rounded-full bg-surface border border-white/5 hover:border-primary/20 px-5 py-3 transition-all duration-300 hover:bg-white/[0.04] cursor-default shrink-0"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/10 group-hover:border-primary/25 transition-colors">
                {Icon && (
                  <Icon
                    size={16}
                    className="text-primary-300 group-hover:text-primary-200 transition-colors"
                  />
                )}
              </div>
              <span className="text-sm font-medium text-foreground-muted group-hover:text-foreground transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export function TechStackSection() {
  return (
    <SectionContainer id="tech-stack">
      <motion.div
        className="text-center mb-12"
        variants={blurFadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Badge>Technology</Badge>
        <h2 className="section-title">Powered By the Best</h2>
        <p className="section-subtitle">
          We use the best AI and automation tools to build systems that are
          reliable, scalable, and powerful.
        </p>
      </motion.div>

      <div className="space-y-4">
        <MarqueeRow items={TECH_STACK_ROW1} direction="left" speed={35} />
        <MarqueeRow items={TECH_STACK_ROW2} direction="right" speed={40} />
      </div>
    </SectionContainer>
  );
}
