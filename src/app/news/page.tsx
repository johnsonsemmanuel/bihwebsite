"use client";

import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { GlassBlogCard } from "@/components/GlassBlogCard";
import { posts } from "@/lib/posts";

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
              <AnimatedSection key={post.slug} delay={i * 0.08} className="flex">
                <GlassBlogCard
                  {...post}
                  href={`/news/${post.slug}`}
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
