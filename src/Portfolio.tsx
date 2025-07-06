import React from 'react';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import { useTypingEffect } from './hooks/useTypingEffect';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const skills = [
  { name: 'Node.js', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'MongoDB', level: 'Advanced' },
  { name: 'Electron', level: 'Expert Level' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'Flater', level: 'Intermediate' },
  { name: 'Golang', level: 'Intermediate' },
  { name: 'Python', level: 'Advanced' }
];

const projects = [
  {
    icon: '🛡️',
    title: 'Security hub',
    description: 'This is an antivirus with a large modular architecture. A key feature of the project is that its modules can be activated and deactivated as needed.',
    tech: ['Node.js', 'Golang', 'C++', 'Web', 'Python', 'C#'],
    links: [
      { label: 'GitHub →', url: 'https://github.com/Kvazar-213452/security_hub' },
      { label: 'Live Demo →', url: 'https://spx-security-hub.wuaze.com/page/main?i=2' }
    ]
  },
  {
    icon: '🔐',
    title: 'Voxta',
    description: 'This is an app similar to Signal. Voxta is a messenger that ensures secure data transmission through end-to-end encryption and supports both online and offline chats. On pc and microservices architecture.',
    tech: ['Node.js', 'TypeScript', 'Java', 'Electron.js'],
    links: [
      { label: 'GitHub →', url: 'https://github.com/Kvazar-213452/Voxta' }
    ]
  },
  {
    icon: '⚡',
    title: 'Voxta mobile',
    description: 'This is an app similar to Signal. Voxta is a messenger that ensures secure data transmission through end-to-end encryption and supports both online and offline chats. On mobile and microservices architecture.',
    tech: ['Flater', 'Java', 'TypeScript', 'Node.js'],
    links: [
      { label: 'GitHub →', url: 'https://github.com/Kvazar-213452/Voxta-mobile' }
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

const Portfolio: React.FC = () => {
  const { typedText } = useTypingEffect('Full-Stack Node.js Developer', 1000, 100);

  useIntersectionObserver('animate-on-scroll');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio">
      <Hero typedText={typedText} scrollToSection={scrollToSection} />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact contacts={contacts} scrollToSection={scrollToSection} />
    </div>
  );
};

export default Portfolio;
