import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "glass-nav py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
        }`}
    >
      <nav className="container mx-auto px-6 lg:px-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#Home" className="group flex items-center space-x-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#D3E97A] to-[#8FA838] flex items-center justify-center font-bold text-black font-mono text-sm shadow-glow-accent group-hover:scale-105 transition-transform">
            VC
          </div>
          <div className="flex flex-col">
            <span className="font-bebas text-xl md:text-2xl text-white tracking-wider group-hover:text-[#D3E97A] transition-colors leading-none">
              VINCENT CORALDE
            </span>
            <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">
              Computer Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-7 text-sm font-medium text-gray-300">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className="relative py-1 cursor-pointer hover:text-[#D3E97A] transition-colors font-manrope font-semibold"
                  activeClass="text-[#D3E97A] after:w-full font-bold"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Socials & Available status */}
          <div className="flex items-center space-x-4 pl-4 border-l border-white/10">
            <div className="hidden xl:flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Hire</span>
            </div>
            <a
              href="https://github.com/Vinceee-ops"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-full bg-dark-800 text-gray-300 hover:text-black hover:bg-[#D3E97A] transition-colors border border-white/5"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/vincent-coralde-32a842308"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-full bg-dark-800 text-gray-300 hover:text-black hover:bg-[#D3E97A] transition-colors border border-white/5"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleSidebar}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2.5 rounded-xl bg-dark-800 text-white hover:text-[#D3E97A] border border-white/10 focus:outline-none transition-colors"
        >
          {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-md lg:hidden transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={closeSidebar}
      >
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-dark-900 border-l border-white/10 p-8 flex flex-col justify-between transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <span className="font-bebas text-2xl text-white">MENU</span>
              <button
                onClick={closeSidebar}
                aria-label="Close menu"
                className="p-2 text-gray-400 hover:text-white"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <ul className="mt-8 space-y-6">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={closeSidebar}
                    className="block text-2xl font-bebas text-gray-200 hover:text-[#D3E97A] transition-colors tracking-wide cursor-pointer"
                    activeClass="text-[#D3E97A]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="flex items-center space-x-2 text-xs text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Hire & Internships</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/Vinceee-ops"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-800 text-gray-300 hover:text-black hover:bg-[#D3E97A] transition-colors"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/vincent-coralde-32a842308"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-800 text-gray-300 hover:text-black hover:bg-[#D3E97A] transition-colors"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
