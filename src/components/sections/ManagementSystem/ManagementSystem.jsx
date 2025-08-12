// ManagementSystem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ManagementSystem.css';

const ManagementSystem = ({ title, highlightText, items }) => {
  const isoLogos = [
    { src: '/images/ISO-logo-01.svg', alt: 'ISO Certification 1' },
    { src: '/images/ISO-logo-02.svg', alt: 'ISO Certification 2' },
    { src: '/images/ISO-logo-03.svg', alt: 'ISO Certification 3' },
    { src: '/images/ISO-logo-04.svg', alt: 'ISO Certification 4' },
    { src: '/images/ISO-logo-05.svg', alt: 'ISO Certification 5' },
    { src: '/images/ISO-logo-06.svg', alt: 'ISO Certification 6' }
  ];

  const renderTitle = () => {
    if (highlightText && title.includes(highlightText)) {
      const parts = title.split(highlightText);
      return (
        <>
          {parts[0]}
          <span className="management-system__highlight">{highlightText}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <section className="management-system">
      <div className="container">
        <div className="management-system__content">
          <h2 className="management-system__title">
            {renderTitle()}
          </h2>
          <p className="management-system__description">
            Our commitment to excellence is reflected in our comprehensive quality management certifications and standards.
          </p>
        </div>
        <div className="management-system__grid">
          {isoLogos.map((logo, index) => (
            <div key={index} className="management-system__item">
              <div className="management-system__logo-container">
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="management-system__logo"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

ManagementSystem.propTypes = {
  title: PropTypes.string.isRequired,
  highlightText: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    })
  ),
};

export default ManagementSystem;