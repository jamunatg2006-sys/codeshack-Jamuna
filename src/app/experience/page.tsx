"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";
import { CommandPalette } from "@/components/CommandPalette";
import { portfolioData } from "@/data/portfolioData";
import { 
  Home, 
  Briefcase, 
  Building, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Code2, 
  Terminal, 
  FileCode,
  Activity,
  AlertCircle,
  ExternalLink
} from "lucide-react";

export default function ExperiencePage() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState<"shapentic" | "myentrypass">("shapentic");

  const ornitech = portfolioData.experience.find((e) => e.id === "ornitech-solutions");
  const htcl = portfolioData.experience.find((e) => e.id === "htcl-developer");

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] dark:bg-[#080a0f] text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Navigation & Header */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center justify-center p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500/50 shadow-xs hover:scale-105 transition-all mb-4 group"
              title="Return to Home"
              aria-label="Return to Home"
            >
              <Home className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
            </Link>

            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
              <Briefcase className="w-4 h-4" />
              <span>Verified Work History &amp; Engineering Deliverables</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-heading">
              Professional Engineering Experience.
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
              Hands-on engineering across AI-powered web platforms, generative model fallback architectures, database migrations, authentication systems, and production debugging.
            </p>
          </div>

          {/* Quick Experience Timeline Selector */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="p-5 rounded-2xl border-2 border-cyan-500/30 bg-white dark:bg-[#0c1017] shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  ORNITECH Solutions
                </span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> 3 Months
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Full Stack Developer Intern
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Generative AI Website Builder (Shapentic) &bull; Global Event Ticketing Platform (MyEntryPass)
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  HTCL
                </span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> 6 Months
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Full Stack Developer
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Enterprise Web Applications, REST APIs, Database Optimization, and Component Design
              </p>
            </div>
          </div>

          {/* SECTION 1: ORNITECH SOLUTIONS DEEP DIVE */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] p-6 sm:p-10 shadow-lg mb-16 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 uppercase">
                    ORNITECH Solutions
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                    Completed 3 Months
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
                  Full Stack Developer Intern &bull; AI Platforms &amp; SaaS
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 mt-2">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-500" /> Bengaluru, India</span>
                  <span className="flex items-center gap-1"><Building className="w-3.5 h-3.5 text-cyan-500" /> AI-Powered SaaS &amp; Digital Platforms</span>
                </div>
              </div>

              {/* Project Tabs */}
              <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono self-start md:self-auto">
                <button
                  onClick={() => setActiveProjectTab("shapentic")}
                  className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer ${
                    activeProjectTab === "shapentic"
                      ? "bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-xs"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Project 1: Shapentic (AI Builder)
                </button>
                <button
                  onClick={() => setActiveProjectTab("myentrypass")}
                  className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer ${
                    activeProjectTab === "myentrypass"
                      ? "bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-xs"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Project 2: MyEntryPass (Ticketing)
                </button>
              </div>
            </div>

            {/* TAB 1: SHAPENTIC */}
            {activeProjectTab === "shapentic" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      Generative AI | Full-Stack Development | SaaS
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      Core Work: AI Orchestration &bull; MongoDB Migration &bull; API Robustness
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Shapentic &mdash; AI-Powered Natural Language Website Builder
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Shapentic is an AI-powered website-building SaaS platform enabling users to create and customize rich websites using natural-language prompts. The application combines a responsive Next.js frontend, AI model orchestration across Google Gemini and Groq, template processing contracts, generated content validation, and MongoDB project persistence across three major creative workflows: <strong>Direct Edit</strong>, <strong>Template Adapt</strong>, and <strong>Advanced Creative</strong>.
                  </p>
                  
                  {/* Tech Stack Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Google Gemini", "Groq", "JWT", "Tailwind CSS", "REST APIs"].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Study 1: AI Integration & Model Fallback */}
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      1. AI Integration and Model Fallback Mechanism
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                      <p>
                        <strong>The Problem:</strong> When Google Gemini encountered quota limits or token ceiling failures, generation requests failed abruptly, halting user website creation workflows.
                      </p>
                      <p>
                        <strong>My Contribution:</strong> Integrated Groq as an additional AI provider in <code className="text-cyan-600 dark:text-cyan-400 font-mono text-xs">src/lib/ai-clients.js</code> with OpenAI-compatible completions and JSON-mode support. Configured an automatic multi-model fallback sequence:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                        <li>Primary: Google Gemini</li>
                        <li>Fallback 1: Groq Qwen 27B</li>
                        <li>Fallback 2: Groq GPT-OSS 20B</li>
                        <li>Fallback 3: Groq GPT-OSS 120B</li>
                      </ul>
                      <p className="text-xs text-slate-500">
                        Result: Drastically reduced generation failures caused by provider quota exhaustion.
                      </p>
                    </div>

                    {/* Visual Flow Box */}
                    <div className="lg:col-span-5 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 font-mono text-[11px] space-y-1.5 text-slate-700 dark:text-slate-300">
                      <div className="text-cyan-600 dark:text-cyan-400 font-bold">// AI Fallback Execution Flow:</div>
                      <div>User Prompt &rarr; Generation Request</div>
                      <div className="text-slate-400 pl-4">&darr; Dispatch Gemini</div>
                      <div className="text-amber-500 pl-4">&darr; Quota / Token Limit Hit?</div>
                      <div className="text-emerald-500 pl-4">&rarr; Trigger Groq Fallback (Qwen 27B)</div>
                      <div className="text-slate-400 pl-8">&darr; Secondary Groq Model if Needed</div>
                      <div className="text-cyan-500 pl-4">&rarr; Structured Validated Output</div>
                      <div>Template Adaptation Overrides Applied</div>
                    </div>
                  </div>
                </div>

                {/* Case Study 2: Template Adaptation Contract */}
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      2. Template Adaptation Contract &amp; Auxiliary Field Validation
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                      <p>
                        <strong>The Problem:</strong> When LLMs generated creative design additions such as <code className="text-xs font-mono">motion</code>, <code className="text-xs font-mono">theme</code>, and <code className="text-xs font-mono">animation</code>, strict schema validation rejected the entire payload, causing template adaptation requests to fail.
                      </p>
                      <p>
                        <strong>My Contribution:</strong> Updated the template adaptation contract in <code className="text-cyan-600 dark:text-cyan-400 font-mono text-xs">src/server/generation/template-adapt-contract.js</code> to safely tolerate auxiliary creative fields while preserving rigorous validation of the core required output structure.
                      </p>
                    </div>

                    <div className="lg:col-span-5 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 font-mono text-[11px] space-y-1.5 text-slate-700 dark:text-slate-300">
                      <div className="text-emerald-600 dark:text-emerald-400 font-bold">// Contract Validation Flow:</div>
                      <div>Natural-Language Prompt</div>
                      <div className="text-slate-400 pl-4">&darr; AI Generation</div>
                      <div className="text-slate-400 pl-4">&darr; Template Adapt Contract</div>
                      <div className="text-cyan-500 pl-4">&rarr; Validate Core Required Schema</div>
                      <div className="text-emerald-500 pl-4">&rarr; Gracefully Ingest Auxiliary Fields (motion/theme)</div>
                      <div className="text-slate-400 pl-4">&darr; Apply Template Overrides</div>
                      <div className="text-cyan-500 pl-4">&rarr; Generate Updated Preview</div>
                    </div>
                  </div>
                </div>

                {/* Case Study 3: MongoDB Migration & Key Normalization */}
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      3. MongoDB Migration &amp; Advanced Creative Snapshot Normalization
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                      <p>
                        <strong>Database Migration:</strong> Contributed to transitioning database operations from Supabase/PostgreSQL to MongoDB. Mapped existing data relationships to MongoDB collections, adapted API routes, supported version persistence, and verified save/retrieve workflows.
                      </p>
                      <p>
                        <strong>Snapshot Bug Resolution:</strong> Investigated <code className="text-rose-500 font-mono text-xs">INVALID_ADVANCED_PAGE_RUN_SNAPSHOT</code> errors in Advanced Creative Mode. MongoDB forbids field keys with literal periods (<code className="text-xs font-mono">.</code>). Generated multi-page structures with keys like <code className="text-xs font-mono">page.home</code> crashed snapshot saves.
                      </p>
                      <p>
                        <strong>Implementation:</strong> In <code className="text-cyan-600 dark:text-cyan-400 font-mono text-xs">advanced-page-run-service.js</code>, implemented key normalization to encode problematic characters prior to MongoDB persistence and decode them upon retrieval.
                      </p>
                    </div>

                    <div className="lg:col-span-5 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 font-mono text-[11px] space-y-1.5 text-slate-700 dark:text-slate-300">
                      <div className="text-indigo-600 dark:text-indigo-400 font-bold">// Snapshot Key Normalization:</div>
                      <div>Multi-Page Generated Structure</div>
                      <div className="text-slate-400 pl-4">&darr; Key Normalization Routine</div>
                      <div className="text-indigo-500 pl-4">&rarr; Encode Dots: 'page.home' &rarr; 'page__dot__home'</div>
                      <div className="text-slate-400 pl-4">&darr; Persist Snapshot to MongoDB</div>
                      <div className="text-slate-400 pl-4">&darr; Retrieve Snapshot on Reload</div>
                      <div className="text-emerald-500 pl-4">&rarr; Decode and Restore Structure</div>
                    </div>
                  </div>
                </div>

                {/* Additional Engineering Deliverables */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                    <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase">
                      Model Health Registry
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Registered Groq model capabilities in <code className="font-mono">model-registry.js</code> and <code className="font-mono">model-health.js</code> for runtime provider selection.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                      JWT Authentication &amp; Sessions
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Tested JWT-based session authentication, HTTP-only cookies, protected endpoints, and dashboard project persistence flows.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase">
                      Frontend Debugging &amp; Quality
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Restored missing JSX in navigation, resolved AI client syntax bugs, fixed ESLint rules, and tested generation flows after Git merges.
                    </p>
                  </div>
                </div>

                {/* Case Study Summary Table */}
                <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                  <div className="bg-slate-100 dark:bg-slate-900 px-4 py-2.5 font-mono text-xs font-bold text-slate-900 dark:text-white uppercase">
                    // Engineering Problem vs. Contribution Matrix
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-mono">
                        <tr>
                          <th className="p-3">Case Study</th>
                          <th className="p-3">Technical Problem</th>
                          <th className="p-3">Engineering Contribution</th>
                          <th className="p-3">Verified Outcome</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-sans text-slate-700 dark:text-slate-300">
                        <tr>
                          <td className="p-3 font-semibold font-mono text-cyan-600 dark:text-cyan-400">AI Model Reliability</td>
                          <td className="p-3">Generation failed when Gemini hit quota / token limits</td>
                          <td className="p-3">Integrated Groq with automatic multi-model fallback in ai-clients.js</td>
                          <td className="p-3 text-emerald-600 dark:text-emerald-400 font-medium">Uninterrupted website generation</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold font-mono text-cyan-600 dark:text-cyan-400">Template Adaptation</td>
                          <td className="p-3">Extra design fields (motion, theme) rejected by strict contract</td>
                          <td className="p-3">Updated template-adapt-contract.js to gracefully handle auxiliary fields</td>
                          <td className="p-3 text-emerald-600 dark:text-emerald-400 font-medium">Zero contract validation crashes</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold font-mono text-cyan-600 dark:text-cyan-400">Snapshot Persistence</td>
                          <td className="p-3">Dot keys like 'page.home' caused INVALID_ADVANCED_PAGE_RUN_SNAPSHOT in MongoDB</td>
                          <td className="p-3">Implemented key normalization and encoding in advanced-page-run-service.js</td>
                          <td className="p-3 text-emerald-600 dark:text-emerald-400 font-medium">Stable multi-page snapshot saves</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: MYENTRYPASS */}
            {activeProjectTab === "myentrypass" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                      Full-Stack Web Application | Digital Ticketing | Architecture Analysis
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      Focus: Monorepo Architecture &bull; Express/TypeScript APIs &bull; QR Entry
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    MyEntryPass &mdash; Global Digital Entry Passes &amp; Event Ticketing Platform
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    MyEntryPass is a digital event ticketing and entry-pass platform designed to manage the end-to-end journey from event discovery and ticket booking to payment processing and gate venue check-in. The platform coordinates four separate user experiences across attendees, event organizers, gate staff, and administrators.
                  </p>
                  
                  {/* Tech Stack Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {["Node.js", "Express.js", "TypeScript", "Next.js", "React", "MongoDB", "Redis/Upstash", "JWT", "Razorpay", "Docker", "Kubernetes"].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Monorepo Architecture Diagram */}
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] space-y-4">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Multi-Application Monorepo Architecture
                  </h4>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    <div className="text-indigo-600 dark:text-indigo-400 font-bold">MyEntryPass Monorepo Structure:</div>
                    <div>&boxvr;&boxh;&boxh; Backend/ (Express.js, TypeScript, REST APIs, Business Logic)</div>
                    <div>&boxvr;&boxh;&boxh; Frontend/ (Next.js, React, Attendee Application)</div>
                    <div>&boxvr;&boxh;&boxh; Organizer Portal/ (Event management &amp; operational metrics)</div>
                    <div>&boxvr;&boxh;&boxh; Gate Staff App/ (QR-based ticket scanning &amp; venue verification)</div>
                    <div>&boxvr;&boxh;&boxh; Superadmin/ (Platform governance &amp; global controls)</div>
                    <div>&boxvr;&boxh;&boxh; Infrastructure/ (Docker containers &amp; Kubernetes manifests)</div>
                    <div>&boxur;&boxh;&boxh; Shared Services (Redis/Upstash caching, Razorpay payment gateway)</div>
                  </div>
                </div>

                {/* 4 Assigned Analysis Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] space-y-2">
                    <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-sm">
                      <Code2 className="w-4 h-4" />
                      <span>1. Monorepo &amp; API Responsibilities</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Conducted codebase exploration to analyze how backend API routes communicate with Next.js frontend interfaces, isolating controllers, routing layers, and service boundaries.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] space-y-2">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                      <ShieldCheck className="w-4 h-4" />
                      <span>2. Authentication &amp; Database Access</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Reviewed JWT token issuance, bcryptjs password hashing, role-based access control (RBAC), and MongoDB/Mongoose document schema relationships.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] space-y-2">
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                      <Activity className="w-4 h-4" />
                      <span>3. Payment &amp; QR Entry Verification</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Traced the payment processing lifecycle using Razorpay webhooks and analyzed cryptographic QR ticket payload verification used at physical venue gates.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] space-y-2">
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                      <Layers className="w-4 h-4" />
                      <span>4. Deployment &amp; Documentation</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Investigated Docker container setups, local environment variables, Redis/Upstash caching hooks, and authored technical setup documentation for developers.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* SECTION 2: HTCL DEEP DIVE */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] p-6 sm:p-10 shadow-lg space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 uppercase">
                    HTCL
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                    Completed 6 Months
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
                  Full Stack Developer &bull; Web Applications &amp; Enterprise Solutions
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 mt-2">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-indigo-500" /> Bengaluru, India</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-indigo-500" /> 6 Months Duration</span>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Served as Full Stack Developer for 6 months at HTCL, architecting end-to-end web features, developing secure RESTful APIs, designing scalable database schemas, and collaborating across agile engineering sprints.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {htcl?.bullets.map((bullet, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-mono text-slate-400 mr-2">Technologies Used:</span>
              {htcl?.technologies.map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
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
