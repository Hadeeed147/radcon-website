import React from 'react';
import './IndustriesWeServe.css';

const IndustriesWeServe = () => {
  const industries = [
    {
      id: 1,
      icon: 'defense-shield',
      title: 'Defense & Security',
      description: 'Advanced jamming systems and radar solutions for military applications'
    },
    {
      id: 2,
      icon: 'aircraft',
      title: 'Aerospace & Aviation',
      description: 'Avionics repair and surveillance systems for aircraft platforms'
    },
    {
      id: 3,
      icon: 'government',
      title: 'Strategic Organizations',
      description: 'Precision components for national strategic programs'
    },
    {
      id: 4,
      icon: 'security-badge',
      title: 'Law Enforcement',
      description: 'Electronic countermeasures and security solutions'
    }
  ];

  return (
    <section className="industries-serve section">
      <div className="container">
        <div className="industries-serve__header">
          <h2 className="industries-serve__title">
            Industries We <span className="industries-serve__highlight">Serve</span>
          </h2>
          <p className="industries-serve__subtitle">
            Delivering specialized technology solutions across critical sectors
          </p>
        </div>
        
        <div className="industries-serve__grid">
          {industries.map((industry) => (
            <div key={industry.id} className="industry-card">
              <div className={`industry-card__icon industry-card__icon--${industry.icon}`}>
                <div className="industry-card__icon-inner"></div>
              </div>
              <div className="industry-card__content">
                <h3 className="industry-card__title">{industry.title}</h3>
                <p className="industry-card__description">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="industries-serve__cta">
          <a href="/expertise" className="btn btn--primary">
            Explore Our Expertise
            <span className="btn__icon">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;