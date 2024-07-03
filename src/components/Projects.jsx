import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
      name: 'Together',
      description: 'Developed Together,a social media platform aimed at fostering authentic connections among users.',
      githubLink: 'https://github.com/krishna7054/together',
    },
    {
      name: 'Nazar',
      description: 'Developed a dynamic web application using Flask, a Python micro-framework, for building web applications.',
        githubLink: 'https://github.com/krishna7054/Nazar',
    },
    {
      name: 'Movie Library App',
      description: 'A movie library web application built with Node, Express, React and Tailwind.',
      githubLink: 'https://github.com/krishna7054/Movie-Library',
    },
    {
      name: 'Personal Bookshelf',
      description: 'Personal Bookshelf is a React application that allows users to search for books using the Open Library API.',
      githubLink: 'https://github.com/krishna7054/Personal-Bookshelf',
    },
    {
        name: 'Todo App',
        description: 'A simple Todo App built with React for the frontend and Node.js with Express and MongoDB for the backend.',
        githubLink: 'https://github.com/krishna7054/Todo-App',
      },
      
    // Add more projects here
  ];

const Projects = () => {
  return (
    <section id="projects" className="p-6 ">
      <div className="container mx-auto  p-6 ">
        <h2 className="text-5xl italic text-fuchsia-200 font-bold  mb-4 animate-bounce ">Projects</h2>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
