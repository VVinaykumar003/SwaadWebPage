import React, { useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Shield, Globe, Cpu, ExternalLink } from "lucide-react";
import Navbar from "../component/Navbar";
import { Footer, footerContact } from "../component/Footer";
import { Helmet } from "@dr.pogodin/react-helmet";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
    } 
  }
};

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleFormRedirect = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdjwZxtGkYIpulXopAiZBd-BKbQkqA81--N2DNZ5DqqMYTCXw/viewform?embedded=true",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <Helmet>
        <title>Contact SwaadSetu | Food Business Operations Platform</title>
        <meta
          name="description"
          content="Contact SwaadSetu to learn about QR ordering, billing, payments, inventory management, operational workflows, and business growth solutions."
        />
      </Helmet>

      <div data-theme="swaad-dark" className="min-h-screen bg-[#060812] text-base-content flex flex-col font-sans antialiased overflow-x-hidden selection:bg-amber-400 selection:text-black">
        <Navbar />

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

        {/* ── MAIN CONTENT LAYER ── */}
        <main className="flex-grow relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 pt-28 pb-16">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-12 gap-10 items-stretch w-full"
          >
            
            {/* ── LEFT CANVAS: BRAND STORYTELLING & CHANNELS ── */}
            <div className="lg:col-span-6 space-y-10 flex flex-col justify-between h-full ">
              
              <div className="space-y-6">
                {/* Premium Floating Badge */}
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(251,191,36,0.15)] backdrop-blur-md"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                 GET IN TOUCH
                </motion.div>

                {/* Typography Block */}
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.05]"
                >
                  Let's Elevate Your<br />
                  <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Food Business Operations
                  </span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-slate-300 text-lg sm:text-xl leading-relaxed font-light max-w-xl"
                >
                 Have questions about SwaadSetu? Whether you're exploring digital ordering, billing, inventory management, or customer engagement, our team is here to help you find the right solution.
                </motion.p>
              </div>

              {/* Communication Stack */}
              <div className="space-y-4 pt-4">
                <motion.a
                  variants={itemVariants}
                  href="tel:+919407655717"
                  className="group flex items-center gap-5 rounded-2xl border border-white/[0.05] bg-white/[0.03] p-5 transition-all duration-300 hover:border-amber-400/20 hover:bg-amber-400/[0.04]"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-amber-400/10 to-transparent text-amber-400 border border-white/5 transition-colors group-hover:bg-amber-400 group-hover:text-black">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[13px] font-mono uppercase tracking-[0.2em] text-slate-100">Sales & Onboarding</p>
                    <h4 className="text-sm font-semibold text-white mt-0.5">+91 9407655717</h4>
                  </div>
                </motion.a>

                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.a
                    variants={itemVariants}
                    href={`mailto:${footerContact.email}`}
                    className="group block rounded-2xl border border-white/[0.05] bg-white/[0.03] p-5 transition-all duration-300 hover:border-amber-400/20 hover:bg-amber-400/[0.04]"
                  >
                    <div className="flex items-center justify-start text-amber-400 mb-4 gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-amber-400/10 to-transparent text-amber-400 border border-white/5 transition-colors group-hover:bg-amber-400 group-hover:text-black">
                        <Mail className="w-4 h-4" />
                      </div>
                      <p className="text-[13px] font-mono uppercase tracking-[0.2em] text-slate-100">SUPPORT & ENQUIRIES</p>
                    </div>
                    <h4 className="text-sm font-semibold text-white mt-1 break-all">connect@swaadsetu.com</h4>
                  </motion.a>

                  <motion.a
                    variants={itemVariants}
                    href="https://maps.google.com/?q=Durg+Chhattisgarh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-2xl border border-white/[0.05] bg-white/[0.03] p-5 transition-all duration-300 hover:border-amber-400/20 hover:bg-amber-400/[0.04]"
                  >
                    <div className="flex items-center justify-between text-amber-400 mb-4 gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-amber-400/10 to-transparent border border-white/5 transition-colors group-hover:bg-amber-400 group-hover:text-black">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <p className="text-[13px] font-mono uppercase tracking-[0.2em] text-slate-100">OFFICE ADDRESS</p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                        Map <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                    <div className="text-xs text-slate-300 mt-1 line-clamp-2">
                      Zager Digital Services, Startup Enclave, CSIT Durg, Chhattisgarh 491001
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>

            {/* ── RIGHT CANVAS: HIGH-FIDELITY INTERACTIVE LAUNCHPAD ── */}
            <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
              <motion.div
                variants={itemVariants}
                className="w-full max-w-xl bg-white/[0.03] border border-amber-400/10 rounded-[32px] p-8 md:p-10 shadow-2xl backdrop-blur-2xl relative overflow-hidden h-full flex flex-col justify-center"
              >
                {/* Visual Accent Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-amber-400/[0.03] blur-[50px] pointer-events-none" />

                <div className="space-y-8 relative z-10">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-bold text-white tracking-tight">Business Enquiry</h3>
                      <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 font-mono text-[9px] text-amber-400">
                        <span className="w-1 h-1 rounded-full bg-amber-400 animate-ping" />
                        ONLINE INTAKE
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                 Tell us about your business requirements and our team will review your enquiry and get back to you with the most suitable solution.
                    </p>
                  </div>

                  {/* Informational Bento Accent Card */}
                  <div className="rounded-2xl border border-amber-400/10 bg-white/[0.03] p-5">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Share a few details about your business, current operations, and requirements.

Our team will review your enquiry to understand your goals, answer your questions, and recommend the most suitable setup for your business.

Once submitted, we'll get in touch with relevant information, platform details, pricing, and onboarding guidance.
                    </p>
                  </div>

                  {/* HIGH-FIDELITY HOVER BUTTON CAPABILITY */}
                  <motion.button
                    type="button"
                    onClick={handleFormRedirect}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="group w-full relative py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-black font-black uppercase tracking-[0.15em] text-xs md:text-sm shadow-xl transition-shadow duration-300 hover:shadow-amber-500/10 flex items-center justify-center gap-2 overflow-hidden"
                  >
                    {/* Glossy sheen swipe animation on hover */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    
                    <span>Submit Business Enquiry</span>
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.button>

                  <p className="text-[15px] text-slate-500 text-center tracking-wide">
                    Our team will review your requirements and reach out with the most relevant information and next steps.
                  </p>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </main>

        {/* ── SECURITY ENCRYPTION METRICS FOOTER BADGES ── */}
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-white/[0.05]">
            {[
  {
    icon: Shield,
    title: "Operational Excellence",
    desc: "Built to simplify ordering, billing, payments, and day-to-day business operations."
  },
  {
    icon: Globe,
    title: "Reliable Platform",
    desc: "Secure cloud-based infrastructure designed for consistent performance and accessibility."
  },
  {
    icon: Cpu,
    title: "Business Insights",
    desc: "Make informed decisions with real-time reports, sales trends, and operational visibility."
  },
  {
    icon: Shield, // Assuming this is correct, as per the code. If another icon is needed, it can be changed.
    title: "Dedicated Support",
    desc: "Friendly onboarding and support assistance whenever your team needs help."
  }
].map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-white/[0.01] border border-white/[0.02]">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/15 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <StatIcon size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide leading-tight">{stat.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1">{stat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;