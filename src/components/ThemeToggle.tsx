"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center p-0.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-xs">
      <button
        onClick={() => setTheme("light")}
        aria-label="Switch to light theme"
        className={`p-1.5 rounded-full transition-all duration-200 ${
          theme === "light"
            ? "bg-white text-amber-500 shadow-xs"
            : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        }`}
        title="Light theme"
      >
        <Sun className="w-4 h-4" />
      </button>

      <button
        onClick={() => setTheme("dark")}
        aria-label="Switch to dark theme"
        className={`p-1.5 rounded-full transition-all duration-200 ${
          theme === "dark"
            ? "bg-slate-800 text-sky-400 shadow-xs"
            : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        }`}
        title="Dark theme"
      >
        <Moon className="w-4 h-4" />
      </button>

      <button
        onClick={() => setTheme("system")}
        aria-label="Match system theme"
        className={`p-1.5 rounded-full transition-all duration-200 ${
          theme === "system"
            ? "bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-xs"
            : "text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300"
        }`}
        title="System theme"
      >
        <Laptop className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
