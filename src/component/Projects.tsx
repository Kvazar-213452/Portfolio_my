import React from 'react';

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
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <section id="projects" className="projects">
    <div className="container">
      <h2 className="section-title">Projects</h2>
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
);

export default Projects;
