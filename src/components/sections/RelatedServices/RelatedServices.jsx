import React from 'react';
import PropTypes from 'prop-types';
import './RelatedServices.css';

const RelatedServices = ({ services = [] }) => {
  return (
    <section className="related" aria-labelledby="related-heading">
      <div className="container">
        <h2 id="related-heading" className="related__heading">
          Related <span className="related__heading-accent">Services</span>
        </h2>
        <p className="related__subtitle">
          Explore our comprehensive suite of professional services
        </p>
        <div className="related__grid">
          {services.map((srv, idx) => (
            <a key={idx} className="related__card" href={`/expertise/${srv.category || 'software'}/${srv.slug || srv}`}>
              <span className="related__tag">{srv.category || 'Service'}</span>
              <h3 className="related__title">{srv.title || srv}</h3>
              <p className="related__description">
                {srv.description || 'Professional solutions tailored to your business needs.'}
              </p>
              <div className="related__footer">
                <span className="related__learn-more">Learn more</span>
                <div className="related__arrow" aria-hidden="true">→</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

RelatedServices.propTypes = {
  services: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ slug: PropTypes.string.isRequired, title: PropTypes.string, category: PropTypes.string })
  ]))
};

export default RelatedServices;


