"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Download,
  Terminal,
  Code2,
  Database,
  Cpu,
  BrainCircuit,
  ExternalLink,
  Award,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: <Code2 className="h-5 w-5 text-[var(--accent)]" />,
    items: ["C++", "JavaScript", "C", "Java", "Python"],
  },
  {
    title: "Frameworks",
    icon: <Terminal className="h-5 w-5 text-[var(--accent)]" />,
    items: [
      "HTML & CSS",
      "NodeJS",
      "React",
      "NumPy",
      "Scikit-learn",
      "LangChain",
      "TensorFlow",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Database className="h-5 w-5 text-[var(--accent)]" />,
    items: ["MySQL", "MongoDB", "Git", "REST APIs", "RAG"],
  },
  {
    title: "Soft Skills",
    icon: <BrainCircuit className="h-5 w-5 text-[var(--accent)]" />,
    items: [
      "Problem-Solving",
      "Team Player",
      "Project Management",
      "Adaptability",
    ],
  },
];

const projects = [
  {
    name: "Vibe - Emotion Detection System",
    date: "January 2025",
    summary:
      "Built a real-time facial emotion recognition system with OpenCV and DeepFace, then wrapped it in a Streamlit interface for live interaction and monitoring.",
    impact:
      "Demonstrated practical computer vision and deep learning deployment in a user-facing environment with smooth visualization and high usability.",
    tech: "Python, OpenCV, DeepFace, TensorFlow, Matplotlib, Streamlit",
    link: "https://github.com/rumita-mandal",
  },
  {
    name: "CineMind - Hybrid Movie Recommending Engine",
    date: "September 2025",
    summary:
      "Created a personalized movie recommendation engine that suggests titles from user preferences and content similarity.",
    impact:
      "Applied TF-IDF and cosine similarity to rank movie metadata effectively and improve relevance of recommendations.",
    tech: "Python, Pandas, NumPy, Scikit-learn, TF-IDF, Streamlit",
    link: "https://github.com/rumita-mandal",
  },
];

const certificates = [
  "Computation Theory: Language Principle and Finite Automata - Infosys (November 2025)",
  "C++ Programming and Data Structures and Algorithm - CSE Pathsala (July 2025)",
  "ChatGPT-4 Prompt Engineering - Infosys (August 2025)",
  "Packet Switching Networks and Algorithms - University of Colorado (November 2024)",
  "Peer-to-Peer Protocols and Local Area Network - University of Colorado (November 2024)",
  "Fundamentals of Network Communication - University of Colorado (November 2024)",
  "The Bits and Bytes of Computer Networking - Google (November 2024)",
];

const achievements = [
  {
    title: "Solved 150+ DSA questions on GeeksforGeeks",
    date: "September 2025",
    detail:
      "Strengthened problem-solving and critical-thinking through consistent practice.",
  },
  {
    title: "Secured position in S1 list at university",
    date: "November 2025",
    detail:
      "Recognized among 40,000+ students for strong academic performance and discipline.",
  },
];

const education = [
  {
    school: "Lovely Professional University",
    location: "Punjab, India",
    detail:
      "Bachelor of Technology in Computer Science and Engineering, CGPA: 7.9",
    date: "Since August 2023",
  },
  {
    school: "City Montessori School",
    location: "Uttar Pradesh, India",
    detail: "Intermediate, Percentile: 89",
    date: "April 2021 - March 2023",
  },
  {
    school: "City Montessori School",
    location: "Uttar Pradesh, India",
    detail: "Matriculation, Percentile: 92",
    date: "April 2019 - March 2021",
  },
];

const sectionMotion = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.2, 0.68, 0.1, 1],
    },
  },
};

const listMotion = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardMotion = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.2, 0.68, 0.1, 1],
    },
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text-primary)]">
      <motion.div
        className="page-glow page-glow-top"
        animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="page-glow page-glow-bottom"
        animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
        transition={{ duration: 11, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12 md:px-10 md:pt-16">
        <motion.section
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="mb-6 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[var(--text-muted)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">
              Portfolio
            </p>
          </div>
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="group rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8 shadow-[var(--soft-shadow)] md:p-12 hover:border-[var(--line-strong)] transition-colors duration-500"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]"></span>
              </span>
              <p className="font-heading text-xs font-medium uppercase tracking-[0.15em] text-[var(--accent)]">
                Rumita Mandal
              </p>
            </div>
            
            <h1 className="mt-6 max-w-3xl font-heading text-4xl leading-tight md:text-6xl font-medium tracking-tight">
              Building thoughtful products at the intersection of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-purple-400">
                software, data, and machine intelligence.
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-sm leading-8 text-[var(--text-secondary)] md:text-lg">
              Computer Science student focused on practical AI applications,
              strong software fundamentals, and clean user experiences. I enjoy
              turning ideas into functional products that solve real problems.
            </p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              variants={listMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              <motion.a
                variants={cardMotion}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/in/rumita-mandal-63a1a7293"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-3 text-sm font-semibold text-[var(--bg)] transition-colors duration-300 hover:bg-white/90"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </motion.a>
              <motion.a
                variants={cardMotion}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/rumita-mandal"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--surface-2)] px-6 py-3 text-sm font-semibold transition-colors duration-300 hover:bg-[var(--line)]"
              >
                <Github className="h-4 w-4" />
                GitHub
              </motion.a>
              <motion.a
                variants={cardMotion}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/cv%20of%20Rumita.doc"
                download
                className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-2)] px-6 py-3 text-sm font-semibold text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text-primary)] hover:border-[var(--line-strong)]"
              >
                <Download className="h-4 w-4" />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mt-16 grid gap-6 md:grid-cols-2"
          variants={listMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              variants={cardMotion}
              className="group rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-7 transition-colors duration-500 hover:border-[var(--line-strong)]"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface-2)]">
                  {group.icon}
                </div>
                <h2 className="font-heading text-xl font-medium">{group.title}</h2>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors group-hover:text-[var(--text-primary)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.section>

        <motion.section
          className="mt-16"
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
        >
          <header className="mb-6 flex items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface)] border border-[var(--line)]">
                <Cpu className="h-5 w-5 text-[var(--text-primary)]" />
              </div>
              <h2 className="font-heading text-3xl font-medium">Projects</h2>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Builds
            </span>
          </header>
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={listMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {projects.map((project) => (
              <motion.article
                key={project.name}
                variants={cardMotion}
                className="group relative flex flex-col justify-between rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8 transition-colors duration-500 hover:border-[var(--line-strong)]"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <h3 className="font-heading text-2xl font-medium">{project.name}</h3>
                    <span className="rounded-full border border-[var(--line)] bg-[var(--surface-2)] px-3 py-1 text-xs text-[var(--text-muted)]">
                      {project.date}
                    </span>
                  </div>
                  <p className="leading-relaxed text-sm text-[var(--text-secondary)]">
                    {project.summary}
                  </p>
                  <p className="mt-3 leading-relaxed text-sm text-[var(--text-secondary)]">
                    {project.impact}
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.split(", ").map((t) => (
                      <span key={t} className="text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--line)]">
                  <motion.a
                    whileHover={{ x: 4 }}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                  >
                    View Code
                    <ExternalLink className="h-4 w-4" />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.2fr]"
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col gap-6">
            <motion.article
              className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8 transition-colors duration-500 hover:border-[var(--line-strong)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-2)] border border-[var(--line)]">
                  <Award className="h-5 w-5 text-[var(--text-primary)]" />
                </div>
                <h2 className="font-heading text-2xl font-medium">Certificates</h2>
              </div>
              <motion.ul
                className="space-y-3"
                variants={listMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
              >
                {certificates.map((certificate) => (
                  <motion.li
                    key={certificate}
                    variants={cardMotion}
                    className="group flex gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] px-5 py-4 transition-colors hover:border-[var(--line-strong)]"
                  >
                    <div className="mt-0.5 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
                    <span className="text-sm tracking-tight text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                      {certificate}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.article>
          </div>

          <motion.div className="flex flex-col gap-6" variants={listMotion}>
            <motion.article
              variants={cardMotion}
              className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8 transition-colors duration-500 hover:border-[var(--line-strong)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-2)] border border-[var(--line)]">
                  <Sparkles className="h-5 w-5 text-[var(--text-primary)]" />
                </div>
                <h2 className="font-heading text-2xl font-medium">Achievements</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {achievements.map((item) => (
                  <li key={item.title} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-5">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs text-[var(--text-muted)]">{item.date}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              variants={cardMotion}
              className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8 transition-colors duration-500 hover:border-[var(--line-strong)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-2)] border border-[var(--line)]">
                  <GraduationCap className="h-5 w-5 text-[var(--text-primary)]" />
                </div>
                <h2 className="font-heading text-2xl font-medium">Education</h2>
              </div>
              <ul className="space-y-4">
                {education.map((item) => (
                  <li key={item.school + item.date} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-[var(--line)] last:before:hidden">
                    <span className="absolute left-[-4px] top-2 h-2 w-2 rounded-full border-2 border-[var(--bg)] bg-[var(--accent)]" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <p className="font-semibold text-[var(--text-primary)]">{item.school}</p>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
                        {item.date}
                      </p>
                    </div>
                    <p className="text-sm text-[var(--text-muted)]">{item.location}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.article>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}
