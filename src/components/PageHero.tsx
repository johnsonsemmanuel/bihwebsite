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

  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden sm:min-h-[60vh]">
      <motion.div className="pointer-events-none absolute inset-0" style={{ scale }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* dark tint so text is readable */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
        {/* bottom fade into page background */}
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{ background: "linear-gradient(to bottom, transparent, var(--bg-primary))" }}
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
            style={{ color: "#ffffff" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="mx-auto max-w-2xl text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.8)" }}
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
