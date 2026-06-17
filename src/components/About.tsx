"use client";

import AnimatedSection from "./AnimatedSection";

const features = [
  {
    number: "01",
    title: "Strategic Funding",
    description:
      "Access tailored capital from our network of angel investors, VCs, and strategic partners. We structure rounds that set you up for long-term success.",
  },
  {
    number: "02",
    title: "Mentorship Network",
    description:
      "Learn from founders and operators who have scaled companies from zero to exit. Weekly office hours, curated matches, and hands-on support.",
  },
  {
    number: "03",
    title: "Growth Infrastructure",
    description:
      "Legal, finance, hiring, and sales frameworks ready on day one. Stop reinventing the wheel and start executing with battle-tested playbooks.",
  },
  {
    number: "04",
    title: "Community & Access",
    description:
      "Join a curated network of founders, operators, and investors. Exclusive events, demo days, and direct introductions to enterprise partners.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t px-6 py-24" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-20 max-w-2xl">
          <span className="mb-3 block text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>
            About BlueSPACE
          </span>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
            More Than Capital. A Launch System.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            We partner with ambitious founders at the earliest stage and stay
            with them through scale. Our model combines direct investment with
            operational support, giving you the resources and expertise to move
            faster.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.number} delay={i * 0.1}>
              <div
                className="group rounded-2xl border p-8 transition-all"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--bg-card)",
                }}
              >
                <div className="mb-4 text-5xl font-bold" style={{ color: "var(--accent)", opacity: 0.3 }}>
                  {feature.number}
                </div>
                <h3 className="mb-3 text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
                  {feature.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
