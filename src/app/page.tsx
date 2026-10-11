"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { AgenticAIShowcase } from "@/components/AgenticAIShowcase";
import { SkillsSection } from "@/components/SkillsSection";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";
import { CommandPalette } from "@/components/CommandPalette";

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] dark:bg-[#080a0f] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Fixed Navigation */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Page Flow */}
      <main className="flex-1">
        <HeroSection onOpenResumeModal={() => setResumeModalOpen(true)} />
        <AboutSection />
        <ProjectsShowcase />
        <AgenticAIShowcase />
        <SkillsSection />
        <OpenSourceSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection onOpenResumeModal={() => setResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Overlays */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
      <CommandPalette onOpenResume={() => setResumeModalOpen(true)} />
    </div>
  );
}
