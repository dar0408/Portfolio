import { Download, Github, Linkedin, Rocket, } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
  return (
<section className="min-h-screen flex items-center justify-center relative px-4">
  <div className="max-w-6xl mx-auto text-center relative z-10">
    <div className="space-y-6">

      <h1 className="text-7xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-nebulaPink via-cosmicBlue to-violet-500 animate-glow">
        Darpan
      </h1>

      <div className="relative inline-block">
        <h2 className="text-4xl md:text-4xl font-bold mb-4 animate-float">
          Backend Developer
        </h2>
        <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-nebulaPink via-cosmicBlue to-violet-500 animate-pulse"></div>
      </div>

      <p className="text-xl md:text-2xl text-starWhite/90 mb-8 animate-fade-in opacity-0 [animation-delay:1000ms] max-w-2xl mx-auto leading-relaxed">
        Backend Developer | Java • Spring Boot • MySQL • AWS • Docker • CI/CD
      </p>

      <div className="flex gap-6 justify-center animate-fade-in opacity-0 [animation-delay:1200ms]">
        {/* GitHub */}
        <a
          href="https://github.com/dar0408"
          className="group relative p-3 bg-deepSpace/50 rounded-full hover:bg-deepSpace/80 transition-all duration-300 border border-starWhite/10"
        >
          <Github className="w-6 h-6 group-hover:text-nebulaPink transition-colors" />
          <div className="absolute inset-0 rounded-full bg-nebulaPink/20 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/darpan-salgotra-87b101210/"
          className="group relative p-3 bg-deepSpace/50 rounded-full hover:bg-deepSpace/80 transition-all duration-300 border border-starWhite/10"
        >
          <Linkedin className="w-6 h-6 group-hover:text-cosmicBlue transition-colors" />
          <div className="absolute inset-0 rounded-full bg-cosmicBlue/20 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        </a>

        {/* Resume Download Icon */}
        <a
          href="/Darpan_Resume.pdf"
          download
          className="group relative p-3 bg-deepSpace/50 rounded-full hover:bg-deepSpace/80 transition-all duration-300 border border-starWhite/10"
        >
          <Download className="w-6 h-6 group-hover:text-emerald-500 transition-colors" />
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        </a>
      </div>

      <div className="mt-12 animate-bounce-slow">
        <Rocket className="w-8 h-8 mx-auto text-nebulaPink" />
      </div>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
