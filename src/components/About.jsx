import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { m } from "framer-motion";

const About = () => {
  const softSkills = [
    "Technical Communication",
    "Problem Solving",
    "Agile Methodology",
    "Attention to Detail",
  ];

  const experience = [
    {
      company: "Khudkila Pvt. Ltd.",
      logo: "/khudkila2.jpg", // Using your new cropped version
      role: "Full Stack Developer Intern",
      date: "2026 — Present",
      status: "Active",
    }
  ];

  const education = [
    {
      school: "Softwarica College",
      logo: "/softwarica.png",
      degree: "BSc (Hons) Computing",
      date: "2022 — 2025",
      status: "Completed",
    },
    {
      school: "Valmiki Shiksha Sadan",
      logo: "/valmiki.png",
      degree: "Grade 12 · Science",
      date: "Graduated",
    },
  ];

  return (
    <section id="about" className="relative bg-white py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20">
          
          {/* LEFT SIDE */}
          <m.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="relative p-10 rounded-[40px] bg-slate-50/80 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-slate-900" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-900">
                  Professional Narrative
                </h3>
              </div>
              <p className="text-xl text-slate-500 leading-[1.7] font-medium">
                I am a <span className="text-slate-900 font-bold underline decoration-slate-200 underline-offset-8">Full Stack Developer</span> based in Nepal. 
                I specialize in building high-performance applications that prioritize both technical efficiency and refined user experiences.
              </p>
            </div>

            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">
                Interpersonal Strengths
              </h4>
              <ul className="grid grid-cols-2 gap-y-6 gap-x-4">
                {softSkills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-[11px] text-slate-900 font-bold uppercase tracking-tight">
                    <FaCheckCircle className="text-slate-900" size={14} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </m.div>

          {/* RIGHT SIDE: IMPROVED LOGO VISIBILITY */}
          <m.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* WORK EXPERIENCE */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-[1px] bg-slate-900" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-900">
                  Experience
                </h3>
              </div>
              
              <div className="space-y-16">
                {experience.map((exp, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-8 group">
                    {/* GIANT LOGO CONTAINER - Optimized for cropped images */}
                    <div className="flex-shrink-0 w-24 h-24 rounded-3xl bg-white border-2 border-slate-100 shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-indigo-500/50 group-hover:scale-105">
                      <img 
                        src={exp.logo} 
                        alt={exp.company} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        onError={(e) => e.target.src = "https://ui-avatars.com/api/?name=K&background=0f172a&color=fff&size=128"} 
                      />
                    </div>
                    
                    <div className="flex flex-col gap-1 justify-center">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h4 className="text-xl font-black text-slate-900 tracking-tight">{exp.company}</h4>
                        <span className="text-[9px] font-black bg-emerald-500 text-white px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-emerald-500/20">
                          {exp.status}
                        </span>
                      </div>
                      <p className="text-sm text-indigo-600 font-bold uppercase tracking-wider">{exp.role}</p>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-1">{exp.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EDUCATION */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-[1px] bg-slate-900" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-900">
                  Education
                </h3>
              </div>
              
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-8 group">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-slate-400">
                      <img 
                        src={edu.logo} 
                        alt={edu.school} 
                        className="w-full h-full object-contain p-2" 
                        onError={(e) => e.target.src = `https://ui-avatars.com/api/?name=${edu.school[0]}&background=f1f5f9&color=64748b&size=128`} 
                      />
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h4 className="text-lg font-bold text-slate-800 tracking-tight">{edu.school}</h4>
                        {edu.status && (
                          <span className="text-[8px] font-black bg-slate-900 text-white px-2 py-0.5 rounded-full uppercase tracking-widest">
                            {edu.status}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{edu.degree}</p>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 mt-1">
                        {edu.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </m.div>

        </div>
      </div>
    </section>
  );
};

export default About;