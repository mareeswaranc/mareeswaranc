"use client";

import { useState, useEffect, useCallback } from "react";

export function useTypingEffect(
  strings: string[],
  speed: number = 70,
  pause: number = 2000
) {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = strings[stringIndex];

    if (!isDeleting) {
      setDisplayText(current.substring(0, charIndex + 1));
      setCharIndex((c) => c + 1);

      if (charIndex + 1 === current.length) {
        setTimeout(() => setIsDeleting(true), pause);
        return;
      }
    } else {
      setDisplayText(current.substring(0, charIndex - 1));
      setCharIndex((c) => c - 1);

      if (charIndex - 1 === 0) {
        setIsDeleting(false);
        setStringIndex((i) => (i + 1) % strings.length);
        return;
      }
    }
  }, [charIndex, isDeleting, pause, stringIndex, strings]);

  useEffect(() => {
    const id = setTimeout(tick, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(id);
  }, [tick, isDeleting, speed]);

  return displayText;
}
