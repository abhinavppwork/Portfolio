import React, { useState, useEffect } from 'react';
import { 
  FaLocationArrow, 
  FaPhone, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSuccessMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);

      setTimeout(() => {
        setSuccessMessage('');
      }, 4000);
    }, 1500);
  };

  useEffect(() => {
    // Add animation classes when component mounts
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="contact-container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info animate-on-scroll">
            <div className="info-card">
              <h3>Get In Touch</h3>
              <p>I'm always excited to work on new projects and collaborate with creative minds.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <FaLocationArrow className="contact-icon" />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">Hyderabad, Telangana</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <FaPhone className="contact-icon" />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+91 7993770788</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <FaEnvelope className="contact-icon" />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">abhinav.cheruku007@gmail.com</span>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <a 
                  href="https://www.linkedin.com/in/abhinav-cheruku-46a224304/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin className="social-icon" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/abhinavppwork" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub className="social-icon" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form animate-on-scroll">
            <div className="form-card">
              <form onSubmit={handleSubmit} className="modern-form">
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                  <label className="form-label">Your Name</label>
                </div>
                
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                  <label className="form-label">Email Address</label>
                </div>
                
                <div className="input-group">
                  <textarea
                    name="message"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    rows="6"
                  ></textarea>
                  <label className="form-label">Your Message</label>
                </div>
                
                <button 
                  type="submit" 
                  className={`send-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="btn-icon" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
              
              {successMessage && (
                <div className="success-message">
                  <FaCheckCircle className="success-icon" />
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;