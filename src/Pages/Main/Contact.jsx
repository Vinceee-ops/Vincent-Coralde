import React, { useState, useEffect } from 'react';
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt,
  FaInstagram, 
  FaCopy, 
  FaCheck, 
  FaPaperPlane, 
  FaArrowUp 
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('coraldevincent1@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+639766695032');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xrbpzodo', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 600, smooth: true });
  };

  return (
    <div className="bg-dark-950 pt-24 relative overflow-hidden" id="Contact">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#D3E97A]/5 rounded-full blur-[140px] pointer-events-none" />

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
            <FaPaperPlane size={11} />
            <span>Direct Channels</span>
          </div>
          <h2 className="font-bebas text-5xl lg:text-7xl text-white tracking-wide">
            LET'S <span className="text-[#D3E97A]">CONNECT</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-2">
            Have an open engineering role, a software contract, or an automation project? Feel free to reach out directly.
          </p>
        </motion.div>

        {/* Contact Form and Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left: Contact Info & Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-dark-900 border border-white/10 rounded-2xl p-8 shadow-card">
              <h3 className="font-bebas text-3xl text-white mb-2">
                GET IN TOUCH
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                I am actively open to software engineering opportunities, client systems development, and automation consulting.
              </p>

              {/* Fast Copy Email Card */}
              <div className="p-4 rounded-xl bg-dark-850 border border-white/5 mb-3 flex items-center justify-between">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-[#D3E97A]/10 flex items-center justify-center text-[#D3E97A] flex-shrink-0">
                    <FaEnvelope size={18} />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono uppercase text-gray-500">Email Address</div>
                    <div className="text-xs sm:text-sm font-semibold text-white truncate">coraldevincent1@gmail.com</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg bg-dark-800 hover:bg-[#D3E97A] text-gray-300 hover:text-black transition-colors flex-shrink-0 ml-3 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <FaCheck className="text-emerald-400" size={14} /> : <FaCopy size={14} />}
                </button>
              </div>

              {/* Fast Copy Phone Card */}
              <div className="p-4 rounded-xl bg-dark-850 border border-white/5 mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-[#D3E97A]/10 flex items-center justify-center text-[#D3E97A] flex-shrink-0">
                    <FaPhoneAlt size={16} />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono uppercase text-gray-500">Phone / Mobile</div>
                    <div className="text-xs sm:text-sm font-semibold text-white truncate">+63 976 669 5032</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2.5 rounded-lg bg-dark-800 hover:bg-[#D3E97A] text-gray-300 hover:text-black transition-colors flex-shrink-0 ml-3 cursor-pointer"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <FaCheck className="text-emerald-400" size={14} /> : <FaCopy size={14} />}
                </button>
              </div>

              {/* Channels List */}
              <div className="space-y-3">
                <a
                  href="mailto:coraldevincent1@gmail.com"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/5 hover:border-[#D3E97A]/30 transition-all text-sm text-gray-300 hover:text-white"
                >
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-[#D3E97A]" size={16} />
                    <span>Send an Email Directly</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">Mailto →</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/vincent-coralde-32a842308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/5 hover:border-[#D3E97A]/30 transition-all text-sm text-gray-300 hover:text-white"
                >
                  <div className="flex items-center space-x-3">
                    <FaLinkedinIn className="text-[#D3E97A]" size={16} />
                    <span>LinkedIn Network</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">Connect →</span>
                </a>

                <a
                  href="https://github.com/Vinceee-ops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/5 hover:border-[#D3E97A]/30 transition-all text-sm text-gray-300 hover:text-white"
                >
                  <div className="flex items-center space-x-3">
                    <FaGithub className="text-[#D3E97A]" size={16} />
                    <span>GitHub Repositories</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">Follow →</span>
                </a>

                <a
                  href="https://www.instagram.com/vincheeesee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/5 hover:border-[#D3E97A]/30 transition-all text-sm text-gray-300 hover:text-white"
                >
                  <div className="flex items-center space-x-3">
                    <FaInstagram className="text-[#D3E97A]" size={16} />
                    <span>Instagram Profile</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">View →</span>
                </a>
              </div>
            </div>

            {/* Location & Academic Institution */}
            <div className="p-6 rounded-2xl bg-dark-900 border border-white/10 text-xs sm:text-sm text-gray-400 space-y-2">
              <div className="flex items-center space-x-2 text-white font-semibold">
                <FaMapMarkerAlt className="text-[#D3E97A]" />
                <span>Makati City, Philippines</span>
              </div>
              <div className="text-gray-400">
                Bachelor of Science in Computer Engineering (2021 – 2025)
              </div>
              <div className="text-gray-500 text-[11px]">
                Polytechnic University of the Philippines – Parañaque
              </div>
            </div>
          </motion.div>

          {/* Right: Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-dark-900 border border-white/10 rounded-2xl p-8 shadow-card"
          >
            <h3 className="font-bebas text-3xl text-white mb-2">
              SEND A MESSAGE
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Fill out the form below and your inquiry will be routed directly to my personal email.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center space-y-2">
                <div className="text-2xl">🎉</div>
                <h4 className="font-bebas text-2xl text-white">MESSAGE TRANSMITTED!</h4>
                <p className="text-sm text-emerald-300">
                  Thank you for reaching out. I will respond to your message promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-xs font-mono uppercase mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Alex Reyes"
                      className="w-full bg-dark-800 text-white rounded-xl py-3 px-4 border border-white/10 focus:outline-none focus:border-[#D3E97A] text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-xs font-mono uppercase mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-dark-800 text-white rounded-xl py-3 px-4 border border-white/10 focus:outline-none focus:border-[#D3E97A] text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 text-xs font-mono uppercase mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Engineering Role, Project Inquiry, or Collaboration"
                    className="w-full bg-dark-800 text-white rounded-xl py-3 px-4 border border-white/10 focus:outline-none focus:border-[#D3E97A] text-sm transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 text-xs font-mono uppercase mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Describe your project, team requirements, or discussion topics..."
                    className="w-full bg-dark-800 text-white rounded-xl py-3 px-4 border border-white/10 focus:outline-none focus:border-[#D3E97A] text-sm transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#D3E97A] hover:bg-[#C4E06A] text-black font-bold py-3.5 px-8 rounded-full text-sm transition-all shadow-glow-accent hover:scale-[1.02] disabled:opacity-50 cursor-pointer"
                >
                  <FaPaperPlane size={13} />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

        {/* Footer */}
        <div className="pt-8 pb-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div className="flex items-center space-x-2 text-center md:text-left">
            <span>© {new Date().getFullYear()} Vincent H. Coralde. Software Engineer • Makati City, Philippines.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-[#D3E97A] transition-colors py-1 px-3 rounded-full bg-dark-900 border border-white/10 cursor-pointer"
          >
            <span>Back to top</span>
            <FaArrowUp size={10} />
          </button>
        </div>

      </div>
    </div>
  );
}

export default Contact;
