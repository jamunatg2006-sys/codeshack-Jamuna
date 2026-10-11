export interface ProjectMedia {
  type: "video" | "image";
  url?: string;
  youtubeId?: string;
  thumbnail: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "featured" | "ai-ml" | "hackathon" | "full-stack" | "pwa-tools";
  status: "Completed" | "Ongoing" | "Prototype" | "Experimental" | "Completed (Improvised Later)";
  featuredOrder?: number;
  featured: boolean;
  problem: string;
  solution: string;
  myContribution: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    aiMl?: string[];
    apis?: string[];
    devops?: string[];
    other?: string[];
  };
  metrics?: string[];
  architectureNotes?: string;
  githubUrl?: string;
  liveUrl?: string;
  demoVideoUrl?: string;
  youtubeId?: string;
  media?: ProjectMedia[];
  associatedOrg?: string;
  achievementBadge?: string;
  challengesFaced?: string[];
}

export interface ExperienceContribution {
  title: string;
  description: string;
  codeRef?: string;
}

export interface ExperienceProject {
  name: string;
  category: string;
  role: string;
  overview: string;
  technologies: string[];
  contributions: ExperienceContribution[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  companyOverview?: string;
  location?: string;
  period: string;
  duration?: string;
  status: "Completed" | "Ongoing" | "Verified";
  description: string;
  bullets: string[];
  technologies: string[];
  projects?: ExperienceProject[];
  verificationNote?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  year: string;
  rank?: string;
  description: string;
  tags: string[];
  link?: string;
  badgeType: "gold" | "silver" | "bronze" | "star";
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: "Core" | "Advanced" | "Proficient" | "Exploring";
    categoryContext: string;
    icon?: string;
  }[];
}

export interface AgenticLabItem {
  id: string;
  title: string;
  type: "Architecture" | "Experiment" | "Workflow Prototype" | "Research Note";
  status: "Completed" | "Building" | "Exploring";
  summary: string;
  components: string[];
  insights: string;
  diagramSteps?: { title: string; desc: string; tool?: string }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    headline: string;
    subheadline: string;
    bioParagraphs: string[];
    location: string;
    availableForRoles: string[];
    availabilityStatus: "Open for Internships & Collaborations" | "Actively Building";
    currentExploration: string;
    email: string;
    phone?: string;
    github: string;
    linkedin: string;
    leetcode?: string;
    gssocProfile?: string;
    college: string;
    resumePath: string;
  };
  projects: Project[];
  agenticLab: AgenticLabItem[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  achievements: AchievementItem[];
  openSource: {
    githubProfile: string;
    gssocProfile: string;
    gssocScore: string;
    ethos: string;
    statsSummary: { label: string; value: string }[];
    featuredContributions: {
      repoName: string;
      prTitle: string;
      prUrl?: string;
      description: string;
      tags: string[];
    }[];
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Jamuna T G",
    title: "Full-Stack Engineer & AI/Agentic Systems Developer",
    college: "Sir M. Visvesvaraya Institute of Technology (Sir MVIT), Bengaluru",
    headline: "Building resilient full-stack systems, architecting agentic workflows, and turning complex ideas into production-ready software.",
    subheadline: "Information Science & Engineering student at Sir M. Visvesvaraya Institute of Technology (Sir MVIT), Bengaluru. Full-stack developer with real engineering experience in AI-powered website generation, database migrations, offline emergency PWAs, and collaborative open source.",
    bioParagraphs: [
      "I am an ambitious developer pursuing my B.E. in Information Science & Engineering at Sir M. Visvesvaraya Institute of Technology (Sir MVIT), Bengaluru, who thrives at the intersection of full-stack engineering and applied artificial intelligence. I don't just build UI surfaces; I design robust backend APIs, implement multi-factor risk algorithms, wire up real-time vulnerability feeds, and orchestrate intelligent agent loops.",
      "Whether it's building a 48-hour hackathon MVP that scales to top 10 rankings among 100+ teams, developing offline-first QR emergency PWAs for accessible assistance, or fine-tuning RAG pipelines, my philosophy is simple: understand the core problem, choose the right architecture, and ship with meticulous attention to detail.",
      "Outside of project sprints, I actively experiment with agentic tool calling, vector retrieval pipelines, open-source codebases, and collaborative engineering challenges."
    ],
    location: "Bengaluru, India",
    availableForRoles: ["SDE Internships", "Full-Stack Engineering", "AI/ML & Agentic Systems", "Open Source Collaborations"],
    availabilityStatus: "Open for Internships & Collaborations",
    currentExploration: "Autonomous Agent Tool Orchestration, Multi-Vector RAG, and Resilient Full-Stack Systems",
    email: "jamunatg2006@gmail.com", // [EDIT: Enter your Gmail/Email here]
    phone: "+91 8861162896", // [EDIT: Enter your Phone/WhatsApp number here]
    github: "https://github.com/jamunatg2006-sys", // [EDIT: Enter your GitHub profile URL]
    linkedin: "https://linkedin.com/in/jamuna-t-g", // [EDIT: Enter your LinkedIn profile URL]
    leetcode: "https://leetcode.com/u/Jamuna_TG/", // [EDIT: Enter your LeetCode profile URL]
    gssocProfile: "https://gssoc.girlscript.org/profile/3809e4b8-a6a6-48db-b632-6fe4faa7d6b1",
    resumePath: "/resume.pdf" // [NOTE: Place your actual resume PDF in the /public folder named resume.pdf]
  },

  projects: [
    {
      id: "vendor-risk-ai",
      title: "VendorRisk AI",
      tagline: "Autonomous Multi-Factor Third-Party Cybersecurity Posture & Vulnerability Evaluation Platform",
      category: "featured",
      status: "Completed (Improvised Later)",
      featured: true,
      featuredOrder: 1,
      problem: "Organizations onboard third-party vendors blindly without deep security checks, even though ~60% of corporate data breaches originate down the vendor supply chain. Manual reviews take weeks, while vendor CVE vulnerabilities and credential breaches mutate daily with zero standardization across teams.",
      solution: "An automated enterprise-grade platform that evaluates vendor cybersecurity posture in real time. Powered by a robust Node.js/Express backend that aggregates National Vulnerability Database (NVD) CVEs, applies a 10-factor weighted scoring engine, checks breach registries, and outputs executive & technical compliance-ready PDF audits in seconds.",
      myContribution: [
        "Architected and implemented the entire primary Node.js backend with RESTful APIs running on port 5001.",
        "Engineered real-time integration with the National Vulnerability Database (NVD API) to fetch active CVE telemetry and CVSS severity metrics.",
        "Formulated the 5-factor weighted risk scoring algorithm covering vulnerability volume, CVSS density, critical exploits, recent zero-days, and industry context.",
        "Modeled SQLite database schemas across vendors, vendor_history, risk_alerts, users, and audit sessions.",
        "Implemented vendor validation directory with 60+ verified vendor profiles, alias matching, and automated database corruption self-recovery backups.",
        "Built 6+ responsive frontend pages including Analyze, Dashboard, Multi-Vendor Compare, Real-time Monitor, Report Generator, and Profile Settings.",
        "Crafted custom terminal animation engine for live analysis visualization and real-time risk gauges.",
        "Engineered client-side and server-side PDF report synthesis using html2pdf with executive summaries and technical appendixes.",
        "Engineered the multi-dimensional risk evaluation engine in Node.js, normalizing scoring metrics across cyber, operations, and reputation factors into a unified analysis flow.",
        "Deployed the full application live with automated CI/CD pipelines, CORS policy, and feature-branched Git workflows."
      ],
      techStack: {
        frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "Chart.js", "Font Awesome", "html2pdf.js"],
        backend: ["Node.js", "Express.js", "REST APIs", "Python Scripting"],
        database: ["SQLite3 (vendors, history, alerts, users, sessions)"],
        apis: ["NVD API (National Vulnerability Database)", "HaveIBeenPwned API (Credential Breach Feeds)"],
        devops: ["Git", "GitHub Actions", "CI/CD Pipeline", "Environment Secrets"],
        other: ["JWT Authentication", "Bcrypt", "Secure Session Management"]
      },
      metrics: [
        "10-Factor Weighted Algorithm",
        "12+ Interactive Pages",
        "60+ Pre-validated Vendor Profiles",
        "Instant PDF Report Generation"
      ],
      architectureNotes: "System architecture: Node.js/Express (Port 5001) powers the primary REST API, session management, NVD CVE telemetry ingestion, and SQLite data caching, running multi-factor quantitative risk algorithms and automated reporting.",
      githubUrl: "https://github.com/jamunatg2006-sys/VendorRisk-AI-Project",
      liveUrl: undefined,
      demoVideoUrl: undefined,
      challengesFaced: [
        "Engineering high-concurrency CVE pagination with rate-limiting guardrails and robust schema normalization across National Vulnerability Database feeds.",
        "Handling NVD API rate limits and sporadic payload schema mutations with proactive fallback caching.",
        "Mitigating SQLite database concurrency locking during bulk vulnerability imports via serialized write queues."
      ]
    },
    {
      id: "silent-sos",
      title: "SILENT SOS",
      tagline: "Offline-First QR Emergency Assistance Progressive Web Application",
      category: "featured",
      status: "Completed",
      featured: true,
      featuredOrder: 2,
      problem: "Individuals who are non-verbal, deaf/hard of hearing, neurodivergent, elderly, or suffering acute distress frequently cannot vocalize medical histories or communicate with bystanders and emergency responders during crisis situations.",
      solution: "A Progressive Web Application (PWA) that converts sensitive emergency medical profiles, emergency guardian contacts, and tailored communication protocols into instant QR codes accessible offline by any bystander smartphone without specialized app downloads.",
      myContribution: [
        "Contributed to core React.js application structure and the QR-driven emergency dispatch workflow.",
        "Engineered the responsive bystander view ensuring critical contact details and medical warnings render instantaneously with maximum typographic legibility.",
        "Implemented PWA capabilities including Web App Manifest, Service Worker caching strategies, and offline access for emergency scenarios.",
        "Developed emergency contact management module with direct dial triggers and structured profile handling.",
        "Prioritized accessibility-first design: high-contrast colorways, clear touch targets, and zero-latency loading under cellular dead zones."
      ],
      techStack: {
        frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
        backend: ["Node.js", "Express.js", "REST APIs"],
        other: ["PWA Service Workers", "Web App Manifest", "QR Code Generation & Scanning", "Offline Storage"]
      },
      metrics: [
        "100% Offline Profile Availability",
        "Universal QR Bystander Scan",
        "Instant 1-Tap Guardian Call",
        "Zero App Store Install Friction"
      ],
      architectureNotes: "Client-side service worker caches emergency payload so that even when cell signals drop during accidents, scanned profiles display instantly without network roundtrips.",
      githubUrl: "https://github.com/jamunatg2006-sys/SILENT-SOS",
      liveUrl: undefined,
      demoVideoUrl: undefined,
      challengesFaced: [
        "Ensuring complete privacy: personal data is encoded securely and only revealed on deliberate scan triggers.",
        "Guaranteeing instant offline service worker activation across both Android Chrome and iOS Safari engines."
      ]
    },
    {
      id: "civictrack",
      title: "CivicTrack",
      tagline: "AI-Powered Urban Governance & 50-to-1 Civic Issue Aggregation Platform",
      category: "hackathon",
      status: "Completed",
      featured: true,
      featuredOrder: 3,
      associatedOrg: "SJBIT Hackathon (Top 10 out of 108 Teams)",
      achievementBadge: "Top 10 Finalist (Top 9%)",
      problem: "Urban governance is paralyzed by fragmented reporting: 87% duplicate complaints create crushing administrative backlog, 41% of 'resolved' tickets are marked closed without ground truth verification, and citizens have zero participatory tracking, causing civic trust to drop below 32%.",
      solution: "A full-scale MERN civic platform built in 48 hours that aggregates up to 50 duplicate reports into 1 unified intelligent issue, enforces a mandatory 60% community verification voting quorum before ticket closure, tracks live issues via GPS heatmaps, and features 13-language voice filing with Reddit API social listening.",
      myContribution: [
        "Developed key frontend modules and dashboard workflows across the 6-dashboard platform ecosystem.",
        "Integrated interactive geospatial Leaflet OpenStreetMap heatmaps with live GPS coordinates.",
        "Assisted in MERN backend endpoints for issue status transitions and citizen upvoting mechanics.",
        "Implemented responsive UI with glassmorphism aesthetics and dynamic status indicators.",
        "Helped integrate Reddit API pipeline that converts citizen social posts into structured civic tickets.",
        "Participated in the intense 48-hour sprint delivering 8 production-grade MVP features."
      ],
      techStack: {
        frontend: ["React.js 18", "Vite", "Framer Motion", "Lucide React", "Chart.js", "Recharts", "React-Leaflet"],
        backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcryptjs"],
        aiMl: ["Duplicate Detection Algorithm", "Auto-Categorization", "Severity Prediction", "Chatbase AI"],
        apis: ["Reddit API", "Google Translate", "Leaflet OpenStreetMap", "Gmail API", "Web Speech API (13 Languages)"]
      },
      metrics: [
        "96% Faster Resolution (72h → 2.4h)",
        "87% Duplicate Complaint Waste Eliminated",
        "60% Community Verification Quorum",
        "Top 10 / 108 Teams (Top 9%)"
      ],
      architectureNotes: "Six specialized role-based portals: Public Map (no login), Ward Dashboard, Citizen Dashboard with civic karma points, Authority Resolution Panel with proof-of-work uploads, and Central Admin.",
      githubUrl: "https://github.com/Yogesh23-03/CIVILTRACK",
      demoVideoUrl: "https://lnkd.in/dSC5G_CN",
    },
    {
      id: "codeshack-ml-model",
      title: "CodeShack ML Predictive Engine",
      tagline: "Award-Winning Supervised Machine Learning Model for Predictive Modeling",
      category: "ai-ml",
      status: "Completed",
      featured: true,
      featuredOrder: 4,
      associatedOrg: "CodeShack Hackathon",
      achievementBadge: "2nd Place Winner",
      problem: "Predictive classification challenges under high feature dimensionality, imbalanced class distributions, and stringent latency benchmarks.",
      solution: "A machine learning pipeline incorporating rigorous exploratory data analysis, systematic feature engineering, cross-validated model selection, and hyperparameter optimization that secured 2nd place in the CodeShack competitive hackathon.",
      myContribution: [
        "Conducted end-to-end data cleaning, missing value imputation, and correlation matrix analysis.",
        "Designed custom feature interaction transforms and categorical encoding strategies.",
        "Trained and benchmarked baseline vs. ensemble algorithms (Random Forest, Gradient Boosting, XGBoost).",
        "Fine-tuned decision boundaries using Stratified K-Fold cross validation to prevent overfitting.",
        "Documented end-to-end evaluation metrics, error distribution curves, and presented technical defense to judges."
      ],
      techStack: {
        aiMl: ["Python", "Scikit-Learn", "Pandas", "NumPy", "XGBoost", "Matplotlib", "Seaborn"],
        other: ["Jupyter Notebook", "Feature Engineering", "Stratified K-Fold CV", "Hyperparameter Grid Search"]
      },
      metrics: [
        "2nd Place Podium Finish in CodeShack",
        "Verified Multi-Fold Cross-Validation",
        "Optimized Precision/Recall Tradeoff",
        "Zero Data Leakage Pipeline"
      ],
      githubUrl: "https://github.com/jamunatg2006-sys",
      challengesFaced: [
        "Overcoming severe class imbalance without synthetically corrupting variance boundaries.",
        "Optimizing computational runtime constraints during live competition evaluation."
      ]
    },
    {
      id: "abtalk-ai",
      title: "AbTalkAI",
      tagline: "Retrieval-Augmented Generation (RAG) Conversational Intelligence Pipeline",
      category: "ai-ml",
      status: "Completed",
      featured: false,
      problem: "Standard LLMs suffer from domain hallucinations, lack proprietary context, and fail when answering queries requiring exact multi-document synthesis.",
      solution: "A specialized RAG pipeline that digests unstructured knowledge bases, splits content into semantically coherent chunks, indexes dense embeddings in a vector store, and synthesizes grounded answers with strict citation citations.",
      myContribution: [
        "Designed the document ingestion and text chunking pipeline with configurable token overlaps.",
        "Implemented vector embeddings generation and similarity search ranking.",
        "Constructed context-augmented system prompting with hallucination guardrails.",
        "Prototyped conversational streaming response interface with token inspection."
      ],
      techStack: {
        aiMl: ["Python", "LangChain / LlamaIndex", "HuggingFace Embeddings", "Vector Store (FAISS/Chroma)", "OpenAI / Open LLMs"],
        backend: ["Node.js", "Python", "REST APIs"],
        frontend: ["React.js", "Tailwind CSS"]
      },
      metrics: [
        "Sub-second Vector Similarity Search",
        "Grounded Citations Pipeline",
        "Modular Multi-Document Ingestion"
      ],
      githubUrl: "https://github.com/Shashankpatilrcr/ABTALK",
      architectureNotes: "Three-stage pipeline: 1) Ingestion & Chunking -> 2) Dense Vector Embedding Indexing -> 3) Top-k Retrieval & Contextual Prompt Augmentation."
    },
    {
      id: "spam-email-classifier",
      title: "AI-Based Spam Email Classifier",
      tagline: "Natural Language Processing & Supervised Machine Learning Text Classification System",
      category: "ai-ml",
      status: "Completed",
      featured: false,
      problem: "Unsolicited spam and phishing emails consume cognitive bandwidth and expose organizations to deceptive compromises without accurate, real-time message categorization.",
      solution: "An AI-based Natural Language Processing system that parses incoming messages, extracts bag-of-words token representations using CountVectorizer, and classifies content as spam or ham using a trained Naive Bayes model with ~95-99% accuracy.",
      myContribution: [
        "Built the end-to-end NLP pipeline for text preprocessing, tokenization, stop-word removal, and CountVectorizer feature extraction.",
        "Trained and evaluated a Multinomial Naive Bayes classifier reaching ~95–99% classification accuracy.",
        "Engineered an interactive Tkinter graphical interface for real-time predictions with visual feedback.",
        "Gained hands-on experience in dataset curation, data preprocessing, model training, and evaluation metrics."
      ],
      techStack: {
        aiMl: ["Python", "Machine Learning", "NLP", "Naive Bayes", "Scikit-learn"],
        frontend: ["Tkinter GUI"],
        other: ["CountVectorizer (Bag of Words)", "Text Preprocessing"]
      },
      metrics: [
        "~95–99% Classification Accuracy",
        "Bag of Words Feature Extraction",
        "Real-Time Interactive Tkinter GUI"
      ],
      githubUrl: "https://github.com/jamunatg2006-sys",
      architectureNotes: "Text Pipeline: Raw Text -> CountVectorizer Feature Extraction -> Naive Bayes Classifier (~95-99% Acc) -> Interactive Tkinter Feedback."
    },
    {
      id: "sentinel-ai",
      title: "Sentinel AI",
      tagline: "Cybersecurity Threat Analytics & Incident Detection Framework",
      category: "ai-ml",
      status: "Prototype",
      featured: false,
      associatedOrg: "Atria",
      problem: "Traditional rule-based security information systems generate overwhelming alert fatigue and fail to identify nuanced, anomalous behavior patterns in network telemetry.",
      solution: "A cybersecurity threat intelligence engine that parses network logs, flags anomalous event signatures, and correlates telemetry with known vulnerability patterns.",
      myContribution: [
        "Researched security problem space and telemetry schemas for anomalous pattern identification.",
        "Built data parsing scripts for log ingestion and security feature extraction.",
        "Collaborated on visual threat dashboard demonstrating real-time alert triage."
      ],
      techStack: {
        aiMl: ["Python", "Scikit-Learn", "Anomaly Detection"],
        backend: ["Node.js", "REST APIs", "Python"],
        frontend: ["React.js", "Tailwind CSS", "Recharts"]
      },
      githubUrl: "https://github.com/jamunatg2006-sys/sentinal_ai-Jam"
    },
    {
      id: "physiopath",
      title: "PhysioPath",
      tagline: "Intelligent Physiotherapy Exercise Guidance & Recovery Tracker",
      category: "hackathon",
      status: "Prototype",
      featured: false,
      associatedOrg: "Nagarjuna College Hackathon",
      problem: "Patients undergoing rehabilitation frequently perform prescribed physical exercises with improper posture at home, leading to reinjury and delayed recovery due to lack of immediate feedback.",
      solution: "An interactive digital guidance platform that assists patients through rehabilitation routines with structured pose tracking feedback, progress logging, and recovery milestone analytics.",
      myContribution: [
        "Contributed to frontend user interface for exercise tracking and patient onboarding.",
        "Implemented responsive workout timeline and adherence dashboards.",
        "Worked on integrating pose-tracking feedback triggers into patient rehabilitation flows."
      ],
      techStack: {
        frontend: ["React.js", "Tailwind CSS", "Lucide React"],
        backend: ["Node.js", "Express.js"],
        other: ["Computer Vision Pose Feedback (MediaPipe Prototype)", "Patient Metrics"]
      },
      githubUrl: "https://github.com/vinayaka-112006/physiopath"
    },
    {
      id: "medisync-ai",
      title: "MediSyncAI",
      tagline: "Connected Healthcare Coordination & Clinical Record Synchronization",
      category: "hackathon",
      status: "Prototype",
      featured: false,
      associatedOrg: "NITTE Hackathon",
      problem: "Fragmented hospital data systems lead to miscommunicated patient histories, redundant diagnostic tests, and critical delays during emergency inter-department transfers.",
      solution: "A synchronized clinical coordination platform designed to unify patient summaries, flag drug-allergy interactions, and optimize clinical handoffs between departments.",
      myContribution: [
        "Engineered the patient profile synchronization interface and clinical status tags.",
        "Collaborated on backend API routes for patient records and lab status updates.",
        "Created an intuitive triage view for fast emergency ward decision-making."
      ],
      techStack: {
        frontend: ["React.js", "Tailwind CSS", "Chart.js"],
        backend: ["Node.js", "Express.js", "MongoDB"],
        other: ["Healthcare Interoperability Workflow", "REST APIs"]
      },
      githubUrl: "https://github.com/jamunatg2006-sys"
    }
  ],

  agenticLab: [
    {
      id: "agent-tool-orchestration",
      title: "Tool Orchestration & Multi-Step Reasoning",
      type: "Research Note",
      status: "Exploring",
      summary: "Studying how modern agent frameworks (LangGraph, ReAct) decompose developer prompts into structured tool executions and deterministic verification cycles.",
      components: ["LangGraph & ReAct", "Tool Calling Schemas", "Prompt Guardrails", "Error Recovery Loops"],
      insights: "Actively studying schema validation and verification guardrails in personal development sandboxes."
    },
    {
      id: "hybrid-rag-systems",
      title: "RAG Architectures & Vector Retrieval Systems",
      type: "Research Note",
      status: "Exploring",
      summary: "Exploring the progression from standard cosine similarity to hybrid retrieval (dense embeddings + lexical search) to power hallucination-resistant QA systems.",
      components: ["Vector Stores (FAISS/Chroma)", "Semantic Chunking", "Context Grounding", "Citation Mapping"],
      insights: "Building directly upon practical RAG implementation experience gained while engineering AbTalkAI."
    },
    {
      id: "multi-agent-coordination",
      title: "Multi-Agent Collaboration Patterns",
      type: "Research Note",
      status: "Exploring",
      summary: "Investigating how specialized multi-agent roles (Planner, Coder, Reviewer) pass state across shared memory to accomplish complex software workflows.",
      components: ["Role Specialization", "Shared Memory State", "Feedback Loops", "Agent Evaluation"],
      insights: "Analyzing how task decomposition into modular agents prevents context drift in large LLM prompts."
    }
  ],

  skills: [
    {
      category: "Programming Languages",
      description: "Core languages used across daily engineering, algorithm challenges, and backend architecture.",
      skills: [
        { name: "JavaScript (ES6+)", level: "Core", categoryContext: "Modern asynchronous workflows, Node.js engines, DOM manipulation" },
        { name: "TypeScript", level: "Core", categoryContext: "Strict type systems, generic interfaces, enterprise React & Next.js" },
        { name: "Python", level: "Core", categoryContext: "Data science, machine learning pipelines, algorithm implementation" },
        { name: "C / C++", level: "Proficient", categoryContext: "Data structures, algorithms, memory concepts, academic foundation" },
        { name: "SQL", level: "Proficient", categoryContext: "Relational queries, schema normalization, join optimization" }
      ]
    },
    {
      category: "Frontend & Web Engineering",
      description: "Modern component-driven UI architecture, state management, and performance-first web design.",
      skills: [
        { name: "React.js", level: "Core", categoryContext: "Component lifecycle, custom hooks, context, concurrent rendering" },
        { name: "Next.js (App Router)", level: "Advanced", categoryContext: "Server/Client components, SSR, static generation, API routes" },
        { name: "Tailwind CSS", level: "Core", categoryContext: "Design tokens, responsive layouts, micro-interaction styling" },
        { name: "HTML5 & Semantic Web", level: "Core", categoryContext: "Accessible markup, ARIA roles, modern semantic hierarchies" },
        { name: "CSS3 & Modern Layouts", level: "Core", categoryContext: "Flexbox, CSS Grid, animations, theme token architectures" },
        { name: "PWA & Offline Web", level: "Proficient", categoryContext: "Service Workers, Web App Manifests, offline caching" }
      ]
    },
    {
      category: "Backend & Systems",
      description: "Scalable server architectures, REST endpoints, database integrity, and security mechanisms.",
      skills: [
        { name: "Node.js & Express.js", level: "Core", categoryContext: "RESTful APIs, middleware chains, authentication, stream processing" },
        { name: "REST API Design", level: "Core", categoryContext: "HTTP semantics, rate limiting, error codes, payload contracts" },
        { name: "Authentication & Security", level: "Proficient", categoryContext: "JWT tokens, Bcrypt password hashing, input sanitization" },
        { name: "Backend Architecture", level: "Advanced", categoryContext: "Express REST APIs, middleware orchestration, DB migrations" }
      ]
    },
    {
      category: "Databases & Storage",
      description: "Relational, document, and vector databases optimized for consistency and query speed.",
      skills: [
        { name: "SQLite3", level: "Core", categoryContext: "Lightweight relational storage, table migrations, backup recovery" },
        { name: "MongoDB & Mongoose", level: "Proficient", categoryContext: "Document schemas, aggregation pipelines, MERN architectures" },
        { name: "Vector Databases", level: "Exploring", categoryContext: "ChromaDB, FAISS for dense vector indexing & similarity lookup" }
      ]
    },
    {
      category: "AI, Machine Learning & Agents",
      description: "Applied artificial intelligence, RAG systems, model evaluation, and emerging agentic workflows.",
      skills: [
        { name: "Supervised ML", level: "Advanced", categoryContext: "Classification, regression, cross-validation, feature engineering" },
        { name: "Scikit-Learn & Pandas", level: "Advanced", categoryContext: "Data manipulation, preprocessing pipelines, model evaluation" },
        { name: "Agentic AI & Tool Calling", level: "Exploring", categoryContext: "ReAct patterns, deterministic tool execution, loop orchestration" },
        { name: "RAG Architectures", level: "Proficient", categoryContext: "Document chunking, dense embeddings, context augmentation" },
        { name: "LLM Orchestration", level: "Exploring", categoryContext: "Prompt engineering, structured outputs, multi-turn state" }
      ]
    },
    {
      category: "Developer Tools & DevOps",
      description: "Tooling that powers rapid development cycles, version control, and continuous integration.",
      skills: [
        { name: "Git & GitHub", level: "Core", categoryContext: "Branching strategies, pull requests, collaborative versioning" },
        { name: "Vercel & CI/CD", level: "Proficient", categoryContext: "Continuous deployment, preview branches, environment variables" },
        { name: "Postman & API Testing", level: "Proficient", categoryContext: "Endpoint validation, payload simulation, automated tests" },
        { name: "Vite & Turbopack", level: "Proficient", categoryContext: "Modern fast bundlers, HMR, modular build configurations" }
      ]
    }
  ],

  experience: [
    {
      id: "htcl-developer",
      role: "Full Stack Developer",
      organization: "HTCL",
      location: "Bengaluru, India",
      period: "6 Months",
      duration: "6 Months",
      status: "Completed",
      companyOverview: "Enterprise Web Applications & Software Solutions",
      description: "6-month engagement as Full Stack Developer designing responsive client applications, developing RESTful APIs, optimizing relational and document database structures, and participating in collaborative production sprints.",
      bullets: [
        "Engineered responsive full-stack features using modern JavaScript/TypeScript, React, and Node.js.",
        "Built and integrated RESTful API endpoints with structured input validation and robust error handling.",
        "Designed and maintained database schemas, optimized query operations, and supported persistence workflows.",
        "Collaborated across agile sprints, contributing to code reviews, version control branching, and deployment cycles."
      ],
      technologies: ["JavaScript", "TypeScript", "React", "Node.js", "Express.js", "MongoDB", "SQL", "REST APIs", "Git"]
    },
    {
      id: "ornitech-solutions",
      role: "Full Stack Developer Intern",
      organization: "ORNITECH Solutions",
      location: "Bengaluru, India",
      period: "3 Months",
      duration: "3 Months",
      status: "Completed",
      companyOverview: "AI-Powered Web Applications, SaaS, and Digital Platforms",
      description: "Worked on AI-powered web applications and digital platforms, contributing to full-stack development, Generative AI model fallback, MongoDB persistence, authentication, API reliability, and production debugging across Shapentic and MyEntryPass.",
      bullets: [
        "Integrated Groq alongside Gemini in Shapentic to implement automatic multi-model fallback (Qwen 27B, GPT-OSS 20B/120B), preventing generation failures when hitting quota limits.",
        "Upgraded the Template Adapt pipeline contract to safely tolerate auxiliary AI design fields (motion, theme, animation) without breaking structured contract validation.",
        "Contributed to migrating database functionality from Supabase/PostgreSQL to MongoDB collections, adapting queries and services.",
        "Resolved MongoDB snapshot persistence errors in Advanced Creative Mode by encoding problematic dot-containing keys (e.g., page.home).",
        "Validated JWT-based authentication, session security, protected API endpoints, project saving, and dashboard persistence workflows.",
        "Conducted extensive architectural analysis and documentation for MyEntryPass, a multi-app ticketing platform (Attendee, Organizer, Gate Staff, Superadmin)."
      ],
      technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Google Gemini", "Groq", "JWT", "Tailwind CSS", "Redis/Upstash", "Docker", "REST APIs"],
      projects: [
        {
          name: "Shapentic",
          category: "Generative AI | Full-Stack SaaS",
          role: "Full Stack Developer Intern",
          overview: "AI-powered website-building platform allowing users to generate and customize websites through natural-language prompts across Direct Edit, Template Adapt, and Advanced Creative workflows.",
          technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Node.js", "REST APIs", "JWT", "Gemini", "Groq", "Tailwind CSS"],
          contributions: [
            {
              title: "AI Integration & Model Fallback",
              description: "Integrated Groq in src/lib/ai-clients.js and implemented automatic fallback from Gemini to Groq models (Qwen 27B, GPT-OSS 20B, GPT-OSS 120B) to eliminate generation failures when hitting quota or token limits.",
              codeRef: "src/lib/ai-clients.js"
            },
            {
              title: "Template Adaptation Contract & Output Validation",
              description: "Updated src/server/generation/template-adapt-contract.js to gracefully handle auxiliary creative fields (motion, theme, animation) without rejecting valid template adaptation requests.",
              codeRef: "src/server/generation/template-adapt-contract.js"
            },
            {
              title: "AI Model Registry & Provider Health",
              description: "Registered Groq capabilities (content generation, brand definition, code generation) in model-registry.js and model-health.js for reliable provider selection.",
              codeRef: "src/server/ai/model-registry.js"
            },
            {
              title: "MongoDB Migration & Data Persistence",
              description: "Contributed to transitioning database operations from Supabase/PostgreSQL to MongoDB, adapting document schemas and API routes.",
              codeRef: "src/server/db"
            },
            {
              title: "Advanced Creative Mode & Snapshot Handling",
              description: "Resolved INVALID_ADVANCED_PAGE_RUN_SNAPSHOT errors by encoding and normalizing dot-containing keys (e.g., page.home) before persisting to MongoDB.",
              codeRef: "src/server/db/services/advanced-page-run-service.js"
            },
            {
              title: "Authentication & Project Workflow Verification",
              description: "Verified JWT authentication, session handling, protected API routes, and end-to-end project persistence with the dashboard."
            },
            {
              title: "Frontend Debugging & Code Quality",
              description: "Fixed missing JSX navigation elements, syntax errors in AI clients, and ESLint rule violations."
            }
          ]
        },
        {
          name: "MyEntryPass",
          category: "Full-Stack Web Application | Digital Ticketing",
          role: "Full Stack Developer Intern — Architecture & Analysis",
          overview: "Global digital event ticketing and entry-pass platform managing event discovery, ticket bookings, payment processing, and QR-based venue check-in.",
          technologies: ["Node.js", "Express.js", "TypeScript", "Next.js", "React", "MongoDB", "Redis/Upstash", "JWT", "Razorpay", "Docker", "Kubernetes"],
          contributions: [
            {
              title: "Monorepo Architecture Analysis",
              description: "Analyzed multi-application repository structure spanning Attendee App, Organizer Portal, Gate Staff App, and Superadmin."
            },
            {
              title: "Backend API & TypeScript Exploration",
              description: "Mapped Express.js REST API routes, controllers, and business logic across ticketing and authentication workflows."
            },
            {
              title: "Payment & QR Verification Flows",
              description: "Examined Razorpay payment lifecycle and QR-based digital ticket verification mechanisms."
            },
            {
              title: "Technical Documentation",
              description: "Authored technical architecture, dependency mapping, and local deployment documentation."
            }
          ]
        }
      ]
    }
  ],

  achievements: [
    {
      id: "codeshack-runnerup",
      title: "2nd Place Winner — CodeShack Hackathon",
      event: "CodeShack Competitive Hackathon",
      year: "2024",
      rank: "2nd Place / Runner-Up",
      badgeType: "silver",
      description: "Awarded second place for building an advanced machine learning predictive model. Recognized by judges for rigorous feature engineering, robust cross-validation metrics, and compelling technical presentation.",
      tags: ["Machine Learning", "Hackathon", "2nd Place", "Python", "Predictive Modeling"]
    },
    {
      id: "civictrack-sjbit",
      title: "Top 10 Finalist (Top 9%) — SJBIT Hackathon",
      event: "SJBIT 48-Hour National Hackathon",
      year: "2024",
      rank: "Top 10 of 108 Teams",
      badgeType: "star",
      description: "Placed among the top 10 finalists out of 108 competing teams by conceptualizing, designing, and building 'CivicTrack' — a complete 6-dashboard civic complaint aggregation system — in 48 hours.",
      tags: ["CivicTech", "MERN Stack", "48-Hour Sprint", "Top 10 Finalist", "AI Aggregation"]
    },
    {
      id: "hackathon-collaborations",
      title: "Multi-Campus Technical Builder & Hackathon Finalist",
      event: "Inter-Collegiate Hackathons (Nagarjuna, NITTE, Atria)",
      year: "2024 - 2025",
      badgeType: "bronze",
      description: "Active participant in competitive project build sprints creating specialized software prototypes including PhysioPath, MediSyncAI, and Sentinel AI.",
      tags: ["Rapid Prototyping", "Full-Stack Development", "Collaborative Engineering"]
    }
  ],

  openSource: {
    githubProfile: "https://github.com/jamunatg2006-sys",
    gssocProfile: "https://gssoc.girlscript.org/profile/3809e4b8-a6a6-48db-b632-6fe4faa7d6b1",
    gssocScore: "9,718 Points",
    ethos: "I believe the best way to grow as a software engineer is to build in public, study real production architectures, and contribute to open developer tools that solve genuine user problems.",
    statsSummary: [
      { label: "GSSoC Score", value: "9,718 Pts" },
      { label: "Merged Pull Requests", value: "35+ Merged" },
      { label: "Open Source Programs", value: "GSSoC & NSoC" },
      { label: "Public Repositories", value: "45 Repos" }
    ],
    featuredContributions: [
      {
        repoName: "RatLoopz/sahidawa-india",
        prTitle: "Offline scan history sync, real-time cache invalidation & LASA check (PR #3894, #3217)",
        prUrl: "https://github.com/RatLoopz/sahidawa-india/pull/3894",
        description: "Open-source medicine verification platform. Implemented offline scan queue with background sync, bulk cron optimizations, and real-time medicine cache invalidation triggers.",
        tags: ["GSSoC '24", "JavaScript", "IndexedDB", "Offline PWA", "Cache Sync"]
      },
      {
        repoName: "ronisarkarexe/story-spark-ai",
        prTitle: "Stream AI story generation token-by-token using SSE (PR #3631)",
        prUrl: "https://github.com/ronisarkarexe/story-spark-ai/pull/3631",
        description: "Collaborative generative storytelling platform. Engineered Server-Sent Events (SSE) streaming pipeline for real-time token delivery to the reader interface.",
        tags: ["GSSoC '24", "TypeScript", "SSE Streaming", "LLM Pipelines"]
      },
      {
        repoName: "Bindu2020324/PromptPilot-AI",
        prTitle: "Prompt history panel & generator loading state fixes (PR #108, #113)",
        prUrl: "https://github.com/Bindu2020324/PromptPilot-AI/pull/108",
        description: "AI prompt engineering and management utility. Developed interactive prompt history drawer and resolved button debounce race conditions.",
        tags: ["Nexus Summer of Code (NSoC)", "React", "State Management", "UI"]
      },
      {
        repoName: "jamunatg2006-sys/VendorRisk-AI-Project",
        prTitle: "Dual-backend architecture & 10-factor weighted scoring implementation",
        prUrl: "https://github.com/jamunatg2006-sys/VendorRisk-AI-Project",
        description: "Open-source vendor risk evaluation platform combining Node.js vulnerability ingestion with Python multi-factor scoring.",
        tags: ["Open Source", "Node.js", "Python", "NVD API", "Security"]
      },
      {
        repoName: "jamunatg2006-sys/SILENT-SOS",
        prTitle: "PWA offline caching & accessible QR profile dispatcher",
        prUrl: "https://github.com/jamunatg2006-sys/SILENT-SOS",
        description: "Accessible emergency assistant PWA offering offline contact lookups and QR scan triggers for speech/hearing impaired individuals.",
        tags: ["Open Source", "React", "PWA", "Service Workers", "Accessibility"]
      },
      {
        repoName: "Yogesh23-03/CIVILTRACK",
        prTitle: "MERN urban complaint aggregation & community verification portal",
        prUrl: "https://github.com/Yogesh23-03/CIVILTRACK",
        description: "Participatory civic platform converting social discussions and duplicate complaints into actionable municipal tickets.",
        tags: ["Hackathon Build", "MERN", "OpenStreetMap", "Reddit API", "CivicTech"]
      }
    ]
  }
};
