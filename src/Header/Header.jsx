import { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/Logo/f5.png";

export default function Header() {
  const [time, setTime] = useState(new Date());
  const [activeNav, setActiveNav] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Scroll event listener to update header transparency
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle nav click and close mobile menu
  const handleNavClick = (navId) => {
    setActiveNav(navId);
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav') && !event.target.closest('.mobile-toggle')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigation */}
      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
        <a
          href="#home"
          className={activeNav === "#home" ? "active" : ""}
          onClick={() => handleNavClick("#home")}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeNav === "#about" ? "active" : ""}
          onClick={() => handleNavClick("#about")}
        >
          About
        </a>
        <a
          href="#skills"
          className={activeNav === "#skills" ? "active" : ""}
          onClick={() => handleNavClick("#skills")}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={activeNav === "#projects" ? "active" : ""}
          onClick={() => handleNavClick("#projects")}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={activeNav === "#contact" ? "active" : ""}
          onClick={() => handleNavClick("#contact")}
        >
          Contact
        </a>

        {/* Live Timer */}
        <div className="timer">{time.toLocaleTimeString()}</div>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button 
        className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
    </header>
  );
}