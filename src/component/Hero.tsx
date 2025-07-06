import React from 'react';

interface HeroProps {
  typedText: string;
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ typedText, scrollToSection }) => (
  <section id="home" className="hero">
    <div className="container">
      <div className="hero-content">
        <h1 className="hero-title">KVAZAR-213452</h1>
        <p className="hero-subtitle">{typedText}</p>
        <p className="hero-description">
          I create modern web applications with clean code and innovative solutions.
          I specialize in Node.js, React, Flater and modern technologies.
        </p>
        <div>
          <button className="btn" onClick={() => scrollToSection('projects')}>
            View projects
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
            Contact
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
