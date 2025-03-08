import React, { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset the success message after 5 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 5000);
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [isSubmitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        e.target.reset(); // Reset the form fields
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-black min-h-screen py-20" id="Contact">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="font-bebas text-5xl lg:text-7xl text-white">LET'S CONNECT</h1>
            <p className="text-[#C7C7C7] text-lg lg:text-xl mt-4">
              Let's build something amazing together!
            </p>
            <h2 className="font-bebas text-3xl mb-6">Get in Touch</h2>
            <p className="text-[#C7C7C7] text-lg mb-6">
              Have a question or want to work together? Feel free to reach out!
            </p>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center">
                <FaEnvelope size={24} className="text-[#D3E97A] mr-4" />
                <a
                  href="mailto:coraldevincent1@gmail.com"
                  className="text-[#C7C7C7] hover:text-[#D3E97A] transition-colors"
                >
                  coraldevincent1@gmail.com
                </a>
              </div>
              {/* LinkedIn */}
              <div className="flex items-center">
                <FaLinkedinIn size={24} className="text-[#D3E97A] mr-4" />
                <a
                  href="https://www.linkedin.com/in/vincent-coralde-32a842308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C7C7C7] hover:text-[#D3E97A] transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              {/* GitHub */}
              <div className="flex items-center">
                <FaGithub size={24} className="text-[#D3E97A] mr-4" />
                <a
                  href="https://github.com/Vinceee-ops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C7C7C7] hover:text-[#D3E97A] transition-colors"
                >
                  GitHub Profile
                </a>
              </div>
              <div className="flex items-center">
                <FaInstagram size={24} className="text-[#D3E97A] mr-4" />
                <a
                  href="https://www.instagram.com/vincheeesee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C7C7C7] hover:text-[#D3E97A] transition-colors"
                >
                  Instagram Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#1e1e1e] p-8 rounded-lg"
          >
            <h2 className="font-bebas text-3xl text-white mb-6">Send Me a Message</h2>
            <div>
              {isSubmitted ? (
                <p className="text-green-500">Thank you! Your message has been sent.</p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-[#C7C7C7] text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-[#2a2a2a] text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-[#C7C7C7] text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-[#2a2a2a] text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-[#C7C7C7] text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full bg-[#2a2a2a] text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#D3E97A] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#C4E06A] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;