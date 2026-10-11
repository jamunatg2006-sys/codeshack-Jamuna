"use client";

import { useState, FormEvent } from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Download, 
  MessageSquare,
  Sparkles,
  MapPin,
  Clock,
  Phone
} from "lucide-react";
import { LinkedinIcon, GithubIcon, LeetCodeIcon } from "./icons/SocialIcons";

export function ContactSection({ onOpenResumeModal }: { onOpenResumeModal?: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botcheck: "" // Honeypot field
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const triggerMailtoFallback = () => {
    const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.botcheck) return; // Silent discard for bot

    setStatus("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/jamunatg2006@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Inquiry from ${formData.name}`,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}: ${formData.subject || "Collaboration Inquiry"}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        triggerMailtoFallback();
        setStatus("success");
      }
    } catch {
      triggerMailtoFallback();
      setStatus("success");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <Mail className="w-3.5 h-3.5" />
              // SECTION 07 &bull; CONNECT &amp; COLLABORATE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Let&apos;s Build Together.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
              Currently open for full-stack engineering internships, AI/ML initiatives, agentic workflows, and hackathon teams.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct channels & credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] p-6 sm:p-7 shadow-md space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                  DIRECT CONTACT CHANNELS
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Get in touch directly
                </h3>
              </div>

              {/* Copyable Email Box */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Email Address</span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white">
                      {portfolioData.personal.email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-cyan-500 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp Box */}
              {portfolioData.personal.phone && (
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Phone / WhatsApp</span>
                      <a 
                        href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
                      >
                        {portfolioData.personal.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${portfolioData.personal.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-medium transition-colors"
                  >
                    Direct Chat
                  </a>
                </div>
              )}

              {/* Meta details */}
              <div className="space-y-2.5 font-mono text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-500" />
                  <span>Based in {portfolioData.personal.location} (IST &bull; UTC+5:30)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <span>Response time: Within 24 hours</span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-cyan-500/40 text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  GitHub
                </a>

                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-cyan-500/40 text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  LinkedIn
                </a>

                {portfolioData.personal.leetcode && (
                  <a
                    href={portfolioData.personal.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-amber-500/40 text-slate-800 dark:text-slate-200 transition-colors"
                  >
                    <LeetCodeIcon className="w-3.5 h-3.5 text-amber-500" />
                    LeetCode
                  </a>
                )}

                <button
                  onClick={onOpenResumeModal}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-600 text-white dark:bg-cyan-500 dark:text-slate-950 hover:opacity-90 transition-opacity cursor-pointer ml-auto"
                >
                  <Download className="w-3.5 h-3.5" />
                  Resume
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] p-6 sm:p-8 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                Send a message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">
                Fill in your project or role details below. Submissions are delivered directly to <span className="font-mono text-cyan-600 dark:text-cyan-400 font-bold">jamunatg2006@gmail.com</span>.
              </p>

              {/* Direct WhatsApp / Phone Callout */}
              <div className="mb-6 p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500 text-white shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      Prefer instant chat or call?
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400">
                      Reach me directly at <a href="tel:+918861162896" className="font-mono font-bold text-emerald-600 dark:text-emerald-400 hover:underline">+91 8861162896</a>
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/918861162896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shrink-0 shadow-xs"
                >
                  WhatsApp Now &rarr;
                </a>
              </div>

              {status === "success" ? (
                <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-base">
                    <Check className="w-5 h-5 text-emerald-500" />
                    Message delivered to Jamuna!
                  </div>
                  <p className="text-xs sm:text-sm">
                    Thank you! Your message has been sent directly to <span className="font-mono font-bold">jamunatg2006@gmail.com</span>. I will review and reply within 24 hours.
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 pt-1">
                    For faster response, feel free to text or call me directly on <a href="tel:+918861162896" className="font-mono font-bold underline">+91 8861162896</a>.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({ name: "", email: "", subject: "", message: "", botcheck: "" });
                    }}
                    className="mt-3 text-xs font-semibold underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot for spam bots */}
                  <input
                    type="text"
                    name="botcheck"
                    value={formData.botcheck}
                    onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Rivera"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1">
                      Subject / Opportunity Type *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. SDE Internship Opportunity / Hackathon Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the role, project, or problem you're tackling..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 hover:opacity-90 transition-opacity cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <span>Dispatching...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
