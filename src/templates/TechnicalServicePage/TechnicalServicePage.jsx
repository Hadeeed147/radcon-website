import React from 'react';
import PropTypes from 'prop-types';
import PageHero from '../../components/sections/PageHero/PageHero';
import ServiceOverview from '../../components/sections/ServiceOverview/ServiceOverview';
import KeyCapabilities from '../../components/sections/KeyCapabilities/KeyCapabilities';
import ProcessFlow from '../../components/sections/ProcessFlow/ProcessFlow';
import TechnologyPartners from '../../components/sections/TechnologyPartners/TechnologyPartners';
import BenefitsList from '../../components/sections/BenefitsList/BenefitsList';
import CTASection from '../../components/sections/CTASection/CTASection';
import './TechnicalServicePage.css';

const TechnicalServicePage = ({ data }) => {
  const { hero, overview, capabilities, process, technologies, benefits } = data;
  return (
    <main className="tech-page" id="main-content">
      <PageHero {...hero} />
      <section className="section">
        <div className="container tech-page__title">
          <h2 className="section-title">
            <span className="section-title__accent">{data.meta?.title?.split(' ')[0] || 'Our'}</span>{' '}
            <span className="section-title__rest">{data.meta?.title?.split(' ').slice(1).join(' ') || 'Expertise'}</span>
          </h2>
        </div>
      </section>
      <ServiceOverview {...overview} imagePosition="left" />
      {technologies && technologies.length > 0 && (
        <TechnologyPartners logos={technologies} />
      )}
      {capabilities && capabilities.length > 0 && (
        <KeyCapabilities items={capabilities} columns={4} />
      )}
      {process && process.length > 0 && (
        <ProcessFlow steps={process} />
      )}
      {benefits && benefits.length > 0 && (
        <BenefitsList benefits={benefits} />
      )}
      <CTASection title="Need a technical deep-dive?" description="Our engineers can help architect the right solution." primaryButton={{ text: 'Talk to an Engineer', href: '/contact' }} secondaryButton={{ text: 'View Case Studies', href: '/case-studies' }} />
    </main>
  );
};

TechnicalServicePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TechnicalServicePage;


