import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Stats from "@/components/Stats";

export default function ImpactPage() {
  return (
    <PageShell>
      <PageHero
        title="Built for Results."
        subtitle="Our track record speaks for itself. Capital deployed, startups accelerated, and a network that delivers."
        image="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=80"
      />
      <Stats />
    </PageShell>
  );
}
