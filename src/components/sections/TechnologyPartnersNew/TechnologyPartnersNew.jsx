import React from 'react';
import './TechnologyPartnersNew.css';

const TechnologyPartnersNew = () => {
  const partners = [
    {
      id: 1,
      name: 'RF Solutions Network',
      domain: 'RF & Microwave',
      icon: 'rf-wave'
    },
    {
      id: 2,
      name: 'Embedded Tech Alliance',
      domain: 'Embedded Systems',
      icon: 'circuit-board'
    },
    {
      id: 3,
      name: 'Defense Systems Group',
      domain: 'Defense Technology',
      icon: 'shield'
    },
    {
      id: 4,
      name: 'Precision Manufacturing Partners',
      domain: 'Manufacturing',
      icon: 'gear'
    },
    {
      id: 5,
      name: 'ISO Certified Partners',
      domain: 'Quality Standards',
      icon: 'check-badge'
    },
    {
      id: 6,
      name: 'R&D Consortium',
      domain: 'Innovation Labs',
      icon: 'hexagon-tech'
    }
  ];

  return (
    <section className="tech-partners-new section">
      <div className="container">
        <div className="tech-partners-new__header">
          <h2 className="tech-partners-new__title">
            Technology <span className="tech-partners-new__highlight">Partners</span> Network
          </h2>
          <p className="tech-partners-new__subtitle">
            Collaborating with leading organizations across diverse technology domains
          </p>
        </div>
        
        <div className="tech-partners-new__grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-card">
              <div className={`partner-card__icon partner-card__icon--${partner.icon}`}>
                <div className="partner-card__icon-inner"></div>
              </div>
              <div className="partner-card__content">
                <h3 className="partner-card__name">{partner.name}</h3>
                <p className="partner-card__domain">{partner.domain}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartnersNew;