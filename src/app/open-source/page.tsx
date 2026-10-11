"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { ResumeModal } from "@/components/ResumeModal";
import { CommandPalette } from "@/components/CommandPalette";
import { Home, GitBranch, Trophy, Star, ShieldCheck, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function OpenSourcePage() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] dark:bg-[#080a0f] text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-emerald-500 hover:border-emerald-500/50 shadow-xs hover:scale-105 transition-all mb-4 group"
            title="Return to Home"
            aria-label="Return to Home"
          >
            <Home className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
          </Link>

          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
            <Trophy className="w-4 h-4" />
            <span>Dedicated Open Source &amp; Community Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Open Source &bull; GSSoC &amp; Nexus Summer of Code (NSoC)
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mt-2">
            Ranked <strong className="text-slate-900 dark:text-white">#414 out of 47,951 contributors (Top 1% Worldwide)</strong> in GirlScript Summer of Code (GSSoC) and active contributor to Nexus Summer of Code (NSoC), with 35+ verified pull requests merged across open-source repositories.
          </p>

          {/* Quick GSSoC Badges Strip & Official Verification Link */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            <a
              href={portfolioData.openSource.gssocProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 hover:scale-[1.02] transition-all shadow-xs"
              title="Verify Official GirlScript Summer of Code Profile"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>Official GirlScript Profile (9,718 Pts)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
              🏆 Elite (Epic Badge)
            </span>
            <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30">
              💪 Power Contributor (Rare)
            </span>
            <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              🔥 On a Roll
            </span>
            <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30">
              ⭐ Rising Star
            </span>
            <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
              🎯 Bounty Hunter
            </span>
          </div>
        </div>

        <OpenSourceSection />
      </main>

      <Footer />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
      <CommandPalette onOpenResume={() => setResumeModalOpen(true)} />
    </div>
  );
}
