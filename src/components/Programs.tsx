"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { ExpandingCards, type CardItem } from "./ExpandingCards";
import { Rocket, Building, TrendingUp, Check } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const programCards: CardItem[] = [
  {
    id: 1,
    title: "Pre-Seed Track",
    description: "Validate your idea, build your MVP, and secure your first check in 12 weeks.",
    imgSrc: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    icon: <Rocket className="h-6 w-6" />,
    linkHref: "#pre-seed",
  },
  {
    id: 2,
    title: "Seed Accelerator",
    description: "$150K investment plus operational support for startups with product-market fit.",
    imgSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    icon: <Building className="h-6 w-6" />,
    linkHref: "#seed",
  },
  {
    id: 3,
    title: "Scale Program",
    description: "Series A readiness, talent acquisition, and strategic partnerships.",
    imgSrc: "https://images.unsplash.com/photo-1553729459-afe8f2e2e5b4?w=800&q=80",
    icon: <TrendingUp className="h-6 w-6" />,
    linkHref: "#scale",
  },
];

const tracks = [
  {
    id: "pre-seed",
    icon: <Rocket className="h-5 w-5" />,
    stage: "Idea → MVP",
    title: "Pre-Seed Track",
    tagline: "12-week intensive",
    investment: "$25K — $75K",
    ideal: "Pre-product, 1–2 founders",
    outcomes: ["MVP validated in market", "First 10 paying customers", "Pitch-ready for seed round"],
    proof: "82% of graduates close a seed round within 6 months.",
    color: "var(--accent)",
  },
  {
    id: "seed",
    icon: <Building className="h-5 w-5" />,
    stage: "MVP → Growth",
    title: "Seed Accelerator",
    tagline: "$150K + equity-free support",
    investment: "$150K check",
    ideal: "Product-market fit, early revenue",
    outcomes: ["6-month structured accelerator", "Dedicated operating partner", "Investor intro network"],
    proof: "3.2× average revenue growth during program.",
    color: "#818cf8",
    featured: true,
  },
  {
    id: "scale",
    icon: <TrendingUp className="h-5 w-5" />,
    stage: "Growth → Series A",
    title: "Scale Program",
    tagline: "6-month partnership",
    investment: "Selective entry",
    ideal: "$500K+ ARR, scaling team",
    outcomes: ["Series A positioning", "Executive hiring support", "Strategic partnerships"],
    proof: "$12M average Series A raised by graduates.",
    color: "#34d399",
  },
];

export default function Programs() {
  const [activeTrack, setActiveTrack] = useState<string | null>(null);

  return (
    <section id="programs" className="border-t px-6 py-24" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-3 block text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>
            Our Programs
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
            Built for Your Stage.
          </h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Whether you have an idea or early revenue, we have a track matched exactly to where you are.
          </p>
        </AnimatedSection>

        {/* Expanding cards visual */}
        <AnimatedSection className="mb-20">
          <ExpandingCards items={programCards} />
        </AnimatedSection>

        {/* Stage comparison */}
        <AnimatedSection>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
            Compare tracks
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {tracks.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTrack(activeTrack === t.id ? null : t.id)}
                className="group relative rounded-2xl border p-6 text-left transition-all"
                style={{
                  borderColor: activeTrack === t.id ? t.color : "var(--border)",
                  backgroundColor: t.featured ? `color-mix(in srgb, ${t.color} 6%, var(--bg-card))` : "var(--bg-card)",
                  boxShadow: activeTrack === t.id ? `0 0 0 1px ${t.color}40, 0 8px 24px ${t.color}18` : "none",
                }}
              >
                {t.featured && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[11px] font-semibold text-white"
                    style={{ backgroundColor: t.color }}
                  >
                    Most Selected
                  </span>
                )}

                {/* Header */}
                <div className="mb-4 flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg p-2" style={{ backgroundColor: `color-mix(in srgb, ${t.color} 15%, transparent)`, color: t.color }}>
                    {t.icon}
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: t.color }}>{t.stage}</div>
                    <div className="font-bold" style={{ color: "var(--text-primary)" }}>{t.title}</div>
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{t.tagline}</div>
                  </div>
                </div>

                {/* Meta */}
                <div className="mb-4 grid grid-cols-2 gap-2">
                  <div className="rounded-lg p-2.5" style={{ backgroundColor: "var(--bg-primary)" }}>
                    <div className="text-[10px] uppercase tracking-wide" style={{ color: "var(--text-secondary)" }}>Investment</div>
                    <div className="mt-0.5 text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t.investment}</div>
                  </div>
                  <div className="rounded-lg p-2.5" style={{ backgroundColor: "var(--bg-primary)" }}>
                    <div className="text-[10px] uppercase tracking-wide" style={{ color: "var(--text-secondary)" }}>Ideal for</div>
                    <div className="mt-0.5 text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t.ideal}</div>
                  </div>
                </div>

                {/* Outcomes */}
                <ul className="mb-4 space-y-2">
                  {t.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: t.color }} />
                      {o}
                    </li>
                  ))}
                </ul>

                {/* Proof */}
                <div className="rounded-xl p-3 text-xs italic" style={{ backgroundColor: `color-mix(in srgb, ${t.color} 8%, transparent)`, color: "var(--text-secondary)" }}>
                  "{t.proof}"
                </div>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection className="mt-12 text-center" delay={0.1}>
          <p className="mb-4 text-sm" style={{ color: "var(--text-secondary)" }}>
            Not sure which track fits? We'll help you figure it out — no pressure.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Talk to Our Team</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
