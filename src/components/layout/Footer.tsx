"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-card-border/50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <div className="text-sm font-medium">
              © {new Date().getFullYear()} Mareeswaran.
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              Built with Next.js, Tailwind CSS &amp; Framer Motion
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: FaGithub, href: SOCIAL_LINKS.github, label: "GitHub" },
              { icon: FaLinkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
              { icon: FaEnvelope, href: "mailto:cmareeswaranc@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl glass transition-all hover:bg-muted/60 hover:scale-110"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <a
            href="#"
            className="flex items-center gap-2 rounded-xl glass px-4 py-2 text-sm font-medium transition-all hover:bg-muted/60"
          >
            <FaArrowUp size={14} />
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
