import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useReducedMotion } from 'framer-motion';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#0f0f0f] text-gray-200">
      {/* Spline Background (animated) */}
      <div className="absolute inset-0">
        {!prefersReducedMotion ? (
          <Spline
            scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-b from-[#0f0f0f] via-[#121212] to-[#0f0f0f]" />
        )}
      </div>

      {/* Readability overlays & soft lighting (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/50 via-[#0f0f0f]/55 to-[#0f0f0f]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,112,243,0.25),transparent)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-32 pb-24 sm:px-8 lg:px-12">
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

        {/* Quick theme badges */}
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
