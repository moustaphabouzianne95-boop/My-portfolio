import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Braces,
  Code2,
  Gauge,
  ServerCog,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Moustapha Bouzianne",
  role: "Software Engineer",
  email: "moustaphabouzianne.95@gmail.com",
};

export type SocialLink = {
  id: "github" | "linkedin" | "email";
  label: string;
  href: string | null;
  placeholder: string;
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const highlights = [
  "Full-Stack Development",
  "Systems Thinking",
  "Clean Architecture",
  "Problem Solving",
];

export const skillGroups = [
  { title: "Programming", skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "SQL"] },
  { title: "Frontend", skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend & APIs", skills: ["Node.js", "Express", "Django", "FastAPI", "Spring Boot", "RESTful APIs"] },
  { title: "Databases", skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL", "NoSQL"] },
  { title: "DevOps & Tools", skills: ["Git", "GitHub", "Docker", "CI/CD"] },
  {
    title: "Software Engineering",
    skills: [
      "Software Architecture",
      "System Design",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Clean Code",
      "Problem Solving",
      "API Design",
      "Performance Optimization",
    ],
  },
];

export type FocusCard = { title: string; description: string; icon: LucideIcon };

export const engineeringFocus: FocusCard[] = [
  {
    title: "Software Architecture",
    description: "Designing software around clear responsibilities, maintainable components, and scalable architecture.",
    icon: Boxes,
  },
  {
    title: "Full-Stack Development",
    description: "Building complete applications across frontend, backend, APIs, databases, and deployment.",
    icon: Braces,
  },
  {
    title: "Systems & Performance",
    description: "Thinking about efficiency, scalability, reliability, and how software behaves under real-world constraints.",
    icon: Gauge,
  },
  {
    title: "Algorithms & Problem Solving",
    description: "Applying data structures, algorithms, and analytical thinking to solve complex problems efficiently.",
    icon: Code2,
  },
  {
    title: "API & Backend Engineering",
    description: "Designing robust RESTful services and backend systems with clean interfaces and reliable data flow.",
    icon: ServerCog,
  },
  {
    title: "DevOps & Deployment",
    description: "Using Git, Docker, CI/CD, and modern development workflows to build and ship software reliably.",
    icon: Workflow,
  },
];

export type PortfolioProject = {
  name: string;
  description: string;
  problem: string;
  solution: string;
  context: string;
  result: string;
  technologies: string[];
  features: string[];
  github: string;
  demo: string;
  standalone: string;
};

export const projects: PortfolioProject[] = [
  {
    name: "LangChain Website Concept",
    description: "An independent, interactive introduction to LangChain for developers and people exploring AI. It explains how language models connect with data, tools, and APIs through a single editorial-style experience.",
    problem: "LangChain information can be spread across extensive, advanced documentation, making it harder for newcomers to quickly understand what the framework does and how its parts fit together.",
    solution: "A responsive one-page guide that introduces the context journey, summarizes core capabilities, and brings integrations, code examples, and practical use cases together.",
    context: "Independent concept project, not affiliated with LangChain. All illustrated flows are explanatory and do not connect to a live AI model.",
    result: "Includes eight searchable integrations, four interactive use cases, Python and JavaScript examples, and a 341 KB offline single-file HTML edition. The supplied project notes report zero Axe violations across six tested states and no runtime errors or failed requests in the tested interaction scenarios.",
    technologies: ["React 18", "Vite 6", "JavaScript", "CSS", "Lucide React", "Playwright", "Axe", "Node.js", "GitHub Pages"],
    features: ["Animated context-flow illustration", "Searchable integrations guide", "Interactive use-case tabs", "Copyable Python and JavaScript examples", "Offline single-file export", "Reduced-motion support", "Automated accessibility and interaction tests"],
    github: "https://github.com/moustaphabouzianne95-boop/langchain-website",
    demo: "https://moustaphabouzianne95-boop.github.io/langchain-website/",
    standalone: "https://moustaphabouzianne95-boop.github.io/langchain-website/langchain.html",
  },
  {
    name: "PyTorch Community",
    description: "An independent, interactive introduction to PyTorch that presents the framework's capabilities and use cases, with beginner-friendly examples and an installation guide.",
    problem: "Beginners can face information overload across many sources and have difficulty finding installation instructions for their operating system and hardware or choosing tools to start machine-learning projects.",
    solution: "A single lightweight site brings together an environment-aware installation guide, copyable commands and code examples, and direct links to official documentation and specialist libraries.",
    context: "Independent educational project, not officially affiliated with the PyTorch Foundation. Code examples are presented for reference; machine-learning models do not run in the browser.",
    result: "Provides responsive mobile and desktop layouts, installation guidance by operating system and hardware platform, and examples introducing tensors, neural networks, and automatic differentiation.",
    technologies: ["HTML5", "CSS3", "JavaScript", "SVG", "Python", "PyTorch", "GitHub Pages"],
    features: ["Interactive OS and hardware installation guide", "Copyable setup commands and examples", "Tensor, neural network, and autograd examples", "Computer vision, NLP, and reinforcement learning use cases", "Lightweight static site with no backend"],
    github: "https://github.com/moustaphabouzianne95-boop/pytorch-community",
    demo: "https://moustaphabouzianne95-boop.github.io/pytorch-community/",
    standalone: "https://github.com/moustaphabouzianne95-boop/pytorch-community/blob/main/index.html",
  },
];

export const principles = [
  {
    title: "Understand the problem first.",
    description: "Good software starts with understanding the problem before choosing the technology.",
  },
  {
    title: "Keep it simple.",
    description: "Prefer simple and maintainable solutions over unnecessary complexity.",
  },
  {
    title: "Write code for people.",
    description: "Code should be readable, understandable, and easy to maintain.",
  },
  {
    title: "Keep learning.",
    description: "Software engineering is constantly evolving, so continuous learning is part of the job.",
  },
];

export const experienceItems = [
  {
    title: "MSc in Software Engineering",
    organization: "OXFORD",
    date: "",
    description: "Graduate study in Software Engineering.",
    technologies: [],
  },
];

export const socialLinks: SocialLink[] = [
  { id: "github", label: "GitHub", href: "https://github.com/moustaphabouzianne95-boop", placeholder: "GitHub profile" },
  { id: "linkedin", label: "LinkedIn", href: "https://fr.linkedin.com/", placeholder: "LinkedIn profile" },
  { id: "email", label: "Email", href: `mailto:${profile.email}`, placeholder: "Email address" },
];

export const aboutParagraphs = [
  `I'm ${profile.name}, a ${profile.role} focused on building reliable and scalable software solutions.`,
  "My experience spans frontend, backend, APIs, databases, and core software engineering. I enjoy working across different layers of a system and understanding how the pieces fit together—from architecture and algorithms to implementation and deployment.",
  "I value clean code, thoughtful architecture, performance, and maintainability. With a strong foundation in computer science and a polyglot approach to programming, I can adapt to different technologies and choose the right tools for the problem at hand.",
  "I'm always learning, experimenting with new technologies, and looking for opportunities to build software that solves real-world problems.",
];
