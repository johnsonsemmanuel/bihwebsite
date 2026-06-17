"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { posts } from "@/lib/posts";
import { EASE } from "@/lib/utils";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export default function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <PageShell>
      {/* Hero image with fade+scale in */}
      <motion.div
        className="relative h-[50vh] min-h-[320px] w-full overflow-hidden"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,17,23,0.3) 0%, rgba(13,17,23,0.85) 100%)" }} />
        <motion.div
          className="absolute inset-0 flex flex-col justify-end px-6 pb-10 md:px-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          <div className="mx-auto w-full max-w-3xl">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full px-3 py-1 text-xs font-medium" style={{ backgroundColor: "var(--accent)", color: "#fff" }}>
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />3 min read</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Body */}
      <motion.section
        className="px-6 py-16"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
      >
        <div className="mx-auto max-w-3xl">
          <Link href="/news" className="mb-10 flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]" style={{ color: "var(--text-secondary)" }}>
            <ArrowLeft className="h-4 w-4" /> Back to News
          </Link>
          <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {post.body.trim().split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </motion.section>
    </PageShell>
  );
}
