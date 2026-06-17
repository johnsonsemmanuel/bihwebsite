import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        title="More Than Capital."
        subtitle="A Launch System. We partner with ambitious founders at the earliest stage and stay with them through scale."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
      />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 grid gap-8 md:grid-cols-2">
            <AnimatedSection>
              <div
                className="rounded-2xl border p-8"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
              >
                <h2 className="mb-4 text-xl font-bold" style={{ color: "var(--text-primary)" }}>Our Approach</h2>
                <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <p>
                    Every investment comes with a dedicated operating partner who works alongside
                    your team on strategy, hiring, sales, and fundraising.
                  </p>
                  <p>
                    We take a portfolio approach to support. Our network of 40+ portfolio companies
                    share talent, insights, and introductions.
                  </p>
                  <p>
                    We are stage-agnostic within early-stage. Whether you are pre-revenue or
                    generating seven figures in ARR, we build a program around your specific needs.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div
                className="rounded-2xl border p-8"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
              >
                <h2 className="mb-4 text-xl font-bold" style={{ color: "var(--text-primary)" }}>Our Network</h2>
                <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <p>
                    120+ founders, 40+ partner VCs, 60+ enterprise executives, and 200+ angel
                    investors who actively engage with our portfolio.
                  </p>
                  <p>
                    Weekly office hours and monthly roundtables with operators who have built
                    category-defining companies.
                  </p>
                  <p>
                    Exclusive access to our partner network for legal, finance, design, and
                    engineering talent at preferential rates.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
