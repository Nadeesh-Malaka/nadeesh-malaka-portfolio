"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollTop}
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-50 group flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/25 bg-white/8 backdrop-blur-md text-white shadow-[0_0_25px_rgba(37,99,235,0.18)] hover:border-blue-400/50 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(37,99,235,0.3)]"
          aria-label="Back to top"
        >
          <span className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          <ArrowUp size={18} className="relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}