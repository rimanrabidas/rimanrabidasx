"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  const applyTheme = (nextTheme: boolean) => {
    document.documentElement.classList.toggle("dark", nextTheme);
    document.documentElement.classList.toggle("light", !nextTheme);
    document.documentElement.style.colorScheme = nextTheme ? "dark" : "light";
  };

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const nextTheme = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDark(nextTheme);
    applyTheme(nextTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(
      "portfolio-theme",
      nextTheme ? "dark" : "light",
    );
  };

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--border) bg-(--card-bg) text-(--text) transition-colors duration-200 hover:border-(--border-strong) hover:bg-(--card-hover)"
    >
      {mounted && isDark ? <Sun size={16} /> : <Moon size={16} />}
      {!mounted && <Sun size={16} />}
    </button>
  );
}
