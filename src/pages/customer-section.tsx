﻿import { useState, useMemo, memo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { QrCode, Clock, FileText, Bell, CreditCard, ArrowRight,  ShieldCheck } from "lucide-react";
import { Images } from "../assets/assets";

// Types
interface Feature {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
  color: string;
  bg: string;
  image: string;
  stat: {
    heading: string;
    value: string;
    label: string;
    subtitle?: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
  badges?: string[];
}

// Immutable Feature Configuration Data
const FEATURES_DATA: Feature[] = [
  {
    icon: QrCode,
    title: "QR Code Ordering",
    description:
      "Transform customer ordering with QR-powered menus, no app downloads, and a seamless scan-to-service experience.",
    color: "#FBBF24",
    bg: "rgba(251,191,36,0.08)",
    image: Images.userFront,
    stat: {
      heading: "Customer Experience",
      value: "No App",
      label: "Required",
      subtitle: "Scan, Order & Pay Instantly",
    },
    metrics: [
      {
        label: "Customer Experience",
        value: "Scan, Order & Pay Instantly",
      },
      {
        label: "Faster Ordering",
        value: "Reduced Waiting Time",
      },
      {
        label: "Digital Payments",
        value: "UPI & Online Checkout",
      },
    ],
    badges: [
      "QR-Based Ordering",
      "Live Order Tracking",
      "Digital Billing",
      "Instant Waiter Call",
    ],
  },

  {
    icon: Clock,
    title: "Live Order Tracking",
    description:
      "Keep customers informed with real-time order updates from preparation to service, improving transparency and enhancing the overall dining experience.",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.08)",
    image: Images.orderStatus,
    stat: {
      heading: "Real-Time Order Visibility",
      value: "0 Calls",
      label: "to check status",
    },
    metrics: [
      {
        label: "Faster Service",
        value: "Real-Time Updates",
      },
      {
        label: "Order Transparency",
        value: "Track Every Stage",
      },
    ],
    badges: [
      "Live Order Tracking",
      "Kitchen-to-Table Updates",
      "Real-Time Status Alerts",
      "Better Customer Experience",
    ],
  },

  {
    icon: FileText,
    title: "Digital Bill Management",
    description:
      "Simplify billing with instant digital invoices, flexible discounts, tax calculations, and seamless payment experiences for customers.",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
    image: Images.Bill,
    stat: {
      heading: "Billing Experience",
      value: "Instant",
      label: "Digital Bills",
      subtitle: "Generate & Share in Seconds",
    },
    metrics: [
      {
        label: "Custom Discounts",
        value: "Flexible Billing",
      },
      {
        label: "Faster Checkout",
        value: "Seamless Payments",
      },
    ],
    badges: [
      "Digital Invoicing",
      "Tax Calculations",
      "Discount Management",
      "Bill Sharing",
    ],
  },

  {
    icon: Bell,
    title: "Instant Waiter Call",
    description:
      "Connect customers and staff instantly through one-tap service requests, reducing wait times and improving operational efficiency.",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
    image: Images.placeOrder,
    stat: {
      heading: "Faster Service Response",
      value: "1 Tap",
      label: "to request assistance"
    },
    metrics: [
      {
        label: "Staff Efficiency",
        value: "Faster Response Times",
      },
      {
        label: "Customer Satisfaction",
        value: "Better Dining Experience",
      },
    ],
    badges: [
      "One-Tap Waiter Call",
      "Instant Service Requests",
      "Faster Response Times",
      "Improved Guest Experience",
    ],
  },

  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Enable secure digital payments through UPI and online payment gateways, ensuring fast, reliable, and seamless transactions for customers.",
    color: "#A78BFA",
    bg: "rgba(167,139,250,0.08)",
    image: Images.custDetails,
    stat: {
      heading: "Secure Payment Experience",
      value: "100%",
      label: "Digital Payments",
      subtitle: "Fast & Secure Checkout",
    },
    metrics: [
      {
        label: "UPI Ready",
        value: "Instant Payments",
      },
      {
        label: "Trusted Transactions",
        value: "Secure Checkout",
      },
    ],
    badges: [
      "UPI Payments",
      "Online Payment Gateway",
      "Faster Checkout",
      "Secure Transactions",
    ],
  },
];

// Sub-component: Mock Phone Showcase
const DeviceShowcase = memo(({ activeFeature }: { activeFeature: Feature }) => (
  <div className="relative w-full max-w-[310px] mx-auto aspect-[9/18.5] rounded-[52px] border border-white/10 bg-[#020205] p-3 shadow-2xl shadow-black">
    {/* Screen Perimeter Bezel Inset */}
    <div className="absolute inset-[1px] rounded-[51px] border border-white/[0.04] pointer-events-none z-30" />
    
    {/* Display Area Container */}
    <div className="relative w-full h-full overflow-hidden rounded-[40px] bg-slate-950 flex flex-col justify-between">
      
      {/* Top Status Bar & Dynamic Island Layer */}
      <div className="absolute top-0 inset-x-0 h-11 bg-gradient-to-b from-black/60 to-transparent flex items-center justify-center z-40 px-6">
        <div className="w-24 h-4.5 bg-black rounded-full flex items-center justify-between px-2.5 py-1">
          <div className="w-1.5 h-1.5 rounded-full bg-camera-lens bg-slate-900" />
          <motion.div 
            animate={{ scale: [1, 1.15, 1] }} 
            transition={{ repeat: Infinity, duration: 3 }} 
            className="w-1 h-1 rounded-full bg-emerald-500" 
          />
        </div>
      </div>

      {/* Screen Interface Mock Mockup Frame Image Showcase */}
      <div className="relative flex-1 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeFeature.image}
            src={activeFeature.image}
            alt={activeFeature.title}
            className="absolute inset-0 w-full h-full object-cover object-top select-none"
            initial={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </AnimatePresence>
      </div>

      {/* Bottom Virtual Home Indicator Strip */}
      <div className="absolute bottom-1.5 inset-x-0 flex justify-center pointer-events-none z-40">
        <div className="w-28 h-1 bg-white/25 rounded-full" />
      </div>
    </div>
  </div>
));
DeviceShowcase.displayName = "DeviceShowcase";

export function CustomerSection() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<number>(0);

  const currentFeature = useMemo(() => FEATURES_DATA[activeTab], [activeTab]);

  return (
    <section className="relative bg-[#060812] text-slate-100 py-12 md:py-4 px-12 md:px-24 overflow-hidden selection:bg-amber-400 selection:text-black">
      
      {/* ── Background grid ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient glow blobs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[500px] rounded-full bg-amber-500/8 blur-[120px]" />
        <motion.div 
          animate={{ background: currentFeature.bg }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute top-1/4 right-[-10%] w-[50%] aspect-square rounded-full blur-[180px] mix-blend-screen opacity-40" 
        />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[400px] rounded-full bg-orange-500/6 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-start gap-16 lg:gap-24">
        
        {/* Header Block Section Component */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="badge badge-outline border-amber-400/40 text-amber-300 bg-amber-400/5 gap-2 px-4 py-3 text-xs font-semibold tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            From Scan to Service
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Smart Ordering Workflow
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 text-base lg:text-lg leading-relaxed font-light max-w-2xl"
          >
            Transform customer ordering into a seamless digital experience — from QR scan and order placement to preparation and service.
          </motion.p>
        </div>

        {/* Core Main Grid Framework Ecosystem */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Tab Selection Column Layout Array Left Side */}
          <div className="lg:col-span-4 flex flex-col gap-3.5 order-2 lg:order-1">
            {FEATURES_DATA.map((item, index) => {
              const isActive = index === activeTab;
              const IconComponent = item.icon;
              return (
                <button
                  key={item.title}
                  onClick={() => setActiveTab(index)}
                  className={`relative group flex items-start gap-4 p-5 rounded-3xl text-left transition-all duration-300 border focus:outline-none ${
                    isActive 
                      ? "bg-slate-900/60 border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_12px_24px_-10px_rgba(0,0,0,0.5)]" 
                      : "bg-transparent border-transparent hover:bg-slate-900/20 hover:border-white/5"
                  }`}
                >
                  

                  <div 
                    className="flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? item.color : "rgba(255,255,255,0.03)",
                      color: isActive ? "#000000" : "rgba(255,255,255,0.6)"
                    }}
                  >
                    <IconComponent 
                      size={18} 
                      className="transition-colors duration-300"
                    />
                  </div>

                  <div className="flex-1 space-y-1">
                    <h4 className={`font-semibold text-[12px] transition-colors duration-200 ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`}>
                      {item.title}
                    </h4>
                  </div>
                    <p className={`text-xs leading-relaxed transition-opacity duration-300 ${isActive ? "text-slate-300 opacity-100" : "text-slate-500 opacity-0 h-0 overflow-hidden"}`}>
                      {item.description}
                    </p>
                  
                </button>
              );
            })}
          </div>

          {/* Central Interactive Phone Device Frame Container */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center justify-center relative py-6 lg:py-0">
            {/* Soft Radial Ambient Reactive Glow behind Phone Case */}
            <motion.div 
              animate={{ background: `radial-gradient(circle, ${currentFeature.color}1F 0%, transparent 70%)` }}
              className="absolute w-[120%] aspect-square pointer-events-none z-0" 
            />
            <div className="relative z-10 w-full">
              <DeviceShowcase activeFeature={currentFeature} />
            </div>
          </div>

          {/* Data Analytic Stats & Interactive CTAs Sidebar Grid Panel Right Side */}
          <div className="lg:col-span-4 order-3 flex flex-col gap-6">
            
            {/* Dynamic Card Displaying Performance Telemetry */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-6 shadow-xl backdrop-blur-md">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none" style={{ color: currentFeature.color }}>
                <currentFeature.icon size={120} className="text-current" />
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500 block mb-1">{currentFeature.stat.heading}</span>
                  <motion.div 
                    key={currentFeature.stat.value}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-4xl font-black tracking-tight tabular-nums"
                    style={{ color: currentFeature.color }}
                  >
                    {currentFeature.stat.value}
                  </motion.div>
                  <p className="text-xs text-slate-400 mt-0.5 font-medium">
                    {currentFeature.stat.label}
                  </p>
                  {currentFeature.stat.subtitle && (
                    <p className="text-xs text-slate-500 mt-2 font-medium">{currentFeature.stat.subtitle}</p>
                  )}
                </div>

                <hr className="border-white/5" />

                {/* Micro Metrics Rows sub grids */}
                <div className="grid grid-cols-2 gap-3">
                  {currentFeature.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                      <span className="text-[9px] font-bold tracking-wider uppercase text-slate-500 block">{m.label}</span>
                      <span className="text-base font-bold text-white tracking-tight tabular-nums block">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Micro Badges Sub Grid Container */}
            <div className="flex flex-wrap gap-2">
             {currentFeature.badges?.map((badge) => (
  <div
    key={badge}
    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/[0.06] bg-slate-900/40 text-[10px] font-semibold tracking-wider text-slate-400 uppercase"
  >
    <div className="w-1 h-1 rounded-full bg-slate-500" />
    {badge}
  </div>
))}
            </div>

            {/* Action Call to Action Button Layout Container Rows */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 mt-2">
              <button
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdjwZxtGkYIpulXopAiZBd-BKbQkqA81--N2DNZ5DqqMYTCXw/viewform?embedded=true', '_blank')}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-black shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Book a Live  Demo</span>
                <ArrowRight size={15} strokeWidth={2.5} />
              </button>
              
              <button
                onClick={() => navigate('/features')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-2xl font-semibold text-sm border border-white/10 bg-white/[0.02] text-slate-200 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200"
              >
                Explore Features
              </button>
            </div>

          </div>
        </div>

        {/* Global Bottom Summary Analytics Showcase Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 border-t border-white/5  mt-2">
          {[
            {
              icon: QrCode,
              color: "text-amber-400",
              title: "Effortless Customer Experience",
              text: "Modern dining experiences powered by QR ordering and real-time updates.",
            },
            {
              icon: ShieldCheck,
              color: "text-emerald-400",
              title: "Unified Business Management",
              text: "Manage operations, billing, inventory, expenses, and payments from one platform.",
            },
            {
              icon: Bell,
              color: "text-indigo-400",
              title: "Faster Service Operations",
              text: "Faster service, better coordination, and improved operational efficiency.",
            },
          ].map((card, i) => {
            const CardIcon = card.icon;
            return (
              <div key={i} className="group p-6 rounded-3xl border border-white/[0.05] bg-gradient-to-b from-slate-900/30 to-slate-950/50 space-y-3 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center justify-start gap-4">

                <div className={`w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.03] ${card.color} group-hover:scale-105 transition-transform duration-300`}>
                  <CardIcon size={16} />
                </div>
                <h5 className="font-semibold text-sm text-white tracking-wide">{card.title}</h5>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{card.text}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}