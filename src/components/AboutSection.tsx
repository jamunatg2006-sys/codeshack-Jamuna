"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Code, 
  Cpu, 
  Workflow, 
  Flame, 
  Search, 
  GitBranch, 
  Zap, 
  Radio, 
  Compass,
  CheckCircle,
  Lightbulb,
  Coffee,
  Heart,
  ArrowRight,
  GraduationCap,
  Trophy,
  Code2,
  Sparkles,
  ShieldCheck,
  Terminal,
  Layers
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function AboutSection() {
  const interestAreas = [
    {
      title: "Full-Stack Web Platforms",
      desc: "Resilient client-server systems with clean REST APIs, relational databases, and sub-second response times.",
      icon: Code,
      accent: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      title: "Agentic AI & Tool Loops",
      desc: "Autonomous agent cycles where models reason, invoke deterministic external tools, and self-correct with guardrails.",
      icon: Workflow,
      accent: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20"
    },
    {
      title: "RAG & Vector Retrieval",
      desc: "Context-augmented generation pipelines combining dense vector embeddings, lexical search, and citation grounding.",
      icon: Search,
      accent: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      title: "High-Pressure Hackathons",
      desc: "Turning concepts into 48-hour working MVPs with tangible impact (CivicTrack Top 10 finish, CodeShack 2nd place).",
      icon: Flame,
      accent: "text-amber-500 bg-amber-500/10 border-amber-500/20"
    },
    {
      title: "Open Source Engineering",
      desc: "35+ merged pull requests across GirlScript Summer of Code (GSSoC 9,718 Points) & Nexus Summer of Code (NSoC), and active contributor to web & AI tools.",
      icon: GitBranch,
      accent: "text-sky-500 bg-sky-500/10 border-sky-500/20"
    },
    {
      title: "Pragmatic Architecture",
      desc: "No vanity abstractions. Choosing the simplest, most scalable technologies that genuinely solve user pain points.",
      icon: Zap,
      accent: "text-rose-500 bg-rose-500/10 border-rose-500/20"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <Compass className="w-3.5 h-3.5" />
              // SECTION 01 &bull; ENGINEERING IDENTITY &amp; ROOTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Curious Mind. Serious Builder.
            </h2>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
          >
            <span>Read Complete Developer Journey</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Narrative Grid with Real Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column: Creative Framed Casual Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px]">
              {/* Decorative Accent Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-70 pointer-events-none" />

              <div className="relative rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] p-3 shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/jamuna-about.jpg"
                    alt="Jamuna T G"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating sticker */}
                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs font-mono text-white flex items-center gap-2 shadow-lg">
                    <Coffee className="w-4 h-4 text-amber-400" />
                    <span>Fueled by Curiosity &amp; Late-Night Code</span>
                  </div>
                </div>

                <div className="pt-3 px-2 flex items-center justify-between font-mono text-xs text-slate-500">
                  <span>Jamuna T G &bull; Bengaluru</span>
                  <span className="text-emerald-500 font-bold">Full-Stack + AI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Creative Animated Story Pillars & Active Radar */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Box 1: Academic & Systems Foundation */}
            <div className="group relative rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#0c1017]/95 p-5 sm:p-6 shadow-xs hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                    01 // FOUNDATION &amp; ACADEMIC IDENTITY
                  </span>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                  Sir MVIT &bull; CGPA 9.2
                </span>
              </div>

              <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                I am an Information Science undergraduate at Sir M. Visvesvaraya Institute of Technology (Sir MVIT), Bengaluru, who thrives at the intersection of full-stack systems engineering and applied artificial intelligence.
              </p>

              <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-2 text-[11px] font-mono">
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-semibold">
                  Sir MVIT Bengaluru
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300">
                  Information Science (2024&ndash;2028)
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 font-semibold">
                  Full-Stack + AI
                </span>
              </div>
            </div>

            {/* Box 2: Beyond Surface Interfaces (Deep Technical Architecture) */}
            <div className="group relative rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#0c1017]/95 p-5 sm:p-6 shadow-xs hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-indigo-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                    02 // BEYOND SURFACE INTERFACES
                  </span>
                </div>
                <div className="flex items-center gap-1.5" title="Active Systems Telemetry">
                  <span className="w-2 h-2 rounded-full bg-rose-500/70" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                </div>
              </div>

              <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                I don&apos;t just build surface interfaces; I architect robust backend APIs, implement multi-factor risk algorithms, wire up live vulnerability feeds, and orchestrate intelligent agent loops.
              </p>

              <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-2 text-[11px] font-mono">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 font-semibold">
                  <Terminal className="w-3 h-3 text-cyan-500" />
                  Robust Backend APIs
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 font-semibold">
                  <ShieldCheck className="w-3 h-3 text-indigo-500" />
                  Multi-Factor Risk Models
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 font-semibold">
                  <Radio className="w-3 h-3 text-amber-500" />
                  Live CVE Feeds
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-semibold">
                  <Workflow className="w-3 h-3 text-emerald-500" />
                  ReAct Agent Loops
                </span>
              </div>
            </div>

            {/* Box 3: Core Philosophy & Execution */}
            <div className="group relative rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#0c1017]/95 p-5 sm:p-6 shadow-xs hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    03 // CORE PHILOSOPHY &amp; EXECUTION
                  </span>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                  <Trophy className="w-3 h-3 text-emerald-500" />
                  GSSoC + NSoC Verified
                </span>
              </div>

              <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                Whether it&apos;s building working MVPs under pressure, developing offline-first QR emergency PWAs for accessible assistance, or contributing 35+ merged PRs across open-source programs (GSSoC &amp; NSoC), my philosophy is simple: <strong className="text-slate-950 dark:text-white font-bold">understand the core problem, choose the right architecture, and ship with meticulous attention to detail.</strong>
              </p>

              <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-2 text-[11px] font-mono">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 font-semibold">
                  <Flame className="w-3 h-3 text-amber-500" />
                  Rapid Working MVPs
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 font-semibold">
                  <Layers className="w-3 h-3 text-cyan-500" />
                  Offline-First QR PWAs
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-semibold">
                  <GitBranch className="w-3 h-3 text-emerald-500" />
                  35+ Merged PRs
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 font-semibold">
                  <Zap className="w-3 h-3 text-purple-500" />
                  Meticulous Execution
                </span>
              </div>
            </div>

            {/* Live Radar Box */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-900 dark:text-white font-bold">
                <span className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-cyan-500 animate-pulse" />
                  CURRENT ACTIVE RADAR
                </span>
                <span className="text-[10px] text-cyan-500 font-bold">2025 SPRINT</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-sans text-sm">
                {portfolioData.personal.currentExploration}
              </p>
            </div>

          </div>

        </div>

        {/* Selected Core Domains Grid */}
        <div className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
            // CORE DOMAINS &amp; ENGINEERING PASSIONS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interestAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#0c1017]/70 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 shadow-2xs group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-xl border ${area.accent} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
