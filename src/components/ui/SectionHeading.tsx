"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10 text-center"
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground text-sm sm:text-base">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
    </motion.div>
  );
}
