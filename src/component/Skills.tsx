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
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        <div className="skills-text">
          <h3>Technical stack</h3>
          <p>
            I have a wide range of modern technologies for developing full-featured web and mobile applications.
            From server-side logic to user interfaces — I create comprehensive solutions.
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
