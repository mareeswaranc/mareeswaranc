"use client";

import { useEffect } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { GridBackground } from "@/components/effects/GridBackground";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { FloatingElements } from "@/components/effects/FloatingElements";
import { ParticleBackground } from "@/components/effects/ParticleBackground";

export default function TemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <GridBackground />
        <CursorGlow />
        <FloatingElements />
        <ParticleBackground />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10 pt-[var(--nav-height)]">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
