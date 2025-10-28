import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Brain } from 'lucide-react';

const skills = [
  { icon: <Code2 className="h-5 w-5" />, label: 'Python' },
  { icon: <Code2 className="h-5 w-5" />, label: 'C++' },
  { icon: <Code2 className="h-5 w-5" />, label: 'JavaScript' },
  { icon: <Cpu className="h-5 w-5" />, label: 'Node.js' },
  { icon: <Cpu className="h-5 w-5" />, label: 'Express' },
  { icon: <Database className="h-5 w-5" />, label: 'MongoDB' },
  { icon: <Code2 className="h-5 w-5" />, label: 'React' },
  { icon: <Brain className="h-5 w-5" />, label: 'Machine Learning' },
  { icon: <Brain className="h-5 w-5" />, label: 'YOLO' },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-[#0f0f0f] px-6 py-20 text-gray-200 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          Skills
        </motion.h2>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group flex items-center gap-2 rounded-md border border-white/5 bg-white/5 px-3 py-2 text-sm text-gray-200 backdrop-blur-sm transition hover:border-[#0070f3]/40 hover:bg-[#0f0f0f]/60"
            >
              <span className="text-[#7ab5ff] group-hover:text-[#0070f3]">{s.icon}</span>
              <span>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
