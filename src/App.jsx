import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Showcase from './components/Showcase';

const App = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0f0f0f] font-inter text-gray-200">
      {/* Minimal top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f0f0f]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8 lg:px-12">
          <a href="#home" className="text-sm font-semibold text-white">
            RM
          </a>
          <nav className="hidden gap-6 text-sm text-gray-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#showcase" className="hover:text-white">Work</a>
            <a href="#contact" className="rounded bg-white/5 px-3 py-1.5 text-white hover:bg-white/10">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Showcase />
      </main>

      <footer className="border-t border-white/10 bg-[#0f0f0f] py-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Rishi Marrivada. Built with care.
      </footer>
    </div>
  );
};

export default App;
