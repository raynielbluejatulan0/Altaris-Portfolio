"use client";

import { motion } from "framer-motion";
import {
  PhoneOff,
  CalendarX,
  Users,
  CalendarCheck,
  ArrowRight,
  Star,
} from "lucide-react";
import { staggerContainer, blurFadeInUp } from "@/lib/animations";
import { VIDEO_DEMOS, CONTACT } from "@/lib/constants";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function AutomationDemoSection() {
  return (
    <SectionContainer id="automation" className="relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary">Live Demos</Badge>
          <h2 className="section-title">See the AI in Action</h2>
          <p className="section-subtitle">
            Real interactions showing how the AI responds, guides conversations,
            and books appointments automatically.
          </p>
        </div>

        {/* Video Demos - 2/3 + 1/3 layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {VIDEO_DEMOS.map((demo) => (
            <motion.div
              key={demo.title}
              variants={blurFadeInUp}
              className="rounded-2xl bg-surface border border-white/5 overflow-hidden"
            >
              {/* Badge */}
              <div className="px-5 pt-5 pb-0">
                <Badge
                  variant={demo.badgeVariant}
                  size="sm"
                >
                  {demo.featured && (
                    <Star
                      size={10}
                      className="inline mr-1 fill-current -mt-px"
                    />
                  )}
                  {demo.badge}
                </Badge>
              </div>

              {/* Video player */}
              <div className="px-5 pt-4">
                <div className="rounded-xl overflow-hidden bg-black/40">
                  <video
                    controls
                    preload="none"
                    playsInline
                    poster={demo.videoSrc.replace(".mp4", "-poster.jpg")}
                    aria-label={`Demo video: ${demo.title}`}
                    title={demo.title}
                    className="w-full aspect-video"
                  >
                    <source src={demo.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Info */}
              <div className="px-5 pt-4 pb-5">
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  {demo.title}
                </h3>
                <p className="mt-1.5 text-body-sm text-foreground-muted leading-relaxed">
                  {demo.description}
                </p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {demo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-primary-300 font-medium"
                    >
                      {tag}
                      {tag !== demo.tags[demo.tags.length - 1] && (
                        <span className="text-foreground-dim ml-2">&bull;</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Replaces / Result block */}
        <motion.div
          className="mt-8 max-w-xl mx-auto"
          variants={blurFadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          <div className="grid grid-cols-[1fr,auto,1fr] gap-4 rounded-xl bg-surface border border-white/5 p-5 sm:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-3">
                Replaces
              </p>
              <ul className="space-y-2">
                {[
                  { icon: PhoneOff, text: "Missed calls" },
                  { icon: CalendarX, text: "Manual booking" },
                  { icon: Users, text: "Front desk overload" },
                ].map((item) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-2 text-sm text-foreground-muted"
                  >
                    <item.icon
                      size={14}
                      className="text-red-400/70 flex-shrink-0"
                    />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center">
              <div className="w-px h-full bg-white/5" />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-success mb-3">
                Result
              </p>
              <div className="flex items-center gap-2">
                <CalendarCheck
                  size={16}
                  className="text-success flex-shrink-0"
                />
                <p className="text-sm font-medium text-foreground">
                  More booked appointments automatically
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Teaser line */}
        <p className="mt-6 text-body-sm text-foreground-dim italic text-center">
          More demos coming: outbound AI calls, follow-up automation, and
          multi-client routing.
        </p>

        {/* Mini CTA */}
        <motion.div
          className="mt-10 text-center"
          variants={blurFadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="inline-block rounded-2xl bg-surface border border-white/5 px-8 sm:px-12 py-8">
            <p className="text-lg font-heading font-semibold text-foreground mb-4">
              Want this system for your business?
            </p>
            <Button size="md" href={CONTACT.whatsapp}>
              Book Demo
              <ArrowRight size={16} />
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
