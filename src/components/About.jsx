import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="w-full bg-[#0f0f0f] px-6 py-20 text-gray-200 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-base leading-7 text-gray-300 sm:text-lg"
        >
          I'm a software developer with a strong focus on building robust systems and AI-driven applications. My background spans computer science research, a hands-on SDE internship, and projects that blend web development with machine learning and systems engineering. I enjoy designing reliable services, optimizing performance, and bringing ideas to life with clean, maintainable code.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
