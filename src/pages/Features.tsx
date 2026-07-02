/**
 * Features.tsx — SwaadSetu Features Page (v2)
 *
 * Design: Bold editorial — oversized numbering, horizontal-rule-driven layout,
 * alternating full-bleed feature rows instead of a bento card grid.
 * Matches About.tsx design system tokens exactly.
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
// import { image } from "framer-motion/client";
// import { CTASection } from "../component/cta-section";

/* ─────────────────────────────────────────────
   Animation helpers
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
   Floating particle
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
];

const qrImage = Images.qr_ordering;
const trackingImage = Images.real_time_order_2;
const billingImage = Images.payments;
const serviceImage = Images.service;
const analyticsImage = Images.bussiness_insights;
const inventoryImage = Images.Inventory;
const qsrImage = Images.QSR;

/* ─────────────────────────────────────────────
   Feature data
───────────────────────────────────────────── */
interface Feature {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  workflow: {
    label: string;
    title: string;
    description: string;
  };
  image: string;
  imageAlt: string;
  flip?: boolean;
}

const features: Feature[] = [
{
  number: "01",
  eyebrow: "SMART QR ORDERING",
  title: "Instant QR Ordering",
  description:
    "Enable guests to browse menus, place orders, and interact with your business through a simple QR scan. No app downloads, no printed menus, and no unnecessary waiting.\nKeep menus updated in real time while delivering a faster, more seamless service experience.",
  bullets: [
    "Real-Time Menu Updates",
    "No App Downloads Required",
    "Multi-Language Support",
  ],
  workflow: {
    label: "CUSTOMER EXPERIENCE",
    title: "Scan → Browse → Order",
    description:
      "Seamless ordering journey with zero installation or onboarding friction.",
  },
  image: qrImage,
  imageAlt: "QR Ordering",
  flip: false,
},

{
number: "02",
eyebrow: "ORDER VISIBILITY",
title: "Real-Time Order Tracking",
description: "Track every order from placement to delivery with live status updates. Keep guests informed while improving kitchen coordination and service efficiency.",
bullets: [
"Live Order Status Updates",
"Kitchen-to-Table Visibility",
"Transparent Guest Experience"
],
workflow: {
label: "ORDER JOURNEY",
title: "Placed → Preparing → Ready → Served",
description: "Real-time visibility across every stage of the service flow."
},
 image: trackingImage,
  imageAlt: "Order Tracking",
  flip: true,
},

{
number: "03",
eyebrow: "BILLING & PAYMENTS",
title: "Digital Billing & Payments",
description: "Generate bills instantly, apply taxes and discounts, and accept secure digital payments through a seamless checkout experience.\nSimplify settlements, reduce billing errors, and deliver a faster payment experience for every guest.",
bullets: [
"Instant Bill Generation",
"Split Payments & Discounts",
"Secure UPI & Digital Payments"
],
workflow: {
label: "PAYMENT EXPERIENCE",
title: "Bill → Pay → Complete",
description: "Fast, accurate, and hassle-free checkout for guests and staff."
},
 image: billingImage,
  imageAlt: "Digital Billing",
  flip: false,
},

{
number: "04",
eyebrow: "SERVICE OPERATIONS",
title: "Staff & Service Management",
description: "Empower your team with waiter call alerts, table assistance requests, and streamlined service workflows for faster response times.\nReduce service delays, improve staff coordination, and ensure guests receive timely assistance throughout their dining experience.",
bullets: [
"Instant Waiter Call Alerts",
"Table Assistance Requests",
"Faster Service Coordination"
],
workflow: {
label: "SERVICE FLOW",
title: "Request → Alert → Assist",
description: "Ensure every guest request reaches the right staff member instantly."
},
image: serviceImage,
  imageAlt: "Staff Management",
  flip: true,
},

{
number: "05",
eyebrow: "BUSINESS INSIGHTS",
title: "Business Insights & Analytics",
description: "Monitor sales, orders, customer trends, and operational performance through actionable reports that support smarter decisions.\nGain complete visibility into your business with real-time data, helping you identify opportunities, improve efficiency, and drive sustainable growth.",
bullets: [
"Sales & Revenue Tracking",
"Order Performance Analytics",
"Operational Reports & Insights"
],
workflow: {
label: "DECISION MAKING",
title: "Data → Insights → Growth",
description: "Turn everyday business data into actions that improve performance."
},
 image: analyticsImage,
  imageAlt: "Business Analytics",
  flip: false,
},

{
number: "06",
eyebrow: "INVENTORY & COST CONTROL",
title: "Inventory & Expense Control",
description: "Track stock consumption, manage expenses, and gain visibility into operational costs without relying on spreadsheets.\nMaintain better control over inventory movement, reduce wastage, and understand where your money is being spent across daily operations.",
bullets: [
"Inventory Consumption Tracking",
"Expense Management & Records",
"Cost Visibility & Control"
],
workflow: {
label: "OPERATIONAL CONTROL",
title: "Track → Analyze → Optimize",
description: "Stay informed about stock usage and business expenses in one place."
},
 image: inventoryImage,
  imageAlt: "Inventory",
  flip: true,
},

{
number: "07",
eyebrow: "QSR OPERATIONS",
title: "QSR & Self-Service Workflows",
description: "Enable customers to scan, order, and pay independently through a seamless self-service experience. Built for QSRs, food courts, cafeterias, theatres, and high-footfall food environments.\nReduce queues, improve service speed, and create a smoother order fulfillment process without increasing operational complexity.",
bullets: [
"Self-Service Ordering",
"Order Number Based Fulfillment",
"Faster Service Operations"
],
workflow: {
label: "HIGH-FOOTFALL READY",
title: "Scan → Order → Collect",
description: "Designed to handle peak-hour demand with faster and more efficient service workflows."
},
 image: qsrImage,
  imageAlt: "QSR",
  flip: false,
}
];


/* ═══════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════ */
const FeatureSection: FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Helmet>
        <title>Features – SwaadSetu Smart Restaurant Management Platform</title>
        <meta name="description" content="Explore SwaadSetu's full feature set: QR menus, contactless ordering, real-time analytics, integrated billing, and more — built for Indian restaurants." />
        <meta property="og:title" content="Features – SwaadSetu Smart Restaurant Management Platform" />
        <meta property="og:description" content="Explore SwaadSetu's full feature set: QR menus, contactless ordering, real-time analytics, integrated billing, and more — built for Indian restaurants." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.swaadsetu.com/features" />
        <meta property="og:image" content="https://www.swaadsetu.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Features – SwaadSetu Smart Restaurant Management Platform" />
        <meta name="twitter:description" content="Explore SwaadSetu's full feature set: QR menus, contactless ordering, real-time analytics, integrated billing, and more — built for Indian restaurants." />
        <meta name="twitter:image" content="https://www.swaadsetu.com/logo.png" />
      </Helmet>

      <div
        data-theme="swaad-dark"
        className="min-h-screen bg-[#060812] text-base-content overflow-x-hidden"
      >

        {/* ── Fixed header ── */}
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

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-10 items-center">
            {/* Left: Text & Story */}
            <div className="flex flex-col gap-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <motion.div {...fadeUp(0.1)} className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(251,191,36,0.15)] backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  Platform Features
                </div>
              </motion.div>

              <motion.h1
              
                {...fadeUp(0.2)}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-lg"
              >
                Everything  your{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-xl">
                    Food Business
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                  />
                </span>
                <br />
                Needs.
              </motion.h1>

              <motion.p
                {...fadeUp(0.35)}
                className="text-slate-300 text-lg sm:text-xl leading-relaxed font-light drop-shadow-sm max-w-xl mx-auto lg:mx-0"
              >
               Purpose-built tools designed to simplify food service operations, improve guest experiences, and help teams work more efficiently. Everything you need to manage daily operations from one connected platform.
              </motion.p>
            </div>

            {/* Right: Modern floating image composition */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center perspective-1000 mt-10 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 50, y: 30, rotateY: -10, rotateZ: 5 }}
                animate={{ opacity: 1, x: 0, y: 0, rotateY: -10, rotateZ: 5 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="absolute w-[80%] sm:w-[80%] h-[80%] rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-20"
              >
                <img src={Images.hero_1} alt={features[2].imageAlt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060812] via-transparent to-transparent opacity-80" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50, y: -30, rotateY: 15, rotateZ: -5 }}
                animate={{ opacity: 1, x: -30, y: 30, rotateY: 15, rotateZ: -5 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                className="absolute left-0 bottom-10 w-[50%] h-[50%] rounded-3xl overflow-hidden border border-amber-400/20 shadow-[0_20px_50px_rgba(251,191,36,0.2)] z-30 backdrop-blur-md bg-black/40 p-2 hidden sm:block"
              >
                <img src={Images.hero_2} alt={features[0].imageAlt} className="w-full h-full object-cover rounded-2xl" />
              </motion.div>
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════
            FEATURES — EDITORIAL ALTERNATING ROWS
        ════════════════════════════════════ */}
        <section className="relative">

          {features.map((f, idx) => (
            <div key={f.number} className="relative overflow-hidden">

              {/* Full-width top rule */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-16 sm:py-24 lg:py-5">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${f.flip ? "lg:[&>*:first-child]:order-2" : ""}`}>

                  {/* ── Text column ── */}
                  <div className="flex flex-col gap-6">

                    {/* Number + eyebrow */}
                    <motion.div
                      {...(f.flip ? fadeRight(0.05) : fadeLeft(0.05))}
                      className="flex items-baseline gap-4"
                    >
                      <span
                        className="text-[4rem] sm:text-[5rem] font-black leading-none tabular-nums select-none"
                        style={{
                          WebkitTextStroke: "1px rgba(251,191,36,0.25)",
                          color: "transparent",
                        }}
                      >
                        {f.number}
                      </span>
                      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400/70">
                        {f.eyebrow}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                      {...(f.flip ? fadeRight(0.12) : fadeLeft(0.12))}
                      className="text-4xl sm:text-5xl font-black leading-tight text-white"
                    >
                      {f.title}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                      {...(f.flip ? fadeRight(0.05) : fadeLeft(0.05))}
                      className="text-slate-400 leading-relaxed text-base"
                    >
                      {f.description.split('\n').map((line, i) => <p key={i} className={i > 0 ? 'mt-4' : ''}>{line}</p>)}
                    </motion.p>

                    {/* Bullets */}
                    <motion.ul
                     
                      className="space-y-2.5"
                    >
                      {f.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-sm text-slate-400">
                          <span className="w-5 h-5 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center shrink-0">
                            <svg className="w-3 h-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {b}
                        </li>
                      ))}
                    </motion.ul>

                    {/* Stat — large, stark */}
                    <motion.div
                      {...(f.workflow ? fadeRight(0.36) : fadeLeft(0.36))}
                      className="pt-4 mt-2 border-t border-amber-400/10"
                    >
                     <span className="text-[10px] tracking-[0.2em] uppercase text-amber-400 font-semibold block mb-2">
                        {f.workflow.label}
                      </span>
                      <div className="flex flex-col items-start gap-1">
                        <h4 className="text-lg font-bold text-white">
                          {f.workflow.title}
                        </h4>

                        <p className="text-sm text-slate-400 leading-relaxed">
                          {f.workflow.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* ── Image column ── */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97, y: 24 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="relative rounded-3xl overflow-hidden border border-amber-400/10 shadow-[0_0_60px_rgba(251,191,36,0.07)] aspect-[4/3] lg:aspect-auto lg:h-[480px]"
                  >
                    <img
                      src={f.image}
                      alt={f.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                    {/* Inner gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-base-100/40 via-transparent to-transparent pointer-events-none" />

                    {/* Floating number badge — top corner */}
                    <div
                      className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-2xl border border-amber-400/25 bg-[#060812]/70 backdrop-blur-sm"
                    >
                      <span className="text-xs font-black text-amber-400 tabular-nums">{f.number}</span>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          ))}

          {/* Bottom rule */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
        </section>

        {/* ════════════════════════════════════
            RELIABILITY STRIP (no image needed)
        ════════════════════════════════════ */}
        <section className="relative py-15 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(251,191,36,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.04) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-amber-500/6 blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-amber-400/10 rounded-3xl overflow-hidden border border-amber-400/10">
              {[
{
icon: "☁️",
title: "Reliable Cloud Platform",
text: "Built on secure cloud infrastructure with continuous monitoring and regular backups to keep your restaurant operations running smoothly."
},
{
icon: "⚡",
title: "Quick & Guided Setup",
text: "Get started with menu setup, QR generation, and onboarding support without complex configurations or technical expertise."
},
{
icon: "🤝",
title: "Human Support Team",
text: "Receive assistance through call, WhatsApp, or email from a dedicated team focused on helping your business succeed."
}
].map((item, i) => (
                <motion.div
                  key={item.title}
                  {...fadeUp(i * 0.1)}
                  className="bg-transparent p-8 lg:p-10 flex flex-col gap-4"
                >
                  <span className="text-amber-400 text-2xl">{item.icon}</span>
                  <h3 className="text-white font-black text-xl leading-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

       
        <CTASection/>
     
        <Footer />
      </div>
    </>
  );
};

export default FeatureSection;