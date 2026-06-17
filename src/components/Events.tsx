"use client";

import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";
import { events } from "@/lib/events";

export default function Events() {
  return (
    <section id="events" className="border-t px-6 py-24" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-12 flex items-end justify-between">
          <div>
            <span className="mb-2 block text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>Events</span>
            <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>Moments from the Hub</h2>
          </div>
          <Button asChild variant="outline" size="sm" className="hidden rounded-full sm:flex">
            <Link href="/events">View all <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
          </Button>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {events.slice(0, 3).map((event, i) => (
            <AnimatedSection key={event.id} delay={i * 0.08}>
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
                  <div className="font-semibold" style={{ color: "var(--text-primary)" }}>{event.name}</div>
                  <div className="mt-1 text-xs" style={{ color: "var(--text-secondary)" }}>{event.year}</div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-8 sm:hidden" delay={0.1}>
          <Button asChild variant="outline" size="sm" className="w-full rounded-full">
            <Link href="/events">View all events <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
