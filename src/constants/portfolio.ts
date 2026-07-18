interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  tag: string;
  badge?: string;
  initial?: string;
  description: string;
  skills: string[];
  imageSrc: string;
  imageClass?: string;
  highlight?: boolean;
  reverseLayout?: boolean;
  links?: ProjectLink[];
}

export type PortfolioData = {
  header: {
    established: string;
    title: string;
    edition: string;
    volume: string;
    location: string;
  };
  profile: {
    name: string;
    title: string;
    imageCaption: string;
    breakingText: string;
    imageSrc: string;
    paragraphs: string[];
    quote: string;
  };
  projects: Project[];
  education: {
    institution: string;
    location: string;
    degree: string;
    highlight?: boolean;
  }[];
  achievements: {
    category: string;
    items: {
      title: string;
      date?: string;
      description: string;
      video?: string;
      link?: string;
    }[];
  }[];
  hackathons: {
    place: string;
    event: string;
    org: string;
    date: string;
    image: string;
  }[];
  openSource: string[];
  technicalLedger: {
    category: string;
    skills: string[];
  }[];
  focusAreas: {
    number: string;
    title: string;
    description: string;
  }[];
  socials: { name: string; url: string }[];
  footerTags: string[];
  copyright: string;
};

export const PORTFOLIO_DATA: PortfolioData = {
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
    imageSrc: "/profile.jpg",
    paragraphs: [
      "I am a developer deeply passionate about building scalable web applications and exploring the intricate world of low-level engineering. My journey is defined by a relentless curiosity for how things work under the hood, leading me to master languages like Go and Nim alongside modern web stacks. I specialize in bridge engineering between high-level application logic and low-level performance optimization.",
      "Beyond standard development, I focus on framework engineering, LSM trees, and AI-driven automation. My academic tenure at the Higher Institute of Computer Science in Mahdia has been a crucible for refining my understanding of distributed systems and compiler internals. I aim to build resilient, elegant architectures that solve complex industrial challenges."
    ],
    quote: "Engineering is not just about solving problems; it's about the elegance of the architecture that survives them."
  },
  projects: [
    {
      id: "baraqex",
      title: "Baraqex — Full-Stack JavaScript Framework",
      tag: "OPEN SOURCE",
      badge: "FRAMEWORK ENGINEERING",
      initial: "B",
      description: "Designed and implemented a custom JavaScript/TypeScript framework providing JSX rendering, SSR, hydration, file-based routing, and WebAssembly integration. Focused on performance, developer experience, and modern framework architecture.",
      skills: ["TypeScript", "JSX", "SSR", "WebAssembly", "File-Based Routing"],
      imageSrc: "/logo.png",
      imageClass: "w-full h-auto object-contain bg-[#0F1115] p-2",
      highlight: false,
      links: [
        { label: "LIVE", url: "https://baraqex.tech" },
        { label: "NPM", url: "https://npmjs.com/baraqex" }
      ]
    },
    {
      id: "coffre-fort",
      title: "Coffre-Fort Documentaire — AI Secure Document Platform",
      tag: "AI & SECURITY",
      description: "Built an enterprise document management system with local AI processing using Ollama and Mistral 7B. Implemented document extraction, AI summarization, access control, audit logging, and Docker-based deployment with GPU acceleration support.",
      skills: ["Ollama", "Mistral 7B", "Docker", "Access Control", "GPU Acceleration"],
      imageSrc: "/Capture d'écran 2026-07-18 223432.png",
      highlight: false,
      links: [
        { label: "REPOSITORY", url: "https://github.com/mohamedx2/coffre-fort-documentaire" }
      ]
    },
    {
      id: "renault",
      title: "Renault Axis — OCR & Enterprise Platform",
      tag: "ENTERPRISE SAAS",
      description: "Developed OCR processing pipelines and enterprise features for a multi-tenant platform using modern web technologies. Integrated document processing workflows and scalable backend architecture.",
      skills: ["Nx", "OCR", "Node.js", "Multi-Tenant"],
      imageSrc: "/renault.png",
      imageClass: "w-full aspect-[4/3] object-cover object-left-top",
      highlight: false,
      links: [
        { label: "REPOSITORY", url: "https://github.com/mohamedx2/modulisation-project" }
      ]
    },
    {
      id: "whiteboard",
      title: "Collaborative Whiteboard SaaS",
      tag: "REAL-TIME COLLABORATION",
      description: "Created a real-time collaborative drawing platform inspired by Excalidraw. Implemented Socket.io synchronization, event sourcing, undo/redo history, Redis caching, authentication, and PostgreSQL persistence.",
      skills: ["Socket.io", "Event Sourcing", "Redis", "PostgreSQL", "Real-Time Sync"],
      imageSrc: "/Capture d'écran 2026-07-18 205105.png",
      highlight: false,
      reverseLayout: true,
      links: [
        { label: "REPOSITORY", url: "https://github.com/mohamedx2/white-board" }
      ]
    },
    {
      id: "n8n-generator",
      title: "N8N Project Generator — AI Workflow Builder",
      tag: "AI AUTOMATION",
      description: "Developed an AI application converting natural language prompts into complete n8n Docker projects with generated workflows, configurations, and environment setup using local LLM inference.",
      skills: ["Python", "n8n", "LLM Inference", "Docker", "Workflow Automation"],
      imageSrc: "/Capture d'écran 2026-07-18 223901.png",
      highlight: false,
      links: [
        { label: "REPOSITORY", url: "https://github.com/mohamedx2/sdk-agent" }
      ]
    },
    {
      id: "dbgo",
      title: "DBGO — Lightweight Database Engine",
      tag: "SYSTEMS PROGRAMMING",
      description: "Implemented a custom database engine in Go supporting transactions, REST APIs, and command-line tools.",
      skills: ["Go", "Transactions", "REST API", "CLI Tools"],
      imageSrc: "/Capture d'écran 2026-07-18 210504.png",
      highlight: false,
      links: [
        { label: "LIVE", url: "https://dbgo.vercel.app" }
      ]
    },
    {
      id: "hamroun-express",
      title: "Hamroun-Express — Node.js Framework",
      tag: "FRAMEWORK ENGINEERING",
      description: "Created a lightweight Express-like backend framework with routing, middleware architecture, and extensibility.",
      skills: ["Node.js", "Routing", "Middleware", "TypeScript"],
      imageSrc: "/Capture d'écran 2026-07-18 223020.png",
      highlight: false,
      links: [
        { label: "REPOSITORY", url: "https://github.com/mohamedx2/hamroun-express" }
      ]
    }
  ],
  education: [
    {
      institution: "EPI — École Polytechnique Internationale Privée de Sousse",
      location: "Sousse, Tunisia",
      degree: "Engineering Degree in Computer Science",
      highlight: true
    },
    {
      institution: "Higher Institute of Computer Science",
      location: "Mahdia, Tunisia",
      degree: "Bachelor's Degree in Computer Science — Graduated with Honors",
      highlight: false
    },
    {
      institution: "Lycée Aboulkacem Chebbi",
      location: "Medenine, Tunisia",
      degree: "Baccalaureate in Computer Science",
      highlight: false
    }
  ],
  achievements: [
    {
      category: "COMMUNITY LEADERSHIP",
      items: [
        {
          title: "GDG On Campus EPI — Core Team Member 2025–2026",
          description: "Received a Certificate of Appreciation from Google Developer Group On Campus EPI for contribution as a Core Team Member. Participated in organizing technical events and promoting software development, AI, cloud technologies, and open-source initiatives."
        },
        {
          title: "AWS Academy Graduate — Cloud Foundations",
          description: "Completed AWS Academy Cloud Foundations training covering cloud concepts, AWS services, security, architecture, and deployment fundamentals.",
          link: "https://www.credly.com/badges/b4fbc187-cb9e-4278-9e51-a32a38c8bec6/"
        }
      ]
    },
    {
      category: "TECHNICAL TRAINING",
      items: [
        {
          title: "Web Development with MERN Stack",
          date: "April 30, 2025",
          description: "Practical training focused on building full-stack applications using MongoDB, Express.js, React.js, and Node.js, including authentication and deployment.",
          video: "/VID-20250503-WA0008(2).mp4"
        },
        {
          title: "Introduction to React.js Trainer — HackMingle 3 (ISIMA)",
          date: "Dec 13–14, 2025",
          description: "Delivered practical React.js training covering components, state management, and modern frontend development.",
          video: ""
        },
        {
          title: "React.js Trainer — Digital Minds Workshop",
          date: "February 2026",
          description: "Delivered practical React.js training covering components, state management, and modern frontend development.",
          video: "/AQN349P0g9fTYqNvjWuKgQyFPUtlcUv5NB8LRkw1fgscBNgyeB2nxOhVCXIeM1Zkuh7VnQY9C2Odu5faFVQy3LfM2gL6nQRzOBC-Dug.mp4"
        }
      ]
    }
  ],
  hackathons: [
    { place: "1ST", event: "Survive Hackathon", org: "Club Apple EPI", date: "Feb 12–13, 2026", image: "/IMG_8581-56.JPG" },
    { place: "2ND", event: "Coding Moon Hackathon", org: "Club Microsoft EPI", date: "Feb 13–14, 2026", image: "/1771507509325.jpg" },
    { place: "2ND", event: "Digital Minds Hackathon", org: "EPI COPRO", date: "Feb 14–15, 2026", image: "/1771507509441.jpg" },
    { place: "2ND", event: "2Fast Problem-Solving Competition", org: "", date: "Nov 25, 2025", image: "/1771507509790.jpg" },
    { place: "2ND", event: "Fanous El Code Competition", org: "", date: "", image: "/IMG-20260415-WA0000.jpg" },
    { place: "3RD", event: "VibeShift Hackathon", org: "GDG Sousse × ISET Sousse", date: "May 9, 2026", image: "/1779015325352 (1).jpg" }
  ],
  openSource: [
    "VS Code Extensions",
    "Vite React QR Share",
    "Baraqex Framework",
    "Hamroun-Express",
    "DBGO Database Engine"
  ],
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
