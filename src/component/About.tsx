import React, { useState, useEffect, useRef } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const terminalLines = [
    { type: 'command', text: 'whoami' },
    { type: 'output', text: 'Full-Stack Developer & Problem Solver' },
    { type: 'command', text: 'ls skills/' },
    { type: 'output', text: 'node.js react.js mongodb express.js flutter' },
    { type: 'output', text: 'typescript docker aws kubernetes git' },
    { type: 'command', text: 'cat experience.txt' },
    { type: 'output', text: '1+ years in web development' },
    { type: 'output', text: '5+ successful projects delivered' },
    { type: 'output', text: 'Passionate about clean code & innovation' },
    { type: 'command', text: 'echo "Ready for new challenges!"' },
    { type: 'output', text: 'Ready for new challenges!' }
  ];

  const stats = [
    { number: '2+', label: 'Years Experience', icon: '🎯' },
    { number: '5+', label: 'Projects Completed', icon: '🚀' },
    { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '24/7', label: 'Learning Mode', icon: '📚' }
  ];

  const skills = [
    { name: 'Node.js', level: 90, color: '#68d391' },
    { name: 'React', level: 90, color: '#4fc3f7' },
    { name: 'Java', level: 75, color: '#81c784' },
    { name: 'TypeScript', level: 90, color: '#64b5f6' },
    { name: 'MongoDB', level: 95, color: '#a5d6a7' },
    { name: 'Python', level: 90, color: '#90caf9' },
    { name: 'PHP', level: 75, color: '#81c784' },
    { name: 'MySQL', level: 85, color: '#64b5f6' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && currentLineIndex < terminalLines.length) {
      const line = terminalLines[currentLineIndex];
      const isCommand = line.type === 'command';
      const displayText = isCommand ? `Kvazar-213452:~$ ${line.text}` : line.text;
      
      setIsTyping(true);
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex < displayText.length) {
          setTerminalText(prev => prev + displayText[charIndex]);
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          
          setTimeout(() => {
            setTerminalText(prev => prev + '\n');
            setCurrentLineIndex(prev => prev + 1);
          }, 500);
        }
      }, isCommand ? 100 : 50);

      return () => clearInterval(typeInterval);
    }
  }, [isVisible, currentLineIndex]);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <br />
        <div className="contact-content">
          <div className="contact-header">
            <div className="contact-badge">
              <span className="badge-text">About</span>
            </div>
            <h2 className="section-title">
              <span className="title-main">About-</span>
              <span className="title-accent"> me</span>
            </h2>
            <p className="section-subtitle">
              A brief description of my knowledge
            </p>
          </div>
      </div>
    <br />
        <div className="about-content">
          <div className="about-left">
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-controls">
                  <div className="terminal-btn close"></div>
                  <div className="terminal-btn minimize"></div>
                  <div className="terminal-btn maximize"></div>
                </div>
                <div className="terminal-title">
                  <span>kvazar@portfolio:~</span>
                </div>
                <div className="terminal-menu">
                  <span>⚡</span>
                </div>
              </div>
              <div className="terminal-content">
                <pre className="terminal-text">
                  {terminalText}
                  {isTyping && <span className="cursor">█</span>}
                </pre>
              </div>
            </div>

            <div className="skills-container">
              <h3 className="skills-title">Technical Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          backgroundColor: skill.color,
                          animationDelay: `${index * 0.2}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="about-text">
              <div className="profile-header">
                <div className="profile-avatar">
                  <div className="avatar-placeholder">
                    <span className="avatar-text">K</span>
                  </div>
                  <div className="status-indicator"></div>
                </div>
                <div className="profile-info">
                  <h3 className="profile-name">Kvazar-213452</h3>
                  <p className="profile-role">Full-Stack Developer</p>
                  <div className="profile-location">
                    <span className="location-icon">📍</span>
                    <span>Remote / Available Worldwide</span>
                  </div>
                </div>
              </div>

              <div className="about-description">
                <h3>Who am I?</h3>
                <p>
                  I am a passionate Full-Stack developer with 1+ years of experience in building 
                  robust web and mobile applications. I specialize in modern JavaScript ecosystem, 
                  Flutter development, and cloud technologies.
                </p>
                <p>
                  My expertise lies in creating scalable applications that solve real business problems. 
                  I believe in writing clean, maintainable code and following best practices to deliver 
                  high-quality solutions.
                </p>
                <p>
                  I'm constantly learning and adapting to new technologies, with a focus on performance 
                  optimization, user experience, and innovative problem-solving approaches.
                </p>
              </div>

              {/* Stats */}
              <div className="stats-grid">
                {stats.map((stat) => (
                  <div key={stat.label} className="stat-item">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;