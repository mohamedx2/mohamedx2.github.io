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
    date?: string;
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
      image?: string;
    }[];
  }[];
  hackathons: {
    place: string;
    event: string;
    org: string;
    date: string;
    image: string;
  }[];
  openSource: {
    name: string;
    url: string;
  }[];
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
    established: "2026",
    title: "News of the Day",
    edition: "PORTFOLIO EDITION",
    volume: "VOL. 02 • NO. 2026",
    location: "SUSSE, TUNISIA",
  },
  profile: {
    name: "MOHAMED ALI HAMROUN",
    title: "Full-Stack Developer & Systems Engineer",
    imageCaption: "Fig 1.0: Mohamed Ali Hamroun — Software Engineer & Systems Architect.",
    breakingText: "ENGINEERING GRADUATE — CLASS OF 2026",
    imageSrc: "/profile.jpg",
    paragraphs: [
      "Full-stack developer and systems engineer with a passion for building things from the ground up — from custom JavaScript frameworks to lightweight database engines in Go. I thrive at the intersection of high-level application architecture and low-level performance optimization, where most engineers rarely venture.",
      "My work spans framework engineering, LSM-tree storage internals, real-time collaboration systems, and AI-driven automation. With multiple hackathon victories, open-source projects on npm, and hands-on experience leading GDG On Campus EPI as a Core Team Member, I bring both technical depth and community-driven leadership to every challenge."
    ],
    quote: "Engineering is not just about solving problems; it's about the elegance of the architecture that survives them."
  },
  projects: [
    {
      id: "baraqex",
      title: "Baraqex — Full-Stack JavaScript Framework",
      tag: "FLAGSHIP PROJECT",
      badge: "FRAMEWORK ENGINEERING • OPEN SOURCE",
      initial: "B",
      description: "Designed and implemented a custom JavaScript/TypeScript framework from scratch featuring a reactive JSX rendering engine, server-side rendering with hydration, file-based routing, and WebAssembly integration. Published on npm with live documentation.",
      skills: ["TypeScript", "JSX Engine", "SSR", "WebAssembly", "File-Based Routing", "Reactivity"],
      imageSrc: "/logo.png",
      imageClass: "w-full h-auto object-contain bg-[#0F1115] p-2",
      highlight: true,
      links: [
        { label: "LIVE", url: "https://baraqex.tech" },
        { label: "NPM", url: "https://npmjs.com/baraqex" },
        { label: "GITHUB", url: "https://github.com/mohamedx2/baraqex" }
      ]
    },
    {
      id: "coffre-fort",
      title: "Coffre-Fort Documentaire — AI Secure Document Platform",
      tag: "AI & SECURITY",
      description: "Enterprise document management system with fully local AI processing. Runs Ollama with Mistral 7B for document extraction, AI-powered summarization, granular access control, and audit logging. Dockerized with GPU acceleration support for production deployment.",
      skills: ["Ollama", "Mistral 7B", "Docker", "Access Control", "GPU Acceleration", "Audit Logging"],
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
      description: "Multi-tenant enterprise platform with OCR processing pipelines for industrial document workflows. Built on Nx monorepo architecture for scalable backend services and modular feature delivery.",
      skills: ["Nx Monorepo", "OCR Pipelines", "Node.js", "Multi-Tenant", "Enterprise Architecture"],
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
      description: "Real-time collaborative drawing platform inspired by Excalidraw. Features Socket.io bi-directional sync, event sourcing for state management, full undo/redo history, Redis caching, user authentication, and PostgreSQL persistence.",
      skills: ["Socket.io", "Event Sourcing", "Redis", "PostgreSQL", "Authentication", "Real-Time Sync"],
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
      description: "AI-powered application that converts natural language prompts into complete n8n Docker projects — generating workflows, environment configs, and deployment setups using local LLM inference.",
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
      description: "Custom database engine written in Go with transaction support, REST API interface, and CLI tooling. Implements storage persistence and indexing from first principles.",
      skills: ["Go", "Transactions", "REST API", "CLI Tools", "Storage Engine"],
      imageSrc: "/Capture d'écran 2026-07-18 210504.png",
      highlight: false,
      links: [
        { label: "LIVE", url: "https://dbgo.vercel.app" },
        { label: "GITHUB", url: "https://github.com/mohamedx2/dbgo" }
      ]
    },
    {
      id: "hamroun-express",
      title: "Hamroun-Express — Node.js Framework",
      tag: "FRAMEWORK ENGINEERING",
      description: "Lightweight Express-like backend framework featuring custom routing, middleware pipeline architecture, and extensibility hooks. Designed for minimal overhead with maximum developer ergonomics.",
      skills: ["Node.js", "Routing", "Middleware", "TypeScript", "Framework Design"],
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
      date: "2023 — Present",
      highlight: true
    },
    {
      institution: "Higher Institute of Computer Science",
      location: "Mahdia, Tunisia",
      degree: "Bachelor's Degree in Computer Science — Graduated with Honors",
      date: "2020 — 2023",
      highlight: false
    },
    {
      institution: "Lycée Aboulkacem Chebbi",
      location: "Medenine, Tunisia",
      degree: "Baccalaureate in Computer Science",
      date: "2020",
      highlight: false
    }
  ],
  achievements: [
    {
      category: "COMMUNITY LEADERSHIP",
      items: [
        {
          title: "GDG On Campus EPI — Core Team Member 2025–2026",
          description: "Certificate of Appreciation from Google Developer Group On Campus EPI for organizing technical events and promoting software development, AI, cloud technologies, and open-source initiatives.",
          image: "/med_ali_hamroun.png"
        },
        {
          title: "AWS Academy Graduate — Cloud Foundations",
          description: "Completed AWS Academy Cloud Foundations training covering cloud concepts, AWS services, security, architecture, and deployment fundamentals.",
          link: "https://www.credly.com/badges/b4fbc187-cb9e-4278-9e51-a32a38c8bec6/",
          image: "https://images.credly.com/size/680x680/images/e3541a0c-dd4a-4820-8052-5001006efc85/blob"
        }
      ]
    },
    {
      category: "TECHNICAL TRAINING",
      items: [
        {
          title: "Web Development with MERN Stack",
          date: "April 2025",
          description: "Practical training on full-stack application development with MongoDB, Express.js, React.js, and Node.js — including authentication flows and production deployment.",
          video: "/VID-20250503-WA0008(2).mp4"
        },
        {
          title: "Introduction to React.js Trainer — HackMingle 3 (ISIMA)",
          date: "December 2025",
          description: "Delivered hands-on React.js workshop covering component architecture, state management, hooks, and modern frontend patterns.",
          video: ""
        },
        {
          title: "React.js Trainer — Digital Minds Workshop",
          date: "February 2026",
          description: "Led advanced React.js training session on component composition, performance optimization, and production-grade frontend development.",
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
    { place: "2ND", event: "Fanous El Code Competition", org: "", date: "April 2026", image: "/IMG-20260415-WA0000.jpg" },
    { place: "3RD", event: "VibeShift Hackathon", org: "GDG Sousse × ISET Sousse", date: "May 9, 2026", image: "/1779015325352 (1).jpg" }
  ],
  openSource: [
    { name: "Baraqex Framework", url: "https://npmjs.com/baraqex" },
    { name: "Hamroun-Express", url: "https://github.com/mohamedx2/hamroun-express" },
    { name: "DBGO Database Engine", url: "https://github.com/mohamedx2/dbgo" },
    { name: "Whiteboard SaaS", url: "https://github.com/mohamedx2/white-board" },
    { name: "N8N SDK Agent", url: "https://github.com/mohamedx2/sdk-agent" },
    { name: "VS Code Extensions", url: "https://github.com/mohamedx2" }
  ],
  technicalLedger: [
    {
      category: "LANGUAGES",
      skills: ["GO", "TYPESCRIPT", "NODE.JS", "PYTHON", "NIM", "RUST", "SQL"]
    },
    {
      category: "FRAMEWORKS & LIBRARIES",
      skills: ["REACT", "NEXT.JS", "SOLIDJS", "EXPRESS", "SOCKET.IO", "LANGCHAIN"]
    },
    {
      category: "INFRASTRUCTURE & TOOLS",
      skills: ["DOCKER", "AWS", "KUBERNETES", "POSTGRESQL", "REDIS", "NX MONOREPO", "GIT"]
    },
    {
      category: "SPECIALIZED DOMAINS",
      skills: ["FRAMEWORK ENG.", "LSM TREES", "AI AGENTS", "OCR", "SSR / HYDRATION", "EVENT SOURCING"]
    }
  ],
  focusAreas: [
    {
      number: "01",
      title: "FRAMEWORK ENGINEERING",
      description: "Building custom runtime environments, reactive rendering engines, and developer-first abstractions from scratch."
    },
    {
      number: "02",
      title: "AI & AUTOMATION",
      description: "Deploying local LLM inference pipelines, multi-agent orchestration systems, and AI-powered developer tooling."
    },
    {
      number: "03",
      title: "STORAGE INTERNALS",
      description: "Deep architectural research into B-Trees, LSM Trees, write-ahead logging, and specialized persistence engines."
    }
  ],
  socials: [
    { name: "GITHUB", url: "https://github.com/mohamedx2" },
    { name: "LINKEDIN", url: "https://www.linkedin.com/in/mohamed-ali-hamroun-486573314/" },
    { name: "NPM", url: "https://npmjs.com/baraqex" },
    { name: "PORTFOLIO", url: "https://www.mohamedalihamroun.me" }
  ],
  footerTags: ["Full-Stack Development", "Systems Engineering", "Open Source"],
  copyright: "© 2026 MOHAMED ALI HAMROUN • ALL RIGHTS RESERVED"
};
