"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { EASE } from "@/lib/utils";

const faqs = [
  {
    q: "What stage should my startup be at?",
    a: "We work with founders at every stage from pre-seed to Series A. Our three program tracks are designed to meet you where you are and take you to the next level.",
  },
  {
    q: "How much equity do you take?",
    a: "Terms vary by program. Our pre-seed track is a straight investment with standard SAFE notes. Seed accelerator includes a $150K investment. Schedule a call for full details.",
  },
  {
    q: "How long are the programs?",
    a: "The pre-seed track runs 12 weeks. Seed accelerator is 16 weeks. The scale program is ongoing with quarterly milestone reviews.",
  },
  {
    q: "Do you invest in non-tech businesses?",
    a: "We focus on technology-enabled businesses across B2B SaaS, health tech, fintech, climate tech, and deep tech. If software or technology is core to your product, we want to talk.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-t px-6 py-24" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-3xl">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-3 block text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>
            Frequently Asked
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
            Quick Answers
          </h2>
        </AnimatedSection>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={faq.q} delay={i * 0.08}>
                <div
                  className="cursor-pointer rounded-2xl border transition-colors"
                  style={{
                    borderColor: isOpen ? "var(--accent)" : "var(--border)",
                    backgroundColor: "var(--bg-card)",
                  }}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <div className="flex items-center justify-between p-6 text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    <span>{faq.q}</span>
                    <motion.svg
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="h-4 w-4 shrink-0"
                      style={{ color: "var(--text-secondary)" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div
                          className="border-t px-6 pb-6 pt-4 text-sm leading-relaxed"
                          style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                        >
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
