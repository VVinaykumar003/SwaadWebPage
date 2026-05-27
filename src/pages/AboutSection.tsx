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
  "Complete contactless ordering with QR technology",
  "Real-time kitchen display and order management",
  "Integrated payment gateway with UPI support",
  "Advanced analytics and business intelligence",
];

const AboutSection = () => {
  const navigate = useNavigate();

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

      {/* ── Ambient glow blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[500px] rounded-full bg-amber-500/8 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[400px] rounded-full bg-orange-500/6 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Section label ── */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-4">
          <div className="badge badge-outline border-amber-400/40 text-amber-300 bg-amber-400/5 gap-2 px-4 py-3 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            About SwaadSetu
          </div>
        </motion.div>

        {/* ── Section headline ── */}
        <motion.div {...fadeUp(0.1)} className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Revolutionizing{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Restaurant
            </span>
            <br className="hidden sm:block" /> Management in India
          </h2>
          <p className="mt-5 text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            From street food stalls to fine dining — we empower every food business
            with QR menus, digital systems, and contactless dining solutions.
          </p>
        </motion.div>

        {/* ── Main content: single centered column ── */}
        <div className="max-w-3xl mx-auto flex flex-col gap-8">

          {/* Body text */}
          <motion.p {...fadeUp(0.2)} className="text-slate-400 text-base lg:text-lg leading-relaxed text-center">
            Swaad Setu is India's most comprehensive restaurant management platform,
            designed for Indian restaurants of all sizes. We empower every food
            business with cutting-edge QR technology and contactless dining solutions.
          </motion.p>

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

          {/* CTA */}
          <motion.div {...fadeUp(0.48)} className="flex justify-center">
            <button
              onClick={() => navigate("/about")}
              className="btn btn-outline text-lg border-amber-400/60 text-amber-300 hover:bg-amber-400/10 hover:border-amber-400/70 transition-all duration-200 px-3 py-2 flex items-center justify-center gap-3 rounded-2xl cursor-pointer"
            >
              Know more
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </motion.div>

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

        {/* ── Bottom stats bar ── */}
        <motion.div
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
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;