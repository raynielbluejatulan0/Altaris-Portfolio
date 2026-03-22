"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { staggerContainer, blurFadeInUp } from "@/lib/animations";
import { CONTACT } from "@/lib/constants";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";

const contactMethods = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: CONTACT.whatsappDisplay,
    href: CONTACT.whatsapp,
    color: "primary" as const,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    color: "secondary" as const,
  },
];

const colorStyles = {
  primary: {
    icon: "text-primary-300",
    bg: "bg-primary/10 border-primary/10 group-hover:border-primary/30",
    hover: "hover:border-primary/20",
  },
  secondary: {
    icon: "text-secondary-300",
    bg: "bg-secondary/10 border-secondary/10 group-hover:border-secondary/30",
    hover: "hover:border-secondary/20",
  },
};

export function ContactSection() {
  return (
    <SectionContainer id="contact">
      <div className="text-center mb-16">
        <Badge>Contact</Badge>
        <h2 className="section-title">
          Get In Touch
        </h2>
        <p className="section-subtitle">
          Ready to explore automation for your business? Reach out and let&apos;s
          talk about what AI can do for you.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {contactMethods.map((method) => {
          const styles = colorStyles[method.color];
          return (
            <motion.a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={blurFadeInUp}
              className={`group relative rounded-2xl bg-surface border border-white/5 p-8 text-center transition-colors duration-300 ${styles.hover}`}
              whileHover={{
                y: -8,
                boxShadow: "0 16px 40px rgba(0, 0, 0, 0.25), 0 0 15px rgba(108, 92, 231, 0.08)",
                borderColor: "rgba(108, 92, 231, 0.2)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl border ${styles.bg} transition-colors duration-300 mx-auto mb-4`}
                  whileHover={{
                    rotate: [0, -8, 8, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <method.icon size={26} className={styles.icon} />
                </motion.div>

                <h3 className="font-heading font-semibold text-foreground">
                  {method.label}
                </h3>
                <p className="mt-1.5 text-sm text-foreground-dim">
                  {method.value}
                </p>

                <motion.div
                  className="mx-auto mt-4"
                  initial={{ opacity: 0, y: 4 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  <ArrowUpRight
                    size={16}
                    className="mx-auto text-foreground-dim opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300"
                  />
                </motion.div>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
