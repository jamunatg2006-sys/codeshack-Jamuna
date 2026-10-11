"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { 
  Search, 
  X, 
  Layers, 
  Sparkles, 
  Terminal, 
  Briefcase, 
  Award, 
  Mail, 
  FileText, 
  ExternalLink,
  Sun,
  Moon
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function CommandPalette({ onOpenResume }: { onOpenResume?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg text-xs font-mono text-slate-600 dark:text-slate-300 hover:border-cyan-500/50 transition-all cursor-pointer"
        title="Quick Command Palette (Ctrl+K)"
      >
        <Search className="w-3.5 h-3.5 text-cyan-500" />
        <span>Quick Jump</span>
        <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-500 border border-slate-200 dark:border-slate-700">
          Ctrl+K
        </kbd>
      </button>
    );
  }

  const actions = [
    { label: "Featured Projects & Architectures", section: "/projects", icon: Layers },
    { label: "VendorRisk AI (Dual Backend System)", section: "/projects", icon: Layers },
    { label: "SILENT SOS (Offline Emergency PWA)", section: "/projects", icon: Layers },
    { label: "Engineering Work Experience (HTCL & ORNITECH)", section: "/experience", icon: Layers },
    { label: "Agentic AI & RAG Lab Visualizer", section: "/agentic-ai", icon: Sparkles },
    { label: "GirlScript Summer of Code (GSSoC 9,718 Pts)", section: "/open-source", icon: Award },
    { label: "Open Source Contributions (GSSoC & NSoC)", section: "/open-source", icon: Layers },
    { label: "About Jamuna T G & Story", section: "/about", icon: Award },
    { label: "Technical Skills Matrix", section: "/about#skills", icon: Terminal },
    { label: "Contact & Opportunities", section: "/contact", icon: Mail },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 gap-3">
          <Search className="w-4 h-4 text-cyan-500 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a section or project to jump..."
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-64 overflow-y-auto p-2 space-y-1 font-mono text-xs">
          {filtered.length > 0 ? (
            filtered.map((action, idx) => {
              const Icon = action.icon;
              return (
                <a
                  key={idx}
                  href={action.section}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-cyan-500" />
                    <span>{action.label}</span>
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase">Jump &rarr;</span>
                </a>
              );
            })
          ) : (
            <div className="p-4 text-center text-slate-400">No matching sections found</div>
          )}

          {/* Quick Actions */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between px-2 text-[11px] text-slate-500">
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setIsOpen(false);
              }}
              className="hover:text-cyan-500 flex items-center gap-1 cursor-pointer"
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5 text-amber-500" /> : <Moon className="w-3.5 h-3.5 text-sky-400" />}
              <span>Toggle theme</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                if (onOpenResume) onOpenResume();
              }}
              className="hover:text-cyan-500 flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
