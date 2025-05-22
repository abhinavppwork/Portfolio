import React, { useEffect, useRef } from 'react';
import './About.css';
import img from '../assets/Avatar/emo.svg';

function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section id='about' ref={ref} className='about fade-in'>
      <h1 className='heading-name'>About Me</h1>
      <div className="information">
        <div className="info">
          <p className="intro">
            I am an IT student specializing in full-stack development with a focus on the MERN stack. 
            My expertise includes building efficient and scalable web applications that deliver exceptional user experiences.
          </p>
          <p>
            Lumora: A platform designed to structure and access video lectures effectively, 
            combining React for the frontend, Node.js and Express for the backend, 
            with MongoDB for data storage. This project showcases my ability to 
            develop complete solutions from concept to deployment.
          </p>
          <p className="goal">
            My goal is to become a well-rounded full-stack developer and contribute meaningfully to the tech community. 
            I am always open to new opportunities and collaborations that drive innovation.
          </p>
        </div>
        
        <div className="image">
          <img src={img} alt="Profile avatar" />
          <div className="contacts-info">
            <a href="mailto:abhinavppwork@gmail.com" className="contact-link">Email</a>
            <a href="https://github.com/abhinavppwork" className="contact-link">GitHub</a>
            <a href="https://www.linkedin.com/in/abhinav-cheruku-46a224304/" className="contact-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
