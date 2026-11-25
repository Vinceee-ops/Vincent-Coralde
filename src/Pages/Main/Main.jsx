import React from 'react';
import pic from '../../assets/myPic.png';
import { ContactMeButton } from '../../components/buttons';
import { FaLinkedinIn, FaGithub, FaFileDownload, FaGraduationCap } from "react-icons/fa";
import { SiReact, SiDotnet, SiTailwindcss, SiJavascript, SiPhp, SiLaravel, SiN8N, SiElectron } from "react-icons/si";
import { motion } from 'framer-motion';

function Main() {
  const techStack = [
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "PHP / Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
    { name: "React / Native", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Electron", icon: <SiElectron className="text-[#47848F]" /> },
    { name: ".NET", icon: <SiDotnet className="text-[#512BD4]" /> },
    { name: "n8n AI", icon: <SiN8N className="text-[#EA4B71]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
  ];

  return (
    <section className="relative bg-dark-950 min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-cyber-grid" id="Home">
      {/* Ambient background glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#D3E97A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-gray-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D3E97A] animate-pulse" />
              <span>Software Engineer • Makati City, PH</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wide leading-none">
              HI, I AM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D3E97A] to-[#D3E97A]">
                VINCENT H. CORALDE.
              </span>
            </h1>

            {/* Concise Bio */}
            <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-5 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Building accessible web and mobile apps, hardware-integrated systems, and automated workflows.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-8">
              <ContactMeButton />

              <a
                href="/Vincent-Coralde/resume.pdf"
                download="Vincent_H_Coralde_Resume.pdf"
                className="inline-flex items-center space-x-2 bg-dark-800 hover:bg-dark-750 text-white font-manrope font-semibold py-3 px-6 rounded-full text-sm md:text-base border border-white/15 hover:border-[#D3E97A]/50 transition-all shadow-md hover:scale-105"
              >
                <FaFileDownload className="text-[#D3E97A]" />
                <span>Resume</span>
              </a>

              <div className="flex items-center space-x-3 pl-2">
                <a
                  href="https://github.com/Vinceee-ops"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-full bg-dark-800 text-gray-300 hover:text-black hover:bg-[#D3E97A] transition-colors border border-white/10 hover-effect"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vincent-coralde-32a842308"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-full bg-dark-800 text-gray-300 hover:text-black hover:bg-[#D3E97A] transition-colors border border-white/10 hover-effect"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>

            {/* Clean Tech Pills directly in left column */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mt-10 pt-8 border-t border-white/10">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-dark-850/80 border border-white/5 text-xs text-gray-300 font-medium"
                >
                  <span className="text-sm">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#D3E97A]/40 via-emerald-500/20 to-[#D3E97A]/40 rounded-3xl blur-lg opacity-70" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-dark-900 border border-white/15 overflow-hidden shadow-2xl p-3">
                <img
                  src={pic}
                  alt="Vincent H. Coralde"
                  className="w-full h-auto rounded-xl object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />

                {/* Compact Floating Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-3 rounded-xl bg-dark-900/90 backdrop-blur-md border border-white/10 shadow-lg flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D3E97A]/15 border border-[#D3E97A]/30 flex items-center justify-center text-[#D3E97A] flex-shrink-0">
                    <FaGraduationCap size={16} />
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-semibold text-white">BS Computer Engineering</div>
                    <div className="text-[11px] text-gray-400 truncate">PUP – Parañaque</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Main;
