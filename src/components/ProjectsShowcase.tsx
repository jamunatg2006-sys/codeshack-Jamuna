"use client";

import { useState } from "react";
import { Project, portfolioData } from "@/data/portfolioData";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { ProjectMediaModal } from "./ProjectMediaModal";
import { 
  Layers, 
  ExternalLink, 
  ArrowUpRight, 
  ShieldCheck, 
  QrCode, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  Play, 
  ChevronRight, 
  FileText,
  Award,
  Terminal,
  Flame,
  Server,
  LayoutDashboard,
  Radio,
  WifiOff,
  PhoneCall,
  HeartHandshake,
  Zap,
  Users,
  Brain,
  Smartphone,
  Code2,
  Trophy,
  Database
} from "lucide-react";
import { GithubIcon } from "./icons/SocialIcons";

export function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [activeMediaModal, setActiveMediaModal] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "featured", label: "Featured Systems" },
    { id: "ai-ml", label: "AI / ML & RAG" },
    { id: "hackathon", label: "Hackathons" },
    { id: "pwa-tools", label: "PWAs & Full-Stack" },
  ];

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "featured") return project.featured;
    if (selectedCategory === "ai-ml") return project.category === "ai-ml";
    if (selectedCategory === "hackathon") return project.category === "hackathon";
    if (selectedCategory === "pwa-tools") return project.category === "pwa-tools" || project.id === "silent-sos" || project.id === "vendor-risk-ai";
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <Layers className="w-3.5 h-3.5" />
              // SECTION 02 &bull; PRODUCTION SYSTEMS &amp; CODEBASE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Engineering Projects.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
              Real codebases, full-stack systems, AI pipelines, and competitive hackathon builds. Designed for tangible real-world utility.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/70 backdrop-blur-sm self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-cyan-400 shadow-2xs font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Primary Spotlight Projects (Large Art-Directed Cards) */}
        <div className="space-y-8 mb-14">
          
          {/* Spotlight 01: VendorRisk AI */}
          {filteredProjects.find(p => p.id === "vendor-risk-ai") && (
            <div className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] p-6 sm:p-8 shadow-lg hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Project Details & Contributions */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      Primary Featured Architecture
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                      Full-Stack: Node.js &amp; Express
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      STATUS: COMPLETED (IMPROVISED)
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    VendorRisk AI
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Autonomous multi-factor vendor risk assessment platform evaluating third-party cybersecurity posture before onboarding. Streams active CVE vulnerability data from NVD, executes a 10-factor weighted scoring algorithm, scans dark web exposure, and synthesizes compliance-grade PDF audits.
                  </p>

                  {/* Key Metrics Chips */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-center">
                      <Server className="w-4 h-4 text-cyan-500 mb-1" />
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Port 5001</div>
                      <div className="text-[10px] font-mono text-slate-500">Node REST API</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 mb-1" />
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">10-Factor</div>
                      <div className="text-[10px] font-mono text-slate-500">Risk Algorithm</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-center">
                      <LayoutDashboard className="w-4 h-4 text-indigo-500 mb-1" />
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">12+ Pages</div>
                      <div className="text-[10px] font-mono text-slate-500">Interactive UI</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-center">
                      <Radio className="w-4 h-4 text-amber-500 mb-1" />
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">NVD + HIBP</div>
                      <div className="text-[10px] font-mono text-slate-500">Live API Telemetry</div>
                    </div>
                  </div>

                  {/* Direct Highlights of Jamuna's work */}
                  <div className="space-y-1.5 pt-2">
                    <div className="text-xs font-mono font-semibold text-slate-500 uppercase">
                      Key Contribution Highlights:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                        <span>Designed the entire Node.js backend on port 5001 with NVD CVE ingestion and 5-factor scoring engine.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                        <span>Engineered SQLite tables with automated backup recovery, vendor directory (60+ verified profiles), and JWT auth.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                        <span>Architected REST API risk evaluation engine with 10-factor weighted scoring algorithm.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={() => setActiveProjectModal(portfolioData.projects.find(p => p.id === "vendor-risk-ai") || null)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      Inspect Full Architecture Specs
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <a
                      href="https://github.com/jamunatg2006-sys/VendorRisk-AI-Project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      View Repository
                    </a>

                    <button
                      onClick={() => setActiveMediaModal(portfolioData.projects.find(p => p.id === "vendor-risk-ai") || null)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5" />
                      Demo Video
                    </button>
                  </div>
                </div>

                {/* Right: Architectural Flow Preview Box */}
                <div className="lg:col-span-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-5 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5">
                    <span className="text-slate-900 dark:text-white font-bold flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-cyan-500" />
                      REST API Architecture
                    </span>
                    <span className="text-[10px] text-emerald-500 font-bold">PORT 5001 &bull; ACTIVE</span>
                  </div>

                  <div className="space-y-2 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                    <div className="p-2 rounded bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
                      <div className="text-cyan-600 dark:text-cyan-400 font-bold">1. Ingestion &amp; CVE Match</div>
                      <div>Query NVD REST API &rarr; Extract CVSS 3.1 &rarr; Flag Critical CVEs</div>
                    </div>
                    <div className="p-2 rounded bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
                      <div className="text-indigo-600 dark:text-indigo-400 font-bold">2. Dual Evaluation Engine</div>
                      <div>Node.js (5-factor security) + Python (Ops/DarkWeb) &rarr; Weighted Aggregate</div>
                    </div>
                    <div className="p-2 rounded bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
                      <div className="text-emerald-600 dark:text-emerald-400 font-bold">3. Compliance Dispatch</div>
                      <div>html2pdf synthesis &rarr; SQLite audit session stored &rarr; Alert dispatched</div>
                    </div>
                  </div>

                  <div className="pt-2 text-[10px] text-slate-400 border-t border-slate-200 dark:border-slate-800 flex justify-between">
                    <span>SQLite tables: 5</span>
                    <span>100% CI/CD automated</span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Spotlight 02: SILENT SOS */}
          {filteredProjects.find(p => p.id === "silent-sos") && (
            <div className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] p-6 sm:p-8 shadow-lg hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                      Emergency Assistance PWA
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 font-medium">
                      Offline-First &bull; QR Accessible
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      STATUS: COMPLETED
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    SILENT SOS
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Progressive Web Application (PWA) delivering instant, accessible emergency assistance for individuals with communication barriers (non-verbal, deaf/hard of hearing, autistic, elderly). Encodes vital medical alerts and guardian dispatch into unique QR codes accessible offline by bystanders without app installations.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-center">
                      <WifiOff className="w-4 h-4 text-cyan-500 mb-1" />
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Offline PWA</div>
                      <div className="text-[10px] font-mono text-slate-500">Service Workers</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-center">
                      <QrCode className="w-4 h-4 text-sky-500 mb-1" />
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">QR Scanning</div>
                      <div className="text-[10px] font-mono text-slate-500">Zero App Friction</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-center">
                      <PhoneCall className="w-4 h-4 text-emerald-500 mb-1" />
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">1-Tap Dial</div>
                      <div className="text-[10px] font-mono text-slate-500">Guardian Direct</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-center">
                      <HeartHandshake className="w-4 h-4 text-rose-500 mb-1" />
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Accessible</div>
                      <div className="text-[10px] font-mono text-slate-500">WCAG Compliant</div>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <div className="text-xs font-mono font-semibold text-slate-500 uppercase">
                      Key Contribution Highlights:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                        <span>Contributed to core React.js application structure and the QR emergency assistance dispatch flow.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                        <span>Built high-contrast bystander emergency display and guardian contact management module.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                        <span>Implemented offline caching strategies using service workers and Web App Manifest.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={() => setActiveProjectModal(portfolioData.projects.find(p => p.id === "silent-sos") || null)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950 hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      Inspect Full Architecture Specs
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <a
                      href="https://github.com/jamunatg2006-sys/SILENT-SOS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      View Repository
                    </a>

                    <button
                      onClick={() => setActiveMediaModal(portfolioData.projects.find(p => p.id === "silent-sos") || null)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5" />
                      Demo Video
                    </button>
                  </div>
                </div>

                {/* Right: Visual QR Assistance Concept */}
                <div className="lg:col-span-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-3 shadow-inner flex items-center justify-center mb-3">
                    <QrCode className="w-16 h-16 text-slate-800 dark:text-cyan-400" />
                  </div>
                  <div className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                    Emergency Scan &bull; Offline Active
                  </div>
                  <p className="text-[11px] text-slate-500 max-w-xs mt-1">
                    Bystanders scan with any default camera &rarr; profile loads instantly with medical requirements and 1-tap guardian contact.
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 w-full flex items-center justify-around font-mono text-[10px] text-slate-400">
                    <span>Manifest: v2</span>
                    <span>PWA: Cache-First</span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Spotlight 03: CivicTrack (Hackathon Winner) */}
          {filteredProjects.find(p => p.id === "civictrack") && (
            <div className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] p-6 sm:p-8 shadow-lg hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5" />
                      SJBIT Hackathon Finalist
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-medium">
                      Top 10 / 108 Teams (Top 9%)
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      48-HOUR SPRINT
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    CivicTrack
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    AI-powered urban governance platform solving fragmented civic complaint systems. Aggregates up to 50 duplicate reports into 1 intelligent issue, enforces 60% community verification voting before closure, tracks live issues via GPS heatmaps, and features 13-language voice filing with Reddit API social listening.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-center">
                      <Zap className="w-4 h-4 text-amber-500 mb-1" />
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">96% Faster</div>
                      <div className="text-[10px] font-mono text-slate-500">72h &rarr; 2.4h Resolution</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-center">
                      <Layers className="w-4 h-4 text-purple-500 mb-1" />
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">50 &rarr; 1 Issue</div>
                      <div className="text-[10px] font-mono text-slate-500">AI Aggregation</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-center">
                      <Users className="w-4 h-4 text-cyan-500 mb-1" />
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">60% Quorum</div>
                      <div className="text-[10px] font-mono text-slate-500">Citizen Vote Lock</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-center">
                      <LayoutDashboard className="w-4 h-4 text-emerald-500 mb-1" />
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">6 Dashboards</div>
                      <div className="text-[10px] font-mono text-slate-500">Full Ecosystem</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={() => setActiveProjectModal(portfolioData.projects.find(p => p.id === "civictrack") || null)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      Inspect Full Architecture Specs
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <a
                      href="https://lnkd.in/dz5_fXj5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-amber-500" />
                      Project Link &amp; Demo
                    </a>

                    <button
                      onClick={() => setActiveMediaModal(portfolioData.projects.find(p => p.id === "civictrack") || null)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5" />
                      Watch Showcase
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-5 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5">
                    <span className="text-slate-900 dark:text-white font-bold flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-amber-500" />
                      Hackathon Validation
                    </span>
                    <span className="text-[10px] text-amber-500 font-bold">TOP 9% FINISH</span>
                  </div>

                  <div className="space-y-1.5 text-slate-600 dark:text-slate-300 text-[11px]">
                    <div>&bull; Built 6 interactive dashboards (Public, Ward, Citizen, Authority, Admin, Landing)</div>
                    <div>&bull; Integrated Leaflet OpenStreetMap GPS heatmaps for live cluster tracking</div>
                    <div>&bull; Web Speech API integration supporting 13 regional languages for inclusive filing</div>
                    <div>&bull; Reddit API pipeline turns social grievances into official governance tickets</div>
                  </div>

                  <div className="pt-2 text-[10px] text-slate-400 border-t border-slate-200 dark:border-slate-800 flex justify-between">
                    <span>MERN Stack</span>
                    <span>Team of builders</span>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Other Projects Grid (Flexible Cards) */}
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-6">
            // ADDITIONAL ARCHITECTURES &amp; PROTOTYPES
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects
              .filter(p => !["vendor-risk-ai", "silent-sos", "civictrack"].includes(p.id))
              .map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#0c1017]/70 p-6 flex flex-col justify-between hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-200 shadow-2xs group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 uppercase font-semibold">
                        {proj.category === "ai-ml" && <Brain className="w-3 h-3" />}
                        {proj.category === "hackathon" && <Flame className="w-3 h-3 text-amber-500" />}
                        {proj.category === "full-stack" && <Code2 className="w-3 h-3" />}
                        {proj.category === "pwa-tools" && <Smartphone className="w-3 h-3" />}
                        {proj.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {proj.status}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                      {proj.title}
                    </h4>

                    {proj.achievementBadge && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 font-mono">
                        <Trophy className="w-3.5 h-3.5 text-amber-500" />
                        {proj.achievementBadge}
                      </span>
                    )}

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {proj.problem}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {Object.values(proj.techStack).flat().slice(0, 4).map((tech, i) => (
                        <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          <Terminal className="w-2.5 h-2.5 text-cyan-500/70" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setActiveProjectModal(proj)}
                      className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      View Specs &amp; Code
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                        title="GitHub Source"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

      </div>

      {/* Deep-Dive Inspection Modal */}
      <ProjectDetailModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onWatchVideo={(p) => {
          setActiveProjectModal(null);
          setActiveMediaModal(p);
        }}
      />

      {/* Media Video Modal */}
      <ProjectMediaModal
        project={activeMediaModal}
        onClose={() => setActiveMediaModal(null)}
      />
    </section>
  );
}
