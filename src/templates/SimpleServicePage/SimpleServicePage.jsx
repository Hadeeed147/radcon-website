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


