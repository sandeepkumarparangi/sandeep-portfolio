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
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Rocket,
  ServerCog,
  Sun,
  X,
  Zap
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

const resumePath = "public/resume/sandeep-kumar-parangi-resume.pdf";
const linkedInUrl = "https://www.linkedin.com/in/sandeep-kumar-parangi-05655b126/";
const githubUrl = "https://github.com/sandeepkumarparangi";

const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Contact", "contact"]
];

const typingWords = ["Java", "Spring Boot", "Kafka", "AWS", "Microservices"];

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
    items: ["AWS EKS", "S3", "Lambda", "EC2", "CloudWatch", "DynamoDB", "RDS"],
    level: 88
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
    items: ["MySQL", "PostgreSQL", "Oracle", "MongoDB", "Query tuning", "Data modeling"],
    level: 84
  },
  {
    title: "AI Integration",
    icon: Cpu,
    accent: "from-purple-300 to-cyan-400",
    items: ["LLM APIs", "RAG", "Python ML", "AI recommendations", "Automation", "Observability"],
    level: 78
  }
];

const experience = [
  {
    period: "Mar 2025 - Present",
    role: "Full Stack Java Developer",
    company: "Costco Wholesale IT",
    summary:
      "Modernizing retail order, inventory, and warehouse orchestration with resilient Spring Boot services, React interfaces, Kafka streams, Redis caching, AWS EKS, and observability.",
    metrics: ["35% throughput gain", "28% dashboard latency reduction", "30% MTTR reduction"],
    tags: ["Spring Boot", "React", "Kafka", "AWS EKS", "Kubernetes"]
  },
  {
    period: "Sep 2021 - May 2023",
    role: "Software Engineer",
    company: "Virtusa | British Telecom",
    summary:
      "Built high-volume telecom provisioning services, secure APIs, Angular customer portals, Kafka event streams, Jenkins pipelines, and PostgreSQL performance improvements.",
    metrics: ["45% processing latency reduction", "40% release cycle reduction", "Millions of requests monthly"],
    tags: ["Angular", "OAuth2", "Kafka", "PostgreSQL", "Jenkins"]
  },
  {
    period: "Aug 2020 - Sep 2021",
    role: "Associate Engineer",
    company: "Virtusa | Citi Bank",
    summary:
      "Developed secure banking transaction services, REST integrations, Angular dashboards, RBAC workflows, microservice migration support, and robust automated testing.",
    metrics: ["85% test coverage", "RBAC security model", "Microservices migration"],
    tags: ["Spring Security", "Hibernate", "JUnit", "Mockito", "Oracle"]
  }
];

const projects = [
  {
    title: "Retail Inventory Orchestration",
    description:
      "Cloud-native inventory and order coordination platform using Spring Boot, Kafka, Redis, and AWS EKS for high-throughput retail workloads.",
    stack: ["Java", "Spring Boot", "Kafka", "Redis", "AWS EKS"],
    icon: Rocket
  },
  {
    title: "Event-Driven Billing Pipeline",
    description:
      "Asynchronous billing and fulfillment workflow that reduced distributed processing delays with Kafka topics, resilient consumers, and traceable event contracts.",
    stack: ["Kafka", "Microservices", "PostgreSQL", "Docker"],
    icon: Zap
  },
  {
    title: "AI-Assisted Product Intelligence",
    description:
      "LLM and RAG-enhanced recommendation layer for extracting signals from customer, product, and inventory data while keeping service boundaries clean.",
    stack: ["OpenAI APIs", "RAG", "Python", "Spring Boot"],
    icon: Cpu
  },
  {
    title: "Telecom Provisioning Portal",
    description:
      "Secure customer-facing provisioning UI and service layer for large-scale telecom workflows with OAuth2, Angular, and optimized relational queries.",
    stack: ["Angular", "OAuth2", "Java", "PostgreSQL"],
    icon: BriefcaseBusiness
  }
];

const achievements = [
  ["AWS Certified Developer Associate", "Cloud-native development, deployment, monitoring, and reliability."],
  ["5+ years building production platforms", "Retail, telecom, banking, and distributed enterprise systems."],
  ["Performance engineering impact", "Throughput, latency, release cadence, and MTTR improvements across services."],
  ["M.S. Computer Information Systems", "University of Central Missouri, Dec 2024."]
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

function Navbar({ theme, setTheme }) {
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
              Sandeep Kumar Parangi
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

function Hero() {
  const typed = useTyping(typingWords);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 lg:px-8">
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-night to-transparent" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-glow backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
            Senior Java Full Stack Developer
          </div>
          <h1 className="max-w-5xl font-display text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Sandeep Kumar Parangi
          </h1>
          <p className="mt-5 max-w-3xl text-2xl font-bold text-slate-100 sm:text-3xl">Senior Java Full Stack Developer</p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Building scalable microservices and event-driven systems with Java, Spring Boot, and AWS.
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
            <a href={linkedInUrl} target="_blank" rel="noreferrer" className="button-secondary">
              <Linkedin size={18} /> LinkedIn Profile
            </a>
            <a href="#contact" className="button-ghost">
              Contact Me
            </a>
          </div>
          <div className="mt-12 grid max-w-3xl grid-cols-3 gap-3">
            {[
              ["5+", "Years"],
              ["35%", "Throughput gain"],
              ["40%", "Delay reduction"]
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

function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About Me"
        title="Backend depth, product polish, and distributed-systems judgment."
        copy="I design and deliver secure, observable, high-performance applications across retail, telecom, and banking environments."
      />
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.article className="glass-card rounded-2xl p-7 sm:p-9" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-lg leading-9 text-slate-200">
            I am a Senior Java Full Stack Developer with 5+ years of experience building Spring Boot microservices, REST APIs, event-driven Kafka pipelines, cloud deployments, and modern React and Angular front ends. My work focuses on reliability, scalability, and clean service boundaries.
          </p>
          <p className="mt-5 text-lg leading-9 text-slate-300">
            Recently, I have been integrating AI and LLM-powered workflows into enterprise systems, including recommendation services, RAG patterns, and automation that turns complex operational data into faster decisions.
          </p>
        </motion.article>
        <motion.div className="grid gap-5" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          {["Java + Spring Boot microservices", "AWS EKS, Lambda, S3, CloudWatch", "Kafka, Redis, event-driven architecture", "AI/LLM integration and RAG workflows"].map((item) => (
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
        title="A modern Java stack for cloud-native products."
        copy="Categorized skills with practical depth across backend services, UI delivery, cloud platforms, data stores, and engineering automation."
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
        title="Production systems across retail, telecom, and banking."
        copy="A timeline of roles focused on service modernization, performance, cloud deployment, and reliable enterprise delivery."
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

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Selected systems with measurable engineering impact."
        copy="Project cards are shaped around production experience and ready to connect to GitHub or live demos when those URLs are available."
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
                    <a href={githubUrl} target="_blank" rel="noreferrer" className="icon-button" aria-label={`${project.title} GitHub`}>
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
      <SectionHeading eyebrow="Achievements" title="Certified, tested, and impact-oriented." />
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

function Contact() {
  return (
    <section id="contact" className="section-shell pb-10">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-3xl p-7 sm:p-9">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Contact</p>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
            Let&apos;s build the next reliable platform.
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            Available for senior full stack Java roles focused on microservices, cloud modernization, distributed systems, and AI-enabled enterprise workflows.
          </p>
          <div className="mt-8 grid gap-3">
            <a href="mailto:sandeepparangi97@gmail.com" className="contact-link">
              <Mail size={18} /> sandeepparangi97@gmail.com
            </a>
            <a href={linkedInUrl} target="_blank" rel="noreferrer" className="contact-link">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="contact-link">
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-7 sm:p-9"
          action="mailto:sandeepparangi97@gmail.com"
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
        <p>© 2026 Sandeep Kumar Parangi. Built with React, Tailwind CSS, and Framer Motion.</p>
        <div className="flex gap-2">
          <a href="mailto:sandeepparangi97@gmail.com" className="icon-button" aria-label="Email">
            <Mail size={17} />
          </a>
          <a href={linkedInUrl} target="_blank" rel="noreferrer" className="icon-button" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="icon-button" aria-label="GitHub">
            <Github size={17} />
          </a>
        </div>
      </footer>
    </section>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <Background />
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
