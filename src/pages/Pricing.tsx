import type { FC } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import { Footer } from "../component/Footer";
import BackButton from "../component/ui/BackButton";
import { Helmet } from "@dr.pogodin/react-helmet";
import { CTASection } from "../component/cta-section";

/* ─────────────────────────────────────────────────────────────────
   THEMING NOTE:
   Swap the data-theme attribute on <html> (or wrap this page's root
   div) between "swaad-dark" and "swaad-light" to switch themes.
   DaisyUI theme definitions go in tailwind.config.js under
   daisyui.themes. CSS variables below drive everything.
───────────────────────────────────────────────────────────────── */

/* ── Floating particle (reused from Hero) ── */
const Particle = ({
  x,
  y,
  size,
  delay,
}: {
  x: string;
  y: string;
  size: number;
  delay: number;
}) => (
  <motion.div
    className="absolute rounded-full bg-amber-400 pointer-events-none"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{ y: [0, -18, 0], opacity: [0.08, 0.35, 0.08] }}
    transition={{
      duration: 4 + delay,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

const particles = [
  { x: "5%", y: "15%", size: 4, delay: 0 },
  { x: "20%", y: "70%", size: 3, delay: 1.4 },
  { x: "78%", y: "25%", size: 5, delay: 0.6 },
  { x: "92%", y: "60%", size: 3, delay: 2.1 },
  { x: "55%", y: "8%", size: 4, delay: 0.3 },
  { x: "68%", y: "80%", size: 3, delay: 1.9 },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ── Feature comparison table ── */
const tableFeatures = [
  { label: "QR Ordering System", value: "Unlimited" },
  { label: "Digital Menu Management", value: "Unlimited" },
  { label: "Live Order Tracking", value: true },
  { label: "Digital Billing", value: true },
  { label: "Secure Payments", value: true },
  { label: "Waiter Call System", value: true },
  { label: "Staff Accounts", value: "Unlimited" },
  { label: "Order Analytics", value: "Advanced" },
  { label: "Inventory Management", value: true },
  { label: "Expense Tracking", value: true },
  { label: "Priority Support", value: true },
  { label: "Cloud Access", value: true },
  { label: "Regular Updates", value: true },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CrossIcon = () => (
  <svg className="w-5 h-5 text-slate-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

/* ── FAQ ── */
const faqs = [
  {
    q: "Do customers need to install an app?",
    a: "No. Customers simply scan the QR code and access the digital menu directly through their mobile browser. No app downloads or registrations are required."
  },
  {
    q: "How long does setup take?",
    a: "Most businesses can get started within a day. Our team helps with menu setup, QR generation, staff onboarding, and initial configuration."
  },
  {
    q: "What payment methods are supported?",
    a: "SwaadSetu supports UPI, cards, and other digital payment methods through integrated payment gateways, depending on your setup."
  },
  {
    q: "Can I manage multiple staff members?",
    a: "Yes. You can create separate staff accounts and provide role-based access for managers, cashiers, waiters, and other team members."
  },
  {
    q: "Does SwaadSetu provide order tracking?",
    a: "Yes. Customers can view real-time order status updates while staff and kitchen teams can track orders from placement to completion."
  },
  {
    q: "Can I update my menu anytime?",
    a: "Absolutely. Add, edit, remove, or update menu items, pricing, and availability instantly without reprinting QR codes."
  },
  {
    q: "Is inventory and expense management included?",
    a: "Yes. SwaadSetu helps track stock consumption, manage expenses, and gain better visibility into daily operational costs."
  },
  {
    q: "Is there any setup fee or hidden charge?",
    a: "No. Our pricing is transparent with no hidden fees. You only pay for the selected subscription plan."
  },
  {
    q: "What kind of support do you provide?",
    a: "We offer support through WhatsApp, phone, and email to help with onboarding, setup, and operational queries."
  },
  {
    q: "Is my business data secure?",
    a: "Yes. We use secure cloud infrastructure, controlled access permissions, and regular backups to protect your operational data."
  }
];




const Pricing: FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // const handleCTA = () => {
  //     window.open(
  //       "https://docs.google.com/forms/d/e/1FAIpQLSdjwZxtGkYIpulXopAiZBd-BKbQkqA81--N2DNZ5DqqMYTCXw/viewform?embedded=true",
  //       "_blank"
  //     );
  // };

  return (
    <>
      <Helmet>
        <title>Pricing – Swaad Setu</title>
        <meta
          name="description"
          content="Find the perfect plan for your restaurant with Swaad Setu's flexible pricing."
        />
      </Helmet>

      {/*
        ─────────────────────────────────────────────────────────────
        ROOT: bg-[#060812] mirrors Hero's dark background.
        For light theme, swap to bg-[#FAFAF7] and adjust text/border
        classes below (or use DaisyUI data-theme on the html element).
        ─────────────────────────────────────────────────────────────
      */}
      <div className="min-h-screen bg-[#060812] text-white overflow-x-hidden">

        {/* ── Background grid (identical to Hero) ── */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(251,191,36,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* ── Radial glows ── */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-amber-500/8 blur-[140px]" />
          <div className="absolute bottom-0 left-[-5%] w-[400px] h-[300px] rounded-full bg-amber-600/6 blur-[100px]" />
        </div>

        {/* ── Floating particles ── */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {particles.map((p, i) => <Particle key={i} {...p} />)}
        </div>

        {/* ── Fixed header ── */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
          <Navbar />
          <div className="px-0 -mx-6 py-2">
            <BackButton />
          </div>
        </header>

        {/* ── Page content ── */}
        <div className="relative z-10 pt-28 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            {/* ── Hero section ── */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left: Text */}
              <div className="text-center lg:text-left">
                {/* Eyebrow badge */}
                <motion.div {...fadeUp(0.1)} className="flex justify-center lg:justify-start mb-5">
                  <div className="badge badge-outline border-amber-400/40 text-amber-300 bg-amber-400/5 gap-2 px-4 py-3 text-xs font-semibold tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Pricing
                  </div>
                </motion.div>

                <motion.h1
                  {...fadeUp(0.2)}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
                >
                  Simple Pricing.{" "}
                  <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent block sm:inline">
                    Powerful Operations.
                  </span>
                </motion.h1>

                <motion.p
                  {...fadeUp(0.35)}
                  className="mt-5 text-slate-400 text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed"
                >
                  Everything you need to manage ordering, billing, payments, inventory, staff coordination, and business insights — in one unified platform.
                </motion.p>
              </div>

              {/* Right: Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="relative hidden lg:flex items-center justify-center h-80"
              >
                {/* SVG Dashboard Illustration */}
                <svg width="320" height="240" viewBox="0 0 320 240" className="w-full h-full">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(251, 191, 36, 0.1)" />
                      <stop offset="100%" stopColor="rgba(251, 191, 36, 0.02)" />
                    </linearGradient>
                    <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Main Panel */}
                  <motion.rect
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    width="320" height="240" rx="24" fill="url(#grad1)" stroke="rgba(251, 191, 36, 0.15)" strokeWidth="1.5"
                  />

                  {/* Sidebar */}
                  <motion.rect initial={{ x: -50 }} animate={{ x: 0 }} transition={{ delay: 0.6, ease: "easeOut" }}
                    x="0" y="0" width="60" height="240" rx="24" fill="rgba(251, 191, 36, 0.05)" />

                  {/* Content Area */}
                  {/* Bar Chart */}
                  <g transform="translate(80, 40)">
                    <motion.rect initial={{ height: 0 }} animate={{ height: 40 }} transition={{ delay: 0.8, ease: "easeOut" }} y="30" width="15" height="40" rx="3" fill="rgba(251, 191, 36, 0.4)" />
                    <motion.rect initial={{ height: 0 }} animate={{ height: 60 }} transition={{ delay: 0.9, ease: "easeOut" }} x="25" y="10" width="15" height="60" rx="3" fill="rgba(251, 191, 36, 0.6)" />
                    <motion.rect initial={{ height: 0 }} animate={{ height: 25 }} transition={{ delay: 1.0, ease: "easeOut" }} x="50" y="45" width="15" height="25" rx="3" fill="rgba(251, 191, 36, 0.3)" />
                  </g>

                  {/* Donut Chart */}
                  <g transform="translate(220, 80)" filter="url(#glow-soft)">
                    <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(251, 191, 36, 0.1)" strokeWidth="10" />
                    <motion.circle initial={{ strokeDashoffset: 188 }} animate={{ strokeDashoffset: 75 }} transition={{ delay: 1.1, duration: 1, ease: "circOut" }}
                      cx="40" cy="40" r="30" fill="none" stroke="#FBBF24" strokeWidth="10" strokeDasharray="188" strokeLinecap="round" transform="rotate(-90 40 40)" />
                  </g>

                  {/* Line Graph */}
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.3, duration: 1.2, ease: "easeInOut" }}
                    d="M 80 180 C 120 150, 160 200, 200 170 L 280 140" stroke="#FBBF24" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </motion.div>
            </div>

            {/* ── Feature comparison table ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-20"
            >
              <h2 className="text-2xl font-bold text-center mb-2">All-in-One Plan</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto mb-10" />

              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm max-w-3xl mx-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-6 text-slate-400 font-medium w-2/3">Feature</th>
                      <th className="py-4 px-6 text-center font-bold text-white">
                        <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                          Included
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableFeatures.map((row, i) => (
                      <tr
                        key={row.label}
                        className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}
                      >
                        <td className="py-3.5 px-6 text-slate-300">{row.label}</td>
                       <td className="py-3.5 px-6 text-center flex justify-center">
  {typeof row.value === "boolean" ? (
    row.value ? (
      <CheckIcon />
    ) : (
      <CrossIcon />
    )
  ) : (
    <span className="text-slate-200 font-medium">
      {row.value}
    </span>
  )}
</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center rounded-3xl border border-amber-400/15 bg-amber-400/5 p-8 md:p-12 mb-20">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Questions about pricing?
                </h3>

                <p className="text-slate-400 max-w-2xl mx-auto md:mx-0 mb-6 md:mb-0">
                  Get in touch with our team to understand plans, features, onboarding, and everything included with SwaadSetu.
                </p>
              </div>
              <div className="text-center md:text-right">
                <button className="btn bg-gradient-to-r from-amber-400 to-orange-400 text-black border-none" onClick={() => window.open('mailto:connect@swaadsetu.com')}>
                  Talk to Our Team
                </button>
              </div>
            </div>



            {/*── Pricing Benefits (3 cards) ──*/}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            >
              {[
                { title: "No Setup Fees", text: "Start without additional onboarding or installation charges." },
                { title: "Unlimited Growth", text: "No restrictions on menus, orders, or staff accounts." },
                { title: "Dedicated Support", text: "Real humans available through WhatsApp, call, and email." }
              ].map((card, i) => (
                <div key={i} className="rounded-2xl border border-amber-400/15 bg-amber-400/5 p-6">
                  <h4 className="text-base font-bold text-white mb-2">{card.title}</h4>
                  <p className="text-sm text-slate-400">{card.text}</p>
                </div>
              ))}
            </motion.div>

            {/* ── FAQ ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-2xl font-bold text-center mb-2">
                Frequently asked questions
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto mb-10" />

              <div className="flex flex-col gap-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
                  >
                    <button
                      className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-medium text-white hover:bg-white/5 transition-colors"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      {faq.q}
                      <svg
                        className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5">
                        <div className="pt-4">{faq.a}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              

              {/* Bottom CTA */}
              <div className="text-center mt-12">
                <p className="text-slate-400 text-sm mb-5">
                  Still have questions? We're happy to help. Talk to our team and see how SwaadSetu can fit your business operations.
                </p>
                <a
                  href="mailto:connect@swaadsetu.com"
                  className="btn btn-outline border-amber-400/40 text-amber-300 hover:bg-amber-400/10 rounded-xl px-8 group"
                >
                  Talk to Our Team →
                </a>
              </div>
            </motion.div>
          </div>
        </div>


<CTASection/>
        <Footer />
      </div>
    </>
  );
};

export default Pricing;