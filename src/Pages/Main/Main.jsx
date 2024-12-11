import React from 'react';
import pic from '../../assets/myPic.png'
import { ContactMeButton } from '../../components/buttons';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Main() {
  return (
<div className='bg-black min-h-screen' id='home'>
  <div className='flex flex-col lg:flex-row justify-between p-6 lg:pl-20 lg:pr-20 lg:pt-10 items-center'>
    <div className="text-white text-center lg:text-left mb-8 lg:mb-0">
      <h1 className='font-bebas text-4xl md:text-5xl lg:text-8xl'>HI, I AM<br />VINCENT CORALDE.</h1>
      <p className='text-[#C7C7C7] text-base md:text-xl mt-4'>
        A Computer Engineering student passionate about building 
        <br className="hidden md:block" /> accessible and user-friendly systems.
      </p>
      <div className="flex justify-center items-center lg:justify-start mt-4 lg:mt-6">
        <ContactMeButton />
        <div className='flex ml-5 bg-[#1e1e1e] py-2 px-2 md:py-3 md:px-3 rounded-3xl'>
          <FaLinkedinIn size={20} color='#D3E97A'/>
        </div>
        <div className='flex ml-5 bg-[#1e1e1e] py-2 px-2 md:py-3 md:px-3 rounded-3xl'>
          <FaGithub size={20} color='#D3E97A'/>
        </div>
      </div>
    </div>
    <div className="img flex justify-center lg:justify-end w-full lg:w-auto">
      <img src={pic} alt="Vincent Coralde" className='w-3/4 md:w-1/2 lg:w-[70%] h-auto rounded-xl'/>
    </div>
  </div>
</div>
  );
}

export default Main;
