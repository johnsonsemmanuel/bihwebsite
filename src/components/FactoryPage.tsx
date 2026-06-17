"use client";

import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { factories, iconMap, type Factory } from "@/lib/factories";

export default function FactoryPage({ factory }: { factory: Factory }) {
  const Icon = iconMap[factory.icon];
  const idx = factories.findIndex((f) => f.id === factory.id);
  const prev = factories[idx - 1];
  const next = factories[idx + 1];

  return (
    <PageShell>
      <PageHero title={factory.title} subtitle={factory.description} image={factory.heroImg}>
        <Button asChild size="lg" className="rounded-full">
          <Link href="/contact">
            Get Involved <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </PageHero>

      <section className="px-6 pb-24 pt-4">
        <div className="mx-auto max-w-4xl">

          {/* Tag + icon */}
          <AnimatedSection className="mb-10 flex items-center gap-3">
            <div className="rounded-lg p-2" style={{ backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)" }}>
              <Icon className="h-5 w-5" />
            </div>
            <span className="rounded-full border px-3 py-1 text-xs font-medium" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
              {factory.tag}
            </span>
            {factory.featured && (
              <span className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: "var(--accent)" }}>
                Flagship Programme
              </span>
            )}
          </AnimatedSection>

          {/* Body paragraphs */}
          <AnimatedSection className="mb-12 space-y-5">
            {factory.body.map((para, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {para}
              </p>
            ))}
          </AnimatedSection>

          {/* Sub-programmes */}
          {factory.sub.length > 0 && (
            <AnimatedSection className="mb-16">
              <h2 className="mb-6 text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                Programmes under {factory.title}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {factory.sub.map((s) => (
                  <div
                    key={s.name}
                    className="rounded-2xl border p-5"
                    style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
                  >
                    <div className="mb-2 font-semibold" style={{ color: "var(--text-primary)" }}>{s.name}</div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Prev / Next navigation */}
          <AnimatedSection delay={0.1}>
            <div className="flex items-center justify-between border-t pt-8" style={{ borderColor: "var(--border)" }}>
              {prev ? (
                <Link href={`/programs/${prev.id}`} className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)]" style={{ color: "var(--text-secondary)" }}>
                  <ArrowLeft className="h-4 w-4" /> {prev.title}
                </Link>
              ) : <span />}
              {next ? (
                <Link href={`/programs/${next.id}`} className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)]" style={{ color: "var(--text-secondary)" }}>
                  {next.title} <ArrowRight className="h-4 w-4" />
                </Link>
              ) : <span />}
            </div>
          </AnimatedSection>

        </div>
      </section>
    </PageShell>
  );
}
