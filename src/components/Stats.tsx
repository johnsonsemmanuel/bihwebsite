"use client";

import { motion } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";
import { EASE } from "@/lib/utils";

const stats = [
  { value: 24, suffix: "M+", label: "Capital Deployed" },
  { value: 120, suffix: "+", label: "Startups Accelerated" },
  { value: 90, suffix: "%", label: "Survival Rate" },
  { value: 40, suffix: "+", label: "Partner Network" },
];

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { count, ref } = useCounter(value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className="rounded-2xl border p-8 text-center"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--bg-card)",
      }}
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(59, 130, 246, 0.15)" }}
    >
      <div className="mb-2 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
        {count}{suffix}
      </div>
      <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
        {label}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="border-t px-6 py-24" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16 text-center"
        >
          <span className="mb-3 block text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>
            Our Impact
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
            Built for Results
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
