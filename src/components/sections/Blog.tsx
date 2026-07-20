"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/lib/data";
import { Calendar, ArrowRight, Clock } from "lucide-react";

export function Blog() {
  return (
    <section id="blog" className="relative section-padding border-y border-card-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Blog & Insights" subtitle="Thoughts on platform engineering and cloud infrastructure" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass card-hover group flex flex-col rounded-2xl overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 p-5 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-lg bg-background/60 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {post.category}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-semibold leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
