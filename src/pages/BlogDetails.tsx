import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import { Footer } from "../component/Footer";
import BackButton from "../component/ui/BackButton";
import { Helmet } from "@dr.pogodin/react-helmet";
import { BLOG_POSTS, type BlogSection } from "../data/blogData";

/* ─────────────────────────── animation helpers (same as About / Hero) ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ─────────────────────────── types ─────────────────────────── */
type BlogCategory = "All" | "Product" | "Updates" | "Operations" | "Growth";

/* ─────────────────────────── category colour map ───────────────────────── */
const categoryStyle: Record<BlogCategory, string> = {
  All:         "bg-amber-400/10 text-amber-300 border-amber-400/25",
  Product:     "bg-amber-400/10 text-amber-300 border-amber-400/25",
  Operations:  "bg-blue-400/10 text-blue-300 border-blue-400/25",
  Growth:      "bg-green-400/10 text-green-300 border-green-400/25",
  Updates:     "bg-yellow-400/10 text-yellow-300 border-yellow-400/25",
};

/* ─────────────────────────── content renderer ──────────────────────────── */
const renderContent = (sections: BlogSection[]) => {
  return sections.map((section, i) => (
    <div key={i}>
      {section.heading && (
        <h4 className="text-lg font-bold text-white mt-8 mb-2 first:mt-0">
          {section.heading}
        </h4>
      )}
      {section.paragraphs?.map((p, pIdx) => (
        <p key={pIdx} className="text-slate-400 leading-relaxed mt-4">
          {p}
        </p>
      ))}
      {section.bullets && (
        <ul className="space-y-4 mt-4">
          {section.bullets.map((bullet, bIdx) => (
            <li key={bIdx} className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="font-semibold text-white">{bullet.title}</p>
              <p className="text-slate-400 text-sm mt-1">{bullet.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  ));
};

/* ─────────────────────────── component ─────────────────────── */
const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug) ?? null;
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 4);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);

  /* ── 404 ── */
  if (!post) {
    return (
      <div className="min-h-screen bg-[#060812]" data-theme="swaad-dark">
        <Navbar />
        {/* <div className="mb-8"><BackButton /></div> */}
        <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
          <p className="text-slate-400 mb-2">Post not found.</p>
          <p className="text-sm text-slate-500 mb-8">
            This article doesn't exist or may have been moved.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
            style={{ background: "linear-gradient(90deg,#fbbf24,#f97316)", color: "#000" }}
          >
            ← Back to all posts
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} – Swaad Setu Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.swaadsetu.com/blog/${post.slug}`} />
        {post.coverImage && <meta property="og:image" content={post.coverImage} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.coverImage && <meta name="twitter:image" content={post.coverImage} />}
      </Helmet>

      <div className="min-h-screen bg-[#060812] text-base-content overflow-x-clip" data-theme="swaad-dark">
        <Navbar />

        {/* ── Background grid (same as About / Hero) ── */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(251,191,36,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,0.03) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        {/* ── Top radial glow ── */}
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full opacity-20 blur-[140px] bg-amber-500/30 pointer-events-none z-0"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <div className="mb-6 pt-2"><BackButton /></div>

          {/* ════════════════════════════════════
              HERO
          ════════════════════════════════════ */}
          <section className="border-b border-amber-400/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

              {/* Back link */}
              <motion.div {...fadeUp(0)}>
                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-amber-400 transition-colors mb-8 group"
                >
                  <span className="transition-transform group-hover:-translate-x-0.5">←</span>
                  Back to all posts
                </Link>
              </motion.div>

              {/* Category + read-time */}
              <motion.div {...fadeUp(0.06)} className="flex items-center gap-3 mb-5">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border ${categoryStyle[post.category]}`}
                >
                  {post.category}
                </span>
                <span className="text-[11px] uppercase tracking-widest text-slate-500">
                  {post.readTime}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                {...fadeUp(0.12)}
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.08] text-white max-w-4xl mb-5"
              >
                {post.title}
              </motion.h1>

              {/* Excerpt */}
              <motion.p
                {...fadeUp(0.18)}
                className="text-slate-400 leading-relaxed max-w-2xl mb-8 text-[15px]"
              >
                {post.excerpt}
              </motion.p>

              {/* Author row */}
              <motion.div
                {...fadeUp(0.24)}
                className="flex items-center gap-3 pt-6 border-t border-amber-400/10"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold select-none flex-shrink-0"
                  style={{ background: "rgba(251,191,36,0.12)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.22)" }}
                  aria-hidden="true"
                >
                  {post.author.charAt(0)}
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-white">{post.author}</p>
                  <p className="text-slate-500 mt-0.5">{post.date}</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ════════════════════════════════════
              BODY
          ════════════════════════════════════ */}
          <section className="py-12 sm:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                {/* ── Main article ── */}
                <article className="w-full lg:w-[62%]">

                  {/* Cover image */}
                  {post.coverImage && (
                    <motion.div
                      {...fadeUp(0.08)}
                      className="rounded-2xl overflow-hidden mb-10 border border-amber-400/10"
                      style={{ boxShadow: "0 0 48px rgba(251,191,36,0.07)" }}
                    >
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        loading="lazy"
                        className="w-full object-cover max-h-[420px]"
                      />
                    </motion.div>
                  )}

                  {/* Content */}
                  <motion.div
                    {...fadeUp(0.14)}
                    className="space-y-5 text-[15px]"
                  >
                    {renderContent(post.sections ?? [])}
                  </motion.div>

                  {/* Bottom CTA */}
                  <motion.div
                    {...fadeUp(0.1)}
                    className="mt-14 pt-6 border-t border-amber-400/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                  >
                    <div>
                      <p className="font-semibold text-white text-sm">Enjoyed this article?</p>
                      <p className="text-sm text-slate-500 mt-0.5">
                        Explore more insights from the Swaad Setu team.
                      </p>
                    </div>
                    <Link
                      to="/blogs"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap group"
                    >
                      Browse all posts
                      <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                    </Link>
                  </motion.div>
                </article>

                {/* ── Sidebar ── */}
                <aside className="w-full lg:w-[38%] lg:sticky lg:top-8">
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-amber-400/60 pb-4 border-b border-amber-400/10 mb-5">
                    More articles
                  </h3>

                  <div className="flex flex-col gap-4">
                    {otherPosts.map((p, i) => (
                      <motion.article
                        key={p.id}
                        {...fadeUp(0.08 + i * 0.06)}
                        className="group rounded-2xl border border-amber-400/10 p-4 transition-all duration-200 hover:border-amber-400/25"
                        style={{ background: "rgba(255,255,255,0.02)" }}
                      >
                        {/* Category + readTime */}
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold border ${categoryStyle[p.category]}`}
                          >
                            {p.category}
                          </span>
                          <span className="text-[10px] uppercase tracking-widest text-slate-600">
                            {p.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-sm font-semibold text-white leading-snug mb-3 line-clamp-2 group-hover:text-amber-300 transition-colors">
                          <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                        </h2>

                        {/* Footer */}
                        <div className="flex items-center justify-between text-xs pt-3 border-t border-amber-400/8">
                          <div>
                            <p className="font-medium text-slate-400">{p.author}</p>
                            <p className="text-slate-600 mt-0.5">{p.date}</p>
                          </div>
                          <Link
                            to={`/blog/${p.slug}`}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400/60 group-hover:text-amber-400 transition-colors"
                          >
                            Read
                            <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                          </Link>
                        </div>
                      </motion.article>
                    ))}
                  </div>

                  {/* CTA card */}
                  <motion.div
                    {...fadeUp(0.3)}
                    className="mt-6 rounded-2xl p-5"
                    style={{
                      background: "rgba(251,191,36,0.05)",
                      border: "1px solid rgba(251,191,36,0.15)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-amber-400/70">
                        Join SwaadSetu
                      </span>
                    </div>
                    <p className="text-sm font-bold text-white mb-1">
                      Transform your restaurant
                    </p>
                    <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                      58+ restaurants are already running on SwaadSetu. Book a free demo today.
                    </p>
                    <button
                      className="w-full btn btn-sm font-bold border-none text-black"
                      style={{ background: "linear-gradient(90deg,#fbbf24,#f97316)" }}
                      onClick={() =>
                        window.open(
                          "https://docs.google.com/forms/d/e/1FAIpQLSdjwZxtGkYIpulXopAiZBd-BKbQkqA81--N2DNZ5DqqMYTCXw/viewform?embedded=true",
                          "_blank",
                        )
                      }
                    >
                      Book a Free Demo ↗
                    </button>
                  </motion.div>
                </aside>

              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;