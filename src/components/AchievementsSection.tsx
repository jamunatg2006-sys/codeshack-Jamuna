"use client";

import { portfolioData } from "@/data/portfolioData";
import { Award, Trophy, Star, Medal, ExternalLink, Calendar, CheckCircle2, Sparkles } from "lucide-react";

export function AchievementsSection() {
  const { achievements } = portfolioData;

  const getBadgeIcon = (type: string) => {
    switch (type) {
      case "silver":
        return <Trophy className="w-5 h-5 text-slate-300 dark:text-cyan-400" />;
      case "star":
        return <Star className="w-5 h-5 text-amber-500" />;
      case "gold":
        return <Trophy className="w-5 h-5 text-amber-400" />;
      default:
        return <Medal className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 relative border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <Award className="w-3.5 h-3.5" />
              // SECTION 06 &bull; COMPETITIVE RECOGNITION &amp; PODIUMS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Hackathons &amp; Achievements.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
              Competitive hackathon milestones, hackathon awards, and verified technical recognitions won under time and resource constraints.
            </p>
          </div>
        </div>

        {/* Highlighted Podium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                item.badgeType === "silver"
                  ? "border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 via-white to-white dark:from-cyan-950/30 dark:via-[#0c1017] dark:to-[#0c1017] shadow-lg"
                  : item.badgeType === "star"
                  ? "border-amber-500/40 bg-gradient-to-b from-amber-500/10 via-white to-white dark:from-amber-950/20 dark:via-[#0c1017] dark:to-[#0c1017] shadow-md"
                  : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] shadow-xs"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
                    {getBadgeIcon(item.badgeType)}
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.year}</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono font-semibold uppercase text-cyan-600 dark:text-cyan-400 mb-1">
                    {item.event}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                </div>

                {item.rank && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950">
                    <Trophy className="w-3.5 h-3.5 text-amber-400 dark:text-slate-950" />
                    <span>{item.rank}</span>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      <Sparkles className="w-2.5 h-2.5 text-cyan-500 opacity-70" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
