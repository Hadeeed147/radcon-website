import React from 'react';
import PropTypes from 'prop-types';
import './FeaturesGrid.css';

const FeaturesGrid = ({ features, columns = 3 }) => {
  // Using Heroicons via jsdelivr CDN
  const iconMappings = {
    'computer-desktop': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/computer-desktop.svg',
    'bolt': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/bolt.svg',
    'map': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/map.svg',
    'signal': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/signal.svg',
    'wrench-screwdriver': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/wrench-screwdriver.svg',
    'cpu-chip': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cpu-chip.svg',
    'shield-check': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/shield-check.svg',
    'cog-6-tooth': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cog-6-tooth.svg',
    'radio': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/radio.svg',
    'wifi': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/wifi.svg',
    'no-symbol': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/no-symbol.svg',
    'cube': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cube.svg',
    'chart-bar': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/chart-bar.svg',
    'adjustments-horizontal': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/adjustments-horizontal.svg',
    'arrow-path': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/arrow-path.svg',
    'speaker-wave': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/speaker-wave.svg',
    'fire': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/fire.svg',
    'check-badge': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/check-badge.svg',
    'document-text': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/document-text.svg',
    'command-line': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/command-line.svg',
    'clock': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/clock.svg',
    'link': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/link.svg',
    'arrow-up-circle': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/arrow-up-circle.svg',
    'globe-alt': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/globe-alt.svg',
    'magnifying-glass': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/magnifying-glass.svg',
    'beaker': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/beaker.svg',
    'sparkles': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/sparkles.svg',
    'calendar-days': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/calendar-days.svg',
    'puzzle-piece': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/puzzle-piece.svg',
    'phone': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/phone.svg',
    'user': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/user.svg',
    'academic-cap': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/academic-cap.svg',
    'chat-bubble-left-right': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/chat-bubble-left-right.svg',
    'document-check': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/document-check.svg',
    'arrow-trending-up': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/arrow-trending-up.svg',
    'light-bulb': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/light-bulb.svg',
    'users': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/users.svg',
    'star': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/star.svg',
    'user-group': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/user-group.svg',
    'banknotes': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/banknotes.svg',
    'heart': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/heart.svg',
    'folder': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/folder.svg',
    'arrow-right-circle': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/arrow-right-circle.svg',
    'device-phone-mobile': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/device-phone-mobile.svg',
    'finger-print': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/finger-print.svg',
    'camera': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/camera.svg',
    'paint-brush': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/paint-brush.svg',
    'battery': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/battery-50.svg',
    'default': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/bolt.svg'
  };

  const getIconUrl = (iconName) => {
    return iconMappings[iconName] || iconMappings['default'];
  };

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
                  {feature.icon && iconMappings[feature.icon] ? (
                    <img 
                      src={getIconUrl(feature.icon)} 
                      alt="" 
                      aria-hidden="true"
                    />
                  ) : (
                    feature.icon || '⚡'
                  )}
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