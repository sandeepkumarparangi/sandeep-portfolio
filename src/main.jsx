import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Cpu,
  Database,
  Download,
  Edit3,
  FileText,
  Github,
  Layers3,
  Linkedin,
  LogOut,
  Mail,
  Menu,
  Moon,
  RotateCcw,
  Rocket,
  Save,
  ServerCog,
  ShieldCheck,
  Sun,
  Upload,
  X,
  Zap
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

const resumePath = "public/resume/sandeep-kumar-parangi-resume.pdf";
const linkedInUrl = "https://www.linkedin.com/in/sandeep-kumar-parangi-05655b126/";
const githubUrl = "https://github.com/sandeepkumarparangi";
const ownerStorageKey = "sandeep-portfolio-owner-profile";
const ownerAccessCode = "sandeep2026";

const defaultOwnerProfile = {
  name: "Sandeep Kumar Parangi",
  badge: "Open to work: West Des Moines | On-site & Hybrid",
  headline: "Full-Stack Developer | Java, Spring Boot, Angular, React | AWS Cloud",
  tagline:
    "Building secure APIs, CI/CD pipelines, microservices, REST APIs, and SQL-backed distributed systems for retail, telecom, and banking platforms.",
  aboutTitle: "Java full-stack delivery with cloud, security, and AI depth.",
  aboutCopy:
    "I design secure, observable, high-performance applications across retail, telecom, banking, and workforce-management environments.",
  aboutPrimary:
    "I am a Java Full-Stack Developer with 5+ years of experience building Spring Boot microservices, REST APIs, secure authentication flows, event-driven Kafka pipelines, SQL-backed services, and modern React and Angular interfaces.",
  aboutSecondary:
    "My recent work combines AWS cloud services, Kubernetes, CI/CD, SonarQube, SageMaker, and Python-based ML inference APIs to improve throughput, reduce defects, personalize commerce experiences, and forecast demand.",
  contactCopy:
    "Open to Java full-stack roles in West Des Moines and hybrid/on-site teams, with focus on secure APIs, AWS cloud, CI/CD, microservices, SQL, and AI-enabled enterprise workflows.",
  email: "sandeepparangi97@gmail.com",
  linkedin: linkedInUrl,
  github: githubUrl
};

const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Contact", "contact"]
];

const typingWords = ["Java", "Spring Boot", "Angular", "React", "AWS", "Kafka", "Secure APIs"];

const skills = [
  {
    title: "Backend",
    icon: ServerCog,
    accent: "from-cyan-400 to-blue-500",
    items: ["Java", "Spring Boot", "Microservices", "REST APIs", "Hibernate", "JPA", "gRPC"],
    level: 94
  },
  {
    title: "Frontend",
    icon: Code2,
    accent: "from-violet-400 to-fuchsia-500",
    items: ["React", "Angular", "TypeScript", "Tailwind CSS", "Redux", "HTML5", "CSS3"],
    level: 86
  },
  {
    title: "Cloud",
    icon: Cloud,
    accent: "from-sky-300 to-indigo-500",
    items: ["AWS EKS", "S3", "Lambda", "EC2", "CloudWatch", "DynamoDB", "RDS", "CloudFormation"],
    level: 90
  },
  {
    title: "Platforms",
    icon: Layers3,
    accent: "from-emerald-300 to-cyan-500",
    items: ["Docker", "Kubernetes", "Jenkins", "Kafka", "Redis", "Maven", "CI/CD"],
    level: 90
  },
  {
    title: "Data",
    icon: Database,
    accent: "from-amber-300 to-rose-500",
    items: ["MySQL", "PostgreSQL", "Oracle", "SQL Server", "DynamoDB", "Redshift", "Athena", "Query tuning"],
    level: 84
  },
  {
    title: "AI Integration",
    icon: Cpu,
    accent: "from-purple-300 to-cyan-400",
    items: ["Generative AI", "AI agents", "SageMaker", "Python ML", "Demand forecasting", "Recommendation engines"],
    level: 82
  }
];

const experience = [
  {
    period: "Mar 2025 - Present",
    role: "Software Development Engineer",
    company: "Costco Wholesale IT",
    summary:
      "Engineering high-volume retail microservices for order fulfillment, inventory reconciliation, member dashboards, and AI-powered demand forecasting across hybrid cloud environments.",
    metrics: ["32% throughput gain", "18% cart conversion lift", "35% defect reduction"],
    tags: ["Java", "Spring Boot", "Kafka", "AWS SageMaker", "React", "EKS"]
  },
  {
    period: "Sep 2021 - May 2023",
    role: "Software Engineer",
    company: "Virtusa | British Telecom",
    summary:
      "Designed telecom order-management microservices, Angular service portals, Kafka billing integrations, Azure-ready workloads, and optimized PostgreSQL reporting flows.",
    metrics: ["40% less manual handling", "30% reconciliation delay cut", "500K+ subscribers supported"],
    tags: ["Java", "Spring Boot", "Angular", "Kafka", "PostgreSQL", "Azure"]
  },
  {
    period: "Aug 2020 - Sep 2021",
    role: "Associate Engineer - Technology",
    company: "Virtusa | Citi Bank",
    summary:
      "Developed secure banking APIs, fraud-monitoring validation services, audit-ready backend logging, React reporting dashboards, and database optimization for settlement workflows.",
    metrics: ["20% settlement time cut", "Audit traceability", "High-volume transaction APIs"],
    tags: ["Java", "Spring MVC", "JWT", "React", "Oracle", "SQL Server"]
  },
  {
    period: "Jul 2018 - Jul 2020",
    role: "Software Developer",
    company: "Insight Global",
    summary:
      "Built Java and Spring Boot workforce-management services, C++ data-processing utilities, responsive React interfaces, payroll integrations, and monitored Docker/Jenkins release flows.",
    metrics: ["25% compute time reduction", "High-concurrency MySQL tuning", "Standardized release cycles"],
    tags: ["Java", "Spring Boot", "C++", "React", "Docker", "Jenkins"]
  }
];

const projects = [
  {
    title: "Retail Inventory Orchestration",
    description:
      "Cloud-native order fulfillment and inventory reconciliation platform using Java, Spring Boot, Kafka, Docker, Kubernetes, and AWS EKS for retail-scale operations.",
    stack: ["Java", "Spring Boot", "Kafka", "Docker", "AWS EKS"],
    icon: Rocket
  },
  {
    title: "Event-Driven Billing Pipeline",
    description:
      "Asynchronous telecom billing and CRM synchronization workflow that reduced reconciliation delays through Kafka topics, resilient consumers, and traceable event contracts.",
    stack: ["Kafka", "Microservices", "PostgreSQL", "Azure"],
    icon: Zap
  },
  {
    title: "AI Product Intelligence",
    description:
      "Recommendation and demand-forecasting layer using AWS SageMaker, Python inference APIs, Lambda, S3, and event-driven architecture to personalize product experiences.",
    stack: ["SageMaker", "Python", "AWS Lambda", "S3"],
    icon: Cpu
  },
  {
    title: "Telecom Provisioning Portal",
    description:
      "Secure customer-facing provisioning UI and service layer for large-scale telecom workflows with OAuth2, Angular, and optimized relational queries.",
    stack: ["Angular", "OAuth2", "Java", "PostgreSQL"],
    icon: BriefcaseBusiness
  },
  {
    title: "Banking Fraud & Reporting APIs",
    description:
      "Secure REST APIs, JWT authentication, rule-based fraud validation, audit-ready logging, and React reporting dashboards for digital banking operations.",
    stack: ["Java", "Spring MVC", "JWT", "React", "Oracle"],
    icon: Database
  }
];

const achievements = [
  ["AWS Certified Developer - Associate", "Issued Mar 2025, focused on cloud-native development, deployment, monitoring, and reliability."],
  ["Databricks Generative AI Fundamentals", "Academy accreditation in Generative AI fundamentals, issued Apr 2026."],
  ["Databricks AI Agent Fundamentals", "Academy accreditation in AI agent fundamentals, issued Apr 2026."],
  ["Walmart Advanced Software Engineering Simulation", "Forage job simulation, issued Jun 2025."],
  ["M.S. Computer and Information Systems Security", "University of Central Missouri."],
  ["M.Tech Computer Software Engineering", "Vellore Institute of Technology."]
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function useTyping(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const delay = deleting ? 48 : 92;
    const pause = !deleting && charIndex === current.length ? 1100 : delay;
    const timeout = window.setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setCharIndex((value) => value + 1);
        return;
      }
      if (!deleting && charIndex === current.length) {
        setDeleting(true);
        return;
      }
      if (deleting && charIndex > 0) {
        setCharIndex((value) => value - 1);
        return;
      }
      setDeleting(false);
      setWordIndex((value) => (value + 1) % words.length);
    }, pause);

    return () => window.clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  return words[wordIndex].slice(0, charIndex);
}

function getStoredOwnerProfile() {
  try {
    const saved = window.localStorage.getItem(ownerStorageKey);
    return saved ? { ...defaultOwnerProfile, ...JSON.parse(saved) } : defaultOwnerProfile;
  } catch {
    return defaultOwnerProfile;
  }
}

function useOwnerProfile() {
  const [profile, setProfile] = useState(defaultOwnerProfile);

  useEffect(() => {
    setProfile(getStoredOwnerProfile());
  }, []);

  function saveProfile(nextProfile) {
    setProfile(nextProfile);
    window.localStorage.setItem(ownerStorageKey, JSON.stringify(nextProfile));
  }

  function resetProfile() {
    setProfile(defaultOwnerProfile);
    window.localStorage.removeItem(ownerStorageKey);
  }

  return { profile, saveProfile, resetProfile };
}

function cleanResumeText(text) {
  return text
    .replace(/\u0000/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function getResumeLines(text) {
  return cleanResumeText(text)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function findSection(text, labels) {
  const lines = getResumeLines(text);
  const startIndex = lines.findIndex((line) => labels.some((label) => line.toLowerCase().includes(label)));
  if (startIndex === -1) return "";

  const stopLabels = [
    "experience",
    "employment",
    "education",
    "skills",
    "projects",
    "certifications",
    "achievements",
    "summary",
    "profile"
  ];
  const collected = [];
  for (let index = startIndex + 1; index < lines.length; index += 1) {
    const lower = lines[index].toLowerCase();
    if (collected.length && stopLabels.some((label) => lower === label || lower.startsWith(`${label} `))) break;
    collected.push(lines[index]);
    if (collected.join(" ").length > 700) break;
  }
  return collected.join(" ");
}

function pickName(lines, fallback) {
  const blocked = /resume|summary|profile|developer|engineer|email|phone|linkedin|github|java|spring|aws/i;
  return lines.find((line) => line.length >= 5 && line.length <= 48 && !blocked.test(line)) || fallback;
}

function pickHeadline(lines, fallback) {
  return (
    lines.find((line) => /java|spring|full.?stack|developer|engineer|aws|react|angular/i.test(line) && line.length <= 120) ||
    fallback
  );
}

function pickTopSkills(text) {
  const keywords = [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "Microservices",
    "REST APIs",
    "Angular",
    "React",
    "TypeScript",
    "JavaScript",
    "AWS",
    "EKS",
    "Lambda",
    "S3",
    "Kafka",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "CI/CD",
    "MySQL",
    "PostgreSQL",
    "Oracle",
    "SQL Server",
    "DynamoDB",
    "SageMaker",
    "Generative AI",
    "LLM",
    "RAG"
  ];
  const lower = text.toLowerCase();
  return keywords.filter((keyword) => lower.includes(keyword.toLowerCase())).slice(0, 9);
}

function pickCompanies(text) {
  return ["Costco", "Virtusa", "British Telecom", "Citi", "Insight Global"].filter((company) =>
    text.toLowerCase().includes(company.toLowerCase())
  );
}

function buildResumeProfile(text, currentProfile) {
  const cleaned = cleanResumeText(text);
  const lines = getResumeLines(cleaned);
  const email = cleaned.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0] || currentProfile.email;
  const linkedin = cleaned.match(/https?:\/\/(?:www\.)?linkedin\.com\/in\/[^\s)]+/i)?.[0] || currentProfile.linkedin;
  const github = cleaned.match(/https?:\/\/(?:www\.)?github\.com\/[^\s)]+/i)?.[0] || currentProfile.github;
  const years = cleaned.match(/(\d+\+?)\s*(?:years|yrs)/i)?.[1] || "5+";
  const skillsFromText = pickTopSkills(cleaned);
  const companies = pickCompanies(cleaned);
  const summary = findSection(cleaned, ["professional summary", "summary", "profile"]);
  const location = cleaned.match(/West Des Moines|Iowa|Des Moines|United States|USA/i)?.[0];
  const name = pickName(lines, currentProfile.name);
  const headline = pickHeadline(lines, currentProfile.headline);
  const skillsPhrase = skillsFromText.length ? skillsFromText.slice(0, 6).join(", ") : "Java, Spring Boot, React, Angular, AWS, and SQL";
  const companyPhrase = companies.length ? companies.join(", ") : "enterprise product teams";

  return {
    ...currentProfile,
    name,
    badge: location ? `Open to work: ${location} | On-site & Hybrid` : currentProfile.badge,
    headline,
    tagline: `Building secure, scalable software with ${skillsPhrase} across ${companyPhrase}.`,
    aboutTitle: `${years} years of Java full-stack delivery across cloud, APIs, and distributed systems.`,
    aboutCopy: summary || currentProfile.aboutCopy,
    aboutPrimary:
      summary ||
      `I am a Java Full-Stack Developer with ${years} years of experience building Spring Boot microservices, REST APIs, secure backend workflows, event-driven integrations, and modern React and Angular interfaces.`,
    aboutSecondary: `My resume highlights ${skillsPhrase}, with delivery across ${companyPhrase}. I focus on clean service boundaries, production reliability, CI/CD, SQL-backed systems, and cloud-ready architecture.`,
    contactCopy: `Open to roles aligned with ${skillsPhrase}. Reach out for full-stack Java, cloud, microservices, secure API, and enterprise platform opportunities.`,
    email,
    linkedin,
    github
  };
}

async function extractPdfText(arrayBuffer) {
  if (!window.pdfjsLib) throw new Error("PDF parser is still loading. Please try again.");
  window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  const pdf = await window.pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;
  const pages = [];
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    pages.push(content.items.map((item) => item.str).join(" "));
  }
  return pages.join("\n");
}

async function extractResumeText(file) {
  const extension = file.name.split(".").pop()?.toLowerCase();
  if (extension === "txt") return file.text();

  const arrayBuffer = await file.arrayBuffer();
  if (extension === "docx") {
    if (!window.mammoth) throw new Error("DOCX parser is still loading. Please try again.");
    const result = await window.mammoth.extractRawText({ arrayBuffer });
    return result.value;
  }
  if (extension === "pdf") return extractPdfText(arrayBuffer);

  throw new Error("Please upload a .docx, .pdf, or .txt resume.");
}

function Background() {
  const particles = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => ({
        id: index,
        left: `${(index * 29) % 100}%`,
        top: `${(index * 47) % 100}%`,
        delay: `${(index % 9) * 0.45}s`,
        duration: `${7 + (index % 7)}s`
      })),
    []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-night dark:bg-night">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.22),transparent_32rem),radial-gradient(circle_at_80%_10%,rgba(139,92,246,0.28),transparent_28rem),linear-gradient(135deg,#03050f_0%,#07142b_48%,#14091f_100%)]" />
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(110,231,249,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.10)_1px,transparent_1px)] bg-[size:80px_80px] animate-grid-drift" />
      <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-[8%] right-[6%] h-96 w-96 rounded-full bg-violet-500/20 blur-3xl animate-pulse-glow" />
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration
          }}
        />
      ))}
    </div>
  );
}

function Navbar({ theme, setTheme, profile }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" style={{ scaleX }} />
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-40 border-b transition-all duration-300",
          scrolled
            ? "border-white/10 bg-night/72 shadow-2xl shadow-black/30 backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-cyan-300/30 bg-white/10 font-heading text-sm font-bold text-cyan-100 shadow-glow backdrop-blur">
              SK
            </span>
            <span className="truncate font-heading text-sm font-bold tracking-normal text-white sm:text-base">
              {profile.name}
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1 backdrop-blur-xl lg:flex">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white">
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle color theme"
              className="icon-button"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation menu" className="icon-button lg:hidden">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-5 mb-4 grid rounded-2xl border border-white/10 bg-night/90 p-2 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-slate-200 hover:bg-white/10">
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </header>
    </>
  );
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p>
      <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {copy && <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">{copy}</p>}
    </motion.div>
  );
}

function Hero({ profile }) {
  const typed = useTyping(typingWords);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 lg:px-8">
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-night to-transparent" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-glow backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
            {profile.badge}
          </div>
          <h1 className="max-w-5xl font-display text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-2xl font-bold text-slate-100 sm:text-3xl">
            {profile.headline}
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            {profile.tagline}
          </p>
          <div className="mt-6 flex min-h-10 items-center font-mono text-lg font-bold text-cyan-200">
            <span className="mr-3 text-slate-500">&gt;</span>
            <span className="gradient-text">{typed}</span>
            <span className="ml-1 h-6 w-[2px] animate-pulse bg-cyan-200" />
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href={resumePath} download className="button-secondary">
              <Download size={18} /> Download Resume
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="button-secondary">
              <Linkedin size={18} /> LinkedIn Profile
            </a>
            <a href="#contact" className="button-ghost">
              Contact Me
            </a>
          </div>
          <div className="mt-12 grid max-w-3xl grid-cols-3 gap-3">
            {[
              ["5+", "Years"],
              ["1.3K+", "LinkedIn followers"],
              ["500+", "Connections"]
            ].map(([value, label]) => (
              <div key={label} className="glass-card rounded-lg p-4 text-center">
                <strong className="block font-heading text-2xl text-white sm:text-3xl">{value}</strong>
                <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative z-10 hidden lg:block"
        >
          <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/25 blur-3xl" />
          <div className="glass-card relative overflow-hidden rounded-3xl p-5">
            <img src="assets/java-portfolio-hero.png" alt="" className="aspect-[4/5] w-full rounded-2xl object-cover opacity-90" />
            <div className="absolute inset-5 rounded-2xl bg-gradient-to-t from-night via-night/20 to-transparent" />
            <div className="absolute bottom-9 left-9 right-9">
              <div className="rounded-2xl border border-white/10 bg-black/35 p-5 font-mono text-sm text-slate-200 backdrop-blur-xl">
                <p className="text-cyan-300">system.health()</p>
                <p className="mt-2 text-slate-300">latency: optimized</p>
                <p className="text-slate-300">events: streaming</p>
                <p className="text-violet-200">cloud: resilient</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About({ profile }) {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About Me"
        title={profile.aboutTitle}
        copy={profile.aboutCopy}
      />
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.article className="glass-card rounded-2xl p-7 sm:p-9" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-lg leading-9 text-slate-200">
            {profile.aboutPrimary}
          </p>
          <p className="mt-5 text-lg leading-9 text-slate-300">
            {profile.aboutSecondary}
          </p>
        </motion.article>
        <motion.div className="grid gap-5" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          {[
            "Java + Spring Boot secure microservices",
            "Angular, React, TypeScript dashboards",
            "AWS EKS, Lambda, S3, SageMaker, CloudWatch",
            "Kafka, CI/CD, Docker, Kubernetes, SonarQube"
          ].map((item) => (
            <div key={item} className="glass-card flex items-center gap-4 rounded-2xl p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-white shadow-glow">
                <CheckIcon />
              </span>
              <span className="font-semibold text-slate-100">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="currentColor" d="m9.4 16.6-4-4L4 14l5.4 5.4L20.5 8.3 19.1 7z" />
    </svg>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="LinkedIn-aligned skills for secure cloud-native systems."
        copy="Categorized skills reflecting Java, Spring Boot, Angular, React, AWS Cloud, CI/CD, secure APIs, microservices, REST APIs, and SQL delivery."
      />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.article
              key={skill.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.04 }}
              className="glass-card group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-glow"
            >
              <div className="flex items-center justify-between gap-4">
                <div className={cn("grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br text-white shadow-lg", skill.accent)}>
                  <Icon size={22} />
                </div>
                <span className="font-mono text-sm font-bold text-cyan-200">{skill.level}%</span>
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold text-white">{skill.title}</h3>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 }}
                  className={cn("h-full rounded-full bg-gradient-to-r", skill.accent)}
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-sm font-semibold text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Production impact across Costco, Virtusa, Citi, and Insight Global."
        copy="A timeline of roles focused on throughput, conversion, fraud monitoring, service modernization, cloud deployment, and reliable enterprise delivery."
      />
      <div className="mx-auto max-w-5xl">
        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-transparent md:block" />
          <div className="grid gap-6">
            {experience.map((job, index) => (
              <motion.article
                key={job.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08 }}
                className="relative md:pl-16"
              >
                <span className="absolute left-[13px] top-7 hidden h-4 w-4 rounded-full border-4 border-night bg-cyan-300 shadow-[0_0_26px_rgba(56,189,248,0.9)] md:block" />
                <div className="glass-card rounded-2xl p-6 transition hover:border-violet-300/35 hover:shadow-violet">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{job.period}</p>
                      <h3 className="mt-2 font-heading text-2xl font-bold text-white">{job.role}</h3>
                      <p className="mt-1 font-semibold text-violet-200">{job.company}</p>
                    </div>
                    <BriefcaseBusiness className="text-cyan-200" size={24} />
                  </div>
                  <p className="mt-5 leading-8 text-slate-300">{job.summary}</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {job.metrics.map((metric) => (
                      <div key={metric} className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-100">
                        {metric}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-cyan-300/10 px-3 py-1 font-mono text-xs font-bold text-cyan-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects({ profile }) {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Selected systems inspired by live production work."
        copy="Project cards now reflect LinkedIn experience across retail fulfillment, telecom billing, AI product intelligence, and secure banking/reporting platforms."
      />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="glass-card group relative overflow-hidden rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-glow"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl transition group-hover:bg-violet-400/20" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-white shadow-glow">
                    <Icon size={22} />
                  </div>
                  <div className="flex gap-2">
                    <a href={profile.github} target="_blank" rel="noreferrer" className="icon-button" aria-label={`${project.title} GitHub`}>
                      <Github size={17} />
                    </a>
                    <a href="#contact" className="icon-button" aria-label={`${project.title} live demo`}>
                      <ArrowRight size={17} />
                    </a>
                  </div>
                </div>
                <h3 className="mt-6 font-heading text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-4 leading-8 text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-sm font-semibold text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="section-shell">
      <SectionHeading eyebrow="Credentials" title="Cloud, AI, software engineering, and graduate training." />
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
        {achievements.map(([title, copy], index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass-card flex gap-5 rounded-2xl p-6"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-cyan-200">
              <Award size={22} />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-white">{title}</h3>
              <p className="mt-2 leading-7 text-slate-300">{copy}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Contact({ profile }) {
  return (
    <section id="contact" className="section-shell pb-10">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-3xl p-7 sm:p-9">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Contact</p>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
            Let&apos;s build the next reliable platform.
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            {profile.contactCopy}
          </p>
          <div className="mt-8 grid gap-3">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <Mail size={18} /> {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link">
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-7 sm:p-9"
          action={`mailto:${profile.email}`}
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field-label">
              Name
              <input name="name" className="field-input" placeholder="Your name" />
            </label>
            <label className="field-label">
              Email
              <input name="email" type="email" className="field-input" placeholder="you@example.com" />
            </label>
          </div>
          <label className="field-label mt-5">
            Message
            <textarea name="message" className="field-input min-h-40 resize-y" placeholder="Tell me about the role, platform, or product..." />
          </label>
          <button type="submit" className="button-primary mt-6 w-full sm:w-auto">
            Send Message <ArrowRight size={18} />
          </button>
        </motion.form>
      </div>
      <footer className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-sm text-slate-400 sm:flex-row">
        <p>© 2026 {profile.name}. Built with React, Tailwind CSS, and Framer Motion.</p>
        <div className="flex gap-2">
          <a href={`mailto:${profile.email}`} className="icon-button" aria-label="Email">
            <Mail size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-button" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="icon-button" aria-label="GitHub">
            <Github size={17} />
          </a>
        </div>
      </footer>
    </section>
  );
}

function OwnerEditor({ profile, saveProfile, resetProfile }) {
  const [open, setOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [draft, setDraft] = useState(profile);
  const [notice, setNotice] = useState("");
  const [isImportingResume, setIsImportingResume] = useState(false);

  useEffect(() => {
    setDraft(profile);
  }, [profile]);

  function updateField(field, value) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  function unlockEditor(event) {
    event.preventDefault();
    if (accessCode === ownerAccessCode) {
      setAuthenticated(true);
      setNotice("Owner edit mode unlocked.");
      return;
    }
    setNotice("Invalid owner code.");
  }

  function handleSave(event) {
    event.preventDefault();
    saveProfile(draft);
    setNotice("Saved in this browser.");
  }

  function handleReset() {
    resetProfile();
    setDraft(defaultOwnerProfile);
    setNotice("Reset to published defaults.");
  }

  function exportProfile() {
    const payload = JSON.stringify(draft, null, 2);
    navigator.clipboard?.writeText(payload);
    setNotice("Profile JSON copied.");
  }

  async function importResume(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsImportingResume(true);
    setNotice(`Reading ${file.name}...`);
    try {
      const resumeText = await extractResumeText(file);
      const nextDraft = buildResumeProfile(resumeText, draft);
      setDraft(nextDraft);
      setNotice("Resume imported. Review the fields, then click Save.");
    } catch (error) {
      setNotice(error.message || "Could not import this resume.");
    } finally {
      setIsImportingResume(false);
      event.target.value = "";
    }
  }

  return (
    <div className="owner-editor">
      <button type="button" className="owner-edit-button" onClick={() => setOpen((value) => !value)}>
        {open ? <X size={18} /> : <Edit3 size={18} />}
        <span>Owner Edit</span>
      </button>

      {open && (
        <motion.aside
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="owner-panel"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Owner</p>
              <h2 className="mt-1 font-heading text-xl font-bold text-white">Portfolio editor</h2>
            </div>
            <button type="button" className="icon-button" onClick={() => setOpen(false)} aria-label="Close owner editor">
              <X size={17} />
            </button>
          </div>

          {!authenticated ? (
            <form onSubmit={unlockEditor} className="mt-6">
              <label className="field-label">
                Owner code
                <input
                  value={accessCode}
                  onChange={(event) => setAccessCode(event.target.value)}
                  className="field-input"
                  type="password"
                  placeholder="Enter owner code"
                />
              </label>
              <button type="submit" className="button-primary mt-4 w-full">
                <ShieldCheck size={18} /> Unlock
              </button>
            </form>
          ) : (
            <form onSubmit={handleSave} className="mt-6 grid gap-4">
              <div className="resume-import-card">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Resume sync</p>
                  <h3 className="mt-1 font-heading text-lg font-bold text-white">Update content from resume</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Upload a `.docx`, `.pdf`, or `.txt` resume. The page extracts text in your browser and refreshes the editable draft.
                  </p>
                </div>
                <label className="resume-import-button">
                  {isImportingResume ? <FileText size={18} /> : <Upload size={18} />}
                  <span>{isImportingResume ? "Importing..." : "Import Resume"}</span>
                  <input type="file" accept=".docx,.pdf,.txt" onChange={importResume} disabled={isImportingResume} />
                </label>
              </div>

              {[
                ["name", "Name", "input"],
                ["badge", "Badge", "input"],
                ["headline", "Headline", "textarea"],
                ["tagline", "Tagline", "textarea"],
                ["aboutTitle", "About title", "textarea"],
                ["aboutCopy", "About subtitle", "textarea"],
                ["aboutPrimary", "About paragraph 1", "textarea"],
                ["aboutSecondary", "About paragraph 2", "textarea"],
                ["contactCopy", "Contact copy", "textarea"],
                ["email", "Email", "input"],
                ["linkedin", "LinkedIn URL", "input"],
                ["github", "GitHub URL", "input"]
              ].map(([field, label, type]) => (
                <label key={field} className="field-label">
                  {label}
                  {type === "textarea" ? (
                    <textarea
                      value={draft[field]}
                      onChange={(event) => updateField(field, event.target.value)}
                      className="field-input min-h-24 resize-y"
                    />
                  ) : (
                    <input
                      value={draft[field]}
                      onChange={(event) => updateField(field, event.target.value)}
                      className="field-input"
                    />
                  )}
                </label>
              ))}

              <div className="grid gap-3 sm:grid-cols-2">
                <button type="submit" className="button-primary">
                  <Save size={18} /> Save
                </button>
                <button type="button" className="button-secondary" onClick={exportProfile}>
                  <Download size={18} /> Export
                </button>
                <button type="button" className="button-ghost" onClick={handleReset}>
                  <RotateCcw size={18} /> Reset
                </button>
                <button type="button" className="button-ghost" onClick={() => setAuthenticated(false)}>
                  <LogOut size={18} /> Lock
                </button>
              </div>
            </form>
          )}

          {notice && <p className="mt-4 rounded-lg border border-cyan-200/20 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-100">{notice}</p>}
          <p className="mt-4 text-xs leading-6 text-slate-400">
            Edits are saved in this browser. Export the JSON when you want to make the same content permanent in GitHub.
          </p>
        </motion.aside>
      )}
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");
  const { profile, saveProfile, resetProfile } = useOwnerProfile();

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <Background />
      <Navbar theme={theme} setTheme={setTheme} profile={profile} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills />
        <Experience />
        <Projects profile={profile} />
        <Achievements />
        <Contact profile={profile} />
      </main>
      <OwnerEditor profile={profile} saveProfile={saveProfile} resetProfile={resetProfile} />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
