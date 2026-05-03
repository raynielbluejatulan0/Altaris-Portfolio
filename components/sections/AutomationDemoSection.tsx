"use client";

import { motion } from "framer-motion";
import { staggerContainer, blurFadeInUp } from "@/lib/animations";
import { VIDEO_DEMOS } from "@/lib/constants";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function AutomationDemoSection() {
  return (
    <SectionContainer id="demos" className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-300 mb-4">
            Demos
          </p>
          <h2 className="section-title">
            Two systems. Both live. Both recorded.
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
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
              {/* Video player */}
              <div className="p-5 pb-0">
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
              <div className="px-5 pt-5 pb-6">
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  {demo.title}
                </h3>
                <p className="mt-2 text-body-sm text-foreground-muted leading-relaxed">
                  {demo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
