import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-rose-500" />,
      label: "Email",
      value: "psiddhartha62@gmail.com",
      href: "mailto:psiddhartha62@gmail.com",
    },
    {
      icon: <FaWhatsapp className="text-emerald-500" />,
      label: "WhatsApp",
      value: "+977 9849800636",
      href: "https://wa.me/9849800636",
    },
    {
      icon: <FaLinkedin className="text-blue-600" />,
      label: "LinkedIn",
      value: "Siddhartha Paudel",
      href: "https://www.linkedin.com/in/siddhartha-paudel-53911032b/",
    },
    {
      icon: <FaGithub className="text-slate-900" />,
      label: "GitHub",
      value: "SiddharthPaudel",
      href: "https://github.com/SiddharthPaudel",
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section id="contact" className="relative py-32 overflow-hidden bg-white">
        
        {/* Background Accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-purple-50/50 to-transparent -z-10" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Side: The "Big Pitch" */}
            <div>
              <m.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xs uppercase tracking-[0.3em] text-purple-600 font-bold mb-6">
                  Get in Touch
                </h2>
                <h3 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-[0.9] mb-8">
                  Let’s build the <br /> 
                  <span className="text-slate-300">next big thing.</span>
                </h3>
                <p className="text-lg text-slate-500 max-w-md leading-relaxed">
                  I'm currently based in <span className="text-slate-900 font-medium">Nepal</span> and available for 
                  freelance projects or full-time roles. If you have an idea, 
                  let's make it a reality.
                </p>
              </m.div>
            </div>

            {/* Right Side: Direct Links */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, i) => (
                <m.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-purple-200 hover:shadow-xl hover:shadow-purple-50 transition-all duration-500"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div className="flex justify-between items-start mb-8">
                      <div className="p-3 bg-white rounded-xl shadow-sm text-xl">
                        {method.icon}
                      </div>
                      <HiArrowUpRight className="text-slate-300 group-hover:text-purple-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
                    </div>
                    
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                        {method.label}
                      </p>
                      <p className="text-sm font-bold text-slate-900 truncate">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </m.a>
              ))}
            </div>

          </div>

          {/* Footer-lite Branding */}
          <div className="mt-32 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Siddhartha Paudel. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                Available for new opportunities
              </p>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Contact;