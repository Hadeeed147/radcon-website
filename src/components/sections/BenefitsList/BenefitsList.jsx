import React from 'react';
import PropTypes from 'prop-types';
import './BenefitsList.css';

const BenefitsList = ({ benefits = [] }) => {
  return (
    <section className="benefits section" aria-label="Benefits">
      <div className="container benefits__grid">
        {benefits.map((b, idx) => (
          <article className={`benefits__item${idx % 2 === 0 ? ' benefits__item--alt' : ''}`} key={idx}>
            <div className="benefits__icon" aria-hidden="true">{b.icon || '✓'}</div>
            <div className="benefits__body">
              <h3 className="benefits__title">{b.title}</h3>
              <p className="benefits__desc">{b.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

BenefitsList.propTypes = {
  benefits: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.node,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }))
};

export default BenefitsList;


