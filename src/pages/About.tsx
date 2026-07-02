/**
 * About.tsx — SwaadSetu About Page
 *
 * Design system matches Hero.tsx:
 *   • Background: #060812 (dark) / #FAFAF7 (light)
 *   • Grid overlay: rgba(251,191,36,0.04)
 *   • Accent: amber-400 / #FFBE00
 *   • Motion: framer-motion fadeUp + whileInView
 *   • Theming: DaisyUI data-theme="swaad-dark" | "swaad-light"
 *     Toggle by flipping <html data-theme="swaad-dark"> in index.html
 *     or via a ThemeContext. All colours reference CSS custom props.
 *
 * IMAGE SIZES (replace src with your own or keep Unsplash):
 *   heroImg      — 1200×800px  landscape, restaurant ambient lighting
 *   missionImg   — 800×600px   kitchen/QR code detail shot
 *   value cards  — icon-only, no images needed
 *   team strip   — 400×400px   per portrait (square, face-centered)
 */

import type { FC } from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import { Footer } from "../component/Footer";
import BackButton from "../component/ui/BackButton";
import { Helmet } from "@dr.pogodin/react-helmet";
import { CTASection } from "../component/cta-section";
import { Images } from "../assets/assets";

/* ─────────────────────────────────────────────
   Shared animation helpers (same as Hero)
───────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -48 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 48 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ─────────────────────────────────────────────
   Animated counter (copied from Hero)
───────────────────────────────────────────── */
/* const Counter = ({ target, suffix = "+" }: { target: string | number; suffix?: string }) => {
  const numeric = typeof target === "number" ? target : parseFloat(target as string);
  const isDecimal = String(target).includes(".");
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
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
            setValue(isDecimal ? parseFloat((ease * numeric).toFixed(1)) : Math.floor(ease * numeric));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numeric]);

  return <span ref={ref}>{value}{suffix}</span>;
}; */

/* ─────────────────────────────────────────────
   Floating particle (same as Hero)
───────────────────────────────────────────── */
// const Particle = ({ x, y, size, delay }: { x: string; y: string; size: number; delay: number }) => (
//   <motion.div
//     className="absolute rounded-full bg-amber-400 pointer-events-none"
//     style={{ left: x, top: y, width: size, height: size }}
//     animate={{ y: [0, -18, 0], opacity: [0.1, 0.4, 0.1] }}
//     transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
//   />
// );

// const particles = [
//   { x: "5%",  y: "15%", size: 3, delay: 0.2 },
//   { x: "20%", y: "70%", size: 4, delay: 1.5 },
//   { x: "78%", y: "25%", size: 5, delay: 0.8 },
//   { x: "92%", y: "60%", size: 3, delay: 2.1 },
//   { x: "55%", y: "8%",  size: 4, delay: 0.5 },
//   { x: "40%", y: "90%", size: 3, delay: 1.2 },
// ];

/* ─────────────────────────────────────────────
   Value card data
───────────────────────────────────────────── */
const values = [
  {
    icon: "⚡",
    title: "Operational Efficiency",
    text: "Built to reduce complexity and make daily operations effortless.",
  },
  {
    icon: "❤️",
    title: "Customer-First Experiences",
    text: "Designed to create smoother, faster, and more satisfying customer journeys.",
  },
  {
    icon: "👁️",
    title: "Real-Time Visibility",
    text: "Giving teams the information they need, when they need it.",
  },
  {
    icon: "📊",
    title: "Business-First Thinking",
    text: "Every feature is built to improve efficiency and operational control.",
  },
  {
    icon: "🚀",
    title: "Continuous Innovation",
    text: "Evolving constantly to meet the changing needs of food services.",
  },
  {
    icon: "🤝",
    title: "Reliable Partnership",
    text: "Supporting businesses beyond implementation and onboarding.",
  },
];

/* ─────────────────────────────────────────────
   Stats
───────────────────────────────────────────── */
/* const stats = [
  {
    value: 44,
    suffix: "K+",
    label: "Orders processed",
    sub: "across partner restaurants",
  },
  {
    value: 19,
    suffix: "M+",
    label: "Revenue tracked",
    sub: "through SwaadSetu dashboards",
  },
  {
    value: 300,
    suffix: "+",
    label: "Staff members",
    sub: "using our tools daily",
  },
  {
    value: 58,
    suffix: "+",
    label: "Restaurants",
    sub: "live on SwaadSetu today",
  },
]; */

/* ═══════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════ */
const About: FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  // const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  /* ─────────────────────────────────────────────
     Floating particle (same as Hero)
  ───────────────────────────────────────────── */
  const Particle = ({ x, y, size, delay }: { x: string; y: string; size: number; delay: number }) => (
    <motion.div
      className="absolute rounded-full bg-amber-400 pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -18, 0], opacity: [0.1, 0.4, 0.1] }}
      transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );

  const particles = [
    { x: "5%",  y: "15%", size: 3, delay: 0.2 },
    { x: "20%", y: "70%", size: 4, delay: 1.5 },
    { x: "78%", y: "25%", size: 5, delay: 0.8 },
    { x: "92%", y: "60%", size: 3, delay: 2.1 },
    { x: "55%", y: "8%",  size: 4, delay: 0.5 },
    { x: "40%", y: "90%", size: 3, delay: 1.2 },
  ];

  return (
    <>
      <Helmet>
        <title>About Swaad Setu – Smart Restaurant Management Platform</title>
        <meta name="description" content="Learn about Swaad Setu, our mission, vision, and how we help restaurants with smart QR ordering, dashboards, and seamless operations." />
        <meta property="og:title" content="About Swaad Setu – Smart Restaurant Management Platform" />
        <meta property="og:description" content="Learn about Swaad Setu, our mission, vision, and how we help restaurants with smart QR ordering, dashboards, and seamless operations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.swaadsetu.com/about" />
        <meta property="og:image" content="https://www.swaadsetu.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Swaad Setu – Smart Restaurant Management Platform" />
        <meta name="twitter:description" content="Learn about Swaad Setu, our mission, vision, and how we help restaurants with smart QR ordering, dashboards, and seamless operations." />
        <meta name="twitter:image" content="https://www.swaadsetu.com/logo.png" />
      </Helmet>

      {/*
        ╔══════════════════════════════════════════╗
        ║  DaisyUI theme wrapper                   ║
        ║  Swap data-theme attr for light/dark.    ║
        ║  CSS vars are declared in tailwind.config║
        ╚══════════════════════════════════════════╝
        DaisyUI custom theme in tailwind.config.js:
        ─────────────────────────────────────────
        daisyui: {
          themes: [
            {
              "swaad-dark": {
                "primary": "#fbbf24",        // amber-400
                "primary-content": "#000",
                "base-100": "#060812",
                "base-200": "#0e1525",
                "base-300": "#1a2235",
                "base-content": "#f8fafc",
                "neutral": "#1e293b",
                "neutral-content": "#94a3b8",
              },
              "swaad-light": {
                "primary": "#d97706",        // amber-600
                "primary-content": "#fff",
                "base-100": "#FAFAF7",
                "base-200": "#f3f4f0",
                "base-300": "#e5e7e2",
                "base-content": "#0f172a",
                "neutral": "#e2e8f0",
                "neutral-content": "#475569",
              },
            },
          ],
        },
        ─────────────────────────────────────────
      */}
      <div
        data-theme="swaad-dark"
        className="min-h-screen bg-[#060812] text-base-content overflow-x-hidden"
      >
        {/* ── Global background grid (matches Hero exactly) ── */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(251,191,36,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />
        {/* ── Global radial glows (matches Hero) ── */}
        <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full bg-amber-500/10 blur-[150px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-orange-600/10 blur-[140px]" />
        </div>

        {/* ── Fixed header ── */}
        <header className="fixed top-0 left-0 w-full z-50 bg-[#060812]/80 backdrop-blur-md border-b border-amber-400/10">
          <Navbar />
          <div className="px-0 -mx-6 py-2">
            <BackButton />
          </div>
        </header>

        {/* ════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════ */}
        <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 pb-16">

          {/* Grid overlay */}
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(251,191,36,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.035) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Glows */}
          <div className="absolute inset-0 z-[1] pointer-events-none">
            <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[130px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-orange-600/10 blur-[120px]" />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 z-[2] pointer-events-none">
            {particles.map((p, i) => <Particle key={i} {...p} />)}
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-10 items-center">
            
            {/* Left: Text & Story */}
            <div className="flex flex-col gap-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <motion.div {...fadeUp(0.1)} className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(251,191,36,0.15)] backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  Our Story
                </div>
              </motion.div>

              <motion.h1
                {...fadeUp(0.2)}
                className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-lg"
              >
               Building The {" "}
                <span className="relative inline-block mb-3">
                  <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-xl ">
                    Operating System For
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.5)] "
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                  />
                </span>
                <br />Modern Food Services
              </motion.h1>

              <motion.p
                {...fadeUp(0.35)}
                className="text-slate-300 text-lg sm:text-xl leading-relaxed font-light drop-shadow-sm max-w-xl mx-auto lg:mx-0"
              >
                SwaadSetu helps restaurants, cafés, QSRs, cloud kitchens, and food courts streamline operations through a unified platform for ordering, billing, payments, and business management.
              </motion.p>
            </div>

            {/* Right: Modern floating image composition */}
            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] flex items-center justify-center perspective-1000 mt-10 lg:mt-0">
              
              {(() => {
              
                return (
                  <>
               <motion.div
                  initial={{ opacity: 0, x: 50, y: 30, rotateY: -10, rotateZ: 5 }}
                  animate={{ opacity: 1, x: 0, y: 0, rotateY: -10, rotateZ: 5 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  className="absolute w-[80%] h-[80%] rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-20"
               >
                      <img src={Images.our_story_1} alt="Restaurant interior" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060812] via-transparent to-transparent opacity-80" />
               </motion.div>
               
               <motion.div
                  initial={{ opacity: 0, x: -50, y: -30, rotateY: 15, rotateZ: -5 }}
                  animate={{ opacity: 1, x: -30, y: 30, rotateY: 15, rotateZ: -5 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                      className="absolute left-0 bottom-10 w-[50%] h-[50%] rounded-3xl overflow-hidden border border-amber-400/20 shadow-[0_20px_50px_rgba(251,191,36,0.2)] z-30 backdrop-blur-md bg-black/40 p-2 hidden sm:block"
               >
                      <img src={Images.our_story_2} alt="QR Menu Detail" className="w-full h-full object-cover rounded-2xl" />
               </motion.div>
                  </>
                );
              })()}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            SECTION 1 — Intro + image grid
        ════════════════════════════════════ */}
        <section className="relative py-8 overflow-hidden">

          {/* Radial glow */}
          <div className="absolute top-0 right-[-15%] w-[600px] h-[500px] rounded-full bg-amber-500/8 blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left: text */}
              <div>
                <motion.div {...fadeLeft(0.05)}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(251,191,36,0.15)] backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    Who We Are
                  </div>
                </motion.div>

                <motion.h2
                  {...fadeLeft(0.15)}
                  className="mt-4 text-3xl sm:text-5xl font-bold leading-tight text-white"
                >
                  Built for { " "}
                  <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                  Modern Food Businesses
                  </span>
                </motion.h2>

                <motion.p {...fadeLeft(0.28)} className="mt-6 text-slate-400 leading-relaxed">
                 SwaadSetu is designed to help food businesses run smarter, faster, and more efficiently. We bring essential operational workflows into one connected platform, enabling teams to manage customer experiences, streamline service operations, and gain better visibility across their business.
                </motion.p>

                <motion.p {...fadeLeft(0.38)} className="mt-4 text-slate-500 leading-relaxed text-sm">
                 From improving guest experiences to streamlining day-to-day operations, SwaadSetu gives teams the clarity and control needed to grow confidently.
                </motion.p>

                {/* Inline highlight pills */}
                <motion.div {...fadeLeft(0.48)} className="mt-8 flex flex-wrap gap-3">
                  {[
                      "Modern Food Services",
                      "Unified Operations",
                      "Real-Time Insights",
                      "Efficient Workflows",
                      "Scalable Platform"
                      ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border border-amber-400/25 text-amber-300/80 bg-amber-400/5"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Right: asymmetric image grid */}
              <div className="relative h-[480px] lg:h-auto">
                {(() => {
                  const gridImages = {
                    grid1:Images.WW_1 ,
                    grid2:Images.WW_2 ,
                    grid3:Images.WW_3,
                  };
                  return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                      {/* Tall left image — 600×800px recommended */}
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="sm:row-span-2 rounded-2xl overflow-hidden border border-amber-400/10 shadow-[0_0_40px_rgba(251,191,36,0.08)]"
                      >
                        <img
                          src={gridImages.grid1}
                          alt="Busy restaurant kitchen — 600×800px"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </motion.div>

                      {/* Top-right — 600×500px recommended */}
                      <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="rounded-2xl overflow-hidden border border-amber-400/10"
                      >
                        <img
                          src={gridImages.grid2}
                          alt="Beautifully plated dish — 600×500px"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </motion.div>

                      {/* Bottom-right — 600×800px recommended */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="rounded-2xl overflow-hidden border border-amber-400/10 mt-0 sm:mt-4"
                      >
                        <img
                          src={gridImages.grid3}
                          alt="Happy diner scanning QR — 600×800px"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </motion.div>
                    </div>
                  );
                })()}

                {/* Floating amber chip */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-5 -left-6 bg-[#0d1020] border border-amber-400/20 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl backdrop-blur-sm"
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-400/15 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-white">New restaurant joined</p>
                    <p className="text-sm font-bold text-amber-300">2 min ago</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            SECTION 2 — Stats bar (Hidden for new company)
        ════════════════════════════════════ */}
        {/* <section className="relative py-16 overflow-hidden">

          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/25 to-transparent mb-16" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  {...fadeUp(i * 0.1)}
                  className="flex flex-col items-center text-center gap-1"
                >
                  <span className="text-4xl lg:text-5xl font-black tabular-nums bg-gradient-to-b from-amber-200 to-amber-500 bg-clip-text text-transparent">
                    <Counter target={s.value} suffix={s.suffix} />
                  </span>
                  <span className="text-sm font-semibold text-white mt-1">{s.label}</span>
                  <span className="text-xs text-slate-500">{s.sub}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/25 to-transparent mt-16" />
        </section> */}

        {/* ════════════════════════════════════
            SECTION 3 — Mission
        ════════════════════════════════════ */}
        <section className="relative py-8 overflow-hidden">

          {/* Left glow */}
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-amber-600/10 blur-[150px] pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left image */}
              <motion.div
                {...fadeLeft(0.1)}
                className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] z-10 group order-2 lg:order-1"
              >
                {(() => {
                  const missionImage = Images.our_mission_2;
                  return (
                    <>
                      <img
                        src={missionImage}
                        alt="Customer scanning QR menu at restaurant table"
                        className="w-full h-auto object-cover transform-gpu group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060812] via-transparent to-transparent opacity-80 pointer-events-none" />
                    </>
                  );
                })()}
              </motion.div>

              {/* Right: mission text */}
              <div className="flex flex-col gap-6 z-10 order-1 lg:order-2">
                <motion.div {...fadeRight(0.05)}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(251,191,36,0.15)] backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    Our Mission
                  </div>
                </motion.div>

                <motion.h2
                  {...fadeRight(0.15)}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-white drop-shadow-md"
                >
                  Every Food Business  Deserves{" "}
                  <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent drop-shadow-xl">
                    World-Class Tools.
                  </span>
                </motion.h2>

                <motion.p {...fadeRight(0.28)} className="text-slate-300 text-lg leading-relaxed font-light drop-shadow-sm">
                 We believe great hospitality is powered by great operations. SwaadSetu helps food businesses streamline workflows, improve coordination, and create better experiences for both teams and guests.
                </motion.p>

                <motion.p {...fadeRight(0.38)} className="text-slate-400 leading-relaxed text-base font-light">
                 Built for modern food service environments, our platform enables businesses to operate with greater clarity, control, and confidence.
                </motion.p>

                {/* Checklist */}
                <motion.ul {...fadeRight(0.48)} className="mt-4 space-y-4">
                  {[
                      "Operational Simplicity",
                      "Connected Workflows",
                      "Real-Time Visibility",
                      "Growth-Focused Platform"
                      ].map((item) => (
                    <li key={item} className="flex items-start gap-4 text-base text-slate-300 font-medium">
                      <span className="w-6 h-6 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(251,191,36,0.2)]">
                        <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            SECTION 4 — Team Values
        ════════════════════════════════════ */}
        <section className="relative py-6 md:py-10 overflow-hidden">

          {/* Grid background — same as Hero */}
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(rgba(251,191,36,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.04) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-amber-500/6 blur-[120px] pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

            {/* Section header */}
            <motion.div {...fadeUp(0.05)} className="mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(251,191,36,0.15)] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                How We Work
              </div>
            </motion.div>

            <motion.h2
              {...fadeUp(0.15)}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-md leading-[1.1]"
            >
             The  {" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent drop-shadow-xl">
               Principles {" "}
              </span>
              Behind SwaadSetu
            </motion.h2>

            <motion.p
              {...fadeUp(0.25)}
              className="text-slate-300 text-lg max-w-2xl mb-10 font-light drop-shadow-sm leading-relaxed"
            >
              Every decision we make is guided by a simple goal: helping food businesses operate more efficiently, serve better experiences, and grow with confidence.
            </motion.p>

            {/* Values grid — Premium Glassmorphism */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {values.map((v, idx) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: 0.08 * idx, ease: [0.22, 1, 0.36, 1] }}
                  className="relative bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(251,191,36,0.1)] hover:bg-white/[0.04] group rounded-3xl overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="p-8 relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl group-hover:bg-amber-400/20 group-hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(251,191,36,0.1)] shrink-0">
                        {v.icon}
                      </div>
                      <h3 className="text-white text-lg font-bold tracking-wide leading-tight">{v.title}</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed font-light flex-grow">{v.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            CTA BAND
        ════════════════════════════════════ */}
         <CTASection/>

         {/* <section className="relative py-24 overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
          {/* ── Background grid ── 
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(251,191,36,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.04) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

         ── Glow blobs ── 
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-amber-500/10 blur-[140px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[400px] rounded-full bg-orange-600/6 blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[400px] rounded-full bg-amber-400/5 blur-[120px]" />
          </div>

          {/* ── Decorative rings ── 
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] rounded-full border border-amber-400/5" />
            <div className="absolute w-[400px] h-[400px] rounded-full border border-amber-400/8" />
            <div className="absolute w-[200px] h-[200px] rounded-full border border-amber-400/10" />
          </div>

          {/* <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            {/* ── Badge ── 
            <motion.div {...fadeUp(0)} className="flex justify-center mb-6">
              <div className="badge badge-outline border-amber-400/40 text-amber-300 bg-amber-400/5 gap-2 px-4 py-3 text-xs font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Join the platform
              </div>
            </motion.div> 

            {/* ── Headline ── 
            <motion.h2 {...fadeUp(0.1)} className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.05] mb-6">
              Ready to{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Transform
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
                />
              </span>{" "}
              Your Food Business?
            </motion.h2>

            {/* ── Subtext ── 
            <motion.p {...fadeUp(0.2)} className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-10">
             Join restaurants, cafés, QSRs, cloud kitchens, and food courts using SwaadSetu to streamline operations, improve customer experience, and grow profitably.
            </motion.p>

            {/* ── Benefit pills ── 
            <motion.div {...fadeUp(0.28)} className="flex flex-wrap justify-center gap-3 mb-10">
              {["QR Ordering & Payments" , "Business Insights" , "Complete Operational Control"].map((label, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/[0.05] border border-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                >
                  <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-slate-300">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* ── CTA buttons ── 
            <motion.div {...fadeUp(0.35)} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdjwZxtGkYIpulXopAiZBd-BKbQkqA81--N2DNZ5DqqMYTCXw/viewform?embedded=true",
                    "_blank",
                  )
                }
                className="btn btn-lg bg-gradient-to-r from-amber-400 to-orange-400 text-black font-bold border-none shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] hover:scale-[1.03] active:scale-95 transition-all duration-200 group cursor-pointer flex items-center justify-center gap-2 px-3 py-2 rounded-2xl"
              >
                Book a Free Demo
                <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>

              <button
                onClick={() => (window.location.href = "https://www.swaadsetu.com/features")}
                className="btn btn-lg btn-ghost border border-amber-400/30 text-amber-300 hover:bg-amber-400/10 hover:border-amber-400/60 transition-all duration-200 cursor-pointer group px-3 py-2 rounded-2xl"
              >
               Talk to Our Team
              </button>
            </motion.div>
          </div> 
        </section>*/}
        <Footer />
      </div>
    </>
  );
};

export default About;