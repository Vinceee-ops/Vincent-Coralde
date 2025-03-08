import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="bg-black min-h-screen flex items-center" id="About">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white mb-8 lg:mb-0"
          >
            <h1 className="font-bebas text-5xl lg:text-8xl leading-none">ABOUT ME</h1>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h2 className='text-white font-bebas text-3xl md:text-4xl lg:text-5xl mb-6'>
              I am a full stack developer and Computer Engineering student currently studying at
              Polytechnic University of the Philippines
            </h2>
            <p className="text-[#C7C7C7] text-sm lg:text-base leading-relaxed mb-6">
              I am a full-stack developer based in the Philippines looking for exciting opportunities. With a Computer Engineering background,
              I like to focus on accessibility when developing. I am passionate and curious about solving problems.
            </p>
            <p className="text-[#C7C7C7] text-sm lg:text-base leading-relaxed mb-6">
              Currently, I’m exploring Reactjs, React-Native, .NET, and a bit of design. When I’m not programming, I enjoy playing basketball,
              ping pong, and online games. I’m always learning more to improve my skills.
            </p>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <a href="/Vincent-Coralde/resume.pdf" download="Vincent_Coralde_Resume.pdf">
                <button className="bg-[#D6F379] text-black font-bold py-3 px-6 rounded-full text-sm flex items-center justify-center hover:bg-[#C4E06A] transition-colors">
                  DOWNLOAD RESUME
                </button>
              </a>
              <div className="flex items-center space-x-4">
                <a href='https://www.linkedin.com/in/vincent-coralde-32a842308' target='_blank' rel='noopener noreferrer' className='bg-[#1e1e1e] p-3 rounded-full hover-effect'>
                  <FaLinkedinIn size={20} color='#D3E97A'/>
                </a>
                <a href='https://github.com/Vinceee-ops' target='_blank' rel='noopener noreferrer' className='bg-[#1e1e1e] p-3 rounded-full hover-effect'>
                  <FaGithub size={20} color='#D3E97A'/>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;