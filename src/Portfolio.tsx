import React from 'react';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import { useTypingEffect } from './hooks/useTypingEffect';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

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
