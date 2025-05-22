import React, { useEffect, useRef } from 'react';
import './Home.css';
import r1 from '../assets/Avatar/c1.jpg';

export default function Home() {
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
      { threshold: 0.9 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section id='home' ref={ref} className='home fade-in'>
      <div className="svg-img">
        <img src={r1} alt="Avatar" />
      </div>
      <div className="about-me">
        <h1>Hi, I'm 👋</h1>
        <h1>Abhinav Ch,</h1>
        <p>
          A passionate IT student currently in my second year, exploring the world of 
          web development and AI. I specialize in React.js for front-end and Python, 
          constantly building and debugging projects to level up my skills.
        </p>
        <div className="btn-container">
          <button className="spotify-btn">My resume</button>
          <button className="transparent-btn">Learn more</button>
        </div>
      </div>
    </section>
  );
}
