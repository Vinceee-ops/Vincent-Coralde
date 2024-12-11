import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function About() {
  return (
    <div className="bg-black min-h-screen flex items-center" id="about">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="text-white mb-8 lg:mb-0">
            <h1 className="font-bebas text-5xl lg:text-9xl leading-none">ABOUT ME</h1>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className='text-white font-bebas text-4xl md:text-4xl lg:text-3xl'>I am a full stack developer Computer Engineering student currently studying at
       Polytechnic University of the Philippines
      </h2>
            <p className="text-[#C7C7C7] text-sm lg:text-base leading-relaxed mb-6">
            I am a full-stack developer based in Philippines looking for exciting opportunities. Has Computer Engineering background.
      Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring 
      Reactjs, React-Native, dotnet and a bit of Designing. While I am not programming, I enjoy playing basketball, pingpong and playing online games. 
      Learning more to improve skill
            </p>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <button className="bg-[#D6F379] text-black font-bold py-3 px-6 rounded-full text-sm flex items-center justify-center">
                DOWNLOAD RESUME
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
