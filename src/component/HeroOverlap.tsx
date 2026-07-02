import React from "react";

// HeroOverlap.tsx
// React + TypeScript component using Tailwind CSS.
// Colors: amber/orange gradients, black, white.
// Two images overlap from the left and right edges over a background image.

type Props = {
  /** Background image path. Defaults to the provided local file. */
  backgroundSrc?: string;
  /** Foreground image used for both overlapping images (you can replace with another). */
  fgSrc?: string;
};

const HeroOverlap: React.FC<Props> = ({
  backgroundSrc = "/mnt/data/IMG_20251205_110334182_HDR_PCT.jpg",
  fgSrc = "/mnt/data/IMG_20251205_110334182_HDR_PCT.jpg",
}) => {
  return (
    <section className="w-full py-12 md:py-16 flex items-center justify-center bg-[#060812]">
      {/* Background container */}
      <div
        className="relative w-full max-w-6xl mx-auto px-12 md:px-24 py-10 md:py-12 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(251,191,36,0.05)] border border-amber-400/10"
        aria-hidden={false}
      >
        {/* Background image with subtle dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center transform-gpu"
          style={{
            backgroundImage: `url(${backgroundSrc})`,
            filter: "brightness(0.2) contrast(1.1)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#060812] via-[#060812]/50 to-transparent" />

        {/* Amber accent ring in top-left */}
        <div className="absolute -left-40 -top-40 w-[320px] h-[320px] rounded-full border-8 border-amber-400/30 blur-xl opacity-60" />

        {/* Content area */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          {/* Left overlapping image (comes in from left edge) */}
          <div className="relative w-72 h-96 md:w-96 md:h-[520px] flex-shrink-0 group">
            <div className="absolute -left-20 top-8 w-full h-full overflow-hidden rounded-3xl shadow-2xl border border-amber-400/20 bg-black/50">
              <img
                src={fgSrc}
                alt="Left artwork"
                className="w-full h-full object-cover transform-gpu scale-105 group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                style={{ mixBlendMode: "normal" }}
              />
            </div>

            {/* Decorative amber strip */}
            <div className="absolute -left-28 top-12 w-6 h-40 bg-gradient-to-b from-amber-400 to-orange-500 rounded-md shadow-[0_0_20px_rgba(251,191,36,0.3)]" />
          </div>

          {/* Center text block */}
          <div className="flex-1 text-center md:text-left text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              <span className="inline-block bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent mr-2">Swaad</span>
              Setu Dining
            </h1>

            <p className="max-w-xl text-sm md:text-base text-slate-300 mb-8 leading-relaxed">
              Experience a seamless blend of elegant design and robust technology. 
              Our QR-based ordering system modernizes your restaurant, reducing wait times 
              while enhancing customer satisfaction.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-400 text-black font-bold rounded-xl shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:scale-105 transition-all duration-300">
                Explore Now
              </button>

              <button className="px-6 py-3 border border-amber-400/30 text-amber-300 rounded-xl hover:bg-amber-400/10 transition-colors duration-300">
                Book Demo
              </button>
            </div>
          </div>

          {/* Right overlapping image (comes in from right edge) */}
          <div className="relative w-72 h-96 md:w-96 md:h-[520px] flex-shrink-0 group">
            <div className="absolute -right-20 bottom-8 w-full h-full overflow-hidden rounded-3xl shadow-2xl border border-amber-400/20 bg-black/50">
              <img
                src={fgSrc}
                alt="Right artwork"
                className="w-full h-full object-cover transform-gpu -scale-x-100 scale-105 group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                style={{ mixBlendMode: "screen" }}
              />
            </div>

            {/* Decorative black ribbon */}
            <div className="absolute -right-28 bottom-12 w-8 h-44 bg-[#0a0a0a]/90 backdrop-blur border border-white/5 rounded-md shadow-inner" />
          </div>
        </div>

        {/* Bottom stripe for balance */}
        <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-[#060812] via-[#060812]/80 to-transparent" />
      </div>
    </section>
  );
};

export default HeroOverlap;
