"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";
import { FaGithub } from "react-icons/fa";
import { Container, ExternalLink, Activity, Rocket, Shield, Box } from "lucide-react";

const statusColors: Record<string, string> = {
  Production: "bg-green-500/10 text-green-400 border-green-500/20",
  Active: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Maintained: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Live: "bg-green-500/10 text-green-400 border-green-500/20",
};

const tagColors: Record<string, string> = {
  "AWS EKS": "bg-blue-500/10 text-blue-400",
  Terraform: "bg-purple-500/10 text-purple-400",
  Karpenter: "bg-cyan-500/10 text-cyan-400",
  Helm: "bg-orange-500/10 text-orange-400",
  Prometheus: "bg-red-500/10 text-red-400",
  Grafana: "bg-amber-500/10 text-amber-400",
  "GitHub Actions": "bg-slate-500/10 text-slate-300",
  Docker: "bg-cyan-500/10 text-cyan-400",
  ArgoCD: "bg-pink-500/10 text-pink-400",
  Kubernetes: "bg-blue-500/10 text-blue-400",
  Trivy: "bg-green-500/10 text-green-400",
  Loki: "bg-orange-500/10 text-orange-400",
  OpenTelemetry: "bg-indigo-500/10 text-indigo-400",
  AWS: "bg-amber-500/10 text-amber-400",
  Terratest: "bg-purple-500/10 text-purple-400",
  HAProxy: "bg-green-500/10 text-green-400",
  LiveKit: "bg-blue-500/10 text-blue-400",
  n8n: "bg-red-500/10 text-red-400",
};

export function Projects() {
  return (
    <section id="projects" className="relative section-padding border-y border-card-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="Infrastructure solutions I've built and deployed" />

        <div className="space-y-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass card-hover rounded-2xl p-6 sm:p-8 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Container className="text-primary" size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <h3 className="text-lg font-semibold sm:text-xl">{project.title}</h3>
                    <span className={`inline-flex w-fit items-center rounded-lg border px-2 py-0.5 text-[10px] font-medium ${statusColors[project.status] || "bg-muted text-muted-foreground"}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">{project.description}</p>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2 text-sm text-muted-foreground">
                    <div className="rounded-lg bg-muted/20 p-3">
                      <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">Problem</div>
                      <p className="text-xs leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="rounded-lg bg-muted/20 p-3">
                      <div className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-1">Solution</div>
                      <p className="text-xs leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-lg px-2.5 py-1 text-xs font-medium ${tagColors[tag] || "bg-muted text-muted-foreground"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    {Object.entries(project.metrics).map(([key, val]) => (
                      <span key={key} className="flex items-center gap-1">
                        <Activity size={10} className="text-primary" />
                        <span className="font-medium">{key}:</span> {val}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:flex-shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl glass px-3 py-2 text-xs font-medium transition-all hover:bg-muted/60"
                  >
                    <FaGithub size={14} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
