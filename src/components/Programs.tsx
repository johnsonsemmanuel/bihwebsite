"use client";

import AnimatedSection from "./AnimatedSection";
import { ExpandingCards, type CardItem } from "./ExpandingCards";
import { Rocket, Building, TrendingUp } from "lucide-react";

const programCards: CardItem[] = [
  {
    id: 1,
    title: "Pre-Seed Track",
    description:
      "A 12-week intensive program for pre-product founders. Validate your idea, build your MVP, and secure your first check.",
    imgSrc: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    icon: <Rocket className="h-6 w-6" />,
    linkHref: "#pre-seed",
  },
  {
    id: 2,
    title: "Seed Accelerator",
    description:
      "$150K investment plus operational support for startups with product-market fit ready to scale.",
    imgSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    icon: <Building className="h-6 w-6" />,
    linkHref: "#seed",
  },
  {
    id: 3,
    title: "Scale Program",
    description:
      "Series A readiness, talent acquisition, and strategic partnership development for companies hitting escape velocity.",
    imgSrc: "https://images.unsplash.com/photo-1553729459-afe8f2e2e5b4?w=800&q=80",
    icon: <TrendingUp className="h-6 w-6" />,
    linkHref: "#scale",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="border-t px-6 py-24" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-3 block text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>
            Our Programs
          </span>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
            Three Tracks. One Mission.
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Whether you have a sketch on a napkin or a product in market, we have
            a program built for your stage.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <ExpandingCards items={programCards} />
        </AnimatedSection>
      </div>
    </section>
  );
}
