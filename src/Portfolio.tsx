import React from 'react';
import Hero from './component/Hero';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
import { useTypingEffect } from './hooks/useTypingEffect';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const projects = [
  {
    icon: '🛡️',
    title: 'Security hub',
    description: 'This is an antivirus with a large modular architecture. A key feature of the project is that its modules can be activated and deactivated as needed.',
    tech: ['Node.js', 'Golang', 'C/C++', 'Web', 'Python', 'C#', 'Rust'],
    links: [
      { label: 'GitHub →', url: 'https://github.com/Kvazar-213452/security_hub' },
      { label: 'Live Demo →', url: 'https://spx-security-hub.wuaze.com/page/main?i=2' }
    ],
    fullDescription: `
    Security Hub is an antivirus application with a sophisticated modular architecture that allows it to be effectively
     adapted to the user's needs. A key feature of this software is the ability to activate and deactivate individual modules, 
     providing flexibility and optimal use of system resources. Each module performs a specific function — from protecting against 
     malware to optimizing the performance of the PC.
    `,
    features: [
      "Modularity - can be removed and installed"
    ]
  },
  {
    icon: '🔐',
    title: 'Voxta',
    description: 'This is an app similar to Signal. Voxta is a messenger that ensures secure data transmission through end-to-end encryption and supports both online and offline chats. On pc and microservices architecture.',
    tech: ['Node.js', 'TypeScript', 'Java', 'Electron.js', 'Golang'],
    links: [
      { label: 'GitHub →', url: 'https://github.com/Kvazar-213452/Voxta' }
    ],
    fullDescription: `
Voxta is a hybrid messenger that supports both online and offline chats.
Online chats are stored on Voxta servers.
Offline chats are stored locally on the client but work through the internet.
Voxta supports three encryption modes: simple, server-based, and secure (Signal-based).
Users can deploy their own Voxta servers.
Messages can be routed through Voxta but stored only on private servers.
The messenger provides flexibility, privacy, and data control.
Voxta is suitable for both regular users and organizations.
    `,
    features: [
      "Hybrid messenger"
    ]
  },
  {
    icon: '⚡',
    title: 'Voxta mobile',
    description: 'This is an app similar to Signal. Voxta is a messenger that ensures secure data transmission through end-to-end encryption and supports both online and offline chats. On mobile and microservices architecture.',
    tech: ['Flater', 'Java', 'TypeScript', 'Node.js'],
    links: [
      { label: 'GitHub →', url: 'https://github.com/Kvazar-213452/Voxta-mobile' }
    ],
    fullDescription: `
Voxta is a hybrid messenger that supports both online and offline chats.
Online chats are stored on Voxta servers.
Offline chats are stored locally on the client but work through the internet.
Voxta supports three encryption modes: simple, server-based, and secure (Signal-based).
Users can deploy their own Voxta servers.
Messages can be routed through Voxta but stored only on private servers.
The messenger provides flexibility, privacy, and data control.
Voxta is suitable for both regular users and organizations.
    `,
    features: [
      "Hybrid messenger"
    ]
  }
];

const contacts = [
  { icon: '📧', label: 'Email', value: 'kvazar382@gmail.com', href: 'mailto:kvazar382@gmail.com' },
  { icon: '💻', label: 'GitHub', value: 'github.com/Kvazar-213452', href: 'https:github.com/Kvazar-213452' }
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
      <Projects projects={projects} />
      <Contact contacts={contacts} scrollToSection={scrollToSection} />
    </div>
  );
};

export default Portfolio;
