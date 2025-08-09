import React from 'react';
import PropTypes from 'prop-types';
import PageHero from '../../components/sections/PageHero/PageHero';
import ServiceOverview from '../../components/sections/ServiceOverview/ServiceOverview';
import KeyCapabilities from '../../components/sections/KeyCapabilities/KeyCapabilities';
import ProcessFlow from '../../components/sections/ProcessFlow/ProcessFlow';
import TechnologyPartners from '../../components/sections/TechnologyPartners/TechnologyPartners';
import BenefitsList from '../../components/sections/BenefitsList/BenefitsList';
import RelatedServices from '../../components/sections/RelatedServices/RelatedServices';
import CTASection from '../../components/sections/CTASection/CTASection';
import './StandardServicePage.css';

const StandardServicePage = ({ data }) => {
  const { hero, overview, capabilities, process, technologies, benefits, relatedServices } = data;
  return (
    <main className="std-page" id="main-content">
      <PageHero {...hero} />
      <ServiceOverview {...overview} />
      {capabilities && capabilities.length > 0 && (
        <KeyCapabilities items={capabilities} columns={3} />
      )}
      {process && process.length > 0 && (
        <ProcessFlow steps={process} />
      )}
      {technologies && technologies.length > 0 && (
        <TechnologyPartners logos={technologies} />
      )}
      {benefits && benefits.length > 0 && (
        <BenefitsList benefits={benefits} />
      )}
      {relatedServices && relatedServices.length > 0 && (
        <RelatedServices services={relatedServices} />
      )}
      <CTASection title="Ready to discuss your project?" description="Speak with our team for a no-obligation consultation." primaryButton={{ text: 'Contact Us', href: '/contact' }} secondaryButton={{ text: 'Our Expertise', href: '/expertise' }} />
    </main>
  );
};

StandardServicePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default StandardServicePage;


