import React, { memo } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaTerminal } from "react-icons/fa";

const SOCIAL_LINKS = [
  { icon: <FaGithub />, url: "https://github.com/SiddharthPaudel", label: "GitHub" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/siddharth-paudel-53911032b/", label: "LinkedIn" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/cddharth_99/", label: "Instagram" },
  { icon: <FaWhatsapp />, url: "https://wa.me/9849800636", label: "WhatsApp" },
];

const HeroContent = memo(() => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white pt-20 overflow-hidden">
      
      {/* BACKGROUND DEPTH */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-slate-50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-blue-50/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
          
          {/* LEFT CONTENT */}
          <m.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="flex-1 text-left"
          >
            <m.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[2px] bg-slate-900" />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-500">
                Siddhartha Paudel
              </span>
            </m.div>
            
            <m.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-[100px] font-extrabold text-slate-900 leading-[0.9] tracking-tighter mb-10"
            >
              Full Stack <br /> 
              <span className="text-slate-400">Developer.</span>
            </m.h1>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative p-7 bg-white/40 backdrop-blur-xl rounded-2xl border border-slate-200/60 mb-12 shadow-sm max-w-xl"
            >
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                I engineer high-performance web applications using the <span className="text-slate-950 font-bold underline decoration-slate-200 underline-offset-4">MERN</span> stack, 
                <span className="text-slate-950 font-bold"> Next.js</span>, and <span className="text-slate-950 font-bold">Node.js</span>. 
                Beyond just writing code, I focus on building scalable architectures with <span className="text-slate-950 font-bold">Firebase</span> and 
                crafting fluid, intuitive user experiences that bridge the gap between design and data.
              </p>
            </m.div>

            <div className="flex flex-wrap items-center gap-10">
              <m.a 
                whileHover={{ y: -2, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="px-10 py-4 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md"
              >
                Explore Projects
              </m.a>

              <nav className="flex gap-7">
                {SOCIAL_LINKS.map((link, i) => (
                  <m.a 
                    key={i} 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + (i * 0.1) }}
                    whileHover={{ y: -3, color: "#000" }}
                    className="text-slate-400 transition-colors text-2xl"
                  >
                    {link.icon}
                  </m.a>
                ))}
              </nav>
            </div>
          </m.div>

          {/* RIGHT CONTENT: ALIGNED TO TEXT LEVEL */}
          <m.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="flex-1 flex flex-col items-center lg:items-end justify-center relative"
          >
            <m.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[420px] aspect-[4/5] z-10 lg:mt-0 mt-10"
            >
              <div className="absolute inset-0 bg-slate-100/50 blur-[80px] rounded-full translate-y-10" />
              
              <div className="relative h-full w-full overflow-hidden rounded-[50px] shadow-2xl border border-slate-100 bg-white p-2 group">
                <div className="overflow-hidden rounded-[42px] h-full w-full bg-slate-50">
                  <img 
                    src="/mainprofile.jpeg" 
                    alt="Siddhartha Paudel" 
                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* CORE STACK BADGE */}
              <m.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute -bottom-6 -left-6 bg-white py-4 px-6 rounded-3xl shadow-xl border border-slate-50 hidden md:flex items-center gap-3 z-20"
              >
                <div className="bg-slate-900 p-2 rounded-xl text-white">
                  <FaTerminal size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Core Stack</span>
                  <span className="text-[9px] font-medium text-slate-400">Next.js • Node.js • MERN • Firebase</span>
                </div>
              </m.div>
            </m.div>
          </m.div>

        </div>
      </div>
    </section>
  );
});

const Hero = () => (
  <LazyMotion features={domAnimation}>
    <HeroContent />
  </LazyMotion>
);

export default Hero;