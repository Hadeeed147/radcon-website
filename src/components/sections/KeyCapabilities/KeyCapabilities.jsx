import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './KeyCapabilities.css';

const KeyCapabilities = ({ items = [], columns = 3 }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cards = root.querySelectorAll('.key-capabilities__card');
    cards.forEach((card, idx) => {
      card.style.transitionDelay = `${idx * 60}ms`;
    });
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) root.classList.add('is-visible');
      });
    }, { threshold: 0.2 });
    obs.observe(root);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={`key-capabilities section key-capabilities--cols-${columns}`} ref={rootRef}>
      <div className="container">
        <div className="key-capabilities__grid">
          {items.map((item, idx) => (
            <article className="key-capabilities__card" key={idx}>
              <div className="key-capabilities__icon" aria-hidden="true">{item.icon || '★'}</div>
              <h3 className="key-capabilities__title">{item.title}</h3>
              <p className="key-capabilities__desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

KeyCapabilities.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.node,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
  columns: PropTypes.oneOf([2,3,4]),
};

export default KeyCapabilities;


