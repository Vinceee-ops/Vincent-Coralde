import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaPrint, 
  FaRobot, 
  FaCheckDouble, 
  FaHeadset, 
  FaCheckCircle,
  FaCogs
} from 'react-icons/fa';

function Services() {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "Building responsive, robust, and secure web applications with modern frontend and backend technologies including JavaScript, PHP, Laravel, React, and ASP.NET.",
      deliverables: ["Custom Web Applications & Portals", "REST API Design & Backend Integration", "Relational Database Design (SQL)", "Responsive UI with Tailwind CSS"],
      icon: <FaLaptopCode className="text-[#D3E97A]" />,
      badge: "Web Systems"
    },
    {
      title: "Mobile Application Development",
      description: "Crafting performant cross-platform mobile apps for iOS and Android using React Native, styled with Tailwind CSS, and linked to .NET backend APIs.",
      deliverables: ["Cross-Platform Mobile Apps (iOS/Android)", "Hardware Camera & Barcode Integration", "Tailwind CSS Mobile Interfaces", "Mobile Troubleshooting & Optimization"],
      icon: <FaMobileAlt className="text-[#D3E97A]" />,
      badge: "React Native"
    },
    {
      title: "Hardware-Software Integration & Kiosks",
      description: "Developing specialized desktop software, custom printing pipelines, and interactive touchscreen kiosk systems interfacing directly with physical hardware.",
      deliverables: ["Electron Kiosks & Desktop Applications", "Custom Printing Drivers & Software", "Hardware-Software Interface Protocols", "Scoreboard & Event Display Systems"],
      icon: <FaPrint className="text-[#D3E97A]" />,
      badge: "Hardware & IoT"
    },
    {
      title: "AI Workflow & Process Automation",
      description: "Automating repetitive business processes and connecting disparate APIs using n8n workflow design, AI tool integrations, and custom logic pipelines.",
      deliverables: ["n8n Multi-Step Workflow Automation", "API Integration & Webhook Handlers", "AI Agent & Tool Integration", "Process Automation & Time-Saving Pipelines"],
      icon: <FaRobot className="text-[#D3E97A]" />,
      badge: "n8n & AI"
    },
    {
      title: "Quality Assurance & Software Testing",
      description: "Executing thorough manual, functional, and regression testing suites to identify bugs, validate software features, and guarantee production stability.",
      deliverables: ["Test Case Design & Execution", "Regression & Functional Testing", "Bug Identification & Detailed Reporting", "Validation & Performance Verification"],
      icon: <FaCheckDouble className="text-[#D3E97A]" />,
      badge: "QA & Testing"
    },
    {
      title: "HRIS Support & Client Technical Services",
      description: "Managing software development tickets, troubleshooting client HRIS platforms, resolving technical incidents, and delivering clear technical solutions.",
      deliverables: ["HRIS Troubleshooting & Ticket Resolution", "On-Site Corporate Client Technical Support", "Technical Solution Presentations", "Service-Level Agreement (SLA) Compliance"],
      icon: <FaHeadset className="text-[#D3E97A]" />,
      badge: "Enterprise Support"
    },
  ];

  return (
    <section className="bg-dark-900 py-24 relative overflow-hidden" id="Services">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D3E97A]/5 rounded-full blur-[120px] pointer-events-none" />

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
            <FaCogs size={12} />
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="font-bebas text-5xl lg:text-7xl text-white tracking-wide">
            TECHNICAL <span className="text-[#D3E97A]">SERVICES</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-2">
            Professional engineering services spanning web & mobile engineering, hardware integration, AI automation, and quality assurance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-dark-850 border border-white/10 hover:border-[#D3E97A]/40 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 shadow-card hover:shadow-glow-accent/15 hover:-translate-y-1.5"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-dark-750 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#D3E97A]/10 text-[#D3E97A] border border-[#D3E97A]/20">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-bebas text-2xl lg:text-3xl text-white group-hover:text-[#D3E97A] transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-4 border-t border-white/5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-gray-500 mb-2">
                  Key Deliverables
                </div>
                <ul className="space-y-1.5">
                  {service.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-center text-xs text-gray-300">
                      <FaCheckCircle className="text-[#D3E97A] text-[10px] mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
