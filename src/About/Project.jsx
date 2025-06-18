import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import './Project.css';
import pythonLanguageConverter from '../assets/Projects/library.png';
import lumora from '../assets/projects/lumora.png';
import rockPaperScissors from '../assets/projects/chat.png';

const projects = [
  {
    title: 'Digital Academic Library System',
    description: 'Structured digital library for academic resources.',
    image: pythonLanguageConverter,
    link: 'https://digital-library-delta.vercel.app/', 
    github: 'https://github.com/abhinavppwork/Digital-Library', 
  },
  {
    title: 'Lumora Learning Platform',
    description: 'A MERN stack learning platform with videos.',
    image: lumora,
    link: 'https://lumora-web.netlify.app',
    github: 'https://github.com/abhinavppwork/Lumora', 
  },
  {
    title: 'Chatting Application Using Socket.io',
    description: 'A real-time chatting application built with Socket.io.',
    image: rockPaperScissors,
    link: 'https://github.com/abhinavppwork/ChatterBox---ChattingApplication', 
    github: 'https://github.com/abhinavppwork/ChatterBox---ChattingApplication', 
  },
];

function Project() {
  return (
    <section id='projects' className="projects-section">
      <h2 className="projects-title">
        <span>&lt;</span> Projects <span>&gt;</span>
      </h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
                <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="github-icon" /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;