"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "./Sparkles";
import { Button } from "./ui/button";
import { EASE } from "@/lib/utils";
import Link from "next/link";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ scale: videoScale, opacity: videoOpacity }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          className="h-full w-full object-cover"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-abstract-technology-waves-5894/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--bg-primary)", opacity: 0.85 }}
        />
      </motion.div>

      <Sparkles
        className="pointer-events-none absolute inset-0 z-10"
        size={1.5}
        density={300}
        speed={0.4}
        color="#4a8cd4"
      />

      <div className="relative z-20 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-6"
        >
          <span
            className="inline-block rounded-full border px-4 py-1.5 text-xs font-medium tracking-wider uppercase backdrop-blur-sm"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--bg-secondary)",
              color: "var(--text-secondary)",
            }}
          >
            Innovation Accelerator
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ color: "var(--text-primary)" }}
        >
          Where Bold Ideas
          <br />
          <span className="text-[#4a8cd4]">Find Their Launchpad</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          We accelerate early-stage ventures with strategic funding, world-class
          mentorship, and a network built for breakthrough growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg" className="rounded-full group">
            <Link href="/contact">
              Apply Now
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/about">
              Learn More
            </Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "var(--text-secondary)" }}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
