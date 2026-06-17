"use client";

import AnimatedSection from "./AnimatedSection";
import { ExpandingCards, type CardItem } from "./ExpandingCards";
import { Button } from "./ui/button";
import Link from "next/link";
import { factories, iconMap } from "@/lib/factories";
import { useRouter } from "next/navigation";

const cards: CardItem[] = factories.map((f) => ({
  id: f.id,
  title: f.title,
  description: f.description,
  imgSrc: f.img,
  icon: null, // resolved below via ExpandingCards override
  linkHref: `/programs/${f.id}`,
}));

export default function Programs() {
  const router = useRouter();

  return (
    <section id="programs" className="border-t px-6 py-24" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-2 block text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>
              Our Programs
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
              Five Factories. One Mission.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            From talent to capital, every factory is built to move your startup forward.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <ExpandingCards
            items={cards.map((c) => {
              const Icon = iconMap[c.id as keyof typeof iconMap];
              return { ...c, icon: Icon ? <Icon className="h-6 w-6" /> : null };
            })}
            defaultActiveIndex={1}
          />
        </AnimatedSection>

        <AnimatedSection className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center" delay={0.15}>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/programs">View All Programs</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/contact">Talk to Our Team</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
