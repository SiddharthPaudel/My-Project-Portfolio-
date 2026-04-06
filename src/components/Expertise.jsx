import React, { memo, Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { m, LazyMotion, domAnimation } from "framer-motion";

// --- THE GALAXY (10,000 STARS) ---
const GalaxyBackground = memo(({ starOpacity = 0.2 }) => {
  const ref = useRef();
  const sphere = useMemo(() => random.inSphere(new Float32Array(10000), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 45;
    ref.current.rotation.y -= delta / 55;
    // Breathing/Twinkle animation
    if (ref.current.children[0]) {
      ref.current.children[0].material.opacity = (starOpacity - 0.05) + Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#0f172a" 
          size={0.0035} 
          sizeAttenuation={true}
          depthWrite={false}
          opacity={starOpacity}
        />
      </Points>
    </group>
  );
});

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
      {/* Background matches Hero (bg-white) and removes previous py-24 for py-32 for better spacing */}
      <section id="skills" className="relative max-w-full overflow-hidden bg-white py-32 border-t border-slate-50">
        
        {/* Same 10k Starfield as Hero */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
              <GalaxyBackground starOpacity={0.15} />
            </Suspense>
          </Canvas>
        </div>

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
                {/* Clean border and bold text instead of purple markers */}
                <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.3em] mb-10 border-b border-slate-100 pb-4 flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-slate-900 transition-colors" />
                  {cat.title}
                </h4>
                
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2.5 bg-white/40 backdrop-blur-md border border-slate-100 text-slate-500 text-[11px] font-bold uppercase tracking-widest rounded-full hover:border-slate-900 hover:text-slate-900 hover:shadow-lg transition-all duration-500 cursor-default"
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