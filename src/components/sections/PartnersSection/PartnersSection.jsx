// PartnersSection.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './PartnersSection.css';

const PartnersSection = ({ subtitle, title, description, logos = [], speed = 25, pauseOnHover = true }) => {
  // Technology partner placeholders with CSS-based logos
  const defaultLogos = [
    { name: 'TechCore Systems', type: 'rf-tech', alt: 'RF Technology Partner' },
    { name: 'Advanced Microwave', type: 'microwave', alt: 'Microwave Solutions Partner' },
    { name: 'Defense Innovations', type: 'defense', alt: 'Defense Technology Partner' },
    { name: 'Embedded Solutions', type: 'embedded', alt: 'Embedded Systems Partner' },
    { name: 'Power Systems Pro', type: 'power', alt: 'Power Systems Partner' },
    { name: 'NavTech Global', type: 'navigation', alt: 'Navigation Systems Partner' },
    { name: 'OptroTech Ltd', type: 'optical', alt: 'Optical Technology Partner' },
    { name: 'CommSys Networks', type: 'communications', alt: 'Communications Partner' },
  ];

  const partnerLogos = logos.length > 0 ? logos : defaultLogos;

  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-content">
          <div className="partners-content__text">
            <h3 className="partners-section__subtitle">{subtitle}</h3>
            <h2 className="partners-section__title">{title}</h2>
            <p className="partners-section__description">{description}</p>
          </div>
          
          <div className="partners-marquee-container">
            <div 
              className={`partners-marquee ${pauseOnHover ? 'partners-marquee--pause-on-hover' : ''}`}
            >
              <div 
                className="partners-marquee__track"
                style={{
                  '--marquee-duration': `${60 / speed}s`
                }}
              >
                {/* First set of logos */}
                {partnerLogos.map((logo, index) => (
                  <div key={`first-${index}`} className="partners-marquee__item">
                    <div className={`partners-logo partners-logo--${logo.type || 'default'}`}>
                      <div className="partners-logo__icon"></div>
                      <div className="partners-logo__text">{logo.name || logo.alt}</div>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {partnerLogos.map((logo, index) => (
                  <div key={`second-${index}`} className="partners-marquee__item">
                    <div className={`partners-logo partners-logo--${logo.type || 'default'}`}>
                      <div className="partners-logo__icon"></div>
                      <div className="partners-logo__text">{logo.name || logo.alt}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PartnersSection.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
  speed: PropTypes.number,
  pauseOnHover: PropTypes.bool,
};

export default PartnersSection;