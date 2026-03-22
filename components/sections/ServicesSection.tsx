"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageSquare,
  Workflow,
  Users,
  Check,
} from "lucide-react";
import { staggerContainer, blurFadeInUp } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { IconBox } from "@/components/ui/IconBox";

const iconMap = {
  Phone,
  MessageSquare,
  Workflow,
  Users,
} as const;

export function ServicesSection() {
  return (
    <SectionContainer id="services" className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <Badge>Our Services</Badge>
          <h2 className="section-title">
            What Your AI System{" "}
            <span className="text-gradient">Actually Does</span>
          </h2>
          <p className="section-subtitle">
            Not just tools — these are complete systems that replace manual work
            and run your front desk on autopilot.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={blurFadeInUp}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(108, 92, 231, 0.25)",
                  boxShadow:
                    "0 20px 50px rgba(0, 0, 0, 0.3), 0 0 20px rgba(108, 92, 231, 0.08)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group relative rounded-2xl bg-surface border border-white/5 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-7">
                  {/* Top row: icon + highlight badge */}
                  <div className="flex items-center justify-between mb-5">
                    <IconBox
                      icon={Icon}
                      size="lg"
                      className="group-hover:shadow-glow-sm transition-shadow duration-300"
                    />
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-300 bg-primary/10 border border-primary/10 rounded-full px-3 py-1">
                      {service.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-gradient transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-body-sm text-foreground-muted leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature checklist */}
                  <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-xs text-foreground-muted"
                      >
                        <Check
                          size={12}
                          className="text-success shrink-0"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-foreground-dim bg-white/5 rounded-md px-2 py-0.5 group-hover:bg-white/[0.08] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
