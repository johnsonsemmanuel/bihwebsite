"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/utils";

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delay: 1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
};

export default function SocialSidebar() {
  return (
    <motion.div
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-6 md:flex"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="h-16 w-px" style={{ backgroundColor: "var(--border)" }} />
      {socials.map((s) => (
        <motion.a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          className="transition-colors"
          style={{ color: "var(--text-secondary)" }}
          variants={itemVariants}
          whileHover={{ scale: 1.2, color: "var(--accent)" }}
          whileTap={{ scale: 0.9 }}
        >
          {s.icon}
        </motion.a>
      ))}
      <div className="h-16 w-px" style={{ backgroundColor: "var(--border)" }} />
    </motion.div>
  );
}
