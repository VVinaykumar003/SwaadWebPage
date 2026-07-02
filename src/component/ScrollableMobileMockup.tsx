// components/ScrollableMobileMockup.tsx
import React from "react";

type ScrollableMobileMockupProps = {
  hero: string; // image src
};

const ScrollableMobileMockup: React.FC<ScrollableMobileMockupProps> = ({
  hero,
}) => {
  return (
    <div className="mx-auto w-[260px] sm:w-[280px] lg:w-[300px] relative group">
      {/* Glow effect behind mockup */}
      <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative mx-auto h-[520px] w-full overflow-hidden rounded-[2.5rem] border-[14px] border-[#0a0a0a] bg-black shadow-[0_20px_60px_rgba(251,191,36,0.15)] ring-1 ring-amber-400/20 group-hover:ring-amber-400/40 transition-all duration-500">
        {/* small label */} 
        {/*   */}
        {/* <div className="absolute left-2 top-2 z-20 rounded bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white">
          Swaad Setu App
        </div> */}

        {/* notch */}
        <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-6 w-[120px] -translate-x-1/2 rounded-b-[18px] bg-black " />

        {/* status bar */}
        {/* <div className="flex flex-shrink-0 items-center justify-between border-b border-gray-800 bg-gradient-to-b from-gray-900 to-black px-3 py-1.5 text-[10px] font-medium text-gray-200">
          <span>9:41</span>
          <span>●●●●●</span>
        </div> */}

        {/* scrollable, centered screen */}
        <div className="relative flex h-[calc(100%-1.5rem)] w-full flex-col overflow-hidden rounded-b-[2rem] bg-black ">
          <div className="flex h-full w-full items-start justify-center overflow-y-auto">
            <img
              src={hero}
              alt="Customer main view"
              className="max-h-none w-full max-w-[260px]  object-contain object-center "
            />
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-[#EDEDED]/80">
        Customer journey preview inside the app
      </p>
    </div>
  );
};

export default ScrollableMobileMockup;
