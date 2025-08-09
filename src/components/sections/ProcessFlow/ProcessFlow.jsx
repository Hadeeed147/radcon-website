import React from 'react';
import PropTypes from 'prop-types';
import './ProcessFlow.css';

const ProcessFlow = ({ steps = [], active = 1 }) => {
  return (
    <section className="process-flow section">
      <div className="container process-flow__container">
        {steps.map((s, idx) => {
          const isActive = s.number === active;
          return (
            <div className={`process-flow__step${isActive ? ' process-flow__step--active' : ''}`} key={idx} aria-current={isActive ? 'step' : undefined}>
              <div className="process-flow__badge" aria-hidden="true">{s.number}</div>
              <div className="process-flow__content">
                <h3 className="process-flow__title">{s.title}</h3>
                <p className="process-flow__desc">{s.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

ProcessFlow.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
  active: PropTypes.number,
};

export default ProcessFlow;


