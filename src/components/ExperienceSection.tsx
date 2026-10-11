"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building, 
  Layers, 
  ArrowRight,
  ExternalLink,
  Cpu,
  Sparkles,
  QrCode,
  Terminal,
  Code2
} from "lucide-react";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 relative border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <Briefcase className="w-3.5 h-3.5" />
              // SECTION 05 &bull; INDUSTRY ENGINEERING &amp; WORK HISTORY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
              Work Experience.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
              Real engineering deliverables across generative AI model fallback, MongoDB migrations, and full-stack enterprise systems.
            </p>
          </div>

          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-600 text-white hover:bg-cyan-500 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 transition-all shadow-sm self-start md:self-auto cursor-pointer"
          >
            <span>Read Architecture Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 max-w-5xl">
          {experience.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] p-6 sm:p-8 shadow-md relative"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    {item.organization}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                    {item.duration || item.period}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {item.status}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading">
                {item.role}
              </h3>

              {item.location && (
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mt-1 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                  {item.location}
                </div>
              )}

              {/* Company Overview */}
              {item.companyOverview && (
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 mb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
                  <Building className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">Focus: </span>
                    {item.companyOverview}
                  </div>
                </div>
              )}

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
                {item.description}
              </p>

              {/* Project Highlights (if Shapentic / MyEntryPass exist) */}
              {item.projects && item.projects.length > 0 && (
                <div className="mb-6 space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                    // Major Shipped Deliverables:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.projects.map((proj) => (
                      <div
                        key={proj.name}
                        className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            {proj.name.includes("Shapentic") ? (
                              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                            ) : (
                              <QrCode className="w-3.5 h-3.5 text-emerald-500" />
                            )}
                            <span>{proj.name}</span>
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                            {proj.category.split("|")[0].trim()}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {proj.overview}
                        </p>
                        <div className="pt-1 flex flex-wrap gap-1">
                          {proj.technologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                              <Terminal className="w-2.5 h-2.5 opacity-60" />
                              {tech}
                            </span>
                          ))}
                          {proj.technologies.length > 4 && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-slate-400">
                              +{proj.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Deliverables */}
              <div className="space-y-1 mb-5">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                  Key Technical Impact:
                </span>
                <ul className="space-y-2">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags & Deep Dive Link */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-slate-400 mr-1">Technologies:</span>
                  {item.technologies.slice(0, 8).map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                  {item.technologies.length > 8 && (
                    <span className="text-xs font-mono text-slate-400">+{item.technologies.length - 8}</span>
                  )}
                </div>

                <Link
                  href="/experience"
                  className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <span>Detailed Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
