"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Target, Eye, Heart, Zap, BookOpen, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Mission", text: "Build infrastructure that empowers engineering teams to ship fast, safely, and reliably." },
  { icon: Eye, title: "Vision", text: "Create self-healing, observable, and cost-optimized platforms that scale with business needs." },
  { icon: Heart, title: "Passion", text: "Automate everything. If it can be scripted, it should be. Manual processes are bugs in the system." },
];

const timeline = [
  { year: "2025", title: "Started My DevOps Journey", desc: "Began exploring Linux, AWS, Docker, Kubernetes, and cloud infrastructure while building hands-on projects." },
  { year: "2026", title: "Certified Kubernetes Administrator (CKA)", desc: "Earned the CKA certification and continued strengthening my skills in Kubernetes, Linux, and cloud-native technologies." },
  { year: "2026", title: "DevOps Engineer", desc: "Started my professional career, working with AWS, Amazon EKS, Terraform, CI/CD pipelines, monitoring, and production infrastructure." },
  { year: "Future", title: "Platform Engineer", desc: "Working towards becoming a Platform Engineer by mastering cloud architecture, automation, observability, and scalable infrastructure while preparing for global opportunities." },
];

const highlights = [
  { icon: Zap, label: "7 Months", sub: "Experience", color: "text-amber-400" },
  { icon: BookOpen, label: "1 Cert", sub: "Certified", color: "text-blue-400" },
  { icon: Users, label: "DevOps", sub: "Practitioner", color: "text-purple-400" },
  { icon: Zap, label: "Global", sub: "Opportunities", color: "text-green-400" },
];

export function About() {
  return (
    <section id="about" className="relative section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="The engineer behind the infrastructure" />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="glass rounded-2xl p-6 sm:p-8 flex-1">
<h3 className="mb-4 text-xl font-semibold">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi, I'm <strong>Mareeswaran</strong>, a <strong>DevOps Engineer</strong> passionate about cloud infrastructure, automation, and cloud-native technologies.
                </p>
                <p>
                  I'm currently gaining hands-on experience with AWS, Kubernetes (EKS), Terraform, CI/CD, Linux, and monitoring, while continuously strengthening my understanding of modern DevOps practices.
                </p>
                <p>
                  I enjoy solving infrastructure challenges, learning how systems work behind the scenes, and building reliable, scalable solutions. My long-term goal is to grow into a <strong>Platform Engineer</strong> and contribute to building resilient cloud platforms for global engineering teams.
                </p>
                <p>
                  Every day, I'm focused on becoming a better engineer than I was yesterday.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {highlights.map(({ icon: Icon, label, sub, color }) => (
                  <div key={label} className="glass rounded-xl p-4 transition-colors hover:bg-muted/30">
                    <Icon className={color} size={20} />
                    <div className="mt-2 text-sm font-medium">{label}</div>
                    <div className="text-xs text-muted-foreground">{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {values.map(({ icon: Icon, title, text }) => (
                <div key={title} className="glass card-hover rounded-2xl p-5 text-center">
                  <Icon className="mx-auto mb-3 text-primary" size={24} />
                  <h4 className="mb-2 font-semibold">{title}</h4>
                  <p className="text-xs text-muted-foreground sm:text-sm">{text}</p>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-6 sm:p-8 flex-1">
              <h3 className="mb-6 text-xl font-semibold">Career Journey</h3>
              <div className="relative">
                <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
                <div className="space-y-6">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="relative pl-10"
                    >
                      <div className="absolute left-[8px] top-1.5 h-[14px] w-[14px] rounded-full border-2 border-primary bg-background shadow-sm" />
                      <div className="text-xs font-semibold tracking-wider text-primary uppercase">{item.year}</div>
                      <div className="mt-0.5 font-medium">{item.title}</div>
                      <div className="mt-0.5 text-sm text-muted-foreground">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
