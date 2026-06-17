"use client";

import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { factories, iconMap } from "@/lib/factories";

export default function Programs() {
  return (
    <section id="programs" className="border-t px-6 py-24" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-3 block text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>
            Our Programs
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
            Five Factories. One Mission.
          </h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            From talent to capital, every factory is built to move your startup forward.
          </p>
        </AnimatedSection>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {factories.map((f, i) => {
            const Icon = iconMap[f.icon];
            return (
              <AnimatedSection key={f.id} delay={i * 0.08}>
                <Link
                  href={`/programs/${f.id}`}
                  className="group relative flex h-full flex-col rounded-2xl border p-6 transition-all hover:shadow-md hover:border-[var(--accent)]"
                  style={{
                    borderColor: f.featured ? "var(--accent)" : "var(--border)",
                    backgroundColor: f.featured ? "color-mix(in srgb, var(--accent) 6%, var(--bg-card))" : "var(--bg-card)",
                  }}
                >
                  {f.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[11px] font-semibold text-white" style={{ backgroundColor: "var(--accent)" }}>
                      Flagship
                    </span>
                  )}
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg p-2" style={{ backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)" }}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>{f.title}</div>
                      <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{f.tag}</div>
                    </div>
                  </div>
                  <p className="mb-4 flex-1 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {f.description}
                  </p>
                  {f.sub.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {f.sub.map((s) => (
                        <span key={s.name} className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
                          {s.name}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="flex items-center gap-1 text-xs font-medium" style={{ color: "var(--accent)" }}>
                    Learn more <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="mt-12 text-center" delay={0.1}>
          <p className="mb-4 text-sm" style={{ color: "var(--text-secondary)" }}>
            Not sure which factory fits? We'll help you figure it out - no pressure.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Talk to Our Team</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
