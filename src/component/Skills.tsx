import React from 'react';

interface Skill {
  name: string;
  level: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => (
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
);

export default Skills;
