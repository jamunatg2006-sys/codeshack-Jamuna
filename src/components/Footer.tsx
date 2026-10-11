"use client";

import { ArrowUp, Heart, Terminal } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./icons/SocialIcons";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#07090e]/80 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Wordmark and tagline */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
                {portfolioData.personal.name}
              </span>
              <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-bold">
                // DEV.AI
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              Sir MVIT Bengaluru &bull; Information Science &bull; 2024&ndash;2028
            </p>
          </div>

          {/* Social links & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-cyan-500 text-slate-600 dark:text-slate-300 transition-all cursor-pointer"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 text-cyan-500" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
          <div>
            Built with Next.js 16 (App Router), React 19, TypeScript &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>All systems nominal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
