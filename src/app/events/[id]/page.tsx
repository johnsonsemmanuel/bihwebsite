"use client";

import { notFound } from "next/navigation";
import { useState, use } from "react";
import PageShell from "@/components/PageShell";
import AnimatedSection from "@/components/AnimatedSection";
import { eventMap } from "@/lib/events";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function AlbumPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const event = eventMap[id];
  if (!event) notFound();

  const [photoIdx, setPhotoIdx] = useState<number | null>(null);
  const move = (dir: 1 | -1) => setPhotoIdx((i) => i === null ? null : (i + dir + event.photos.length) % event.photos.length);

  return (
    <PageShell>
      {/* Album header */}
      <div className="px-6 pb-4 pt-28">
        <div className="mx-auto max-w-6xl">
          <Link href="/events" className="mb-6 inline-flex items-center gap-1.5 text-sm transition-colors hover:text-[var(--accent)]" style={{ color: "var(--text-secondary)" }}>
            <ArrowLeft className="h-4 w-4" /> All Events
          </Link>
          <div className="mt-4 flex items-baseline gap-3">
            <h1 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>{event.name}</h1>
            <span className="rounded-full border px-2.5 py-0.5 text-xs font-medium" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>{event.year}</span>
            {event.photos.length > 0 && <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{event.photos.length} photos</span>}
            {event.video && <span className="text-xs" style={{ color: "var(--text-secondary)" }}>1 video</span>}
          </div>
        </div>
      </div>

      {/* Video */}
      {event.video && (
        <section className="px-6 pb-8">
          <div className="mx-auto max-w-4xl">
            <video
              src={event.video}
              controls
              playsInline
              preload="metadata"
              className="w-full rounded-xl shadow-lg"
              style={{ maxHeight: "70vh" }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      )}

      {/* Photo grid */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {event.photos.map((src, i) => (
              <AnimatedSection key={src} delay={i * 0.04}>
                <button
                  onClick={() => setPhotoIdx(i)}
                  className="group relative aspect-square w-full overflow-hidden rounded-xl focus:outline-none"
                  aria-label={`View photo ${i + 1}`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ backgroundColor: "rgba(0,0,0,0.2)" }} />
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {photoIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
            onClick={() => setPhotoIdx(null)}
          >
            <button onClick={() => setPhotoIdx(null)} className="absolute top-4 right-4 rounded-full p-2 text-white/60 hover:text-white" aria-label="Close"><X className="h-6 w-6" /></button>
            <button onClick={(e) => { e.stopPropagation(); move(-1); }} className="absolute left-4 rounded-full p-2 text-white/60 hover:text-white" aria-label="Previous"><ChevronLeft className="h-7 w-7" /></button>
            <motion.img
              key={photoIdx}
              src={event.photos[photoIdx]}
              alt=""
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
              className="max-h-[85vh] max-w-[85vw] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); move(1); }} className="absolute right-4 rounded-full p-2 text-white/60 hover:text-white" aria-label="Next"><ChevronRight className="h-7 w-7" /></button>
            <div className="absolute bottom-4 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{photoIdx + 1} / {event.photos.length}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageShell>
  );
}
