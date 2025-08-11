import React from 'react';
import PropTypes from 'prop-types';
import './CompetitiveAdvantages.css';

const CompetitiveAdvantages = ({ advantages, certifications }) => {
  return (
    <section className="competitive-advantages">
      <div className="container">
        <div className="competitive-advantages__header">
          <h2 className="competitive-advantages__title">
            Why Choose <span className="competitive-advantages__title-accent">Our Products</span>
          </h2>
          <p className="competitive-advantages__subtitle">
            Industry-leading quality and support you can trust
          </p>
        </div>
        
        <div className="competitive-advantages__content">
          <div className="competitive-advantages__main">
            {advantages.map((advantage, index) => (
              <div key={index} className="competitive-advantages__item">
                <div className="competitive-advantages__item-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="competitive-advantages__item-content">
                  <h3 className="competitive-advantages__item-title">{advantage.title}</h3>
                  <p className="competitive-advantages__item-description">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {certifications && (
            <div className="competitive-advantages__sidebar">
              <div className="competitive-advantages__card">
                <h3 className="competitive-advantages__card-title">Quality Certifications</h3>
                <ul className="competitive-advantages__cert-list">
                  {certifications.map((cert, index) => (
                    <li key={index} className="competitive-advantages__cert-item">
                      <span className="competitive-advantages__cert-icon">✓</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

CompetitiveAdvantages.propTypes = {
  advantages: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired,
  certifications: PropTypes.arrayOf(PropTypes.string)
};

export default CompetitiveAdvantages;