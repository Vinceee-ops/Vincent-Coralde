import React from 'react';
import { GoDotFill } from "react-icons/go";

export const ContactMeButton = () => {
  return (
    <button className="flex items-center bg-[#D3E97A] hover:bg-[#a6c238] text-black font-manrope font-semibold py-2 px-4 md:py-3 md:px-6 rounded-3xl transition duration-200 ease-in-out text-sm md:text-md lg:text-lg shadow-lg space-x-2 md:space-x-3">
        <span>Contact Me</span>
        <GoDotFill size={20} />
    </button>
  );
}