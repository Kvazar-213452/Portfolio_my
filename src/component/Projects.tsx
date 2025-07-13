import React, { useState, useEffect } from 'react';

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  icon: string;
  title: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  fullDescription?: string;
  features?: string[];
  images?: string[];
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      projects.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, index * 200);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [projects]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  return (
    <section id="projects" className="projects">
      {/* Background effects */}
      <div className="projects-bg">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </div>
      
      <div className="projects-grid-overlay" />
      
      <div className="container">
        <div className="projects-header">
          <div className="section-badge">
            <span className="badge-text">MY WORK</span>
          </div>
          <h2 className="section-title">
            <span className="title-main">Featured-</span>
            <span className="title-accent">Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore some of my recent work and creative solutions
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${visibleCards.includes(index) ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => openModal(project)}
            >
              <div className="project-card-inner">
                <div className="project-header">
                  <div className="project-icon">
                    <span className="icon-content">{project.icon}</span>
                    <div className="icon-glow" />
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                
                <div className="project-content">
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                        <div className="tech-tag-glow" />
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="link-text">{link.label}</span>
                        <div className="link-arrow">→</div>
                        <div className="link-glow" />
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="project-card-border" />
                <div className="click-overlay">
                  <span className="click-text"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-icon">
                <span className="icon-content">{selectedProject.icon}</span>
                <div className="icon-glow" />
              </div>
              <div className="modal-title-section">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <div className="modal-tech">
                  {selectedProject.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button className="modal-close" onClick={closeModal}>
                <span>×</span>
              </button>
            </div>

            <div className="modal-content">
              <div className="modal-description">
                <h4>About this project</h4>
                <p>{selectedProject.fullDescription || selectedProject.description}</p>
              </div>

              {selectedProject.features && (
                <div className="modal-features">
                  <h4>Key Features</h4>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-links">
                <h4>Project Links</h4>
                <div className="links-container">
                  {selectedProject.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className="modal-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="link-text">{link.label}</span>
                      <div className="link-arrow">→</div>
                      <div className="link-glow" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        .projects {
          padding: 8rem 0;
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
        }

        .projects-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #00ff88, transparent);
          top: 10%;
          left: 10%;
          animation: float-orb 20s ease-in-out infinite;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #00ccff, transparent);
          top: 60%;
          right: 10%;
          animation: float-orb 25s ease-in-out infinite reverse;
        }

        .orb-3 {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, #ff6b6b, transparent);
          bottom: 20%;
          left: 50%;
          animation: float-orb 30s ease-in-out infinite;
        }

        @keyframes float-orb {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }

        .projects-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 255, 136, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 1;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(0, 255, 136, 0.1);
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: 25px;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .badge-text {
          font-size: 0.9rem;
          color: #00ff88;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 1rem;
          font-weight: 900;
          background: linear-gradient(45deg, #ffffff, #cccccc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #888888;
          max-width: 600px;
          margin: 0 auto;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .project-card {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .project-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card-inner {
          background: rgba(15, 15, 35, 0.6);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .project-card-inner:hover {
          transform: translateY(-10px);
          background: rgba(15, 15, 35, 0.8);
          border-color: rgba(0, 255, 136, 0.3);
        }

        .project-card-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 20px;
          background: linear-gradient(45deg, #00ff88, #00ccff, #ff6b6b, #00ff88);
          background-size: 300% 300%;
          animation: gradient-shift 6s ease infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .project-card-inner:hover .project-card-border {
          opacity: 0.3;
        }

        .click-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 255, 136, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 20px;
        }

        .click-text {
          color: #00ff88;
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .project-card-inner:hover .click-overlay {
          opacity: 1;
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .project-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .project-icon {
          width: 60px;
          height: 60px;
          background: rgba(0, 255, 136, 0.1);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .icon-content {
          font-size: 1.5rem;
          z-index: 2;
          position: relative;
        }

        .icon-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #00ff88, #00ccff);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card-inner:hover .icon-glow {
          opacity: 0.2;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .project-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .project-desc {
          color: #cccccc;
          line-height: 1.6;
          font-size: 1rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          padding: 0.5rem 1rem;
          background: rgba(0, 255, 136, 0.1);
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: 20px;
          font-size: 0.9rem;
          color: #00ff88;
          font-weight: 500;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: rgba(0, 255, 136, 0.2);
          transform: translateY(-2px);
        }

        .tech-tag-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #00ff88, #00ccff);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tech-tag:hover .tech-tag-glow {
          opacity: 0.1;
        }

        .project-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          color: #ffffff;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .project-link:hover {
          background: rgba(0, 255, 136, 0.1);
          border-color: rgba(0, 255, 136, 0.3);
          transform: translateY(-2px);
        }

        .link-text {
          position: relative;
          z-index: 2;
        }

        .link-arrow {
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .project-link:hover .link-arrow {
          transform: translateX(4px);
        }

        .link-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #00ff88, #00ccff);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-link:hover .link-glow {
          opacity: 0.1;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
          opacity: 0;
          animation: fadeIn 0.3s ease forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .modal-container {
          background: rgba(15, 15, 35, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 25px;
          border: 1px solid rgba(0, 255, 136, 0.3);
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          transform: scale(0.9);
          animation: modalIn 0.3s ease forwards;
        }

        @keyframes modalIn {
          to { 
            transform: scale(1);
          }
        }

        .modal-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 2rem 2rem 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .modal-icon {
          width: 80px;
          height: 80px;
          background: rgba(0, 255, 136, 0.1);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }

        .modal-icon .icon-content {
          font-size: 2rem;
          z-index: 2;
          position: relative;
        }

        .modal-icon .icon-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #00ff88, #00ccff);
          opacity: 0.2;
        }

        .modal-title-section {
          flex: 1;
        }

        .modal-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 1rem 0;
        }

        .modal-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .modal-close {
          background: none;
          border: none;
          color: #ffffff;
          font-size: 2rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 10px;
          transition: all 0.3s ease;
          line-height: 1;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.1);
        }

        .modal-content {
          padding: 2rem;
        }

        .modal-description {
          margin-bottom: 2rem;
        }

        .modal-description h4 {
          color: #00ff88;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .modal-description p {
          color: #cccccc;
          line-height: 1.6;
          font-size: 1rem;
        }

        .modal-features {
          margin-bottom: 2rem;
        }

        .modal-features h4 {
          color: #00ff88;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .modal-features ul {
          list-style: none;
          padding: 0;
        }

        .modal-features li {
          color: #cccccc;
          padding: 0.5rem 0;
          position: relative;
          padding-left: 1.5rem;
        }

        .modal-features li:before {
          content: "→";
          color: #00ff88;
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .modal-links h4 {
          color: #00ff88;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .links-container {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .modal-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          color: #ffffff;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .modal-link:hover {
          background: rgba(0, 255, 136, 0.1);
          border-color: rgba(0, 255, 136, 0.3);
          transform: translateY(-2px);
        }

        .modal-link .link-text {
          position: relative;
          z-index: 2;
        }

        .modal-link .link-arrow {
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .modal-link:hover .link-arrow {
          transform: translateX(4px);
        }

        .modal-link .link-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #00ff88, #00ccff);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .modal-link:hover .link-glow {
          opacity: 0.1;
        }

        @media (max-width: 768px) {
          .projects {
            padding: 4rem 0;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .project-card-inner {
            padding: 1.5rem;
          }
          
          .container {
            padding: 0 1rem;
          }

          .modal-overlay {
            padding: 1rem;
          }

          .modal-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            padding: 1.5rem;
          }

          .modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
          }

          .modal-content {
            padding: 1.5rem;
          }

          .modal-title {
            font-size: 1.5rem;
          }

          .links-container {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;