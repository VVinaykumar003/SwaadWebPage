import type { FC } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import { Footer } from "../component/Footer";
import BackButton from "../component/ui/BackButton";
import { Helmet } from "@dr.pogodin/react-helmet";

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

/* ── Plan data ── */
const plans = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for new restaurants just getting started",
    price: { monthly: 999, annual: 799 },
    badge: null,
    accent: "from-slate-400 to-slate-500",
    borderClass: "border-white/10",
    features: [
      "1 QR menu (up to 50 items)",
      "Basic order notifications",
      "Daily order reports",
      "Email support",
      "1 staff account",
    ],
    cta: "Get Started",
    ctaClass:
      "btn-outline border-amber-400/40 text-amber-300 hover:bg-amber-400/10",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Built for restaurants ready to scale",
    price: { monthly: 2499, annual: 1999 },
    badge: "Most Popular",
    accent: "from-amber-400 to-orange-400",
    borderClass: "border-amber-400/40",
    features: [
      "5 QR menus (unlimited items)",
      "Real-time order tracking",
      "Weekly analytics dashboard",
      "WhatsApp + email support",
      "5 staff accounts",
      "Custom menu branding",
      "Upsell suggestions",
    ],
    cta: "Start Free Trial",
    ctaClass:
      "bg-gradient-to-r from-amber-400 to-orange-400 text-black font-bold border-none shadow-[0_0_32px_rgba(251,191,36,0.35)] hover:shadow-[0_0_48px_rgba(251,191,36,0.55)]",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For chains & cloud kitchens with multiple outlets",
    price: { monthly: null, annual: null },
    badge: null,
    accent: "from-orange-400 to-rose-400",
    borderClass: "border-white/10",
    features: [
      "Unlimited QR menus & items",
      "Multi-outlet management",
      "Advanced analytics + exports",
      "Dedicated account manager",
      "Unlimited staff accounts",
      "API access & integrations",
      "Custom onboarding",
      "SLA-backed uptime",
    ],
    cta: "Contact Sales",
    ctaClass:
      "btn-outline border-amber-400/40 text-amber-300 hover:bg-amber-400/10",
  },
];

/* ── Feature comparison table ── */
const tableFeatures = [
  { label: "QR Menus", starter: "1", growth: "5", enterprise: "Unlimited" },
  { label: "Menu Items", starter: "50", growth: "Unlimited", enterprise: "Unlimited" },
  { label: "Staff Accounts", starter: "1", growth: "5", enterprise: "Unlimited" },
  { label: "Analytics", starter: "Basic", growth: "Advanced", enterprise: "Enterprise" },
  { label: "Custom Branding", starter: false, growth: true, enterprise: true },
  { label: "API Access", starter: false, growth: false, enterprise: true },
  { label: "Priority Support", starter: false, growth: true, enterprise: true },
  { label: "Multi-outlet", starter: false, growth: false, enterprise: true },
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
    q: "Is there a free trial?",
    a: "Yes! The Growth plan comes with a 14-day free trial — no credit card required. You get full access to all Growth features during the trial.",
  },
  {
    q: "Can I change my plan later?",
    a: "Absolutely. You can upgrade, downgrade, or cancel at any time from your dashboard. Changes take effect immediately on upgrades and at the next billing cycle on downgrades.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major UPI apps, credit/debit cards (Visa, Mastercard, RuPay), and net banking. Invoices in INR with GST included.",
  },
  {
    q: "Do I need technical knowledge to set up?",
    a: "Not at all. Our onboarding team helps you go live in under 30 minutes. We handle the setup — you just approve the menu.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your data is yours. You can export all menu and order data at any time. We retain your data for 90 days after cancellation, then permanently delete it.",
  },
];

const Pricing: FC = () => {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleCTA = (planId: string) => {
    if (planId === "enterprise") {
      window.open("mailto:sales@swaadsetu.com", "_blank");
    } else {
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSdjwZxtGkYIpulXopAiZBd-BKbQkqA81--N2DNZ5DqqMYTCXw/viewform?embedded=true",
        "_blank"
      );
    }
  };

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
            <div className="text-center mb-16">
              {/* Eyebrow badge */}
              <motion.div {...fadeUp(0.1)} className="flex justify-center mb-5">
                <div className="badge badge-outline border-amber-400/40 text-amber-300 bg-amber-400/5 gap-2 px-4 py-3 text-xs font-semibold tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Simple, transparent pricing
                </div>
              </motion.div>

              <motion.h1
                {...fadeUp(0.2)}
                className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight"
              >
                Plans that grow{" "}
                <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  with your restaurant
                </span>
              </motion.h1>

              <motion.p
                {...fadeUp(0.35)}
                className="mt-5 text-slate-400 text-lg max-w-xl mx-auto font-light leading-relaxed"
              >
                No hidden fees. No lock-in. Just a smarter way to manage menus
                and orders — starting from day one.
              </motion.p>

              {/* ── Billing toggle ── */}
              <motion.div {...fadeUp(0.45)} className="mt-8 flex items-center justify-center gap-4">
                <span className={`text-sm font-medium transition-colors ${billing === "monthly" ? "text-white" : "text-slate-500"}`}>
                  Monthly
                </span>
                <input
                  type="checkbox"
                  className="toggle toggle-warning"
                  checked={billing === "annual"}
                  onChange={() =>
                    setBilling(billing === "monthly" ? "annual" : "monthly")
                  }
                />
                <span className={`text-sm font-medium flex items-center gap-2 transition-colors ${billing === "annual" ? "text-white" : "text-slate-500"}`}>
                  Annual
                  <span className="badge bg-amber-400/15 text-amber-300 border-amber-400/30 text-[10px] font-semibold px-2">
                    Save 20%
                  </span>
                </span>
              </motion.div>
            </div>

            {/* ── Pricing cards ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {plans.map((plan, i) => {
                const price =
                  plan.price.monthly === null
                    ? null
                    : billing === "monthly"
                    ? plan.price.monthly
                    : plan.price.annual;

                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.65,
                      delay: 0.5 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`relative flex flex-col rounded-3xl border bg-white/[0.03] backdrop-blur-sm p-8 ${plan.borderClass} ${plan.id === "growth" ? "ring-1 ring-amber-400/30 shadow-[0_0_60px_rgba(251,191,36,0.1)]" : ""}`}
                  >
                    {/* Popular badge */}
                    {plan.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-black text-[11px] font-bold px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    {/* Gradient accent line */}
                    <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${plan.accent} mb-6`} />

                    <h2 className="text-xl font-bold text-white mb-1">{plan.name}</h2>
                    <p className="text-sm text-slate-400 leading-snug mb-6">{plan.tagline}</p>

                    {/* Price */}
                    <div className="mb-6">
                      {price === null ? (
                        <div>
                          <span className="text-3xl font-black text-white">Custom</span>
                          <p className="text-xs text-slate-500 mt-1">Tailored to your scale</p>
                        </div>
                      ) : (
                        <div className="flex items-baseline gap-1">
                          <span className="text-slate-400 text-lg font-medium">₹</span>
                          <span className="text-4xl font-black text-white tabular-nums">
                            {price.toLocaleString("en-IN")}
                          </span>
                          <span className="text-slate-500 text-sm">/mo</span>
                        </div>
                      )}
                      {billing === "annual" && price !== null && (
                        <p className="text-[11px] text-amber-400/70 mt-1">
                          Billed annually · Save ₹{((plan.price.monthly! - plan.price.annual!) * 12).toLocaleString("en-IN")}/yr
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="flex flex-col gap-3 mb-8 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <CheckIcon />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button
                      onClick={() => handleCTA(plan.id)}
                      className={`btn w-full rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 ${plan.ctaClass}`}
                    >
                      {plan.cta}
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* ── Feature comparison table ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-20"
            >
              <h2 className="text-2xl font-bold text-center mb-2">Compare plans</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto mb-10" />

              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-6 text-slate-400 font-medium">Feature</th>
                      {plans.map((p) => (
                        <th key={p.id} className="py-4 px-6 text-center font-bold text-white">
                          <span className={`bg-gradient-to-r ${p.accent} bg-clip-text text-transparent`}>
                            {p.name}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableFeatures.map((row, i) => (
                      <tr
                        key={row.label}
                        className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}
                      >
                        <td className="py-3.5 px-6 text-slate-300">{row.label}</td>
                        {(["starter", "growth", "enterprise"] as const).map((plan) => {
                          const val = row[plan];
                          return (
                            <td key={plan} className="py-3.5 px-6 text-center">
                              {typeof val === "boolean" ? (
                                val ? <CheckIcon /> : <CrossIcon />
                              ) : (
                                <span className="text-slate-200 font-medium">{val}</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* ── Trust strip ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-amber-400/15 bg-amber-400/5 backdrop-blur-sm p-8 md:p-12 mb-20 text-center"
            >
              <p className="text-slate-400 text-sm mb-3 uppercase tracking-widest font-semibold">
                Trusted by restaurants across India
              </p>
              {/*
                IMAGES NOTE:
                Replace the three placeholder images below with real photos.
                Recommended: 80×80px circular restaurant/chef photos or logo images.
                Source: your own assets, or royalty-free from Unsplash.
                Example Unsplash URLs (replace with your own):
                  https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=80&h=80&fit=crop&crop=faces
              */}
              <div className="flex items-center justify-center gap-3 mb-4">
                {[
                  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=80&h=80&fit=crop&crop=faces",
                  "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=80&h=80&fit=crop&crop=faces",
                  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=80&h=80&fit=crop&crop=faces",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Restaurant"
                    className="w-10 h-10 rounded-full object-cover border-2 border-amber-400/30"
                    style={{ marginLeft: i > 0 ? "-8px" : 0 }}
                  />
                ))}
                <span className="ml-3 text-slate-300 text-sm font-medium">
                  58+ restaurants live
                </span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white max-w-lg mx-auto leading-snug">
                "SwaadSetu paid for itself in the{" "}
                <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                  first week.
                </span>
                "
              </p>
              <p className="text-slate-500 text-sm mt-3">— Ravi Sharma, Owner at Spice Garden, Raipur</p>
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
                  Still have questions?
                </p>
                <a
                  href="mailto:hello@swaadsetu.com"
                  className="btn btn-outline border-amber-400/40 text-amber-300 hover:bg-amber-400/10 rounded-xl px-8"
                >
                  Talk to us →
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Pricing;