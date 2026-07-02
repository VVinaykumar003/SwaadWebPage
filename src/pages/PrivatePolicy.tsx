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
    animate={{ y: [0, -16, 0], opacity: [0.06, 0.28, 0.06] }}
    transition={{
      duration: 4 + delay,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

const particles = [
  { x: "4%", y: "12%", size: 3, delay: 0 },
  { x: "88%", y: "20%", size: 4, delay: 0.8 },
  { x: "15%", y: "75%", size: 3, delay: 1.6 },
  { x: "92%", y: "65%", size: 4, delay: 2.2 },
  { x: "50%", y: "5%", size: 3, delay: 0.4 },
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
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    id: "compliance",
    label: "Compliance & Security",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: "terms",
    label: "Terms & Conditions",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    id: "cancellation",
    label: "Cancellation & Refund",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
        />
      </svg>
    ),
  },
  {
    id: "cookies",
    label: "Cookies Policy",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 10a1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1 1 1 0 01-1 1zm6 4a1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1 1 1 0 01-1 1zm-3 2a1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1 1 1 0 01-1 1z"
        />
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
        <svg
          className="w-4 h-4 text-amber-400/70 shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
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
      { rootMargin: "-30% 0px -65% 0px" },
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
    <div className="min-h-screen bg-[#060812] text-white overflow-x-clip">
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
        {particles.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
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
              <svg
                className="w-8 h-8 text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="flex justify-center mb-5">
            <div className="badge badge-outline border-amber-400/40 text-amber-300 bg-amber-400/5 gap-2 px-4 py-3 text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Legal & Privacy
            </div>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Transparency, Security &
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {" "}
              Trust
            </span>
          </h1>

          <p className="mt-4 text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
            We are committed to protecting your information, maintaining
            platform security, and operating with complete transparency. Review
            our policies, terms, and commitments that help keep your business
            data safe.
          </p>
        </div>
      </div>

      {/* ── Main layout: sticky sidebar + content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* ── Sticky Sidebar (desktop only) ── */}
          <aside className="hidden lg:block w-56 shrink-0 sticky top-28">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4">
              <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-widest mb-4 px-2">
                Contents
              </p>
              <nav className="flex flex-col gap-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all duration-200
                      ${
                        activeSection === s.id
                          ? "bg-amber-400/12 text-amber-300 border border-amber-400/20"
                          : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                      }`}
                  >
                    <span
                      className={
                        activeSection === s.id
                          ? "text-amber-400"
                          : "text-slate-600"
                      }
                    >
                      {s.icon}
                    </span>
                    {s.label}
                  </button>
                ))}
              </nav>

              {/* Active indicator line */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-[10px] text-slate-600 px-2">
                  Effective from
                </p>
                <p className="text-[11px] text-slate-400 px-2 font-medium">
                  April 1, 2026
                </p>
              </div>
            </div>
          </aside>

          {/* ── Content area ── */}
          <main className="flex-1 flex flex-col gap-8 min-w-0">
            {/* ── Privacy Policy ── */}
            <LegalBlock
              id="privacy"
              title="Privacy Policy"
              lastUpdated="April 1, 2026"
            >
              <P>
                SwaadSetu ("we", "our", or "us") values your privacy and is
                committed to protecting the information you share with us. This
                Privacy Policy explains how we collect, use, store, and
                safeguard your data when you use the SwaadSetu platform.
              </P>
              <H3>Information we collect</H3>
              <UL
                items={[
                  "Name",
                  "Email address",
                  "Phone number",
                  "Restaurant and business details",
                ]}
              />
              <H3>Usage Information</H3>
              <UL
                items={[
                  "Pages visited",
                  "Features accessed",
                  "Order activity and platform interactions",
                ]}
              />
              <H3>Device Information</H3>
              <UL
                items={[
                  "Pages visited",
                  "Features accessed",
                  "Order activity and platform interactions",
                ]}
              />
              <H3>Payment Information</H3>
              <P>
                {" "}
                Payments are processed securely through trusted third-party
                payment gateways. SwaadSetu does not store your credit card,
                debit card, or banking information.{" "}
              </P>
              <H3>How We Use Your Information</H3>
              <P>We use the collected information to:</P>
              <UL
                items={[
                  "Operate and maintain the SwaadSetu platform",
                  "Improve platform performance and user experience",
                  "Provide customer support and onboarding assistance",
                  "Send service notifications and transactional communications",
                  "Generate aggregated and anonymized analytics",
                  "Comply with applicable legal and regulatory obligations",
                ]}
              />
              <H3>Data Sharing</H3>{" "}
              <P> We do not sell, rent, or trade your personal information. </P>
              <P>Information may be shared only with:</P>
              <UL
                items={[
                  "Payment service providers",
                  "Cloud hosting and infrastructure partners",
                  "Analytics and monitoring providers",
                  "Government authorities where required by law",
                ]}
              />
              <P>
                {" "}
                All third-party providers are required to maintain appropriate
                security and confidentiality standards.{" "}
              </P>
              <H3>Data Retention</H3>
              <P>
                {" "}
                We retain information only for as long as necessary to provide
                our services, comply with legal obligations, resolve disputes,
                and enforce agreements. Certain records may be retained where
                required by applicable laws.{" "}
              </P>{" "}
              <H3>Your Rights</H3> <P>You may request:</P>{" "}
              <UL
                items={[
                  "Access to your personal information",
                  "Correction of inaccurate information",
                  "Deletion of your data where applicable",
                ]}
              />{" "}
              <P>
                {" "}
                Requests can be submitted to: <br />{" "}
                <a
                  href="mailto:connect@swaadsetu.com"
                  className="text-amber-400 hover:underline"
                >
                  {" "}
                  connect@swaadsetu.com{" "}
                </a>{" "}
              </P>{" "}
              <P>
                {" "}
                We will review and respond within a reasonable period in
                accordance with applicable laws.{" "}
              </P>{" "}
              <H3>Cookies</H3>{" "}
              <P>We use cookies and similar technologies to:</P>{" "}
              <UL
                items={[
                  "Maintain secure sessions",
                  "Remember preferences and settings",
                  "Improve platform functionality",
                  "Analyze platform performance",
                ]}
              />{" "}
              <P>
                {" "}
                You may manage cookie preferences through your browser settings.
                Disabling certain cookies may affect platform
                functionality.{" "}
              </P>{" "}
            </LegalBlock>
            {/* ── Compliance & Security ── */}


        
              <LegalBlock
                id="compliance"
                title="Compliance & Security"
                lastUpdated="April 1, 2026"
              >
                <P>
                  Security and reliability are built into every layer of the SwaadSetu
                  platform. We follow industry-standard practices to protect restaurant data
                  and ensure service continuity.
                </P>

                <H3>Security Measures</H3>

                <H3>Data Protection</H3>

                <UL
                  items={[
                    "Encryption in transit using TLS",
                    "Encryption at rest using industry-standard security controls",
                    "Secure cloud infrastructure",
                    "Regular backups and recovery procedures",
                  ]}
                />

                <H3>Access Controls</H3>

                <UL
                  items={[
                    "Role-based access permissions",
                    "Secure authentication mechanisms",
                    "Restricted administrative access",
                    "Activity monitoring and logging",
                  ]}
                />

                <H3>Platform Security</H3>

                <UL
                  items={[
                    "Periodic security assessments",
                    "Vulnerability monitoring and remediation",
                    "Secure software development practices",
                    "Infrastructure monitoring and threat detection",
                  ]}
                />

                <H3>Regulatory Compliance</H3>

                <P>
                  SwaadSetu is designed to support compliance with applicable Indian
                  regulations, including:
                </P>

                <UL
                  items={[
                    "Digital Personal Data Protection Act (DPDP Act), 2023",
                    "GST-compliant invoicing and record management",
                    "Secure payment processing through PCI-compliant payment providers",
                  ]}
                />

                <H3>Incident Response</H3>

                <P>
                  In the unlikely event of a security incident, we will investigate promptly,
                  take corrective actions, and notify affected users where required under
                  applicable laws and regulations.
                </P>

                <H3>Responsible Disclosure</H3>

                <P>
                  If you discover a potential security vulnerability, please report it
                  responsibly to:
                  <br />
                  <a
                    href="mailto:connect@swaadsetu.com"
                    className="text-amber-400 hover:underline"
                  >
                    connect@swaadsetu.com
                  </a>
                </P>

                <P>
                  We review all security reports seriously and aim to acknowledge submissions
                  within 48 business hours.
                </P>
              </LegalBlock>



            {/* ── Terms & Conditions ── */}
                        
              <LegalBlock
                id="terms"
                title="Terms & Conditions"
                lastUpdated="April 1, 2026"
              >
                <P>
                  By accessing or using SwaadSetu, you agree to these Terms & Conditions.
                  If you do not agree with any part of these Terms, please discontinue use
                  of the platform.
                </P>

                <H3>Eligibility</H3>

                <P>You must:</P>

                <UL
                  items={[
                    "Be at least 18 years of age",
                    "Be authorized to act on behalf of a restaurant or business",
                    "Provide accurate and current information",
                  ]}
                />

                <H3>Acceptable Use</H3>

                <P>You agree not to:</P>

                <UL
                  items={[
                    "Use the platform for unlawful activities",
                    "Infringe upon third-party rights",
                    "Attempt unauthorized access to systems or data",
                    "Reverse engineer, copy, or exploit the platform",
                    "Resell or distribute platform access without permission",
                  ]}
                />

                <H3>Account Responsibility</H3>

                <P>
                  You are responsible for maintaining the confidentiality of your account
                  credentials and for all activities conducted through your account.
                </P>

                <H3>Intellectual Property</H3>

                <P>
                  All software, designs, trademarks, branding, and platform content remain
                  the exclusive property of SwaadSetu.
                </P>

                <P>
                  Restaurant menus, images, customer records, and operational data remain
                  the property of the respective restaurant.
                </P>

                <P>
                  You grant SwaadSetu a limited license to process and display such content
                  solely for providing the service.
                </P>

                <H3>Service Availability</H3>

                <P>
                  We strive to maintain reliable platform availability. However, temporary
                  interruptions may occur due to maintenance, upgrades, network failures,
                  or circumstances beyond our reasonable control.
                </P>

                <H3>Limitation of Liability</H3>

                <P>
                  To the maximum extent permitted by law, SwaadSetu shall not be liable for
                  indirect, incidental, consequential, or special damages arising from
                  platform usage.
                </P>

                <P>
                  Our total liability shall not exceed the subscription fees paid by you
                  during the preceding twelve months.
                </P>

                <H3>Changes to Terms</H3>

                <P>
                  We may update these Terms periodically. Material changes will be
                  communicated through email or platform notifications.
                </P>

                <P>
                  Continued use of the platform after updates constitutes acceptance of the
                  revised Terms.
                </P>

                <H3>Governing Law</H3>

                <P>
                  These Terms shall be governed by the laws of India.
                </P>
              </LegalBlock>



            {/* ── Cancellation & Refund ── */}

              <LegalBlock
                id="cancellation"
                title="Cancellation & Refund Policy"
                lastUpdated="April 1, 2026"
              >
                <P>
                  At SwaadSetu, we believe in transparent pricing and long-term partnerships
                  with our restaurant partners. This policy explains how subscription
                  cancellations are handled.
                </P>

                <H3>Cancellation</H3>

                <P>
                  Restaurant partners may cancel their subscription at any time by contacting
                  the SwaadSetu support team.
                </P>

                <P>Upon cancellation:</P>

                <UL
                  items={[
                    "Your subscription will remain active until the end of the current billing period.",
                    "No future subscription charges will be applied.",
                    "Access to the platform will end once the active subscription period expires.",
                    "Restaurant data may be available for export for a limited period after cancellation.",
                  ]}
                />

                <H3>No Refund Policy</H3>

                <P>
                  SwaadSetu subscriptions are generally non-refundable once the subscription
                  has been activated and the platform has been made available for use.
                </P>

                <P>
                  This applies to both monthly and annual subscription plans.
                </P>

                <H3>Exceptional Circumstances</H3>

                <P>
                  We understand that unforeseen situations may arise. In exceptional cases,
                  refund requests may be reviewed at the sole discretion of SwaadSetu.
                </P>

                <P>Examples may include:</P>

                <UL
                  items={[
                    "Verified technical issues that prevent normal platform usage.",
                    "Duplicate payments or billing errors.",
                    "Service-related issues determined by our support team.",
                  ]}
                />

                <P>
                  Submitting a refund request does not guarantee approval.
                </P>

                <H3>Trial & Evaluation</H3>

                <P>
                  Where a trial, demo, or evaluation period is offered, restaurant partners
                  are encouraged to assess the platform before purchasing a subscription
                  plan.
                </P>

                <H3>Data Retention</H3>

                <P>
                  Following cancellation, account data may remain available for a limited
                  period in accordance with our data retention practices.
                </P>

                <P>
                  After the retention period expires, data may be permanently removed from
                  active systems.
                </P>

                <H3>Contact Us</H3>

                <P>
                  For cancellation requests or billing-related questions, please contact:
                  <br />
                  <a
                    href="mailto:connect@swaadsetu.com"
                    className="text-amber-400 hover:underline"
                  >
                    connect@swaadsetu.com
                  </a>
                </P>

                <P>
                  Our team will review and respond to all requests as quickly as possible.
                </P>

                <H3>Policy Updates</H3>

                <P>
                  SwaadSetu reserves the right to update this policy from time to time.
                  Any material changes will be communicated through the platform or
                  registered email addresses.
                </P>
              </LegalBlock>


            {/* ── Cookies Policy ── */}
          
            <LegalBlock
              id="cookies"
              title="Cookies Policy"
              lastUpdated="April 1, 2026"
            >
              <P>
                This Cookies Policy explains how SwaadSetu uses cookies and similar
                technologies when you access or use our platform.
              </P>

              <P>
                By continuing to use SwaadSetu, you agree to the use of cookies as
                described in this policy.
              </P>

              <H3>What Are Cookies?</H3>

              <P>
                Cookies are small text files stored on your device when you visit a
                website or use an online service. They help improve functionality,
                remember preferences, enhance security, and provide insights into
                platform performance.
              </P>

              <H3>How We Use Cookies</H3>

              <P>SwaadSetu uses cookies and similar technologies to:</P>

              <UL
                items={[
                  "Keep users securely logged in",
                  "Maintain account sessions",
                  "Remember preferences and settings",
                  "Improve platform functionality and performance",
                  "Understand how features are used",
                  "Identify and troubleshoot technical issues",
                  "Enhance overall user experience",
                ]}
              />

              <H3>Types of Cookies We Use</H3>

              <H3>Essential Cookies</H3>

              <P>
                These cookies are necessary for the platform to function properly.
              </P>

              <P>They help with:</P>

              <UL
                items={[
                  "User authentication",
                  "Session management",
                  "Security and fraud prevention",
                  "Core platform functionality",
                ]}
              />

              <P>
                Disabling essential cookies may prevent certain features from working
                correctly.
              </P>

              <H3>Preference Cookies</H3>

              <P>
                These cookies remember your preferences and settings, helping provide
                a more personalized experience.
              </P>

              <P>Examples include:</P>

              <UL
                items={[
                  "Language preferences",
                  "Interface settings",
                  "Saved user preferences",
                ]}
              />

              <H3>Analytics Cookies</H3>

              <P>
                Analytics cookies help us understand how users interact with the
                platform.
              </P>

              <P>This information may be used to:</P>

              <UL
                items={[
                  "Measure platform performance",
                  "Identify popular features",
                  "Improve usability and user experience",
                  "Monitor system reliability",
                ]}
              />

              <P>
                Analytics information is generally collected in an aggregated and
                anonymized manner.
              </P>

              <H3>Third-Party Services</H3>

              <P>
                Some third-party services integrated with SwaadSetu may also use
                cookies or similar technologies to provide functionality, security,
                analytics, or payment-related services.
              </P>

              <P>
                These services operate under their own privacy and cookie policies.
              </P>

              <H3>Managing Cookies</H3>

              <P>
                Most web browsers allow you to control, disable, or delete cookies
                through browser settings.
              </P>

              <P>
                Please note that restricting certain cookies may affect the
                functionality, security, or performance of the platform.
              </P>

              <H3>Updates to This Policy</H3>

              <P>
                We may update this Cookies Policy periodically to reflect changes in
                technology, legal requirements, or platform functionality.
              </P>

              <P>
                Any updates will be published on this page with the revised effective
                date.
              </P>

              <H3>Contact Us</H3>

              <P>
                If you have any questions regarding our use of cookies or related
                technologies, please contact us at:
                <br />
                <a
                  href="mailto:connect@swaadsetu.com"
                  className="text-amber-400 hover:underline"
                >
                  connect@swaadsetu.com
                </a>
              </P>
            </LegalBlock>





          </main>
        </div>
      </div>

      <section className="relative py-24 overflow-hidden">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 mt-24">
          <motion.div {...fadeUp(0.05)} className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(251,191,36,0.15)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Get in touch
            </div>
          </motion.div>
          <motion.h2
            {...fadeUp(0.15)}
            className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white leading-tight mb-6 drop-shadow-md"
          >
            Have a question about these policies?
          </motion.h2>
          <motion.p
            {...fadeUp(0.25)}
            className="text-slate-300 text-lg mb-10 max-w-xl mx-auto font-light drop-shadow-sm"
          >
            Our team is happy to clarify anything. Reach out and we'll get back
            to you within one business day.
          </motion.p>
          <motion.div {...fadeUp(0.35)}>
            <a
              href="mailto:connect@swaadsetu.com"
              className="btn btn-lg h-[56px] px-8 bg-gradient-to-r from-amber-400 to-orange-400 text-black font-bold border-none rounded-2xl shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group flex items-center justify-center gap-2"
            >
              Contact Us
              <svg
                className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivatePolicy;
