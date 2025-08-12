// MediaCentre.jsx
import React from 'react';
import PageHero from '../components/sections/PageHero/PageHero';
import NewsUpdates from '../components/sections/NewsUpdates/NewsUpdates';
import './MediaCentre.css';

const MediaCentre = () => {
  // Success stories based on actual company achievements
  const successStories = [
    {
      id: 1,
      title: 'Radar System Modernization Program',
      client: 'Pakistan Armed Forces',
      category: 'Defense Systems',
      description: 'Successfully repaired and modernized multiple radar systems including Sky Guard, Giraffe, AN/PPQ-36, and MSTAR radars. Our team restored critical components including camera modules, control units, power amplifiers, and tracking systems.',
      achievements: [
        'Restored 4 major radar systems to full operational capability',
        'Reduced downtime by 60% through rapid repair services',
        'Enhanced system performance with upgraded components'
      ],
      icon: 'signal'
    },
    {
      id: 2,
      title: 'Electronic Countermeasures Deployment',
      client: 'FC KPK South',
      category: 'Security Solutions',
      description: 'Delivered comprehensive electronic warfare capabilities including advanced jammers and direction finders to enhance security operations in critical regions.',
      achievements: [
        'Deployed A5, HH, and Vehicular jammers',
        'Integrated drone jamming capabilities',
        'Provided VHF Band direction finders for signal intelligence'
      ],
      icon: 'shield-check'
    },
    {
      id: 3,
      title: 'YLC-6 Radar Power Amplifier',
      client: 'Pakistan Air Force',
      category: 'RF Systems',
      description: 'Designed and delivered a 1KW final stage power amplifier for YLC-6 surveillance radar, demonstrating our advanced RF engineering capabilities.',
      achievements: [
        'Achieved 1KW power output with high efficiency',
        'Ensured compatibility with existing radar infrastructure',
        'Completed project ahead of schedule'
      ],
      icon: 'bolt'
    },
    {
      id: 4,
      title: 'MI-17 Helicopter Avionics Restoration',
      client: 'Army Aviation - Qasim Base',
      category: 'Aviation Systems',
      description: 'Comprehensive repair of weather radar and avionics systems for MI-17 helicopters, ensuring flight safety and operational readiness.',
      achievements: [
        'Repaired multifunction displays and gauges',
        'Restored weather radar functionality',
        'Calibrated altimeter and navigation systems'
      ],
      icon: 'device-phone-mobile'
    },
    {
      id: 5,
      title: 'Strategic Organizations Support',
      client: 'KRL, NDC, NESCOM, PAEC',
      category: 'Mechanical Fabrication',
      description: 'Delivered high-precision mechanical parts and components to Pakistan\'s strategic organizations, supporting critical national programs.',
      achievements: [
        'Manufactured components with micron-level precision',
        'Provided CNC 3D & 4D machining services',
        'Supported multiple strategic projects simultaneously'
      ],
      icon: 'cog-6-tooth'
    }
  ];

  // Technology milestones
  const milestones = [
    {
      year: '2018',
      title: 'Company Established',
      description: 'RADCON Technologies founded with mission to drive indigenous development'
    },
    {
      year: '2020',
      title: 'First Jammer Series Launch',
      description: 'Introduced VJAM series vehicle-mounted jammers for RCIED protection'
    },
    {
      year: '2022',
      title: 'Radar Repair Capabilities',
      description: 'Established advanced repair facility for military radar systems'
    },
    {
      year: '2023',
      title: 'UAV Counter Systems',
      description: 'Launched RJ ADS detection system and Gun Jammer for drone threats'
    },
    {
      year: '2024',
      title: 'Expanded Product Portfolio',
      description: 'Released VJAM 800 and Next-Gen handheld jammers series'
    }
  ];

  return (
    <main className="media-centre-page" id="main-content">
      <PageHero
        title="Media Centre"
        backgroundImage="/images/media-hero.webp"
        overlay={true}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Media Centre' }
        ]}
      />

      {/* News and Updates Section */}
      <NewsUpdates 
        title="News & Updates"
        subtitle="Discover our latest product launches, innovations, and achievements"
        showFilters={true}
        itemsPerPage={6}
        compact={false}
      />

      {/* Success Stories Section */}
      <section className="success-stories">
        <div className="container">
          <div className="success-stories__header">
            <h2 className="success-stories__title">
              Client <span className="success-stories__highlight">Success Stories</span>
            </h2>
            <p className="success-stories__subtitle">
              Real-world impact through innovative technology solutions
            </p>
          </div>

          <div className="success-stories__grid">
            {successStories.map((story) => (
              <div key={story.id} className="success-story-card">
                <div className="success-story-card__header">
                  <div className="success-story-card__icon">
                    <img 
                      src={`https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/${story.icon}.svg`} 
                      alt="" 
                      aria-hidden="true" 
                    />
                  </div>
                  <span className="success-story-card__category">{story.category}</span>
                </div>
                
                <h3 className="success-story-card__title">{story.title}</h3>
                <p className="success-story-card__client">Client: {story.client}</p>
                <p className="success-story-card__description">{story.description}</p>
                
                                 <div className="success-story-card__achievements">
                   <h4>Key Achievements:</h4>
                   <ul>
                     {story.achievements.map((achievement, index) => (
                       <li key={index}>{achievement}</li>
                     ))}
                   </ul>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Milestones Timeline */}
      <section className="milestones">
        <div className="container">
          <div className="milestones__header">
            <h2 className="milestones__title">
              Technology <span className="milestones__highlight">Milestones</span>
            </h2>
            <p className="milestones__subtitle">
              Our journey of innovation and technological advancement
            </p>
          </div>

          <div className="milestones__timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="milestone">
                <div className="milestone__marker">
                  <span className="milestone__year">{milestone.year}</span>
                </div>
                <div className="milestone__content">
                  <h3 className="milestone__title">{milestone.title}</h3>
                  <p className="milestone__description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="capabilities-overview">
        <div className="container">
          <div className="capabilities-overview__header">
            <h2 className="capabilities-overview__title">
              Core <span className="capabilities-overview__highlight">Capabilities</span>
            </h2>
            <p className="capabilities-overview__subtitle">
              Comprehensive technology solutions across multiple domains
            </p>
          </div>

          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-card__icon">
                <img src="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/shield-check.svg" alt="" aria-hidden="true" />
              </div>
              <h3 className="capability-card__title">Electronic Jammers</h3>
              <p className="capability-card__description">
                Vehicle-mounted and handheld jammers from 20MHz to 6GHz, including RCIED and UAV jamming systems
              </p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon">
                <img src="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/signal.svg" alt="" aria-hidden="true" />
              </div>
              <h3 className="capability-card__title">RF & Microwave</h3>
              <p className="capability-card__description">
                Power amplifiers (1W-1KW+), LNAs, filters, mixers, and waveguides for radar and communication systems
              </p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon">
                <img src="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cpu-chip.svg" alt="" aria-hidden="true" />
              </div>
              <h3 className="capability-card__title">Embedded Systems</h3>
              <p className="capability-card__description">
                Fire control radar systems, surveillance equipment, and specialized PCBAs for defense applications
              </p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon">
                <img src="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cog-6-tooth.svg" alt="" aria-hidden="true" />
              </div>
              <h3 className="capability-card__title">Mechanical Fabrication</h3>
              <p className="capability-card__description">
                CNC machining (3D & 4D), lathe, milling, drilling, electroplating, and heat treatment services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Contact Section */}
      <section className="media-contact-simple">
        <div className="container">
          <div className="media-contact-simple__content">
            <h2 className="media-contact-simple__title">
              Get in Touch for More Information
            </h2>
            <p className="media-contact-simple__description">
              For detailed information about our products, services, or success stories, 
              please contact our team. We're here to discuss how RADCON Technologies can 
              support your technical requirements.
            </p>
            <div className="media-contact-simple__buttons">
              <a href="/contact" className="btn btn--primary">
                Contact Our Team
                <span className="btn__icon">→</span>
              </a>
              <a href="/expertise" className="btn btn--secondary">
                Explore Services
                <span className="btn__icon">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MediaCentre;