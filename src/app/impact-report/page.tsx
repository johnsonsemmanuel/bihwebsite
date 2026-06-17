import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

export default function ImpactReportPage() {
  return (
    <PageShell>
      <PageHero
        title="Impact Report"
        subtitle="Measuring our progress, tracking outcomes, and sharing the results of our work across the ecosystem."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
      />
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Our full impact report is coming soon.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
