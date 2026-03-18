"use client";

import React, { useState, useEffect } from "react";
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
  Sun
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState("dark"); // "dark" | "light"

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const isDark = theme === "dark";
  const bgMain = isDark ? "bg-[#050505]" : "bg-zinc-50";
  const textMain = isDark ? "text-white" : "text-zinc-900";
  const textMuted = isDark ? "text-zinc-400" : "text-zinc-600";
  const cardBg = isDark ? "bg-white/[0.02]" : "bg-white";
  const cardBorder = isDark ? "border-white/[0.05]" : "border-zinc-200";
  const cardHoverBg = isDark ? "hover:bg-white/[0.04]" : "hover:bg-zinc-50";

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out ${bgMain} ${textMain} selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden`}>
      
      {/* Dynamic Ambient Background Glow */}
      {isDark && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-0 opacity-40 transition-opacity duration-300"
          animate={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99,102,241,0.08), transparent 40%)`
          }}
        />
      )}
      {!isDark && (
        <div className="fixed inset-0 z-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply" />
      )}

      {/* Floating Theme / Nav Bar */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-6 py-3 rounded-full backdrop-blur-xl border ${isDark ? 'bg-white/5 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-black/5 border-black/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)]'} transition-colors`}
      >
        <div className="flex items-center gap-2 pr-4 border-r border-current opacity-70">
          <span className="font-extrabold text-lg tracking-tighter">RM<span className="text-indigo-500">.</span></span>
        </div>
        
        <div className="hidden sm:flex items-center gap-6 text-sm font-semibold">
          <a href="#about" className={`${textMuted} hover:${textMain} transition-colors`}>About</a>
          <a href="#projects" className={`${textMuted} hover:${textMain} transition-colors`}>Projects</a>
          <a href="#skills" className={`${textMuted} hover:${textMain} transition-colors`}>Skills</a>
        </div>

        <button 
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className={`p-2.5 rounded-full transition-transform hover:scale-110 active:scale-95 ${isDark ? 'bg-white/10 text-yellow-300' : 'bg-black/10 text-indigo-500'}`}
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
        <section id="about" className="relative flex flex-col items-start min-h-[50vh]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className={`inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8 border backdrop-blur-md ${isDark ? 'bg-indigo-500/10 border-indigo-500/20' : 'bg-indigo-50 border-indigo-200'}`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
            </span>
            <span className={`text-xs font-bold tracking-widest uppercase ${isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>Available for work</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl md:text-[5.5rem] font-black tracking-tighter mb-8 leading-[1.05]"
          >
            Crafting code <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              infused with AI.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-xl sm:text-2xl ${textMuted} max-w-2xl leading-relaxed mb-12`}
          >
            I'm <strong className={textMain}>Rumita Mandal</strong>, a Computer Science student dedicated to blending software engineering fundamentals with modern AI to solve real-world problems gracefully.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="https://github.com/rumita-mandal" target="_blank" className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1 hover:shadow-lg ${isDark ? 'bg-white text-black hover:shadow-white/20' : 'bg-black text-white hover:shadow-black/20'}`}>
              <Github className="w-5 h-5" /> Explore Work
            </a>
            <a href="https://www.linkedin.com/in/rumita-mandal-63a1a7293" target="_blank" className={`flex items-center gap-3 p-4 rounded-full border transition-all hover:scale-110 active:scale-95 ${isDark ? 'border-white/20 hover:bg-white/10' : 'border-black/20 hover:bg-black/5'}`}>
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="/cv%20of%20Rumita.doc" download className={`flex items-center gap-3 p-4 rounded-full border transition-all hover:scale-110 active:scale-95 ${isDark ? 'border-white/20 hover:bg-white/10' : 'border-black/20 hover:bg-black/5'}`}>
              <Download className="w-5 h-5" />
            </a>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-40">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">Featured Projects</h2>
            <div className={`flex-1 h-[2px] ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
          </motion.div>

          <div className="flex flex-col gap-12">
            {projects.map((project, idx) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                className={`group relative overflow-hidden rounded-[2.5rem] ${cardBg} border ${cardBorder} ${cardHoverBg} transition-all duration-500`}
              >
                {/* Accent Background Glow overlay */}
                <div className={`absolute top-0 right-0 w-[40vw] h-[40vh] bg-gradient-to-br ${project.color} blur-[120px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none`} />
                
                <div className="p-8 sm:p-12 md:p-16 flex flex-col md:flex-row gap-8 md:gap-16 relative z-10">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <span className="h-px w-8 bg-indigo-500" />
                      <span className={`text-sm font-bold uppercase tracking-widest ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>{project.date}</span>
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl font-bold mb-6">{project.name}</h3>
                    <p className={`${textMuted} text-lg sm:text-xl leading-relaxed mb-8`}>{project.summary}</p>
                    
                    <a href={project.link} target="_blank" className={`inline-flex items-center gap-2 pb-1 border-b-2 border-transparent hover:border-indigo-500 font-bold text-indigo-500 transition-colors group/link`}>
                      View Case Study <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                  </div>
                  
                  <div className={`md:w-1/3 p-6 sm:p-8 rounded-[1.5rem] flex flex-col justify-between ${isDark ? 'bg-black/40 border border-white/5 shadow-inner' : 'bg-zinc-100 border border-zinc-200'}`}>
                    <div>
                      <span className="block text-sm font-bold mb-2 uppercase tracking-wider opacity-50">Impact</span>
                      <p className="text-sm font-medium leading-relaxed">{project.impact}</p>
                    </div>
                    <div className="mt-8 pt-8 border-t border-current opacity-70 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide ${isDark ? 'bg-white/10 text-white' : 'bg-black/5 text-black'}`}>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map((group, idx) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative p-8 sm:p-10 rounded-[2rem] ${cardBg} border ${cardBorder} ${group.border} overflow-hidden transition-all duration-300 shadow-xl`}
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${group.grad} blur-[80px] opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className={`mb-8 inline-flex p-5 rounded-[1rem] border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  {group.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-6">{group.title}</h3>
                <div className="flex flex-wrap gap-3 relative z-10 w-4/5">
                  {group.items.map((item, i) => (
                    <motion.span 
                      key={item} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + (i * 0.05) }}
                      className={`px-4 py-2 rounded-xl text-sm font-bold border shadow-sm ${isDark ? 'bg-black/40 border-white/10 text-neutral-200 group-hover:border-white/20' : 'bg-white border-zinc-200 text-zinc-700'}`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* JOURNEY LOG */}
        <section className="scroll-mt-40">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">Timeline Log</h2>
            <div className={`flex-1 h-[2px] ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
          </motion.div>

          <div className="max-w-4xl space-y-4 relative">
            <div className={`absolute left-[38px] top-4 bottom-4 w-1 rounded-full ${isDark ? 'bg-white/5' : 'bg-black/5'} hidden sm:block`} />
            
            {milestones.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex items-center gap-8 p-6 sm:p-8 rounded-[1.5rem] ${cardBg} border ${cardBorder} ${cardHoverBg} transition-all duration-300 group cursor-default shadow-sm hover:shadow-lg`}
              >
                <div className={`hidden sm:flex z-10 items-center justify-center w-14 h-14 rounded-[1.2rem] border ${isDark ? 'bg-zinc-900 border-white/20' : 'bg-white border-zinc-300'} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}>
                  <div className={`transition-colors duration-300 ${
                    item.type === 'edu' ? 'text-blue-500' :
                    item.type === 'cert' ? 'text-purple-500' : 'text-emerald-500'
                  }`}>
                    {item.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h4 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-indigo-500 transition-colors">{item.title}</h4>
                  <p className={`text-base sm:text-lg ${textMuted}`}>{item.subtitle}</p>
                </div>
                
                <div className={`whitespace-nowrap px-4 py-2 rounded-full border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} text-sm font-bold uppercase tracking-wider`}>
                  {item.date}
                </div>
              </motion.div>
            ))}
          </div>
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