"use client";

import AnimatedSection from "./AnimatedSection";
import { Users, Zap, Code, Monitor, DollarSign } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const factories = [
  {
    id: "talent",
    icon: <Users className="h-5 w-5" />,
    title: "TalentFACTORY",
    tagline: "Refine & deploy talent where it matters most",
    description:
      "A powerhouse designed to refine and deploy talents where they are needed most. For startups, this means gaining access to a pool of skilled individuals, meticulously trained to meet the specific demands of the industry.",
    sub: ["Finsoft Tech Fellow"],
  },
  {
    id: "accelerator",
    icon: <Zap className="h-5 w-5" />,
    title: "AcceleratorFACTORY",
    tagline: "Propel your startup's success",
    description:
      "A powerful ecosystem offering mentorship from seasoned advisors, access to industry experts, and intensive training programs. Unlocks international market potential through the BIX (Innovation Exchange) program for global partnerships and growth.",
    sub: ["Startup Catalyst Program", "BIX-Xchange Program"],
    featured: true,
  },
  {
    id: "code",
    icon: <Code className="h-5 w-5" />,
    title: "CodeFACTORY",
    tagline: "Technology as the engine of innovation",
    description:
      "The engine room where startups without dedicated tech departments bring their visions to life. Co-create with experienced developers to unleash the power of technology. Supports startups from Ideation to Growth, develops Talent, and fosters Collaboration.",
    sub: ["Code Hackday"],
  },
  {
    id: "digital",
    icon: <Monitor className="h-5 w-5" />,
    title: "DigitalFACTORY",
    tagline: "Learn, adapt, and grow digitally",
    description:
      "A learning platform for all, providing digital skills and knowledge acquisition necessary for continuous growth. From mastering electronic procurement systems to staying updated with the latest digital trends.",
    sub: [],
  },
  {
    id: "capital",
    icon: <DollarSign className="h-5 w-5" />,
    title: "CapitalFACTORY",
    tagline: "Connecting startups to funding",
    description:
      "Assistance in connecting with investors, venture capitalists, and funding opportunities through networking events, pitch sessions, and investor matchmaking. Providing grant resources and investment management for the community.",
    sub: [],
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
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
            Five Factories. One Mission.
          </h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            From talent to capital, every factory is built to move your startup forward.
          </p>
        </AnimatedSection>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {factories.map((f, i) => (
            <AnimatedSection key={f.id} delay={i * 0.08}>
              <div
                className="relative flex h-full flex-col rounded-2xl border p-6 transition-all"
                style={{
                  borderColor: f.featured ? "var(--accent)" : "var(--border)",
                  backgroundColor: f.featured ? "color-mix(in srgb, var(--accent) 6%, var(--bg-card))" : "var(--bg-card)",
                  boxShadow: f.featured ? "0 0 0 1px color-mix(in srgb, var(--accent) 40%, transparent)" : "none",
                }}
              >
                {f.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[11px] font-semibold text-white" style={{ backgroundColor: "var(--accent)" }}>
                    Flagship
                  </span>
                )}
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg p-2" style={{ backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)" }}>
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>{f.title}</div>
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{f.tagline}</div>
                  </div>
                </div>
                <p className="mb-4 flex-1 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {f.description}
                </p>
                {f.sub.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {f.sub.map((s) => (
                      <span key={s} className="rounded-full border px-2.5 py-1 text-xs" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
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
