"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaGithub } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";

const levelColors = [
  "bg-muted/30",
  "bg-green-900/60",
  "bg-green-700/70",
  "bg-green-500/80",
  "bg-green-400",
];

const activityCards = [
  { label: "Total Contributions", value: "1,247", color: "text-green-400" },
  { label: "Current Streak", value: "14 days", color: "text-amber-400" },
  { label: "Longest Streak", value: "31 days", color: "text-blue-400" },
  { label: "Public Repos", value: "12", color: "text-purple-400" },
];

export function GitHub() {
  const [contributionData, setContributionData] = useState<number[][]>([]);

  useEffect(() => {
    setContributionData(
      Array.from({ length: 52 }, () =>
        Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
      )
    );
  }, []);

  return (
    <section className="relative section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="GitHub Activity" subtitle="My open-source contributions" />

        <div className="mx-auto max-w-4xl space-y-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {activityCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass card-hover rounded-xl p-4 text-center"
              >
                <div className={`text-xl font-bold sm:text-2xl ${card.color}`}>{card.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{card.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-4 sm:p-6 overflow-x-auto"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm font-medium">Contribution Graph</div>
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                Less
                {levelColors.map((c, i) => (
                  <span key={i} className={`inline-block h-2.5 w-2.5 rounded-sm ${c}`} />
                ))}
                More
              </div>
            </div>
            <div className="flex gap-[3px]">
              {contributionData.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((level, di) => (
                    <div
                      key={di}
                      className={`h-2.5 w-2.5 rounded-sm ${levelColors[level]}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex justify-center">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-medium transition-all hover:bg-muted/60 hover:scale-[1.02]"
            >
              <FaGithub size={18} /> View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
