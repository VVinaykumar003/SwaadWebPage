import { QrCode, Clock, FileText, Bell, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Images } from "../assets/assets";

const features = [
  {
    icon: QrCode,
    title: "QR Code Ordering",
    description:
      "Customers scan and order instantly. No app downloads, no waiting for staff. Pure convenience.",
    color: "#FFBE00",
    bg: "rgba(255,190,0,0.12)",
    image: Images.userFront,
    stat: { value: "3s", label: "avg. scan to order" },
  },
  {
    icon: Clock,
    title: "Live Order Tracking",
    description:
      "Real-time order status updates from kitchen to table. Complete transparency for customers.",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.12)",
    image: Images.orderStatus,
    stat: { value: "0 calls", label: "to check order status" },
  },
  {
    icon: FileText,
    title: "Digital Bill Management",
    description:
      "Generate and share bills instantly. Support for split payments and custom discounts.",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.12)",
    image: Images.Bill,
    stat: { value: "1 tap", label: "to split & settle" },
  },
  {
    icon: Bell,
    title: "Instant Waiter Call",
    description:
      "Direct notification system for customer service. No more waiting or looking around.",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.12)",
    image: Images.placeOrder,
    stat: { value: "<5s", label: "staff response time" },
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Integrated UPI, cards, wallets. PCI-DSS compliant with instant payment reconciliation.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.12)",
    image: Images.custDetails,
    stat: { value: "100%", label: "PCI-DSS compliant" },
  },
];

/* ── Floating phone frame ── */
const PhoneFrame = ({ src, color }: { src: string; color: string }) => (
  <div className="relative mx-auto w-[220px] sm:w-[260px]">
    {/* Glow behind phone */}
    <div
      className="absolute inset-0 rounded-[48px] blur-3xl scale-90 opacity-30 transition-all duration-700"
      style={{ background: color }}
    />
    {/* Phone shell */}
    <div className="relative rounded-[40px] bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden"
      style={{ aspectRatio: "9/19" }}>
      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />
      {/* Screen */}
      <AnimatePresence mode="wait">
        <motion.img
          key={src}
          src={src}
          alt="App screen"
          className="absolute inset-0 w-full h-full object-cover object-top"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
      {/* Bottom bar */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full z-20" />
    </div>
  </div>
);

export function CustomerSection() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const feat = features[active];

  return (
    <section className="relative bg-[#060812] overflow-hidden py-24 px-4 md:px-8">

      {/* ── Background grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient glow — changes color with active feature ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        animate={{ background: feat.bg }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Section label + headline ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 badge badge-outline border-amber-400/40 text-amber-300 bg-amber-400/5 px-4 py-3 text-xs font-semibold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Customer Experience
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Features That{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Delight
            </span>{" "}
            Your Guests
          </h2>
          <p className="mt-4 text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Every feature is crafted for a seamless, modern dining experience — QR menus,
            contactless ordering, and digital systems that keep customers coming back.
          </p>
        </motion.div>

        {/* ── Main layout: tabs left | phone center | stat right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">

          {/* ── LEFT: feature tabs ── */}
          <div className="flex flex-col gap-2 order-2 lg:order-1">
            {features.map((f, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`group flex items-start gap-4 rounded-2xl px-4 py-4 text-left transition-all duration-300 border cursor-pointer
                    ${isActive
                      ? "bg-white/[0.06] border-white/10 shadow-lg"
                      : "border-transparent hover:bg-white/[0.03] hover:border-white/5"
                    }`}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: isActive ? f.color : "rgba(255,255,255,0.06)",
                    }}
                  >
                    <f.icon
                      size={18}
                      style={{ color: isActive ? "#000" : f.color }}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold transition-colors ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-300"}`}>
                      {f.title}
                    </p>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs text-slate-500 mt-1 leading-relaxed overflow-hidden"
                        >
                          {f.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ background: f.color }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ── CENTER: phone mockup ── */}
          <div className="order-1 lg:order-2 flex flex-col items-center gap-6">
            <PhoneFrame src={feat.image} color={feat.color} />

            {/* Progress dots */}
            <div className="flex gap-2">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300 rounded-full cursor-pointer"
                  style={{
                    width: i === active ? 24 : 6,
                    height: 6,
                    background: i === active ? feat.color : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT: stat card + CTA ── */}
          <div className="flex flex-col gap-6 order-3">

            {/* Animated stat card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: feat.bg }}
                >
                  <feat.icon size={20} style={{ color: feat.color }} />
                </div>
                <p className="text-4xl font-black text-white mb-1"
                  style={{ color: feat.color }}>
                  {feat.stat.value}
                </p>
                <p className="text-sm text-slate-500">{feat.stat.label}</p>
                <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Mini feature pills */}
            <div className="flex flex-wrap gap-2">
              {["UPI Ready", "No App Needed", "Offline Support", "Multi-language"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium px-3 py-1.5 rounded-full border border-white/10 text-slate-400 bg-white/[0.03]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdjwZxtGkYIpulXopAiZBd-BKbQkqA81--N2DNZ5DqqMYTCXw/viewform?embedded=true",
                    "_blank",
                  )
                }
                className="btn bg-gradient-to-r from-amber-400 to-orange-400 text-black font-bold border-none shadow-[0_0_24px_rgba(251,191,36,0.3)] hover:shadow-[0_0_36px_rgba(251,191,36,0.5)] hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 px-2 py-2 justify-center rounded-md cursor-pointer"
              >
                Request Live Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <button
                onClick={() => navigate("/features")}
                className="btn btn-ghost border border-white/15 text-slate-300 hover:bg-white/[0.06] hover:border-white/25 transition-all flex items-center  px-2 py-2 justify-center rounded-md cursor-pointer"
              >
                Explore All Features
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}