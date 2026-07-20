export const stats = [
  { label: "Experience", value: 7, suffix: " Months" },
  { label: "Projects", value: 12, suffix: "+" },
  { label: "Certifications", value: 1, suffix: "" },
  { label: "GitHub Contributions", value: 1500, suffix: "+" },
  { label: "Cloud Deployments", value: 50, suffix: "+" },
  { label: "Infrastructure Modules", value: 30, suffix: "+" },
  { label: "CI/CD Pipelines", value: 15, suffix: "+" },
  { label: "Kubernetes Clusters", value: 8, suffix: "+" },
];

export const skills = [
  {
    category: "Operating Systems",
    icon: "monitor",
    items: [
      { name: "Linux", level: 78 },
      { name: "Ubuntu", level: 75 },
      { name: "Windows", level: 75 },
    ],
  },
  {
    category: "Cloud",
    icon: "cloud",
    items: [
      { name: "AWS", level: 70 },
      // { name: "Azure", level: 40, future: true },
      // { name: "GCP", level: 35, future: true },
    ],
  },
  {
    category: "Containers",
    icon: "box",
    items: [
      { name: "Docker", level: 70 },
      { name: "Kubernetes", level: 78 },
      { name: "Helm", level: 75 },
    ],
  },
  {
    category: "Infrastructure as Code",
    icon: "code",
    items: [
      { name: "Terraform", level: 78 },
    ],
  },
  {
    category: "CI/CD",
    icon: "git-branch",
    items: [
      { name: "GitHub Actions", level: 75 },
      { name: "Jenkins", level: 75 },
      { name: "ArgoCD", level: 72 },
    ],
  },
  {
    category: "Monitoring",
    icon: "activity",
    items: [
      { name: "Prometheus", level: 75 },
      { name: "Grafana", level: 78 },
      { name: "Loki", level: 70 },
    ],
  },
  {
    category: "Programming",
    icon: "terminal",
    items: [
      { name: "Python", level: 72 },
      { name: "Bash", level: 78 },
      { name: "JavaScript", level: 65 },
    ],
  },
  {
    category: "Databases",
    icon: "database",
    items: [
      { name: "PostgreSQL", level: 72 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    category: "Networking",
    icon: "network",
    items: [
      { name: "DNS", level: 72 },
      { name: "Load Balancers", level: 75 },
      { name: "VPC", level: 78 },
    ],
  },
  {
    category: "Soft Skills",
    icon: "users",
    items: [
      { name: "Communication", level: 70 },
      { name: "Documentation", level: 72 },
    ],
  },
];

export const experience = [
  {
    role: "DevOps Engineer",
    company: "Sentinal Fox Pvt Ltd",
    period: "2026 — Present",
    description:
      "Working as a DevOps Engineer, contributing to cloud infrastructure, deployment automation, Kubernetes operations, and monitoring solutions while gaining hands-on experience in production environments.",
    responsibilities: [
      "Supporting and maintaining AWS cloud infrastructure and Amazon EKS clusters.",
      "Developing and maintaining Infrastructure as Code using Terraform.",
      "Assisting with CI/CD pipeline development and deployment automation using GitHub Actions.",
      "Monitoring applications and infrastructure with Prometheus and Grafana.",
      "Troubleshooting production issues and collaborating with the team to improve system reliability.",
      "Working with Linux servers, Docker, Kubernetes, and cloud-native technologies.",
    ],
    achievements: [
      "Contributed to the deployment and maintenance of production cloud infrastructure.",
      "Gained hands-on experience with Kubernetes, Terraform, AWS, and CI/CD workflows.",
      "Participated in troubleshooting and resolving production issues.",
      "Continuously improving automation, operational efficiency, and DevOps best practices.",
    ],
  },
];

export const certifications = [
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF",
    year: "2026",
    color: "#326CE5",
  },
];

export const projects = [
  {
    title: "Portfolio Deployment Pipeline",
    description:
      "Automated deployment pipeline for this portfolio with preview deployments, Lighthouse checks, and analytics.",
    problem:
      "Manual portfolio updates were slow and lacked quality checks before production deployment.",
    solution:
      "Built a fully automated pipeline with preview deployments, performance checks, and Vercel integration.",
    techStack: ["Next.js", "Vercel", "GitHub Actions", "TypeScript", "Tailwind CSS"],
    metrics: { lighthouse: "98", deployTime: "< 2 min", previews: "auto" },
    status: "Live",
    github: "https://github.com/mareeswaranc/portfolio",
  },
];

export const blogPosts = [
  {
    title: "Kubernetes Resource Quotas: A Production Guide",
    category: "Kubernetes",
    date: "2024-11-15",
    readTime: "8 min",
    description:
      "How to implement and manage resource quotas in production Kubernetes clusters to prevent resource exhaustion.",
  },
  {
    title: "Terraform State Management Best Practices",
    category: "Terraform",
    date: "2024-10-20",
    readTime: "6 min",
    description:
      "Strategies for managing Terraform state in team environments with remote backends and state locking.",
  },
  {
    title: "Building a Production-Ready Prometheus Stack",
    category: "Observability",
    date: "2024-09-10",
    readTime: "10 min",
    description:
      "End-to-end guide to setting up Prometheus with Alertmanager, Grafana dashboards, and log aggregation.",
  },
  {
    title: "AWS EKS: From Zero to Production",
    category: "AWS",
    date: "2024-08-05",
    readTime: "12 min",
    description:
      "Complete walkthrough of setting up a production-grade EKS cluster with best practices.",
  },
  {
    title: "Linux Performance Tuning for Platform Engineers",
    category: "Linux",
    date: "2024-07-15",
    readTime: "7 min",
    description:
      "Essential Linux performance tuning techniques every platform engineer should know.",
  },
  {
    title: "GitOps with ArgoCD: A Practical Guide",
    category: "DevOps",
    date: "2024-06-20",
    readTime: "9 min",
    description:
      "Implementing GitOps workflows with ArgoCD for Kubernetes deployments.",
  },
];

export const terminalCommands: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  help       — Show this help message",
    "  about      — Learn about Mareeswaran",
    "  skills     — List technical skills",
    "  projects   — View featured projects",
    "  certs      — View certifications",
    "  contact    — Get contact information",
    "  resume     — Download resume",
    "  clear      — Clear terminal",
    "  whoami     — Who am I?",
    "  uname      — System information",
    "  uptime     — System uptime",
    "  neofetch   — System overview",
  ],
  about: [
    "Hi, I'm Mareeswaran, a DevOps Engineer passionate about",
    "cloud infrastructure, automation, and cloud-native technologies.",
    "",
    "I'm currently gaining hands-on experience with AWS, Kubernetes (EKS),",
    "Terraform, CI/CD, Linux, and monitoring, while continuously",
    "strengthening my understanding of modern DevOps practices.",
    "",
    "I enjoy solving infrastructure challenges, learning how systems work",
    "behind the scenes, and building reliable, scalable solutions.",
    "My long-term goal is to grow into a Platform Engineer and contribute",
    "to building resilient cloud platforms for global engineering teams.",
    "",
    "Every day, I'm focused on becoming a better engineer than I was yesterday.",
  ],
  skills: [
    "OS:       Linux, Ubuntu, Amazon Linux",
    "Cloud:    AWS (primary), Azure (learning), GCP (learning)",
    "IaC:      Terraform",
    "CICD:     GitHub Actions, Jenkins, ArgoCD",
    "Monitor:  Prometheus, Grafana, Loki",
    "Lang:     Python, Bash, JavaScript",
    "DB:       PostgreSQL, MySQL, Redis",
    "K8s:      EKS, Helm, KEDA",
  ],
  projects: [
    "1. Portfolio Deployment Pipeline    — web/portfolio",
    "   Next.js + Vercel + GitHub Actions + TypeScript + Tailwind CSS",
    "   Automated deployment with preview deployments, Lighthouse checks",
  ],
  certs: [
    "CKA  — Certified Kubernetes Administrator (CNCF, 2026)",
  ],
  contact: [
    "Email:    cmareeswaranc@gmail.com",
    "GitHub:   github.com/mareeswaranc",
    "LinkedIn: linkedin.com/in/mareeswaranc",
    "Location: Tamil Nadu, India",
  ],
  resume: ["Downloading resume... Check your downloads folder."],
  whoami: ["mareeswaran — Junior DevOps Engineer | Platform Engineer Aspirant"],
  uname: ["PortfolioOS 1.0.0 (Kubernetes/Linux)"],
  uptime: ["System has been running for 7 months of engineering growth."],
  neofetch: [
    "       _,met$$$$$gg.          mareeswaran@portfolio",
    "    ,g$$$$$$$$$$$$$$$P.       ----------------------",
    "  ,g$$P\"     \"\"\"\"\"Y$$.$.     OS: PortfolioOS 1.0 (Linux)",
    " ,$$P'              `$$$.     Shell: bash 5.2",
    "',$$P       ,ggs.     `$$b:   Terminal: Portfolio Terminal v1.0",
    "`d$$'     ,$P\"'   .    $$$    Kernel: Kubernetes",
    " $$P      d$'     ,    $$P    Uptime: 7 months",
    " $$:      $$.   -    ,d$$'    Role: Junior DevOps Engineer",
    " $$;      Y$b._   _,d$P'     Cert: CKA (CNCF)",
    " Y$$.    `.`\"Y$$$$P\"'        Focus: Cloud Native / Platform Eng",
    "  `$$b      \"-.__              ",
    "   `Y$$                        ",
    "    `Y$$.                      ",
    "      `$$b.                    ",
    "        `Y$$b.                 ",
    "           `\"Y$b._             ",
    "               `\"\"\"            ",
  ],
  clear: [],
};

export const architectureSteps = [
  { id: "users", label: "Users", icon: "users", x: 50, y: 50 },
  { id: "cloudfront", label: "CloudFront", icon: "globe", x: 50, y: 150 },
  { id: "alb", label: "ALB", icon: "layers", x: 50, y: 250 },
  { id: "eks", label: "EKS Cluster", icon: "box", x: 50, y: 350 },
  { id: "pods", label: "Pods", icon: "container", x: 50, y: 450 },
  { id: "redis", label: "Redis", icon: "database", x: 20, y: 550 },
  { id: "rds", label: "RDS", icon: "database", x: 80, y: 550 },
];
