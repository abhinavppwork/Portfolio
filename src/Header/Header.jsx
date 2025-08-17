import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(timeString);
    };

    window.addEventListener('scroll', handleScroll);
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    closeMobileMenu();
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.header') && !event.target.closest('.nav')) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
          <div className="timer">{currentTime}</div>
        </nav>
        
        <button 
          className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
      </header>
      
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="nav-overlay active"
          onClick={closeMobileMenu}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Header;