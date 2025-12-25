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
  // Heroicons CDN mapping for specifications - professional monochrome icons
  const iconMappings = {
    'Frequency Coverage': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/signal.svg',
    'Frequency Range': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/chart-bar.svg',
    'Frequency': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/speaker-wave.svg',
    'Output Power': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/bolt.svg',
    'Power Output': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/bolt.svg',
    'Protection Radius': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/shield-check.svg',
    'Operating Temp': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/fire.svg',
    'Gain': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/arrow-trending-up.svg',
    'Efficiency': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/sparkles.svg',
    'Voltage Range': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/bolt.svg',
    'Regulation': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cog-6-tooth.svg',
    'Processors': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cpu-chip.svg',
    'Memory': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/circle-stack.svg',
    'Interfaces': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/link.svg',
    'OS Support': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/computer-desktop.svg',
    'Channels': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/radio.svg',
    'Range': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/map-pin.svg',
    'Accuracy': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cursor-arrow-rays.svg',
    'Update Rate': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/arrow-path.svg',
    'Display Size': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/tv.svg',
    'Resolution': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/photo.svg',
    'Brightness': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/sun.svg',
    'MTBF': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/clock.svg',
    'Wavelength': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/signal.svg',
    'Sensitivity': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/signal.svg',
    'Time to Fix': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/clock.svg',
    'Processing': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cpu-chip.svg',
    'Frame Rate': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/film.svg',
    'Latency': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/bolt.svg',
    // Aviation specific
    'Helicopter Platforms': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/paper-airplane.svg',
    'Fixed Wing Platforms': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/paper-airplane.svg',
    'Avionics Systems': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cpu-chip.svg',
    'Ground Support': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/wrench-screwdriver.svg',
    'default': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cog-6-tooth.svg'
  };

  const getSpecIcon = (key) => {
    return iconMappings[key] || iconMappings['default'];
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
                      <div className="product-showcase__spec-icon">
                        <img src={getSpecIcon(key)} alt="" aria-hidden="true" />
                      </div>
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