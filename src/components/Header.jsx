import React, { memo, useState, useEffect } from "react";
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { LayoutGrid, User, Code, Send } from "lucide-react";

const navItems = [
  { label: "Expertise", href: "#skills", icon: LayoutGrid },
  { label: "About", href: "#about", icon: User },
  { label: "Work", href: "#projects", icon: Code },
  { label: "Contact", href: "#contact", icon: Send },
];

const Header = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Threshold for the "Island" to contract
      setIsScrolled(window.scrollY > 50);

      const sectionIds = ["skills", "about", "projects", "contact"];
      let currentSection = "home";

      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 300) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "#home");
    setActiveSection("home");
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-8 pointer-events-none"
      >
        <m.div 
          layout
          className={`
            pointer-events-auto flex items-center justify-between overflow-hidden
            rounded-full border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isScrolled 
              ? "bg-slate-950/90 backdrop-blur-2xl border-white/10 shadow-2xl px-2 py-2 w-auto gap-2 md:gap-6" 
              : "bg-white/70 backdrop-blur-md border-slate-200/50 px-4 md:px-6 py-3 w-full max-w-5xl gap-4 md:gap-8"
            }
          `}
        >
          
          {/* BRANDING / NAME */}
          <m.div layout className="flex items-center pl-2">
            <a 
              href="#home" 
              onClick={scrollToTop}
              className="group flex items-center gap-2"
            >
              <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${isScrolled ? 'bg-white' : 'bg-slate-900'}`} />
              <span className={`text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-slate-900'}`}>
                Siddharth
              </span>
            </a>
          </m.div>

          {/* DYNAMIC NAVIGATION */}
          <m.nav layout className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              const Icon = item.icon;
              
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`
                    relative px-3 md:px-5 py-2 rounded-full transition-all duration-500 group
                    ${isActive 
                      ? (isScrolled ? "text-white" : "text-slate-900") 
                      : (isScrolled ? "text-white/40 hover:text-white" : "text-slate-400 hover:text-slate-900")
                    }
                  `}
                >
                  {/* Desktop Label: Only visible if NOT scrolled AND on medium screens+ */}
                  <span className={`
                    text-[9px] font-black uppercase tracking-[0.2em] relative z-10
                    ${isScrolled ? 'hidden' : 'hidden md:block'}
                  `}>
                    {item.label}
                  </span>

                  {/* Icon: Visible when scrolled OR on mobile */}
                  <span className={`
                    relative z-10 p-1 
                    ${isScrolled ? 'block' : 'block md:hidden'}
                  `}>
                    <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                  </span>
                  
                  {/* Active Background Transition */}
                  <AnimatePresence>
                    {isActive && (
                      <m.div
                        layoutId="islandHighlight"
                        className={`absolute inset-0 rounded-full -z-0 ${isScrolled ? 'bg-white/10' : 'bg-slate-900/5'}`}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </AnimatePresence>
                </a>
              );
            })}
          </m.nav>

          {/* HIRE ME PILL: Hidden when island contracts or on mobile */}
          {!isScrolled && (
            <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="hidden lg:flex items-center pr-2"
            >
               <a 
                href="#contact" 
                className="px-5 py-2 bg-slate-900 rounded-full text-[9px] font-black text-white uppercase tracking-widest hover:bg-slate-800 transition-all"
               >
                 Let's Talk
               </a>
            </m.div>
          )}
        </m.div>
      </m.header>
    </LazyMotion>
  );
});

export default Header;