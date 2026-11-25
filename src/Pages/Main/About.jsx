import React, { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaDownload, FaBriefcase, FaGraduationCap, FaUserTie, FaCheckCircle, FaLaptopCode, FaRobot, FaCogs, FaCheckDouble } from 'react-icons/fa';
import { motion } from 'framer-motion';

function About() {
  const [activeTab, setActiveTab] = useState('experience');

  const experienceData = [
    {
      role: 'Software Engineer',
      company: 'Delsan Office Systems Corp.',
      period: 'Mar 2026 – Sept 2026',
      bullets: [
        'Developed and optimized custom printing software and interactive kiosk systems to improve hardware-software integration and user experience.',
        'Performed quality assurance testing, including functional testing, regression testing, bug identification, and validation of software features.',
        'Troubleshot client HRIS platforms and resolved technical issues to support reliable day-to-day operations.',
        'Managed software development tickets and project workflows, prioritized requests, and tracked issues through resolution.',
        'Presented products and provided on-site technical support to corporate clients, explaining technical solutions clearly.'
      ],
      tags: ['PrintExpress Kiosks', 'Electron', 'Hardware-Software Integration', 'HRIS Support', 'Regression Testing', 'Client Support']
    },
    {
      role: 'Customer Service Representative',
      company: 'Straive',
      period: 'Mar 2025 – Mar 2026',
      bullets: [
        'Responded to customer inquiries, resolved issues, and provided product and service information across communication channels.',
        'Maintained client relationships through timely responses, clear communication, and effective problem resolution.',
        'Collaborated with internal teams to escalate complex issues and support process improvements.',
        'Worked in a fast-paced environment while meeting performance metrics and service-level expectations.'
      ],
      tags: ['Client Communication', 'Issue Escalation', 'Process Improvement', 'Service-Level SLAs']
    },
    {
      role: 'Mobile Developer Intern',
      company: 'ETR Total Business Solution',
      period: 'Aug 2024 – Nov 2024',
      bullets: [
        'Assisted in developing mobile applications using React Native, implementing interfaces with Tailwind CSS, and integrating .NET backend functionality.',
        'Debugged and troubleshot application issues to improve performance and functionality.'
      ],
      tags: ['React Native', 'Tailwind CSS', '.NET Backend', 'Mobile Debugging']
    },
    {
      role: 'Software Developer Intern',
      company: 'VCT Networks and Data Solutions',
      period: 'Aug 2023 – Nov 2023',
      bullets: [
        'Developed responsive web applications using HTML, CSS, JavaScript, and ASP.NET.',
        'Collaborated with developers to troubleshoot technical issues and maintain application performance.',
        'Improved application usability and quality by aligning implementations with client requirements.'
      ],
      tags: ['HTML / CSS / JavaScript', 'ASP.NET', 'Web Usability', 'Technical Troubleshooting']
    }
  ];

  const educationData = [
    {
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'Polytechnic University of the Philippines – Parañaque',
      period: '2021 – 2025',
      details: 'Comprehensive engineering degree encompassing embedded systems, hardware-software integration, software development lifecycles, database management, and capstone research.'
    }
  ];

  const skillCategories = [
    {
      category: 'Web & Programming',
      icon: <FaLaptopCode className="text-[#D3E97A]" />,
      skills: ['JavaScript', 'PHP', 'Laravel', 'React', 'HTML & CSS', 'SQL', 'ASP.NET']
    },
    {
      category: 'Mobile & Desktop UI',
      icon: <FaLaptopCode className="text-[#D3E97A]" />,
      skills: ['Electron (Desktop & Kiosks)', 'React Native', 'Mobile Application Dev', 'Tailwind CSS', 'Responsive UI']
    },
    {
      category: 'Backend & Integration',
      icon: <FaCogs className="text-[#D3E97A]" />,
      skills: ['.NET / ASP.NET', 'REST API Integration', 'Backend Integration', 'Hardware-Software Integration']
    },
    {
      category: 'AI & Automation',
      icon: <FaRobot className="text-[#D3E97A]" />,
      skills: ['n8n Workflow Automation', 'API Automation', 'Workflow Design', 'Process Automation', 'AI Tool Integration']
    },
    {
      category: 'QA & Testing',
      icon: <FaCheckDouble className="text-[#D3E97A]" />,
      skills: ['Manual & Functional Testing', 'Regression Testing', 'Test Case Execution', 'Bug Reporting', 'Debugging & Validation']
    },
    {
      category: 'Tools & Collaboration',
      icon: <FaUserTie className="text-[#D3E97A]" />,
      skills: ['Git & GitHub', 'Ticket Management', 'Client Technical Presentations', 'English & Filipino']
    }
  ];

  return (
    <section className="bg-dark-950 py-24 relative overflow-hidden" id="About">
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
            <FaUserTie size={12} />
            <span>Profile & Professional Background</span>
          </div>
          <h2 className="font-bebas text-5xl lg:text-7xl text-white tracking-wide">
            PROFESSIONAL <span className="text-[#D3E97A]">BACKGROUND</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-2">
            Software Engineer based in Makati City, Philippines, bridging web and mobile development, hardware integration, and intelligent automation.
          </p>
        </motion.div>

        {/* Top Split: Summary & Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-dark-900 border border-white/10 rounded-2xl p-8 relative shadow-card"
          >
            <div className="text-[#D3E97A] font-mono text-xs uppercase tracking-widest mb-3">
              PROFESSIONAL SUMMARY
            </div>
            <h3 className="font-bebas text-3xl sm:text-4xl text-white leading-tight mb-4">
              VERSATILE SOFTWARE ENGINEER & HARDWARE INTEGRATOR
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              Experience developing mobile and web applications, integrating software with specialized hardware devices, and supporting enterprise HRIS platforms.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Skilled in full-stack stacks including <strong className="text-white">JavaScript, PHP, Laravel, React, React Native, .NET, ASP.NET, and SQL</strong>. Experienced in <strong className="text-white">AI workflow automation using n8n</strong>, API integration, QA validation, and bug management.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Adept at managing development tickets, delivering on-site technical presentations to corporate clients, and communicating technical solutions to business users.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <a
                href="/Vincent-Coralde/resume.pdf"
                download="Vincent_H_Coralde_Resume.pdf"
                className="inline-flex items-center space-x-2 bg-[#D3E97A] hover:bg-[#C4E06A] text-black font-bold py-3 px-6 rounded-full text-xs sm:text-sm transition-all shadow-glow-accent hover:scale-105"
              >
                <FaDownload />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/vincent-coralde-32a842308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-dark-800 text-gray-300 hover:text-black hover:bg-[#D3E97A] transition-colors"
                >
                  <FaLinkedinIn size={16} />
                </a>
                <a
                  href="https://github.com/Vinceee-ops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-dark-800 text-gray-300 hover:text-black hover:bg-[#D3E97A] transition-colors"
                >
                  <FaGithub size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Work Experience & Education Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            {/* Tabs Header */}
            <div className="flex items-center space-x-4 mb-6 border-b border-white/10 pb-4">
              <button
                onClick={() => setActiveTab('experience')}
                className={`inline-flex items-center space-x-2 pb-2 text-sm md:text-base font-bold transition-all relative cursor-pointer ${
                  activeTab === 'experience'
                    ? 'text-[#D3E97A] after:absolute after:bottom-[-17px] after:left-0 after:right-0 after:h-0.5 after:bg-[#D3E97A]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <FaBriefcase size={16} />
                <span>Professional Experience</span>
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`inline-flex items-center space-x-2 pb-2 text-sm md:text-base font-bold transition-all relative cursor-pointer ${
                  activeTab === 'education'
                    ? 'text-[#D3E97A] after:absolute after:bottom-[-17px] after:left-0 after:right-0 after:h-0.5 after:bg-[#D3E97A]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <FaGraduationCap size={16} />
                <span>Education</span>
              </button>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === 'experience' ? (
                experienceData.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-dark-900 border border-white/10 hover:border-[#D3E97A]/40 transition-all shadow-card"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h4 className="font-bebas text-2xl text-white">{exp.role}</h4>
                      <span className="text-xs font-mono text-[#D3E97A] bg-[#D3E97A]/10 px-2.5 py-1 rounded-md border border-[#D3E97A]/20 inline-block w-fit mt-1 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-gray-300 mb-3">{exp.company}</div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start text-xs sm:text-sm text-gray-300 leading-relaxed">
                          <span className="text-[#D3E97A] mr-2 text-base leading-none">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] px-2.5 py-0.5 rounded bg-dark-800 text-gray-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                educationData.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-dark-900 border border-white/10 hover:border-[#D3E97A]/40 transition-all shadow-card"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h4 className="font-bebas text-2xl text-white">{edu.degree}</h4>
                      <span className="text-xs font-mono text-[#D3E97A] bg-[#D3E97A]/10 px-2.5 py-1 rounded-md border border-[#D3E97A]/20 inline-block w-fit mt-1 sm:mt-0">
                        {edu.period}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-gray-300 mb-3">{edu.institution}</div>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>

        {/* Technical Skills Competencies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="text-center mb-10">
            <h3 className="font-bebas text-3xl md:text-4xl text-white tracking-wide">
              TECHNICAL SKILLS & TOOLCHAIN
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Categorized competencies across programming, mobile, AI workflow automation, and quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((group, gIdx) => (
              <div
                key={gIdx}
                className="bg-dark-900 border border-white/10 rounded-2xl p-6 hover:border-[#D3E97A]/40 transition-all shadow-card"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-dark-800 flex items-center justify-center">
                    {group.icon}
                  </div>
                  <h4 className="font-bebas text-xl text-white">{group.category}</h4>
                </div>
                <ul className="space-y-2">
                  {group.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center text-xs sm:text-sm text-gray-300">
                      <FaCheckCircle className="text-[#D3E97A] text-xs mr-2 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
