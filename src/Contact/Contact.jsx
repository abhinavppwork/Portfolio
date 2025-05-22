import React, { useState } from 'react';
import { 
  FaLocationArrow, 
  FaPhone, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub 
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Show success message
    setSuccessMessage('Submitted Successfully!');

    // Clear the form after submission
    setFormData({ name: '', email: '', message: '' });

    // Hide the message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact</h2>
          <p>Let's discuss something cool together</p>
          <div className="contact-details">
            <div className="contact-item">
              <FaLocationArrow className="contact-icon" />
              <span>Hyderabad, Telangana</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+91 7993770788</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>abhinav.cheruku007@gmail.com</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/abhinav-cheruku-46a224304/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/abhinavppwork" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="send-btn">Send</button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
