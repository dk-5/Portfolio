export const site = {
  name: "Dhruv Kothari",
  email: "kotharidhruvdjcsi@gmail.com",
  phone: "+91 86899 69951",
  github: "https://github.com/dk-5",
  linkedin: "https://www.linkedin.com/in/dhruv-kothari-3406b7239",
  resumeUrl: "#",
} as const;

export const heroTagline = `I'm a Software Engineer with a Bachelor's in Information Technology (GPA: 9.38/10) from DJ Sanghvi College of Engineering, and an incoming MCS student at UC Irvine. My experience spans backend engineering — building JWT-authenticated, role-based platforms and Redis-backed rate limiters handling 500+ concurrent clients — and AI/ML research, including leading a team that fine-tuned BLOOM-3B with LoRA and built a cross-lingual medical NLP pipeline published at IEEE MISSF 2026. I'm equally comfortable designing REST APIs and database schemas as I am training and evaluating language models, which lets me contribute across the SE, backend, and AI/ML stack.`;

export interface Project {
  name: string;
  description: string;
  problem: string;
  contribution: string;
  outcome: string;
  tech: string[];
  liveUrl?: string;
  repoUrl: string;
}

export const projects: Project[] = [
  {
    name: "Role-Based Room Booking Platform",
    description:
      "A scheduling platform with JWT authentication, role-based access control, and overlap-aware booking validation for educational institutions.",
    problem:
      "Manual scheduling caused frequent booking conflicts and inefficient administrative reporting across labs, classrooms, and offices.",
    contribution:
      "Designed and built the full backend: JWT auth, RBAC for Teachers, Lab Assistants, HODs, and Admins, overlap-aware booking engine, and automated reporting pipeline with MongoDB Aggregation and Nodemailer.",
    outcome:
      "Reduced booking conflicts by 40% and improved administrative reporting efficiency by 60% compared to the previous manual process.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Nodemailer"],
    liveUrl: "https://bookingsystem-bay.vercel.app/",
    repoUrl: "https://github.com/Dhruv10042004/bookingsystem",
  },
  {
    name: "Scalable API Rate Limiter",
    description:
      "A high-performance rate-limiting middleware using Redis atomic counters and TTL-based expiration for Express.js APIs.",
    problem:
      "Existing rate-limiting solutions relied on database lookups per request, creating bottlenecks under concurrent workloads.",
    contribution:
      "Engineered a Redis-backed rate limiter with atomic counters and TTL-based expiration, plus reusable middleware for auth, validation, and rate limiting.",
    outcome:
      "Reduced database lookups by over 90%, maintained sub-10ms request validation, and supported 500+ concurrent simulated clients with consistent enforcement.",
    tech: ["Node.js", "Express.js", "Redis", "MongoDB", "JWT"],
    repoUrl: "https://github.com/dk-5/API_RATE_LIMITER",
  },
  {
    name: "AssetsAlly",
    description:
      "An AI-powered portfolio analytics and investment management platform with real-time financial insights.",
    problem:
      "Retail investors lack accessible tools for portfolio tracking combined with AI-driven investment recommendations.",
    contribution:
      "Designed and developed the full-stack platform: secure portfolio tracking, asset management, Gemini AI investment recommendations, Alan AI voice navigation, and Twilio real-time notifications.",
    outcome:
      "Improved platform usability and engagement through AI-generated recommendations, voice-enabled navigation, and real-time alerts.",
    tech: ["Next.js", "MongoDB", "Clerk", "Gemini AI", "Alan AI", "Twilio"],
    repoUrl: "https://github.com/dk-5/Assest-Alley-hackathon-",
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    role: "Junior Research Lead",
    company: "DJ Init.AI",
    period: "Sep 2024 — Aug 2025",
    bullets: [
      "Led a 4-person research team to build a cross-lingual NLP pipeline for Hindi medical NER and QA using XLM-RoBERTa, IndicTrans2, and FAISS; published as first author at IEEE MISSF 2026.",
      "Achieved an 84.79% F1-score on a held-out 1,000-sentence Hindi test set and fine-tuned BLOOM-3B with LoRA across 11K+ Hindi QA pairs, reaching a 0.6958 BERTScore F1 with zero critical safety violations.",
    ],
  },
];

export interface Publication {
  title: string;
  venue: string;
  year: string;
  url: string;
}

export const publications: Publication[] = [
  {
    title:
      "Cross-Lingual Transfer Learning for Medical NER and Question Answering in Low-Resource Language (Hindi)",
    venue: "IEEE International Conference on Multidisciplinary Innovations for Smart & Sustainable Future (MISSF)",
    year: "2026",
    url: "https://ieeexplore.ieee.org/abstract/document/11522220",
  },
  {
    title:
      "Longformer-Powered SOP Assessment and University Admission Likelihood Predictor",
    venue: "IEEE International Conference on Sustainability, Innovation & Technology (ICSIT)",
    year: "2025",
    url: "https://ieeexplore.ieee.org/document/11294563",
  },
  {
    title:
      "LIME Explanation Integration for Real-Time Collision Detection Using Deep Learning",
    venue: "IEEE 6th Biennial International Conference on Nascent Technologies in Engineering (ICNTE)",
    year: "2026",
    url: "https://ieeexplore.ieee.org/document/11437415",
  },
];

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "Dart", "C", "SQL"],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Redis",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    category: "Frontend & Mobile",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS", "Flutter"],
  },
  {
    category: "AI & ML",
    skills: [
      "PyTorch",
      "Transformers",
      "RAG",
      "FAISS",
      "Scikit-learn",
      "OpenCV",
      "NumPy",
      "Pandas",
    ],
  },
  {
    category: "Developer Tools",
    skills: ["Git", "Docker", "Postman"],
  },
];

export const education = [
  {
    school: "University of California Irvine",
    location: "Irvine, California, USA",
    degree: "Master of Computer Science",
    period: "Sep 2026 — Dec 2027 (Expected)",
  },
  {
    school: "Dwarkadas J. Sanghvi College of Engineering",
    location: "Mumbai, India",
    degree: "Bachelor of Technology in Information Technology",
    period: "Aug 2022 — May 2026",
    gpa: "9.38 / 10.00",
  },
];
