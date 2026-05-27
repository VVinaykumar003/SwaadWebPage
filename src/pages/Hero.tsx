"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Images } from "../assets/assets";

/* ── Animated counter ── */
const Counter = ({ target, label }: { target: number; label: string }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setValue(Math.floor(ease * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span className="text-3xl lg:text-4xl font-black tabular-nums bg-gradient-to-b from-amber-200 to-amber-500 bg-clip-text text-transparent">
        {value}+
      </span>
      <span className="text-[10px] md:text-xs text-slate-400 text-center leading-tight max-w-[90px]">
        {label}
      </span>
    </div>
  );
};

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
    <section className="relative min-h-screen bg-[#060812] overflow-hidden flex flex-col">

      {/* ── Background grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Radial glow ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[500px] h-[400px] rounded-full bg-amber-600/8 blur-[100px]" />
        <div className="absolute bottom-0 right-[-10%] w-[400px] h-[350px] rounded-full bg-orange-500/6 blur-[90px]" />
      </div>

      {/* ── Floating particles ── */}
      {particles.map((p, i) => <Particle key={i} {...p} />)}

      {/* ── Navbar placeholder spacer ── */}
      <div className="h-20" />

      {/* ── DESKTOP layout ── */}
      <div className="hidden md:grid md:grid-cols-2 flex-1 items-center px-8 lg:px-20 gap-8 pb-16 pt-8">

        {/* Left: copy */}
        <div className="flex flex-col gap-6 z-10">

          {/* Badge */}
          <motion.div {...fadeUp(0.1)}>
            <div className="badge badge-outline border-amber-400/40 text-amber-300 bg-amber-400/5 gap-2 px-4 py-3 text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Now live across India
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div {...fadeUp(0.25)}>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-white">
              Your Menu.{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Smarter.
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                />
              </span>
              <br />
              Orders.{" "}
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Faster.
              </span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p {...fadeUp(0.4)} className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-lg font-light">
            SwaadSetu transforms your restaurant with instant QR menus,
            contactless ordering, and real-time insights — zero friction, pure delight.
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.55)} className="flex flex-row gap-4 flex-wrap">
            <button
              onClick={handleRedirect}
              className="btn btn-lg bg-gradient-to-r from-amber-400 to-orange-400 text-black font-bold border-none shadow-[0_0_32px_rgba(251,191,36,0.4)] hover:shadow-[0_0_48px_rgba(251,191,36,0.6)] hover:scale-[1.03] active:scale-95 transition-all duration-200 px-3 py-2.5 flex items-center rounded-xl"
            >
              Book a Demo
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
            <button
              className="btn btn-lg btn-ghost border border-amber-400/30 text-amber-300 hover:bg-amber-400/10 hover:border-amber-400/60 transition-all duration-200 px-3 py-2.5  rounded-xl"
              onClick={() => (window.location.href = "https://www.swaadsetu.com/features")}
            >
              See How It Works
            </button>
          </motion.div>

          {/* Divider */}
          <motion.div {...fadeUp(0.65)} className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

          {/* Counters */}
          <motion.div {...fadeUp(0.75)} className="flex gap-10">
            <Counter target={58}  label="Restaurants Using SwaadSetu" />
            <Counter target={100} label="Daily Orders Processed" />
            <Counter target={100} label="Happy Diners Served" />
          </motion.div>
        </div>

        {/* Right: hero image with glow frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          {/* Glow ring behind image */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/20 to-orange-500/10 blur-2xl scale-110 pointer-events-none" />

          <div className="relative rounded-3xl overflow-hidden border border-amber-400/10 shadow-[0_0_80px_rgba(251,191,36,0.15)]">
            <img
              src={Images.pcImage}
              alt="QR menu and digital ordering platform for restaurants in India"
              className="w-full h-auto object-cover"
              loading="eager"
            />
            {/* Subtle overlay gradient on image bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060812]/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating stat chip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute -bottom-4 -left-6 bg-[#0e1525] border border-amber-400/20 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl backdrop-blur-sm"
          >
            <div className="w-8 h-8 rounded-xl bg-amber-400/15 flex items-center justify-center">
              <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] text-slate-500">Orders today</p>
              <p className="text-sm font-bold text-amber-300">+2,340</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="absolute -top-4 -right-4 bg-[#0e1525] border border-amber-400/20 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl backdrop-blur-sm"
          >
            <div className="w-8 h-8 rounded-xl bg-green-400/15 flex items-center justify-center">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] text-slate-500">Avg. wait time</p>
              <p className="text-sm font-bold text-green-300">−40%</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── MOBILE layout ── */}
      <div className="flex md:hidden flex-col flex-1 px-5 pt-6 pb-10 gap-7 z-10">

        {/* Badge */}
        <motion.div {...fadeUp(0.1)}>
          <div className="badge badge-outline border-amber-400/40 text-amber-300 bg-amber-400/5 gap-2 px-3 py-2.5 text-[10px] font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Now live across India
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...fadeUp(0.2)} className="text-4xl font-black leading-tight tracking-tight text-white">
          Your Menu.{" "}
          <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">Smarter.</span>
          <br />
          Orders.{" "}
          <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">Faster.</span>
        </motion.h1>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-2xl overflow-hidden border border-amber-400/10 shadow-[0_0_40px_rgba(251,191,36,0.12)]"
        >
          <img
            src={Images.mobileImage}
            alt="Contactless QR menu system for cafes and restaurants"
            className="w-full h-auto object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060812]/50 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Subtext */}
        <motion.p {...fadeUp(0.45)} className="text-slate-400 text-base leading-relaxed">
          QR menus, contactless ordering & real-time insights — built for Indian restaurants.
        </motion.p>

        {/* Buttons */}
        <motion.div {...fadeUp(0.55)} className="flex flex-col gap-3">
          <button
            onClick={handleRedirect}
            className="btn btn-md w-full bg-gradient-to-r from-amber-400 to-orange-400 text-black font-bold border-none shadow-[0_0_24px_rgba(251,191,36,0.35)] active:scale-95 transition-all"
          >
            Book a Demo
          </button>
          <button
            className="btn btn-md w-full btn-ghost border border-amber-400/30 text-amber-300 hover:bg-amber-400/10"
            onClick={() => (window.location.href = "https://www.swaadsetu.com/features")}
          >
            See How It Works
          </button>
        </motion.div>

        {/* Counters */}
        <motion.div {...fadeUp(0.65)}>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent mb-6" />
          <div className="flex justify-between gap-4">
            <Counter target={58}  label="Restaurants Using SwaadSetu" />
            <Counter target={100} label="Daily Orders Processed" />
            <Counter target={100} label="Happy Diners Served" />
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;