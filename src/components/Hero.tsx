"use client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare global { interface Window { YT: any; onYouTubeIframeAPIReady: () => void; } }

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Sparkles } from "./Sparkles";
import { Button } from "./ui/button";
import { EASE } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const STATS = [
  { value: "5", label: "Venture-Building Pillars" },
  { value: "120+", label: "Startups Accelerated" },
  { value: "10K+", label: "Lives Impacted" },
];

function smoothScrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const videoScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.15]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);
  const playerRef = useRef<YT.Player | null>(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-bg", {
        events: {
          onReady: (e: YT.PlayerEvent) => e.target.playVideo(),
          onStateChange: (e: YT.OnStateChangeEvent) => {
            if (e.data === YT.PlayerState.ENDED) {
              e.target.seekTo(15, true);
              e.target.playVideo();
            }
          },
        },
      });
    };

    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background: YouTube iframe cropped full-bleed */}
      <motion.div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ scale: videoScale, opacity: videoOpacity }}
      >
        <iframe
          id="yt-bg"
          src="https://www.youtube.com/embed/zYyXM1X8jZw?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1&start=15&enablejsapi=1&fs=0"
          allow="autoplay; encrypted-media"
          title="Background"
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-full min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2"
          style={{ border: "none", pointerEvents: "none" }}
        />
        <div className="absolute left-0 right-0 top-0 z-10 h-16" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.95), transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 z-10 h-20" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.95), transparent)" }} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.62)" }} />
      </motion.div>

      <Sparkles className="pointer-events-none absolute inset-0 z-10" size={1.5} density={280} speed={0.35} color="#4a8cd4" />

      <div className="relative z-20 mx-auto max-w-4xl w-full text-left px-6">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-6 flex items-center justify-start gap-2"
        >
          <span className="h-px w-8 bg-[#3b82f6] opacity-60" />
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            Accra · Ghana
          </span>
          <span className="h-px w-8 bg-[#3b82f6] opacity-60" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
          className="mb-6 text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ color: "var(--text-primary)" }}
        >
          Building The Future Of Africa's
          <br />
          <span className="relative inline-block" style={{ color: "var(--accent)" }}>
            Financial & Digital Infrastructure
          </span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
          className="mx-0 mb-10 max-w-xl text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          We don't just invest in startups, we build them from the ground up. BIH-DEVS is Africa's premier Digital Economy Venture Studio, co-creating high-impact ventures that scale.
        </motion.p>

        {/* CTA hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: EASE }}
          className="flex flex-col items-start justify-start gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="group rounded-full px-8 text-base">
            <Link href="/contact">
              Partner With Us
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
            Explore Our Pillars
          </Button>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 flex items-center justify-start gap-8 sm:gap-12"
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
        whileTap={{ scale: 0.88 }}
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
