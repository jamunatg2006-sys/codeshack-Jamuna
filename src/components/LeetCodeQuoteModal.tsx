"use client";

import { useEffect } from "react";
import { X, Sparkles, Brain, Quote, ArrowRight, Heart } from "lucide-react";
import { LeetCodeIcon } from "./icons/SocialIcons";

interface LeetCodeQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeetCodeQuoteModal({ isOpen, onClose }: LeetCodeQuoteModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg rounded-2xl border border-amber-500/30 dark:border-amber-500/20 bg-white dark:bg-[#0c1017] p-6 sm:p-8 shadow-2xl shadow-amber-500/10 overflow-hidden transform animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Ambient Gradient Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 dark:bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/10 dark:bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close quote modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Icon & Badge Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
            <LeetCodeIcon className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              <Sparkles className="w-3 h-3" />
              <span>Continuous Learning Journey</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading mt-0.5">
              Problem Solving &amp; DSA
            </h3>
          </div>
        </div>

        {/* Quote Block */}
        <div className="relative my-4 p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
          <Quote className="w-8 h-8 text-amber-500/30 mb-2" />
          <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200 italic leading-relaxed">
            &ldquo;Still learning, solving, and sharpening skills every day. Consistency beats intensity &mdash; one problem at a time.&rdquo;
          </p>
          <div className="mt-4 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800/60 pt-3">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Jamuna T G</span>
            <span className="text-amber-600 dark:text-amber-400 font-bold">250+ Problems &amp; Growing 🌱</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6 text-[11px] font-mono">
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            Data Structures &amp; Algorithms
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            Active Learner
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            Daily Practice
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full py-2.5 px-4 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-md shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Keep Learning &amp; Building</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
