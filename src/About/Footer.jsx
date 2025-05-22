import React from 'react';
import './Footer.css'; // Import the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Subtle gradient divider */}
      <div className="footer-divider"></div>
      
      {/* Footer content */}
      <div className="footer-container">
        <p className="footer-copyright">
          © Developed by <strong className="footer-name">Abhinav Cheruku</strong>
        </p>
        <p className="footer-message">
          I hope you enjoyed scrolling through it as much as I enjoyed creating it!
        </p>
      </div>
    </footer>
  );
};

export default Footer;