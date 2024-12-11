import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Splash() {
  const messages = ["Hi!", "How are you?", "Get to know me here."];
  const [currentMessage, setCurrentMessage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentMessage < messages.length) {
      const timer = setTimeout(() => {
        setCurrentMessage((prev) => prev + 1);
      }, 500); 

      return () => clearTimeout(timer); 
    } else {
      navigate('/Main'); 
    }
  }, [currentMessage, navigate]);

  return (
    <div className='flex justify-center items-center bg-black h-screen'>
      <p className='font-serif text-3xl text-white'>{messages[currentMessage]}</p>
    </div>
  );
}

export default Splash;
