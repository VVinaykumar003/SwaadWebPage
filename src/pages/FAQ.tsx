import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../component/FAQ";
import Navbar from "../component/Navbar";
import { Footer } from "../component/Footer";
import { Helmet } from "@dr.pogodin/react-helmet";

/* ─────────────────────────── types ─────────────────────────── */
type CategoryId =
  | "general" | "customer" | "features" | "setup"
  | "pricing"  | "support"  | "integration" | "compliance";

/* ─────────────────────────── animation helpers ─────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ─────────────────────────── category icon map ─────────────── */
const categoryIcon: Record<string, React.ReactNode> = {
  general: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M12 16v-4m0-4h.01"/>
    </svg>
  ),
  customer: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4a4 4 0 11-8 0 4 4 0 018 0z"/>
    </svg>
  ),
  features: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  setup: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 4h4m-4 4h4m-3-8-3 8-3-8h12a2 2 0 012 2v8a2 2 0 01-2 2h-2" />
    </svg>
  ),
  pricing: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
    </svg>
  ),
  support: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>
  ),
  integration: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
    </svg>
  ),
  compliance: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>
  ),
};

/* ─────────────────────────── accordion item ────────────────── */
const AccordionItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: { id: string; question: string; answer: React.ReactNode; tags?: string[] };
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div
    className="rounded-2xl border overflow-hidden transition-all duration-200"
    style={{
      background: isOpen ? "rgba(251,191,36,0.04)" : "rgba(255,255,255,0.02)",
      borderColor: isOpen ? "rgba(251,191,36,0.25)" : "rgba(255,255,255,0.07)",
    }}
  >
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors"
    >
      <span className={`text-sm font-semibold leading-snug pr-4 ${isOpen ? "text-white" : "text-slate-300"}`}>
        {item.question}
      </span>
      <span
        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: isOpen ? "rgba(251,191,36,0.15)" : "rgba(255,255,255,0.05)",
          border: `1px solid ${isOpen ? "rgba(251,191,36,0.35)" : "rgba(255,255,255,0.08)"}`,
          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
        }}
      >
        <svg
          className="w-3.5 h-3.5"
          style={{ color: isOpen ? "#fbbf24" : "rgba(255,255,255,0.4)" }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-7-7h14"/>
        </svg>
      </span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="answer"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="px-5 pb-5 pt-0">
            <div
              className="w-full h-px mb-4"
              style={{ background: "rgba(251,191,36,0.12)" }}
            />
            <div className="text-sm text-slate-400 leading-relaxed">
              {item.answer}
            </div>
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 rounded-full text-[11px] font-medium"
                    style={{
                      background: "rgba(251,191,36,0.08)",
                      color: "#fbbf24",
                      border: "1px solid rgba(251,191,36,0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

/* ─────────────────────────── main page ─────────────────────── */
const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("general");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const categories = faqData.map((c) => ({ id: c.id as CategoryId, label: c.label }));
  const activeCategoryData = faqData.find((c) => c.id === activeCategory);

  const toggleFAQ = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCategoryChange = (id: CategoryId) => {
    setActiveCategory(id);
    setOpenItems({});
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Swaad Setu FAQ – Everything About Our QR Ordering Platform</title>
        <meta name="description" content="Find answers to all questions about Swaad Setu's QR-based ordering platform, features, setup, and more." />
        <meta property="og:title" content="Swaad Setu FAQ – Everything About Our QR Ordering Platform" />
        <meta property="og:description" content="Find answers to all questions about Swaad Setu's QR-based ordering platform, features, setup, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.swaadsetu.com/faq" />
        <meta property="og:image" content="https://www.swaadsetu.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Swaad Setu FAQ – Everything About Our QR Ordering Platform" />
        <meta name="twitter:description" content="Find answers to all questions about Swaad Setu's QR-based ordering platform, features, setup, and more." />
        <meta name="twitter:image" content="https://www.swaadsetu.com/logo.png" />
      </Helmet>

      <div className="min-h-screen bg-[#060812] text-base-content overflow-x-clip" data-theme="swaad-dark">
        <Navbar />

        {/* ── Background grid ── */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(251,191,36,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,0.03) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        {/* ── Top radial glow ── */}
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full opacity-20 blur-[140px] bg-amber-500/30 pointer-events-none z-0"
          aria-hidden="true"
        />

        <div className="relative z-10">

          {/* ════════════════════════════════════
              HERO HEADER
          ════════════════════════════════════ */}
          <section className="pt-28 pb-14 px-5 text-center border-b border-amber-400/10">
            <div className="max-w-3xl mx-auto">
              <motion.div {...fadeUp(0)}>
                <div
                  className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-widest px-4 py-2.5 rounded-full mb-6"
                  style={{
                    background: "rgba(251,191,36,0.08)",
                    color: "#fbbf24",
                    border: "1px solid rgba(251,191,36,0.22)"
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  FAQs
                </div>
              </motion.div>

              <motion.h1
                {...fadeUp(0.08)}
                className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-[1.06] text-white mb-5"
              >
                Everything You{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #fbbf24, #fb923c)" }}
                >
                  Need to Know
                </span>
              </motion.h1>

              <motion.p
                {...fadeUp(0.14)}
                className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto font-light"
              >
                Explore answers to common questions about setup, features, billing, support, and running your food business with SwaadSetu.
              </motion.p>
            </div>
          </section>

          {/* ════════════════════════════════════
              MAIN CONTENT
          ════════════════════════════════════ */}
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 pb-24">
            <div className="flex flex-col md:flex-row gap-8 items-start">

              {/* ── Sidebar ── */}
              <aside className="w-full md:w-56 md:sticky md:top-8 flex-shrink-0">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-amber-400/50 mb-3 px-1">
                  Categories
                </p>
                <ul className="flex flex-wrap md:flex-col gap-1.5">
                  {categories.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    return (
                      <li key={cat.id} className="w-[calc(50%-3px)] md:w-full">
                        <button
                          type="button"
                          onClick={() => handleCategoryChange(cat.id)}
                          className="w-full text-left text-xs font-medium px-3.5 py-2.5 rounded-xl flex items-center gap-2.5 transition-all duration-200"
                          style={
                            isActive
                              ? {
                                  background: "rgba(251,191,36,0.12)",
                                  color: "#fbbf24",
                                  border: "1px solid rgba(251,191,36,0.3)",
                                }
                              : {
                                  background: "rgba(255,255,255,0.03)",
                                  color: "rgba(255,255,255,0.45)",
                                  border: "1px solid rgba(255,255,255,0.06)",
                                }
                          }
                        >
                          <span
                            style={{ color: isActive ? "#fbbf24" : "rgba(255,255,255,0.25)" }}
                          >
                            {categoryIcon[cat.id] ?? null}
                          </span>
                          {cat.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </aside>

              {/* ── FAQ panel ── */}
              <section className="flex-1 min-w-0">
                <AnimatePresence mode="wait">
                  {activeCategoryData && (
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* Section heading */}
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{
                            background: "rgba(251,191,36,0.10)",
                            border: "1px solid rgba(251,191,36,0.22)",
                            color: "#fbbf24",
                          }}
                        >
                          {categoryIcon[activeCategory] ?? null}
                        </div>
                        <div>
                          <h2 className="text-xl font-black text-white leading-none">
                            {activeCategoryData.label}
                          </h2>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {activeCategoryData.items.length} question
                            {activeCategoryData.items.length !== 1 ? "s" : ""}
                          </p>
                        </div>
                        <div
                          className="ml-auto h-px flex-1"
                          style={{ background: "rgba(251,191,36,0.12)" }}
                        />
                      </div>

                      {/* Accordion items */}
                      <div className="flex flex-col gap-2.5">
                        {activeCategoryData.items.map((item) => (
                          <AccordionItem
                            key={item.id}
                            item={item}
                            isOpen={!!openItems[item.id]}
                            onToggle={() => toggleFAQ(item.id)}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>

            </div>
          </main>

          {/* ════════════════════════════════════
              CTA BAND
          ════════════════════════════════════ */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <motion.div
              {...fadeUp(0.1)}
              className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
              style={{
                background: "rgba(251,191,36,0.04)",
                border: "1px solid rgba(251,191,36,0.15)",
              }}
            >
              <div className="text-center md:text-left max-w-md">
                <div
                  className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase px-3 py-2 rounded-full mb-4"
                  style={{
                    background: "rgba(251,191,36,0.08)",
                    color: "#fbbf24",
                    border: "1px solid rgba(251,191,36,0.2)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Still have questions?
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">
                  Ready to transform{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(90deg,#fbbf24,#fb923c)" }}
                  >
                    your restaurant?
                  </span>
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Join 58+ restaurants already running on SwaadSetu. Get a
                  personalised demo and go live in under 30 minutes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <button
                  type="button"
                  className="btn btn-md font-bold border-none px-7"
                  style={{
                    background: "linear-gradient(90deg,#fbbf24,#f97316)",
                    color: "#000",
                    boxShadow: "0 0 28px rgba(251,191,36,0.35)",
                  }}
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSdjwZxtGkYIpulXopAiZBd-BKbQkqA81--N2DNZ5DqqMYTCXw/viewform?embedded=true",
                      "_blank",
                    )
                  }
                >
                  Book a Free Demo
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                  </svg>
                </button>
                <button
                  type="button"
                  className="btn btn-md btn-ghost border text-amber-400 px-7"
                  style={{ borderColor: "rgba(251,191,36,0.3)" }}
                  onClick={() => (window.location.href = "https://www.swaadsetu.com/features")}
                >
                  See All Features
                </button>
              </div>
            </motion.div>
          </section>

        </div>

        <Footer />
      </div>
    </>
  );
};

export default FAQ;