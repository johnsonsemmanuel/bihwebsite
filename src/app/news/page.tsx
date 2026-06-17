"use client";

import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { GlassBlogCard } from "@/components/GlassBlogCard";

const posts = [
  {
    title: "Ghana's Copianto AI secures €100,000 on Shark Tank Malta to expand to Europe",
    excerpt: "Copianto AI, the conversational AI search platform for enterprises, secured a €100,000 investment on Shark Tank Malta. Four angel investors participated in the deal. The pivotal moment was facilitated by the BlueSPACE Startup Trade Mission, which partnered with the Maltese High Commission in Ghana to foster collaborations between the Ghanaian and Maltese startup ecosystems.",
    image: "https://bluespaceinnovationhub.com/wp-content/uploads/2024/07/Untitled-design-97.png",
    date: "Jul 22, 2024",
    tags: ["Investment", "AI"],
  },
  {
    title: "BlueSPACE Innovation Hub ends first edition of DevCon Summit",
    excerpt: "BlueSPACE successfully concluded the inaugural DevCon Summit, bringing together developers, innovators, and tech enthusiasts to foster collaboration and growth in Ghana's technology ecosystem. The event featured workshops, panel discussions, and networking sessions that connected builders from across the continent.",
    image: "https://bluespaceinnovationhub.com/wp-content/uploads/2024/07/Untitled-design-96.png",
    date: "Jul 2024",
    tags: ["Event", "Tech"],
  },
  {
    title: "BlueSPACE Innovation Hub, BlueCrest University and Innovation Sparks host International Women's Month celebration",
    excerpt: "A landmark celebration bringing together women in innovation and entrepreneurship across Ghana, highlighting the power of collaboration and inclusion in building Africa's startup ecosystem. The event featured inspiring speakers, mentorship sessions, and a showcase of women-led ventures from the BlueSPACE community.",
    image: "https://bluespaceinnovationhub.com/wp-content/uploads/2024/07/29-1024x1024.png",
    date: "Jul 2024",
    tags: ["Community", "Women in Tech"],
  },
  {
    title: "BlueSPACE Innovation Exchange Mission: Ghanaian Innovation on a Global Stage at Startup Festival Malta 2023",
    excerpt: "Ghanaian startups represented their nation on the global stage at Startup Festival Malta 2023, showcasing the depth of innovation coming out of the BlueSPACE ecosystem. The BIX (Innovation Exchange) program continues to open international doors for African founders.",
    image: "https://bluespaceinnovationhub.com/wp-content/uploads/2024/07/Untitled-design-51.jpg",
    date: "2023",
    tags: ["Global", "BIX"],
  },
  {
    title: "GTUC in Collaboration with Bluespace Africa and MDF West Africa Launch Ghana Innovation Hub",
    excerpt: "A landmark partnership between Ghana Technology University College (GTUC), Bluespace Africa, and MDF West Africa formalises the launch of a dedicated innovation hub to support Ghana's growing startup and entrepreneurship landscape, creating pathways for student founders to access resources and mentorship.",
    image: "https://bluespaceinnovationhub.com/wp-content/uploads/2024/07/Untitled-design-95.png",
    date: "2024",
    tags: ["Partnership", "Education"],
  },
  {
    title: "Delivering Innovation As A Service through our Factories",
    excerpt: "Explore how BlueSPACE's five-factory model - TalentFACTORY, AcceleratorFACTORY, CodeFACTORY, DigitalFACTORY, and CapitalFACTORY - delivers Innovation as a Service to startups and enterprises across Africa, creating a full-stack support system for every stage of growth.",
    image: "https://bluespaceinnovationhub.com/wp-content/uploads/2024/08/Untitled-design-5.jpg",
    date: "Aug 2024",
    tags: ["Innovation", "Factories"],
  },
];

const author = { name: "BlueSPACE", avatar: "" };


export default function NewsPage() {
  return (
    <PageShell>
      <PageHero
        title="Stories from the Hub"
        subtitle="Milestones, launches, and moments from the BlueSPACE Innovation Hub ecosystem."
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80"
      />
      <section className="px-6 pb-24 pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <AnimatedSection key={post.title} delay={i * 0.08} className="flex">
                <GlassBlogCard
                  {...post}
                  author={author}
                  readTime="3 min read"
                  className="w-full max-w-none"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
