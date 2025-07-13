import React, { useState, useEffect } from 'react';

interface Contact {
  icon: string;
  label: string;
  value: string;
  href: string;
}

interface ContactProps {
  contacts: Contact[];
  scrollToSection: (id: string) => void;
}

const Contact: React.FC<ContactProps> = ({ contacts, scrollToSection }) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [particleCount] = useState(30);

  useEffect(() => {
    const timer = setTimeout(() => {
      contacts.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, index]);
        }, index * 150);
      });
    }, 400);

    return () => clearTimeout(timer);
  }, [contacts]);

  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 20,
  }));

  return (
    <section id="contact" className="contact">
      <div className="contact-bg">
        <div className="gradient-sphere sphere-1" />
        <div className="gradient-sphere sphere-2" />
        <div className="gradient-sphere sphere-3" />
      </div>

      <div className="contact-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="contact-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="contact-grid-overlay" />

      <div className="container">
        <div className="contact-content">
          <div className="contact-header">
            <div className="contact-badge">
              <span className="badge-text">LET'S CONNECT</span>
            </div>
            <h2 className="section-title">
              <span className="title-main">My-</span>
              <span className="title-accent"> contacts</span>
            </h2>
            <p className="section-subtitle">
              Ready to bring your ideas to life? Let's start a conversation
              and create something amazing together.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="contact-grid">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className={`contact-item ${visibleItems.includes(index) ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => window.open(contact.href, '_blank')}
              >
                <div className="contact-item-inner">
                  <div className="contact-icon">
                    <span className="icon-symbol">{contact.icon}</span>
                    <div className="icon-pulse" />
                  </div>
                  <div className="contact-info">
                    <div className="contact-label">{contact.label}</div>
                    <div className="contact-value">
                      <a href={contact.href}>
                        {contact.value}
                        <div className="contact-arrow">→</div>
                      </a>
                    </div>
                  </div>
                  <div className="contact-item-glow" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="contact-cta">
            <div className="cta-content">
              <h3 className="cta-title">Ready to Start Your Project?</h3>
              <p className="cta-subtitle">
                Let's discuss your vision and turn it into reality
              </p>
              <div className="cta-buttons">
                <button 
                  className="btn btn-primary"
                  onClick={() => window.open('mailto:kvazar382@gmail.com', '_blank')}
                >
                  <span className="btn-text">Send Message</span>
                  <div className="btn-glow" />
                </button>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => scrollToSection('home')}
                >
                  <span className="btn-text">Back to Top</span>
                  <div className="btn-glow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact {
          padding: 8rem 0;
          background: radial-gradient(ellipse at center, #0f0f23 0%, #050505 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .contact-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .gradient-sphere {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.1;
        }

        .sphere-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #00ff88, transparent);
          top: 20%;
          left: -10%;
          animation: float-sphere 25s ease-in-out infinite;
        }

        .sphere-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #00ccff, transparent);
          top: 60%;
          right: -10%;
          animation: float-sphere 30s ease-in-out infinite reverse;
        }

        .sphere-3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #ff6b6b, transparent);
          bottom: 10%;
          left: 60%;
          animation: float-sphere 35s ease-in-out infinite;
        }

        @keyframes float-sphere {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 40px) scale(0.9); }
        }

        .contact-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .contact-particle {
          position: absolute;
          background: linear-gradient(45deg, #00ff88, #00ccff);
          border-radius: 50%;
          opacity: 0.3;
          animation: float-particle 15s infinite linear;
        }

        @keyframes float-particle {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .contact-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 255, 136, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.02) 1px, transparent 1px);
          background-size: 80px 80px;
          z-index: 1;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .contact-content {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .contact-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(0, 255, 136, 0.1);
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: 25px;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .badge-text {
          font-size: 0.9rem;
          color: #00ff88;
          font-weight: 600;
          letter-spacing: 2px;
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 136, 0.3); }
          50% { box-shadow: 0 0 30px rgba(0, 255, 136, 0.5); }
        }

        .section-title {
          font-size: clamp(2.5rem, 6vw, 5rem);
          margin-bottom: 1.5rem;
          font-weight: 900;
          line-height: 1.1;
        }

        .title-main {
          background: linear-gradient(45deg, #ffffff, #cccccc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .title-accent {
          background: linear-gradient(45deg, #00ff88, #00ccff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #888888;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }

        .contact-item {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .contact-item.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-item-inner {
          background: rgba(15, 15, 35, 0.6);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-item-inner:hover {
          transform: translateY(-5px);
          background: rgba(15, 15, 35, 0.8);
          border-color: rgba(0, 255, 136, 0.3);
        }

        .contact-item-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #00ff88, #00ccff);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 20px;
        }

        .contact-item-inner:hover .contact-item-glow {
          opacity: 0.1;
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          background: rgba(0, 255, 136, 0.1);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          flex-shrink: 0;
        }

        .icon-symbol {
          font-size: 1.5rem;
          z-index: 2;
          position: relative;
        }

        .icon-pulse {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #00ff88, #00ccff);
          border-radius: 15px;
          opacity: 0;
          animation: pulse-icon 2s ease-in-out infinite;
        }

        @keyframes pulse-icon {
          0%, 100% { opacity: 0; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }

        .contact-info {
          flex: 1;
        }

        .contact-label {
          font-size: 0.9rem;
          color: #888888;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .contact-value {
          position: relative;
        }

        .contact-value a {
          color: #ffffff;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.3s ease;
        }

        .contact-value a:hover {
          color: #00ff88;
        }

        .contact-arrow {
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }

        .contact-item-inner:hover .contact-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-cta {
          background: rgba(15, 15, 35, 0.6);
          backdrop-filter: blur(20px);
          border-radius: 25px;
          padding: 3rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .contact-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #00ff88, #00ccff, #ff6b6b, #00ff88);
          background-size: 300% 300%;
          animation: gradient-border 8s ease infinite;
          opacity: 0.1;
          border-radius: 25px;
        }

        @keyframes gradient-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #ffffff, #cccccc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-subtitle {
          font-size: 1.1rem;
          color: #888888;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 1rem 2rem;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          min-width: 160px;
        }

        .btn-primary {
          background: linear-gradient(45deg, #00ff88, #00ccff);
          color: #000000;
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 255, 136, 0.3);
        }

        .btn-text {
          position: relative;
          z-index: 2;
        }

        .btn-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #00ff88, #00ccff);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .btn-secondary:hover .btn-glow {
          opacity: 0.2;
        }

        @media (max-width: 768px) {
          .contact {
            padding: 4rem 0;
          }
          
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .contact-item-inner {
            padding: 1.5rem;
          }
          
          .contact-cta {
            padding: 2rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 100%;
            max-width: 300px;
          }
          
          .container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;