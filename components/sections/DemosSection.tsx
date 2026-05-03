"use client";

import { motion } from "framer-motion";
import { VIDEO_DEMOS } from "@/lib/constants";

export function DemosSection() {
  return (
    <section id="demos" className="relative py-24 bg-surface/20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-3">
            Demos
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Two systems. Both live. Both recorded.
          </h2>
          <p className="text-foreground-muted max-w-md mx-auto text-sm">
            Real calls. Real messages. No editing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {VIDEO_DEMOS.map((demo, i) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-5 pb-0">
                <div className="rounded-md overflow-hidden bg-black/40">
                  <video
                    controls
                    preload="none"
                    playsInline
                    aria-label={`Demo video: ${demo.title}`}
                    className="w-full aspect-video"
                  >
                    <source src={demo.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="px-5 pt-4 pb-6">
                <h3 className="font-heading font-semibold text-foreground text-base mb-2">
                  {demo.title}
                </h3>
                <p className="text-xs font-mono text-foreground-muted leading-relaxed">
                  {demo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
