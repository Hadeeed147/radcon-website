import React from 'react';
import './CompanyOverview.css';

const CompanyOverview = () => {
  return (
    <section className="company-overview section">
      <div className="container">
        <div className="company-overview__grid">
          <div className="company-overview__left">
            <h2 className="company-overview__title">
              A Leading<br />
              <span className="company-overview__highlight">Technology</span><br />
              Company
            </h2>
          </div>
          
          <div className="company-overview__right">
            <p className="company-overview__description">
              RADCON Technologies drives indigenous development across critical domains including electronic jammers, RF & microwave systems, embedded solutions, and precision mechanical fabrication. We proudly serve defense, industrial, and technology sectors with cutting-edge innovation.
            </p>
            
            <div className="company-overview__cta">
              <a href="/about-us" className="btn btn--primary">
                About Us
                <span className="btn__icon">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;