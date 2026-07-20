"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { terminalCommands } from "@/lib/data";

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<
    { type: "input" | "output" | "error"; text: string }[]
  >([
    {
      type: "output",
      text: "Welcome to Mareeswaran's Portfolio Terminal v1.0.0\nType 'help' to see available commands.",
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const executeCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const output = terminalCommands[trimmed];

    setHistory((prev) => [
      ...prev,
      { type: "input", text: `$ ${trimmed}` },
      {
        type: "output",
        text: output
          ? output.join("\n")
          : `Command not found: ${trimmed}. Type 'help' for available commands.`,
      },
    ]);

    setCommandHistory((prev) => [...prev.slice(-49), trimmed]);
    setHistoryIndex(-1);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    executeCommand(input);
    setInput("");
    // Force focus after state update
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const commands = Object.keys(terminalCommands);
      const matches = commands.filter((c) => c.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      } else if (matches.length > 1) {
        setHistory((prev) => [
          ...prev,
          { type: "output", text: matches.join("  ") },
        ]);
      }
    }
  };

  return (
    <section className="relative section-padding border-y border-card-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Interactive Terminal"
          subtitle="Type commands to explore my profile — try 'help', 'about', 'skills', 'projects', 'certs', 'contact'"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-card-border bg-[#0d1117] shadow-2xl"
        >
          <div className="flex items-center gap-2 border-b border-card-border bg-[#161b22] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              mareeswaran@portfolio ~ $
            </span>
          </div>

          <div
            ref={contentRef}
            className="h-80 overflow-y-auto p-4 font-mono text-sm sm:h-96"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((entry, i) => (
              <div
                key={i}
                className={
                  entry.type === "input"
                    ? "text-green-400"
                    : entry.type === "error"
                    ? "text-red-400"
                    : "text-muted-foreground"
                }
              >
                <pre className="whitespace-pre-wrap">{entry.text}</pre>
              </div>
            ))}

            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-green-400">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-0 font-mono text-sm text-green-400 outline-none placeholder:text-green-400/30 focus:ring-0 focus:border-0"
                placeholder="Type a command... (↑/↓ history, Tab complete)"
                autoFocus
                spellCheck={false}
              />
            </form>

            <div ref={bottomRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}