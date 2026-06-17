"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "./Sparkles";
import { Button } from "./ui/button";
import { EASE } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const STATS = [
  { value: "120+", label: "Portfolio Companies" },
  { value: "$480M", label: "Capital Deployed" },
  { value: "94%", label: "Survival Rate" },
];

function smoothScrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const videoScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.15]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background video */}
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
          <source src="https://cdn.coverr.co/videos/coverr-abstract-technology-waves-5894/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ backgroundColor: "var(--bg-primary)", opacity: 0.82 }} />
      </motion.div>

      <Sparkles className="pointer-events-none absolute inset-0 z-10" size={1.5} density={280} speed={0.35} color="#4a8cd4" />

      <div className="relative z-20 mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-6 flex items-center justify-center gap-2"
        >
          <span className="h-px w-8 bg-[#3b82f6] opacity-60" />
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            Venture Accelerator
          </span>
          <span className="h-px w-8 bg-[#3b82f6] opacity-60" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
          className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ color: "var(--text-primary)" }}
        >
          We Back Founders
          <br />
          <span
            className="relative inline-block"
            style={{
              color: "var(--accent)",
            }}
          >
            Others Overlook.
          </span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Capital, mentorship, and operating infrastructure — everything ambitious founders need to go from zero to Series A.
        </motion.p>

        {/* CTA hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: EASE }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="group rounded-full px-8 text-base">
            <Link href="/contact">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="rounded-full px-8 text-base"
            style={{ color: "var(--text-secondary)" }}
            onClick={() => smoothScrollTo("programs")}
          >
            Explore Programs
          </Button>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 flex items-center justify-center gap-8 sm:gap-12"
        >
          {STATS.map((s, i) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold sm:text-3xl" style={{ color: "var(--text-primary)" }}>{s.value}</div>
              <div className="mt-0.5 text-xs" style={{ color: "var(--text-secondary)" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-full p-2 transition-colors hover:bg-white/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        onClick={() => smoothScrollTo("about")}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "var(--text-secondary)" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
