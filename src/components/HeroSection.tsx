"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Download, 
  Terminal as TerminalIcon, 
  Sparkles, 
  Layers, 
  ExternalLink,
  CheckCircle2,
  Copy,
  Check,
  Trophy,
  GitPullRequest,
  Code2,
  Flame,
  Zap
} from "lucide-react";
import { LinkedinIcon, GithubIcon, LeetCodeIcon } from "./icons/SocialIcons";
import { portfolioData } from "@/data/portfolioData";
import { LeetCodeQuoteModal } from "./LeetCodeQuoteModal";

export function HeroSection({ onOpenResumeModal }: { onOpenResumeModal?: () => void }) {
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [showLeetCodeModal, setShowLeetCodeModal] = useState(false);

  // Typewriter effect for name
  const fullName = portfolioData.personal.name;
  const [typedName, setTypedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && typedName === fullName) {
      // Hold the fully typed name for 3.5 seconds
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3500);
    } else if (isDeleting && typedName === "") {
      // Brief pause when completely erased before typing again
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    } else {
      // Type or erase character
      const speed = isDeleting ? 55 : 115;
      timeout = setTimeout(() => {
        setTypedName((prev) =>
          isDeleting
            ? fullName.substring(0, prev.length - 1)
            : fullName.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [typedName, isDeleting, fullName, isPaused]);

  const copyQuickCommand = () => {
    navigator.clipboard.writeText("npx jamuna-tg-portfolio@latest");
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Dynamic Background Mesh & Animated Orbs */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-sky-500/20 to-indigo-500/15 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-gradient-to-br from-emerald-500/10 via-teal-500/15 to-transparent blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personality, Narrative, Dynamic CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Live Status Pill & Quick Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 backdrop-blur-md shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span>{portfolioData.personal.availabilityStatus}</span>
              </div>
              <a
                href={portfolioData.openSource.gssocProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400 backdrop-blur-md hover:bg-cyan-500/20 hover:scale-[1.02] transition-all cursor-pointer"
                title="View verified GSSoC profile (9,718 Points)"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Open Source Contributor &bull; GSSoC &amp; NSoC</span>
                <ExternalLink className="w-3 h-3 opacity-70 ml-0.5" />
              </a>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <div className="font-mono text-xs sm:text-sm tracking-wider text-cyan-600 dark:text-cyan-400 font-bold uppercase flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-500 animate-pulse" />
                <span>Sir MVIT Bengaluru &bull; Information Science &bull; Full-Stack &amp; AI Builder</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.06] font-heading">
                <span>I&apos;m</span>{" "}
                <span
                  className="relative inline-flex items-baseline cursor-default select-none"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <span className="sr-only">{fullName}</span>
                  <span
                    aria-hidden="true"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-300 dark:via-sky-300 dark:to-indigo-300 font-black tracking-tight"
                  >
                    {typedName || "\u00A0"}
                  </span>
                  {/* Blinking Cyan Terminal Caret */}
                  <span
                    aria-hidden="true"
                    className="inline-block w-[3px] sm:w-[4px] md:w-[5px] h-[0.82em] ml-1 sm:ml-1.5 bg-gradient-to-b from-cyan-400 to-sky-500 dark:from-cyan-300 dark:to-indigo-400 rounded-xs animate-pulse align-middle shadow-[0_0_12px_rgba(6,182,212,0.85)]"
                  />
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 leading-snug font-heading">
                Building resilient full-stack platforms, integrating generative AI, and turning ideas into production code.
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Curious mind obsessed with practical problem-solving. Full-stack developer with real engineering experience in AI-powered website generation, database migrations, offline emergency PWAs, and collaborative open-source tooling.
            </p>

            {/* Dynamic CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 dark:from-cyan-500 dark:to-sky-400 dark:text-slate-950 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] group cursor-pointer"
              >
                Explore Featured Systems
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 transition-all duration-200 shadow-xs cursor-pointer hover:scale-[1.01]"
              >
                <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                Resume &amp; Credentials
              </button>

              {/* Social Channels with Hover Glow */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500/50 hover:shadow-md transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-sky-500 hover:border-sky-500/50 hover:shadow-md transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                {portfolioData.personal.leetcode && (
                  <button
                    type="button"
                    onClick={() => setShowLeetCodeModal(true)}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-amber-500 hover:border-amber-500/50 hover:shadow-md transition-all cursor-pointer"
                    aria-label="Problem Solving Journey"
                    title="Still Learning & Solving (Click to view quote)"
                  >
                    <LeetCodeIcon className="w-4 h-4 text-amber-500" />
                  </button>
                )}
              </div>
            </div>

            {/* Quick Terminal Command */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-950/60 font-mono text-xs text-slate-600 dark:text-slate-400 max-w-fit">
                <span className="text-cyan-500">$</span>
                <span>npx jamuna-tg-portfolio@latest</span>
                <button
                  onClick={copyQuickCommand}
                  className="ml-2 text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                  title="Copy command"
                >
                  {copiedCmd ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <span className="text-xs text-slate-400 dark:text-slate-500 hidden sm:inline">
                Quick terminal access
              </span>
            </div>

          </div>

          {/* Right Column: Creative Visual Card Featuring Real Profile Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px]">
              
              {/* Outer Cyber Gradient Glow Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 rounded-3xl blur-md opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />

              <div className="relative rounded-2xl border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0c1017] p-3 shadow-2xl overflow-hidden group">
                
                {/* Photo Container */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/jamuna-hero.jpg"
                    alt="Jamuna T G"
                    fill
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Tech Scanline & Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-mono text-[11px] font-bold flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    JAMUNA T G // DEV
                  </div>

                  {/* Bottom Stats Overlay inside Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-left space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-white font-bold flex items-center gap-1">
                        <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                        Full-Stack &amp; AI Builder
                      </span>
                      <span className="text-emerald-400 font-bold text-[10px]">VERIFIED 2025</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>Sir MVIT, Bengaluru</span>
                      <a
                        href={portfolioData.openSource.gssocProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 hover:underline"
                        title="View Official GSSoC Profile (9,718 Points)"
                      >
                        GSSoC Verified &bull; 9,718 Pts ↗
                      </a>
                    </div>
                  </div>
                </div>

                {/* Interactive Card Footer */}
                <div className="pt-3 px-2 flex items-center justify-between font-mono text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1 text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Active Builder</span>
                  </div>
                  <Link 
                    href="/about"
                    className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 text-[11px] font-bold"
                  >
                    View Full Story &rarr;
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      <LeetCodeQuoteModal
        isOpen={showLeetCodeModal}
        onClose={() => setShowLeetCodeModal(false)}
      />
    </section>
  );
}
