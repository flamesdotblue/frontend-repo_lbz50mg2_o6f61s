import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useReducedMotion } from 'framer-motion';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#0f0f0f] text-gray-200">
      {/* Layer 0: Cinematic background video (F1 + AI vibe) */}
      <div className="absolute inset-0">
        {!prefersReducedMotion && (
          <video
            className="h-full w-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            poster="https://images.unsplash.com/photo-1516357231954-91487b459602?q=80&w=1920&auto=format&fit=crop"
          >
            {/* High-energy motorsport clip as the ambient layer */}
            <source src="https://cdn.coverr.co/videos/coverr-sleek-car-driving-3271/1080p.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      {/* Layer 1: Spline full-width cover (interactive) */}
      <div className="absolute inset-0 z-10">
        {!prefersReducedMotion ? (
          <Spline
            scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-b from-[#0f0f0f] via-[#121212] to-[#0f0f0f]" />
        )}
      </div>

      {/* Layer 2: Readability overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 z-20">
        {/* Subtle vertical code grid to hint the coding theme */}
        <svg
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <pattern id="codeGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <text x="0" y="8" fontSize="6" fill="rgba(0,112,243,0.55)" fontFamily="monospace">01</text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#codeGrid)" />
        </svg>
        {/* Top glow + overall darkening for contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/40 via-[#0f0f0f]/45 to-[#0f0f0f]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,112,243,0.25),transparent)]" />
      </div>

      {/* Layer 3: Content */}
      <div className="relative z-30 mx-auto flex max-w-7xl flex-col items-start px-6 pt-32 pb-24 sm:px-8 lg:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Rishi Marrivada
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-xl font-medium text-gray-300 sm:text-2xl"
        >
          Futuristic Software Developer • Tech × Cars × AI
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base text-gray-300 sm:text-lg"
        >
          Building high‑performance software, intelligent systems, and automotive experiences powered by AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8"
        >
          <a
            href="#showcase"
            className="inline-block rounded-md bg-[#0070f3] px-6 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-[#0070f3]/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#0070f3]/50"
          >
            View My Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 flex flex-wrap gap-2"
        >
          {['AI Systems', 'Autonomous & Edge', 'Racing Tech', 'Full‑Stack'].map((chip) => (
            <span
              key={chip}
              className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
