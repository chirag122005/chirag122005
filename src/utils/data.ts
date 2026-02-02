import type { Certification, Project, TechItem } from "@/types";

export const techStack: TechItem[] = [
  {
    name: "React",
    category: "Frontend",
    description: "Component-driven UI engineering with hooks",
    icon: "⚛️",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Type-safe frontends for maintainable code",
    icon: "🧩",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first styling with design precision",
    icon: "🎨",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Event-driven APIs with scalable performance",
    icon: "🟢",
  },
  {
    name: "Express",
    category: "Backend",
    description: "Robust REST services with middleware",
    icon: "🚀",
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "Flexible document store with aggregation",
    icon: "🍃",
  },
  {
    name: "Mongoose",
    category: "Database",
    description: "Schema modeling & validation for MongoDB",
    icon: "🧠",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    description: "Version control and collaborative workflows",
    icon: "🐙",
  },
  {
    name: "Postman",
    category: "Tools",
    description: "API testing & automation",
    icon: "📮",
  },
  {
    name: "VS Code",
    category: "Tools",
    description: "Daily driver for productivity and extensions",
    icon: "💻",
  },
];

export const projects: Project[] = [
  {
    id: "devflow",
    title: "DevFlow Tracker",
    description: "AI-ready project management dashboard for engineering teams.",
    stack: ["React", "Node", "MongoDB", "Socket.IO"],
    highlights: [
      "Realtime kanban updates with role-based access",
      "Analytics on sprint velocity and delivery metrics",
      "JWT auth ready with refresh tokens",
    ],
    github: "https://github.com/",
    demo: "https://devflow-demo.vercel.app",
  },
  {
    id: "campusconnect",
    title: "CampusConnect",
    description: "Full-stack community hub for hackathons, events, and placements.",
    stack: ["React", "Express", "MongoDB"],
    highlights: [
      "Event discovery feed with smart filters",
      "Admin dashboards for approvals and insights",
      "Integrated email notifications and alerts",
    ],
    github: "https://github.com/",
  },
  {
    id: "finpulse",
    title: "FinPulse",
    description: "Personal finance tracker with goal insights and budgeting.",
    stack: ["React", "Node", "MongoDB", "Recharts"],
    highlights: [
      "Expense categorization & forecasting",
      "Visual analytics powered by Recharts",
      "Secure data layer with role-based rules",
    ],
    github: "https://github.com/",
    demo: "https://finpulse.app",
  },
];

export const certifications: Certification[] = [
  {
    id: "meta",
    name: "Meta Front-End Developer",
    platform: "Coursera",
    year: "2024",
    summary: "Advanced React architecture, UX, and testing workflows.",
  },
  {
    id: "google-cloud",
    name: "Google Cloud Fundamentals",
    platform: "Google Cloud Skills Boost",
    year: "2023",
    summary: "Cloud-native foundations, IAM, and scalable deployments.",
  },
  {
    id: "mongodb",
    name: "MongoDB for Developers",
    platform: "MongoDB University",
    year: "2023",
    summary: "Schema design, aggregation, and performance tuning.",
  },
];

export const experience = {
  education: {
    title: "B.Tech Computer Science & Engineering",
    institution: "TechNova Institute of Technology",
    year: "2022 - 2026",
    cgpa: "CGPA: 8.7 / 10",
    achievements: ["Top 10% of cohort", "Hackathon finalist"],
  },
  work: {
    title: "Full-Stack Developer Intern",
    company: "Nimbus Labs",
    duration: "May 2024 - Aug 2024",
    responsibilities: [
      "Built MERN APIs for a logistics automation suite",
      "Implemented reusable UI kit and design system",
      "Optimized MongoDB queries for 35% faster reports",
    ],
  },
};

export const profile = {
  name: "Aarav Mehta",
  role: "Full Stack MERN Developer | CSE Undergraduate",
  tagline: "Building immersive web experiences with scalable backend systems.",
  about:
    "I’m a passionate Computer Science undergraduate who loves building scalable web applications using the MERN stack. I enjoy solving real-world problems, learning new technologies, and collaborating on impactful projects.",
  story:
    "From my first JavaScript project to shipping production-ready MERN apps, I have always been fascinated by the intersection of engineering and design. I focus on building products that feel premium, performant, and human-centric.",
  goals:
    "I’m currently exploring AI-driven experiences, cloud-native services, and developer tooling. My goal is to contribute to impactful products, collaborate with smart teams, and grow into a software engineer who ships at startup speed.",
  interests: ["Hackathons", "Open-source", "AI/ML", "Developer Communities", "UI/UX"],
  location: "Bengaluru, India",
  email: "aarav.mehta@devfolio.ai",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
};
