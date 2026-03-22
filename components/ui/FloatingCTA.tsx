"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { CONTACT } from "@/lib/constants";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 30px rgba(108, 92, 231, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-primary-500 hover:bg-primary-600 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-primary/20 transition-colors duration-200"
        >
          <MessageCircle size={16} />
          Book Demo
        </motion.a>
      )}
    </AnimatePresence>
  );
}
