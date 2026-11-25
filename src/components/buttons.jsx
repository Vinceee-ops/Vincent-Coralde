import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-scroll';

export const ContactMeButton = () => {
  return (
    <Link
      to="Contact" 
      spy={true}
      smooth={true}
      offset={-80} 
      duration={500}
      className="inline-flex items-center space-x-2 bg-[#D3E97A] hover:bg-[#C4E06A] text-black font-manrope font-bold py-3 px-6 rounded-full transition-all duration-300 text-sm md:text-base shadow-glow-accent hover:shadow-glow-accent-lg hover:scale-105 cursor-pointer"
    >
      <span>Contact Me</span>
      <GoDotFill size={18} className="text-black animate-pulse" />
    </Link>
  );
};
