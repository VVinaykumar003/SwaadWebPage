import { ArrowRight, CheckCircle2, Zap, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const benefits = [
  { icon: CheckCircle2, label: "No Setup Fee" },
  { icon: CheckCircle2, label: "24/7 Support" },
  { icon: CheckCircle2, label: "No Credit Card Required" },
];

const socialProof = [
  { icon: Users,  value: "500+", label: "Restaurants onboarded" },
  { icon: Zap,    value: "35%",  label: "Avg. order increase"   },
  { icon: Clock,  value: "−40%", label: "Wait time reduction"   },
];

export function CTASection() {
  const handleRedirect = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdjwZxtGkYIpulXopAiZBd-BKbQkqA81--N2DNZ5DqqMYTCXw/viewform?embedded=true",
      "_blank",
    );
  };

  return (
    <section className="relative bg-[#060812] overflow-hidden py-28 px-4 md:px-8">

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
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-amber-500/10 blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[400px] rounded-full bg-orange-600/6 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[400px] rounded-full bg-amber-400/5 blur-[120px]" />
      </div>

      {/* ── Decorative rings ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-amber-400/5" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-amber-400/8" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-amber-400/10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* ── Badge ── */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-6">
          <div className="badge badge-outline border-amber-400/40 text-amber-300 bg-amber-400/5 gap-2 px-4 py-3 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Get started today
          </div>
        </motion.div>

        {/* ── Headline ── */}
        <motion.h2 {...fadeUp(0.1)} className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
          Ready to{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Transform
            </span>
            {/* underline */}
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
            />
          </span>{" "}
          Your Restaurant?
        </motion.h2>

        {/* ── Subtext ── */}
        <motion.p {...fadeUp(0.2)} className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-10">
          Join 500+ restaurants already using Swaad Setu to deliver
          exceptional dining experiences and grow their business — with zero setup hassle.
        </motion.p>

        {/* ── Benefit pills ── */}
        <motion.div {...fadeUp(0.28)} className="flex flex-wrap justify-center gap-3 mb-10">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/[0.05] border border-white/10 backdrop-blur-sm rounded-full px-4 py-2"
            >
              <b.icon size={14} className="text-amber-400" />
              <span className="text-sm font-medium text-slate-300">{b.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ── CTA buttons ── */}
        <motion.div {...fadeUp(0.35)} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={handleRedirect}
            className="btn btn-lg bg-gradient-to-r from-amber-400 to-orange-400 text-black font-bold border-none shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] hover:scale-[1.03] active:scale-95 transition-all duration-200 group cursor-pointer flex items-center justify-center gap-2 px-3 py-2 rounded-2xl"
          >
            Connect with Team
            <ArrowRight
              size={18}
              className="ml-1 group-hover:translate-x-1 transition-transform"
            />
          </button>

          <button
            onClick={handleRedirect}
            className="btn btn-lg btn-ghost border border-amber-400/30 text-amber-300 hover:bg-amber-400/10 hover:border-amber-400/60 transition-all duration-200 cursor-pointer group  px-3 py-2 rounded-2xl"
          >
            Book a Demo
          </button>
        </motion.div>

        {/* ── Divider ── */}
        <motion.div
          {...fadeUp(0.42)}
          className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent mb-12"
        />

        {/* ── Social proof stats ── */}
        <motion.div {...fadeUp(0.48)} className="grid grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.07] max-w-2xl mx-auto">
          {socialProof.map((s, i) => (
            <div key={i} className="bg-[#060812] flex flex-col items-center justify-center py-6 px-4 gap-1.5">
              <s.icon size={16} className="text-amber-400/60 mb-1" />
              <span className="text-2xl font-black bg-gradient-to-b from-amber-200 to-amber-500 bg-clip-text text-transparent">
                {s.value}
              </span>
              <span className="text-[11px] text-slate-500 text-center font-medium leading-tight">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}