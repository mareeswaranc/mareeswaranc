"use client";

import { motion } from "framer-motion";

export function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-500/3 blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-purple-500/3 blur-[120px]" />
    </div>
  );
}
