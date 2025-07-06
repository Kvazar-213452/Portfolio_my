import React from 'react';

const About: React.FC = () => (
  <section id="about" className="about">
    <div className="container">
      <h2 className="section-title">About me</h2>
      <div className="about-content">
        <div className="about-left">
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-btn close"></div>
              <div className="terminal-btn minimize"></div>
              <div className="terminal-btn maximize"></div>
              <span style={{ color: '#888', marginLeft: '10px' }}>terminal</span>
            </div>
            <div className="terminal-content">
              <div className="terminal-line">
                <span className="terminal-prompt">Kvazar-213452:~$</span> whoami
              </div>
              <div className="terminal-line">Full-Stack Developer</div>
              <div className="terminal-line">
                <span className="terminal-prompt">Kvazar-213452:~$</span> ls skills/
              </div>
              <div className="terminal-line">node.js react.js mongodb express.js flater</div>
              <div className="terminal-line">typescript docker aws kubernetes</div>
              <div className="terminal-line">
                <span className="terminal-prompt">Kvazar-213452:~$</span> cat experience.txt
              </div>
              <div className="terminal-line">1+ years in web development</div>
              <div className="terminal-line">5+ successful projects</div>
              <div className="terminal-line">Passionate about clean code</div>
              <div className="terminal-line">
                <span className="terminal-prompt">Kvazar-213452:~$</span> █
              </div>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>
              I am a Full-Stack developer with 1 year of experience in building web and mobile applications on different architectures. I specialize in Node.js, the Flutter ecosystem, and modern frontend technologies.
            </p>
            <p>
              I have practical experience creating scalable and efficient applications that meet current business needs. I constantly improve my skills in both backend and frontend development, writing clean and maintainable code.
            </p>
            <p>
              I am interested in creating innovative solutions that enhance user experience and help businesses grow. I am skilled in working with REST APIs, state management, responsive design, and performance optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
