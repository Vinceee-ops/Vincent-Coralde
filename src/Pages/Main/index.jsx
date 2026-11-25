import React from 'react';
import Navbar from '../../components/Navbar';
import Main from './Main';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="bg-dark-950 min-h-screen text-gray-100 selection:bg-[#D3E97A] selection:text-black">
      <Navbar />
      <main>
        <Main />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
