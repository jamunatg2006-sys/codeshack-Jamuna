"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioData, AgenticLabItem } from "@/data/portfolioData";
import { 
  Sparkles, 
  Workflow, 
  Cpu, 
  Search, 
  Terminal, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Database,
  ExternalLink,
  Layers,
  BrainCircuit,
  BookOpen,
  Code2,
  FileText
} from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

export function AgenticAIShowcase() {
  const [activeTab, setActiveTab] = useState<"projects" | "roadmap">("projects");
  const [activeStep, setActiveStep] = useState<number>(0);

  // Real AI Projects
  const realAiProjects = [
    {
      id: "abtalk-ai",
      title: "AbTalkAI",
      subtitle: "Retrieval-Augmented Generation (RAG) Conversational Pipeline",
      category: "RAG & Vector Search",
      badge: "Completed Build",
      badgeColor: "emerald",
      problem: "Standard LLMs hallucinate domain facts, lack real-time document context, and fail when answering queries requiring exact multi-document synthesis.",
      solution: "A domain-specialized RAG system implementing semantic document chunking, dense vector embeddings indexing, and context-grounded response generation with strict citation verification.",
      pipeline: [
        "Semantic Document Chunking (Configurable token overlaps)",
        "Dense Vector Embeddings & Similarity Indexing (FAISS / Chroma)",
        "Top-k Context Retrieval & Hallucination Guardrails"
      ],
      tags: ["Python", "LangChain / LlamaIndex", "Vector DB", "Embeddings", "React.js"],
      githubUrl: "https://github.com/Shashankpatilrcr/ABTALK"
    },
    {
      id: "sentinel-ai",
      title: "Sentinel AI",
      subtitle: "Cybersecurity Threat Telemetry & Anomaly Detection Framework",
      category: "Machine Learning & Security",
      badge: "Hackathon Prototype (Atria)",
      badgeColor: "indigo",
      problem: "Static rule-based security systems create crushing alert fatigue and miss complex, multi-vector intrusion patterns in dynamic network telemetry.",
      solution: "An automated intelligence engine that parses raw network logs, extracts behavioral feature vectors, and classifies anomalous threat signatures against CVE profiles.",
      pipeline: [
        "Network Telemetry & Log Ingestion Pipeline",
        "Feature Vector Extraction & Anomaly Scoring",
        "Alert Prioritization & Interactive Triage Dashboard"
      ],
      tags: ["Python", "Scikit-Learn", "Anomaly Detection", "REST API", "React.js", "Recharts"],
      githubUrl: "https://github.com/jamunatg2006-sys/sentinal_ai-Jam"
    },
    {
      id: "codeshack-ml",
      title: "CodeShack ML Predictive Engine",
      subtitle: "Supervised Machine Learning Model for Predictive Classification",
      category: "Competitive ML",
      badge: "2nd Place Winner (DSATM)",
      badgeColor: "amber",
      problem: "Building a high-accuracy predictive classifier under strict competition time constraints, imbalanced class distributions, and high-dimensional noise.",
      solution: "An end-to-end data science pipeline with exploratory correlation analysis, feature interactions, Stratified K-Fold cross validation, and tuned ensemble models (XGBoost/Random Forest).",
      pipeline: [
        "Rigorous EDA, Imputation & Correlation Analysis",
        "Stratified K-Fold Validation (Zero Data Leakage)",
        "Ensemble Hyperparameter Optimization & Technical Defense"
      ],
      tags: ["Python", "Scikit-Learn", "Pandas", "XGBoost", "K-Fold CV"],
      githubUrl: "https://github.com/jamunatg2006-sys"
    },
    {
      id: "vendorrisk-ai",
      title: "VendorRisk AI Quantitative Engine",
      subtitle: "Multi-Factor Cybersecurity Risk Assessment & Scoring Algorithm",
      category: "Algorithmic Risk Scoring",
      badge: "Production MVP",
      badgeColor: "cyan",
      problem: "Enterprises evaluate third-party software risks with subjective manual checklists, leading to inconsistent compliance audits and unspotted CVE exposures.",
      solution: "A deterministic 10-factor weighted scoring algorithm evaluating encryption standards, breach history, CVE severities, and compliance certifications into actionable risk tiers.",
      pipeline: [
        "10-Factor Weighted Security Scoring Algorithm",
        "Deterministic Math Engine (Zero Arbitrary Model Output)",
        "Automated High/Medium/Low Tier Categorization & Remediation"
      ],
      tags: ["TypeScript", "Next.js", "Risk Algorithms", "Tailwind CSS"],
      internalLink: "/projects"
    }
  ];

  // Conceptual ReAct / Tool Loop architecture for educational study
  const conceptualWorkflowSteps = [
    {
      step: "01",
      name: "Goal Decomposition",
      role: "Intent Parsing & Constraints",
      icon: Search,
      details: "Translates high-level developer prompt into atomic sub-tasks. Defines schema constraints before dispatching any external action."
    },
    {
      step: "02",
      name: "Reasoning & Action (ReAct)",
      role: "Hypothesis Formulation",
      icon: BrainCircuit,
      details: "Formulates a reasoned hypothesis regarding which tool or endpoint is best suited, referencing strictly typed function signatures."
    },
    {
      step: "03",
      name: "Deterministic Tool Execution",
      role: "API / Database / Vector Call",
      icon: Terminal,
      details: "Executes predictable external calls (REST endpoints, vector lookups, shell commands) without model guessing or arbitrary outputs."
    },
    {
      step: "04",
      name: "Observation & Verification",
      role: "Self-Reflection Guardrail",
      icon: ShieldCheck,
      details: "Evaluates raw tool responses against output criteria. Catches rate limits or malformed responses and initiates self-correction loops."
    },
    {
      step: "05",
      name: "Response Synthesis",
      role: "Structured Artifact Creation",
      icon: FileText,
      details: "Consolidates verified outputs into structured summaries, clean code diffs, or analytical reports with explicit source citations."
    }
  ];

  return (
    <section id="agentic-ai" className="py-20 md:py-28 relative border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              // SECTION 03 &bull; AI SYSTEMS, RAG &amp; AGENTIC EXPLORATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              AI Systems &amp; Applied Intelligence.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Hands-on implementations spanning Retrieval-Augmented Generation (RAG), machine learning classifiers, cybersecurity telemetry engines, and active undergraduate research in agentic workflows.
            </p>
          </div>

          {/* Interactive Mode Toggle */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "projects"
                  ? "bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>Real AI Projects ({realAiProjects.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("roadmap")}
              className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "roadmap"
                  ? "bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Agentic AI Study ({portfolioData.agenticLab.length})</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: REAL AI & ML PROJECTS */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {realAiProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-cyan-500/40 dark:hover:border-cyan-500/40 hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Badges & Meta */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                      {project.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>

                  {/* Architecture / Pipeline Steps */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 space-y-1.5 font-mono text-xs">
                    <div className="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                      // Core Architecture Highlights:
                    </div>
                    {project.pipeline.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight">{step}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                      >
                        <Terminal className="w-2.5 h-2.5 text-cyan-500/70" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    Verified Build
                  </span>
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Inspect Repository</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : project.internalLink ? (
                    <Link
                      href={project.internalLink}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors"
                    >
                      <span>Explore Project Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 2: HONEST AGENTIC AI LEARNING ROADMAP */}
        {activeTab === "roadmap" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Transparent Note */}
            <div className="p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 dark:bg-cyan-950/20">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Transparent Engineering Roadmap &bull; Undergrad Exploration
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    These topics represent my active learning interests as an Information Science undergraduate. Rather than claiming finished commercial agent systems, I document here the architectures and frameworks (LangGraph, ReAct loops, deterministic tool calling) that I am actively studying and testing in personal sandboxes.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Research / Learning Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolioData.agenticLab.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#0c1017]/70 p-6 flex flex-col justify-between shadow-2xs hover:border-cyan-500/40 transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-semibold uppercase">
                        {item.type}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-semibold">
                        STATUS: {item.status}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="pt-2 space-y-1.5">
                      <span className="text-[11px] font-mono text-slate-400 uppercase block font-medium">
                        Focus Areas:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {item.components.map((comp, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 leading-snug">
                      <span className="font-bold">Study Note: </span>
                      {item.insights}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Conceptual ReAct Loop Breakdown */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] p-6 sm:p-8 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 mb-6 gap-2">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold block">
                    // CONCEPTUAL FRAMEWORK UNDER STUDY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    Anatomy of a Deterministic Agent Loop (ReAct Pattern)
                  </h3>
                </div>
                <span className="font-mono text-xs text-slate-400">
                  Select a phase to inspect its function
                </span>
              </div>

              {/* Stepper Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-6">
                {conceptualWorkflowSteps.map((step, idx) => {
                  const StepIcon = step.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        activeStep === idx
                          ? "border-cyan-500 bg-cyan-500/10 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-300 shadow-xs"
                          : "border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between font-mono text-xs mb-1">
                        <span className="font-bold">{step.step}</span>
                        <StepIcon className="w-3.5 h-3.5 text-cyan-500" />
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                        {step.name}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Box */}
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span className="font-bold text-slate-900 dark:text-white text-sm">
                    PHASE {conceptualWorkflowSteps[activeStep].step}: {conceptualWorkflowSteps[activeStep].name}
                  </span>
                  <span className="text-cyan-600 dark:text-cyan-400 text-[11px] font-semibold">
                    {conceptualWorkflowSteps[activeStep].role}
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-sans text-sm leading-relaxed">
                  {conceptualWorkflowSteps[activeStep].details}
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
