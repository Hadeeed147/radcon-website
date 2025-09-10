import React from 'react';
import './InnovativeTechnologyDesign.css';

const InnovativeTechnologyDesign = () => {
  const processSteps = [
    {
      id: 1,
      icon: 'lightbulb',
      title: 'Your Idea',
      subtitle: 'Concept & Requirements',
      description: 'Share your vision and technical requirements with our expert team'
    },
    {
      id: 2,
      icon: 'document',
      title: 'Our Execution',
      subtitle: 'Design & Development',
      description: 'Comprehensive R&D process from design to prototyping and testing'
    },
    {
      id: 3,
      icon: 'cube',
      title: 'A Perfect End Product',
      subtitle: 'Testing & Delivery',
      description: 'Fully tested, production-ready solutions delivered to your specifications'
    }
  ];

  return (
    <section className="innovative-tech-design section">
      <div className="container">
        <div className="innovative-tech-design__header">
          <h2 className="innovative-tech-design__title">
            An Innovative <span className="innovative-tech-design__highlight">Technology</span> Design House
          </h2>
          <p className="innovative-tech-design__subtitle">
            Our Research & Development capabilities bring your ideas to life through ODM and OEM services
          </p>
        </div>
        
        <div className="innovative-tech-design__process">
          {processSteps.map((step, index) => (
            <div key={step.id} className="process-step">
              <div className={`process-step__icon process-step__icon--${step.icon}`}>
                <div className="process-step__icon-inner"></div>
              </div>
              
              <div className="process-step__content">
                <h3 className="process-step__title">{step.title}</h3>
                <h4 className="process-step__subtitle">{step.subtitle}</h4>
                <p className="process-step__description">{step.description}</p>
              </div>
              
              {index < processSteps.length - 1 && (
                <div className="process-step__arrow">
                  <div className="process-step__arrow-line"></div>
                  <div className="process-step__arrow-head"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="innovative-tech-design__cta">
          <a href="/design-house" className="btn btn--primary">
            Learn More About Our Process
            <span className="btn__icon">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InnovativeTechnologyDesign;