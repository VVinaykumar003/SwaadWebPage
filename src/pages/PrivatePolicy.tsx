import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "../component/Footer";
import Navbar from "../component/Navbar";
import BackButton from "../component/ui/BackButton";

/* ─────────────────────────────────────────────────────────────────
   THEMING NOTE:
   This file uses the same dark theme as Hero (#060812 base,
   amber accent). For light theme, flip the CSS custom properties
   or use DaisyUI's data-theme system on the <html> element.
   Every color class below uses semantic tokens so they can be
   swapped via a single theme class.

   DaisyUI custom theme stub (add to tailwind.config.js):

   daisyui: {
     themes: [
       {
         "swaad-dark": {
           "primary": "#FBBF24",          // amber-400
           "primary-content": "#000000",
           "base-100": "#060812",
           "base-200": "#0D1120",
           "base-content": "#F8FAFC",
         },
         "swaad-light": {
           "primary": "#D97706",          // amber-600
           "primary-content": "#FFFFFF",
           "base-100": "#FAFAF7",
           "base-200": "#F0EDE4",
           "base-content": "#1C1917",
         },
       }
     ]
   }
───────────────────────────────────────────────────────────────── */

/* ── Particle (same as Hero) ── */
const Particle = ({
  x, y, size, delay,
}: { x: string; y: string; size: number; delay: number }) => (
  <motion.div
    className="absolute rounded-full bg-amber-400 pointer-events-none"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{ y: [0, -16, 0], opacity: [0.06, 0.28, 0.06] }}
    transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const particles = [
  { x: "4%",  y: "12%", size: 3, delay: 0 },
  { x: "88%", y: "20%", size: 4, delay: 0.8 },
  { x: "15%", y: "75%", size: 3, delay: 1.6 },
  { x: "92%", y: "65%", size: 4, delay: 2.2 },
  { x: "50%", y: "5%",  size: 3, delay: 0.4 },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ── Legal sections config ── */
const sections = [
  {
    id: "privacy",
    label: "Privacy Policy",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    id: "compliance",
    label: "Compliance & Security",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "terms",
    label: "Terms & Conditions",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: "cancellation",
    label: "Cancellation & Refund",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
      </svg>
    ),
  },
];

/* ── Reusable section block ── */
const LegalBlock = ({
  id,
  title,
  lastUpdated,
  children,
}: {
  id: string;
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.55, ease: "easeOut" }}
    className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10 scroll-mt-32"
  >
    {/* Section header */}
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
      <div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mt-2" />
      </div>
      <span className="text-[11px] text-slate-500 font-medium bg-white/5 border border-white/10 rounded-full px-3 py-1 self-start sm:self-center whitespace-nowrap">
        Last updated: {lastUpdated}
      </span>
    </div>

    {/* Content */}
    <div className="prose prose-sm max-w-none text-slate-300 leading-relaxed space-y-4">
      {children}
    </div>
  </motion.section>
);

/* ── Prose helpers ── */
const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-base font-semibold text-white mt-6 mb-2">{children}</h3>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-slate-400 text-sm leading-7">{children}</p>
);
const UL = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col gap-2 mt-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
        <svg className="w-4 h-4 text-amber-400/70 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        {item}
      </li>
    ))}
  </ul>
);

/* ────────────────────────────────── COMPONENT ────────────────────── */
const PrivatePolicy = () => {
  const [activeSection, setActiveSection] = useState("privacy");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  /* Scroll-spy */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -65% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#060812] text-white overflow-x-hidden">

      {/* ── Background grid ── */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Radial glow ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-15%] right-[20%] w-[700px] h-[500px] rounded-full bg-amber-500/6 blur-[130px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[300px] rounded-full bg-orange-600/5 blur-[100px]" />
      </div>

      {/* ── Particles ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map((p, i) => <Particle key={i} {...p} />)}
      </div>

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <Navbar />
        <div className="px-6 py-2">
          <BackButton />
        </div>
      </header>

      {/* ── Hero header ── */}
      {/*
        IMAGES NOTE:
        The decorative shield image below is a decorative SVG icon.
        You can swap it for a real image:
          <img src="YOUR_IMAGE_URL" className="w-20 h-20 object-contain" />
        Recommended size: 80×80px, transparent background, amber/gold tones.
        Optionally use an illustration from undraw.co (undraw.co/illustrations).
      */}
      <div className="relative z-10 pt-28 pb-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center">
          {/* Decorative shield icon */}
          <motion.div {...fadeUp(0.1)} className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.15)]">
              <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="flex justify-center mb-5">
            <div className="badge badge-outline border-amber-400/40 text-amber-300 bg-amber-400/5 gap-2 px-4 py-3 text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Legal & Privacy
            </div>
          </motion.div>

          <motion.h1 {...fadeUp(0.25)} className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Your trust is our{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              foundation
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.35)} className="mt-4 text-slate-400 text-base max-w-lg mx-auto leading-relaxed">
            We keep things simple and transparent. Here's everything you need to
            know about how we handle your data and our commitments to you.
          </motion.p>

          {/* Quick-nav pills */}
          <motion.div {...fadeUp(0.45)} className="mt-8 flex flex-wrap justify-center gap-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200
                  ${activeSection === s.id
                    ? "bg-amber-400/15 border-amber-400/40 text-amber-300 shadow-[0_0_16px_rgba(251,191,36,0.15)]"
                    : "border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-300"
                  }`}
              >
                {s.icon}
                {s.label}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Main layout: sticky sidebar + content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex gap-10">

          {/* ── Sticky Sidebar (desktop only) ── */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-28 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4">
              <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-widest mb-4 px-2">
                Contents
              </p>
              <nav className="flex flex-col gap-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all duration-200
                      ${activeSection === s.id
                        ? "bg-amber-400/12 text-amber-300 border border-amber-400/20"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                      }`}
                  >
                    <span className={activeSection === s.id ? "text-amber-400" : "text-slate-600"}>
                      {s.icon}
                    </span>
                    {s.label}
                  </button>
                ))}
              </nav>

              {/* Active indicator line */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-[10px] text-slate-600 px-2">Effective from</p>
                <p className="text-[11px] text-slate-400 px-2 font-medium">January 1, 2025</p>
              </div>
            </div>
          </aside>

          {/* ── Content area ── */}
          <main className="flex-1 flex flex-col gap-8 min-w-0">

            {/* ── Privacy Policy ── */}
            <LegalBlock id="privacy" title="Privacy Policy" lastUpdated="Jan 1, 2025">
              <P>
                Swaad Setu ("we", "our", "us") is committed to protecting your personal information.
                This Privacy Policy describes how we collect, use, and safeguard data when you use
                our platform.
              </P>
              <H3>Information we collect</H3>
              <UL items={[
                "Account information: name, email, phone number, restaurant details",
                "Usage data: pages visited, features used, order volumes",
                "Device data: IP address, browser type, operating system",
                "Payment information (processed securely via third-party gateways — we never store card data)",
              ]} />
              <H3>How we use your information</H3>
              <UL items={[
                "To operate and improve the SwaadSetu platform",
                "To send transactional emails and service notifications",
                "To generate anonymised analytics about platform usage",
                "To comply with legal obligations",
              ]} />
              <H3>Data sharing</H3>
              <P>
                We do not sell your personal data. We share information only with trusted service
                providers (payment processors, cloud hosting, analytics) under strict data-processing
                agreements, or when required by law.
              </P>
              <H3>Your rights</H3>
              <P>
                You may request access to, correction of, or deletion of your personal data at any
                time by writing to{" "}
                <a href="mailto:privacy@swaadsetu.com" className="text-amber-400 hover:underline">
                  privacy@swaadsetu.com
                </a>
                . We will respond within 30 days.
              </P>
              <H3>Cookies</H3>
              <P>
                We use essential cookies to keep you logged in and preference cookies to remember
                your settings. Analytics cookies are optional and can be declined at any time
                via your account settings.
              </P>
            </LegalBlock>

            {/* ── Compliance & Security ── */}
            <LegalBlock id="compliance" title="Compliance & Security" lastUpdated="Jan 1, 2025">
              <P>
                Security is built into every layer of SwaadSetu. We follow industry best practices
                to protect your restaurant's data.
              </P>
              <H3>Technical safeguards</H3>
              <UL items={[
                "All data encrypted in transit (TLS 1.3) and at rest (AES-256)",
                "Role-based access controls for all staff accounts",
                "Regular third-party penetration testing",
                "Automated backups with 30-day retention",
                "99.9% uptime SLA for Enterprise plans",
              ]} />
              <H3>Regulatory compliance</H3>
              <UL items={[
                "Compliant with the Digital Personal Data Protection Act, 2023 (India)",
                "Payment processing via PCI-DSS Level 1 certified gateways",
                "GST-compliant invoicing and record keeping",
              ]} />
              <H3>Incident response</H3>
              <P>
                In the unlikely event of a security incident, we will notify affected users within
                72 hours and work swiftly to contain and remediate the issue. Enterprise customers
                receive a dedicated incident response contact.
              </P>
              <H3>Responsible disclosure</H3>
              <P>
                Found a vulnerability? Please report it responsibly to{" "}
                <a href="mailto:security@swaadsetu.com" className="text-amber-400 hover:underline">
                  security@swaadsetu.com
                </a>
                . We take all reports seriously and acknowledge them within 48 hours.
              </P>
            </LegalBlock>

            {/* ── Terms & Conditions ── */}
            <LegalBlock id="terms" title="Terms & Conditions" lastUpdated="Jan 1, 2025">
              <P>
                By accessing or using SwaadSetu, you agree to be bound by these Terms. Please read
                them carefully. If you do not agree, do not use the platform.
              </P>
              <H3>Acceptable use</H3>
              <UL items={[
                "You must be at least 18 years old and authorised to act on behalf of your restaurant",
                "You may not use the platform for unlawful purposes or to infringe third-party rights",
                "You may not reverse-engineer, scrape, or attempt to gain unauthorised access",
                "Each account is for one restaurant entity; reselling access is prohibited",
              ]} />
              <H3>Intellectual property</H3>
              <P>
                All platform code, design, trademarks, and content are the exclusive property of
                Swaad Setu. Your menu content and restaurant data remain your property at all times.
                You grant us a limited licence to display your content solely to operate the service.
              </P>
              <H3>Limitation of liability</H3>
              <P>
                SwaadSetu is provided "as is". To the extent permitted by applicable law, we are not
                liable for indirect, incidental, or consequential damages arising from your use of
                the platform. Our total aggregate liability shall not exceed the fees paid by you in
                the three months preceding the claim.
              </P>
              <H3>Changes to terms</H3>
              <P>
                We may update these Terms from time to time. Material changes will be communicated
                by email at least 14 days before they take effect. Continued use after the effective
                date constitutes acceptance.
              </P>
              <H3>Governing law</H3>
              <P>
                These Terms are governed by and construed in accordance with the laws of India.
                Any disputes shall be subject to the exclusive jurisdiction of the courts of
                Raipur, Chhattisgarh.
              </P>
            </LegalBlock>

            {/* ── Cancellation & Refund ── */}
            <LegalBlock id="cancellation" title="Cancellation & Refund Policy" lastUpdated="Jan 1, 2025">
              <P>
                We want you to feel confident choosing SwaadSetu. Here's our straightforward
                cancellation and refund policy.
              </P>
              <H3>Cancellation</H3>
              <UL items={[
                "Cancel anytime from your account dashboard under Settings → Subscription",
                "Access continues until the end of your current billing period",
                "No cancellation fees for monthly or annual plans",
                "Data export is available for 90 days after cancellation",
              ]} />
              <H3>Refunds — monthly plans</H3>
              <P>
                Monthly subscriptions are non-refundable once a billing cycle has begun. If you
                cancel mid-cycle, you retain access until the cycle ends.
              </P>
              <H3>Refunds — annual plans</H3>
              <P>
                If you cancel an annual plan within 14 days of purchase and have not generated
                more than 100 orders through the platform, you are eligible for a full refund.
                After 14 days, a pro-rated refund may be issued at our discretion.
              </P>
              <H3>Free trial</H3>
              <P>
                No charge is made during the 14-day free trial. Simply cancel before the trial
                ends to avoid any charge. No credit card is required to start a trial.
              </P>
              <H3>How to request a refund</H3>
              <P>
                Email{" "}
                <a href="mailto:billing@swaadsetu.com" className="text-amber-400 hover:underline">
                  billing@swaadsetu.com
                </a>{" "}
                with your registered email and reason. We process eligible refunds within 7–10
                business days to the original payment method.
              </P>
            </LegalBlock>

            {/* ── Contact card ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-amber-400/15 bg-amber-400/5 p-8 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Have a question about these policies?</h3>
              <p className="text-slate-400 text-sm mb-5">
                Our team is happy to clarify anything. Reach out and we'll get back to you within one business day.
              </p>
              <a
                href="mailto:hello@swaadsetu.com"
                className="btn bg-gradient-to-r from-amber-400 to-orange-400 text-black font-bold border-none shadow-[0_0_24px_rgba(251,191,36,0.3)] hover:shadow-[0_0_36px_rgba(251,191,36,0.5)] hover:scale-[1.02] active:scale-95 transition-all rounded-xl px-8"
              >
                Contact Us
              </a>
            </motion.div>

          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivatePolicy;