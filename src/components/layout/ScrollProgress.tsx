"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 right-0 top-[var(--nav-height)] z-40 h-[2px] origin-left bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
    />
  );
}
