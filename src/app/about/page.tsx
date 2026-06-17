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
          <AnimatedSection className="grid gap-6 md:grid-cols-2">
            {[
              { label: "Vision", text: "To be the leading innovation center that creates the platform for digital transformation and serves as the fertile ground for next generation solutions." },
              { label: "Mission", text: "To create a sustainable innovation ecosystem by creating a nexus between innovation and impact." },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border p-8" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}>
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>{item.label}</div>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>{item.text}</p>
              </div>
            ))}
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
