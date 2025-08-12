// AboutUs.jsx - Usage Example
import React from 'react';
import PageHero from '../components/sections/PageHero/PageHero';
import CompanyIntro from '../components/sections/CompanyIntro/CompanyIntro';
import WhyChooseUs from '../components/sections/WhyChooseUs/WhyChooseUs';
import VisionSection from '../components/sections/VisionSection/VisionSection';
import MissionSection from '../components/sections/MissionSection/MissionSection';
import ManagementSystem from '../components/sections/ManagementSystem/ManagementSystem';
import PartnersSection from '../components/sections/PartnersSection/PartnersSection';
import CTASection from '../components/sections/CTASection/CTASection';

const AboutUs = () => {
  // Breadcrumbs for PageHero
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us' }
  ];

  // Data for WhyChooseUs component
  const whyUsData = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Proven Expertise',
      description: 'Our highly qualified consultants bring years of specialized experience in RF communications, cybersecurity, and advanced technology solutions, delivering fast and reliable services with an exceptional track record of client satisfaction.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Innovation & Excellence',
      description: 'Quality and operational excellence form the cornerstone of our strategic vision. Our commitment to innovation and superior engineering has earned global recognition and trust from industry leaders worldwide.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Sustainable Solutions',
      description: 'Our innovative product line and technological breakthroughs enhance our mission to protect people and equipment while driving sustainable growth. We develop solutions that not only meet today\'s needs but anticipate tomorrow\'s challenges.'
    }
  ];

  // Data for VisionSection component
  const visionImages = [
    { src: '/images/vision-1.jpg', alt: 'Innovation in technology', className: 'vision-image--large' },
    { src: '/images/vision-2.jpg', alt: 'Technical expertise', className: 'vision-image--small' },
    { src: '/images/vision-3.jpg', alt: 'Quality solutions', className: 'vision-image--small' }
  ];

  // Data for MissionSection component
  const missionImages = [
    { src: '/images/mission-1.jpg', alt: 'Strategic planning', className: 'mission-image--large' },
    { src: '/images/mission-2.jpg', alt: 'Technology development', className: 'mission-image--medium' },
    { src: '/images/mission-3.jpg', alt: 'Team collaboration', className: 'mission-image--small' },
  ];

  // Data for ManagementSystem component
  const managementSystemData = [
    { label: 'ISO 9001:2015 Quality Management', icon: '✓' },
    { label: 'ISO 27001 Information Security', icon: '✓' },
    { label: 'ISO 14001 Environmental Management', icon: '✓' },
    { label: 'ISO 45001 Occupational Health & Safety', icon: '✓' },
    { label: 'ISO 20000 IT Service Management', icon: '✓' },
    { label: 'ISO 22301 Business Continuity', icon: '✓' }
  ];

  return (
    <div className="about-us-page">
      <PageHero
        title="About Us"
        backgroundImage="/images/about-hero-bg.jpg"
        breadcrumbs={breadcrumbs}
        overlay={true}
      />

      <CompanyIntro
        title="Pioneering Excellence in Technology Solutions Since 2018"
        description="RADCON stands at the forefront of technological innovation, delivering cutting-edge hardware and software solutions that redefine industry standards. As a trusted partner to leading organizations worldwide, we specialize in RF communications, cybersecurity, advanced hardware design, and comprehensive software development. Our team of seasoned experts brings decades of combined experience to every project, ensuring that our clients receive not just solutions, but strategic advantages that drive their success in an increasingly competitive marketplace."
        highlightText="technology solutions"
      />

      <WhyChooseUs cards={whyUsData} />

      <VisionSection
        subtitle="Our Vision"
        title="Empowering the Future Through Innovative Technology"
        description="We envision a world where advanced technology seamlessly integrates with human needs, creating safer, more efficient, and more connected environments. Our commitment is to be the global leader in delivering transformative technology solutions that not only meet today's challenges but anticipate and solve tomorrow's problems. We strive to be recognized worldwide as the premier organization that delivers life-enhancing technological innovations to clients and communities alike."
        images={visionImages}
      />

      <MissionSection
        subtitle="Our Mission"
        title="Delivering Comprehensive Technology Excellence Across Every Industry"
        description="Our mission is to be the definitive end-to-end technology solutions partner for organizations seeking to harness the power of innovation. We provide cutting-edge, cost-effective solutions through pioneering approaches, backed by our superior technological expertise and meticulously refined processes. From initial consultation to final implementation and ongoing support, we ensure flawless execution that exceeds expectations and drives measurable results for our clients across diverse industries."
        images={missionImages}
      />

      <ManagementSystem
        title="Quality Assurance & Certification Excellence"
        highlightText="Certification"
        items={managementSystemData}
      />

      <PartnersSection
        subtitle="Strategic Partnerships"
        title="Collaborating with Industry Leaders Worldwide"
        description="At RADCON, we believe in the power of strategic partnerships to deliver exceptional value to our clients. We collaborate with leading technology providers, industry pioneers, and innovative organizations worldwide to expand our capabilities and ensure our clients receive the most comprehensive, cutting-edge solutions available in the market. These partnerships enable us to stay at the forefront of technological advancement while providing unparalleled service quality."
        logos={[
          { src: '/images/partner-logo-1.svg', alt: 'Technology Partner 1' },
          { src: '/images/partner-logo-2.svg', alt: 'Industry Leader 2' },
          { src: '/images/partner-logo-3.svg', alt: 'Strategic Partner 3' },
          { src: '/images/partner-logo-4.svg', alt: 'Global Partner 4' },
          { src: '/images/partner-logo-5.svg', alt: 'Innovation Partner 5' },
          { src: '/images/partner-logo-6.svg', alt: 'Solutions Partner 6' },
        ]}
        speed={15}
        pauseOnHover={true}
      />

      <CTASection
        title="Ready to Transform Your Technology Infrastructure?"
        description="Partner with RADCON to unlock the full potential of advanced technology solutions. Our expert team is ready to collaborate with you to design, implement, and optimize cutting-edge systems that will drive your organization into the future. Let's work together to turn your technological vision into reality."

        secondaryButton={{
          text: "Schedule Consultation",
          href: "/contact",
          ariaLabel: "Schedule a consultation with our experts"
        }}
      />
    </div>
  );
};

export default AboutUs;