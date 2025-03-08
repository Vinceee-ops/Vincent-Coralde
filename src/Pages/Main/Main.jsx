import React from 'react';
import pic from '../../assets/myPic.png';
import { ContactMeButton } from '../../components/buttons';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

function Main() {
  return (
    <div className='bg-black min-h-screen flex items-center' id='Home'>
            <div className="container mx-auto px-6 lg:px-20">

      <div className='flex flex-col lg:flex-row justify-between p-6 lg:pl-20 lg:pr-20 lg:pt-10 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-center lg:text-left mb-8 lg:mb-0"
        >
          <h1 className='font-bebas text-4xl md:text-5xl lg:text-8xl'>HI, I AM<br />VINCENT CORALDE.</h1>
          <p className='text-[#C7C7C7] text-base md:text-xl mt-4'>
            A Computer Engineering student passionate about building 
            <br className="hidden md:block" /> accessible and user-friendly systems.
          </p>
          <div className="flex justify-center items-center lg:justify-start mt-4 lg:mt-6">
            <ContactMeButton />
            <a href='https://www.linkedin.com/in/vincent-coralde-32a842308' target='_blank' rel='noopener noreferrer' className='flex ml-5 bg-[#1e1e1e] py-2 px-2 md:py-3 md:px-3 rounded-3xl hover-effect'>
              <FaLinkedinIn size={20} color='#D3E97A'/>
            </a>
            <a href='https://github.com/Vinceee-ops' target='_blank' rel='noopener noreferrer' className='flex ml-5 bg-[#1e1e1e] py-2 px-2 md:py-3 md:px-3 rounded-3xl hover-effect'>
              <FaGithub size={20} color='#D3E97A'/>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="img flex justify-center lg:justify-end w-full lg:w-auto"
        >
          <img src={pic} alt="Vincent Coralde - Computer Engineering Student" className='w-3/4 md:w-1/2 lg:w-[70%] h-auto rounded-xl' loading='lazy'/>
        </motion.div>
      </div>
    </div>
    </div>
  );
}

export default Main;