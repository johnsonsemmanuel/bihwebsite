"use client";

import AnimatedSection from "./AnimatedSection";
import { GlassBlogCard } from "./GlassBlogCard";
import { Button } from "./ui/button";
import Link from "next/link";
import { posts } from "@/lib/posts";

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
                href={`/news/${post.slug}`}
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
