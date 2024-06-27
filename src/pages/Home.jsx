import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import VantaBackground from '../components/VantaBackground';

const Home = () => {
  return (
    <div className="relative h-full overflow-hidden ">
      <VantaBackground />
      <div className="relative z-10 ">
        <Navbar />
        <About />

        <Projects />
        
        
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
