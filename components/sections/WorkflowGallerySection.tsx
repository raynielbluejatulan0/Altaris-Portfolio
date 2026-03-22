"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { staggerContainer, blurFadeInUp } from "@/lib/animations";
import { WORKFLOW_GALLERY } from "@/lib/constants";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { useFocusTrap } from "@/lib/useFocusTrap";

export function WorkflowGallerySection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);

  const closeModal = useCallback(() => setSelectedImage(null), []);
  const focusTrapRef = useFocusTrap(!!selectedImage);

  useEffect(() => {
    if (!selectedImage) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [selectedImage, closeModal]);

  return (
    <>
      <SectionContainer id="workflows" className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center mb-16">
            <Badge>Behind the Scenes</Badge>
            <h2 className="section-title">
              The Actual Workflows{" "}
              <span className="text-gradient">Running Your AI</span>
            </h2>
            <p className="section-subtitle">
              These are real n8n automation workflows powering the voice agents,
              messaging, booking, and CRM — not mockups.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {WORKFLOW_GALLERY.map((wf) => (
              <motion.div
                key={wf.src}
                variants={blurFadeInUp}
                whileHover={{
                  y: -4,
                  borderColor: "rgba(108, 92, 231, 0.2)",
                  transition: { duration: 0.2 },
                }}
                className="group rounded-2xl bg-surface border border-white/5 overflow-hidden cursor-pointer"
                onClick={() =>
                  setSelectedImage({
                    src: wf.src,
                    alt: wf.alt,
                    caption: wf.caption,
                  })
                }
              >
                <div className="relative aspect-[16/9] bg-black/20">
                  <Image
                    src={wf.src}
                    alt={wf.alt}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm font-medium text-foreground-muted">
                    {wf.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionContainer>

      {/* Fullscreen image lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <div ref={focusTrapRef} role="dialog" aria-modal="true" aria-label="Workflow image preview" className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeModal}
              aria-hidden="true"
            />

            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close image"
            >
              <X size={20} />
            </button>

            {/* Image container */}
            <motion.div
              className="relative z-10 w-full max-w-6xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-surface border border-white/10">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-sm text-foreground-muted">
                {selectedImage.caption}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
