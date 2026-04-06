import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

const Expertise = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Redux"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "Firebase"],
    },
    {
      title: "Database & Tools",
      skills: ["MongoDB", "SQL", "Git/GitHub", "Agile", "Postman"],
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section 
        id="skills" 
        className="relative max-w-full overflow-hidden bg-white py-32 border-t border-slate-50"
      >
        {/* Starfield/Canvas Layer has been removed for a clean, minimalist look */}

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="mb-20 text-center lg:text-left">
            <m.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <div className="w-12 h-[2px] bg-slate-900" />
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-slate-900 font-black">
                Technical Stack
              </h2>
            </m.div>
            
            <m.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter"
            >
              My Expertise.
            </m.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {skillCategories.map((cat, i) => (
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                key={cat.title}
                className="group"
              >
                <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.3em] mb-10 border-b border-slate-100 pb-4 flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-slate-900 transition-colors" />
                  {cat.title}
                </h4>
                
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2.5 bg-white border border-slate-100 text-slate-500 text-[11px] font-bold uppercase tracking-widest rounded-full hover:border-slate-900 hover:text-slate-900 hover:shadow-lg transition-all duration-500 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Expertise;