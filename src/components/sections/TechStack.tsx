"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  FaAws, FaDocker, FaLinux, FaPython, FaGithub, FaJenkins,
} from "react-icons/fa";
import {
  SiKubernetes, SiTerraform, SiAnsible, SiGrafana,
  SiPrometheus, SiGit, SiNginx, SiPostgresql,
  SiRedis, SiGithubactions, SiCloudflare,
} from "react-icons/si";

const techItems = [
  { name: "AWS", icon: FaAws, color: "text-amber-400" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-400" },
  { name: "Terraform", icon: SiTerraform, color: "text-purple-400" },
  { name: "Docker", icon: FaDocker, color: "text-cyan-400" },
  // { name: "Ansible", icon: SiAnsible, color: "text-red-400" },
  { name: "Linux", icon: FaLinux, color: "text-orange-400" },
  { name: "Python", icon: FaPython, color: "text-green-400" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "text-slate-300" },
  { name: "ArgoCD", icon: FaGithub, color: "text-pink-400" },
  { name: "Grafana", icon: SiGrafana, color: "text-orange-400" },
  { name: "Prometheus", icon: SiPrometheus, color: "text-red-400" },
  // { name: "HAProxy", icon: FaJenkins, color: "text-green-400" },
  // { name: "Nginx", icon: SiNginx, color: "text-emerald-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  // { name: "Redis", icon: SiRedis, color: "text-red-400" },
  { name: "Git", icon: SiGit, color: "text-orange-400" },
  // { name: "CloudFront", icon: SiCloudflare, color: "text-blue-300" },
  // { name: "EKS", icon: SiKubernetes, color: "text-blue-400" },
  // { name: "S3", icon: FaAws, color: "text-amber-400" },
  // { name: "DynamoDB", icon: FaAws, color: "text-blue-300" },
  // { name: "RDS", icon: FaAws, color: "text-blue-300" },
  // { name: "ElastiCache", icon: FaAws, color: "text-purple-300" },
];

export function TechStack() {
  return (
    <section className="relative section-padding border-y border-card-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies I use to build and operate infrastructure"
        />
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6">
          {techItems.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="glass card-hover group flex flex-col items-center gap-2 rounded-xl p-3 sm:p-4"
              >
                <Icon
                  className={`${tech.color} transition-transform group-hover:scale-125`}
                  size={24}
                />
                <span className="text-[10px] font-medium text-muted-foreground text-center sm:text-xs">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
