"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Projects } from "@/components/sections/Projects";
import { Architecture } from "@/components/sections/Architecture";
import { TechStack } from "@/components/sections/TechStack";
import { Terminal } from "@/components/sections/Terminal";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Projects />
      <Architecture />
      <TechStack />
      <Terminal />
      <Contact />
    </>
  );
}
