// PartnersSection.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './PartnersSection.css';

const PartnersSection = ({ subtitle, title, description, logos = [], speed = 25, pauseOnHover = true }) => {
  // Sample company logos data (you can replace these with actual partner logos)
  const defaultLogos = [
    { src: '/images/partner-logo-1.svg', alt: 'Company 1' },
    { src: '/images/partner-logo-2.svg', alt: 'Company 2' },
    { src: '/images/partner-logo-3.svg', alt: 'Company 3' },
    { src: '/images/partner-logo-4.svg', alt: 'Company 4' },
    { src: '/images/partner-logo-5.svg', alt: 'Company 5' },
    { src: '/images/partner-logo-6.svg', alt: 'Company 6' },
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
                    <img 
                      src={logo.src} 
                      alt={logo.alt}
                      className="partners-logo"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {partnerLogos.map((logo, index) => (
                  <div key={`second-${index}`} className="partners-marquee__item">
                    <img 
                      src={logo.src} 
                      alt={logo.alt}
                      className="partners-logo"
                    />
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