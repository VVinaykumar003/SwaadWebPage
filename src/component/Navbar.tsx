/**
 * Navbar.tsx — SwaadSetu Navigation
 *
 * Design system matches Hero.tsx + Footer.tsx:
 *   • Background : base-100/90 (dark: #060812 | light: #FAFAF7) + backdrop-blur
 *   • Border     : amber-400/15 hairline (matches Hero floating chips)
 *   • Accent     : amber-400 / primary (DaisyUI token)
 *   • Active     : amber underline pill — same gradient as Hero headline
 *   • Motion     : framer-motion for mobile drawer + link hover
 *
 * DaisyUI theme tokens used:
 *   bg-base-100, text-base-content, text-primary,
 *   border-primary, btn (primary variant)
 *   → swap data-theme on <html> to toggle dark ↔ light
 *
 * tailwind.config.js  (add once — shared with Hero/Footer/About):
 * ─────────────────────────────────────────────────────────────
 * daisyui: {
 *   themes: [
 *     {
 *       "swaad-dark": {
 *         "primary":         "#fbbf24",   // amber-400
 *         "primary-content": "#000000",
 *         "base-100":        "#060812",
 *         "base-200":        "#0e1525",
 *         "base-300":        "#1a2235",
 *         "base-content":    "#f8fafc",
 *         "neutral":         "#1e293b",
 *         "neutral-content": "#94a3b8",
 *       },
 *       "swaad-light": {
 *         "primary":         "#d97706",   // amber-600
 *         "primary-content": "#ffffff",
 *         "base-100":        "#FAFAF7",
 *         "base-200":        "#f3f4f0",
 *         "base-300":        "#e5e7e2",
 *         "base-content":    "#0f172a",
 *         "neutral":         "#e2e8f0",
 *         "neutral-content": "#475569",
 *       },
 *     },
 *   ],
 * },
 * ─────────────────────────────────────────────────────────────
 */

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Images } from "../assets/assets";

/* ── tiny floating particle (reused from Hero) ── */
const NavParticle = ({
  x,
  y,
  size,
  delay,
}: {
  x: string;
  y: string;
  size: number;
  delay: number;
}) => (
  <motion.div
    className="absolute rounded-full bg-amber-400 pointer-events-none"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{ y: [0, -6, 0], opacity: [0.0, 0.35, 0.0] }}
    transition={{ duration: 3 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const navParticles = [
  { x: "12%",  y: "60%", size: 2.5, delay: 0   },
  { x: "35%",  y: "30%", size: 2,   delay: 1.1 },
  { x: "68%",  y: "55%", size: 2.5, delay: 0.5 },
  { x: "88%",  y: "25%", size: 2,   delay: 1.7 },
];

const navLinks = [
  { id: "home",     label: "Home",     path: "/"         },
  { id: "about",    label: "About",    path: "/about"    },
  { id: "features", label: "Features", path: "/features" },
  { id: "pricing",  label: "Pricing",  path: "/pricing"  },
  { id: "contact",  label: "Contact",  path: "/#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen]               = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();

  /* ── scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── active section tracker ── */
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/") return;
      const ids     = ["home", "features", "about", "contact"];
      const scrollY = window.scrollY + 130;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.clientHeight) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const p = location.pathname;
    if      (p === "/")         { setActiveSection("home");     handleScroll(); }
    else if (p === "/about")    { setActiveSection("about");    }
    else if (p === "/features") { setActiveSection("features"); }
    else if (p === "/pricing")  { setActiveSection("pricing");  }
    else if (location.hash === "#contact") { setActiveSection("contact"); }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  /* ── close drawer on route change ── */
  useEffect(() => { setIsOpen(false); }, [location]);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 inset-x-0 z-50
        bg-base-100/90 backdrop-blur-md
        border-b border-amber-400/15
        transition-shadow duration-300
        ${scrolled ? "shadow-[0_4px_32px_rgba(0,0,0,0.5)]" : ""}
      `}
    >
      {/* ── amber grid overlay (same as Hero/Footer) ── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── subtle top accent line ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      {/* ── floating micro-particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {navParticles.map((p, i) => <NavParticle key={i} {...p} />)}
      </div>

      {/* ═══════ DESKTOP ═══════ */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">

          {/* Logo */}
          <motion.button
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 focus:outline-none"
            aria-label="SwaadSetu home"
          >
            <img
              src={Images.swadLogo}
              alt="SwaadSetu"
              className="h-8 sm:h-9 w-auto object-contain"
              loading="eager"
            />
          </motion.button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className="relative px-3 py-2 text-sm font-medium rounded-lg
                               text-base-content/70 hover:text-base-content
                               transition-colors duration-150
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  >
                    {link.label}

                    {/* Animated amber underline */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-lg bg-amber-400/10 border border-amber-400/20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </AnimatePresence>

                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}

                    <span className={`relative z-10 ${isActive ? "text-amber-300" : ""}`}>
                      {/* text rendered by button itself */}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA — Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              onClick={() => navigate("/select-restaurant")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-sm bg-gradient-to-r from-amber-400 to-orange-400
                         text-black font-bold border-none rounded-xl
                         shadow-[0_0_20px_rgba(251,191,36,0.3)]
                         hover:shadow-[0_0_32px_rgba(251,191,36,0.5)]
                         transition-shadow duration-200
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              Go to App
              <svg className="w-3.5 h-3.5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.button>
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => navigate("/select-restaurant")}
              className="btn btn-xs bg-gradient-to-r from-amber-400 to-orange-400
                         text-black font-bold border-none rounded-lg
                         shadow-[0_0_14px_rgba(251,191,36,0.3)]
                         focus:outline-none"
            >
              Go to App
            </button>

            <button
              onClick={() => setIsOpen((p) => !p)}
              className="w-9 h-9 rounded-xl border border-amber-400/20 bg-amber-400/5
                         flex items-center justify-center
                         text-base-content hover:text-amber-300 hover:border-amber-400/50
                         transition-all duration-150
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit   ={{ rotate:  90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate:  90, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit   ={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* ═══════ MOBILE DRAWER ═══════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit ={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden relative"
          >
            {/* Drawer background — matches Hero card style */}
            <div className="mx-4 mb-4 rounded-2xl bg-base-200 border border-amber-400/15
                            shadow-[0_8px_40px_rgba(0,0,0,0.4)] overflow-hidden">

              {/* Amber top edge */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

              <ul className="py-3 px-2">
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * idx, duration: 0.25 }}
                    >
                      <button
                        onClick={() => handleNavClick(link.path)}
                        className={`
                          w-full text-left flex items-center gap-3
                          px-4 py-3 rounded-xl text-sm font-medium
                          transition-all duration-150
                          focus:outline-none
                          ${isActive
                            ? "bg-amber-400/10 text-amber-300 border border-amber-400/20"
                            : "text-base-content/70 hover:text-base-content hover:bg-amber-400/5"
                          }
                        `}
                      >
                        {/* Active dot */}
                        <span
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                            isActive ? "bg-amber-400" : "bg-base-content/20"
                          }`}
                        />
                        {link.label}
                        {isActive && (
                          <motion.span
                            layoutId="mobile-active"
                            className="ml-auto w-1 h-4 rounded-full bg-gradient-to-b from-amber-400 to-orange-400"
                          />
                        )}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Bottom CTA */}
              <div className="px-3 pb-4 pt-1">
                <div className="h-20 w-full bg-gradient-to-r from-transparent via-amber-400/15 to-transparent mb-3" />
                <button
                  onClick={() => navigate("/select-restaurant")}
                  className="w-full btn bg-gradient-to-r from-amber-400 to-orange-400
                             text-black font-bold border-none rounded-xl
                             shadow-[0_0_24px_rgba(251,191,36,0.35)]
                             hover:shadow-[0_0_36px_rgba(251,191,36,0.5)]
                             active:scale-95 transition-all duration-200 "
                >
                  Go to App
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;