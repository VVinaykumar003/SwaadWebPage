import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface ContactStripProps {
  email?: string;
  phone?: string;
  className?: string;
}

export function ContactStrip({ 
  email = "connect@swaadsetu.com", 
  phone = "+91 9407655717",
  className = "" 
}: ContactStripProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative bg-[#060812]/80 backdrop-blur-xl rounded-3xl p-5 lg:p-8 border border-amber-400/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)] max-w-2xl mx-auto overflow-hidden ${className}`}
    >
      {/* ── Background Grid & Glows ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] rounded-full bg-amber-500/10 blur-[50px] pointer-events-none" />

      <p className="relative text-sm lg:text-base text-slate-400 font-medium mb-6 flex items-center justify-center gap-2 tracking-wide uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        Get in touch instantly
      </p>
      
      <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 z-10">
        {/* Email Button */}
        <a
          href={`mailto:${email}`}
          className="w-full sm:w-auto group flex flex-1 items-center justify-center space-x-3 p-4 rounded-2xl bg-white/[0.03] hover:bg-amber-400/10 border border-white/5 hover:border-amber-400/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)] hover:-translate-y-0.5"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="font-semibold text-sm lg:text-base text-slate-200 group-hover:text-amber-300 transition-colors">
            {email}
          </span>
        </a>
        
        {/* Phone Button */}
        <a
          href={`tel:${phone.replace(/\s/g, '')}`}
          className="w-full sm:w-auto group flex flex-1 items-center justify-center space-x-3 p-4 rounded-2xl bg-white/[0.03] hover:bg-amber-400/10 border border-white/5 hover:border-amber-400/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)] hover:-translate-y-0.5"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="font-semibold text-sm lg:text-base text-slate-200 group-hover:text-amber-300 transition-colors">
            {phone}
          </span>
        </a>
      </div>
    </motion.div>
  );
}
