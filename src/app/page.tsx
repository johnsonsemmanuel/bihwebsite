import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Programs from "@/components/Programs";
import PartnersPortfolio from "@/components/PartnersPortfolio";
import Events from "@/components/Events";
import News from "@/components/News";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <Stats />
      <About />
      <Journey />
      <Programs />
      <PartnersPortfolio />
      <Events />
      <News />
      <Testimonials />
    </PageShell>
  );
}
