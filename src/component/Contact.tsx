import React from 'react';

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

const Contact: React.FC<ContactProps> = ({ contacts, scrollToSection }) => (
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
);

export default Contact;
