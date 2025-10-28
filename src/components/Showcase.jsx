import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Rocket, Mail, Linkedin } from 'lucide-react';

const projects = [
  {
    title: 'Submira',
    tagline: 'End-to-end web platform with scalable backend services',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    links: {
      github: 'https://github.com/',
      live: '#',
    },
  },
  {
    title: 'Wildfire Detection Drone',
    tagline: 'Edge AI pipeline for real-time fire detection and alerting',
    tech: ['YOLO', 'Python', 'OpenCV', 'ROS'],
    links: {
      github: 'https://github.com/',
      live: '#',
    },
  },
  {
    title: 'Systems Dashboard',
    tagline: 'Observability dashboard for services and analytics',
    tech: ['TypeScript', 'React', 'FastAPI', 'Grafana'],
    links: {
      github: 'https://github.com/',
      live: '#',
    },
  },
];

const capabilities = [
  'Full‑stack systems',
  'Edge‑AI models',
  'Autonomous & perception',
  'Data & analytics',
  'APIs & integrations',
  'Performance & reliability',
];

const Showcase = () => {
  return (
    <section id="showcase" className="w-full bg-[#0f0f0f] px-6 py-20 text-gray-200 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Projects */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          Projects
        </motion.h2>
        <p className="mt-2 text-sm text-gray-400">Selected work across tech, cars, and AI.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group relative flex flex-col rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition hover:border-[#0070f3]/40 hover:shadow-[0_20px_40px_-10px_rgba(0,112,243,0.35)]"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{p.tagline}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-gray-200"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gray-300 transition hover:text-white"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
                <span className="text-gray-500">•</span>
                <a
                  href={p.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-[#7ab5ff] transition hover:text-[#0070f3]"
                >
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 transition group-hover:ring-[#0070f3]/40" />
            </motion.div>
          ))}
        </div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
            <Rocket className="h-5 w-5 text-[#0070f3]" /> What I Build / Capabilities
          </h3>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <li
                key={c}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200"
              >
                {c}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="text-xl font-semibold text-white">Let's connect</h3>
          <p className="mt-2 text-sm text-gray-300">
            I'm open to collaborations, internships, and interesting problems.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = form.name.value;
                const email = form.email.value;
                const message = form.message.value;
                const mailto = `mailto:rishi@example.com?subject=Portfolio%20Contact%20-%20${encodeURIComponent(
                  name
                )}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
                window.location.href = mailto;
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs text-gray-400">Name</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-md border border-white/10 bg-[#0f0f0f] px-3 py-2 text-sm text-gray-100 outline-none ring-0 transition placeholder:text-gray-500 focus:border-[#0070f3]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-white/10 bg-[#0f0f0f] px-3 py-2 text-sm text-gray-100 outline-none transition placeholder:text-gray-500 focus:border-[#0070f3]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-md border border-white/10 bg-[#0f0f0f] px-3 py-2 text-sm text-gray-100 outline-none transition placeholder:text-gray-500 focus:border-[#0070f3]"
                  placeholder="Tell me about your project or idea"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-[#0070f3] px-5 py-2 text-sm font-semibold text-white shadow transition hover:brightness-110"
              >
                Send
              </button>
            </form>
            <div className="space-y-4">
              <a
                href="mailto:rishi@example.com"
                className="flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
              >
                <Mail className="h-4 w-4" /> rishi@example.com
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
