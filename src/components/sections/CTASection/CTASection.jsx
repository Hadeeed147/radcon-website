import React from 'react';
import PropTypes from 'prop-types';
import './CTASection.css';

const CTASection = ({ title, description, primaryButton, secondaryButton }) => {
  return (
    <section className="cta section" aria-labelledby="cta-title">
      <div className="container cta__container">
        {title && <h2 id="cta-title" className="cta__title">{title}</h2>}
        {description && <p className="cta__desc">{description}</p>}
        <div className="cta__actions">
          {primaryButton && (
            <a className="btn btn--primary" href={primaryButton.href} aria-label={primaryButton.ariaLabel || primaryButton.text}>
              {primaryButton.text}
            </a>
          )}
          {secondaryButton && (
            <a className="btn btn--secondary" href={secondaryButton.href} aria-label={secondaryButton.ariaLabel || secondaryButton.text}>
              {secondaryButton.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

CTASection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  primaryButton: PropTypes.shape({ text: PropTypes.string.isRequired, href: PropTypes.string.isRequired, ariaLabel: PropTypes.string }),
  secondaryButton: PropTypes.shape({ text: PropTypes.string.isRequired, href: PropTypes.string.isRequired, ariaLabel: PropTypes.string }),
};

export default CTASection;


