"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setVisible(v > 0.1));
  }, [scrollYProgress]);

  return (
    <>
      {/* Thin top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
        style={{ scaleX, backgroundColor: "var(--accent)", opacity: 0.7 }}
      />

      {/* Back to top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        initial={false}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12, pointerEvents: visible ? "auto" : "none" }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-6 right-6 z-50 flex h-9 w-9 items-center justify-center rounded-full border shadow-sm"
        style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)", color: "var(--accent)" }}
      >
        <ArrowUp className="h-4 w-4" />
      </motion.button>
    </>
  );
}
