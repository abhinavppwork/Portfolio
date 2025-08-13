import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Project.css';
import pythonLanguageConverter from '../assets/Projects/library.png';
import lumora from '../assets/projects/lumora.png';
import rockPaperScissors from '../assets/projects/chat.png';

const projects = [
  {
    title: 'Digital Academic Library System',
    description: 'Structured digital library for academic resources with advanced search and categorization.',
    image: pythonLanguageConverter,
    link: 'https://digital-library-delta.vercel.app/', 
    github: 'https://github.com/abhinavppwork/Digital-Library',
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Lumora Learning Platform',
    description: 'A comprehensive MERN stack learning platform featuring interactive video content.',
    image: lumora,
    link: 'https://lumora-web.netlify.app',
    github: 'https://github.com/abhinavppwork/Lumora',
    tech: ['MERN Stack', 'Video Streaming', 'Authentication']
  },
  {
    title: 'ChatterBox Real-time Chat',
    description: 'A modern real-time chatting application built with Socket.io for seamless communication.',
    image: rockPaperScissors,
    link: 'https://github.com/abhinavppwork/ChatterBox---ChattingApplication', 
    github: 'https://github.com/abhinavppwork/ChatterBox---ChattingApplication',
    tech: ['Socket.io', 'Express', 'Real-time']
  },
];

function Project() {
  return (
    <section id='projects' className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A collection of projects showcasing my development journey and technical expertise
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.link} 
                      className="project-link live-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="View Live Project"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a 
                      href={project.github} 
                      className="project-link github-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="View Source Code"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;