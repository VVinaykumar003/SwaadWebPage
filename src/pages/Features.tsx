"use client";

import Navbar from "../component/Navbar";
import {Footer} from "../component/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
interface Feature {
  icon: string; // SVG path data
  eyebrow: string;
  title: string;
  description: string;
  accent: string; // tailwind color token used for glows/borders
  stat?: { value: string; label: string };
  /**
   * Unsplash image URL for the card visual.
   * Recommended sizes are listed next to each feature below.
   * You can swap any URL — keep w/h params for performance.
   */
  image?: string;
  imageAlt?: string;
  wide?: boolean; // spans 2 cols in the bento grid
}

/* ─────────────────────────────────────────
   Feature data
   IMAGE SIZES (Unsplash params):
     wide cards  → w=900&h=420
     tall cards  → w=480&h=520
     small cards → w=480&h=260
───────────────────────────────────────── */
const features: Feature[] = [
  {
    icon: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
    eyebrow: "Smart QR",
    title: "Instant QR Menus",
    description:
      "Generate beautiful, scannable QR menus in seconds. Customers point their camera and your full menu loads — zero app download, zero friction.",
    accent: "amber",
    stat: { value: "0.3s", label: "Avg. load time" },
    image:
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=900&h=420&fit=crop&auto=format",
    imageAlt: "Restaurant QR code menu on a table",
    wide: true,
  },
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    eyebrow: "Contactless",
    title: "One-Tap Ordering",
    description:
      "Guests browse, customise, and place orders without ever flagging a waiter. Orders hit the kitchen the moment they're placed.",
    accent: "orange",
    stat: { value: "−40%", label: "Wait time" },
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=480&h=520&fit=crop&auto=format",
    imageAlt: "Person ordering food on smartphone",
  },
  {
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    eyebrow: "Analytics",
    title: "Real-Time Insights",
    description:
      "Live dashboards show top-selling dishes, peak hours, and table turnover. Make data-driven decisions without an MBA.",
    accent: "yellow",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&h=260&fit=crop&auto=format",
    imageAlt: "Analytics dashboard on a laptop",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    eyebrow: "Reliability",
    title: "99.9% Uptime SLA",
    description:
      "Built on redundant infra so your menu is live even during dinner rush. We've never gone dark during a service.",
    accent: "green",
    stat: { value: "99.9%", label: "Uptime" },
  },
  {
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    eyebrow: "Payments",
    title: "Integrated Billing",
    description:
      "UPI, cards, wallets — all in one flow. Split bills, apply offers, and close tables in under 30 seconds.",
    accent: "amber",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=480&h=260&fit=crop&auto=format",
    imageAlt: "Digital payment on a smartphone",
  },
  {
    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
    eyebrow: "Marketing",
    title: "Push Promotions",
    description:
      "Send targeted offers, happy-hour alerts, and seasonal specials directly to diners who've ordered before.",
    accent: "orange",
    stat: { value: "3.2×", label: "Repeat visits" },
  },
];

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* Glow colour map — consumed by inline styles */
const glowMap: Record<string, string> = {
  amber: "rgba(251,191,36,0.18)",
  orange: "rgba(249,115,22,0.18)",
  yellow: "rgba(234,179,8,0.18)",
  green: "rgba(34,197,94,0.16)",
};

const borderMap: Record<string, string> = {
  amber: "rgba(251,191,36,0.25)",
  orange: "rgba(249,115,22,0.25)",
  yellow: "rgba(234,179,8,0.25)",
  green: "rgba(34,197,94,0.22)",
};

const iconBgMap: Record<string, string> = {
  amber: "rgba(251,191,36,0.12)",
  orange: "rgba(249,115,22,0.12)",
  yellow: "rgba(234,179,8,0.12)",
  green: "rgba(34,197,94,0.10)",
};

const iconColorMap: Record<string, string> = {
  amber: "#fbbf24",
  orange: "#f97316",
  yellow: "#eab308",
  green: "#22c55e",
};

/* ─────────────────────────────────────────
   Sub-components
───────────────────────────────────────── */
const FeatureIcon = ({ path, accent }: { path: string; accent: string }) => (
  <div
    className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
    style={{ background: iconBgMap[accent] }}
  >
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke={iconColorMap[accent]}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  </div>
);

const FeatureCard = ({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      /* DaisyUI card base + custom dark glass layer */
      className={`card group relative overflow-hidden transition-all duration-500 ${
        feature.wide ? "md:col-span-2" : ""
      }`}
      style={{
        background:
          "color-mix(in srgb, var(--color-base-100) 60%, transparent)",
        border: `1px solid ${borderMap[feature.accent]}`,
        boxShadow: `0 0 0 0 ${glowMap[feature.accent]}`,
      }}
      whileHover={{
        y: -4,
        boxShadow: `0 0 48px 4px ${glowMap[feature.accent]}`,
        borderColor: iconColorMap[feature.accent] + "60",
      }}
    >
      {/* Ambient glow blob (top-right) */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: glowMap[feature.accent] }}
        aria-hidden="true"
      />

      {/* ── Card with image ── */}
      {feature.image ? (
        <div className={`flex flex-col ${feature.wide ? "md:flex-row" : ""}`}>
          {/* Image */}
          <div
            className={`relative overflow-hidden ${
              feature.wide
                ? "md:w-1/2 h-52 md:h-auto"
                : "h-44"
            }`}
          >
            <img
              src={feature.image}
              alt={feature.imageAlt ?? ""}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Dark gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 40%, rgba(6,8,18,0.7))",
              }}
              aria-hidden="true"
            />
            {/* Eyebrow badge on image */}
            <span
              className="absolute top-3 left-3 badge badge-sm font-semibold tracking-widest text-[10px] uppercase border-0"
              style={{
                background: iconBgMap[feature.accent],
                color: iconColorMap[feature.accent],
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: `1px solid ${borderMap[feature.accent]}`,
              }}
            >
              {feature.eyebrow}
            </span>
          </div>

          {/* Text body */}
          <div className="card-body gap-3 p-6 md:p-8 flex-1">
            <div className="flex items-start gap-3">
              <FeatureIcon path={feature.icon} accent={feature.accent} />
              <div className="flex-1">
                <h3 className="card-title text-base-content text-lg font-bold leading-snug">
                  {feature.title}
                </h3>
                <p className="text-base-content/60 text-sm leading-relaxed mt-1">
                  {feature.description}
                </p>
              </div>
            </div>

            {feature.stat && (
              <div className="flex items-center gap-2 mt-auto pt-2">
                <span
                  className="text-2xl font-black tabular-nums"
                  style={{ color: iconColorMap[feature.accent] }}
                >
                  {feature.stat.value}
                </span>
                <span className="text-xs text-base-content/50">
                  {feature.stat.label}
                </span>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* ── Text-only card ── */
        <div className="card-body gap-4 p-6">
          <div className="flex items-center gap-3">
            <FeatureIcon path={feature.icon} accent={feature.accent} />
            <span
              className="text-[10px] font-semibold tracking-widest uppercase"
              style={{ color: iconColorMap[feature.accent] }}
            >
              {feature.eyebrow}
            </span>
          </div>

          <div>
            <h3 className="text-base-content text-lg font-bold leading-snug">
              {feature.title}
            </h3>
            <p className="text-base-content/60 text-sm leading-relaxed mt-2">
              {feature.description}
            </p>
          </div>

          {feature.stat && (
            <div className="flex items-baseline gap-2 mt-auto pt-1">
              <span
                className="text-3xl font-black tabular-nums"
                style={{ color: iconColorMap[feature.accent] }}
              >
                {feature.stat.value}
              </span>
              <span className="text-xs text-base-content/50">
                {feature.stat.label}
              </span>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

/* ─────────────────────────────────────────
   Main Section
───────────────────────────────────────── */
const FeatureSection = () => {
  return (
    <div className="min-h-screen bg-[#060812] text-base-content overflow-x-hidden" data-theme="swaad-dark">
      <Navbar />
      <section
        className="relative overflow-hidden py-24 md:py-32"
        /* 
         * THEME SWITCHING:
         * The section reads from DaisyUI's CSS variable system.
         * Wrap your <html> (or this component) with data-theme="dark" or
         * data-theme="light" (or any DaisyUI theme name) to switch the palette.
         * The amber/gold accents are hardcoded as they're brand colours and
         * should remain consistent across themes.
         */
      >
      {/* ── Background grid (same as Hero) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* ── Radial glows ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-30 blur-[130px] bg-amber-500/20" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[350px] rounded-full opacity-20 blur-[100px] bg-orange-500/20" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-5 md:px-8">
        {/* ── Section header ── */}
        <motion.div
          {...fadeUp(0)}
          className="flex flex-col items-center text-center mb-16 gap-4"
        >
          {/* Pill */}
          <div
            className="badge badge-md font-semibold tracking-widest text-[10px] uppercase border-0 gap-2 px-4 py-3"
            style={{
              background: "rgba(251,191,36,0.08)",
              color: "#fbbf24",
              border: "1px solid rgba(251,191,36,0.25)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"
              aria-hidden="true"
            />
            Everything Your Restaurant Needs
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-base-content"
          >
            Built for{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #fbbf24 0%, #fb923c 50%, #fbbf24 100%)",
              }}
            >
              Indian Kitchens.
            </span>
            <br />
            <span className="text-base-content/70">
              Loved by Every Diner.
            </span>
          </h2>

          <p className="text-base-content/60 text-lg max-w-xl leading-relaxed font-light">
            From the first QR scan to the last payment, SwaadSetu handles every
            touchpoint — so your staff can focus on what matters: great food.
          </p>

          {/* Decorative separator */}
          <div
            className="w-24 h-px mt-2"
            style={{
              background:
                "linear-gradient(90deg, transparent, #fbbf24, transparent)",
            }}
            aria-hidden="true"
          />
        </motion.div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl p-8 md:p-10"
          style={{
            background: "rgba(251,191,36,0.05)",
            border: "1px solid rgba(251,191,36,0.18)",
          }}
        >
          <div className="text-center md:text-left">
            <p className="text-base-content font-bold text-xl">
              Ready to transform your restaurant?
            </p>
            <p className="text-base-content/50 text-sm mt-1">
              Join 58+ restaurants already running on SwaadSetu.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            <button
              className="btn btn-md font-bold border-none"
              style={{
                background: "linear-gradient(90deg, #fbbf24, #f97316)",
                color: "#000",
                boxShadow: "0 0 24px rgba(251,191,36,0.35)",
              }}
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdjwZxtGkYIpulXopAiZBd-BKbQkqA81--N2DNZ5DqqMYTCXw/viewform?embedded=true",
                  "_blank",
                )
              }
            >
              Book a Free Demo
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
            <button
              className="btn btn-md btn-ghost border text-amber-400"
              style={{ borderColor: "rgba(251,191,36,0.35)" }}
              onClick={() =>
                (window.location.href = "https://www.swaadsetu.com/features")
              }
            >
              See All Features
            </button>
          </div>
        </motion.div>
      </div>
      </section>
      <Footer />
    </div>
  );
};

export default FeatureSection;

/*
 * ──────────────────────────────────────────────────────────────
 *  DARK / LIGHT THEME SETUP (DaisyUI)
 *
 *  1. Install DaisyUI: npm i -D daisyui
 *
 *  2. In tailwind.config.ts:
 *       plugins: [require("daisyui")],
 *       daisyui: {
 *         themes: ["dark", "light", "night", "luxury"],  // add as many as you like
 *       }
 *
 *  3. In your root layout / _app.tsx, set the theme on <html>:
 *       <html data-theme="dark">   ← dark mode
 *       <html data-theme="light">  ← light mode
 *
 *  4. To toggle at runtime:
 *       document.documentElement.setAttribute("data-theme", "light");
 *
 *  5. The bg-[#060812] of your Hero won't switch automatically — wrap
 *     the whole page in a <div className="bg-base-100"> and remove the
 *     hardcoded hex from Hero so both sections share the DaisyUI token.
 *
 *  RECOMMENDED THEME PAIRS:
 *    Dark  → "dark" or "night" (near-black, plays nicely with amber accents)
 *    Light → "lemonade" or "corporate" (warm neutrals complement gold tones)
 *
 *  IMAGE SIZES REFERENCE:
 *    Wide cards  (md:col-span-2)  → 900 × 420 px
 *    Tall cards  (single col)     → 480 × 520 px
 *    Small cards (single col)     → 480 × 260 px
 * ──────────────────────────────────────────────────────────────
 */