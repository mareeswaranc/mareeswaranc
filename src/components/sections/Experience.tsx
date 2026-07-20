"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/lib/data";
import { Briefcase, CheckCircle2, Trophy } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Briefcase className="text-primary" size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold sm:text-xl">{exp.role}</h3>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {exp.company} · {exp.period}
                  </div>
                  <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
                    <CheckCircle2 size={16} className="text-blue-400" />
                    Responsibilities
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((r, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.06 }}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                        {r}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
                    <Trophy size={16} className="text-amber-400" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.achievements.map((a, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.06 }}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                        {a}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
