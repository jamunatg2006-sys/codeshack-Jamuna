"use client";

import { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { X, Play, AlertCircle, ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons/SocialIcons";

interface ProjectMediaModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectMediaModal({ project, onClose }: ProjectMediaModalProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] shadow-2xl p-6 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          aria-label="Close media dialog"
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <span className="font-mono text-xs uppercase text-cyan-600 dark:text-cyan-400 font-semibold">
            // PROJECT DEMONSTRATION &bull; {project.title}
          </span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            {project.title} &mdash; Interactive Walkthrough
          </h3>
        </div>

        {/* Video Player or Fallback Showcase */}
        {project.demoVideoUrl ? (
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-slate-800 relative">
            <iframe
              src={project.demoVideoUrl}
              title={`${project.title} Demo Video`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="aspect-video w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 text-cyan-500">
              <Play className="w-7 h-7 ml-1" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Video Demonstration In Staging
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mb-4">
              A recorded video walkthrough or live demo stream will be mounted here. In the meantime, inspect the complete code repository or deep-dive specs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 hover:opacity-90 transition-opacity"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  View GitHub Source
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-500" />
                  Open Live Link
                </a>
              )}
            </div>
          </div>
        )}

        <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Status: {project.status}</span>
          <span>Category: {project.category}</span>
        </div>
      </div>
    </div>
  );
}
