"use client";

import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { factories, iconMap } from "@/lib/factories";

function FactoryCard({ factory, index }: { factory: typeof factories[number]; index: number }) {
  const Icon = iconMap[factory.icon];
  return (
    <AnimatedSection delay={index * 0.1}>
      <Link
        href={`/programs/${factory.id}`}
        className="group relative flex overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-lg hover:border-[var(--accent)]"
        style={{ borderColor: factory.featured ? "var(--accent)" : "var(--border)", backgroundColor: "var(--bg-card)" }}
      >
        {factory.featured && (
          <span className="absolute top-4 right-4 z-10 rounded-full px-3 py-0.5 text-[11px] font-semibold text-white" style={{ backgroundColor: "var(--accent)" }}>
            Flagship
          </span>
        )}
        <div className="grid w-full md:grid-cols-5">
          <div className="relative h-48 overflow-hidden md:col-span-2 md:h-auto">
            <img src={factory.img} alt={factory.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ backgroundColor: "color-mix(in srgb, var(--bg-card) 50%, transparent)" }} />
          </div>
          <div className="flex flex-col justify-center p-6 md:col-span-3 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg p-2" style={{ backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)" }}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="rounded-full border px-3 py-1 text-xs font-medium" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>{factory.tag}</span>
            </div>
            <h2 className="mb-3 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>{factory.title}</h2>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{factory.description}</p>
            {factory.sub.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {factory.sub.map((s) => (
                  <span key={s.name} className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>{s.name}</span>
                ))}
              </div>
            )}
            <span className="flex items-center gap-1 text-sm font-medium" style={{ color: "var(--accent)" }}>
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}

export default function ProgramsPage() {
  return (
    <PageShell>
      <PageHero
        title="Five Factories. One Mission."
        subtitle="From talent to capital, every factory is purpose-built to move your startup forward at every stage."
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80"
      >
        <Button asChild size="lg" className="rounded-full">
          <Link href="/contact">Get Involved <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </Button>
      </PageHero>
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl space-y-8">
          {factories.map((f, i) => <FactoryCard key={f.id} factory={f} index={i} />)}
        </div>
      </section>
    </PageShell>
  );
}
