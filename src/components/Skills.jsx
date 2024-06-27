import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';

const skills = {
  languages: [
    { name: 'C++', icon: faCode },
    { name: 'C', icon: faCode },
    { name: 'Python', icon: faPython },
    { name: 'MySQL', icon: faDatabase },
    { name: 'JavaScript', icon: faJs },
    { name: 'TypeScript', icon: faCode },
  ],
  webTools: [
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3Alt },
    { name: 'Bootstrap', icon: faCode },
    { name: 'Tailwind CSS', icon: faCode },
    { name: 'ReactJS', icon: faReact },
    { name: 'NodeJS', icon: faNodeJs },
    { name: 'Flask', icon: faCode },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="p-6">
      <div className="container mx-auto p-6">
        <h2 className="text-5xl text-fuchsia-200 font-bold mb-2 animate-bounce">Skills</h2>
        <div className="mb-8">
          <h3 className="text-3xl text-violet-200 font-semibold flex justify-center mb-6">Languages</h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {skills.languages.map((skill, index) => (
              <div
                key={index}
                className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-50 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
              >
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute blur z-10 fill-sky-600 duration-500 group-hover:blur-none group-hover:scale-105"
                >
                  <path
                    transform="translate(100 100)"
                    d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                  ></path>
                </svg>

                <div className="z-20 flex flex-col justify-center items-center">
                  <FontAwesomeIcon icon={skill.icon} size="5x" className="text-yellow-200 mb-2" />
                  <span className="text-3xl font-semibold text-gray-900">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl text-violet-200 font-semibold mb-2 flex justify-center">Web Tools/Frameworks</h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {skills.webTools.map((skill, index) => (
              <div
                key={index}
                className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-50 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
              >
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute blur z-10 fill-sky-600 duration-500 group-hover:blur-none group-hover:scale-105"
                >
                  <path
                    transform="translate(100 100)"
                    d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                  ></path>
                </svg>

                <div className="z-20 flex flex-col justify-center items-center">
                  <FontAwesomeIcon icon={skill.icon} size="5x" className="text-yellow-200 mb-2" />
                  <span className="text-3xl font-semibold text-gray-900">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
