import React, { Suspense, lazy, useRef, useMemo, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { LazyMotion, domAnimation } from "framer-motion";
import './App.css';

// Immediate Load (Better for LCP/SEO)
import Header from "./components/Header";

// Lazy Loaded Components
const Hero = lazy(() => import("./components/Hero"));
const Expertise = lazy(() => import("./components/Expertise"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const SectionLoader = lazy(() => import("./components/SectionLoader"));

// --- OPTIMIZED GLOBAL GALAXY ---
const GlobalGalaxy = memo(() => {
  const ref = useRef();
  
  // 10,000 stars requires 30,000 coordinates (x, y, z)
  const sphere = useMemo(() => {
    try {
      const data = random.inSphere(new Float32Array(30000), { radius: 1.5 });
      // Remove NaN check for production unless you encounter specific library bugs
      return data;
    } catch (e) {
      console.error("Galaxy Generation Failed:", e);
      return new Float32Array(30000).fill(0);
    }
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    // Slow, graceful rotation
    ref.current.rotation.x -= delta / 50;
    ref.current.rotation.y -= delta / 60;
    
    // Subtle pulse effect to simulate twinkling
    if (ref.current.children[0]) {
      ref.current.children[0].material.opacity = 0.4 + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#0f172a" 
          size={0.006} // Slightly larger for visibility on light backgrounds
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.5} // Increased from 0.25
        />
      </Points>
    </group>
  );
});

const App = () => {
  const currentYear = new Date().getFullYear();

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen bg-white selection:bg-slate-900 selection:text-white">
        
        {/* PERSISTENT BACKGROUND LAYER */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
            <Suspense fallback={null}>
              <GlobalGalaxy />
            </Suspense>
          </Canvas>
        </div>

        {/* MAIN CONTENT LAYER */}
        <main className="relative z-10 w-full">
          {/* Header loaded immediately for better UX */}
          <Header />
          
          <Suspense fallback={<SectionLoader />}>
            <Hero />
            <Expertise />
            <About />
            <Projects />
            <Contact />
            
            <footer className="py-20 text-center">
              <div className="max-w-7xl mx-auto px-6">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-100 to-transparent mb-12" />
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">
                  © {currentYear} Siddhartha Paudel
                </p>
                <p className="mt-4 text-[9px] font-bold text-slate-900 uppercase tracking-widest">
                  MERN • NEXT.JS • NODE.JS • FIREBASE
                </p>
              </div>
            </footer>
          </Suspense>
        </main>
      </div>
    </LazyMotion>
  );
};

export default App;