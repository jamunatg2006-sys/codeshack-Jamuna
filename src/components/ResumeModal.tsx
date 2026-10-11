"use client";

import { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  FolderGit2, 
  Award,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { LinkedinIcon, GithubIcon, LeetCodeIcon } from "./icons/SocialIcons";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const resumeRef = useRef<HTMLDivElement>(null);

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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl h-[92vh] max-h-[92vh] flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#090d14] shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-white dark:bg-[#0c1017] border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase text-slate-800 dark:text-slate-200 tracking-wider">
              Official Engineering Resume &bull; Jamuna T G
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-cyan-600 text-white dark:bg-cyan-500 dark:text-slate-950 hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <a
              href="https://wa.me/918861162896"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors cursor-pointer ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Area with flex-1 and min-h-0 */}
        <div className="flex-1 min-h-0 overflow-y-auto p-3 sm:p-6 md:p-8 pb-20 sm:pb-28 flex justify-center">
          
          {/* Printable White Resume Sheet */}
          <div 
            ref={resumeRef}
            className="w-full max-w-[800px] h-fit bg-white text-slate-900 shadow-xl rounded-xl p-6 sm:p-10 font-sans border border-slate-200 mb-8 print:border-none print:shadow-none print:p-0 print:m-0"
          >
            {/* 1. Header */}
            <div className="text-center pb-4 border-b border-slate-800">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 uppercase font-heading">
                JAMUNA T G
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-slate-700 pt-2 font-mono">
                <a href="mailto:jamunatg2006@gmail.com" className="hover:underline font-semibold text-cyan-700">
                  jamunatg2006@gmail.com
                </a>
                <span>&bull;</span>
                <a href="https://www.linkedin.com/in/jamuna-t-g/" target="_blank" rel="noopener noreferrer" className="hover:underline text-cyan-700">
                  LinkedIn
                </a>
                <span>&bull;</span>
                <a href="https://github.com/jamunatg2006-sys" target="_blank" rel="noopener noreferrer" className="hover:underline text-cyan-700">
                  Git-Hub
                </a>
                <span>&bull;</span>
                <a href="https://leetcode.com/u/Jamuna_TG/" target="_blank" rel="noopener noreferrer" className="hover:underline text-cyan-700">
                  LeetCode
                </a>
                <span>&bull;</span>
                <a href="tel:+918861162896" className="font-bold text-slate-900 hover:underline">
                  +91 8861162896
                </a>
              </div>
            </div>

            {/* 2. Education */}
            <div className="pt-4 pb-3 border-b border-slate-200">
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 font-heading mb-2">
                Education
              </h2>

              <div className="space-y-2 text-xs text-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <strong className="text-slate-950 font-bold">Sir M Visvesvaraya Institute of Technology</strong>
                    <span className="text-slate-600"> | Bangalore, IN</span>
                  </div>
                  <div className="font-mono text-[11px] text-slate-700">
                    2024 &ndash; 2028 | B.E in Information Science
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-700">
                  <span className="font-bold text-slate-950">CGPA: 9.2 / 10</span>
                  <span>&bull;</span>
                  <span>Relevant Courses: Object Oriented Programming | Data Structures &amp; Algorithms | Operating Systems | DBMS</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pt-1 text-[11px]">
                  <div>
                    <strong className="text-slate-900 font-semibold">Christ Junior College</strong>
                    <span className="text-slate-600"> &mdash; 96% | Bangalore, IN</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-[11px]">
                  <div>
                    <strong className="text-slate-900 font-semibold">M M English High School</strong>
                    <span className="text-slate-600"> &mdash; 99.2% | Bangalore, IN</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Technical Skills */}
            <div className="py-3 border-b border-slate-200 text-xs text-slate-800 space-y-1.5">
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 font-heading mb-1.5">
                Technical Skills
              </h2>

              <div>
                <strong className="text-slate-950">Programming Languages: </strong>
                <span>C/C++, Python, Java, Dart</span>
              </div>
              <div>
                <strong className="text-slate-950">Web-Development: </strong>
                <span>FrontEnd (HTML, CSS, JAVA SCRIPT, UI), MERN STACK</span>
              </div>
              <div>
                <strong className="text-slate-950">App-Development: </strong>
                <span>Flutter</span>
              </div>
              <div>
                <strong className="text-slate-950">Deployment: </strong>
                <span>GitHub, Git, Vercel, Render, AWS, Netlify</span>
              </div>
              <div>
                <strong className="text-slate-950">Area of Interest: </strong>
                <span>Machine Learning, Competitive Programming, AI, Web, App Development, Cyber-Security, open Sources</span>
              </div>
              <div className="pt-0.5">
                <strong className="text-slate-950">Active Open Source Contributor: </strong>
                <span>GSSoC&apos;26, NSOC&apos;26, SSOC&apos;26 | 3 Months | 35+ PRs Merged Across Multiple Open-Source Projects</span>
              </div>
            </div>

            {/* 4. Experience */}
            <div className="py-3 border-b border-slate-200">
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 font-heading mb-2">
                Experience
              </h2>

              <div className="space-y-3">
                {/* HTCL Experience */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                    <div>
                      <strong className="text-slate-950 font-bold">Full Stack Developer Intern</strong>
                      <span className="text-slate-700"> | HTCL</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-600">
                      Dec 2025 &ndash; May 2026 (6 Months)
                    </span>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-xs text-slate-700 leading-snug">
                    <li>Developed responsive frontend features and interactive user flows using React.js and JavaScript.</li>
                    <li>Integrated and tested REST APIs for web applications, ensuring reliable data synchronization.</li>
                    <li>Implemented task submission and form workflows; fixed critical bugs and improved UI functionality.</li>
                    <li>Worked cross-functionally with frontend and backend teams on end-to-end feature development.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Projects */}
            <div className="py-3 border-b border-slate-200">
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 font-heading mb-2">
                Projects
              </h2>

              <div className="space-y-2.5">
                {/* Project 1: VendorRisk AI */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                    <div>
                      <strong className="text-slate-950 font-bold">VendorRisk AI</strong>
                      <span className="text-slate-600 font-mono text-[11px]"> | Node.js, Python, SQLite, REST APIs</span>
                    </div>
                    <a
                      href="https://github.com/jamunatg2006-sys/VendorRisk-AI-Project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-cyan-700 hover:underline flex items-center gap-0.5"
                    >
                      (GitHub ↗)
                    </a>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-0.5 space-y-0.5 text-xs text-slate-700 leading-snug">
                    <li>Built a full-stack vendor risk assessment platform with real-time CVE and credential breach monitoring.</li>
                    <li>Developed a multi-factor risk scoring engine using NVD and breach intelligence APIs to evaluate third-party exposure.</li>
                    <li>Implemented Node.js/Express and Python services with SQLite-based analytics and automated reporting.</li>
                    <li>Created responsive dashboards, PDF reports, and CI/CD-enabled deployment workflows.</li>
                  </ul>
                </div>

                {/* Project 2: AI-Based Spam Email Classifier */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                    <div>
                      <strong className="text-slate-950 font-bold">AI-Based Spam Email Classifier</strong>
                      <span className="text-slate-600 font-mono text-[11px]"> | Python, Machine Learning, NLP, Naive Bayes, Scikit-learn, Tkinter</span>
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-0.5 space-y-0.5 text-xs text-slate-700 leading-snug">
                    <li>Built an AI-based system to classify messages as spam or ham using Natural Language Processing.</li>
                    <li>Implemented Bag of Words (CountVectorizer) for text feature extraction.</li>
                    <li>Trained a Naive Bayes classifier achieving ~95&ndash;99% accuracy.</li>
                    <li>Developed an interactive Tkinter GUI for real-time predictions with visual feedback.</li>
                    <li>Gained hands-on experience in data preprocessing, model training, and model evaluation.</li>
                  </ul>
                </div>

                {/* Project 3: Sahidawa India (Open Source) */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                    <div>
                      <strong className="text-slate-950 font-bold">Sahidawa India (Open Source)</strong>
                      <span className="text-slate-600 font-mono text-[11px]"> | React.js, JavaScript, HTML5, Python, CSS, Git, GitHub, Vercel</span>
                    </div>
                    <a
                      href="https://github.com/RatLoopz/sahidawa-india/pull/3894"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-cyan-700 hover:underline flex items-center gap-0.5"
                    >
                      (GitHub ↗)
                    </a>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-0.5 space-y-0.5 text-xs text-slate-700 leading-snug">
                    <li>Delivered 20+ merged pull requests implementing advanced features and bug fixes.</li>
                    <li>Collaborated with maintainers through pull requests, issue discussions, and code reviews in real-world workflows.</li>
                    <li>Improved application functionality with clean, reusable, and maintainable code.</li>
                  </ul>
                </div>

                {/* Project 4: SILENT SOS */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                    <div>
                      <strong className="text-slate-950 font-bold">SILENT SOS</strong>
                      <span className="text-slate-600 font-mono text-[11px]"> | React.js, Node.js, Express.js, MongoDB, Tailwind CSS</span>
                    </div>
                    <a
                      href="https://github.com/jamunatg2006-sys/SILENT-SOS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-cyan-700 hover:underline flex items-center gap-0.5"
                    >
                      (GitHub ↗)
                    </a>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-0.5 space-y-0.5 text-xs text-slate-700 leading-snug">
                    <li>Built an offline-first Progressive Web App (PWA) enabling QR-based emergency medical access for non-verbal individuals.</li>
                    <li>Developed secure REST APIs, JWT authentication, QR profile generation, GPS tracking, and WhatsApp SOS alerts.</li>
                    <li>Implemented Service Workers, offline caching, and responsive UI to ensure reliable performance in low-connectivity zones.</li>
                    <li>Designed responsive, secure, and scalable architecture with MongoDB and Service Workers.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 6. Soft Skills & Languages */}
            <div className="py-2.5 border-b border-slate-200 text-xs text-slate-800 space-y-1">
              <div>
                <strong className="text-slate-950">Soft Skills: </strong>
                <span>Communication, TeamWork, Creativity, Time Management, Problem Solving, Dancing</span>
              </div>
              <div>
                <strong className="text-slate-950">Languages: </strong>
                <span>English, Kannada, Hindi, Telugu</span>
              </div>
            </div>

            {/* 7. Extracurriculars & Accomplishments */}
            <div className="pt-2.5 pb-6 text-xs text-slate-800 space-y-1">
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 font-heading mb-1">
                Extracurriculars &amp; Accomplishments
              </h2>

              <div>
                <strong className="text-slate-950">Clubs and Societies: </strong>
                <span>Spandana (Socio Out-Reach club)</span>
              </div>
              <div>
                <strong className="text-slate-950">Accomplishments: </strong>
                <span>Solved 250+ LeetCode problems. Secured Top 5 in SJBIT Hackathon and participated in NITTE Vibathon. <strong>2X Hackathon Winner.</strong></span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Quick Bar so user clearly sees the end and can print/close */}
        <div className="flex items-center justify-between px-5 py-2.5 bg-white dark:bg-[#0c1017] border-t border-slate-200 dark:border-slate-800 shrink-0 text-xs text-slate-500 font-mono">
          <span className="text-[11px] text-slate-500 hidden sm:inline">
            Official 1-Page ATS Resume View
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
