"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/lib/data";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="relative section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Industry-recognized credentials"
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass card-hover group rounded-2xl p-5 sm:p-6"
            >
              <div className="flex items-start gap-3">
                <div
                  className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${cert.color}15` }}
                >
                  <Award size={20} style={{ color: cert.color }} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold leading-snug text-sm">{cert.name}</h3>
                  <div className="mt-1 text-xs text-muted-foreground">{cert.issuer}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground/70">{cert.year}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
