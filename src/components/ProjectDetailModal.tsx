"use client";

import { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Server, 
  Database, 
  Cpu, 
  ShieldAlert, 
  AlertTriangle,
  PlayCircle,
  FileCode2,
  GitBranch
} from "lucide-react";
import { GithubIcon } from "./icons/SocialIcons";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onWatchVideo?: (project: Project) => void;
}

export function ProjectDetailModal({ project, onClose, onWatchVideo }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] shadow-2xl text-slate-900 dark:text-slate-100 p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="space-y-3 pr-10">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-semibold uppercase">
              {project.category}
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
              STATUS: {project.status}
            </span>
            {project.achievementBadge && (
              <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-medium">
                {project.achievementBadge}
              </span>
            )}
            {project.associatedOrg && (
              <span className="text-slate-400">
                &bull; {project.associatedOrg}
              </span>
            )}
          </div>

          <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {project.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center gap-3 my-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 transition-colors shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
              Source Code Repository
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-cyan-500" />
              Live Deployment
            </a>
          )}

          {project.demoVideoUrl && (
            <button
              onClick={() => onWatchVideo && onWatchVideo(project)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 transition-colors cursor-pointer"
            >
              <PlayCircle className="w-4 h-4" />
              Watch Video Demo
            </button>
          )}
        </div>

        {/* Content Tabs / Structured Specs */}
        <div className="space-y-6">
          
          {/* Problem Statement */}
          <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-rose-600 dark:text-rose-400 font-bold mb-2 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" />
              Problem Solved
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution & Architecture */}
          <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              Solution &amp; System Architecture
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
              {project.solution}
            </p>
            {project.architectureNotes && (
              <div className="p-3 rounded-lg bg-white/70 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-600 dark:text-slate-300">
                <span className="text-cyan-500 font-bold">// ARCHITECTURE_SPEC: </span>
                {project.architectureNotes}
              </div>
            )}
          </div>

          {/* Key Metrics / Highlights */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">
                // QUANTIFIABLE IMPACT &amp; SCOPE
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-center">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight block">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Jamuna's Exact Contributions */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold mb-3 flex items-center gap-1.5">
              <FileCode2 className="w-4 h-4 text-cyan-500" />
              My Direct Engineering Contributions
            </h3>
            <ul className="space-y-2.5">
              {project.myContribution.map((contrib, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Decisions Solved */}
          {project.challengesFaced && project.challengesFaced.length > 0 && (
            <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                Engineering Challenges Solved
              </h3>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {project.challengesFaced.map((ch, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-mono text-amber-500 font-bold">&bull;</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Comprehensive Tech Stack Breakdown */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">
              // COMPLETE TECHNOLOGY STACK
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {project.techStack.frontend && (
                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40">
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400 block mb-1">Frontend Layer</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.frontend.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.techStack.backend && (
                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400 block mb-1">Backend &amp; Microservices</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.backend.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.techStack.database && (
                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40">
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 block mb-1">Database &amp; Storage</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.database.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.techStack.apis && (
                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40">
                  <span className="font-semibold text-amber-600 dark:text-amber-400 block mb-1">External APIs &amp; Feeds</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.apis.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
