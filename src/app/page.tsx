import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Programs from "@/components/Programs";
import Events from "@/components/Events";
import News from "@/components/News";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <Stats />
      <About />
      <Journey />
      <Programs />
      <Events />
      <News />
    </PageShell>
  );
}
