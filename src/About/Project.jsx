import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import './Project.css';
import pythonLanguageConverter from '../assets/Projects/translator.png';
import lumora from '../assets/projects/lumora.png';
import rockPaperScissors from '../assets/projects/rock.png';

const projects = [
  {
    title: 'Python Language Converter',
    description: 'A Python-based language converter that supports multiple languages.',
    image: pythonLanguageConverter,
    link: 'https://github.com/abhinavppwork/Language-Translator', // Replace with project link
    github: 'https://github.com/abhinavppwork/Language-Translator', // Replace with GitHub repo link
  },
  {
    title: 'Lumora Learning Platform',
    description: 'A MERN stack learning platform with videos.',
    image: lumora,
    link: 'https://lumora-web.netlify.app', // Replace with project link
    github: 'https://github.com/abhinavppwork/Lumora', // Replace with GitHub repo link
  },
  {
    title: 'Rock, Paper, Scissors Game',
    description: 'A simple rock, paper, scissors game built with JavaScript.',
    image: rockPaperScissors,
    link: '#', // Replace with project link
    github: '#', // Replace with GitHub repo link
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