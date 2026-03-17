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
      ease: [0.2, 0.68, 0.1, 1] as const,
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
      ease: [0.2, 0.68, 0.1, 1] as const,
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

      <main className="mx-auto w-full max-w-6xl px-3 sm:px-5 pb-12 pt-6 md:px-10 md:pt-16 lg:pb-20">
        <motion.section
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="mb-4 sm:mb-6 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[var(--text-muted)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">
              Portfolio
            </p>
          </div>
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="group rounded-2xl sm:rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-7 md:p-10 lg:p-12 shadow-[var(--soft-shadow)] hover:border-[var(--line-strong)] transition-colors duration-500"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 sm:px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]"></span>
              </span>
              <p className="font-heading text-xs font-medium uppercase tracking-[0.15em] text-[var(--accent)]">
                Rumita Mandal
              </p>
            </div>
            
            <h1 className="mt-5 sm:mt-6 font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight font-medium tracking-tight">
              Building thoughtful products at the intersection of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-purple-400">
                software, data, and machine intelligence.
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 max-w-2xl text-xs sm:text-sm md:text-base leading-6 sm:leading-7 text-[var(--text-secondary)]">
              Computer Science student focused on practical AI applications,
              strong software fundamentals, and clean user experiences. I enjoy
              turning ideas into functional products that solve real problems.
            </p>

            <motion.div
              className="mt-6 sm:mt-8 md:mt-10 flex flex-col gap-3 sm:flex-row sm:gap-3 flex-wrap"
              variants={listMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              <motion.a
                variants={cardMotion}
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://www.linkedin.com/in/rumita-mandal-63a1a7293"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[var(--text-primary)] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-[var(--bg)] transition-all duration-300 hover:bg-white/90 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Linkedin className="h-4 w-4 relative z-10" />
                <span className="relative z-10">LinkedIn</span>
              </motion.a>
              <motion.a
                variants={cardMotion}
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://github.com/rumita-mandal"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--surface-2)] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-[var(--line)] hover:border-[var(--accent)]/50 active:scale-95 shadow-md hover:shadow-lg group"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                variants={cardMotion}
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="/cv%20of%20Rumita.doc"
                download
                className="flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-2)] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-[var(--text-secondary)] transition-all duration-300 hover:text-[var(--text-primary)] hover:border-[var(--line-strong)] hover:bg-[var(--line)] active:scale-95 shadow-md hover:shadow-lg group"
              >
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Download className="h-4 w-4" />
                </motion.span>
                <span>Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mt-10 sm:mt-12 md:mt-16 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2"
          variants={listMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillGroups.map((group, groupIdx) => (
            <motion.article
              key={group.title}
              variants={cardMotion}
              className="group rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6 transition-all duration-500 hover:border-[var(--line-strong)] overflow-hidden relative"
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 relative z-10">
                <motion.div 
                  className="flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface-2)] group-hover:border-[var(--accent)] transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  {group.icon}
                </motion.div>
                <motion.h2 
                  className="font-heading text-sm sm:text-lg md:text-xl font-medium group-hover:text-[var(--accent)] transition-colors duration-300"
                  whileHover={{ x: 2 }}
                >
                  {group.title}
                </motion.h2>
              </div>
              <motion.ul 
                className="flex flex-wrap gap-2 relative z-10"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                    }
                  }
                }}
              >
                {group.items.map((item, itemIdx) => (
                  <motion.li
                    key={item}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      show: { opacity: 1, scale: 1 }
                    }}
                    whileHover={{ 
                      y: -2, 
                      scale: 1.05,
                      boxShadow: "0 8px 16px rgba(var(--accent-rgb), 0.15)"
                    }}
                    className="rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-all duration-300 group-hover:text-[var(--text-primary)] group-hover:border-[var(--accent)]/50 cursor-pointer"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.article>
          ))}
        </motion.section>

        <motion.section
          className="mt-10 sm:mt-12 md:mt-16"
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
        >
          <header className="mb-5 sm:mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.div 
                className="flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center rounded-xl bg-[var(--surface)] border border-[var(--line)]"
                whileHover={{ rotate: -10, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Cpu className="h-4 sm:h-5 w-4 sm:w-5 text-[var(--text-primary)]" />
              </motion.div>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-medium">Projects</h2>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] self-start sm:self-auto">
              Builds
            </span>
          </header>
          <motion.div
            className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2"
            variants={listMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {projects.map((project, projectIdx) => (
              <motion.article
                key={project.name}
                variants={cardMotion}
                className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6 md:p-8 transition-all duration-500 hover:border-[var(--accent)]/50 overflow-hidden"
                whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[var(--accent)]/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex flex-col gap-3 mb-4">
                    <motion.h3 
                      className="font-heading text-base sm:text-lg md:text-xl font-medium leading-snug group-hover:text-[var(--accent)] transition-colors duration-300"
                      whileHover={{ x: 2 }}
                    >
                      {project.name}
                    </motion.h3>
                    <motion.span 
                      className="w-fit rounded-full border border-[var(--line)] bg-[var(--surface-2)] px-2.5 sm:px-3 py-1 text-xs text-[var(--text-muted)] group-hover:border-[var(--accent)]/50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.date}
                    </motion.span>
                  </div>
                  <p className="leading-relaxed text-xs sm:text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-secondary)]/90 transition-colors">
                    {project.summary}
                  </p>
                  <p className="mt-3 leading-relaxed text-xs sm:text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-secondary)]/90 transition-colors">
                    {project.impact}
                  </p>
                  
                  <motion.div 
                    className="mt-4 sm:mt-6 flex flex-wrap gap-2"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.08 }
                      }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {project.tech.split(", ").map((t) => (
                      <motion.span 
                        key={t} 
                        className="text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/10 px-2 sm:px-2.5 py-1 rounded-md border border-[var(--accent)]/20 group-hover:border-[var(--accent)]/50 transition-all"
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          show: { opacity: 1, scale: 1 }
                        }}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                <div className="mt-5 sm:mt-6 md:mt-8 pt-4 sm:pt-5 md:pt-6 border-t border-[var(--line)] relative z-10">
                  <motion.a
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors group-hover:text-[var(--accent)]"
                  >
                    View Code
                    <motion.span
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ExternalLink className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
                    </motion.span>
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="mt-10 sm:mt-12 md:mt-16 grid gap-5 sm:gap-6 lg:grid-cols-[1fr_1.2fr]"
          variants={sectionMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col gap-5 sm:gap-6">
            <motion.article
              className="rounded-2xl sm:rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6 md:p-8 transition-colors duration-500 hover:border-[var(--line-strong)] group"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
                <motion.div 
                  className="flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center rounded-xl bg-[var(--surface-2)] border border-[var(--line)]"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="h-4 sm:h-5 w-4 sm:w-5 text-[var(--text-primary)]" />
                </motion.div>
                <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-medium">Certificates</h2>
              </div>
              <motion.ul
                className="space-y-2 sm:space-y-3"
                variants={listMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
              >
                {certificates.map((certificate, idx) => (
                  <motion.li
                    key={certificate}
                    variants={cardMotion}
                    whileHover={{ x: 4 }}
                    className="group/item flex gap-3 rounded-xl sm:rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] px-3 sm:px-4 py-2.5 sm:py-3 transition-colors hover:border-[var(--line-strong)] cursor-pointer"
                  >
                    <motion.div 
                      className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, delay: idx * 0.1, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <span className="text-xs sm:text-sm leading-snug tracking-tight text-[var(--text-secondary)] group-hover/item:text-[var(--text-primary)] transition-colors">
                      {certificate}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.article>
          </div>

          <motion.div className="flex flex-col gap-5 sm:gap-6" variants={listMotion}>
            <motion.article
              variants={cardMotion}
              className="rounded-2xl sm:rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6 md:p-8 transition-colors duration-500 hover:border-[var(--line-strong)] group"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
                <motion.div 
                  className="flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center rounded-xl bg-[var(--surface-2)] border border-[var(--line)]"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-[var(--text-primary)]" />
                </motion.div>
                <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-medium">Achievements</h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {achievements.map((item, idx) => (
                  <motion.li 
                    key={item.title} 
                    className="rounded-xl sm:rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-3 sm:p-4 md:p-5 transition-all hover:border-[var(--accent)] hover:bg-[var(--surface-2)]/50 cursor-pointer group/achievement"
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ transitionDelay: `${idx * 0.1}s` }}
                  >
                    <p className="text-xs sm:text-sm font-semibold group-hover/achievement:text-[var(--accent)] transition-colors">{item.title}</p>
                    <p className="mt-1 text-xs text-[var(--text-muted)] font-medium">{item.date}</p>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                      {item.detail}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              variants={cardMotion}
              className="rounded-2xl sm:rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6 md:p-8 transition-colors duration-500 hover:border-[var(--line-strong)] group"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
                <motion.div 
                  className="flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center rounded-xl bg-[var(--surface-2)] border border-[var(--line)]"
                  whileHover={{ rotateY: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <GraduationCap className="h-4 sm:h-5 w-4 sm:w-5 text-[var(--text-primary)]" />
                </motion.div>
                <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-medium">Education</h2>
              </div>
              <ul className="space-y-4 sm:space-y-5 md:space-y-4">
                {education.map((item, idx) => (
                  <motion.li 
                    key={item.school + item.date} 
                    className="relative pl-5 sm:pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-[var(--line)] last:before:hidden group/edu"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                  >
                    <motion.span 
                      className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-[var(--bg)] bg-[var(--accent)]"
                      whileHover={{ scale: 1.3 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="flex flex-col sm:gap-1 cursor-pointer group-hover/edu:opacity-100 opacity-90 transition-opacity">
                      <p className="font-semibold text-xs sm:text-base text-[var(--text-primary)]">{item.school}</p>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)] mt-1">
                        {item.date}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">{item.location}</p>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                      {item.detail}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}
