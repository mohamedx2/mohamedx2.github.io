export const PORTFOLIO_DATA = {
  header: {
    established: "2024",
    title: "News of the Day",
    edition: "PORTFOLIO EDITION",
    volume: "VOL. 01 • NO. 2024",
    location: "MAHDIA, TUNISIA",
  },
  profile: {
    name: "MOHAMED ALI HAMROUN",
    title: "Full-Stack Developer & Systems Engineer",
    imageCaption: "Fig 1.0: Mohamed Ali Hamroun — Software Engineer & Researcher.",
    breakingText: "BREAKING: THE GRADUATE",
    imageSrc: "/profile.jpg", // Setting this to your own image
    paragraphs: [
      "I am a developer deeply passionate about building scalable web applications and exploring the intricate world of low-level engineering. My journey is defined by a relentless curiosity for how things work under the hood, leading me to master languages like Go and Nim alongside modern web stacks. I specialize in bridge engineering between high-level application logic and low-level performance optimization.",
      "Beyond standard development, I focus on framework engineering, LSM trees, and AI-driven automation. My academic tenure at the High School of Computer Science in Mahdia has been a crucible for refining my understanding of distributed systems and compiler internals. I aim to build resilient, elegant architectures that solve complex industrial challenges."
    ],
    quote: "Engineering is not just about solving problems; it's about the elegance of the architecture that survives them."
  },
  projects: [
    {
      id: "baraqex",
      title: "Baraqex — Full-Stack Framework",
      tag: "AWARD NOMINEE",
      badge: "PFE: GRADUATION PROJECT HIGHLIGHT",
      initial: "B",
      description: "A custom-built, high-performance full-stack framework engineered from scratch. Features a custom reactive rendering engine and file-based routing system, designed to eliminate boilerplate while maximizing runtime efficiency.",
      skills: ["TypeScript", "Framework Design", "Reactivity Engine"],
      imageSrc: "/logo.png",
      imageClass: "w-full h-auto object-contain bg-[#0F1115] p-2",
      highlight: false
    },
    {
      id: "renault",
      title: "Renault Axis — Internal Panel",
      tag: "ENTERPRISE SAAS",
      description: "An internal command panel leveraging an Nx monorepo and OCR technology to streamline industrial data processing. Engineered for high-stakes scalability.",
      skills: ["Nx", "OCR", "Node.js"],
      imageSrc: "/renault.png",
      imageClass: "w-full aspect-[4/3] object-cover object-left-top",
      highlight: false
    },
    {
      id: "ai-organizer",
      title: "Smart Event Organizer Agent",
      tag: "ARTIFICIAL INTELLIGENCE",
      description: "A sophisticated multi-agent AI system designed to coordinate complex events autonomously. Utilizes advanced LLM orchestration for logistics management.",
      skills: ["Python", "AI Agents", "LangChain"],
      imageSrc: "/ai-organizer.jpg",
      highlight: false,
      reverseLayout: true
    },
    {
      id: "db-engine",
      title: "Custom Database Engine",
      tag: "SYSTEMS PROGRAMMING",
      description: "A low-level storage engine implemented in Go using Log-Structured Merge-tree (LSM-tree) architecture. Features persistent storage with efficient indexing.",
      skills: ["Go", "LSM Trees", "Persistence"],
      imageSrc: "/db-engine.jpg",
      highlight: false
    }
  ],
  education: {
    institution: "High School of Computer Science",
    location: "Mahdia, Tunisia",
    degree: "Computer Science Graduate"
  },
  technicalLedger: [
    {
      category: "BACKEND & SYSTEMS",
      skills: ["GO", "NODE.JS", "NIM", "RUST"]
    },
    {
      category: "FRONTEND & FRAMEWORKS",
      skills: ["REACT", "NEXT.JS", "TYPESCRIPT", "SOLIDJS"]
    },
    {
      category: "INFRASTRUCTURE",
      skills: ["DOCKER", "AWS", "KUBERNETES", "POSTGRES"]
    },
    {
      category: "SPECIALIZED DOMAINS",
      skills: ["LSM TREES", "AI AGENTS", "COMPILERS", "FRAMEWORK ENG."]
    }
  ],
  focusAreas: [
    {
      number: "01",
      title: "AUTONOMOUS AGENTS",
      description: "Building self-orchestrating LLM systems that manage end-to-end workflows."
    },
    {
      number: "02",
      title: "INTERNAL TOOLING",
      description: "Designing developer-first CLI tools and internal frameworks that reduce cognitive load."
    },
    {
      number: "03",
      title: "STORAGE INTERNALS",
      description: "Deep architectural research into B-Trees, LSM Trees, and specialized storage persistence."
    }
  ],
  socials: [
    { name: "GITHUB", url: "https://github.com/mohamedx2" },
    { name: "LINKEDIN", url: "https://www.linkedin.com/in/mohamed-ali-hamroun-486573314/" },
    { name: "PORTFOLIO", url: "#" },
    { name: "RESUME", url: "#" }
  ],
  footerTags: ["Commencement", "Alumni Association", "University Press"],
  copyright: "© CLASS OF 2024 • THE ACADEMIC GAZETTE"
};