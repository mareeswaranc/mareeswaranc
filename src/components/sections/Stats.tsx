"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { stats } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Briefcase, FolderCheck, Award, GitCommit,
  Cloud, Box, GitBranch, Container
} from "lucide-react";

const iconMap = [
  Briefcase, FolderCheck, Award, GitCommit,
  Cloud, Box, GitBranch, Container,
];

const statColors = [
  "text-blue-400", "text-purple-400", "text-amber-400", "text-green-400",
  "text-cyan-400", "text-indigo-400", "text-pink-400", "text-emerald-400",
];

function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) {
  const { count, ref } = useCountUp(stat.value, 2000);
  const Icon = iconMap[index % iconMap.length];
  const color = statColors[index % statColors.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass card-hover group rounded-2xl p-5 text-center sm:p-6"
    >
      <Icon className={`mx-auto mb-3 ${color} transition-transform group-hover:scale-110`} size={22} />
      <div className="text-2xl font-bold gradient-text sm:text-3xl">
        {count}
        {stat.suffix}
      </div>
      <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="relative section-padding border-y border-card-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="By the Numbers"
          subtitle="A snapshot of my engineering impact"
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
