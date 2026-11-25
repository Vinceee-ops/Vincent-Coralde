import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLayerGroup,
  FaCheckCircle,
  FaTimes,
  FaMobileAlt,
  FaServer,
  FaCode,
  FaArrowRight,
  FaDesktop,
  FaCashRegister,
  FaEye,
  FaPrint,
  FaHandsHelping,
  FaTrophy
} from 'react-icons/fa';
import {
  SiReact,
  SiDotnet,
  SiTailwindcss,
  SiJavascript,
  SiPhp,
  SiLaravel,
  SiN8N,
  SiElectron
} from 'react-icons/si';

const PROJECTS_DATA = [
  {
    id: 'volunteer-connect',
    title: 'Volunteer Connect',
    subtitle: 'Community Volunteering & Initiative Management Platform',
    category: 'Full-Stack & Web',
    badge: 'Lead Developer',
    featured: true,
    icon: <FaHandsHelping className="text-[#D3E97A]" />,
    role: 'Lead Developer',
    period: 'Web Project',
    summary: 'Served as Lead Developer for an expansive web platform connecting volunteers with community initiatives, organizations, and service drives, spearheading backend architecture and overall system implementation.',
    highlights: [
      'Architected the backend relational database schemas, authentication middleware, and RESTful API endpoints.',
      'Led the end-to-end system implementation, coordinating feature requirements with the development team.',
      'Designed responsive interfaces for initiative discovery, volunteer signups, and organizer dashboards.',
      'Implemented verification workflows to validate participant hours and community engagement records.'
    ],
    tech: [
      { name: 'PHP / Laravel', icon: <SiLaravel /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'SQL', icon: <FaServer /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> }
    ],
    impact: 'Established an organized, centralized platform that significantly simplified volunteer recruitment and event tracking for community organizers.',
    githubUrl: 'https://github.com/Vinceee-ops',
    demoUrl: 'https://github.com/Vinceee-ops'
  },
  {
    id: 'store-pos',
    title: 'Store POS & Sales Management',
    subtitle: 'Point-of-Sale, Inventory Tracking & Transaction System',
    category: 'Full-Stack & Web',
    badge: 'Commercial Solution',
    featured: true,
    icon: <FaCashRegister className="text-[#D3E97A]" />,
    role: 'Full-Stack Developer',
    period: 'Business Application',
    summary: 'A complete Point-of-Sale (POS) and inventory management system supporting cashier checkouts, real-time inventory adjustments, sales tracking, automated receipt generation, and executive business analytics.',
    highlights: [
      'Engineered transaction processing workflows with atomic inventory stock deductions to prevent overselling.',
      'Implemented automated receipt generation, thermal print-ready formatting, and digital invoice archiving.',
      'Created sales reporting dashboards providing daily, weekly, and monthly revenue summaries and top-selling product insights.',
      'Optimized cashier UI with rapid barcode lookup and keyboard shortcuts for high-throughput retail operations.'
    ],
    tech: [
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'PHP / Laravel', icon: <SiLaravel /> },
      { name: 'SQL Database', icon: <FaServer /> },
      { name: 'Receipt Printing', icon: <FaPrint /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> }
    ],
    impact: 'Streamlined retail checkout times, minimized inventory calculation discrepancies, and furnished owners with instant sales reports.',
    githubUrl: 'https://github.com/doscvincent-ctrl/mango-madness-pos',
    demoUrl: 'https://mango-madness-pos.onrender.com/'
  },
  {
    id: 'multisport-scoreboard',
    title: 'Multi-Sport Scoreboard',
    subtitle: 'Desktop Application for 6 Major Sports Tournaments',
    category: 'Desktop & Systems',
    badge: 'Desktop Application',
    featured: true,
    icon: <FaTrophy className="text-[#D3E97A]" />,
    role: 'Desktop Software Developer',
    period: 'Desktop Software',
    summary: 'A versatile desktop application built with Electron designed to control official tournament scoring and timing across 6 sports: Basketball, Volleyball, Tennis, Soccer, Baseball, and Tchoukball.',
    highlights: [
      'Built with Electron for responsive desktop execution and IPC window synchronization between operator and spectator views.',
      'Engineered customizable game clocks, period intervals, shot clocks, and sport-specific rules (e.g., tennis deuce/sets, volleyball rotations).',
      'Constructed dual-screen support: a dedicated referee/operator control panel and a high-contrast public spectator display.',
      'Programmed keyboard hotkeys and audible buzzer triggers for prompt game stoppage and penalty signaling.',
      'Incorporated persistent team rosters, player foul tallies, and match statistics archiving.'
    ],
    tech: [
      { name: 'Electron', icon: <SiElectron /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Event-Driven Architecture', icon: <FaCode /> },
      { name: 'High-Visibility UI', icon: <FaTrophy /> }
    ],
    impact: 'Adopted for multi-sport athletic tournaments, replacing expensive proprietary scoreboard hardware with an adaptable PC-driven solution.',
    githubUrl: 'https://github.com/doscvincent-ctrl/Scoreboard',
    demoUrl: 'https://github.com/doscvincent-ctrl/Scoreboard'
  },
  {
    id: 'eyemergency',
    title: 'Eyemergency',
    subtitle: 'Computer Engineering Capstone / Thesis Project',
    category: 'Hardware & Systems',
    badge: 'Thesis Project Lead',
    featured: true,
    icon: <FaEye className="text-[#D3E97A]" />,
    role: 'Lead Project Developer & Engineering Researcher',
    period: 'BSCpE Thesis (PUP)',
    summary: 'Led the research, hardware integration, and software development for the Computer Engineering undergraduate thesis, delivering an emergency response and safety monitoring system.',
    highlights: [
      'Directed overall project architecture, guiding hardware component selection and software component synthesis.',
      'Integrated sensor telemetry with software triggers to facilitate rapid emergency alert dispatching.',
      'Formulated communication protocols to deliver instant notifications and location logs to responders.',
      'Conducted extensive functional validation, regression testing, and stress trials to ensure zero failure in critical scenarios.'
    ],
    tech: [
      { name: 'Hardware-Software Integration', icon: <FaServer /> },
      { name: 'Embedded C#', icon: <FaCode /> },
      { name: 'Sensor Telemetry', icon: <FaEye /> },
      { name: 'Quality Assurance', icon: <FaCheckCircle /> }
    ],
    impact: 'Successfully defended before the PUP Computer Engineering panel, demonstrating practical hardware-software integration for real-time safety.',
    githubUrl: 'https://github.com/Vinceee-ops/EYEMERGENCY',
    demoUrl: 'https://github.com/Vinceee-ops/EYEMERGENCY'
  }
];

const CATEGORIES = ['All', 'Full-Stack & Web', 'Mobile Apps', 'Desktop & Systems', 'Hardware & Systems'];

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section className="bg-dark-900 py-24 relative overflow-hidden" id="Projects">
      {/* Background ambient decorative glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D3E97A]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#D3E97A]/5 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D3E97A]/10 border border-[#D3E97A]/30 text-[#D3E97A] text-xs font-semibold uppercase tracking-wider mb-4">
            <FaLayerGroup size={12} />
            <span>Featured Works & Systems</span>
          </div>
          <h2 className="font-bebas text-5xl lg:text-7xl text-white tracking-wide">
            PROJECTS & <span className="text-[#D3E97A]">LEADERSHIP</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-3">
            Key applications, thesis engineering systems, and enterprise platforms I have built as Lead Developer and Software Engineer.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                ? 'bg-[#D3E97A] text-black shadow-glow-accent scale-105'
                : 'bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-750 border border-white/5'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-dark-850 rounded-2xl border border-white/10 hover:border-[#D3E97A]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-card hover:shadow-glow-accent/20 hover:-translate-y-1.5"
            >
              {/* Card Header Top Graphic Strip */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-dark-750 border border-white/10 flex items-center justify-center text-lg shadow-inner group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block">
                        {project.category}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">{project.period}</span>
                    </div>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-md font-medium bg-[#D3E97A]/10 text-[#D3E97A] border border-[#D3E97A]/20">
                    {project.badge}
                  </span>
                </div>

                <h3 className="font-bebas text-2xl lg:text-3xl text-white group-hover:text-[#D3E97A] transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-[#D3E97A]/80 font-medium mb-3">
                  {project.subtitle}
                </p>

                <p className="text-gray-300 text-xs md:text-sm line-clamp-3 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Key Bullet Preview */}
                <div className="space-y-1.5 mb-4">
                  {project.highlights.slice(0, 2).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start text-xs text-gray-400">
                      <FaCheckCircle className="text-[#D3E97A] mt-0.5 mr-2 flex-shrink-0 text-[10px]" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Tech Stack & Actions */}
              <div className="p-6 pt-3 mt-auto border-t border-white/5 bg-dark-900/50">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-dark-750 border border-white/5 text-[11px] text-gray-300 font-medium"
                    >
                      <span className="text-[#D3E97A] text-[10px]">{t.icon}</span>
                      <span>{t.name}</span>
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#D3E97A] hover:text-white transition-colors group/btn cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <FaArrowRight className="text-[10px] transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub Repository"
                      className="p-2 rounded-lg bg-dark-800 hover:bg-[#D3E97A] text-gray-300 hover:text-black transition-colors"
                    >
                      <FaGithub size={14} />
                    </a>
                    {project.demoUrl && project.demoUrl !== project.githubUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open Live Web Portal"
                        className="p-2 rounded-lg bg-[#D3E97A]/15 hover:bg-[#D3E97A] text-[#D3E97A] hover:text-black transition-colors border border-[#D3E97A]/30"
                      >
                        <FaExternalLinkAlt size={12} />
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        title="Quick Details"
                        className="p-2 rounded-lg bg-dark-800 hover:bg-[#D3E97A] text-gray-300 hover:text-black transition-colors cursor-pointer"
                      >
                        <FaExternalLinkAlt size={12} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Repository Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-dark-850 via-dark-800 to-dark-850 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left shadow-card"
        >
          <div className="mb-6 md:mb-0">
            <h4 className="font-bebas text-2xl lg:text-3xl text-white">
              MORE REPOSITORIES & ENGINEERING LABS
            </h4>
            <p className="text-gray-400 text-sm max-w-xl mt-1">
              Explore full repositories on GitHub featuring PHP/Laravel web platforms, React Native mobile modules, C# .NET desktop tools, and n8n AI automation pipelines.
            </p>
          </div>
          <a
            href="https://github.com/Vinceee-ops"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-[#D3E97A] hover:bg-[#C4E06A] text-black font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200 shadow-glow-accent hover:scale-105 flex-shrink-0"
          >
            <FaGithub size={18} />
            <span>Visit @Vinceee-ops on GitHub</span>
          </a>
        </motion.div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-dark-900 border border-white/15 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 md:p-8 bg-dark-850 border-b border-white/10 flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D3E97A]/10 border border-[#D3E97A]/30 flex items-center justify-center text-2xl">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs uppercase tracking-wider font-mono text-[#D3E97A]">
                        {selectedProject.category}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-xs text-gray-400">{selectedProject.period}</span>
                    </div>
                    <h3 className="font-bebas text-3xl md:text-4xl text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-dark-800 hover:bg-dark-700 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm">
                {/* Role & Context */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-dark-800/60 border border-white/5">
                  <div>
                    <span className="text-xs text-gray-400 block font-mono">ROLE / RESPONSIBILITY:</span>
                    <span className="text-white font-semibold text-sm">{selectedProject.role}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-mono">CLASSIFICATION:</span>
                    <span className="text-[#D3E97A] font-semibold text-sm">{selectedProject.badge}</span>
                  </div>
                </div>

                {/* Overview */}
                <div>
                  <h4 className="font-bebas text-xl text-white mb-2 tracking-wide">
                    SYSTEM OVERVIEW & PURPOSE
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {selectedProject.summary}
                  </p>
                </div>

                {/* Key Technical Contributions */}
                <div>
                  <h4 className="font-bebas text-xl text-white mb-3 tracking-wide">
                    ENGINEERING HIGHLIGHTS & ARCHITECTURE
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <FaCheckCircle className="text-[#D3E97A] mt-1 mr-3 flex-shrink-0 text-sm" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Real-World Impact */}
                <div className="p-4 rounded-xl bg-[#D3E97A]/5 border border-[#D3E97A]/20">
                  <h4 className="font-bebas text-lg text-[#D3E97A] mb-1 tracking-wide">
                    OUTCOME & OPERATIONAL VALUE
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {selectedProject.impact}
                  </p>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="font-bebas text-xl text-white mb-3 tracking-wide">
                    TECHNOLOGIES & TOOLCHAIN
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-dark-800 border border-white/10 text-xs text-white"
                      >
                        <span className="text-[#D3E97A]">{t.icon}</span>
                        <span>{t.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-dark-850 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {selectedProject.demoUrl && selectedProject.demoUrl !== selectedProject.githubUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-[#D3E97A] hover:bg-[#C4E06A] text-black font-semibold px-4 py-2.5 rounded-full text-xs transition-all shadow-glow-accent"
                    >
                      <span>Upload Files / Live Portal</span>
                      <FaExternalLinkAlt size={11} />
                    </a>
                  )}
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-dark-800 hover:bg-dark-750 text-white font-medium px-4 py-2.5 rounded-full text-xs transition-colors border border-white/10"
                  >
                    <FaGithub size={14} />
                    <span>View Repository</span>
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-full text-xs font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="#Contact"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center space-x-2 bg-[#D3E97A] hover:bg-[#C4E06A] text-black font-semibold px-5 py-2.5 rounded-full text-xs transition-all shadow-glow-accent cursor-pointer"
                  >
                    <span>Contact About This Project</span>
                    <FaArrowRight size={10} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
