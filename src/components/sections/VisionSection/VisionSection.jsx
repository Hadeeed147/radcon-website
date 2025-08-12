// VisionSection.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './VisionSection.css';

const VisionSection = ({ subtitle, title, description, images }) => {
  return (
    <section className="vision-section">
      <div className="container">
        <div className="vision-content">
          <div className="vision-content__text">
            <h3 className="vision-section__subtitle">{subtitle}</h3>
            <h2 className="vision-section__title">{title}</h2>
            <p className="vision-section__description">{description}</p>
          </div>
          <div className="vision-content__images">
            <div className="vision-image-grid">
              {images.map((image, index) => (
                <img 
                  key={index}
                  src={image.src} 
                  alt={image.alt} 
                  className={`vision-image ${image.className || ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

VisionSection.propTypes = {
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

export default VisionSection;