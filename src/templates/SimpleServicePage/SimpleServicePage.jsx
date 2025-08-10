import React from 'react';
import PropTypes from 'prop-types';
import PageHero from '../../components/sections/PageHero/PageHero';
import ServiceOverview from '../../components/sections/ServiceOverview/ServiceOverview';
import BenefitsList from '../../components/sections/BenefitsList/BenefitsList';
import RelatedServices from '../../components/sections/RelatedServices/RelatedServices';
import CTASection from '../../components/sections/CTASection/CTASection';
import './SimpleServicePage.css';

const SimpleServicePage = ({ data }) => {
  const { hero, overview, benefits, relatedServices } = data;
  return (
    <main className="simple-page" id="main-content">
      <PageHero {...hero} />
      <section className="section">
        <div className="container simple-page__title">
          <h2 className="section-title">
            <span className="section-title__accent">{data.meta?.title?.split(' ')[0] || 'Our'}</span>{' '}
            <span className="section-title__rest">{data.meta?.title?.split(' ').slice(1).join(' ') || 'Expertise'}</span>
          </h2>
        </div>
      </section>
      <ServiceOverview {...overview} />
      {benefits && benefits.length > 0 && (
        <BenefitsList benefits={benefits} />
      )}
      {relatedServices && relatedServices.length > 0 && (
        <RelatedServices services={relatedServices} />
      )}
      <CTASection title="How can we help?" description="Get in touch to explore options tailored to you." primaryButton={{ text: 'Contact', href: '/contact' }} secondaryButton={{ text: 'All Services', href: '/expertise' }} />
    </main>
  );
};

SimpleServicePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SimpleServicePage;


