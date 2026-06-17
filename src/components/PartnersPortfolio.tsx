"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EASE } from "@/lib/utils";

const partners = Array.from({ length: 12 }, (_, i) => ({
  src: `/partners/partner${i + 1}.jpg`,
  alt: `Partner ${i + 1}`,
}));

const portfolio = Array.from({ length: 13 }, (_, i) => ({
  src: `/portfolio/portfolio${i + 1}.png`,
  alt: `Portfolio Company ${i + 1}`,
}));

function LogoGrid({ items, label }: { items: { src: string; alt: string }[]; label: string }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mb-10 text-center"
      >
        <span
          className="mb-3 block text-xs font-semibold tracking-widest uppercase"
          style={{ color: "var(--text-secondary)" }}
        >
          {label === "Our Partners" ? "Ecosystem" : "Investments"}
        </span>
        <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
          {label}
        </h2>
      </motion.div>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
        {items.map((item, i) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.04, ease: EASE }}
            whileHover={{ y: -4, boxShadow: "0 8px 30px var(--accent-muted)" }}
            className="flex items-center justify-center rounded-xl border p-4"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
          >
            <div className="relative h-12 w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 16vw"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function PartnersPortfolio() {
  return (
    <section id="partners" className="border-t px-6 py-24" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-6xl space-y-20">
        <LogoGrid items={partners} label="Our Partners" />
        <LogoGrid items={portfolio} label="Our Portfolio Companies" />
      </div>
    </section>
  );
}
