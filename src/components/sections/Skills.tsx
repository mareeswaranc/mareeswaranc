"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/lib/data";
import {
  Monitor, Cloud, Box, Code, GitBranch, Activity,
  Terminal, Database, Wifi, Shield, Users,
  Server, Cpu, HardDrive, Layers,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  monitor: Monitor, cloud: Cloud, box: Box, code: Code,
  "git-branch": GitBranch, activity: Activity, terminal: Terminal,
  database: Database, network: Wifi, shield: Shield, users: Users,
  server: Server, cpu: Cpu, "hard-drive": HardDrive, layers: Layers,
};

const skillIcons: Record<string, React.ElementType> = {
  Linux: Monitor, Ubuntu: Monitor, "Amazon Linux": Monitor,
  AWS: Cloud, Azure: Cloud, GCP: Cloud,
  Docker: Box, Kubernetes: Box, Helm: Box, Karpenter: Box, KEDA: Box,
  Terraform: Code, Ansible: Code,
  "GitHub Actions": GitBranch, Jenkins: GitBranch, ArgoCD: GitBranch,
  Prometheus: Activity, Grafana: Activity, Loki: Activity, OpenTelemetry: Activity,
  Python: Terminal, Bash: Terminal, JavaScript: Terminal,
  PostgreSQL: Database, MySQL: Database, Redis: Database,
  HAProxy: Wifi, Nginx: Wifi,
  "AWS EKS": Shield, IAM: Shield, KMS: Shield,
  "CI/CD": Users, GitOps: Users, "Platform Engineering": Users,
  DNS: Wifi, "Load Balancers": Wifi, VPC: Wifi, VPN: Wifi, "Security Groups": Shield,
  OIDC: Shield, IRSA: Shield, "Secrets Manager": Shield,
  Leadership: Users, Communication: Users, Documentation: Users, Troubleshooting: Activity,
};

function SkillCategory({
  category,
  icon,
  items,
  index,
}: {
  category: string;
  icon: string;
  items: { name: string; level: number; future?: boolean }[];
  index: number;
}) {
  const Icon = iconMap[icon] || Box;
  const sortedItems = [...items].sort((a, b) => b.level - a.level);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="glass card-hover rounded-2xl p-5 sm:p-6 h-full"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon size={22} />
        </div>
        <h3 className="font-semibold text-lg">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {sortedItems.map((skill) => {
          const Icon = skillIcons[skill.name] || Box;
          return (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary ${
                skill.future ? "text-muted-foreground/60" : "text-foreground"
              }`}
            >
              <Icon size={12} className="transition-colors" />
              {skill.name}
              {skill.future && <span className="text-[10px]">(learning)</span>}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative section-padding border-y border-card-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies I work with"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <SkillCategory key={skill.category} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}