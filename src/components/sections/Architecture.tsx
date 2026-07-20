"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Cloud, Terminal, Monitor, Database, GitBranch,
  Code, Layers, Box, BookOpen, Wrench, FileText,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const tools = [
  { name: "AWS Console", icon: Cloud, category: "Cloud", desc: "Cost explorer, service health, resource utilization" },
  { name: "CloudWatch", icon: Monitor, category: "Observability", desc: "Alarms, metrics dashboards, log insights" },
  { name: "Grafana", icon: Database, category: "Observability", desc: "Cluster health, app performance, business metrics" },
  { name: "kubectl / k9s", icon: Layers, category: "Kubernetes", desc: "Pod logs, exec, scale, troubleshoot, context switch" },
  { name: "ArgoCD", icon: GitBranch, category: "GitOps", desc: "Sync apps, check drift, rollback, promote" },
  { name: "Terminal (vim)", icon: Terminal, category: "Daily Driver", desc: "SSH, kubectl, logs, debug, config edits" },
  { name: "Terraform", icon: Code, category: "IaC", desc: "Plan, apply, validate modules, state management" },
  { name: "GitHub Actions", icon: FaGithub, category: "CI/CD", desc: "Trigger builds, debug pipelines, review deployments" },
  { name: "GitHub", icon: FaGithub, category: "CI/CD", desc: "Code review, PR merge, issue tracking" },
  { name: "Docker", icon: Box, category: "Containers", desc: "Build images, multi-arch, scan, push to ECR" },
  { name: "Email / Slack", icon: FaGithub, category: "Comms", desc: "Alerts, PR reviews, team updates" },
  { name: "Documentation", icon: FileText, category: "Knowledge", desc: "Update docs, RCA, README" },
];

const categoryColors: Record<string, { color: string; bg: string }> = {
  Cloud:           { color: "text-blue-400",    bg: "bg-blue-500/10" },
  Observability:   { color: "text-green-400",   bg: "bg-green-500/10" },
  Kubernetes:      { color: "text-cyan-400",    bg: "bg-cyan-500/10" },
  GitOps:          { color: "text-pink-400",    bg: "bg-pink-500/10" },
  "Daily Driver":  { color: "text-slate-400",   bg: "bg-slate-500/10" },
  IaC:             { color: "text-purple-400",  bg: "bg-purple-500/10" },
  "CI/CD":         { color: "text-amber-400",   bg: "bg-amber-500/10" },
  Containers:      { color: "text-orange-400",  bg: "bg-orange-500/10" },
  Comms:           { color: "text-yellow-400",  bg: "bg-yellow-500/10" },
  Knowledge:       { color: "text-teal-400",    bg: "bg-teal-500/10" },
};

const categories = [
  { name: "Cloud",         icon: Cloud },
  { name: "Kubernetes",    icon: Layers },
  { name: "IaC",           icon: Code },
  { name: "CI/CD",         icon: FaGithub },
  { name: "Observability", icon: Database },
  { name: "Daily Driver",  icon: Terminal },
  { name: "Containers",    icon: Box },
  { name: "Growth",        icon: BookOpen },
];

export function Architecture() {
  return (
    <section id="architecture" className="relative section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Daily Toolchain"
          subtitle="The tools I work with every day"
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => {
            const c = categoryColors[cat.name] ?? { color: "text-muted-foreground", bg: "bg-muted" };
            return (
              <span
                key={cat.name}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border ${c.color} ${c.bg} border-current/20`}
              >
                <cat.icon size={10} />
                {cat.name}
              </span>
            );
          })}
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => {
            const c = categoryColors[tool.category] ?? { color: "text-muted-foreground", bg: "bg-muted" };
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="glass card-hover group rounded-xl p-4"
              >
                <div className="flex items-start gap-3">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${c.bg}`}>
                    <tool.icon size={16} className={c.color} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-sm">{tool.name}</h4>
                    <span className={`inline-block mt-0.5 rounded-full px-2 py-0.5 text-[10px] font-medium ${c.bg} ${c.color}`}>
                      {tool.category}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground line-clamp-2">{tool.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 grid gap-4 sm:grid-cols-3"
        >
          <div className="glass rounded-2xl p-5 text-center">
            <div className="text-3xl font-bold gradient-text">12</div>
            <div className="text-xs text-muted-foreground">Tools in Daily Use</div>
          </div>
          <div className="glass rounded-2xl p-5 text-center">
            <div className="text-3xl font-bold gradient-text">10</div>
            <div className="text-xs text-muted-foreground">Categories</div>
          </div>
          <div className="glass rounded-2xl p-5 text-center">
            <div className="text-3xl font-bold gradient-text">Always</div>
            <div className="text-xs text-muted-foreground">Learning in Progress</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
