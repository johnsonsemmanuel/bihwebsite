"use client";

import PageShell from "@/components/PageShell";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { events } from "@/lib/events";
import { Images } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const allPhotos = events.flatMap((e) => e.photos);

function SlideshowHero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % allPhotos.length), 15000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden sm:min-h-[60vh]">
      <AnimatePresence mode="sync">
        <motion.div
          key={idx}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img src={allPhotos[idx]} alt="" className="h-full w-full object-cover" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
      <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: "linear-gradient(to bottom, transparent, var(--bg-primary))" }} />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">Events</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            Moments, milestones, and memories from across the BlueSPACE ecosystem.
          </p>
        </motion.div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-12 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {allPhotos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Photo ${i + 1}`}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{ width: i === idx ? "20px" : "6px", backgroundColor: i === idx ? "#fff" : "rgba(255,255,255,0.35)" }}
          />
        ))}
      </div>
    </section>
  );
}

export default function EventsPage() {
  return (
    <PageShell>
      <SlideshowHero />
      <section className="px-6 pb-24 pt-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {events.map((event, i) => (
              <AnimatedSection key={event.id} delay={i * 0.07}>
                <Link
                  href={`/events/${event.id}`}
                  className="group block overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-lg hover:border-[var(--accent)]"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={event.cover} alt={event.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-xs text-white backdrop-blur-sm" style={{ backgroundColor: "rgba(0,0,0,0.55)" }}>
                      <Images className="h-3 w-3" /> {event.photos.length}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="font-semibold leading-tight" style={{ color: "var(--text-primary)" }}>{event.name}</div>
                    <div className="mt-1 text-xs" style={{ color: "var(--text-secondary)" }}>{event.year}</div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
