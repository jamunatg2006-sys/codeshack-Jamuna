"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AgenticAIShowcase } from "@/components/AgenticAIShowcase";
import { ResumeModal } from "@/components/ResumeModal";
import { CommandPalette } from "@/components/CommandPalette";
import { Home, Sparkles, Workflow } from "lucide-react";

export default function AgenticAIPage() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] dark:bg-[#080a0f] text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500/50 shadow-xs hover:scale-105 transition-all mb-4 group"
            title="Return to Home"
            aria-label="Return to Home"
          >
            <Home className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
          </Link>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Dedicated AI Systems Lab</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Agentic AI &amp; Applied Intelligence
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mt-2">
            Applied intelligence systems including RAG pipelines, machine learning classifiers, cybersecurity telemetry engines, and active exploration of agentic architectures.
          </p>
        </div>

        <AgenticAIShowcase />
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
