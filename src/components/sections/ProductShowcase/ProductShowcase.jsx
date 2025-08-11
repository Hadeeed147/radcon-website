import React from 'react';
import PropTypes from 'prop-types';
import './ProductShowcase.css';

const ProductShowcase = ({ 
  image, 
  title, 
  highlights, 
  specifications, 
  primaryButton
}) => {
  // Icon mapping for specifications
  const getSpecIcon = (key) => {
    const iconMap = {
      'Frequency Coverage': '📡',
      'Frequency Range': '📊',
      'Frequency': '🔊',
      'Output Power': '⚡',
      'Power Output': '💪',
      'Protection Radius': '🛡️',
      'Operating Temp': '🌡️',
      'Gain': '📈',
      'Efficiency': '✨',
      'Voltage Range': '🔌',
      'Regulation': '⚙️',
      'Processors': '💻',
      'Memory': '💾',
      'Interfaces': '🔗',
      'OS Support': '🖥️',
      'Channels': '📻',
      'Range': '📍',
      'Accuracy': '🎯',
      'Update Rate': '🔄',
      'Display Size': '📺',
      'Resolution': '🖼️',
      'Brightness': '☀️',
      'MTBF': '⏰',
      'Wavelength': '🌊',
      'Sensitivity': '📶',
      'Time to Fix': '⏱️',
      'Processing': '⚡',
      'Frame Rate': '🎬',
      'Latency': '⚡'
    };
    return iconMap[key] || '📌';
  };

  return (
    <section className="product-showcase">
      <div className="container">
        <div className="product-showcase__grid">
          <div className="product-showcase__image-wrapper">
            <img 
              src={image} 
              alt={title} 
              className="product-showcase__image"
              loading="lazy"
            />
          </div>
          
          <div className="product-showcase__content">
            <h2 className="product-showcase__title">{title}</h2>
            
            {highlights && highlights.length > 0 && (
              <div className="product-showcase__highlights">
                <h3 className="product-showcase__section-title">Key Features</h3>
                <ul className="product-showcase__highlights-list">
                  {highlights.map((highlight, index) => (
                    <li 
                      key={index} 
                      className="product-showcase__highlight-item"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="product-showcase__highlight-icon">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {specifications && Object.keys(specifications).length > 0 && (
              <div className="product-showcase__specs">
                <h3 className="product-showcase__section-title">Quick Specifications</h3>
                <div className="product-showcase__specs-grid">
                  {Object.entries(specifications).slice(0, 4).map(([key, value], index) => (
                    <div 
                      key={key} 
                      className="product-showcase__spec-item"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <div className="product-showcase__spec-icon">{getSpecIcon(key)}</div>
                      <div className="product-showcase__spec-content">
                        <span className="product-showcase__spec-label">{key}</span>
                        <span className="product-showcase__spec-value">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="product-showcase__actions">
              {primaryButton && (
                <a 
                  href={primaryButton.href} 
                  className="product-showcase__btn product-showcase__btn--primary"
                  aria-label={primaryButton.ariaLabel || primaryButton.text}
                >
                  {primaryButton.text}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductShowcase.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  highlights: PropTypes.arrayOf(PropTypes.string),
  specifications: PropTypes.object,
  primaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string
  })
};

export default ProductShowcase;