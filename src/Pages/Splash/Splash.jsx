import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Splash() {
  const steps = [
    "Initializing Vincent Coralde Portfolio v2.0...",
    "Loading Computer Engineering Modules & Stack...",
    "Mounting Projects & Architecture Case Studies...",
    "System Ready. Welcome!"
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 25;
      });
    }, 450);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (progress >= 25 && progress < 50) setCurrentStep(1);
    else if (progress >= 50 && progress < 75) setCurrentStep(2);
    else if (progress >= 75 && progress < 100) setCurrentStep(3);
    else if (progress >= 100) {
      const timer = setTimeout(() => {
        navigate('/Main');
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [progress, navigate]);

  return (
    <div className="flex flex-col justify-center items-center bg-dark-950 min-h-screen px-6 relative overflow-hidden bg-cyber-grid">
      {/* Ambient background glow */}
      <div className="w-80 h-80 bg-[#D3E97A]/10 rounded-full blur-3xl pointer-events-none absolute" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-dark-900 border border-white/10 rounded-2xl p-8 shadow-2xl relative z-10 text-center"
      >
        {/* Monogram Tech Logo */}
        <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#D3E97A] to-[#8FA838] flex items-center justify-center font-bold text-black font-mono text-xl shadow-glow-accent">
          VC
        </div>

        <h1 className="font-bebas text-3xl text-white tracking-wider mb-1">
          VINCENT CORALDE
        </h1>
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">
          Full-Stack & Mobile Developer
        </p>

        {/* Dynamic Status Text */}
        <div className="h-8 flex items-center justify-center mb-6">
          <p className="text-xs font-mono text-[#D3E97A] animate-pulse">
            {steps[currentStep]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-dark-800 rounded-full h-2 mb-6 overflow-hidden p-0.5 border border-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-[#8FA838] to-[#D3E97A] rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Skip button for quick navigation */}
        <button
          onClick={() => navigate('/Main')}
          className="text-xs font-mono text-gray-500 hover:text-[#D3E97A] transition-colors uppercase tracking-wider"
        >
          [ Skip Loading Sequence → ]
        </button>
      </motion.div>
    </div>
  );
}

export default Splash;
