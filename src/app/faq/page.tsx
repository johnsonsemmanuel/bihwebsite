import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";

export default function FAQPage() {
  return (
    <PageShell>
      <PageHero
        title="Quick Answers."
        subtitle="Everything you need to know about our programs, investment terms, and application process."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      />
      <FAQ />
    </PageShell>
  );
}
