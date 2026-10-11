"use client";

import { useState } from "react";
import { portfolioData, SkillCategory } from "@/data/portfolioData";
import { 
  Terminal, 
  Code2, 
  Server, 
  Database, 
  Cpu, 
  Wrench, 
  Sparkles, 
  Search,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Smartphone,
  Globe,
  Workflow
} from "lucide-react";

export function SkillsSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const activeCategory = portfolioData.skills[activeCategoryIndex];

  const getSkillIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("react") || n.includes("next")) return Layers;
    if (n.includes("node") || n.includes("express") || n.includes("rest") || n.includes("backend")) return Server;
    if (n.includes("sqlite") || n.includes("mongo") || n.includes("sql") || n.includes("database")) return Database;
    if (n.includes("python") || n.includes("scikit") || n.includes("ml") || n.includes("agent")) return Cpu;
    if (n.includes("git") || n.includes("aws") || n.includes("vercel") || n.includes("devops") || n.includes("cloud")) return Wrench;
    if (n.includes("auth") || n.includes("security")) return ShieldCheck;
    if (n.includes("pwa") || n.includes("flutter") || n.includes("app")) return Smartphone;
    if (n.includes("vector") || n.includes("rag") || n.includes("embedding")) return Sparkles;
    if (n.includes("html") || n.includes("css") || n.includes("web")) return Globe;
    return Code2;
  };

  const categoryIcons = [
    Code2,      // Languages
    Terminal,   // Frontend
    Server,     // Backend
    Database,   // DB
    Cpu,        // AI/ML
    Wrench      // DevOps
  ];

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
              // SECTION 04 &bull; ENGINEERING TOOLKIT &amp; STACK
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Curated Technical Matrix.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
              Tools, frameworks, and protocols I actually use to build production systems. Structured with practical context rather than arbitrary percentage bars.
            </p>
          </div>
        </div>

        {/* Category Pills Navigation */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-200 dark:border-slate-800 mb-8">
          {portfolioData.skills.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            const isSelected = activeCategoryIndex === index;
            return (
              <button
                key={index}
                onClick={() => setActiveCategoryIndex(index)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 shadow-xs"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-cyan-500/40"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-cyan-400 dark:text-slate-950" : "text-slate-400"}`} />
                {category.category}
              </button>
            );
          })}
        </div>

        {/* Selected Category Toolkit Details */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] p-6 sm:p-8 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {activeCategory.category}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                {activeCategory.description}
              </p>
            </div>
            <span className="font-mono text-xs text-slate-400 shrink-0">
              {activeCategory.skills.length} Tools Specified
            </span>
          </div>

          {/* Grid of Skills within Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
            {activeCategory.skills.map((skill, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/50 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {(() => {
                        const SkillIcon = getSkillIcon(skill.name);
                        return (
                          <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
                            <SkillIcon className="w-3.5 h-3.5" />
                          </div>
                        );
                      })()}
                      <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase ${
                      skill.level === "Core" 
                        ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
                        : skill.level === "Advanced"
                        ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                        : skill.level === "Exploring"
                        ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                        : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    }`}>
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.categoryContext}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-1.5 font-mono text-[10px] text-slate-400">
                  <CheckCircle2 className="w-3 h-3 text-cyan-500 shrink-0" />
                  <span>Applied in practical projects</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
