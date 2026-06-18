"use client";

import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="border-t px-6 py-24" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-12 max-w-3xl">
          <span className="mb-3 block text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>
            About BlueSPACE Innovation Hub (BIH-DEVS)
          </span>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
            Architecting Africa&apos;s Digital Tomorrow
          </h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <p>
              At BlueSPACE Innovation Hub (BIH), operating as BIH-DEVS (Digital Economy Venture Studio), we don&apos;t just back startups—we architect them. Founded as a visionary engine for economic evolution, BIH-DEVS is an institutional-grade venture studio dedicated to building, launching, and scaling the core digital infrastructure that will power Ghana and the wider African continent.
            </p>
            <p>
              We operate at the critical intersection of technology, capital, and elite talent, transforming market gaps into high-growth, scalable enterprises across fintech, agritech, e-commerce, digital infrastructure, and healthtech. Using Ghana as our strategic launchpad, our ultimate vision is to cement West Africa&apos;s position as a global leader in digital innovation.
            </p>
          </div>
        </AnimatedSection>

        {/* Core Proposition */}
        <AnimatedSection>
          <div className="mb-12 rounded-2xl border p-8 md:p-10" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}>
            <span className="mb-3 block text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
              The Core Proposition
            </span>
            <h3 className="mb-4 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
              Co-Creating the Digital Economy
            </h3>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Traditional accelerators invest in external ideas. At BlueSPACE Innovation Hub (BIH-DEVS), we build our own. Operating as a comprehensive venture studio ecosystem, we actively ideate, fund, staff, and scale institutional-grade digital ventures across Fintech, Agritech, E-commerce, Healthtech, and Digital Infrastructure.
            </p>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <strong>Our Mission:</strong> To drive Ghana and Africa&apos;s digital transformation, fostering deep economic growth, regional financial inclusion, and world-class digital talent.
            </p>
          </div>
        </AnimatedSection>

        {/* Powered by / Why BIH-DEVS */}
        <div className="grid gap-6 md:grid-cols-2">
          <AnimatedSection>
            <div className="rounded-2xl border p-8" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}>
              <h3 className="mb-4 text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                Powered by World-Class Infrastructure
              </h3>
              <p className="mb-4 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Our studio&apos;s unique competitive advantage lies in our foundational enablers. Every venture we launch is instantly supercharged by:
              </p>
              <ul className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li><strong style={{ color: "var(--text-primary)" }}>The BlueSPACE Financial CLOUD (BFC):</strong> Our proprietary, AI-driven financial platform that provides ventures and enterprise clients with plug-and-play transaction processing, predictive analytics, and robust API networks.</li>
                <li><strong style={{ color: "var(--text-primary)" }}>The FundMatrix Program:</strong> A sophisticated funding coalition managed in lockstep with licensed asset management and telecom heavyweights to ensure an uninterrupted flow of capital from seed stages to cross-border expansion.</li>
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border p-8" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}>
              <h3 className="mb-4 text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                Why BIH-DEVS?
              </h3>
              <p className="mb-4 text-sm font-semibold" style={{ color: "var(--accent)" }}>
                The Venture Studio Advantage
              </p>
              <ul className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li><strong style={{ color: "var(--text-primary)" }}>A Holistic Ecosystem:</strong> Skills build talent, talent designs platforms, platforms power ventures, and ventures attract institutional capital.</li>
                <li><strong style={{ color: "var(--text-primary)" }}>Proprietary AI Tech:</strong> Every venture we build launches with an unfair advantage by utilizing the pre-built architecture of the BlueSPACE Financial CLOUD.</li>
                <li><strong style={{ color: "var(--text-primary)" }}>Guaranteed Funding Pathways:</strong> Our managed FundMatrix program ensures our portfolio ventures bypass the traditional early-stage funding bottleneck.</li>
                <li><strong style={{ color: "var(--text-primary)" }}>Pan-African Scale:</strong> Using Ghana as a strategic launchpad, we build architectures engineered for rapid cross-border expansion.</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
