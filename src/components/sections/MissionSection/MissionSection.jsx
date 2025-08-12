// MissionSection.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './MissionSection.css';

const MissionSection = ({ subtitle, title, description, images }) => {
  return (
    <section className="mission-section">
      <div className="container">
        <div className="mission-content">
          <div className="mission-content__images">
            <div className="mission-image-grid">
              {images.map((image, index) => (
                <img 
                  key={index}
                  src={image.src} 
                  alt={image.alt} 
                  className={`mission-image ${image.className || ''}`}
                />
              ))}
            </div>
          </div>
          <div className="mission-content__text">
            <h3 className="mission-section__subtitle">{subtitle}</h3>
            <h2 className="mission-section__title">{title}</h2>
            <p className="mission-section__description">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

MissionSection.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      className: PropTypes.string,
    })
  ).isRequired,
};

export default MissionSection;