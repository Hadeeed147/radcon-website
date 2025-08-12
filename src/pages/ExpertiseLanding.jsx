import React from 'react';
import PageHero from '../components/sections/PageHero/PageHero';
import CTASection from '../components/sections/CTASection/CTASection';
import './ExpertiseLanding.css';

const ExpertiseLanding = () => {
  const breadcrumbs = [
    { label: 'HOME', href: '/' },
    { label: 'EXPERTISE', href: '/expertise' }
  ];

  const categories = [
    {
      id: 'software',
      title: 'Software',
      subtitle: 'Digital Solutions & Applications',
      description: 'Transform your business with cutting-edge software solutions. From web applications to mobile apps and enterprise systems, we deliver scalable, secure, and innovative digital solutions that drive growth and efficiency.',
      image: '/images/web-development-image.webp',
      icon: '💻',
      services: [
        'Web & Application Development',
        'Mobile App Development',
        'Database Design & Development',
      ],
      color: 'var(--color-primary)'
    },
    {
      id: 'hardware',
      title: 'Hardware',
      subtitle: 'Electronics & Embedded Systems',
      description: 'Design and develop mission-critical hardware solutions. Our expertise spans power systems, RF/microwave technology, PCB design, embedded systems, and diagnostic services for defense and industrial applications.',
      image: '/images/embedded-systems-image.webp',
      icon: '🔧',
      services: [
        'Power Solutions',
        'RF/Microwave Solutions',
        'Printed Circuit Board (PCB)',
        'Embedded Systems',
        'Diagnostic Services',
        'Electro Mechanical Solutions'
      ],
      color: 'var(--color-secondary)'
    },
    {
      id: 'lifecycle',
      title: 'Lifecycle Support',
      subtitle: 'End-to-End Service Management',
      description: 'Comprehensive lifecycle support services ensure your systems operate at peak performance. From CRM solutions to hardware maintenance, we provide ongoing support that maximizes uptime and minimizes operational costs.',
      image: '/images/lifecycle-support-image.webp',
      icon: '🔄',
      services: [
        'Customer Relationship Management (CRM)',
        'Hardware Lifecycle Support',
      ],
      color: '#2c5282'
    },
    {
      id: 'hr-engineering',
      title: 'HR & Engineering Services',
      subtitle: 'Talent & Technical Excellence',
      description: 'Access specialized engineering expertise and HR services tailored for technology companies. Our team provides strategic talent acquisition, engineering consulting, and project management to accelerate your success.',
      image: '/images/hr-services-image.webp',
      icon: '👥',
      services: [
        'HR Services',
        'Engineering Services',
      ],
      color: '#38a169'
    }
  ];

  return (
    <main className="expertise-landing" id="main-content">
      {/* Hero Section */}
      <PageHero
        title="Expertise That Drives Innovation"
        backgroundImage="/images/engineering-hero.webp"
        breadcrumbs={breadcrumbs}
        overlay={true}
      />

      {/* Introduction Section */}
      <section className="expertise-intro">
        <div className="container">
          <div className="expertise-intro__content">
            <h2 className="expertise-intro__title">
              We are the award-winning solutions partner your business needs
            </h2>
            <p className="expertise-intro__description">
              At RADCON Technologies, we bring together deep technical expertise, innovative thinking, and proven methodologies to deliver solutions that transform businesses. From concept to deployment, our comprehensive approach ensures success across software, hardware, lifecycle support, and specialized services.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="expertise-categories">
        <div className="container">
          <div className="expertise-categories__header">
            <h2 className="expertise-categories__title">Discover Our Expertise</h2>
            <p className="expertise-categories__subtitle">
              Explore our four core areas of expertise, each designed to address specific business challenges and drive technological advancement.
            </p>
          </div>

          <div className="expertise-categories__grid">
            {categories.map((category, index) => (
              <div key={category.id} className="expertise-category-card">
                <div className="expertise-category-card__image">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="expertise-category-card__img"
                  />
                  <div className="expertise-category-card__overlay">
                    <span className="expertise-category-card__icon">{category.icon}</span>
                  </div>
                </div>
                
                <div className="expertise-category-card__content">
                  <div className="expertise-category-card__header">
                    <h3 className="expertise-category-card__title">{category.title}</h3>
                    <p className="expertise-category-card__subtitle">{category.subtitle}</p>
                  </div>
                  
                  <p className="expertise-category-card__description">
                    {category.description}
                  </p>
                  
                  <div className="expertise-category-card__services">
                    <h4 className="expertise-category-card__services-title">Key Services:</h4>
                    <ul className="expertise-category-card__services-list">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="expertise-category-card__service">
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                                     <div 
                     className="expertise-category-card__info"
                     style={{ '--category-color': category.color }}
                   >
                     <span className="expertise-category-card__info-text">
                       {category.title} Expertise
                     </span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="expertise-why-choose">
        <div className="container">
          <div className="expertise-why-choose__content">
            <h2 className="expertise-why-choose__title">Why Choose RADCON Technologies?</h2>
            
            <div className="expertise-why-choose__grid">
              <div className="expertise-why-choose__item">
                <div className="expertise-why-choose__icon">🏆</div>
                <h3 className="expertise-why-choose__item-title">Proven Track Record</h3>
                <p className="expertise-why-choose__item-description">
                  Decades of experience delivering mission-critical solutions for defense, government, and commercial sectors.
                </p>
              </div>
              
              <div className="expertise-why-choose__item">
                <div className="expertise-why-choose__icon">🔬</div>
                <h3 className="expertise-why-choose__item-title">Innovation Focus</h3>
                <p className="expertise-why-choose__item-description">
                  Cutting-edge technologies and methodologies to solve complex challenges and drive competitive advantage.
                </p>
              </div>
              
              <div className="expertise-why-choose__item">
                <div className="expertise-why-choose__icon">🤝</div>
                <h3 className="expertise-why-choose__item-title">Partnership Approach</h3>
                <p className="expertise-why-choose__item-description">
                  Collaborative development process ensuring solutions perfectly align with your business objectives.
                </p>
              </div>
              
              <div className="expertise-why-choose__item">
                <div className="expertise-why-choose__icon">⚡</div>
                <h3 className="expertise-why-choose__item-title">End-to-End Solutions</h3>
                <p className="expertise-why-choose__item-description">
                  Complete service portfolio from concept to deployment, maintenance, and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Let's discuss how our expertise can help you achieve your technology goals and drive innovation in your industry."
        primaryButton={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Learn More About Us",
          href: "/about-us"
        }}
      />
    </main>
  );
};

export default ExpertiseLanding;
