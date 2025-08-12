// WhyChooseUs.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './WhyChooseUs.css';

const WhyChooseUs = ({ cards }) => {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="why-choose-us__grid">
          {cards.map((card, index) => (
            <div key={index} className="why-choose-us__card">
              <div className="why-choose-us__icon">{card.icon}</div>
              <h3 className="why-choose-us__title">{card.title}</h3>
              <p className="why-choose-us__description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

WhyChooseUs.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default WhyChooseUs;