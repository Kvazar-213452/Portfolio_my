import React, { useState, useEffect } from 'react';

interface HeroProps {
  typedText: string;
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ typedText, scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [particleCount] = useState(50);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Generate particles for background effect
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 0.5 + 0.1,
  }));

  return (
    <section id="home" className="hero">
      {/* Animated background particles */}
      <div className="particles-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.id * 0.1}s`,
              animationDuration: `${20 + particle.speed * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Background grid */}
      <div className="grid-overlay" />

      {/* Main content */}
      <div className="container">
        <div className={`hero-content ${isVisible ? 'animate-in' : ''}`}>
          <div className="hero-badge">
            <span className="badge-text">FULL STACK DEVELOPER</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-main">KVAZAR</span>
            <span className="title-accent">-213452</span>
          </h1>
          
          <div className="hero-subtitle-container">
            <p className="hero-subtitle">{typedText}</p>
          </div>
          
          <p className="hero-description">
            I create modern web applications with clean code and innovative solutions.
            I specialize in <span className="highlight">Node.js</span>, <span className="highlight">React</span>, 
            <span className="highlight">Flutter</span> and modern technologies.
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary" 
              onClick={() => scrollToSection('projects')}
            >
              <span className="btn-text">View Projects</span>
              <div className="btn-glow" />
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => scrollToSection('contact')}
            >
              <span className="btn-text">Contact Me</span>
              <div className="btn-glow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;