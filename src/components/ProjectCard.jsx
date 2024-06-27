import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ name, description, githubLink }) => {
  return (
    <div className=" rounded-2xl shadow-sm shadow-violet-500 m-5 z-10">
      <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-violet-600 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-violet-500 before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center h-60 w-80 origin-bottom-right bg-violet-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
        <div className="z-10 flex flex-col items-center gap-5">
          <div className="text-center mt-4 p-3">
            <h3 className="text-3xl  text-white font-bold">{name}</h3>
            <p className="text-xl text-gray-400">{description}</p>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-50 mt-2">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
