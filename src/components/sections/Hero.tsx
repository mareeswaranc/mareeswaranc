"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { TYPING_ROLES, SOCIAL_LINKS } from "@/lib/constants";

export function Hero() {
  const typed = useTypingEffect(TYPING_ROLES, 70, 2000);

  return (
    <section className="relative flex min-h-[calc(100vh-var(--nav-height))] items-center overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                </span>
                Currently employed · Open to connections
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Mareeswaran</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 flex items-center justify-center lg:justify-start"
            >
              <span className="min-h-[2.5rem] text-xl font-medium text-muted-foreground sm:text-2xl lg:text-3xl">
                {typed}
              </span>
              <span className="typing-cursor ml-0.5 text-xl sm:text-2xl lg:text-3xl" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0"
            >
              Building reliable, scalable cloud infrastructure. Specializing in
              Kubernetes, AWS, and Infrastructure as Code to power
              production-grade platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-medium transition-all hover:bg-muted/80 glow-border"
              >
                <Download size={16} /> Resume
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-medium transition-all hover:bg-muted/80"
              >
                <FaLinkedin size={16} /> LinkedIn
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-medium transition-all hover:bg-muted/80"
              >
                <FaGithub size={16} /> GitHub
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-[280px] sm:w-[360px] lg:w-[420px]">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-xl" />

              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-[#30363d] dark:bg-[#0d1117]">
                <div className="flex items-center gap-1.5 border-b border-gray-200 bg-gray-100 px-4 py-3 dark:border-[#30363d] dark:bg-[#161b22]">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 font-mono text-xs text-gray-500 dark:text-[#8b949e]">mareeswaran@portfolio</span>
                </div>
                <div className="p-4 font-mono text-[7px] leading-[9px] text-gray-500 sm:p-5 sm:text-[9px] sm:leading-[11px] lg:p-6 lg:text-[11px] lg:leading-[13px] dark:text-[#8b949e]">
                <pre className="select-none text-blue-500 dark:text-[#58a6ff]">{`
██╗  ██╗███████╗██╗     ██╗      ██████╗
██║  ██║██╔════╝██║     ██║     ██╔═══██╗
███████║█████╗  ██║     ██║     ██║   ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝
`}</pre>
                  <div className="mt-2 text-green-600 dark:text-[#7ee787]">$ whoami</div>
                  <div className="text-gray-700 dark:text-[#c9d1d9]">DevOps Engineer | CKA</div>
                  <div className="mt-1.5 text-green-600 dark:text-[#7ee787]">$ cat skills.txt</div>
                  <div className="text-gray-700 dark:text-[#c9d1d9]">AWS | Kubernetes | Terraform | Docker</div>
                  <div className="mt-1.5 text-green-600 dark:text-[#7ee787]">$ echo $STATUS</div>
                  <div className="text-gray-700 dark:text-[#c9d1d9]">Building infra 🔧</div>
                  <div className="mt-1.5 text-gray-700 dark:text-[#c9d1d9]">
                    <span className="text-green-600 dark:text-[#7ee787]">$</span>
                    <span className="ml-1 inline-block h-[1.1em] w-[2px] animate-pulse bg-gray-700 dark:bg-[#c9d1d9]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
