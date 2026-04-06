import React, { Suspense, lazy, memo } from "react";
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

const App = () => {
  const currentYear = new Date().getFullYear();

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen bg-white selection:bg-slate-900 selection:text-white">
        
        {/* 3D Galaxy Layer removed for a cleaner, 
            minimalist aesthetic and faster performance. 
        */}

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