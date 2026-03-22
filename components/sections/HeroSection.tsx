"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Bot,
  Zap,
  BarChart3,
  PhoneIncoming,
  Clock,
  CalendarCheck,
  Database,
  Brain,
  Workflow,
} from "lucide-react";
import { heroStagger, blurFadeInUp } from "@/lib/animations";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

const stats = [
  { value: "18", label: "Production Workflows" },
  { value: "8", label: "Channels Unified" },
  { value: "24/7", label: "AI Availability" },
];

const benefits = [
  { icon: Clock, text: "24/7 instant call & message handling" },
  { icon: PhoneIncoming, text: "AI answers every missed call" },
  { icon: CalendarCheck, text: "Automated appointment booking" },
  { icon: Database, text: "CRM updated in real time" },
];

const floatingIcons = [
  { icon: Bot, x: "10%", y: "20%", delay: 0, size: 28 },
  { icon: Zap, x: "85%", y: "15%", delay: 0.5, size: 24 },
  { icon: BarChart3, x: "78%", y: "70%", delay: 1, size: 26 },
];

const systemSteps = [
  {
    step: "01",
    label: "LEAD ENTERS",
    detail: "Call, Messenger, Instagram, SMS, Web Chat",
    icon: PhoneIncoming,
  },
  {
    step: "02",
    label: "AI RESPONDS",
    detail: "Voice or text conversation starts instantly",
    icon: Brain,
  },
  {
    step: "03",
    label: "SYSTEM ACTS",
    detail: "Checks calendar, books appointment, updates CRM",
    icon: Workflow,
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />

      {/* Grid dot pattern with parallax fade */}
      <motion.div
        className="absolute inset-0 bg-grid"
        style={{ opacity: gridOpacity }}
      />

      {/* Gradient orb - top with parallax */}
      <motion.div
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        style={{ y: orbY }}
      />

      {/* Secondary orb - bottom right, breathing */}
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-secondary/[0.08] blur-[100px] pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating icons with spring entrance + bob + rotate */}
      {floatingIcons.map(({ icon: Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center justify-center w-14 h-14 rounded-xl bg-surface/40 backdrop-blur-sm border border-white/5 text-primary/40"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            delay: 1 + delay,
            duration: 0.6,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={size} />
          </motion.div>
        </motion.div>
      ))}

      {/* Content — split layout on lg+ */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        <div className="lg:grid lg:grid-cols-[1fr,380px] lg:gap-12 xl:gap-16 lg:items-center">
          {/* Left column — copy */}
          <div className="text-center lg:text-left">
            <motion.div variants={blurFadeInUp}>
              <Badge>AI-Powered Automation</Badge>
            </motion.div>

            <motion.h1
              variants={blurFadeInUp}
              className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground leading-[1.1] text-balance"
            >
              Stop Losing Leads.{" "}
              <span className="text-gradient">Start Booking</span>{" "}
              Automatically.
            </motion.h1>

            <motion.p
              variants={blurFadeInUp}
              className="mt-6 text-lg sm:text-xl lg:text-lg text-foreground-muted max-w-2xl lg:max-w-none text-balance leading-relaxed mx-auto lg:mx-0"
            >
              We build AI systems that answer your calls, reply to messages, book
              appointments, and update your CRM — all on autopilot, 24/7.
            </motion.p>

            {/* Benefit bullets */}
            <motion.div
              variants={blurFadeInUp}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3"
            >
              {benefits.map((b) => (
                <div
                  key={b.text}
                  className="flex items-center gap-2 text-sm text-foreground-muted"
                >
                  <b.icon size={16} className="text-primary-300 flex-shrink-0" />
                  <span>{b.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={blurFadeInUp}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button size="lg" href={CONTACT.whatsapp}>
                Book a Free Call
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" href="#flow">
                See How It Works
              </Button>
            </motion.div>

            <motion.p
              variants={blurFadeInUp}
              className="mt-4 text-xs text-foreground-dim text-center lg:text-left"
            >
              Free 20-min consultation · No commitment required
            </motion.p>

            {/* Personal trust line */}
            <motion.p
              variants={blurFadeInUp}
              className="mt-6 text-sm text-foreground-dim/80 italic"
            >
              Built by an AI automation specialist focused on real business results
              &mdash; not just demos.
            </motion.p>
          </div>

          {/* Right column — System Preview Card */}
          <motion.div
            variants={blurFadeInUp}
            className="mt-12 lg:mt-0"
          >
            <div className="rounded-2xl bg-surface border border-white/5 p-6 relative overflow-hidden max-w-[400px] mx-auto lg:max-w-none">
              {/* Subtle card glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

              <div className="relative z-10">
                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/10">
                      <Bot size={16} className="text-primary-300" />
                    </div>
                    <h3 className="text-sm font-heading font-semibold text-foreground">
                      AI Front Desk Engine
                    </h3>
                  </div>
                  <Badge variant="success" size="sm">Live-ready</Badge>
                </div>

                {/* Step rows */}
                <div className="space-y-3 mb-5">
                  {systemSteps.map((s, i) => (
                    <motion.div
                      key={s.step}
                      className="flex items-start gap-3 rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 1.0 + i * 0.2,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                    >
                      <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 shrink-0 mt-0.5">
                        <s.icon size={14} className="text-primary-300" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-primary-300">
                          {s.label}
                        </p>
                        <p className="text-xs text-foreground-muted mt-0.5 leading-relaxed">
                          {s.detail}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Animated connector dots between steps */}
                <div className="flex items-center justify-center gap-1.5 mb-5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-primary/40"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                {/* Bottom info split */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/[0.03] border border-white/5 px-3 py-2.5">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-foreground-dim mb-1.5">
                      Best For
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {["Dental", "Med Spas", "Services"].map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-foreground-muted bg-white/5 rounded-md px-1.5 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] border border-white/5 px-3 py-2.5">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-foreground-dim mb-1.5">
                      Main Outcome
                    </p>
                    <div className="flex items-center gap-1.5">
                      <CalendarCheck size={12} className="text-success shrink-0" />
                      <p className="text-[11px] text-foreground-muted leading-tight">
                        Faster replies, more bookings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar — full width below both columns */}
        <motion.div
          variants={blurFadeInUp}
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 1.2 + i * 0.15,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <div className="text-2xl sm:text-3xl font-heading font-bold text-gradient">
                {stat.value}
              </div>
              <p className="mt-1 text-xs sm:text-sm text-foreground-dim">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
