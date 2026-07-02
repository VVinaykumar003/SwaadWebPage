import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
/* ── Reusable fade-up variant ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const features = [
  "Smart Ordering Experience",
  "Complete Operational Control",
  " Real-Time Business Insights",
  "Scalable Food Service Workflows",
];

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-[#060812] overflow-hidden py-12 md:py-8 px-12 md:px-24">

      {/* ── Background grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient glow blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[500px] rounded-full bg-amber-500/8 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[400px] rounded-full bg-orange-500/6 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ── Left Column: Text & CTA ── */}
          <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            <motion.div {...fadeUp(0)}>
              <div className="badge badge-outline border-amber-400/40 text-amber-300 bg-amber-400/5 gap-2 px-4 py-3 text-xs font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                About SwaadSetu
              </div>
            </motion.div>

            <motion.h2 {...fadeUp(0.1)} className="text-3xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              One Platform, {" "}
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              <br className="hidden lg:block" />  Complete Operations.
              </span>
              {/*  Management in India */}
            </motion.h2>

            <motion.p {...fadeUp(0.2)} className="text-slate-400 text-base lg:text-lg leading-relaxed font-light">
              SwaadSetu is the operating system for modern food services, helping businesses manage ordering, billing, inventory, and daily operations through one connected platform.
            </motion.p>

            <motion.p {...fadeUp(0.25)} className="text-slate-400 text-base lg:text-lg leading-relaxed">
             Designed for restaurants, cafes, QSRs, and food courts, SwaadSetu simplifies operations with integrated workflows and real-time business insights.

            </motion.p>

            <motion.div {...fadeUp(0.3)} className="mt-2">
              <button
                onClick={() => navigate("/about")}
                className="btn btn-outline text-lg border-amber-400/60 text-amber-300 hover:bg-amber-400/10 hover:border-amber-400/70 transition-all duration-200 px-6 py-2 flex items-center justify-center gap-3 rounded-2xl cursor-pointer"
              >
                Know more
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* ── Right Column: Features & Testimonial ── */}
          <div className="flex flex-col gap-8">

          {/* Feature list — two columns on md+ */}
          <motion.ul {...fadeUp(0.28)} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feat, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.32 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                className="flex items-start gap-3 bg-white/[0.03] border border-amber-400/10 rounded-xl px-4 py-3"
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center shrink-0">
                  <Check size={11} className="text-amber-400" />
                </span>
                <span className="text-slate-300 text-sm lg:text-base font-medium leading-snug">
                  {feat}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Divider */}
          <motion.div
            {...fadeUp(0.54)}
            className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"
          />

          {/* Testimonial card */}
          <motion.div
            {...fadeUp(0.58)}
            className="relative rounded-2xl border border-amber-400/15 bg-white/[0.03] backdrop-blur-sm p-6 overflow-hidden"
          >
            {/* left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-amber-400 to-orange-500" />

            {/* quote mark */}
            <span className="absolute top-3 right-4 text-6xl text-amber-400/10 font-black leading-none select-none">
              "
            </span>

            <p className="text-slate-300 italic text-sm lg:text-base leading-relaxed pl-2">
              "Swaad Setu transformed our restaurant operations completely.
              We saw a 35% increase in orders and significantly reduced wait times."
            </p>
            <div className="flex items-center gap-3 mt-4 pl-2">
              <div className="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-xs font-bold text-amber-300">
                RK
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-300">Rajesh Kumar</p>
                <p className="text-[11px] text-slate-500">Owner, Spice Garden</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </motion.div>
            </div>

        </div>

        {/* ── Bottom stats bar (Hidden for new company) ── */}
        {/* <motion.div
          {...fadeUp(0.3)}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-amber-400/10 rounded-2xl overflow-hidden border border-amber-400/10"
        >
          {[
            { value: "58+",  label: "Restaurants onboarded" },
            { value: "35%",  label: "Avg. order increase" },
            { value: "100+", label: "Daily orders processed" },
            { value: "−40%", label: "Wait time reduction" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#060812] flex flex-col items-center justify-center py-8 px-4 gap-1"
            >
              <span className="text-3xl font-black bg-gradient-to-b from-amber-200 to-amber-500 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-[11px] text-slate-500 text-center font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div> */}

      </div>
    </section>
  );
};

export default AboutSection;