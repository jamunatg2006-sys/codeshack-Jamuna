# Jamuna T G — Personal Developer & AI Systems Portfolio

A personal developer portfolio designed and engineered for **Jamuna T G** — Full-Stack Engineer, AI/ML Developer, Agentic Systems Researcher, and Open Source Contributor.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Live Sections & Key Features

1. **Hero Section**: Confident digital presence with direct CTAs, live availability indicator, interactive terminal telemetry deck, and social links (GitHub, LinkedIn, LeetCode).
2. **About Me**: Engineering identity, curious builder ethos, and a real-time **Currently Exploring Radar** (Autonomous Agent Tool Orchestration, Multi-Vector RAG, Dual Backends).
3. **Featured Projects Showcase**:
   - **VendorRisk AI**: Dual-backend (Node.js Port 5001 + Python Flask) third-party cybersecurity posture platform with NVD CVE ingestion, 10-factor weighted scoring, and automated compliance reports.
   - **SILENT SOS**: Offline-first QR emergency assistance Progressive Web App (PWA) with service workers and zero-install bystander scanning.
   - **CivicTrack**: AI-powered 50-to-1 civic complaint aggregation platform with 60% verification quorum and Leaflet GPS heatmaps (SJBIT Hackathon Top 10 of 108 teams).
   - **CodeShack ML Model**: Award-winning supervised ML predictive pipeline (2nd Place Winner).
   - Plus **AbTalkAI** (RAG pipeline), **Sentinel AI** (Atria cybersecurity), **PhysioPath**, and **MediSyncAI**.
4. **Agentic AI & RAG Research Lab**: Interactive deconstructed agent loop visualizer (Goal Decomposition &rarr; ReAct Reasoning &rarr; Tool Execution &rarr; Self-Reflection &rarr; Synthesis), architecture notes, and experiment benchmarks.
5. **Technical Skills Matrix**: Curated engineering toolkit categorized by Languages, Frontend, Backend, Databases, AI/ML & Agents, and DevOps.
6. **Open Source Showcase (Dedicated Tab & Section)**:
   - GirlScript Summer of Code (GSSoC '26) highlight: **Global Rank #414 of 47,951 (Top 1% Worldwide)**, **3,123 PRs**, **650 Bounty Tasks**, **9,738 Points**, and **12 Badges**.
   - Top contributions: `story-spark-ai`, `sahidawa-india` (78★, 322 forks), `VendorRisk-AI-Project`, `SILENT-SOS`, `neurovision`, `aegisai`.
7. **Experience**: Professional timeline featuring the **ORNITECH** software engineering internship with company overview and deliverables.
8. **Hackathons & Podium Milestones**: CodeShack 2nd place, SJBIT Top 10 finish, and inter-collegiate prototype sprints.
9. **Interactive Overlays**:
   - Deep-dive Project Architecture Modal with system specs and direct code repo links.
   - Quick Command Palette (`Ctrl+K` or `Cmd+K`) for lightning-fast keyboard navigation.
   - Dual Theme System: High-contrast midnight dark theme & clean editorial ivory light theme.
   - Contact Form with honeypot spam protection, copyable email, direct telephone/WhatsApp link, and automatic mailto dispatch.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (Turbopack, App Router)
- **UI & Components**: React 19, TypeScript
- **Styling**: Tailwind CSS, custom design tokens, dark & light themes
- **Theme Provider**: `next-themes` (zero hydration mismatch)
- **Icons**: Lucide Icons & Custom SVG Brand Icons

---

## 💻 Getting Started Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or whichever port is assigned) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📝 How to Update Your Personal Data & Links

All portfolio content is centralized in **one single typed configuration file**:
👉 [`src/data/portfolioData.ts`](file:///c:/Users/Jamuna%20T%20G/PORTFOLIO/src/data/portfolioData.ts)

You never need to edit UI components to change your information!

### 1. Contact & Social Links
Open `src/data/portfolioData.ts` and update:
```ts
email: "jamunatg2006@gmail.com",
phone: "+91 98765 43210",              // Your phone or WhatsApp number
github: "https://github.com/jamunatg2006-sys",
linkedin: "https://linkedin.com/in/jamuna-t-g",
leetcode: "https://leetcode.com/u/jamuna-tg", // Your LeetCode profile URL
```

### 2. Resume PDF
Replace the file located at:
`public/resume.pdf` with your real resume PDF. The website already links to `/resume.pdf` automatically!

### 3. ORNITECH Internship Description
In `src/data/portfolioData.ts`, find the `experience` array:
```ts
{
  id: "ornitech-internship",
  role: "Software Engineering Intern",
  organization: "ORNITECH",
  companyOverview: "Technology solutions firm building digital platforms...",
  period: "2024",
  bullets: [
    "Contributed to full-stack feature development...",
    "Built modular components..."
  ],
  technologies: ["JavaScript", "React", "Node.js", "Git"]
}
```

### 4. Adding or Modifying Projects
In `src/data/portfolioData.ts`, find the `projects` array. Simply add or update fields like `githubUrl`, `liveUrl`, `demoVideoUrl`, etc.

---

## 🌐 Deploying to Vercel

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete portfolio for Jamuna T G"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and import your repository.
3. Vercel automatically detects Next.js. Click **Deploy**!
