import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './ProcessFlow.css';

const ProcessFlow = ({ steps = [], active = 1 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = container.querySelectorAll('.process-flow__step');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
    }, { threshold: 0.2 });
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="process-flow section">
      <div className="container">
        <h2 className="process-flow__heading">From Idea to Impact</h2>
      </div>
      <div className="container process-flow__container" ref={containerRef}>
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
        <div className="process-flow__progress" aria-hidden="true">
          <div className="process-flow__progress-bar" />
        </div>
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


