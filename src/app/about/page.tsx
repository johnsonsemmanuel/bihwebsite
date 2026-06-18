"use client";

import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const team = [
  { name: "Samuel Amanor", role: "Chief Executive Officer", img: "/team/sambih.png" },
  { name: "Onyeka Ekeh", role: "Acting COO / Digital Impact & Marketing Head", img: "/team/onyekabih.jpg" },
  { name: "Kelvin Abraham", role: "DigitalFACTORY Ops Lead", img: "/team/kelvinbih.jpg" },
  { name: "Micheal K. Ahwireng", role: "CodeFACTORY Lead", img: "/team/kofibih.jpg" },
  { name: "Maya Barakeh", role: "Head of Innovation Exchange", img: "/team/mayabih.jpg" },
  { name: "Charles Kobina", role: "TalentFACTORY Ops Associate", img: "/team/charlsebih.png" },
  { name: "Chukwuemeka Ndukwe", role: "Head of Code Partners", img: "/team/emekabih.jpg" },
  { name: "Paul Maen", role: "Marketing and Community Manager", img: "/team/Paulbih.jpeg" },
  { name: "Kenneth Ekow Inkum", role: "Software Engineer", img: "/team/kennethbih.png" },
];

const board = [
  { name: "Saqid Nazir", role: "Chief Executive Officer, People's Pension Holding", img: "/team/sadiqbih.jpg" },
  { name: "Amoye Henry", role: "Founder & CEO, Pitch Better", img: "/team/amoyebih.jpg" },
  { name: "Akwasi Aboagye", role: "CEO, Bayport Ghana", img: "/team/akwasibih.jpg" },
  { name: "Isaac Newton", role: "National Project Coordinator, Ghana - International Trade Centre", img: "/team/isaacbih.jpg" },
  { name: "Eleanor Azar", role: "Chief of Staff, Telecel Group", img: "/team/eleanorbih.jpg" },
];

function PersonCard({ name, role, img, index }: { name: string; role: string; img: string; index: number }) {
  return (
    <AnimatedSection delay={index * 0.06}>
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative overflow-hidden rounded-2xl"
        style={{ aspectRatio: "3/4" }}
      >
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)" }} />
        {/* text */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="text-base font-bold text-white">{name}</div>
          <div className="mt-0.5 text-xs leading-snug" style={{ color: "rgba(255,255,255,0.72)" }}>{role}</div>
        </div>
        {/* accent line on hover */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: "var(--accent)" }} />
      </motion.div>
    </AnimatedSection>
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
        <div className="mx-auto max-w-6xl space-y-24">

          {/* Vision & Mission */}
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { label: "Vision", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80", text: "Our ultimate vision is to cement West Africa's position as a global leader in digital innovation, using Ghana as our strategic launchpad to drive Africa's digital transformation." },
              { label: "Mission", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", text: "To drive Ghana and Africa's digital transformation, fostering deep economic growth, regional financial inclusion, and world-class digital talent through institutional-grade venture building." },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border" style={{ borderColor: "var(--border)" }}>
                  <div className="relative h-48 overflow-hidden sm:h-56">
                    <img src={item.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, var(--bg-card) 100%)" }} />
                  </div>
                  <div className="relative -mt-16 p-6">
                    <div className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)", backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)" }}>
                      {item.label}
                    </div>
                    <p className="text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>{item.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Powered by World-Class Infrastructure */}
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80" alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.75)" }} />
              </div>
              <div className="relative px-8 py-16 sm:px-12 sm:py-20">
                <div className="mx-auto max-w-4xl">
                  <div className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)", backgroundColor: "rgba(255,255,255,0.1)" }}>
                    Infrastructure
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Powered by World-Class Infrastructure</h2>
                  <p className="mb-8 max-w-2xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                    Our studio&apos;s unique competitive advantage lies in our foundational enablers. Every venture we launch is instantly supercharged by:
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="rounded-xl border p-5" style={{ borderColor: "rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.06)" }}>
                      <h3 className="mb-2 text-base font-bold text-white">The BlueSPACE Financial CLOUD (BFC)</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>Our proprietary, AI-driven financial platform that provides ventures and enterprise clients with plug-and-play transaction processing, predictive analytics, and robust API networks.</p>
                    </div>
                    <div className="rounded-xl border p-5" style={{ borderColor: "rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.06)" }}>
                      <h3 className="mb-2 text-base font-bold text-white">The FundMatrix Program</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>A sophisticated funding coalition managed in lockstep with licensed asset management and telecom heavyweights to ensure an uninterrupted flow of capital from seed stages to cross-border expansion.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Why BIH-DEVS */}
          <AnimatedSection delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80" alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.75)" }} />
              </div>
              <div className="relative px-8 py-16 sm:px-12 sm:py-20">
                <div className="mx-auto max-w-4xl">
                  <div className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)", backgroundColor: "rgba(255,255,255,0.1)" }}>
                    Advantage
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">Why BIH-DEVS?</h2>
                  <p className="mb-8 text-sm font-semibold" style={{ color: "var(--accent)" }}>The Venture Studio Advantage</p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="rounded-xl border p-5" style={{ borderColor: "rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.06)" }}>
                      <h3 className="mb-1.5 text-sm font-bold text-white">A Holistic Ecosystem</h3>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>Skills build talent, talent designs platforms, platforms power ventures, and ventures attract institutional capital.</p>
                    </div>
                    <div className="rounded-xl border p-5" style={{ borderColor: "rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.06)" }}>
                      <h3 className="mb-1.5 text-sm font-bold text-white">Proprietary AI Tech</h3>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>Every venture we build launches with an unfair advantage by utilizing the pre-built architecture of the BlueSPACE Financial CLOUD.</p>
                    </div>
                    <div className="rounded-xl border p-5" style={{ borderColor: "rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.06)" }}>
                      <h3 className="mb-1.5 text-sm font-bold text-white">Guaranteed Funding Pathways</h3>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>Our managed FundMatrix program ensures our portfolio ventures bypass the traditional early-stage funding bottleneck.</p>
                    </div>
                    <div className="rounded-xl border p-5" style={{ borderColor: "rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.06)" }}>
                      <h3 className="mb-1.5 text-sm font-bold text-white">Pan-African Scale</h3>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>Using Ghana as a strategic launchpad, we build architectures engineered for rapid cross-border expansion.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Team */}
          <div>
            <AnimatedSection className="mb-10">
              <div className="mb-1 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>Team</div>
              <h2 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>The People Behind the Hub</h2>
              <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>~40 years combined experience in digital economy, startup ecosystems, and youth initiatives.</p>
            </AnimatedSection>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {team.map((m, i) => <PersonCard key={m.name} {...m} index={i} />)}
            </div>
          </div>

          {/* Board */}
          <div>
            <AnimatedSection className="mb-10">
              <div className="mb-1 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>Board</div>
              <h2 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>Board Members</h2>
            </AnimatedSection>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {board.map((m, i) => <PersonCard key={m.name} {...m} index={i} />)}
            </div>
          </div>

        </div>
      </section>
    </PageShell>
  );
}
