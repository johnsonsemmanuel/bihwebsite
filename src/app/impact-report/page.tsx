import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export default function ImpactReportPage() {
  return (
    <PageShell>
      <PageHero
        title="Our Vision for Impact"
        subtitle="We measure our success by the resilience of the economies we help build."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
      />
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <p>
                We measure our success by the resilience of the economies we help build. By combining specialized digital skill development with robust financial technology and institutional capital, BIH-DEVS is moving the needle on regional financial inclusion, sustainable job creation, and continental digital sovereignty.
              </p>
              <p className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                BIH-DEVS is where ideas become impact, and innovation shapes the future.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageShell>
  );
}
