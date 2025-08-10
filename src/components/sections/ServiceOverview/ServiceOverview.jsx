import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './ServiceOverview.css';

const ServiceOverview = ({ title, content, highlights = [], image, imagePosition = 'right' }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add('is-visible');
        }
      });
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={`service-overview service-overview--image-${imagePosition}`} ref={rootRef}>
      <div className="container service-overview__container">
        <div className="service-overview__text">
          {title && <h2 className="service-overview__title">{title}</h2>}
          {content && <p className="service-overview__content">{content}</p>}
          {highlights?.length > 0 && (
            <ul className="service-overview__highlights" aria-label="Highlights">
              {highlights.map((h, idx) => (
                <li key={idx} className="service-overview__highlight">
                  <span className="service-overview__highlight-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="service-overview__highlight-text">{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {image && (
          <div className="service-overview__media">
            <img src={image} alt="" loading="lazy" className="service-overview__image" />
          </div>
        )}
      </div>
    </section>
  );
};

ServiceOverview.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  imagePosition: PropTypes.oneOf(['left', 'right']),
};

export default ServiceOverview;


