"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  Mail,
  Phone,
  PlayCircle,
  ChevronDown,
  ChevronUp,
  Circle,
  Globe,
  Star,
  ArrowRight,
} from "lucide-react";
import { ABOUT_PROFILE, CONTACT, WORKFLOW_GALLERY } from "@/lib/constants";
import { useFocusTrap } from "@/lib/useFocusTrap";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CapabilityAccordion({
  title,
  details,
  id,
}: {
  title: string;
  details: string;
  id: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `accordion-panel-${id}`;
  const buttonId = `accordion-btn-${id}`;
  return (
    <div className="rounded-xl bg-white/[0.03] border border-white/5">
      <button
        id={buttonId}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium text-foreground hover:text-primary-300 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-xl"
      >
        <span>{title}</span>
        {open ? (
          <ChevronUp size={16} className="text-foreground-dim shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-foreground-dim shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-3 text-body-xs text-foreground-muted leading-relaxed">
              {details}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const focusTrapRef = useFocusTrap(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal card */}
          <motion.div
            ref={focusTrapRef}
            role="dialog"
            aria-modal="true"
            aria-label="About Me"
            className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-surface border border-white/10 shadow-2xl"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 text-foreground-dim hover:text-foreground transition-colors z-20"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="p-8 sm:p-10">
              {/* Header: Photo + Name */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                  <Image
                    src={ABOUT_PROFILE.photo}
                    alt={ABOUT_PROFILE.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl font-heading font-bold text-foreground">
                    {ABOUT_PROFILE.name}
                  </h2>
                  <p className="mt-1 text-foreground-muted">
                    {ABOUT_PROFILE.title}
                  </p>
                  <p className="mt-2 text-sm text-foreground-muted/80 italic leading-relaxed max-w-md">
                    {ABOUT_PROFILE.subtitle}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-success bg-success/10 border border-success/20 rounded-full px-3 py-1">
                      <Circle size={6} className="fill-success" />
                      {ABOUT_PROFILE.availability}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-foreground-dim">
                      <Globe size={12} className="text-foreground-dim" />
                      {ABOUT_PROFILE.timezone}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-foreground-muted leading-relaxed mb-8">
                {ABOUT_PROFILE.bio}
              </p>

              {/* Why Work With Me */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-foreground-dim uppercase tracking-wider mb-3">
                  Why Work With Me
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ABOUT_PROFILE.differentiators.map((d) => (
                    <div
                      key={d.title}
                      className="rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Star size={12} className="text-primary-300 shrink-0" />
                        <p className="text-sm font-medium text-foreground">
                          {d.title}
                        </p>
                      </div>
                      <p className="text-xs text-foreground-muted leading-relaxed">
                        {d.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Journey Timeline */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-foreground-dim uppercase tracking-wider mb-3">
                  AI Journey
                </h3>
                <div className="space-y-2">
                  {ABOUT_PROFILE.timeline.map((t) => (
                    <div key={t.year} className="flex gap-3 items-start">
                      <span className="text-xs font-bold text-primary-300 bg-primary/10 rounded-md px-2 py-1 shrink-0 mt-0.5">
                        {t.year}
                      </span>
                      <p className="text-sm text-foreground-muted">{t.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Metrics */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-foreground-dim uppercase tracking-wider mb-3">
                  Client Results
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {ABOUT_PROFILE.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="text-center rounded-xl bg-background/60 border border-white/5 p-3"
                    >
                      <div className="text-lg font-heading font-bold text-gradient">
                        {m.value}
                      </div>
                      <p className="mt-0.5 text-[11px] text-foreground-dim leading-tight">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What I Build */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-foreground-dim uppercase tracking-wider mb-3">
                  What I Build
                </h3>
                <div className="space-y-2">
                  {ABOUT_PROFILE.capabilities.map((c, i) => (
                    <CapabilityAccordion
                      key={c.title}
                      id={`cap-${i}`}
                      title={c.title}
                      details={c.details}
                    />
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-foreground-dim uppercase tracking-wider mb-3">
                  Tech Stack
                </h3>
                <div className="rounded-xl bg-white/[0.03] border border-white/5 overflow-hidden">
                  {ABOUT_PROFILE.techStack.map((row, i) => (
                    <div
                      key={row.layer}
                      className={`flex gap-4 px-4 py-2.5 text-sm ${
                        i !== ABOUT_PROFILE.techStack.length - 1
                          ? "border-b border-white/5"
                          : ""
                      }`}
                    >
                      <span className="text-foreground-dim w-[120px] shrink-0 font-medium">
                        {row.layer}
                      </span>
                      <span className="text-foreground-muted">{row.tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Videos */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-foreground-dim uppercase tracking-wider mb-3">
                  Demo Videos
                </h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  {ABOUT_PROFILE.demoVideos.map((video) => (
                    <a
                      key={video.title}
                      href={video.url}
                      onClick={onClose}
                      className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 px-4 py-3 text-sm text-foreground-muted hover:text-foreground transition-all duration-200 hover:bg-white/[0.08]"
                    >
                      <PlayCircle size={18} className="text-primary-300" />
                      {video.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Under the Hood — workflow screenshots */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-foreground-dim uppercase tracking-wider mb-3">
                  Under the Hood
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {WORKFLOW_GALLERY.map((wf) => (
                    <a
                      key={wf.src}
                      href="#workflows"
                      onClick={onClose}
                      className="group rounded-xl overflow-hidden border border-white/5 hover:border-primary/20 transition-colors"
                    >
                      <div className="relative aspect-video bg-black/30">
                        <Image
                          src={wf.src}
                          alt={wf.alt}
                          fill
                          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          sizes="(max-width: 640px) 50vw, 33vw"
                        />
                      </div>
                      <p className="px-2 py-1.5 text-[10px] text-foreground-dim leading-tight truncate">
                        {wf.caption}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Primary CTA */}
              <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-surface to-secondary/10 border border-white/10 p-6 text-center">
                <p className="text-lg font-heading font-semibold text-foreground mb-2">
                  Ready to automate your business?
                </p>
                <p className="text-sm text-foreground-muted mb-5">
                  Book a free call and I&apos;ll show you exactly how AI can work for your business.
                </p>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 text-sm transition-colors"
                >
                  Book a Call
                  <ArrowRight size={16} />
                </a>
                <div className="mt-4 flex items-center justify-center gap-4">
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-foreground-dim hover:text-foreground transition-colors"
                  >
                    <Phone size={12} />
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-1.5 text-xs text-foreground-dim hover:text-foreground transition-colors"
                  >
                    <Mail size={12} />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
