import React from 'react';
import PropTypes from 'prop-types';
import './ProductCTA.css';

const ProductCTA = ({ 
  title, 
  description, 
  primaryButton
}) => {
  return (
    <section className="product-cta">
      <div className="container">
        <div className="product-cta__content">
          <div className="product-cta__text">
            <h2 className="product-cta__title">{title || 'Contact Us Today'}</h2>
            <p className="product-cta__description">{description || 'Get in touch with our experts to discuss your requirements and find the perfect solution for your needs.'}</p>
          </div>
          
          <div className="product-cta__actions">
            {primaryButton && (
              <a 
                href={primaryButton.href} 
                className="product-cta__btn"
              >
                <span className="product-cta__btn-icon">📧</span>
                {primaryButton.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

ProductCTA.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  primaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  })
};

export default ProductCTA;