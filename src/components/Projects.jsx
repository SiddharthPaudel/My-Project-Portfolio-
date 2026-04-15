import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { FaGithub, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

// Import your project images
import Tomo from "../images/tomo.png"; 
import Consultancy from "../images/consultancy.png";
import Business from "../images/business.png";
import Gamify from "../images/gamify.png";
import Quick from "../images/quickStay.png";

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
    className="group relative bg-white border border-slate-100 rounded-[24px] md:rounded-[32px] overflow-hidden transition-all duration-500 hover:shadow-[0_48px_48px_-32px_rgba(15,23,42,0.12)] md:hover:-translate-y-2"
  >
    {/* Image Container - Cleaned up to make screenshots "pop" */}
    <div className="relative aspect-[16/10] overflow-hidden bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-in-out"
      />
      
      {/* Subtle Inner Shadow to define image edges without a hard border */}
      <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)] pointer-events-none" />
      
      {/* Desktop Hover Overlay */}
      <div className="hidden md:flex absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center backdrop-blur-sm">
        <div className="flex gap-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noreferrer"
              className="p-4 bg-white rounded-full text-slate-900 hover:scale-110 active:scale-95 transition-all"
            >
              <FaGithub size={20} />
            </a>
          )}
          {demo && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noreferrer"
              className="p-4 bg-white rounded-full text-slate-900 hover:scale-110 active:scale-95 transition-all"
            >
              <FaArrowRight size={20} className="-rotate-45" />
            </a>
          )}
        </div>
      </div>
    </div>

    {/* Content Area */}
    <div className="p-6 md:p-8">
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tighter uppercase">
            {title}
          </h3>
          {!github && (
            <span className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-600 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Site
            </span>
          )}
        </div>
        
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="md:hidden p-2 bg-slate-50 rounded-full text-slate-900">
            <FaExternalLinkAlt size={14} />
          </a>
        )}
      </div>

      <p className="text-slate-500 text-[12px] md:text-[13px] leading-relaxed mb-6 md:mb-8 font-medium">
        {desc}
      </p>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2">
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
      title: "Tomo Globe Wise",
      desc: "A fully functional tours and travel website where users can book domestic or international packages. It features a complete admin panel for managing treks, rafting, and sightseeing tours in real-time.",
      tech: ["React Vite", "Firebase", "Cloudinary", "RBAC"],
      demo: "https://tomoglobewise.com/", 
      image: Tomo,
    },
    {
      title: "Namo Buddha Consultancy",
      desc: "A professional Japanese consultancy platform that guides students and workers through visa processing and documentation. Includes a built-in translation feature to make navigation easy for native speakers.",
      tech: ["React", "I18n", "Tailwind CSS"],
      demo: "https://namobuddhachitwan.edu.np/", 
      image: Consultancy,
    },
    {
      title: "GamifyZone",
      desc: "An interactive learning ecosystem that uses game-like rewards to keep students engaged and motivated while tracking their progress.",
      tech: ["MERN Stack", "Framer Motion"],
      github: "https://github.com/SiddharthPaudel/Gamification",
      image: Gamify,
    },
    {
      title: "Business Finance MS",
      desc: "A modern management system designed for tracking daily sales, financial audits, and generating automated reports for business growth and transparency.",
      tech: ["Next.js", "Node.js", "MongoDB"],
      github: "https://github.com/SiddharthPaudel/Business-Sales-Finance-Management-System",
      image: Business,
    },
    {
      title: "Quick Stay",
      desc: "A clean and efficient hotel booking platform with real-time room availability and a smooth checkout process for travelers.",
      tech: ["React", "Express", "Node.js"],
      github: "https://github.com/SiddharthPaudel/Hotel-Booking-",
      image: Quick,
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
            className="flex items-center gap-4 mb-6 md:mb-8"
          >
             <div className="w-12 h-[1px] bg-slate-900" />
             <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-slate-900 font-black">
               Selected Work
             </h2>
          </m.div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
            <m.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none uppercase"
            >
              Projects
            </m.h3>

            <m.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-400 max-w-xs text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] leading-relaxed md:text-right"
            >
              From professional consultancies to full-scale travel engines—a look at the digital products I've built.
            </m.p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>

        {/* Global Repository CTA */}
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-40 flex flex-col items-center"
        >
          <a 
            href="https://github.com/SiddharthPaudel" 
            target="_blank" 
            rel="noreferrer"
            className="group relative flex items-center gap-4 md:gap-6 px-10 md:px-12 py-5 md:py-6 bg-slate-900 text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] rounded-full overflow-hidden shadow-2xl transition-all duration-500 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              <FaGithub size={18} />
              Global Repository
            </span>
            <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </a>
        </m.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-slate-50 rounded-full blur-[80px] md:blur-[120px] -z-10 opacity-50" />
      </section>
    </LazyMotion>
  );
};

export default Projects;