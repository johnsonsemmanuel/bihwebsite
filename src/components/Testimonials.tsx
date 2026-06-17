"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote: "BlueSPACE gave us the clarity and capital to ship our product in 8 weeks instead of 8 months. The network alone is worth ten times the investment.",
    author: "Sarah Chen",
    role: "Founder, Lumos Health",
  },
  {
    quote: "The mentorship at BlueSPACE is unlike anything I have experienced. They connected us with operators who had actually built what we were trying to build.",
    author: "Marcus Adeyemi",
    role: "CEO, Stackline",
  },
  {
    quote: "We came in with an idea and left with a funded company. The pre-seed track is the most structured, no-fluff program for first-time founders.",
    author: "Aiko Tanaka",
    role: "Co-Founder, Relay Robotics",
  },
  {
    quote: "The network effect at BlueSPACE is real. Every intro, every warm handshake, every piece of advice moved us months ahead of where we would have been alone.",
    author: "David Park",
    role: "CTO, Meridian AI",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || hovered) return;
    const scrollWidth = el.scrollWidth;
    controls.start({
      x: [0, -(scrollWidth / 2 - 400)],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls, hovered]);

  return (
    <section id="testimonials" className="border-t px-6 py-24" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-3 block text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>
            Founder Stories
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
            Trusted by Builders
          </h2>
        </AnimatedSection>

        <div
          ref={containerRef}
          className="overflow-hidden"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.div
            className="flex gap-6"
            animate={controls}
            style={{ width: `${testimonials.length * 420}px` }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <motion.div
                key={`${t.author}-${i}`}
                className="flex w-[400px] shrink-0 flex-col rounded-2xl border p-8"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--bg-card)",
                }}
                whileHover={{ y: -6, boxShadow: "0 12px 40px var(--accent-muted)" }}
                transition={{ duration: 0.3 }}
              >
                <svg className="mb-6 h-6 w-6" style={{ color: "var(--accent)", opacity: 0.4 }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <p className="mb-8 flex-1 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {t.quote}
                </p>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t.author}</div>
                  <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{t.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
