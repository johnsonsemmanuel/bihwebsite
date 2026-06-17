"use client";

import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const tracks = [
  {
    title: "Pre-Seed Track",
    tag: "Idea Stage",
    duration: "12 weeks",
    investment: "$25K - $100K",
    description:
      "For founders with a validated concept ready to build. We provide the structure, mentorship, and initial capital to turn your idea into a shipping product.",
    features: [
      "Market validation & customer discovery",
      "MVP development with dedicated engineers",
      "Pitch deck design and narrative coaching",
      "Weekly founder office hours",
      "Demo day with 50+ investors",
      "Legal and incorporation support",
    ],
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
  },
  {
    title: "Seed Accelerator",
    tag: "Early Stage",
    duration: "16 weeks",
    investment: "$150K - $500K",
    description:
      "For startups with product-market fit ready to scale revenue. Intensive operational support, executive coaching, and direct access to our capital network.",
    features: [
      "$150K minimum investment",
      "Executive leadership coaching",
      "Growth marketing engine setup",
      "Engineering team augmentation",
      "Strategic partnership introductions",
      "Series A readiness preparation",
    ],
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    title: "Scale Program",
    tag: "Growth Stage",
    duration: "Ongoing",
    investment: "$500K - $2M",
    description:
      "For companies at escape velocity. We help you build the infrastructure, team, and strategy to become a market-defining business.",
    features: [
      "Series A & B fundraising support",
      "Executive talent acquisition",
      "Enterprise partnership development",
      "International market expansion",
      "M&A advisory",
      "Board composition and governance",
    ],
    img: "https://images.unsplash.com/photo-1553729459-afe8f2e2e5b4?w=600&q=80",
  },
];

function TrackCard({ track, index }: { track: typeof tracks[number]; index: number }) {
  return (
    <AnimatedSection delay={index * 0.12}>
      <motion.div
        className="group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-xl"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--bg-card)",
        }}
        whileHover={{ y: -4 }}
      >
        <div className="grid md:grid-cols-5">
          <div className="relative h-48 overflow-hidden md:col-span-2 md:h-auto">
            <motion.img
              src={track.img}
              alt={track.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, var(--bg-card) 0%, transparent 60%)",
              }}
            />
          </div>

          <div className="flex flex-col justify-center p-6 md:col-span-3 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="rounded-full border px-3 py-1 text-xs font-medium"
                style={{ borderColor: "var(--accent)", color: "#60a5fa" }}
              >
                {track.tag}
              </span>
              <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                {track.duration}
              </span>
              <span className="text-xs font-semibold" style={{ color: "var(--accent)" }}>
                {track.investment}
              </span>
            </div>

            <h2
              className="mb-3 text-2xl font-bold transition-colors group-hover:text-[#60a5fa]"
              style={{ color: "var(--text-primary)" }}
            >
              {track.title}
            </h2>

            <p
              className="mb-6 text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {track.description}
            </p>

            <div className="mb-6 grid gap-2 sm:grid-cols-2">
              {track.features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Check className="h-4 w-4 shrink-0 text-[#60a5fa]" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

export default function ProgramsPage() {
  return (
    <PageShell>
      <PageHero
        title="Three Tracks. One Mission."
        subtitle="Whether you have a sketch on a napkin or a product in market, we have a program built for your stage."
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80"
      >
        <Button asChild size="lg" className="rounded-full">
          <Link href="/contact">
            Apply Now
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </PageHero>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-8">
            {tracks.map((track, i) => (
              <TrackCard key={track.title} track={track} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
