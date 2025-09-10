import React, { useState, useEffect, useRef } from 'react';
import './CompanyStatistics.css';

const CompanyStatistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    capabilities: 0
  });
  
  const sectionRef = useRef(null);

  const stats = [
    {
      key: 'years',
      icon: 'award',
      value: 7,
      suffix: ' Years',
      label: 'of Excellence (Since 2018)',
      duration: 2000
    },
    {
      key: 'projects',
      icon: 'rocket',
      value: 50,
      suffix: '+ Projects',
      label: 'Delivered Successfully',
      duration: 2500
    },
    {
      key: 'clients',
      icon: 'handshake',
      value: 15,
      suffix: '+ Clients',
      label: 'Including Defense & Strategic Organizations',
      duration: 2200
    },
    {
      key: 'capabilities',
      icon: 'lightning',
      value: 4,
      suffix: ' Core',
      label: 'Capabilities (Jammers, RF/Microwave, Embedded, Mechanical)',
      duration: 1800
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    stats.forEach((stat) => {
      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / stat.duration, 1);
        
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeOut * stat.value);
        
        setCounters(prev => ({
          ...prev,
          [stat.key]: currentValue
        }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    });
  }, [isVisible]);

  return (
    <section className="company-statistics section" ref={sectionRef}>
      <div className="container">
        <div className="company-statistics__header">
          <h2 className="company-statistics__title">
            Driving Innovation <span className="company-statistics__highlight">Since 2018</span>
          </h2>
          <p className="company-statistics__subtitle">
            Our journey in numbers - building trust through consistent excellence
          </p>
        </div>
        
        <div className="company-statistics__grid">
          {stats.map((stat) => (
            <div key={stat.key} className="stat-card">
              <div className={`stat-card__icon stat-card__icon--${stat.icon}`}>
                <div className="stat-card__icon-inner"></div>
              </div>
              <div className="stat-card__number">
                {counters[stat.key]}{stat.suffix}
              </div>
              <div className="stat-card__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStatistics;