import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './HeroSection.css';
import me from './myphoto.jpg'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="text-content">
        <h1>Hi, It's <span>Jayarani</span></h1>
        <h2>I'm a <span>Frontend Developer</span></h2>
        <p>A full-stack developer skilled in creating scalable, user-friendly web applications.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/jayarani-m-28b9b9297/"><FaLinkedin /></a>
          <a href="https://github.com/JAYARANIMANIMRAN"><FaGithub /></a>
          <a href="https://x.com/Jayarani2005"><FaTwitter /></a>
        </div>
        <div className="buttons">
          
          
        </div>
      </div>
      <div className="image-content">
        <img src={me} alt="Jayarani" className="profile-image" />
      </div>
    </section>
  );
}

export default HeroSection;
