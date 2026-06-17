"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
}

export default function PageHero({ title, subtitle, image, children }: PageHeroProps) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);

  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden sm:min-h-[60vh]">
      <motion.div className="pointer-events-none absolute inset-0" style={{ scale, opacity }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in srgb, var(--bg-primary) 70%, transparent) 0%, var(--bg-primary) 100%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1
            className="mb-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="mx-auto max-w-2xl text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
