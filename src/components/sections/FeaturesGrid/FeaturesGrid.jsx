import React from 'react';
import PropTypes from 'prop-types';
import './FeaturesGrid.css';

const FeaturesGrid = ({ features, columns = 3 }) => {
  return (
    <section className="features-grid">
      <div className="container">
        <div className="features-grid__header">
          <h2 className="features-grid__title">
            <span className="features-grid__title-accent">Product</span> Features
          </h2>
          <p className="features-grid__subtitle">
            Advanced capabilities that set our products apart
          </p>
        </div>
        
        <div 
          className="features-grid__grid" 
          style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${columns === 2 ? '400px' : '300px'}, 1fr))` }}
        >
          {features.map((feature, index) => (
            <div key={index} className="features-grid__card">
              <div className="features-grid__card-header">
                <div className="features-grid__icon">
                  {feature.icon || '⚡'}
                </div>
                <h3 className="features-grid__card-title">{feature.title}</h3>
              </div>
              <p className="features-grid__card-description">{feature.description}</p>
              {feature.highlights && (
                <div className="features-grid__highlights">
                  {feature.highlights.map((highlight, idx) => (
                    <span key={idx} className="features-grid__highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

FeaturesGrid.propTypes = {
  features: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string)
  })).isRequired,
  columns: PropTypes.number
};

export default FeaturesGrid;