import React from 'react';
import PropTypes from 'prop-types';
import './RelatedServices.css';

const RelatedServices = ({ services = [] }) => {
  return (
    <section className="related section" aria-label="Related services">
      <div className="container related__grid">
        {services.map((srv, idx) => (
          <a key={idx} className="related__card" href={`/expertise/${srv.category || 'software'}/${srv.slug || srv}`}>
            <div className="related__body">
              <span className="related__tag">{srv.category || 'Service'}</span>
              <h3 className="related__title">{srv.title || srv}</h3>
              <div className="related__arrow" aria-hidden="true">→</div>
            </div>
          </a>
        ))}
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


