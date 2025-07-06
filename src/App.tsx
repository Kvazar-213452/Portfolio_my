import React, { useState, useEffect, useRef } from 'react';

const Portfolio = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const observerRef = useRef(null);

  const fullText = 'Full-Stack Node.js Developer';

  useEffect(() => {
    // Typing animation
    setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      const typeWriter = () => {
        if (i < fullText.length) {
          setTypedText(fullText.slice(0, i + 1));
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      typeWriter();
    }, 1000);

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elementsToObserve = document.querySelectorAll('.animate-on-scroll');
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'Node.js', level: 'Expert Level' },
    { name: 'React', level: 'Advanced' },
    { name: 'MongoDB', level: 'Advanced' },
    { name: 'Express.js', level: 'Expert Level' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Docker', level: 'Intermediate' },
    { name: 'AWS', level: 'Intermediate' },
    { name: 'GraphQL', level: 'Advanced' }
  ];

  const projects = [
    {
      icon: '🚀',
      title: 'Microservices API',
      description: 'Розподілена система мікросервісів з Docker контейнерами, API Gateway та автоматичним масштабуванням.',
      tech: ['Node.js', 'Docker', 'Kubernetes', 'Redis'],
      links: [
        { label: 'GitHub →', url: '#' },
        { label: 'Live Demo →', url: '#' }
      ]
    },
    {
      icon: '⚡',
      title: 'Real-time Analytics',
      description: 'Платформа для аналітики в реальному часі з WebSocket з\'єднаннями та машинним навчанням.',
      tech: ['Socket.io', 'React', 'TensorFlow.js', 'PostgreSQL'],
      links: [
        { label: 'GitHub →', url: '#' },
        { label: 'Live Demo →', url: '#' }
      ]
    },
    {
      icon: '🎯',
      title: 'GraphQL Gateway',
      description: 'Універсальний GraphQL Gateway для об\'єднання множинних API та оптимізації запитів.',
      tech: ['GraphQL', 'Apollo Server', 'Node.js', 'MongoDB'],
      links: [
        { label: 'GitHub →', url: '#' },
        { label: 'Documentation →', url: '#' }
      ]
    },
    {
      icon: '🔐',
      title: 'Auth Service',
      description: 'Сервіс автентифікації та авторизації з підтримкою OAuth2, JWT токенів та двофакторної автентифікації.',
      tech: ['Node.js', 'JWT', 'OAuth2', 'Redis'],
      links: [
        { label: 'GitHub →', url: '#' },
        { label: 'API Docs →', url: '#' }
      ]
    }
  ];

  const contacts = [
    { icon: '📧', label: 'Email', value: 'maksym.kovalenko@email.com', href: 'mailto:maksym.kovalenko@email.com' },
    { icon: '📱', label: 'Телефон', value: '+38 (050) 123-45-67', href: 'tel:+380501234567' },
    { icon: '💻', label: 'GitHub', value: 'github.com/maksymkovalenko', href: 'https://github.com/maksymkovalenko' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/maksymkovalenko', href: 'https://linkedin.com/in/maksymkovalenko' }
  ];

  return (
    <div className="portfolio">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio {
          font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #0a0a0a;
          color: #ffffff;
          overflow-x: hidden;
          line-height: 1.6;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes neonGlow {
          0%, 100% { 
            text-shadow: 0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 15px #00ff88;
          }
          50% { 
            text-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88;
          }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes blink {
          0%, 50% { border-color: #00ff88; }
          51%, 100% { border-color: transparent; }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        section {
          min-height: 100vh;
          padding: 100px 2rem 2rem;
          position: relative;
          z-index: 2;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          text-align: center;
          animation: slideInLeft 1s ease-out;
        }

        .hero-title {
          font-size: 4rem;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #00ff88, #00ccff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          animation: neonGlow 3s ease-in-out infinite;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #cccccc;
          margin-bottom: 2rem;
          position: relative;
          display: inline-block;
          overflow: hidden;
          border-right: 3px solid #00ff88;
          animation: blink 1s infinite;
          min-height: 2rem;
        }

        .hero-description {
          font-size: 1.2rem;
          color: #888888;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .btn {
          display: inline-block;
          padding: 15px 35px;
          background: transparent;
          color: #00ff88;
          text-decoration: none;
          border: 2px solid #00ff88;
          border-radius: 0;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          margin: 0 10px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #00ff88;
          transition: left 0.3s ease;
          z-index: -1;
        }

        .btn:hover::before {
          left: 0;
        }

        .btn:hover {
          color: #0a0a0a;
          box-shadow: 0 0 20px #00ff88;
        }

        .btn-secondary {
          border-color: #00ccff;
          color: #00ccff;
        }

        .btn-secondary::before {
          background: #00ccff;
        }

        .btn-secondary:hover {
          box-shadow: 0 0 20px #00ccff;
        }

        .about {
          background: #111111;
          border-top: 1px solid rgba(0, 255, 136, 0.2);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-left {
          animation: slideInLeft 1s ease-out;
        }

        .about-right {
          animation: slideInRight 1s ease-out;
        }

        .terminal {
          background: #000000;
          border: 1px solid #00ff88;
          border-radius: 5px;
          padding: 20px;
          font-family: 'Courier New', monospace;
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
        }

        .terminal-header {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid #333;
        }

        .terminal-btn {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin-right: 8px;
        }

        .terminal-btn.close { background: #ff5555; }
        .terminal-btn.minimize { background: #ffaa00; }
        .terminal-btn.maximize { background: #00ff88; }

        .terminal-content {
          color: #00ff88;
          font-size: 14px;
        }

        .terminal-line {
          margin-bottom: 5px;
          opacity: 0;
          animation: slideInLeft 0.5s ease-out forwards;
        }

        .terminal-line:nth-child(1) { animation-delay: 2s; }
        .terminal-line:nth-child(2) { animation-delay: 2.5s; }
        .terminal-line:nth-child(3) { animation-delay: 3s; }
        .terminal-line:nth-child(4) { animation-delay: 3.5s; }
        .terminal-line:nth-child(5) { animation-delay: 4s; }
        .terminal-line:nth-child(6) { animation-delay: 4.5s; }
        .terminal-line:nth-child(7) { animation-delay: 5s; }
        .terminal-line:nth-child(8) { animation-delay: 5.5s; }
        .terminal-line:nth-child(9) { animation-delay: 6s; }
        .terminal-line:nth-child(10) { animation-delay: 6.5s; }

        .terminal-prompt {
          color: #00ccff;
        }

        .about-text h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .about-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          color: #cccccc;
        }

        .skills {
          background: #0a0a0a;
          border-top: 1px solid rgba(0, 255, 136, 0.2);
        }

        .skills-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .skills-text {
          animation: slideInLeft 1s ease-out;
        }

        .skills-text h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #00ff88;
        }

        .skills-text p {
          color: #cccccc;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          animation: slideInRight 1s ease-out;
        }

        .skill-item {
          background: #1a1a1a;
          border: 1px solid #333;
          padding: 1.5rem;
          border-radius: 0;
          transition: all 0.3s ease;
          position: relative;
        }

        .skill-item:hover {
          border-color: #00ff88;
          box-shadow: 0 0 15px rgba(0, 255, 136, 0.3);
          transform: translateY(-5px);
        }

        .skill-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: #00ff88;
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .skill-item:hover::before {
          transform: scaleY(1);
        }

        .skill-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .skill-level {
          color: #00ff88;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .projects {
          background: #111111;
          border-top: 1px solid rgba(0, 255, 136, 0.2);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: #1a1a1a;
          border: 1px solid #333;
          border-radius: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
        }

        .project-card:hover {
          border-color: #00ff88;
          box-shadow: 0 10px 30px rgba(0, 255, 136, 0.2);
          transform: translateY(-10px);
        }

        .project-header {
          background: #000000;
          padding: 1rem;
          border-bottom: 1px solid #333;
          display: flex;
          align-items: center;
        }

        .project-icon {
          font-size: 2rem;
          margin-right: 1rem;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-desc {
          color: #cccccc;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .project-tech {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .tech-tag {
          background: #00ff88;
          color: #000000;
          padding: 0.3rem 0.8rem;
          border-radius: 0;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          color: #00ccff;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          color: #ffffff;
          text-shadow: 0 0 10px #00ccff;
        }

        .contact {
          background: #0a0a0a;
          border-top: 1px solid rgba(0, 255, 136, 0.2);
        }

        .contact-content {
          text-align: center;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .contact-item {
          background: #1a1a1a;
          border: 1px solid #333;
          padding: 2rem;
          border-radius: 0;
          transition: all 0.3s ease;
          text-align: center;
          cursor: pointer;
        }

        .contact-item:hover {
          border-color: #00ff88;
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
          transform: translateY(-5px);
        }

        .contact-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #00ff88;
        }

        .contact-label {
          font-size: 1.1rem;
          color: #ffffff;
          margin-bottom: 0.5rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .contact-value {
          color: #cccccc;
        }

        .contact-value a {
          color: #00ccff;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-value a:hover {
          color: #ffffff;
          text-shadow: 0 0 10px #00ccff;
        }

        .section-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 3rem;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 2px;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 2px;
          background: #00ff88;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .about-content,
          .skills-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .skills-grid,
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">KVAZAR-213452</h1>
            <p className="hero-subtitle">
              {typedText}
            </p>
            <p className="hero-description">
              Створюю сучасні веб-додатки з чистим кодом та інноваційними рішеннями. 
              Спеціалізуюсь на Node.js, React та сучасних технологіях.
            </p>
            <div>
              <button className="btn" onClick={() => scrollToSection('projects')}>
                Переглянути проєкти
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Зв'язатися
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">Про мене</h2>
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
                    <span className="terminal-prompt">maksym@developer:~$</span> whoami
                  </div>
                  <div className="terminal-line">Full-Stack Developer</div>
                  <div className="terminal-line">
                    <span className="terminal-prompt">maksym@developer:~$</span> ls skills/
                  </div>
                  <div className="terminal-line">node.js react.js mongodb express.js</div>
                  <div className="terminal-line">typescript docker aws kubernetes</div>
                  <div className="terminal-line">
                    <span className="terminal-prompt">maksym@developer:~$</span> cat experience.txt
                  </div>
                  <div className="terminal-line">5+ years in web development</div>
                  <div className="terminal-line">20+ successful projects</div>
                  <div className="terminal-line">Passionate about clean code</div>
                  <div className="terminal-line">
                    <span className="terminal-prompt">maksym@developer:~$</span> █
                  </div>
                </div>
              </div>
            </div>
            <div className="about-right">
              <div className="about-text">
                <h2>Хто я?</h2>
                <p>
                  Досвідчений Full-Stack розробник з понад 5 роками досвіду у створенні веб-додатків. 
                  Спеціалізуюсь на Node.js екосистемі та сучасних фронтенд технологіях.
                </p>
                <p>
                  Маю пристрасть до написання чистого, масштабованого коду та створення продуктів, 
                  які справді вирішують проблеми користувачів. Постійно вивчаю нові технології та 
                  слідкую за трендами у веб-розробці.
                </p>
                <p>
                  Працював як у стартапах, так і в корпоративному середовищі, що дало мені унікальний 
                  досвід роботи з різними типами проєктів та командами.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Навички</h2>
          <div className="skills-container">
            <div className="skills-text">
              <h3>Технічний стек</h3>
              <p>
                Володію широким спектром сучасних технологій для розробки повнофункціональних веб-додатків. 
                Від серверної логіки до користувацького інтерфейсу - створюю комплексні рішення.
              </p>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item animate-on-scroll">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-level">{skill.level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Проєкти</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card animate-on-scroll">
                <div className="project-header">
                  <div className="project-icon">{project.icon}</div>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <div className="project-content">
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.links.map((link, linkIndex) => (
                      <a key={linkIndex} href={link.url} className="project-link">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Контакти</h2>
            <div className="contact-grid">
              {contacts.map((contact, index) => (
                <div 
                  key={index} 
                  className="contact-item animate-on-scroll"
                  onClick={() => window.open(contact.href, '_blank')}
                >
                  <div className="contact-icon">{contact.icon}</div>
                  <div className="contact-label">{contact.label}</div>
                  <div className="contact-value">
                    <a href={contact.href}>{contact.value}</a>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '3rem' }}>
              <button className="btn" onClick={() => scrollToSection('home')}>
                Повернутися на верх
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;