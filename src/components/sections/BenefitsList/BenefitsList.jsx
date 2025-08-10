/* BenefitsList.jsx - Updated with better icons */
import React from 'react';
import PropTypes from 'prop-types';
import './BenefitsList.css';

const BenefitsList = ({ benefits = [] }) => {
  const getIconUrl = (iconName) => {
    const iconMappings = {
      'check-circle': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/solid/check-circle.svg',
      'check': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/solid/check.svg',
      'star': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/solid/star.svg',
      'lightning': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/solid/bolt.svg',
      'shield': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/solid/shield-check.svg',
      'rocket': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/solid/rocket-launch.svg',
      'default': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/solid/check-badge.svg'
    };
    
    return iconMappings[iconName] || iconMappings['default'];
  };

  return (
    <section className="benefits" aria-label="Benefits">
      <div className="container">
        <h2 className="benefits__heading">
          Why Choose <span className="benefits__heading-accent">RADCON</span>
        </h2>
        <div className="benefits__grid">
          {benefits.map((b, idx) => (
            <article className={`benefits__item benefits__item--${idx % 4}`} key={idx}>
              <div className="benefits__icon">
                <img 
                  src={typeof b.icon === 'string' && b.icon.startsWith('/') ? b.icon : getIconUrl(b.icon)} 
                  alt="" 
                  aria-hidden="true"
                />
              </div>
              <div className="benefits__body">
                <h3 className="benefits__title">{b.title}</h3>
                <p className="benefits__desc">{b.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

BenefitsList.propTypes = {
  benefits: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }))
};

export default BenefitsList;