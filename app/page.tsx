"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  ArrowRight,
  MapPin,
  Calendar,
  Briefcase
} from "lucide-react";
import Background3D from "../components/Background3D";

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
  {
    name: "Health Risk Detection System",
    date: "2026",
    summary: "A predictive system to evaluate and monitor health risks and patient medication adherence.",
    impact: "Leveraged predictive modeling to improve tracking and early interventions for patient adherence.",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    link: "https://github.com/rumita-mandal/Health_Risk_Detection_System-Adherence-",
    color: "from-rose-600 to-pink-600"
  },
  {
    name: "CausalRiskNet",
    date: "2026",
    summary: "A causal inference network architecture for evaluating complex risk relationships in datasets.",
    impact: "Implemented advanced causal discovery algorithms to isolate true risk factors beyond standard correlations.",
    tech: ["Python", "Deep Learning", "Causal Inference"],
    link: "https://github.com/rumita-mandal/CausalRiskNet",
    color: "from-fuchsia-600 to-purple-600"
  },
];

const milestones = [
  { type: "edu", title: "Lovely Professional University", subtitle: "B.Tech in CSE (CGPA: 8.01)", date: "2023 - Present", icon: <GraduationCap className="w-5 h-5"/> },
  { type: "cert", title: "Computation Theory: Language Principle & Finite Automata", subtitle: "Infosys", date: "Nov 2025", icon: <Award className="w-5 h-5"/>, link: "https://drive.google.com/file/d/1zgvoaEwzOytpnvSaMqn5_8_q0ZTFEBRi/view?usp=drive_link" },
  { type: "achieve", title: "S1 List Position", subtitle: "Top academic performance among 40k+ students", date: "Nov 2025", icon: <Sparkles className="w-5 h-5"/> },
  { type: "achieve", title: "Hackathon Finalist", subtitle: "National level hackathon top 10 finish", date: "Oct 2025", icon: <Sparkles className="w-5 h-5"/> },
  { type: "cert", title: "ChatGPT-4 Prompt Engineering", subtitle: "Infosys", date: "Aug 2025", icon: <Award className="w-5 h-5"/>, link: "https://drive.google.com/file/d/1zgvoaEwzOytpnvSaMqn5_8_q0ZTFEBRi/view?usp=drive_link" },
  { type: "cert", title: "C++ Programming and Data Structures And Algorithm", subtitle: "CSE Pathsala", date: "Jul 2025", icon: <Award className="w-5 h-5"/>, link: "https://drive.google.com/file/d/1DusLx3ivijkd0xwVju7JyaLZxk49yQOE/view?usp=drive_link" },
  { type: "cert", title: "Packet Switching Networks and Algorithms", subtitle: "University of Colorado", date: "Nov 2024", icon: <Award className="w-5 h-5"/>, link: "https://drive.google.com/file/d/1DusLx3ivijkd0xwVju7JyaLZxk49yQOE/view?usp=drive_link" },
  { type: "cert", title: "Peer-to-Peer Protocols and Local Area Network", subtitle: "University of Colorado", date: "Nov 2024", icon: <Award className="w-5 h-5"/>, link: "https://drive.google.com/file/d/1e17RFF_OBBsRe7GFQBMl5TTqymAFK1-h/view?usp=drive_link" },
  { type: "cert", title: "Fundamentals of Network Communication", subtitle: "University of Colorado", date: "Nov 2024", icon: <Award className="w-5 h-5"/>, link: "https://drive.google.com/file/d/1mZn772s5oOpqYmTe87x-Fmn8vPp-BMMc/view?usp=drive_link" },
  { type: "cert", title: "The Bits and Bytes of Computer Networking", subtitle: "Google", date: "Nov 2024", icon: <Award className="w-5 h-5"/>, link: "https://drive.google.com/file/d/1gf42pxp8-MALniBUi6kEEgmsBXHEruQC/view?usp=drive_link" },
  { type: "edu", title: "City Montessori School", subtitle: "Intermediate (89%)", date: "2021 - 2023", icon: <GraduationCap className="w-5 h-5"/> },
];

const technologies = [
  "React", "Next.js", "TypeScript", "Python", "Node.js", "Tailwind CSS",
  "OpenCV", "TensorFlow", "Pandas", "Scikit", "MongoDB", "MySQL", "C++"
];

export default function Home() {
  const [theme, setTheme] = useState("dark"); // "dark" | "light"
  const [isLoading, setIsLoading] = useState(true);

  // Mouse Interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 50, stiffness: 400 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const [windowSize, setWindowSize] = useState({ width: 1000, height: 800 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    }
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // 2.8s loading sequence
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, [mouseX, mouseY]);

  // Create interactive background glow
  const pointerGlow = {
    background: useTransform(
      [smoothMouseX, smoothMouseY],
      ([x, y]) => `radial-gradient(1000px circle at ${x}px ${y}px, ${theme === "dark" ? "rgba(99,102,241,0.08)" : "rgba(99,102,241,0.05)"}, transparent 80%)`
    )
  };

  // Parallax transforms for hero elements
  const parallaxX = useTransform(smoothMouseX, [0, windowSize.width], [-15, 15]);
  const parallaxY = useTransform(smoothMouseY, [0, windowSize.height], [-15, 15]);
  const rotateX = useTransform(smoothMouseY, [0, windowSize.height], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [0, windowSize.width], [-5, 5]);

  const isDark = theme === "dark";
  const bgMain = isDark ? "bg-black" : "bg-gray-50";
  const textMain = isDark ? "text-[#00ff41]" : "text-gray-900";
  const textMuted = isDark ? "text-[#008f11]" : "text-gray-600";
  const cardBg = isDark ? "bg-black/40 border border-[#00ff41]/30 backdrop-blur-md" : "bg-white border border-gray-200 shadow-sm";
  const cardBorder = isDark ? "border-[#00ff41]/30" : "border-gray-200";
  const cardHoverBg = isDark ? "hover:bg-[#00ff41]/10 hover:border-[#00ff41]" : "hover:bg-gray-50 hover:border-indigo-400 hover:shadow-md";

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out ${bgMain} ${textMain} selection:bg-[#00ff41]/30 selection:text-white overflow-x-hidden font-mono relative`}>
      {/* INITIALIZATION SEQUENCE OVERLAY */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono text-[#00ff41] select-none"
          >
            <div className="flex flex-col items-center max-w-lg w-full px-6 gap-6">
              <motion.div 
                animate={{ opacity: [1, 0.4, 1] }} 
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="text-3xl sm:text-4xl font-black tracking-widest text-center uppercase"
              >
                SYSTEM_BOOT...
              </motion.div>
              
              <div className="w-full h-3 border-2 border-[#00ff41]/40 p-[2px] rounded-none shadow-[0_0_15px_rgba(0,255,65,0.2)]">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.4, ease: "easeInOut" }}
                  className="h-full bg-[#00ff41] shadow-[0_0_10px_#00ff41]"
                />
              </div>

              <div className="w-full text-xs sm:text-sm font-bold flex flex-col gap-2 mt-4 opacity-80 backdrop-blur-sm p-4 border border-[#00ff41]/20">
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>&gt; ROOT_ACCESS... INITIALIZED</motion.div>
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>&gt; LOADING_MATRIX_CORE... OK</motion.div>
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }}>&gt; DECRYPTING_PORTFOLIO_DATA...</motion.div>
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.2 }} className="text-white">&gt; ACCESS_GRANTED</motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Background3D />
      {/* Interactive Cursor Glow Layer */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-20"
        style={pointerGlow}
      />

      {/* Dynamic Ambient Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep background mesh/noise */}
        {isDark ? (
        <>
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.05)_1px,transparent_1px)] bg-[length:24px_24px] opacity-70" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,65,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,65,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
          {/* Top-down fade to hide grid at edges */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
        </>
        ) : (
        <>
          <div className="absolute inset-0 bg-gray-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:24px_24px] opacity-70" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50 opacity-90" />
        </>
        )}

        {/* Massive Ambient Glows */}
  
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px] mix-blend-screen opacity-20 bg-[#00ff41]/20"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -left-[20%] w-[70vw] h-[70vw] rounded-full blur-[140px] mix-blend-screen opacity-10 bg-[#008f11]/20"
        />
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full blur-[100px] mix-blend-screen opacity-20 ${isDark ? 'bg-fuchsia-600/30' : 'bg-fuchsia-300/40'}`}
        />
      </div>

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

      <main className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 pt-48 pb-32 flex flex-col gap-32">
        
        {/* Floating Matrix Blocks / Decrypted Strings */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[10%] top-[20%] text-[#00ff41]/20 font-bold text-2xl rotate-90"
            style={{ transformStyle: "preserve-3d" }}
          >
            01100010 01101001
          </motion.div>
          <motion.div
            animate={{ y: [-50, 50, -50], x: [0, -10, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute right-[15%] top-[30%] w-32 h-32 border border-[#00ff41]/20 rounded-sm flex items-center justify-center mix-blend-screen"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="text-[#00ff41]/30">SYSOUT</span>
          </motion.div>
          <motion.div
            animate={{ opacity: [0.1, 0.5, 0.1], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute right-[30%] bottom-[15%] text-[#00ff41]/30 font-mono tracking-[0.5em] text-sm"
          >
            A C C E S S _ G R A N T E D
          </motion.div>
          <motion.div
            animate={{ y: [0, 60, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute left-[20%] top-[60%] flex flex-col gap-1 text-[#00ff41]/10 text-xs"
          >
            <span>{"{"}</span>
            <span className="pl-4">"status": 200,</span>
            <span className="pl-4">"auth": "OK"</span>
            <span>{"}"}</span>
          </motion.div>
          <motion.div
            animate={{ y: [100, -100], opacity: [0, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 3 }}
            className="absolute left-[45%] bottom-[5%] w-[1px] h-32 bg-gradient-to-b from-transparent via-[#00ff41]/50 to-transparent"
          />
          <motion.div
            animate={{ x: [-100, 100], opacity: [0, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute left-[-5%] top-[75%] w-64 h-[1px] bg-gradient-to-r from-transparent via-[#00ff41]/40 to-transparent"
          />
          <motion.div
            animate={{ scale: [0.8, 1], opacity: [0, 0.4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "circIn", delay: 1 }}
            className="absolute left-[70%] top-[10%] text-red-500/40 text-xs font-black"
          >
            [ERR_SEGFAULT]
          </motion.div>
          <motion.div
            animate={{ y: [0, -100], opacity: [0, 0.5, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1.5 }}
            className="absolute right-[5%] bottom-[40%] text-[#00ff41]/20 font-mono flex flex-col gap-0.5 text-[0.6rem]"
          >
            <span>0x00A1</span>
            <span>0x00A2</span>
            <span>0x00A3</span>
            <span>0x00A4</span>
            <span>0x00A5</span>
          </motion.div>

          {/* Skill Blocks - Hacker Terminals */}
          {[...technologies, "Machine Learning", "Data Science", "Web Dev", "Problem Solving", "APIs", "Git", "Figma", "Deep Learning", "Algorithms", "Leadership"].map((tech, i) => (
            <motion.div
              key={`float-${i}`}
              animate={{
                y: [0, i % 2 === 0 ? -40 : -60, 0],
                x: [0, i % 2 === 0 ? 30 : -30, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              drag
              dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
              dragElastic={0.2}
              whileHover={{ scale: 1.1, zIndex: 50, opacity: 1, backgroundColor: "rgba(0,255,65,0.2)" }}
              whileTap={{ cursor: "grabbing", scale: 0.95 }}
              transition={{
                duration: 10 + (i % 5),
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              }}
              className="absolute cursor-grab active:cursor-grabbing px-4 sm:px-6 py-2 sm:py-3 rounded-sm backdrop-blur-sm opacity-40 transition-colors duration-300 border font-mono font-bold text-xs sm:text-sm shadow-2xl bg-black border-[#00ff41]/50 text-[#00ff41]"
              style={{
                top: `${(i * 7) % 80}%`,
                left: `${(i * 13) % 85}%`,
                scale: 0.7 + (i % 4) * 0.15,
              }}
            >
              <span className="text-[#008f11] mr-2">$</span>{tech}
            </motion.div>
          ))}
        </div>

        {/* HERO SECTION (NAME & DESIGNATION) */}
        <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[75vh] text-center pt-24">
          <motion.div 
            style={{ x: parallaxX, y: parallaxY }}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, bounce: 0.4, type: "spring" }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-sm mb-10 border backdrop-blur-md shadow-sm bg-[#00ff41]/10 border-[#00ff41]/30 font-mono"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full bg-[#00ff41] opacity-75 rounded-sm"></span>
              <span className="relative inline-flex h-3 w-3 bg-[#00ff41] rounded-sm"></span>
            </span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00ff41]">System Online_</span>
          </motion.div>

          <motion.h1 
            style={{ x: parallaxX, y: parallaxY, rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-[6.5rem] font-black tracking-tighter mb-6 leading-[1.05] uppercase"
          >
            <span className="relative inline-block group">
              Rumita Mandal
              <span className="absolute top-0 left-0 w-full h-full bg-[#00ff41] opacity-0 mix-blend-overlay group-hover:opacity-100 animate-pulse pointer-events-none"></span>
            </span>
            <br/>
            <motion.span 
              animate={{ opacity: [1, 0.5, 1, 0.8, 1] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="text-3xl sm:text-4xl md:text-5xl text-[#00ff41]/80 mt-4 block font-mono" style={{ transform: "translateZ(30px)" }}
            >
              &gt; AI & Machine Learning Dev<span className="animate-pulse">_</span>
            </motion.span>
          </motion.h1>

          <motion.p 
            style={{ x: useTransform(smoothMouseX, [0, windowSize.width], [-8, 8]), y: useTransform(smoothMouseY, [0, windowSize.height], [-8, 8]) }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl sm:text-2xl md:text-3xl ${textMuted} max-w-3xl mx-auto leading-relaxed mb-12 font-mono before:content-['//_'] before:text-[#00ff41]/40`}
          >
            Crafting scalable architecture and bridging root mechanics with AI neural nets.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            <a href="https://github.com/rumita-mandal" target="_blank" className="group flex items-center gap-3 px-8 py-4 rounded-sm font-mono font-bold transition-all duration-300 hover:-translate-y-1 bg-[#00ff41] text-black hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]">
              <Github className="w-5 h-5 transition-transform group-hover:rotate-12" /> [INIT_REPO]
            </a>
            <a href="https://www.linkedin.com/in/rumita-mandal-63a1a7293" target="_blank" className="flex items-center gap-3 p-4 rounded-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] border-[#00ff41]/30 hover:bg-[#00ff41]/10 text-[#00ff41]">
              <Linkedin className="w-5 h-5 text-current" />
            </a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] border-[#00ff41]/30 hover:bg-[#00ff41]/10 text-[#00ff41]">
              <Download className="w-5 h-5 text-current" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          >
            <motion.div 
              animate={{ y: [0, 8, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-[1px] h-12 bg-gradient-to-b from-[#00ff41] to-transparent"
            />
          </motion.div>
        </section>

        {/* ABOUT SECTION - SCROLL ANIMATED */}
        <section id="about" className="scroll-mt-40 relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-[60vh] gap-12 py-20 overflow-hidden">
          
          <motion.div 
            initial={{ opacity: 0, x: -100, rotateY: 45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1, ease: "easeOut", type: "spring", bounce: 0.3 }}
            className="flex flex-col items-start flex-1 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <span className={`h-[2px] w-10 ${isDark ? 'bg-indigo-400' : 'bg-indigo-600'} rounded-full`} />
              <span className={`text-sm font-bold uppercase tracking-widest ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>About Me</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.05]">
              Driven by <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Curiosity & Code.</span>
            </h2>

            <p className={`text-xl sm:text-2xl ${textMuted} max-w-2xl leading-relaxed mb-6 font-medium`}>
              I believe in building software that not only functions perfectly but feels intuitive. Bringing ideas to life requires a deep understanding of core fundamentals paired with modern tools.
            </p>
            <p className={`text-xl sm:text-2xl ${textMuted} max-w-2xl leading-relaxed font-medium`}>
              From crafting seamless user interfaces to integrating intelligent AI solutions behind the scenes, I love tackling the entire stack to solve real-world problems. Let&apos;s build something that matters.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotateX: 30, y: 150 }} 
            whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }} 
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1.2, bounce: 0.4, type: "spring" }}
            className="flex-1 order-1 lg:order-2 flex justify-center w-full [perspective:1000px]"
          >
            <motion.div 
              whileHover={{ rotateY: -10, rotateX: 5, scale: 1.05 }}
              whileTap={{ scale: 0.95, rotateY: 0, rotateX: 0 }}
              drag
              dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
              dragElastic={0.4}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative cursor-grab active:cursor-grabbing w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-sm p-3 border border-dashed border-[#00ff41]/50 bg-black/50 backdrop-blur-md"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 border border-[#00ff41] rounded-sm blur-[2px] opacity-70 block hidden hover:block transition-all duration-300"/>
              <div className="w-full h-full rounded-sm overflow-hidden border-2 border-[#00ff41]/80 relative bg-black">
                {/* Simulated Terminal Overlay on image */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.1)_1px,transparent_1px)] bg-[size:100%_4px] z-10 pointer-events-none mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[#00ff41]/10 z-10 pointer-events-none animate-pulse"></div>
                <Image
                  src="/pic.jpeg"
                  alt="Rumita Mandal"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out hover:scale-110 grayscale contrast-125 brightness-125 mix-blend-luminosity"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#00ff41] rounded-none blur-3xl opacity-20 transition-opacity duration-500" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#00ff41] rounded-none blur-3xl opacity-10 transition-opacity duration-500" />
            </motion.div>
          </motion.div>
        </section>

        {/* MARQUEE SECTION */}
        <div className="w-[100vw] relative left-1/2 -translate-x-1/2 -mt-20 mb-10 sm:-mt-10 sm:mb-20 overflow-hidden flex py-6 border-y border-[#00ff41]/30 opacity-80 backdrop-blur-sm bg-black/40">
          <div className="flex w-max animate-marquee gap-8 sm:gap-16 items-center">
            {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, i) => (
              <span key={i} className="whitespace-nowrap text-xl sm:text-2xl font-black uppercase tracking-[0.3em] font-mono text-[#00ff41]/30 hover:text-[#00ff41] transition-colors cursor-default">
                /{tech}/
              </span>
            ))}
          </div>
        </div>

        {/* QUICK FACTS BENTO */}
        <section className="scroll-mt-40 -mt-16 sm:mt-0 font-mono">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: <MapPin className="w-6 h-6 text-[#00ff41]" />, label: "Location", value: "India" },
              { icon: <Briefcase className="w-6 h-6 text-[#00ff41]" />, label: "Experience", value: "3+ Projects" },
              { icon: <Calendar className="w-6 h-6 text-[#00ff41]" />, label: "Graduating", value: "2027" },
            ].map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 p-6 sm:p-8 rounded-sm bg-black border border-[#00ff41]/30 shadow-[0_0_15px_rgba(0,255,65,0.05)] backdrop-blur-md group hover:border-[#00ff41]/80 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all"
              >
                <div className="p-4 rounded-sm border bg-[#00ff41]/5 border-[#00ff41]/20 group-hover:bg-[#00ff41]/10">
                  {fact.icon}
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#008f11] mb-1">{fact.label}</p>
                  <p className="text-xl font-black text-[#00ff41]">{fact.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-40">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">Featured Projects</h2>
            <div className={`flex-1 h-[2px] ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
          </motion.div>

          <div className="flex flex-col gap-16 sm:gap-24 [perspective:1200px]">
            {projects.map((project, idx) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 100, rotateX: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                whileHover={{ rotateY: idx % 2 === 0 ? 5 : -5, scale: 1.03, z: 50 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.4 }}
                className={`group relative overflow-hidden rounded-[2.5rem] ${cardBg} border ${cardBorder} ${cardHoverBg} transition-all duration-500 shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]`}
                style={{ transformStyle: "preserve-3d" }}
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
        <section id="skills" className="scroll-mt-40 font-mono">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#00ff41]">Capability_Matrix</h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#00ff41] to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {skillGroups.map((group, idx) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative p-8 sm:p-10 rounded-sm bg-black border border-[#00ff41]/30 overflow-hidden transition-all duration-500 shadow-[0_0_15px_rgba(0,255,65,0.05)] hover:shadow-[0_0_30px_rgba(0,255,65,0.15)] hover:border-[#00ff41]"
              >
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#00ff41]/5 blur-[80px] opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none delay-75" />
                
                <div className="mb-10 inline-flex p-5 rounded-sm border backdrop-blur-md bg-[#00ff41]/5 border-[#00ff41]/20 text-[#00ff41] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative z-10">
                  {group.icon}
                </div>
                
                <h3 className="text-3xl font-black mb-8 relative z-10 tracking-tight text-[#00ff41] flex items-center gap-2">
                  <span className="text-lg opacity-50">&gt;</span> {group.title}
                </h3>
                <div className="flex flex-col gap-4 relative z-10 sm:w-11/12">
                  {group.items.map((item, i) => {
                    // Use a deterministic value based on the item string to prevent hydration mismatch errors
                    const percentage = 80 + ((item.length * 7 + i * 13) % 20);
                    return (
                        <motion.div 
                        key={item} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + (i * 0.05) }}
                        className="flex flex-col gap-1 w-full group/bar mb-2"
                      >
                        <div className="flex justify-between text-xs font-bold text-[#008f11] group-hover/bar:text-[#00ff41]">
                          <span>{item}</span>
                          <span>{percentage}%</span>
                        </div>
                        <div className="w-full h-2 bg-[#00ff41]/20 rounded-none overflow-hidden relative">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${percentage}%` }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 + (i * 0.1) }}
                            className="absolute top-0 left-0 h-full bg-[#00ff41]"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="scroll-mt-40">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="flex items-center gap-6 mb-16">
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
                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                whileHover={{ scale: 1.02, rotateX: 2 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: idx * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-[2rem] ${cardBg} border ${cardBorder} ${cardHoverBg} group cursor-default shadow-sm hover:shadow-2xl backdrop-blur-xl ${isDark ? 'hover:bg-white/[0.04]' : 'hover:bg-white'} transition-all duration-500`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* 3D Glow Effect */}
                <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className={`hidden sm:flex z-10 items-center justify-center min-w-[3.5rem] w-14 h-14 rounded-[1.2rem] border ${isDark ? 'bg-white/5 border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-md'} group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-500`}>
                  <div className={`transition-colors duration-300 ${isDark ? 'text-blue-400 group-hover:text-blue-300' : 'text-blue-600 group-hover:text-blue-500'}`}>
                    {item.icon}
                  </div>
                </div>
                
                <div className="flex-grow relative z-10 w-full">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-2">
                    <h4 className={`text-xl sm:text-2xl font-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${isDark ? 'group-hover:from-blue-400 group-hover:to-cyan-400' : 'group-hover:from-blue-600 group-hover:to-cyan-600'} transition-all duration-300 tracking-tight leading-tight`}>{item.title}</h4>
                    <div className={`sm:hidden inline-block px-3 py-1 rounded-full border ${isDark ? 'bg-white/5 border-white/10 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'} text-xs font-bold uppercase tracking-widest`}>
                      {item.date}
                    </div>
                  </div>
                  <p className={`text-base sm:text-lg ${textMuted} font-semibold`}>{item.subtitle}</p>
                </div>
                
                <div className={`hidden sm:block whitespace-nowrap px-5 py-2.5 rounded-xl border ${isDark ? 'bg-black/40 border-white/10 text-blue-300' : 'bg-white/80 border-blue-100 text-blue-700 shadow-sm'} text-xs font-black uppercase tracking-widest backdrop-blur-md group-hover:border-blue-500/30 transition-colors`}>
                  {item.date}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section className="scroll-mt-40">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight flex items-center gap-4">
              <Award className={`w-10 h-10 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} /> Certifications
            </h2>
            <div className={`flex-1 h-[2px] ${isDark ? 'bg-gradient-to-r from-white/10 to-transparent' : 'bg-gradient-to-r from-black/10 to-transparent'}`} />
          </motion.div>

          <div className="max-w-4xl space-y-6 relative">
            <div className={`absolute left-[38px] top-6 bottom-6 w-1 rounded-full ${isDark ? 'bg-gradient-to-b from-purple-500/50 via-pink-500/20 to-transparent' : 'bg-gradient-to-b from-purple-300 via-pink-200 to-transparent'} hidden sm:block`} />
            
            {milestones.filter(m => m.type === 'cert').map((item, idx) => {
              const CardContent = (
                <>
                {/* 3D Glow Effect */}
                <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className={`hidden sm:flex z-10 items-center justify-center min-w-[3.5rem] w-14 h-14 rounded-[1.2rem] border ${isDark ? 'bg-white/5 border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.3)]' : 'bg-gradient-to-br from-white to-purple-50 border-purple-200 shadow-md'} group-hover:scale-110 group-hover:-rotate-[15deg] transition-all duration-500`}>
                  <div className={`transition-colors duration-300 ${isDark ? 'text-purple-400 group-hover:text-purple-300' : 'text-purple-600 group-hover:text-purple-500'}`}>
                    {item.icon}
                  </div>
                </div>
                
                <div className="flex-grow relative z-10 w-full">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-2">
                    <h4 className={`text-xl sm:text-2xl font-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${isDark ? 'group-hover:from-purple-400 group-hover:to-pink-400' : 'group-hover:from-purple-600 group-hover:to-pink-600'} transition-all duration-300 tracking-tight leading-tight flex items-center gap-2`}>
                      {item.title}
                      {item.link && <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-block" />}
                    </h4>
                    <div className={`sm:hidden inline-block px-3 py-1 rounded-full border ${isDark ? 'bg-white/5 border-white/10 text-purple-300' : 'bg-purple-50 border-purple-200 text-purple-700'} text-xs font-bold uppercase tracking-widest`}>
                      {item.date}
                    </div>
                  </div>
                  <p className={`text-base sm:text-lg ${textMuted} font-semibold`}>{item.subtitle}</p>
                </div>
                
                <div className={`hidden sm:block whitespace-nowrap px-5 py-2.5 rounded-xl border ${isDark ? 'bg-black/40 border-white/10 text-purple-300' : 'bg-white/80 border-purple-100 text-purple-700 shadow-sm'} text-xs font-black uppercase tracking-widest backdrop-blur-md group-hover:border-purple-500/30 transition-colors`}>
                  {item.date}
                </div>
                </>
              );

              return (
                <motion.a 
                  key={idx}
                  href={item.link || "#"}
                  target={item.link ? "_blank" : undefined}
                  rel={item.link ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -50, rotateY: 15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  whileHover={{ scale: 1.02, rotateX: -2 }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: idx * 0.1 }}
                  className={`block relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-[2rem] ${cardBg} border ${cardBorder} ${cardHoverBg} group cursor-pointer shadow-sm hover:shadow-2xl backdrop-blur-xl ${isDark ? 'hover:bg-white/[0.04]' : 'hover:bg-white'} transition-all duration-500`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {CardContent}
                </motion.a>
              );
            })}
          </div>
        </section>

        {/* ACHIEVEMENTS & TIMELINE LOG */}
        <section className="scroll-mt-40">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="flex items-center gap-6 mb-16">
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
                initial={{ opacity: 0, x: -50, rotateY: -10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                whileHover={{ scale: 1.02, rotateX: 2 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: idx * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-[2rem] ${cardBg} border ${cardBorder} ${cardHoverBg} group cursor-default shadow-sm hover:shadow-2xl backdrop-blur-xl ${isDark ? 'hover:bg-white/[0.04]' : 'hover:bg-white'} transition-all duration-500`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* 3D Glow Effect */}
                <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className={`hidden sm:flex z-10 items-center justify-center min-w-[3.5rem] w-14 h-14 rounded-[1.2rem] border ${isDark ? 'bg-white/5 border-white/10 shadow-[0_0_20px_rgba(16,185,129,0.3)]' : 'bg-gradient-to-br from-white to-emerald-50 border-emerald-200 shadow-md'} group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-500`}>
                  <div className={`transition-colors duration-300 ${isDark ? 'text-emerald-400 group-hover:text-emerald-300' : 'text-emerald-600 group-hover:text-emerald-500'}`}>
                    {item.icon}
                  </div>
                </div>
                
                <div className="flex-grow relative z-10 w-full">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-2">
                    <h4 className={`text-xl sm:text-2xl font-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${isDark ? 'group-hover:from-emerald-400 group-hover:to-teal-400' : 'group-hover:from-emerald-600 group-hover:to-teal-600'} transition-all duration-300 tracking-tight leading-tight`}>{item.title}</h4>
                    <div className={`sm:hidden inline-block px-3 py-1 rounded-full border ${isDark ? 'bg-white/5 border-white/10 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-700'} text-xs font-bold uppercase tracking-widest`}>
                      {item.date}
                    </div>
                  </div>
                  <p className={`text-base sm:text-lg ${textMuted} font-semibold`}>{item.subtitle}</p>
                </div>
                
                <div className={`hidden sm:block whitespace-nowrap px-5 py-2.5 rounded-xl border ${isDark ? 'bg-black/40 border-white/10 text-emerald-300' : 'bg-white/80 border-emerald-100 text-emerald-700 shadow-sm'} text-xs font-black uppercase tracking-widest backdrop-blur-md group-hover:border-emerald-500/30 transition-colors`}>
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
            viewport={{ once: false }}
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
              <a href="mailto:rumita.mandal@example.com" className={`group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${isDark ? 'bg-indigo-500 text-white shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)]' : 'bg-indigo-600 text-white shadow-xl hover:shadow-indigo-500/40'}`}>
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