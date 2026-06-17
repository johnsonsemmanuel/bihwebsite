import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Programs from "@/components/Programs";
import News from "@/components/News";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <Stats />
      <About />
      <Programs />
      <News />
      <Testimonials />
      <FAQ />
      <Contact />
    </PageShell>
  );
}
