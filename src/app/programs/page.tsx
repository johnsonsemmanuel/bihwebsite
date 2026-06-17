"use client";

import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Users, Zap, Code, Monitor, DollarSign } from "lucide-react";

const factories = [
  {
    id: "talent",
    icon: Users,
    title: "TalentFACTORY",
    tag: "Talent",
    sub: ["Finsoft Tech Fellow"],
    description:
      "The journey begins with our Talent Factory, a powerhouse designed to refine and deploy talents where they are needed most. For startups, this means gaining access to a pool of skilled individuals, meticulously trained to meet the specific demands of the industry.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  },
  {
    id: "accelerator",
    icon: Zap,
    title: "AcceleratorFACTORY",
    tag: "Accelerator",
    sub: ["Startup Catalyst Program", "BIX-Xchange Program"],
    description:
      "The Accelerator Factory offers a powerful ecosystem designed to propel your startup's success. Gain mentorship from seasoned advisors, access a network of industry experts for personalized guidance, and participate in intensive training programs. The program also unlocks international market potential through the BIX (Innovation Exchange) program, facilitating global partnerships and growth opportunities.",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
    featured: true,
  },
  {
    id: "code",
    icon: Code,
    title: "CodeFACTORY",
    tag: "Technology",
    sub: ["Code Hackday"],
    description:
      "In the digital era, technology is the cornerstone of innovation. Our CodeFACTORY acts as the engine room where startups without dedicated tech departments can bring their visions to life. By co-creating with the CodeFACTORY, startups gain access to experienced developers, unleashing the power of technology to propel their businesses forward. Supports startups from Ideation to Growth, develops Talent, and fosters Collaboration.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  },
  {
    id: "digital",
    icon: Monitor,
    title: "DigitalFACTORY",
    tag: "Digital Skills",
    sub: [],
    description:
      "In the ever-evolving digital landscape, the ability to learn and adapt is a prerequisite for success. Our Digital Factory serves as a learning platform for all, providing digital skills and knowledge acquisition necessary for continuous growth. Whether it's mastering the intricacies of electronic procurement systems or staying updated with the latest digital trends.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
  },
  {
    id: "capital",
    icon: DollarSign,
    title: "CapitalFACTORY",
    tag: "Funding",
    sub: [],
    description:
      "Access to Funding: Assistance in connecting with investors, venture capitalists, and funding opportunities through networking events, pitch sessions, and investor matchmaking. Providing grant resources and investment management for the community.",
    img: "https://images.unsplash.com/photo-1553729459-afe8f2e2e5b4?w=600&q=80",
  },
];

function FactoryCard({ factory, index }: { factory: typeof factories[number]; index: number }) {
  const Icon = factory.icon;
  return (
    <AnimatedSection delay={index * 0.1}>
      <div
        className="group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-lg"
        style={{
          borderColor: factory.featured ? "var(--accent)" : "var(--border)",
          backgroundColor: "var(--bg-card)",
        }}
      >
        {factory.featured && (
          <span className="absolute top-4 right-4 z-10 rounded-full px-3 py-0.5 text-[11px] font-semibold text-white" style={{ backgroundColor: "var(--accent)" }}>
            Flagship
          </span>
        )}
        <div className="grid md:grid-cols-5">
          <div className="relative h-48 overflow-hidden md:col-span-2 md:h-auto">
            <img
              src={factory.img}
              alt={factory.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0" style={{ backgroundColor: "color-mix(in srgb, var(--bg-card) 50%, transparent)" }} />
          </div>

          <div className="flex flex-col justify-center p-6 md:col-span-3 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg p-2" style={{ backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)" }}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="rounded-full border px-3 py-1 text-xs font-medium" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
                {factory.tag}
              </span>
            </div>

            <h2 className="mb-3 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
              {factory.title}
            </h2>

            <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {factory.description}
            </p>

            {factory.sub.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {factory.sub.map((s) => (
                  <span key={s} className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
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
          <Link href="/contact">
            Get Involved
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </PageHero>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl space-y-8">
          {factories.map((f, i) => (
            <FactoryCard key={f.id} factory={f} index={i} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
