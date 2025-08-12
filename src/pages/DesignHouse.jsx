// DesignHouse.jsx
import React from 'react';
import PageHero from '../components/sections/PageHero/PageHero';
import CTASection from '../components/sections/CTASection/CTASection';
import './DesignHouse.css';

const DesignHouse = () => {
  const breadcrumbs = [
    { label: 'HOME', href: '/' },
    { label: 'DESIGN HOUSE' }
  ];

  return (
    <main className="design-house-page" id="main-content">
      {/* Hero Section using PageHero component */}
      <PageHero
        title="An Innovative Technology Design House"
        backgroundImage="/images/design-house-hero.webp"
        breadcrumbs={breadcrumbs}
        overlay={true}
      />

      {/* Main Intro Section */}
      <section className="design-intro">
        <div className="container">
          <div className="design-intro__content">
            <h2 className="design-intro__title">
              We turn <span className="highlight-blue">your ideas</span> into{' '}
              <span className="highlight-green">incredible products</span>
            </h2>
            <p className="design-intro__description">
              RADCON provides all the services that a state-of-the-art design house provides. Bring us your innovative ideas, and 
              we will use our technology and expertise to turn them into products that are guaranteed to make waves in the 
              industry. We cover a complete spectrum from concept to design, manufacturing and after-market services under 
              our ODM and OEM operations, backed by extensive R&D capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* ODM Section */}
      <section className="service-section service-section--odm">
        <div className="container">
          <div className="service-grid">
            <div className="service-content">
              <h2 className="service-title">
                Original Design Manufacturing<br />
                <span className="service-subtitle">(ODM)</span>
              </h2>
              <p className="service-description">
                All you have to bring is an idea, and our team takes care of all the rest to deliver a great product.
              </p>
              <p className="service-text">
                We transform your ideas into products built with the latest design practices and manufacturing support. 
                Through rapid prototyping, we evolve the results as per the client requirements. Everything from technical 
                specification and regulatory compliance to product aesthetics is taken care by RADCON to ensure a commercially 
                viable final product.
              </p>
              <p className="service-text">
                ODM is the perfect solution if you're looking for a partner in the ideation and manufacture of a completely 
                customized solution according to your requirements. The lack of design & manufacturing capabilities shouldn't 
                stop you from coming up with impactful ideas, because we're here to help you all of that.
              </p>
              
              <div className="service-capabilities">
                <h3>Our ODM Capabilities Include:</h3>
                <ul className="service-list">
                  <li>Complete electronic system design (embedded systems, RF/microwave)</li>
                  <li>PCB design and layout (up to 24 layers, HDI, rigid-flex)</li>
                  <li>Mechanical design and enclosure development</li>
                  <li>Firmware and software development</li>
                  <li>Rapid prototyping and testing</li>
                  <li>Compliance and certification support</li>
                  <li>Small to medium batch production</li>
                </ul>
              </div>
            </div>
                         <div className="service-image">
               <img 
                 src="/images/odm.jpg" 
                 alt="Original Design Manufacturing - PCB Design & Assembly" 
                 className="service-image__img"
               />
             </div>
          </div>
        </div>
      </section>

      {/* OEM Section */}
      <section className="service-section service-section--oem">
        <div className="container">
          <div className="service-grid service-grid--reverse">
                         <div className="service-image">
               <img 
                 src="/images/oem.jpg" 
                 alt="Original Equipment Manufacturing - Technical Blueprints" 
                 className="service-image__img"
               />
             </div>
            <div className="service-content">
              <h2 className="service-title">
                Original Equipment<br />
                <span className="service-subtitle">Manufacturing (OEM)</span>
              </h2>
              <p className="service-description">
                Your product blueprints turn into reality with our Original Equipment Manufacturing capabilities.
              </p>
              <p className="service-text">
                Our design and engineering team, comprised of mechanical and electrical engineers as well as industrial 
                designers, work efficiently and effectively to develop your required equipment on time and on budget. 
                We are best known for innovative equipment design, integrations, and unique deployment capabilities.
              </p>
              <p className="service-text">
                This is perfect for businesses that have a clear idea of what they want and have their own designs in place. 
                We work alongside you to improve and manufacture your plans so the finished product is even better than what 
                you expect it to be. So you can focus on brilliant ideas, and leave the technicalities of hardware and 
                infrastructure to us.
              </p>
              
              <div className="service-capabilities">
                <h3>Our OEM Services Cover:</h3>
                <ul className="service-list">
                  <li>Electronic jammers and countermeasure systems</li>
                  <li>RF power amplifiers (1W to 1KW+)</li>
                  <li>Radar system components and subsystems</li>
                  <li>Embedded control systems for defense applications</li>
                  <li>Power supply units and converters</li>
                  <li>Custom mechanical fabrication (CNC, 3D/4D machining)</li>
                  <li>System integration and testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Section */}
      <section className="service-section service-section--rd">
        <div className="container">
          <div className="service-grid">
            <div className="service-content">
              <h2 className="service-title">
                Research & Development<br />
                <span className="service-subtitle">(R&D)</span>
              </h2>
              <p className="service-description">
                Our R&D services deliver a vision for the future.
              </p>
              <p className="service-text">
                In the context of technology, qualified research and development of new solutions holds fundamental importance. 
                RADCON has a dedicated in-house research and development team working full time with product development and 
                technology research. We identify the technologies, components and design solutions required to deliver a vision 
                for the future.
              </p>
              <p className="service-text">
                The advantages we bring to the table in terms of risk elimination are not found with anyone else. We also 
                provide research-based optimization services for your existing products with respect to technology and 
                functionality.
              </p>
              
              <div className="service-capabilities">
                <h3>R&D Focus Areas:</h3>
                <ul className="service-list">
                  <li>Next-generation jamming technologies (RCIED, UAV)</li>
                  <li>Advanced radar signal processing</li>
                  <li>Software-defined radio (SDR) systems</li>
                  <li>AI/ML integration in embedded systems</li>
                  <li>High-efficiency RF power amplification</li>
                  <li>Miniaturization of electronic warfare systems</li>
                  <li>Advanced materials for harsh environments</li>
                </ul>
              </div>
            </div>
                         <div className="service-image">
               <img 
                 src="/images/r&d.jpg" 
                 alt="Research & Development Laboratory" 
                 className="service-image__img"
               />
             </div>
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="core-technologies">
        <div className="container">
          <h2 className="core-technologies__title">
            Our Core <span className="highlight-blue">Technology</span> Domains
          </h2>
          <div className="technology-grid">
                         <div className="technology-card">
               <div className="technology-card__icon">
                 <img src="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/signal.svg" alt="" aria-hidden="true" />
               </div>
               <h3 className="technology-card__title">RF & Microwave</h3>
               <p className="technology-card__description">
                 Power amplifiers, LNAs, filters, mixers, waveguides, and phase shifters for radar, 
                 communication, and jamming applications.
               </p>
             </div>
             <div className="technology-card">
               <div className="technology-card__icon">
                 <img src="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cpu-chip.svg" alt="" aria-hidden="true" />
               </div>
               <h3 className="technology-card__title">Embedded Systems</h3>
               <p className="technology-card__description">
                 Fire control radar systems, surveillance equipment, SDRs, and specialized PCBAs for 
                 defense and industrial applications.
               </p>
             </div>
             <div className="technology-card">
               <div className="technology-card__icon">
                 <img src="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/shield-check.svg" alt="" aria-hidden="true" />
               </div>
               <h3 className="technology-card__title">Electronic Warfare</h3>
               <p className="technology-card__description">
                 Broadband RCIED & UAV jamming systems, direction finders, and advanced countermeasure 
                 technologies.
               </p>
             </div>
             <div className="technology-card">
               <div className="technology-card__icon">
                 <img src="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/bolt.svg" alt="" aria-hidden="true" />
               </div>
               <h3 className="technology-card__title">Power Systems</h3>
               <p className="technology-card__description">
                 High-voltage power supplies, rectifier units, SMPS designs, and power management 
                 solutions for critical systems.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="process-flow">
        <div className="container">
          <h2 className="process-flow__title">
            Our Design & Development <span className="highlight-green">Process</span>
          </h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step__number">01</div>
              <h3 className="process-step__title">Concept & Consultation</h3>
              <p className="process-step__description">
                Initial requirements gathering, feasibility analysis, and technical consultation
              </p>
            </div>
            <div className="process-step__arrow">→</div>
            <div className="process-step">
              <div className="process-step__number">02</div>
              <h3 className="process-step__title">Design & Prototyping</h3>
              <p className="process-step__description">
                Detailed design, simulation, rapid prototyping, and iterative refinement
              </p>
            </div>
            <div className="process-step__arrow">→</div>
            <div className="process-step">
              <div className="process-step__number">03</div>
              <h3 className="process-step__title">Testing & Validation</h3>
              <p className="process-step__description">
                Comprehensive testing, compliance verification, and performance validation
              </p>
            </div>
            <div className="process-step__arrow">→</div>
            <div className="process-step">
              <div className="process-step__number">04</div>
              <h3 className="process-step__title">Production & Delivery</h3>
              <p className="process-step__description">
                Manufacturing, quality control, packaging, and timely delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RADCON Section */}
      <section className="why-choose">
        <div className="container">
          <h2 className="why-choose__title">
            Why Choose <span className="highlight-blue">RADCON</span> as Your Design Partner
          </h2>
          <div className="advantages-grid">
                         <div className="advantage-card">
               <div className="advantage-card__icon">
                 <img src="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/target.svg" alt="" aria-hidden="true" />
               </div>
               <h3 className="advantage-card__title">Mission-Critical Expertise</h3>
               <p className="advantage-card__description">
                 Proven track record with defense forces, strategic organizations, and critical infrastructure
               </p>
             </div>
             <div className="advantage-card">
               <div className="advantage-card__icon">
                 <img src="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/building-office.svg" alt="" aria-hidden="true" />
               </div>
               <h3 className="advantage-card__title">End-to-End Capabilities</h3>
               <p className="advantage-card__description">
                 Complete in-house facilities from design to manufacturing, testing to deployment
               </p>
             </div>
             <div className="advantage-card">
               <div className="advantage-card__icon">
                 <img src="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/wrench-screwdriver.svg" alt="" aria-hidden="true" />
               </div>
               <h3 className="advantage-card__title">Indigenous Development</h3>
               <p className="advantage-card__description">
                 Committed to local technology development, reducing dependency on imports
               </p>
             </div>
             <div className="advantage-card">
               <div className="advantage-card__icon">
                 <img src="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/bolt.svg" alt="" aria-hidden="true" />
               </div>
               <h3 className="advantage-card__title">Rapid Turnaround</h3>
               <p className="advantage-card__description">
                 Agile development process ensuring quick prototyping and faster time-to-market
               </p>
             </div>
             <div className="advantage-card">
               <div className="advantage-card__icon">
                 <img src="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/lock-closed.svg" alt="" aria-hidden="true" />
               </div>
               <h3 className="advantage-card__title">Security & Compliance</h3>
               <p className="advantage-card__description">
                 Adherence to military standards, information security, and regulatory compliance
               </p>
             </div>
             <div className="advantage-card">
               <div className="advantage-card__icon">
                 <img src="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/hand-thumb-up.svg" alt="" aria-hidden="true" />
               </div>
               <h3 className="advantage-card__title">Lifetime Support</h3>
               <p className="advantage-card__description">
                 Comprehensive after-sales support, maintenance, and upgrade services
               </p>
             </div>
          </div>
        </div>
      </section>

             {/* CTA Section */}
       <CTASection
         title="Let's Work Together"
         description="Get in touch now to start a project and collectively shape tomorrow's world"
         primaryButton={{
           text: "Start Your Project",
           href: "/contact"
         }}
       />
    </main>
  );
};

export default DesignHouse;