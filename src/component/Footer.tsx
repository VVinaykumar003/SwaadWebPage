import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Images } from "../assets/assets";
import { useNavigate } from "react-router-dom";

// Brand icons were removed from lucide-react in v1.0.0, so we define them manually as SVGs
const Facebook = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const Instagram = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const socialLinks = [
  { icon: Facebook,  href: "#" },
  { icon: Twitter,   href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin,  href: "#" },
];

const productLinks = [
  { label: "Features", to: "/features" },
  { label: "Pricing",  to: "/pricing"  },
  { label: "FAQ",      to: "/faq"      },
];

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Blog",     to: "/blogs" },
];

const bottomLinks = [
  { label: "Home",           to: "/"              },
  { label: "Contact",        to: "/#contact"      },
  { label: "Privacy Policy", to: "/legal#privacy" },
  { label: "Terms of Service", to: "/legal#terms" },
  { label: "Cookie Policy",  to: "/legal#cookies" },
];

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer
      id="contact"
      className="relative bg-[#060812] text-white pt-20 pb-8 overflow-hidden"
    >
      {/* ── Background grid (matches Hero) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Radial glows (mirrors Hero) ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-amber-500/8 blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[300px] rounded-full bg-amber-600/6 blur-[100px]" />
        <div className="absolute bottom-0 right-[-10%] w-[350px] h-[280px] rounded-full bg-orange-500/5 blur-[90px]" />
      </div>

      {/* ── Top amber line accent ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 z-10">

        {/* ── Main grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand column */}
          <motion.div {...fadeUp(0.05)} className="space-y-6">
            <button onClick={() => navigate("/")} className="block">
              <img
                src={Images.FooterLogo}
                className="w-44 h-10 object-contain"
                loading="lazy"
                alt="SwaadSetu"
              />
            </button>

            <p className="text-slate-400 leading-relaxed text-sm">
              India's premier QR-based restaurant management system. Empowering
              restaurants to deliver exceptional experiences.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-amber-400/15 flex items-center justify-center
                             hover:bg-amber-400/15 hover:border-amber-400/50 transition-all duration-200 group"
                >
                  <Icon size={16} className="text-slate-400 group-hover:text-amber-300 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Product links */}
          <motion.div {...fadeUp(0.15)}>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-amber-400/70 mb-6">
              Product
            </h3>
            <ul className="space-y-3">
              {productLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-slate-400 hover:text-amber-300 transition-colors duration-150 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-400/40 group-hover:bg-amber-400 transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company links */}
          <motion.div {...fadeUp(0.25)}>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-amber-400/70 mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-slate-400 hover:text-amber-300 transition-colors duration-150 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-400/40 group-hover:bg-amber-400 transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div {...fadeUp(0.35)}>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-amber-400/70 mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-amber-400/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={14} className="text-amber-400" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  connect@swaadsetu.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-amber-400/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={14} className="text-amber-400" />
                </div>
                <span className="text-slate-400 text-sm">+91 9407655717</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-amber-400/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-amber-400" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  Zager Digital Services,<br />
                  Startup Enclave,<br />
                  CSIT Durg,<br />
                  Chhattisgarh 491001
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent mb-8" />

        {/* ── Bottom nav links ── */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8"
        >
          {bottomLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-xs text-slate-500 hover:text-amber-300 transition-colors duration-150 tracking-wide"
            >
              {label}
            </Link>
          ))}
        </motion.div>

        {/* ── Divider ── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/10 to-transparent mb-8" />

        {/* ── Zager credit block ── */}
        <motion.div {...fadeUp(0.55)} className="flex flex-col items-center gap-3">
          <button
            onClick={() => window.open("https://www.zager.in/", "_blank", "noopener,noreferrer")}
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <img
              src={Images.Logo}
              className="w-36 h-9 object-contain"
              loading="lazy"
              alt="Zager Digital Services"
            />
          </button>
          <button
            onClick={() => window.open("https://www.zager.in/", "_blank", "noopener,noreferrer")}
            className="text-center"
          >
            <p className="text-xs text-slate-600">Swaad Setu — A Product By</p>
            <p className="text-xs text-slate-500 mt-0.5">
              © {new Date().getFullYear()} Zager Digital Services Pvt. Ltd.
            </p>
          </button>
        </motion.div>

      </div>
    </footer>
  );
}