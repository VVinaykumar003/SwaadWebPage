import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ClipboardList,
  Activity,
  Receipt,
  MonitorCheck,
  LayoutGrid,
  UtensilsCrossed,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const features = [
  {
    icon: ClipboardList,
    title: "Order Management",
    description:
      "Accept or reject orders from any table in real-time. Complete control over your restaurant's workflow at a glance.",
    color: "#FFBE00",
    bg: "rgba(255,190,0,0.1)",
    size: "lg", // spans 2 cols
    tag: "Core",
  },
  {
    icon: Activity,
    title: "Live Order Tracking",
    description:
      "Monitor all orders from pending to delivered. Real-time visibility for smooth, timely service.",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.1)",
    size: "sm",
    tag: "Live",
  },
  {
    icon: Receipt,
    title: "Billing System",
    description:
      "Generate accurate bills with extras, taxes, and discounts. Simplify payment for staff and guests.",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.1)",
    size: "sm",
    tag: "Finance",
  },
  {
    icon: MonitorCheck,
    title: "Kitchen Display",
    description:
      "Dedicated kitchen view that organises orders by time and priority. The chef always knows what's next.",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.1)",
    size: "sm",
    tag: "Kitchen",
  },
  {
    icon: LayoutGrid,
    title: "Table Management",
    description:
      "Visualise occupancy, open sessions, and assignments in one unified view.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.1)",
    size: "sm",
    tag: "Floor",
  },
  {
    icon: UtensilsCrossed,
    title: "Dine-In vs Takeout",
    description:
      "Separate tabs for Dine-In and Takeaway. Staff always know whether to plate or pack.",
    color: "#EC4899",
    bg: "rgba(236,72,153,0.1)",
    size: "lg",
    tag: "Workflow",
  },
];

/* ── Animated number ticker ── */
const stats = [
  { value: "6", label: "Powerful modules" },
  { value: "3s", label: "Avg. order acceptance" },
  { value: "40%", label: "Fewer service errors" },
  { value: "∞", label: "Tables supported" },
];

const StaffSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-[#060812] overflow-hidden py-24">

      {/* ── Background grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Glow blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-amber-500/6 blur-[140px]" />
        <div className="absolute bottom-0 right-[-10%] w-[500px] h-[400px] rounded-full bg-violet-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">

        {/* ── Header ── */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 badge badge-outline border-amber-400/40 text-amber-300 bg-amber-400/5 px-4 py-3 text-xs font-semibold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Staff Dashboard
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Give Your Team A{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Clean, Fast
            </span>{" "}
            Workspace
          </h2>
          <p className="mt-5 text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Every screen is built to reduce taps, cut confusion, and keep
            service moving — from order routing to table management.
          </p>
        </motion.div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 ">
          {features.map((f, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.07)}
              className={`group relative rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm p-6 flex flex-col gap-4 overflow-hidden cursor-pointer hover:border-white/15 hover:bg-white/[0.06] transition-all duration-300
                ${f.size === "lg" && i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
                ${f.size === "lg" && i === 5 ? "sm:col-span-2 lg:col-span-2" : ""}
              `}
              onClick={() => navigate("/features")}
            >
              {/* Corner glow on hover */}
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                style={{ background: f.color }}
              />

              {/* Top row: icon + tag */}
              <div className="flex items-start justify-between">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: f.bg, border: `1px solid ${f.color}22` }}
                >
                  <f.icon size={20} style={{ color: f.color }} />
                </div>
                <span
                  className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                  style={{ background: f.bg, color: f.color }}
                >
                  {f.tag}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1.5 flex-1">
                <h3 className="text-base font-bold text-white group-hover:text-white transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                  {f.description}
                </p>
              </div>

              {/* Bottom: learn more arrow */}
              <div className="flex items-center gap-1.5 text-xs font-medium mt-auto" style={{ color: f.color }}>
                Learn more
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${f.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Stats strip ── */}
        <motion.div
          {...fadeUp(0.3)}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.07]"
        >
          {stats.map((s, i) => (
            <div key={i} className="bg-[#060812] flex flex-col items-center justify-center py-8 px-4 gap-1">
              <span className="text-3xl font-black bg-gradient-to-b from-amber-200 to-amber-500 bg-clip-text text-transparent">
                {s.value}
              </span>
              <span className="text-[11px] text-slate-500 text-center font-medium">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div {...fadeUp(0.35)} className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdjwZxtGkYIpulXopAiZBd-BKbQkqA81--N2DNZ5DqqMYTCXw/viewform?embedded=true",
                "_blank",
              )
            }
            className="btn bg-gradient-to-r from-amber-400 to-orange-400 text-black font-bold border-none shadow-[0_0_24px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] hover:scale-[1.02] active:scale-95 transition-all flex gap-2 justify-center items-center px-2 py-2 rounded-md cursor-pointer"
          >
            Book a Demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
          <button
            onClick={() => navigate("/features")}
            className="btn btn-ghost border border-white/15 text-slate-300 hover:bg-white/[0.06] hover:border-white/25 transition-all flex gap-2 justify-center items-center px-2 py-2 rounded-md cursor-pointer"
          >
            Explore All Features
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default StaffSection;