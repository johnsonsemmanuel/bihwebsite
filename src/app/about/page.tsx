"use client";

import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const team = [
  { name: "Samuel Amanor", role: "Chief Executive Officer" },
  { name: "Onyeka Ekeh", role: "Acting COO / Digital Impact & Marketing Head" },
  { name: "Kelvin Abraham", role: "DigitalFACTORY Ops Lead" },
  { name: "Micheal K. Ahwireng", role: "CodeFACTORY Lead" },
  { name: "Maya Barakeh", role: "Head of Innovation Exchange" },
  { name: "Charles Kobina", role: "TalentFACTORY Ops Associate" },
  { name: "Chukwuemeka Ndukwe", role: "Head of Code Partners" },
  { name: "Paul Maen", role: "Marketing and Community Manager" },
  { name: "Kenneth Ekow Inkum", role: "Software Engineer" },
];

const board = [
  { name: "Saqid Nazir", role: "Chief Executive Officer, People's Pension Holding" },
  { name: "Amoye Henry", role: "Founder & CEO, Pitch Better" },
  { name: "Akwasi Aboagye", role: "CEO, Bayport Ghana" },
  { name: "Isaac Newton", role: "National Project Coordinator, Ghana - International Trade Centre" },
  { name: "Eleanor Azar", role: "Chief of Staff, Telecel Group" },
];

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").slice(0, 2).map((n) => n[0]).join("");
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: "var(--accent)" }}>
      {initials}
    </div>
  );
}

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        title="BlueSPACE Innovation Hub"
        subtitle="We will be key to expanding the impact of the BlueSPACE Financial Cloud across Africa and the world."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
      />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl space-y-20">

          {/* Vision & Mission */}
          <AnimatedSection className="grid gap-6 md:grid-cols-2">
            {[
              {
                label: "Vision",
                text: "To be the leading innovation center that creates the platform for digital transformation and serves as the fertile ground for next generation solutions.",
              },
              {
                label: "Mission",
                text: "To create a sustainable innovation ecosystem by creating a nexus between innovation and impact.",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border p-8" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}>
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>{item.label}</div>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>{item.text}</p>
              </div>
            ))}
          </AnimatedSection>

          {/* Team */}
          <AnimatedSection>
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>Team</div>
            <h2 className="mb-2 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>The People Behind the Hub</h2>
            <p className="mb-8 text-sm" style={{ color: "var(--text-secondary)" }}>~40 years combined experience in digital economy, startup ecosystems, and youth initiatives.</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member, i) => (
                <AnimatedSection key={member.name} delay={i * 0.05}>
                  <div className="flex items-center gap-4 rounded-2xl border p-4" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}>
                    <Avatar name={member.name} />
                    <div>
                      <div className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{member.name}</div>
                      <div className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>{member.role}</div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Board */}
          <AnimatedSection>
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>Board</div>
            <h2 className="mb-8 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>Board Members</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {board.map((member, i) => (
                <AnimatedSection key={member.name} delay={i * 0.05}>
                  <div className="flex items-center gap-4 rounded-2xl border p-4" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}>
                    <Avatar name={member.name} />
                    <div>
                      <div className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{member.name}</div>
                      <div className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>{member.role}</div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

        </div>
      </section>
    </PageShell>
  );
}
