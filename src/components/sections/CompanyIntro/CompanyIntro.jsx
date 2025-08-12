// CompanyIntro.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './CompanyIntro.css';

const CompanyIntro = ({ title, description, highlightText }) => {
  const renderTitle = () => {
    if (highlightText && title.includes(highlightText)) {
      const parts = title.split(highlightText);
      return (
        <>
          {parts[0]}
          <span className="company-intro__highlight">{highlightText}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <section 
      className="company-intro"
      style={{
        backgroundImage: `url('/images/testimonial_bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        <div className="company-intro__content">
          <h2 className="company-intro__title">
            {renderTitle()}
          </h2>
          <p className="company-intro__description">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

CompanyIntro.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  highlightText: PropTypes.string,
};

export default CompanyIntro;