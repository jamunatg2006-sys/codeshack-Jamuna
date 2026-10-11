"use client";

import { portfolioData } from "@/data/portfolioData";
import { 
  GitBranch, 
  ExternalLink, 
  GitPullRequest, 
  Code2, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Terminal,
  FolderGit2,
  Trophy
} from "lucide-react";
import { GithubIcon } from "./icons/SocialIcons";

export function OpenSourceSection() {
  const { openSource } = portfolioData;

  return (
    <section id="open-source" className="py-20 md:py-28 relative border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <FolderGit2 className="w-3.5 h-3.5" />
              // SECTION &bull; OPEN SOURCE &amp; COMMUNITY ENGINEERING
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Open Source Contributions.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
              Where I spend the majority of my time building, experimenting, and contributing to public developer tools and architectures.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <a
              href={openSource.gssocProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 hover:bg-amber-500/20 hover:scale-[1.02] transition-all shadow-xs"
            >
              <Trophy className="w-4 h-4 text-amber-500" />
              Verified GSSoC Profile ({openSource.gssocScore})
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={openSource.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950 hover:opacity-90 transition-opacity shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
              Explore GitHub
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Ethos & Top Stats Banner */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] p-6 sm:p-8 shadow-md mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs text-slate-400 uppercase font-semibold">
                // ENGINEERING ETHOS &amp; PHILOSOPHY
              </span>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 italic font-medium leading-relaxed">
                &ldquo;{openSource.ethos}&rdquo;
              </p>
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Public Architecture Review
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Feature Branching &amp; Clean PRs
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Modular Codebases
                </span>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              {openSource.statsSummary.map((stat, idx) => {
                const StatIcon = 
                  idx === 0 ? Trophy :
                  idx === 1 ? GitPullRequest :
                  idx === 2 ? Layers : FolderGit2;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-center flex flex-col items-center justify-center"
                  >
                    <StatIcon className="w-4 h-4 text-emerald-500 mb-1" />
                    <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-mono text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Featured Open Source Codebases & PRs */}
        <div className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
            // HIGHLIGHTED REPOSITORIES &amp; MERGED CONTRIBUTIONS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {openSource.featuredContributions.map((contrib, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] p-6 flex flex-col justify-between hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all shadow-xs group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-900 dark:text-white">
                      <GitPullRequest className="w-4 h-4 text-emerald-500" />
                      <span className="truncate max-w-[200px]" title={contrib.repoName}>
                        {contrib.repoName}
                      </span>
                    </div>
                    {contrib.prUrl && (
                      <a
                        href={contrib.prUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 shrink-0"
                      >
                        Inspect
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    {contrib.prTitle}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {contrib.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                  {contrib.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      <Terminal className="w-2.5 h-2.5 text-emerald-500/70" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
