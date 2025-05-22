import React, { useEffect, useRef } from 'react';
import './Skills.css';
import java from '../assets/skills/java.png';
import javascript from '../assets/skills/javascript.webp';
import bootstrap from '../assets/skills/bootstrap.webp';
import git from '../assets/skills/git.webp';
import github from '../assets/skills/github.webp';
import mysql from '../assets/skills/mysql.webp';
import nodejs from '../assets/skills/nodejs.webp';
import python from '../assets/skills/python.webp';
import react from '../assets/skills/react.webp';
import tailwind from '../assets/skills/tailwind.webp';

const skills = [
  { name: "react", img: react },
  { name: "nodejs", img: nodejs },
  { name: "tailwind", img: tailwind },
  { name: "JavaScript", img: javascript },
  { name: "Bootstrap", img: bootstrap },
  { name: "python", img: python },
  { name: "git", img: git },
  { name: "github", img: github },
  { name: "mysql", img: mysql },
  { name: "java", img: java },
];

function Skills() {
  const ref = useRef(null); // Create a reference for the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add visible class when in viewport
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <section id='skills' ref={ref} className="skills-section fade-in"> {/* Apply the ref and animation class */}
        <h2 className="skills-title">
          <span>&lt;</span> Skills <span>&gt;</span>
        </h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.img} alt={skill.name} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
