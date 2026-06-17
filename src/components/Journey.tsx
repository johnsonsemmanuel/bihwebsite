"use client";

import AnimatedSection from "./AnimatedSection";

export default function Journey() {
  return (
    <section className="border-t px-6 py-24" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-5xl">
        <AnimatedSection className="mb-12 text-center">
          <span className="mb-3 block text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>
            Our Story
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
            The Journey So Far
          </h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            From a bold idea to a continent-wide innovation ecosystem - watch how BlueSPACE came to life.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "var(--border)" }}>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/7TRp8-6iHV4?rel=0&modestbranding=1"
                title="BlueSPACE Innovation Hub - The Journey So Far"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
