"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { WORKFLOW_GALLERY } from "@/lib/constants";

export function WorkflowsSection() {
  const [selected, setSelected] = useState<{ src: string; alt: string; caption: string } | null>(null);

  return (
    <>
      <section id="workflows" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-3">
              Workflows
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Under the Hood
            </h2>
            <p className="text-foreground-muted max-w-md mx-auto text-sm">
              Real n8n workflows. Not mockups.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {WORKFLOW_GALLERY.map((wf, i) => (
              <motion.div
                key={wf.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glow-card rounded-lg overflow-hidden cursor-pointer hover:border-primary/40 transition-all duration-300 group"
                onClick={() => setSelected(wf)}
              >
                <div className="relative aspect-video bg-black/20">
                  <Image
                    src={wf.src}
                    alt={wf.alt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="px-4 py-3">
                  <p className="text-xs font-mono text-foreground-muted">{wf.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close image"
            >
              <X size={20} />
            </button>
            <motion.div
              className="relative z-10 w-full max-w-5xl"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-primary/20 bg-surface">
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-xs font-mono text-foreground-muted">
                {selected.caption}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
