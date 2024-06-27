import React from 'react';
import Typewriter from '../components/Typewriter';

const About = () => {
    const texts = [
        "Welcome to my portfolio!",
        "I am a web developer with experience in building modern web applications using MERN stack.",
        "Feel free to explore my projects."
      ];
  return (
    <section id="about" className="pt-6 mt-10 mb-5 ">
      <div className="container mx-auto p-6 ">
        <h2 className="text-5xl italic text-fuchsia-200 font-bold  mb-4 animate-bounce  ">About Me</h2>
        <Typewriter texts={texts} />
      </div>
    </section>
  );
};

export default About;
