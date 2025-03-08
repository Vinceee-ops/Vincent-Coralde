import React from 'react';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "I build responsive, user-friendly, and accessible websites using modern technologies like React, .Net, Bootstrap, Tailwind CSS, and Node.js.",
      icon: "💻",
    },
    {
      title: "Mobile App Development",
      description: "I develop cross-platform mobile applications using React Native, ensuring a seamless experience on both iOS and Android.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description: "I design intuitive and visually appealing interfaces that enhance user experience and engagement.",
      icon: "🎨",
    },
    {
      title: "Backend Development",
      description: "I create robust and scalable backend systems using technologies like Sql Server, Node.js, Express, and MongoDB.",
      icon: "⚙️",
    },
    {
      title: "Technical Writing",
      description: "I write clear and concise technical documentation to help developers and users understand your product.",
      icon: "📝",
    },
  ];

  return (
    <div className="bg-black min-h-screen py-10" id="Services">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-bebas text-5xl lg:text-8xl text-white">SERVICES</h1>
          <p className="text-[#C7C7C7] text-lg lg:text-xl mt-4">
            Here’s what I can do for you.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#1e1e1e] p-8 rounded-lg text-center hover:bg-[#2a2a2a] transition-colors"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="font-bebas text-2xl lg:text-3xl text-white mb-4">
                {service.title}
              </h2>
              <p className="text-[#C7C7C7] text-sm lg:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;