import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import './TechnologyPartners.css';

const TechnologyPartners = ({ logos = [], speed = 30, pauseOnHover = true, direction = 'left', rows = 1 }) => {
  const duplicated = useMemo(() => [...logos, ...logos], [logos]);
  const cssVars = { '--marquee-duration': `${speed}s` };
  const dirClass = direction === 'right' ? 'marquee--reverse' : '';
  const hoverClass = pauseOnHover ? 'marquee--pause-on-hover' : '';

  return (
    <section className="tech-partners section">
      <div className={`marquee ${dirClass} ${hoverClass}`} style={cssVars} aria-label="Technology partners logos">
        <div className="marquee__track">
          {duplicated.map((logo, idx) => (
            <div className="marquee__item" key={idx}>
              <img src={logo.logo || logo} alt={logo.name || 'Partner logo'} loading="lazy" />
            </div>
          ))}
        </div>
        {rows === 2 && (
          <div className="marquee__track marquee__track--second">
            {duplicated.map((logo, idx) => (
              <div className="marquee__item" key={`r2-${idx}`}>
                <img src={logo.logo || logo} alt={logo.name || 'Partner logo'} loading="lazy" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

TechnologyPartners.propTypes = {
  logos: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ name: PropTypes.string, logo: PropTypes.string.isRequired })
  ])).isRequired,
  speed: PropTypes.number,
  pauseOnHover: PropTypes.bool,
  direction: PropTypes.oneOf(['left', 'right']),
  rows: PropTypes.oneOf([1,2]),
};

export default TechnologyPartners;


