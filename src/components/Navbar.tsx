"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { 
  Code2, 
  Sparkles, 
  Layers, 
  Terminal, 
  Award, 
  Mail, 
  FileText, 
  Menu, 
  X, 
  ExternalLink,
  Briefcase
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./icons/SocialIcons";
import { portfolioData } from "@/data/portfolioData";

export function Navbar({ onOpenResumeModal }: { onOpenResumeModal?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Projects", href: "/projects", icon: Layers },
    { label: "Experience", href: "/experience", icon: Briefcase },
    { label: "Agentic AI", href: "/agentic-ai", icon: Sparkles },
    { label: "Open Source", href: "/open-source", icon: Code2 },
    { label: "About", href: "/about", icon: Award },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-[#080a0f]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.01]"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-2 ring-cyan-500/50 shadow-md group-hover:ring-cyan-400 transition-all shrink-0 bg-slate-900">
              <Image
                src="/images/jamuna-hero.jpg"
                alt="Jamuna T G"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-slate-900 dark:text-white text-base sm:text-lg flex items-center gap-1.5">
                {portfolioData.personal.name}
                <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Available for opportunities" />
              </span>
              <span className="font-mono text-[10px] tracking-wider text-slate-500 dark:text-cyan-400/80 uppercase font-medium">
                // FULL-STACK &bull; AI ARCHITECT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all flex items-center gap-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />

            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResumeModal}
              className="ml-1 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border dark:border-cyan-500/30 dark:hover:bg-cyan-500/20 transition-all shadow-xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0c1017]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
                >
                  <Icon className="w-4 h-4 text-cyan-500" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenResumeModal) onOpenResumeModal();
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border dark:border-cyan-500/40"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
