import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        title="Ready to Build?"
        subtitle="Tell us about your company. We review every application personally and respond within 48 hours."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
      />
      <div className="-mt-20 relative z-10">
        <Contact hideHeading />
      </div>
    </PageShell>
  );
}
