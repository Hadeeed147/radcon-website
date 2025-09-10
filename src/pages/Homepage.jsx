import React from 'react';
import Hero from '../components/Hero/Hero';
import CompanyOverview from '../components/sections/CompanyOverview/CompanyOverview';
import CompanyStatistics from '../components/sections/CompanyStatistics/CompanyStatistics';
import NewsSection from '../components/sections/NewsSection/NewsSection';
import TechnologyPartnersNew from '../components/sections/TechnologyPartnersNew/TechnologyPartnersNew';
import IndustriesWeServe from '../components/sections/IndustriesWeServe/IndustriesWeServe';
import InnovativeTechnologyDesign from '../components/sections/InnovativeTechnologyDesign/InnovativeTechnologyDesign';
import ManagementSystem from '../components/sections/ManagementSystem/ManagementSystem';
import CTASection from '../components/sections/CTASection/CTASection';

const Homepage = () => {
  return (
    <main id="main-content">
      <Hero />
      
      <CompanyOverview />
      
      <CompanyStatistics />
      
      <NewsSection />
      
      <TechnologyPartnersNew />
      
      <IndustriesWeServe />
      
      <InnovativeTechnologyDesign />
      
      <ManagementSystem 
        title="Quality Management System"
        highlightText="Quality"
      />
      
      <CTASection 
        title="Ready to Transform Your Ideas?"
        description="Let's discuss how our R&D capabilities can bring your concepts to life"
        primaryButton={{
          text: "Start Your Project",
          href: "/contact",
          ariaLabel: "Contact us to start your project"
        }}
        secondaryButton={{
          text: "View Our Process",
          href: "/expertise",
          ariaLabel: "Learn more about our development process"
        }}
      />
    </main>
  );
};

export default Homepage;