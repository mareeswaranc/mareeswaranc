"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <motion.button
      onClick={toggle}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl glass glow-border cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-amber-400" />
        ) : (
          <Moon className="h-5 w-5 text-blue-400" />
        )}
      </motion.div>
    </motion.button>
  );
}
