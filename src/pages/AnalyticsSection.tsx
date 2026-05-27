import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart2, Star, Users } from "lucide-react";

// ── Data ─────────────────────────────────────────────────────────────────────

const weeklyBars = [
  { label: "Mon", val: 60 },
  { label: "Tue", val: 75 },
  { label: "Wed", val: 55 },
  { label: "Thu", val: 90 },
  { label: "Fri", val: 100 },
  { label: "Sat", val: 85 },
  { label: "Sun", val: 70 },
];
const maxBar = Math.max(...weeklyBars.map((b) => b.val));

const stats = [
  { label: "Total Revenue",     value: "₹2.4L", delta: "+12.4%", up: true,  accent: true  },
  { label: "Orders Today",      value: "384",   delta: "+8.1%",  up: true,  accent: false },
  { label: "Avg Order Value",   value: "₹624",  delta: "−2.3%",  up: false, accent: false },
  { label: "Repeat Customers",  value: "61%",   delta: "+5.7%",  up: true,  accent: false },
];

const sparklines = [
  { name: "Top Dish",    value: "Paneer Tikka", delta: "▲ 34%", up: true,  points: "0,22 20,18 40,14 60,10 80,15 100,8 120,4",  color: "#F59E0B" },
  { name: "Peak Hour",   value: "7 PM – 9 PM",  delta: "▲ 18%", up: true,  points: "0,24 20,20 40,16 60,6 80,4 100,10 120,18", color: "#3b82f6" },
  { name: "Customer NPS",value: "86 / 100",     delta: "▲ 7pts",up: true,  points: "0,20 20,18 40,14 60,12 80,10 100,8 120,5", color: "#22c55e" },
];

const donutSegments = [
  { color: "#F59E0B", label: "Dine-in",   pct: "50%", dash: "94 94",   offset: "0"    },
  { color: "#3b82f6", label: "Delivery",  pct: "30%", dash: "56 132",  offset: "-94"  },
  { color: "#22c55e", label: "Takeaway",  pct: "20%", dash: "38 150",  offset: "-150" },
];

const features = [
  {
    Icon: BarChart2,
    title: "Sales Reports",
    desc: "Daily, weekly, and monthly revenue tracking with trend analysis and export-ready reports.",
  },
  {
    Icon: Star,
    title: "Menu Insights",
    desc: "Best sellers, slow movers, and profit margin breakdowns per dish and category.",
  },
  {
    Icon: Users,
    title: "Customer Analytics",
    desc: "Repeat customer rates, peak hours, and behavioral patterns to improve loyalty.",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

// ── Component ─────────────────────────────────────────────────────────────────

export function AnalyticsSection() {
  const navigate = useNavigate();

  return (
    <section id="analytics" className="relative bg-[#060812] overflow-hidden py-24 px-4 md:px-8">

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
        <div className="absolute top-[-15%] right-[-5%] w-[700px] h-[500px] rounded-full bg-amber-500/8 blur-[140px]" />
        <div className="absolute bottom-0 left-[-10%] w-[500px] h-[400px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div {...fadeUp(0)} className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 badge badge-outline border-amber-400/40 text-amber-300 bg-amber-400/5 px-4 py-3 text-xs font-semibold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Live Dashboard
          </div>

          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-5">
            Data-Driven{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Decision Making
            </span>
          </h2>

          <p className="text-slate-400 text-base lg:text-lg leading-relaxed font-light mb-8">
            Real-time insights into orders, sales, and customer behaviour —
            everything you need to grow your restaurant intelligently.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigate("/features")}
              className="btn bg-gradient-to-r from-amber-400 to-orange-400 text-black font-bold border-none shadow-[0_0_24px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] hover:scale-[1.02] active:scale-95 transition-all px-3 py-2 rounded-2xl "
            >
              Explore Features
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdjwZxtGkYIpulXopAiZBd-BKbQkqA81--N2DNZ5DqqMYTCXw/viewform?embedded=true",
                  "_blank",
                )
              }
              className="btn btn-ghost border border-amber-400/30 text-amber-300 hover:bg-amber-400/10 hover:border-amber-400/60 transition-all px-3 py-2 rounded-2xl"
            >
              Request Demo
            </button>
          </div>
        </motion.div>

        {/* ── Dashboard Mockup ── */}
        <motion.div
          {...fadeUp(0.15)}
          className="rounded-2xl overflow-hidden border border-white/[0.07] bg-[#0e1117] mb-12 shadow-[0_0_80px_rgba(251,191,36,0.06)]"
        >
          {/* Window chrome */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.07] bg-[#0a0d12]">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-[11px] tracking-widest uppercase text-white/25 font-medium">
              Admin Dashboard · SwaadSetu
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
              Live · Real-time
            </span>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-4 border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
              >
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">{s.label}</p>
                <p className={`text-xl font-black mb-1 ${s.accent ? "bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent" : "text-white"}`}>
                  {s.value}
                </p>
                <p className={`text-[10px] font-medium ${s.up ? "text-green-400" : "text-red-400"}`}>
                  {s.delta} vs last week
                </p>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-4 pb-3">

            {/* Bar chart */}
            <div className="md:col-span-2 rounded-xl p-4 border border-white/[0.06] bg-white/[0.03]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-white/60">Weekly Revenue</span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full font-medium bg-amber-400/10 text-amber-400">
                  This Week
                </span>
              </div>
              <div className="flex items-end gap-1.5 h-20">
                {weeklyBars.map((b, i) => {
                  const h = Math.round((b.val / maxBar) * 72);
                  const isActive = i === 4;
                  return (
                    <div key={b.label} className="flex flex-col items-center flex-1 gap-1 group cursor-pointer">
                      <div
                        className="w-full rounded-t transition-all duration-200 group-hover:opacity-100"
                        style={{
                          height: `${h}px`,
                          background: isActive ? "#F59E0B" : "rgba(245,158,11,0.2)",
                        }}
                      />
                      <span className="text-[9px] text-white/25">{b.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Donut chart */}
            <div className="rounded-xl p-4 border border-white/[0.06] bg-white/[0.03] flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-white/60">Order Types</span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full font-medium bg-amber-400/10 text-amber-400">
                  Today
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 flex-1 justify-center">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="14" />
                  {donutSegments.map((d) => (
                    <circle
                      key={d.label}
                      cx="40" cy="40" r="30"
                      fill="none"
                      stroke={d.color}
                      strokeWidth="14"
                      strokeDasharray={d.dash}
                      strokeDashoffset={d.offset}
                      transform="rotate(-90 40 40)"
                    />
                  ))}
                  <text x="40" y="44" textAnchor="middle" fontSize="11" fontWeight="700" fill="#F5F5F5">
                    384
                  </text>
                </svg>
                <div className="w-full flex flex-col gap-1.5">
                  {donutSegments.map((d) => (
                    <div key={d.label} className="flex items-center justify-between text-[11px]">
                      <span className="flex items-center gap-1.5 text-white/40">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: d.color }} />
                        {d.label}
                      </span>
                      <span className="font-semibold text-white/80">{d.pct}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sparkline row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-4 pb-4">
            {sparklines.map((s) => (
              <div key={s.name} className="rounded-xl p-3.5 border border-white/[0.06] bg-white/[0.03]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] uppercase tracking-widest text-white/30">{s.name}</span>
                  <span className={`text-[10px] font-medium ${s.up ? "text-green-400" : "text-red-400"}`}>
                    {s.delta}
                  </span>
                </div>
                <p className="text-sm font-bold text-white mb-2">{s.value}</p>
                <svg width="100%" height="24" viewBox="0 0 120 28" preserveAspectRatio="none">
                  {/* Gradient fill under line */}
                  <defs>
                    <linearGradient id={`grad-${s.name}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={s.color} stopOpacity="0.3" />
                      <stop offset="100%" stopColor={s.color} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points={`${s.points} 120,28 0,28`}
                    fill={`url(#grad-${s.name})`}
                  />
                  <polyline
                    points={s.points}
                    fill="none"
                    stroke={s.color}
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Feature cards ── */}
        <motion.div {...fadeUp(0.25)} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeUp(0.28 + i * 0.08)}
              className="group rounded-2xl p-6 border border-white/[0.07] bg-white/[0.03] hover:border-amber-400/20 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden relative"
            >
              {/* Corner glow */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-amber-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-amber-400/10 border border-amber-400/20 text-amber-400 group-hover:scale-110 transition-transform duration-300">
                <f.Icon size={18} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                {f.desc}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}