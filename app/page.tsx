"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Download,
  Terminal,
  Code2,
  Database,
  BrainCircuit,
  ExternalLink,
  Award,
  GraduationCap,
  Sparkles,
  Mail,
  Moon,
  Sun,
  Send,
  ArrowRight
} from "lucide-react";

// --- DATA ---
const skillGroups = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-indigo-500" />,
    items: ["C++", "JavaScript", "C", "Java", "Python"],
    grad: "from-indigo-500/20 to-blue-500/20",
    border: "group-hover:border-indigo-500/50"
  },
  {
    title: "Frameworks & AI",
    icon: <Terminal className="w-6 h-6 text-emerald-500" />,
    items: ["HTML/CSS", "Node.js", "React", "NumPy", "Scikit", "LangChain", "TensorFlow"],
    grad: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50"
  },
  {
    title: "Tools & DBs",
    icon: <Database className="w-6 h-6 text-fuchsia-500" />,
    items: ["MySQL", "MongoDB", "Git", "REST APIs", "RAG"],
    grad: "from-fuchsia-500/20 to-pink-500/20",
    border: "group-hover:border-fuchsia-500/50"
  },
  {
    title: "Core Skills",
    icon: <BrainCircuit className="w-6 h-6 text-amber-500" />,
    items: ["Problem-Solving", "Team Collaboration", "Management", "Adaptability"],
    grad: "from-amber-500/20 to-orange-500/20",
    border: "group-hover:border-amber-500/50"
  },
];

const projects = [
  {
    name: "Vibe - Emotion Detection",
    date: "January 2025",
    summary: "Real-time facial emotion recognition with OpenCV and DeepFace, wrapped in an interactive Streamlit dashboard.",
    impact: "Deployed a seamless user-facing computer vision solution with low latency monitoring.",
    tech: ["Python", "OpenCV", "DeepFace", "TensorFlow", "Streamlit"],
    link: "https://github.com/rumita-mandal",
    color: "from-blue-600 to-indigo-600"
  },
  {
    name: "CineMind Engine",
    date: "September 2025",
    summary: "Hybrid movie recommendation engine combining user preferences with content similarity and collaborative filtering.",
    impact: "Applied TF-IDF and cosine similarity for high-relevance catalog ranking and discovery.",
    tech: ["Python", "Pandas", "Scikit-learn", "TF-IDF"],
    link: "https://github.com/rumita-mandal",
    color: "from-emerald-600 to-teal-600"
  },
];

const milestones = [
  { type: "edu", title: "Lovely Professional University", subtitle: "B.Tech in CSE (CGPA: 8.01)", date: "2023 - Present", icon: <GraduationCap className="w-5 h-5"/> },
  { type: "cert", title: "Computation Theory & Finite Automata", subtitle: "Infosys", date: "Nov 2025", icon: <Award className="w-5 h-5"/> },
  { type: "achieve", title: "S1 List Position", subtitle: "Top academic performance among 40k+ students", date: "Nov 2025", icon: <Sparkles className="w-5 h-5"/> },
  { type: "cert", title: "ChatGPT-4 Prompt Engineering", subtitle: "Infosys", date: "Aug 2025", icon: <Award className="w-5 h-5"/> },
  { type: "cert", title: "C++ Programming & DSA", subtitle: "CSE Pathsala", date: "Jul 2025", icon: <Award className="w-5 h-5"/> },
  { type: "edu", title: "City Montessori School", subtitle: "Intermediate (89%)", date: "2021 - 2023", icon: <GraduationCap className="w-5 h-5"/> },
];

export default function Home() {
  const [theme, setTheme] = useState("dark"); // "dark" | "light"

  const isDark = theme === "dark";
  const bgMain = isDark ? "bg-[#050505]" : "bg-zinc-50";
  const textMain = isDark ? "text-white" : "text-zinc-900";
  const textMuted = isDark ? "text-zinc-400" : "text-zinc-500";
  const cardBg = isDark ? "bg-white/[0.02]" : "bg-white";
  const cardBorder = isDark ? "border-white/[0.05]" : "border-zinc-200";
  const cardHoverBg = isDark ? "hover:bg-white/[0.04]" : "hover:bg-zinc-50";

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out ${bgMain} ${textMain} selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden font-sans`}>
      
      {/* Ambient Backgrounds */}
      {isDark ? (
        <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      ) : (
        <>
          <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="fixed inset-0 z-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-multiply" />
        </>
      )}

      {/* Floating Theme / Nav Bar */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 px-6 py-3.5 rounded-full backdrop-blur-2xl border ${isDark ? 'bg-white/5 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]' : 'bg-white/60 border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]'} transition-all`}
      >
        <div className="flex items-center gap-2 pr-6 border-r border-current opacity-80">
          <span className="font-extrabold text-xl tracking-tighter">RM<span className="text-indigo-500">.</span></span>
        </div>
        
        <div className="hidden sm:flex items-center gap-8 text-sm font-bold tracking-wide">
          <a href="#about" className={`${textMuted} hover:${textMain} hover:scale-105 transition-all`}>About</a>
          <a href="#projects" className={`${textMuted} hover:${textMain} hover:scale-105 transition-all`}>Projects</a>
          <a href="#skills" className={`${textMuted} hover:${textMain} hover:scale-105 transition-all`}>Skills</a>
          <a href="#contact" className={`${textMuted} hover:${textMain} hover:scale-105 transition-all`}>Contact</a>
        </div>

        <button 
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className={`p-2.5 rounded-full transition-all hover:scale-110 active:scale-95 ${isDark ? 'bg-white/10 hover:bg-white/20 text-yellow-300' : 'bg-black/5 hover:bg-black/10 text-indigo-600'} shadow-inner`}
        >
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><Sun className="w-4 h-4" /></motion.div>
            ) : (
              <motion.div key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><Moon className="w-4 h-4" /></motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 pt-48 pb-32 flex flex-col gap-40">
        
        {/* HERO SECTION */}
        <section id="about" className="relative flex flex-col items-start min-h-[60vh] justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, bounce: 0.4, type: "spring" }}
            className={`inline-flex items-center gap-3 px-4 py-2 rounded-full mb-10 border backdrop-blur-md shadow-sm ${isDark ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-200'}`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className={`text-[11px] font-bold tracking-[0.2em] uppercase ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>Available for work</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-[6rem] font-black tracking-tighter mb-8 leading-[1.05]"
          >
            Crafting code <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x bg-[length:200%_auto]">
              infused with AI.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl sm:text-2xl ${textMuted} max-w-2xl leading-relaxed mb-12 font-medium`}
          >
            I&apos;m <strong className={`${textMain} font-black`}>Rumita Mandal</strong>, a Computer Science student dedicated to blending software engineering fundamentals with modern AI to solve real-world problems gracefully.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-5 mb-16"
          >
            <a href="https://github.com/rumita-mandal" target="_blank" className={`group flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-white text-black hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)]' : 'bg-black text-white hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]'}`}>
              <Github className="w-5 h-5 transition-transform group-hover:rotate-12" /> Explore Work
            </a>
            <a href="https://www.linkedin.com/in/rumita-mandal-63a1a7293" target="_blank" className={`flex items-center gap-3 p-4 rounded-full border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isDark ? 'border-white/20 hover:bg-white/10 hover:border-white/40' : 'border-black/20 hover:bg-black/5 hover:border-black/40'}`}>
              <Linkedin className="w-5 h-5 text-current" />
            </a>
            <a href="/cv%20of%20Rumita.doc" download className={`flex items-center gap-3 p-4 rounded-full border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isDark ? 'border-white/20 hover:bg-white/10 hover:border-white/40 text-current' : 'border-black/20 hover:bg-black/5 hover:border-black/40 text-current'}`}>
              <Download className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          >
            <span className={`text-xs font-bold uppercase tracking-widest ${textMuted}`}>Scroll</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className={`w-[1px] h-12 ${isDark ? 'bg-gradient-to-b from-white/40 to-transparent' : 'bg-gradient-to-b from-black/40 to-transparent'}`}
            />
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-40">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">Featured Projects</h2>
            <div className={`flex-1 h-[2px] ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
          </motion.div>

          <div className="flex flex-col gap-12 sm:gap-20">
            {projects.map((project) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`group relative overflow-hidden rounded-[2.5rem] ${cardBg} border ${cardBorder} ${cardHoverBg} hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-2xl`}
              >
                {/* Accent Background Glow overlay */}
                <div className={`absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-br ${project.color} blur-[120px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none`} />
                <div className={`absolute bottom-0 left-0 w-[30vw] h-[30vh] bg-gradient-to-tr ${project.color} blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 delay-100 pointer-events-none`} />

                <div className="p-8 sm:p-12 md:p-16 flex flex-col md:flex-row gap-8 md:gap-16 relative z-10">
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <span className={`h-[2px] w-10 ${isDark ? 'bg-indigo-400' : 'bg-indigo-600'} rounded-full`} />
                      <span className={`text-sm font-bold uppercase tracking-widest ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>{project.date}</span>
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">{project.name}</h3>
                    <p className={`${textMuted} text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-medium`}>{project.summary}</p>
                    
                    <div className="mt-auto">
                      <a href={project.link} target="_blank" className={`inline-flex items-center gap-2 pb-1 border-b-2 border-transparent hover:border-indigo-500 font-bold text-indigo-500 transition-colors group/link text-lg`}>
                        View Case Study <ExternalLink className="w-5 h-5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div className={`md:w-5/12 p-8 sm:p-10 rounded-[2rem] flex flex-col justify-between ${isDark ? 'bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-white/80 backdrop-blur-xl border border-zinc-200 shadow-xl'}`}>
                    <div>
                      <span className="flex items-center gap-2 text-sm font-bold mb-4 uppercase tracking-widest opacity-60">
                        <Sparkles className="w-4 h-4" /> Impact
                      </span>
                      <p className="text-base font-semibold leading-relaxed">{project.impact}</p>
                    </div>
                    <div className="mt-10 pt-8 border-t border-current opacity-90 flex flex-wrap gap-2.5">
                      {project.tech.map((t) => (
                        <span key={t} className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide shadow-sm transition-transform hover:scale-105 ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/5 text-black hover:bg-black/10'}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* DYNAMIC SKILLS */}
        <section id="skills" className="scroll-mt-40">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">Capabilities</h2>
            <div className={`flex-1 h-[2px] ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {skillGroups.map((group, idx) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`group relative p-8 sm:p-10 rounded-[2.5rem] ${cardBg} border ${cardBorder} ${group.border} overflow-hidden transition-all duration-500 shadow-lg hover:shadow-2xl`}
              >
                <div className={`absolute top-0 right-0 w-72 h-72 bg-gradient-to-br ${group.grad} blur-[80px] opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none delay-75`} />
                
                <div className={`mb-10 inline-flex p-5 rounded-2xl border backdrop-blur-md ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-md relative z-10`}>
                  {group.icon}
                </div>
                
                <h3 className="text-3xl font-black mb-8 relative z-10 tracking-tight">{group.title}</h3>
                <div className="flex flex-wrap gap-3 relative z-10 sm:w-11/12">
                  {group.items.map((item, i) => (
                    <motion.span 
                      key={item} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ delay: 0.1 + (i * 0.05) }}
                      className={`px-4 py-2 rounded-xl text-sm font-bold border backdrop-blur-sm shadow-sm cursor-default transition-colors ${isDark ? 'bg-black/40 border-white/10 text-neutral-200 hover:border-white/30 hover:bg-black/60' : 'bg-white/60 border-zinc-200 text-zinc-800 hover:border-zinc-400 hover:bg-white'}`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="scroll-mt-40">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight flex items-center gap-4">
              <GraduationCap className={`w-10 h-10 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} /> Education
            </h2>
            <div className={`flex-1 h-[2px] ${isDark ? 'bg-gradient-to-r from-white/10 to-transparent' : 'bg-gradient-to-r from-black/10 to-transparent'}`} />
          </motion.div>

          <div className="max-w-4xl space-y-6 relative">
            <div className={`absolute left-[38px] top-6 bottom-6 w-1 rounded-full ${isDark ? 'bg-gradient-to-b from-indigo-500/50 via-purple-500/20 to-transparent' : 'bg-gradient-to-b from-indigo-300 via-purple-200 to-transparent'} hidden sm:block`} />
            
            {milestones.filter(m => m.type === 'edu').map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex items-center gap-8 p-6 sm:p-8 rounded-[2rem] ${cardBg} border ${cardBorder} ${cardHoverBg} hover:-translate-y-1 transition-all duration-300 group cursor-default shadow-sm hover:shadow-xl backdrop-blur-sm`}
              >
                <div className={`hidden sm:flex z-10 items-center justify-center w-14 h-14 rounded-[1.2rem] border ${isDark ? 'bg-[#0a0a0a] border-white/10 shadow-[0_0_15px_rgba(99,102,241,0.2)]' : 'bg-white border-zinc-200 shadow-md'} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <div className={`transition-colors duration-300 ${
                    item.type === 'edu' ? 'text-blue-500' :
                    item.type === 'cert' ? 'text-purple-500' : 'text-emerald-500'
                  }`}>
                    {item.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h4 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-indigo-500 transition-colors tracking-tight">{item.title}</h4>
                  <p className={`text-base sm:text-lg ${textMuted} font-medium`}>{item.subtitle}</p>
                </div>
                
                <div className={`whitespace-nowrap px-4 py-2 rounded-full border ${isDark ? 'bg-white/5 border-white/10 text-zinc-300' : 'bg-black/5 border-black/10 text-zinc-600'} text-xs font-bold uppercase tracking-wider backdrop-blur-md`}>
                  {item.date}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section className="scroll-mt-40">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight flex items-center gap-4">
              <Award className={`w-10 h-10 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} /> Certifications
            </h2>
            <div className={`flex-1 h-[2px] ${isDark ? 'bg-gradient-to-r from-white/10 to-transparent' : 'bg-gradient-to-r from-black/10 to-transparent'}`} />
          </motion.div>

          <div className="max-w-4xl space-y-6 relative">
            <div className={`absolute left-[38px] top-6 bottom-6 w-1 rounded-full ${isDark ? 'bg-gradient-to-b from-purple-500/50 via-pink-500/20 to-transparent' : 'bg-gradient-to-b from-purple-300 via-pink-200 to-transparent'} hidden sm:block`} />
            
            {milestones.filter(m => m.type === 'cert').map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex items-center gap-8 p-6 sm:p-8 rounded-[2rem] ${cardBg} border ${cardBorder} ${cardHoverBg} hover:-translate-y-1 transition-all duration-300 group cursor-default shadow-sm hover:shadow-xl backdrop-blur-sm`}
              >
                <div className={`hidden sm:flex z-10 items-center justify-center w-14 h-14 rounded-[1.2rem] border ${isDark ? 'bg-[#0a0a0a] border-white/10 shadow-[0_0_15px_rgba(168,85,247,0.2)]' : 'bg-white border-zinc-200 shadow-md'} group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                  <div className={`transition-colors duration-300 ${
                    item.type === 'edu' ? 'text-blue-500' :
                    item.type === 'cert' ? 'text-purple-500' : 'text-emerald-500'
                  }`}>
                    {item.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h4 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-purple-500 transition-colors tracking-tight">{item.title}</h4>
                  <p className={`text-base sm:text-lg ${textMuted} font-medium`}>{item.subtitle}</p>
                </div>
                
                <div className={`whitespace-nowrap px-4 py-2 rounded-full border ${isDark ? 'bg-white/5 border-white/10 text-zinc-300' : 'bg-black/5 border-black/10 text-zinc-600'} text-xs font-bold uppercase tracking-wider backdrop-blur-md`}>
                  {item.date}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS & TIMELINE LOG */}
        <section className="scroll-mt-40">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight flex items-center gap-4">
              <Sparkles className={`w-10 h-10 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} /> Timeline Log
            </h2>
            <div className={`flex-1 h-[2px] ${isDark ? 'bg-gradient-to-r from-white/10 to-transparent' : 'bg-gradient-to-r from-black/10 to-transparent'}`} />
          </motion.div>

          <div className="max-w-4xl space-y-6 relative">
            <div className={`absolute left-[38px] top-6 bottom-6 w-1 rounded-full ${isDark ? 'bg-gradient-to-b from-amber-500/50 via-emerald-500/20 to-transparent' : 'bg-gradient-to-b from-amber-300 via-emerald-200 to-transparent'} hidden sm:block`} />
            
            {milestones.filter(m => m.type !== 'edu' && m.type !== 'cert').map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex items-center gap-8 p-6 sm:p-8 rounded-[2rem] ${cardBg} border ${cardBorder} ${cardHoverBg} hover:-translate-y-1 transition-all duration-300 group cursor-default shadow-sm hover:shadow-xl backdrop-blur-sm`}
              >
                <div className={`hidden sm:flex z-10 items-center justify-center w-14 h-14 rounded-[1.2rem] border ${isDark ? 'bg-[#0a0a0a] border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.2)]' : 'bg-white border-zinc-200 shadow-md'} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <div className={`transition-colors duration-300 ${
                    item.type === 'edu' ? 'text-blue-500' :
                    item.type === 'cert' ? 'text-purple-500' : 'text-emerald-500'
                  }`}>
                    {item.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h4 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors tracking-tight">{item.title}</h4>
                  <p className={`text-base sm:text-lg ${textMuted} font-medium`}>{item.subtitle}</p>
                </div>
                
                <div className={`whitespace-nowrap px-4 py-2 rounded-full border ${isDark ? 'bg-white/5 border-white/10 text-zinc-300' : 'bg-black/5 border-black/10 text-zinc-600'} text-xs font-bold uppercase tracking-wider backdrop-blur-md`}>
                  {item.date}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-40 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative overflow-hidden rounded-[3rem] p-10 sm:p-16 md:p-24 text-center ${isDark ? 'bg-indigo-900/10 border border-indigo-500/20' : 'bg-indigo-50 border border-indigo-100'} shadow-2xl`}
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center p-4 rounded-full mb-8 bg-indigo-500/10 text-indigo-500"
            >
              <Mail className="w-8 h-8" />
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Amazing</span></h2>
            <p className={`text-lg sm:text-xl ${textMuted} mb-12 max-w-2xl mx-auto font-medium`}>
              I&apos;m currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a href="mailto:rumita.mandal@example.com" className={`group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 ${isDark ? 'bg-indigo-500 text-white shadow-[0_0_40px_rgba(99,102,241,0.4)]' : 'bg-indigo-600 text-white shadow-xl hover:shadow-indigo-500/30'}`}>
                Say Hello <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href="https://www.linkedin.com/in/rumita-mandal-63a1a7293" target="_blank" className={`group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 border ${isDark ? 'border-white/20 text-white bg-white/5 hover:bg-white/10' : 'border-black/10 text-black bg-black/5 hover:bg-black/10'}`}>
                Connect <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </section>

      </main>

      {/* MINIMAL FOOTER */}
      <footer className={`border-t ${isDark ? 'border-white/10 bg-[#050505]/80' : 'border-zinc-200 bg-zinc-50/80'} py-12 px-6 sm:px-12 backdrop-blur-md relative z-10`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <p className={`text-sm font-bold tracking-wide uppercase ${textMuted}`}>Open to new opportunities</p>
          </div>

          <div className="flex items-center gap-8">
            <a href="mailto:rumita.mandal@example.com" className={`text-sm font-bold flex items-center gap-2 ${textMuted} hover:${textMain} transition-colors group`}>
              <Mail className="w-5 h-5 group-hover:text-indigo-500 transition-colors" /> Say Hello
            </a>
            <a href="https://github.com/rumita-mandal" className={`p-3 rounded-full border ${isDark ? 'border-white/10 hover:bg-white/10' : 'border-black/10 hover:bg-black/5'} transition-all hover:scale-110`}><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/rumita-mandal-63a1a7293" className={`p-3 rounded-full border ${isDark ? 'border-white/10 hover:bg-white/10' : 'border-black/10 hover:bg-black/5'} transition-all hover:scale-110`}><Linkedin className="w-5 h-5" /></a>
          </div>

        </div>
      </footer>
    </div>
  );
}