"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed right-0 top-0 z-50 h-full w-[3px]">
      <motion.div
        className="origin-top"
        style={{
          scaleY,
          backgroundColor: "var(--accent)",
          width: "100%",
          height: "100%",
          opacity: 0.5,
        }}
      />
    </div>
  );
}
