import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});



const benefits = [
  { icon: CheckCircle2, label: "QR Ordering & Payments" },
  { icon: CheckCircle2, label: "Business Insights" },
  { icon: CheckCircle2, label: "Complete Operational Control" },
];



export function CTASection() {
  const handleRedirect = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdjwZxtGkYIpulXopAiZBd-BKbQkqA81--N2DNZ5DqqMYTCXw/viewform?embedded=true",
      "_blank",
    );
  };

  return (
    <section className="relative bg-[#060812] overflow-hidden py-10 px-4 md:px-8">

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

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left side: Text content */}
          <div className="text-center md:text-left">
            {/* ── Badge ── */}
            <motion.div {...fadeUp(0)} className="flex justify-center md:justify-start mb-6">
              <div className="badge badge-outline border-amber-400/40 text-amber-300 bg-amber-400/5 gap-2 px-4 py-3 text-xs font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Get started today
              </div>
            </motion.div>

            {/* ── Headline ── */}
            <motion.h2 {...fadeUp(0.1)} className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.05] mb-6">
              Ready to{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Transform
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
                />
              </span>
              {" "}Your Food Business?
            </motion.h2>

            {/* ── Subtext ── */}
            <motion.p {...fadeUp(0.2)} className="text-slate-400 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed font-light mb-10">
              Join restaurants, cafés, QSRs, cloud kitchens, and food courts using SwaadSetu to streamline operations, improve customer experience, and grow profitably.
            </motion.p>

            {/* ── Benefit pills ── */}
            <motion.div {...fadeUp(0.28)} className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
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
          </div>

          {/* Right side: Visual composition + Buttons */}
          <motion.div {...fadeUp(0.35)} className="flex flex-col items-center md:items-end gap-10">

            {/* Visual centerpiece — orbiting icons around a glowing core, no copy */}
            <div className="relative w-full max-w-xs aspect-square flex items-center justify-center">

              {/* Concentric rings */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border border-amber-400/10"
              />
              <div className="absolute inset-[15%] rounded-full border border-amber-400/15" />
              <div className="absolute inset-[32%] rounded-full border border-amber-400/20" />

              {/* Rotating dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[6%] rounded-full"
                style={{
                  border: "1.5px dashed rgba(251,191,36,0.18)",
                }}
              />

              {/* Counter-rotating dotted ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[22%] rounded-full"
                style={{
                  border: "1.5px dotted rgba(251,191,36,0.25)",
                }}
              />

              {/* Glowing core */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_0_50px_rgba(251,191,36,0.5)] flex items-center justify-center z-10"
              >
                <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </motion.div>

              {/* Orbiting icon nodes — revolve around the core */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {[
                  {
                    angle: -90,
                    path: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z",
                  },
                  {
                    angle: 30,
                    path: "M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.2-5.2",
                  },
                  {
                    angle: 150,
                    path: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
                  },
                ].map((node, i) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const radius = 46; // percentage from center
                  const x = 50 + radius * Math.cos(rad);
                  const y = 50 + radius * Math.sin(rad);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.45 + i * 0.1, duration: 0.5, ease: "backOut" }}
                      className="absolute w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-amber-400/15 hover:border-amber-400/40 transition-all duration-300"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {/* Counter-rotate so the icon itself stays upright while orbiting */}
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                      >
                        <svg className="w-4.5 h-4.5 text-amber-300/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={node.path} />
                        </svg>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Floating particles */}
              {[
                { x: "8%", y: "20%", size: 4, delay: 0 },
                { x: "88%", y: "75%", size: 3, delay: 1.2 },
                { x: "15%", y: "82%", size: 3, delay: 0.6 },
                { x: "85%", y: "18%", size: 4, delay: 1.8 },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-amber-400 pointer-events-none"
                  style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
                  animate={{ y: [0, -14, 0], opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 4 + p.delay, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
                />
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end w-full">
              <button
                onClick={handleRedirect}
                className="btn btn-lg bg-gradient-to-r from-amber-400 to-orange-400 text-black font-bold border-none shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] hover:scale-[1.03] active:scale-95 transition-all duration-200 group cursor-pointer flex items-center justify-center gap-2 px-3 py-2 rounded-2xl"
              >
                Talk to Our Team
                <ArrowRight
                  size={18}
                  className="ml-1 group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={handleRedirect}
                className="btn btn-lg btn-ghost border border-amber-400/30 text-amber-300 hover:bg-amber-400/10 hover:border-amber-400/60 transition-all duration-200 cursor-pointer group px-3 py-2 rounded-2xl"
              >
                Book a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}