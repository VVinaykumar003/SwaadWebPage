"use client";

import { motion } from "framer-motion";
import { Images } from "../assets/assets";

/* ── Floating particle ── */
const Particle = ({ x, y, size, delay }: { x: string; y: string; size: number; delay: number }) => (
  <motion.div
    className="absolute rounded-full bg-amber-400 pointer-events-none"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{ y: [0, -18, 0], opacity: [0.15, 0.5, 0.15] }}
    transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const particles = [
  { x: "8%",  y: "20%", size: 4, delay: 0 },
  { x: "15%", y: "65%", size: 3, delay: 1.2 },
  { x: "82%", y: "30%", size: 5, delay: 0.7 },
  { x: "90%", y: "70%", size: 3, delay: 2 },
  { x: "50%", y: "10%", size: 4, delay: 0.4 },
  { x: "72%", y: "15%", size: 3, delay: 1.8 },
  { x: "25%", y: "85%", size: 4, delay: 0.9 },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const Hero = () => {
  const handleRedirect = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdjwZxtGkYIpulXopAiZBd-BKbQkqA81--N2DNZ5DqqMYTCXw/viewform?embedded=true",
      "_blank",
    );
  };

  return (
    <section className="relative min-h-screen bg-[#060812] overflow-hidden flex items-center ">
      {/* ── Background grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Radial glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full bg-amber-500/10 blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-orange-600/10 blur-[140px]" />
      </div>

      {/* ── Floating particles ── */}
      {particles.map((p, i) => <Particle key={i} {...p} />)}

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-8 items-center mt-20 lg:mt-5">
        
        {/* ══════ LEFT: COPY & CTA ══════ */}
        <div className="flex flex-col gap-6 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left z-20 ">
          
          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(251,191,36,0.15)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              THE FOOD SERVICE OS
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div {...fadeUp(0.2)}>
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg">
              Operating System{" "}
              <br className="hidden sm:block" />
              for{" "}
              <span className="relative inline-block mt-2 sm:mt-0">
                <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-xl">
                  Modern Food Service.
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.5)]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p {...fadeUp(0.35)} className="text-slate-300 text-base sm:text-xl leading-relaxed font-light drop-shadow-sm max-w-xl mx-auto lg:mx-0">
          SwaadSetu is the operating system for modern food services, helping businesses manage ordering, billing, inventory, expenses, profit tracking, and daily operations through one connected platform.
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleRedirect}
              className="btn btn-lg h-[56px] px-8 bg-gradient-to-r from-amber-400 to-orange-400 text-black font-bold border-none rounded-2xl shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group flex items-center gap-2"
            >
              Book a Live Demo
              <svg
                className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
            <button
              onClick={() => (window.location.href = "/features")}
              className="btn btn-lg h-[56px] px-8 btn-ghost border border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-2xl transition-all duration-300 backdrop-blur-sm"
            >
              Explore Features
            </button>
          </motion.div>
          
          {/* Quick tags */}
          <motion.div {...fadeUp(0.6)} className="flex flex-wrap justify-center lg:justify-start gap-3 mt-2">
             {["Smart Ordering", "Business Insights", "Operational Control"].map((tag, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                   <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                   {tag}
                </div>
             ))}
          </motion.div>

        </div>

        {/* ══════ RIGHT: FLOATING UI COMPOSITION ══════ */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[650px] flex items-center justify-center lg:justify-end perspective-1000 mt-10 lg:mt-0">
           
           {/* Center glow behind images */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-500/20 blur-[100px] rounded-full pointer-events-none" />

           {/* 1. Background Image: Admin Dashboard */}
           <motion.div
              initial={{ opacity: 0, x: 60, y: -30, rotateY: -15, rotateX: 5 }}
              animate={{ opacity: 1, x: 0, y: 0, rotateY: -15, rotateX: 5 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="absolute right-0 sm:right-10 lg:-right-10 top-0 lg:top-10 w-[85%] sm:w-[75%] lg:w-[95%] rounded-2xl sm:rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden bg-[#0a0a0a] z-10"
              style={{ transformStyle: "preserve-3d" }}
           >
              <div className="w-full h-8 bg-black/60 flex items-center px-4 gap-2 border-b border-white/5">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                 <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <img 
                 src={Images.Mockup_1} 
                 alt="Admin Dashboard" 
                 className="w-full h-auto opacity-90 mix-blend-lighten"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060812] via-transparent to-transparent opacity-60" />
           </motion.div>

           {/* 2. Foreground Image: Mobile App */}
           <motion.div
              initial={{ opacity: 0, y: 100, x: -60 }}
              animate={{ opacity: 1, y: 30, x: -20 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="absolute left-0 sm:left-10 lg:-left-10 bottom-0 lg:bottom-10 w-[160px] sm:w-[220px] lg:w-[200px] rounded-[2rem] sm:rounded-[2.5rem] border-[6px] sm:border-[8px] border-[#111] shadow-[0_30px_60px_rgba(0,0,0,0.9)] overflow-hidden bg-black z-20 ring-1 ring-white/10"
           >
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-4 sm:h-5 bg-[#111] rounded-b-xl z-30" />
              
              <img 
                 src={Images.Mockup_2} 
                 alt="Mobile Ordering Interface" 
                 className="w-full h-auto"
              />
              
              {/* Phone Bottom Bar */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 sm:h-1.5 bg-white/30 rounded-full z-30" />
           </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;