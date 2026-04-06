import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Import your project images
import Gamify from "../images/gamify.png";
import Manga from "../images/manga.png";
import Quick from "../images/quickStay.png";
import Business from "../images/business.png";
import port from "../images/port.png";
import finance from "../images/finance.png";

const ProjectCard = ({ title, desc, tech, github, image, demo, index }) => (
  <m.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      duration: 0.8, 
      delay: index * 0.1, 
      ease: [0.215, 0.61, 0.355, 1] 
    }}
    className="group relative bg-white border border-slate-100 rounded-[24px] md:rounded-[32px] overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-30px_rgba(15,23,42,0.15)] md:hover:-translate-y-2"
  >
    {/* Image Container */}
    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-1000 ease-out"
      />
      
      {/* Desktop-Only Overlay */}
      <div className="hidden md:flex absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center backdrop-blur-sm">
        <div className="flex gap-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
           <a 
            href={github} 
            target="_blank" 
            rel="noreferrer"
            className="p-4 bg-white rounded-full text-slate-900 hover:scale-110 active:scale-95 transition-all"
          >
            <FaGithub size={20} />
          </a>
          {demo && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noreferrer"
              className="p-4 bg-white rounded-full text-slate-900 hover:scale-110 active:scale-95 transition-all"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
    </div>

    {/* Content Area */}
    <div className="p-6 md:p-8">
      <div className="flex justify-between items-center mb-3 md:mb-4">
        <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tighter uppercase">
          {title}
        </h3>
        <div className="h-[1px] flex-grow mx-3 md:mx-4 bg-slate-100 group-hover:bg-slate-900/20 transition-colors" />
        
        {/* Mobile-Only Action Links */}
        <div className="flex md:hidden gap-3 text-slate-400">
          <a href={github} target="_blank" rel="noreferrer"><FaGithub size={18} /></a>
          {demo && <a href={demo} target="_blank" rel="noreferrer"><FaExternalLinkAlt size={16} /></a>}
        </div>
      </div>

      <p className="text-slate-500 text-[12px] md:text-[13px] leading-relaxed mb-6 md:mb-8 line-clamp-2 font-medium">
        {desc}
      </p>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2 pt-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-[7px] md:text-[8px] font-black uppercase tracking-widest px-2.5 py-1.5 rounded-full border border-slate-100 text-slate-400 group-hover:text-slate-900 group-hover:border-slate-900 transition-all duration-500"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </m.div>
);

const Projects = () => {
  const projects = [
    {
      title: "GamifyZone",
      desc: "A gamified learning ecosystem designed to increase student engagement through MERN stack rewards and tracking.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/SiddharthPaudel/Gamification",
      image: Gamify,
    },
    {
      title: "Finance Tracker",
      desc: "A personal finance dashboard for visualizing expenses, setting budgets, and secure data storage.",
      tech: ["React", "Express", "Chart.js"],
      github: "https://github.com/SiddharthPaudel/Finance-Tracker",
      image: finance,
    },
    {
      title: "Business Finance MS",
      desc: "Comprehensive Next.js ERP for tracking business sales, financial audits, and automated reporting.",
      tech: ["Next.js", "Node.js", "MongoDB"],
      github: "https://github.com/SiddharthPaudel/Business-Sales-Finance-Management-System",
      image: Business,
    },
    {
      title: "Quick Stay",
      desc: "Modern hotel booking engine with dynamic pricing, availability filtering, and responsive booking flows.",
      tech: ["React", "Node.js", "Context API"],
      github: "https://github.com/SiddharthPaudel/Hotel-Booking-",
      image: Quick,
    },
    {
      title: "MangaZone",
      desc: "A digital reader and rental platform featuring real-time availability and user library management.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      github: "https://github.com/SiddharthPaudel/MangaZone",
      image: Manga,
    },
    {
      title: "Portfolio",
      desc: "This very site—crafted with a focus on minimalist aesthetics and high-performance React animations.",
      tech: ["React", "Framer Motion", "Tailwind"],
      github: "https://github.com/SiddharthPaudel/Portfolio",
      image: port,
    }
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section id="projects" className="relative max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-40 overflow-hidden">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-32">
          <m.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8"
          >
             <div className="w-8 md:w-12 h-[1px] bg-slate-900" />
             <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-slate-900 font-black">
               Project Archive
             </h2>
          </m.div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12">
            <m.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none uppercase"
            >
              My Projects
            </m.h3>

            <m.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-400 max-w-xs text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] leading-relaxed md:text-right"
            >
              Full-Stack applications engineered 
              for scalability, speed, and structural integrity.
            </m.p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>

        {/* Call to Action */}
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-40 flex flex-col items-center px-4"
        >
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-slate-300 mb-8 md:mb-10 text-center">
            Pushing the boundaries of MERN & Next.js
          </p>
          
          <a 
            href="https://github.com/SiddharthPaudel" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto group relative flex items-center justify-center gap-4 md:gap-6 px-8 md:px-12 py-5 md:py-6 bg-slate-900 text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-full overflow-hidden shadow-2xl transition-all duration-500 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              <FaGithub size={18} />
              Global Repository
            </span>
            <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </a>
        </m.div>

        {/* Subtle Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-slate-50 rounded-full blur-[80px] md:blur-[120px] -z-10 opacity-50" />
      </section>
    </LazyMotion>
  );
};

export default Projects;