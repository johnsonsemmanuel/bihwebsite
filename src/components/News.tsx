"use client";

import AnimatedSection from "./AnimatedSection";
import { GlassBlogCard } from "./GlassBlogCard";
import { Button } from "./ui/button";
import Link from "next/link";

const posts = [
  {
    title: "Ghana's Copianto AI secures €100,000 on Shark Tank Malta to expand to Europe",
    excerpt: "Copianto AI, the conversational AI search platform for enterprises, secured a €100,000 investment on Shark Tank Malta. The pivotal moment was facilitated by the BlueSPACE Startup Trade Mission.",
    image: "https://bluespaceinnovationhub.com/wp-content/uploads/2024/07/Untitled-design-97.png",
    date: "Jul 22, 2024",
    tags: ["Investment", "AI"],
    href: "/news",
  },
  {
    title: "BlueSPACE Innovation Hub ends first edition of DevCon Summit",
    excerpt: "BlueSPACE successfully concluded the inaugural DevCon Summit, bringing together developers, innovators, and tech enthusiasts to foster collaboration and growth in Ghana's tech ecosystem.",
    image: "https://bluespaceinnovationhub.com/wp-content/uploads/2024/07/Untitled-design-96.png",
    date: "Jul 2024",
    tags: ["Event", "Tech"],
    href: "/news",
  },
  {
    title: "BlueSPACE Innovation Hub, BlueCrest University and Innovation Sparks host International Women's Month celebration",
    excerpt: "A landmark celebration bringing together women in innovation and entrepreneurship, highlighting the power of collaboration and inclusion in building Africa's startup ecosystem.",
    image: "https://bluespaceinnovationhub.com/wp-content/uploads/2024/07/29-1024x1024.png",
    date: "Jul 2024",
    tags: ["Community", "Women in Tech"],
    href: "/news",
  },
  {
    title: "BlueSPACE Innovation Exchange Mission: Ghanaian Innovation on a Global Stage at Startup Festival Malta 2023",
    excerpt: "Ghanaian startups represented their nation on the global stage at Startup Festival Malta 2023, showcasing the depth of innovation coming out of the BlueSPACE ecosystem.",
    image: "https://bluespaceinnovationhub.com/wp-content/uploads/2024/07/Untitled-design-51.jpg",
    date: "2023",
    tags: ["Global", "BIX"],
    href: "/news",
  },
  {
    title: "GTUC in Collaboration with Bluespace Africa and MDF West Africa Launch Ghana Innovation Hub",
    excerpt: "A landmark partnership between GTUC, Bluespace Africa, and MDF West Africa formalises the launch of a dedicated innovation hub to support Ghana's growing startup and entrepreneurship landscape.",
    image: "https://bluespaceinnovationhub.com/wp-content/uploads/2024/07/Untitled-design-95.png",
    date: "2024",
    tags: ["Partnership", "Education"],
    href: "/news",
  },
  {
    title: "Delivering Innovation As A Service through our Factories",
    excerpt: "Explore how BlueSPACE's five factory model - Talent, Accelerator, Code, Digital, and Capital - delivers Innovation as a Service to startups and enterprises across Africa.",
    image: "https://bluespaceinnovationhub.com/wp-content/uploads/2024/08/Untitled-design-5.jpg",
    date: "Aug 2024",
    tags: ["Innovation", "Factories"],
    href: "/news",
  },
];

const author = { name: "BlueSPACE", avatar: "" };

export default function News() {
  return (
    <section id="news" className="border-t px-6 py-24" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-3 block text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>
            Latest News
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
            Stories from the Hub
          </h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Milestones, launches, and moments from the BlueSPACE ecosystem.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <AnimatedSection key={post.title} delay={i * 0.08} className="flex justify-center">
              <GlassBlogCard
                {...post}
                author={author}
                readTime="3 min read"
                className="w-full max-w-none"
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center" delay={0.1}>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/news">
              View All News
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
