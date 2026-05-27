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
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../component/Navbar";
import { Footer } from "../component/Footer";
import BackButton from "../component/ui/BackButton";
import { Helmet } from "@dr.pogodin/react-helmet";

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
const Counter = ({ target, suffix = "+" }: { target: string | number; suffix?: string }) => {
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
};

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

/* ─────────────────────────────────────────────
   Value card data
───────────────────────────────────────────── */
const values = [
  {
    icon: "✦",
    title: "Be World-Class",
    text: "We build tools as polished as the best global SaaS — rooted in Indian restaurant reality.",
  },
  {
    icon: "◈",
    title: "Share Everything",
    text: "We document, teach, and share. When one person learns, everyone — including our partners — benefits.",
  },
  {
    icon: "⟳",
    title: "Always Learning",
    text: "From customer feedback to new tech, we stay curious and ship improvements one release at a time.",
  },
  {
    icon: "❋",
    title: "Be Supportive",
    text: "Great service behind the scenes leads to great service at the table. We lift each other up.",
  },
  {
    icon: "◎",
    title: "Own Outcomes",
    text: "We own the result, not just the task. If something breaks, we fix it, learn from it, move forward.",
  },
  {
    icon: "◑",
    title: "Enjoy Downtime",
    text: "Sustainable pace builds better products. Happy, rested teams serve customers better.",
  },
];

/* ─────────────────────────────────────────────
   Stats
───────────────────────────────────────────── */
const stats = [
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
];

/* ─────────────────────────────────────────────
   Image URLs (Unsplash — free to use)
   Replace src with Images.xxx from your assets
   when ready.

   Sizes:
   heroImg    1200×800  (landscape, warm restaurant ambience)
   missionImg  900×600  (close-up QR scan / table setup)
   gridImg1    600×800  (portrait, busy kitchen)
   gridImg2    600×500  (landscape, plated food)
   gridImg3    600×800  (portrait, diner smiling)
───────────────────────────────────────────── */
const IMG = {
  hero:    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop&q=80",
  mission: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=900&h=600&fit=crop&q=80",
  grid1:   "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=800&fit=crop&q=80",
  grid2:   "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=500&fit=crop&q=80",
  grid3:   "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=800&fit=crop&q=80",
};

/* ═══════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════ */
const About: FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

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
        className="min-h-screen bg-base-100 text-base-content overflow-x-hidden"
      >

        {/* ── Fixed header ── */}
        <header className="fixed top-0 left-0 w-full z-50 bg-base-100/80 backdrop-blur-md border-b border-primary/10">
          <Navbar />
          <div className="px-0 -mx-6 py-2">
            <BackButton />
          </div>
        </header>

        {/* ════════════════════════════════════
            HERO BANNER
        ════════════════════════════════════ */}
        <section ref={heroRef} className="relative min-h-[70vh] flex items-end overflow-hidden pt-20">

          {/* Parallax image */}
          <motion.div
            style={{ y: heroImgY }}
            className="absolute inset-0 z-0"
          >
            <img
              src={IMG.hero}
              alt="Warm restaurant atmosphere — ambient dining room"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/70 to-base-100/20" />
          </motion.div>

          {/* Grid overlay */}
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(251,191,36,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.04) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Floating particles */}
          <div className="absolute inset-0 z-[2] pointer-events-none">
            {particles.map((p, i) => <Particle key={i} {...p} />)}
          </div>

          {/* Hero text */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pb-20 w-full">
            <motion.div {...fadeUp(0.1)}>
              <div className="badge badge-outline border-amber-400/40 text-amber-300 bg-amber-400/5 gap-2 px-4 py-3 text-xs font-semibold tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Our Story
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white max-w-3xl"
            >
              We're{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  changing
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                />
              </span>{" "}
              how India dines.
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              className=" mt-6 text-slate-400 bg-transparent/80 text-lg lg:text-xl leading-relaxed max-w-xl font-light "
            >
              SwaadSetu bridges restaurants and guests through seamless,
              contactless technology — built for the speed, scale, and warmth
              of Indian hospitality.
            </motion.p>
          </div>
        </section>

        {/* ════════════════════════════════════
            SECTION 1 — Intro + image grid
        ════════════════════════════════════ */}
        <section className="relative py-28 overflow-hidden">

          {/* Radial glow */}
          <div className="absolute top-0 right-[-15%] w-[600px] h-[500px] rounded-full bg-amber-500/8 blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left: text */}
              <div>
                <motion.div {...fadeLeft(0.05)}>
                  <span className="text-xs font-semibold tracking-widest uppercase text-amber-400/70">
                    Who We Are
                  </span>
                </motion.div>

                <motion.h2
                  {...fadeLeft(0.15)}
                  className="mt-4 text-4xl sm:text-5xl font-black leading-tight text-white"
                >
                  A platform{" "}
                  <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                    built for<br />Indian restaurants
                  </span>
                </motion.h2>

                <motion.p {...fadeLeft(0.28)} className="mt-6 text-slate-400 leading-relaxed">
                  SwaadSetu is a modern restaurant management platform designed
                  for the nuances of Indian dining. We bridge restaurants and
                  customers through a QR-based system that enables contactless
                  ordering, real-time order tracking, and smoother kitchen
                  operations — without the enterprise price tag.
                </motion.p>

                <motion.p {...fadeLeft(0.38)} className="mt-4 text-slate-500 leading-relaxed text-sm">
                  From small neighbourhood cafés to busy multi-outlet brands,
                  every team deserves world-class tools. We make that possible.
                </motion.p>

                {/* Inline highlight pills */}
                <motion.div {...fadeLeft(0.48)} className="mt-8 flex flex-wrap gap-3">
                  {["QR Ordering", "Live Kitchen Display", "Real-time Analytics", "Contactless Payments", "Multi-outlet Ready"].map((tag) => (
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
              <div className="relative grid grid-cols-2 gap-4 h-[480px]">

                {/* Tall left image — 600×800px recommended */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="row-span-2 rounded-2xl overflow-hidden border border-amber-400/10 shadow-[0_0_40px_rgba(251,191,36,0.08)]"
                >
                  <img
                    src={IMG.grid1}
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
                    src={IMG.grid2}
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
                  className="rounded-2xl overflow-hidden border border-amber-400/10 mt-4"
                >
                  <img
                    src={IMG.grid3}
                    alt="Happy diner scanning QR — 600×800px"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>

                {/* Floating amber chip */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-5 -left-6 bg-base-200 border border-amber-400/20 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl backdrop-blur-sm"
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
            SECTION 2 — Stats bar
        ════════════════════════════════════ */}
        <section className="relative py-16 overflow-hidden">

          {/* Full-width amber divider lines */}
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
        </section>

        {/* ════════════════════════════════════
            SECTION 3 — Mission
        ════════════════════════════════════ */}
        <section className="relative py-28 overflow-hidden">

          {/* Left glow */}
          <div className="absolute bottom-0 left-[-10%] w-[500px] h-[400px] rounded-full bg-amber-600/7 blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left image — 900×600px recommended */}
              <motion.div
                {...fadeLeft(0.1)}
                className="relative rounded-3xl overflow-hidden border border-amber-400/10 shadow-[0_0_80px_rgba(251,191,36,0.12)]"
              >
                <img
                  src={IMG.mission}
                  alt="Customer scanning QR menu at restaurant table — 900×600px"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-base-100/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating stat — matches Hero style */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute bottom-4 right-4 bg-base-200 border border-amber-400/20 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl"
                >
                  <div className="w-8 h-8 rounded-xl bg-green-400/15 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500">Order confirmed</p>
                    <p className="text-sm font-bold text-green-300">Table #7</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right: mission text */}
              <div className="flex flex-col gap-6">
                <motion.div {...fadeRight(0.05)}>
                  <span className="text-xs font-semibold tracking-widest uppercase text-amber-400/70">
                    Our Mission
                  </span>
                </motion.div>

                <motion.h2
                  {...fadeRight(0.15)}
                  className="text-4xl sm:text-5xl font-black leading-tight text-white"
                >
                  Every restaurant deserves{" "}
                  <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                    world-class tools.
                  </span>
                </motion.h2>

                <motion.p {...fadeRight(0.28)} className="text-slate-400 leading-relaxed">
                  We want every restaurant — from small cafés to busy
                  multi-outlet brands — to have access to reliable restaurant
                  management software built specifically for Indian restaurants,
                  without complexity or high costs.
                </motion.p>

                <motion.p {...fadeRight(0.38)} className="text-slate-500 leading-relaxed text-sm">
                  SwaadSetu is built for the realities of Indian dining: high
                  volume, diverse menus, and guests who value both speed and
                  warmth. As a cloud-based platform, we bring QR ordering,
                  real-time order tracking, and kitchen visibility together — so
                  your team can focus on hospitality, not paper tickets.
                </motion.p>

                {/* Checklist */}
                <motion.ul {...fadeRight(0.48)} className="mt-2 space-y-3">
                  {[
                    "Zero complexity setup — live in under 30 minutes",
                    "Works on any device, any network",
                    "Priced for Indian restaurant margins",
                    "Dedicated local support team",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                      <span className="w-5 h-5 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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
        <section className="relative py-28 overflow-hidden">

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

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">

            {/* Section header */}
            <motion.div {...fadeUp(0.05)} className="text-center mb-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-amber-400/70">
                How We Work
              </span>
            </motion.div>

            <motion.h2
              {...fadeUp(0.15)}
              className="text-4xl sm:text-5xl font-black text-center text-white mb-4"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Team Values
              </span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.25)}
              className="text-slate-400 text-center max-w-xl mx-auto mb-14"
            >
              A small, focused team obsessed with solving real problems for
              restaurants. These are the principles we live by.
            </motion.p>

            {/* Values grid — DaisyUI card */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {values.map((v, idx) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: 0.08 * idx, ease: [0.22, 1, 0.36, 1] }}
                  className="card bg-base-200 border border-amber-400/10 hover:border-amber-400/30 transition-all duration-300 hover:shadow-[0_0_32px_rgba(251,191,36,0.08)] group rounded-2xl"
                >
                  <div className="card-body gap-3 p-6">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl group-hover:bg-amber-400/20 transition-colors  animate-pulse ">
                      {v.icon}
                    </div>
                    <h3 className="card-title text-white text-base font-bold mt-3">{v.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{v.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            CTA BAND
        ════════════════════════════════════ */}
        <section className="relative py-24 overflow-hidden">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent mb-24" />

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div {...fadeUp(0.05)} className="mb-4">
              <div className="badge badge-outline border-amber-400/40 text-amber-300 bg-amber-400/5 gap-2 px-4 py-3 text-xs font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Join 58+ restaurants already live
              </div>
            </motion.div>

            <motion.h2
              {...fadeUp(0.15)}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Ready to{" "}
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                transform
              </span>{" "}
              your restaurant?
            </motion.h2>

            <motion.p {...fadeUp(0.25)} className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Get a personalised demo and see SwaadSetu live in your restaurant
              in under 30 minutes.
            </motion.p>

            <motion.div {...fadeUp(0.35)} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdjwZxtGkYIpulXopAiZBd-BKbQkqA81--N2DNZ5DqqMYTCXw/viewform?embedded=true",
                    "_blank",
                  )
                }
                className="btn btn-lg bg-gradient-to-r from-amber-400 to-orange-400 text-black font-bold border-none shadow-[0_0_32px_rgba(251,191,36,0.4)] hover:shadow-[0_0_48px_rgba(251,191,36,0.6)] hover:scale-[1.03] active:scale-95 transition-all duration-200 rounded-xl flex items-center justify-center gap-2 px-3 py-2 cursor-pointer"
              >
                Book a Free Demo
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <button
                className="btn btn-lg btn-ghost border border-amber-400/30 text-amber-300 hover:bg-amber-400/10 hover:border-amber-400/60 transition-all duration-200 rounded-xl px-3 py-2 cursor-pointer"
                onClick={() => (window.location.href = "https://www.swaadsetu.com/features")}
              >
                See How It Works
              </button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;