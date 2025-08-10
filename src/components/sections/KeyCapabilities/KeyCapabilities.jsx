/* KeyCapabilities.jsx - Updated with Heroicons CDN */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './KeyCapabilities.css';

// Icon mapping for capabilities
const iconMap = {
  'code': 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a.5.5 0 0 0 0-.7l-1.6-1.6a.5.5 0 0 0-.7 0l-3.8 3.8a1 1 0 0 0-1.4 0zM3.3 17.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L-3.5 18.5a.5.5 0 0 0 0 .7l1.6 1.6a.5.5 0 0 0 .7 0l3.8-3.8a1 1 0 0 0 1.4 0z',
  'server': 'M5 12V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5m-14 0h14m-14 0v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5M9 16h.01M12 16h.01M15 16h.01M9 12h.01M12 12h.01M15 12h.01',
  'database': 'M4 7v10c0 2 8 3 8 3s8-1 8-3V7M4 7c0 2 8 3 8 3s8-1 8-3M4 7c0-2 8-3 8-3s8 1 8 3m0 5c0 2-8 3-8 3s-8-1-8-3',
  'cloud': 'M7 16a4 4 0 0 1-.88-7.92A5 5 0 1 1 15.9 6.5 3.5 3.5 0 1 1 17.5 16H7z',
  'shield': 'M12 2L2 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z',
  'mobile': 'M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z',
  'api': 'M10 20l4-16m-4 6l8 4-8 4m-2-4L0 10l8-4',
  'chart': 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z',
  'integration': 'M13 10V3L4 14h7v7l9-11h-7z',
  'default': 'M13 16h-1v-4h1m0-4h.01M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z'
};

const KeyCapabilities = ({ items = [], columns = 3 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.capabilities__card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('is-visible');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const getIconUrl = (iconName) => {
    // Using Heroicons via jsdelivr CDN
    const iconMappings = {
      'code': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/code-bracket.svg',
      'server': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/server.svg',
      'database': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/circle-stack.svg',
      'cloud': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cloud.svg',
      'shield': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/shield-check.svg',
      'mobile': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/device-phone-mobile.svg',
      'api': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/code-bracket-square.svg',
      'chart': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/chart-bar.svg',
      'integration': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/puzzle-piece.svg',
      
      // New icons for various capabilities
      'lightning-bolt': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/bolt.svg',
      'bolt': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/bolt.svg',
      'cube': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cube.svg',
      'arrow-path': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/arrow-path.svg',
      'signal': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/signal.svg',
      'adjustments-horizontal': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/adjustments-horizontal.svg',
      'wrench-screwdriver': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/wrench-screwdriver.svg',
      'chart-bar': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/chart-bar.svg',
      'radio': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/radio.svg',
      'speaker-wave': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/speaker-wave.svg',
      'wifi': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/wifi.svg',
      'no-symbol': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/no-symbol.svg',
      'arrow-path-rounded-square': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/arrow-path-rounded-square.svg',
      'funnel': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/funnel.svg',
      'adjustments-vertical': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/adjustments-vertical.svg',
      'cable': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/link.svg',
      'squares-2x2': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/squares-2x2.svg',
      'arrows-pointing-out': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/arrows-pointing-out.svg',
      'fire': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/fire.svg',
      'check-badge': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/check-badge.svg',
      'cog-6-tooth': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cog-6-tooth.svg',
      'document-text': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/document-text.svg',
      'cpu-chip': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cpu-chip.svg',
      'command-line': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/command-line.svg',
      'clock': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/clock.svg',
      'link': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/link.svg',
      'arrow-up-circle': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/arrow-up-circle.svg',
      'globe-alt': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/globe-alt.svg',
      'magnifying-glass': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/magnifying-glass.svg',
      'beaker': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/beaker.svg',
      'sparkles': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/sparkles.svg',
      'calendar-days': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/calendar-days.svg',
      'puzzle-piece': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/puzzle-piece.svg',
      'phone': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/phone.svg',
      'user': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/user.svg',
      'academic-cap': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/academic-cap.svg',
      'chat-bubble-left-right': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/chat-bubble-left-right.svg',
      'document-check': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/document-check.svg',
      'arrow-trending-up': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/arrow-trending-up.svg',
      'light-bulb': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/light-bulb.svg',
      'shield-check': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/shield-check.svg',
      'users': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/users.svg',
      'star': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/star.svg',
      'user-group': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/user-group.svg',
      'banknotes': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/banknotes.svg',
      'heart': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/heart.svg',
      'folder': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/folder.svg',
      'computer-desktop': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/computer-desktop.svg',
      'arrow-right-circle': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/arrow-right-circle.svg',
      'device-phone-mobile': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/device-phone-mobile.svg',
      'finger-print': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/finger-print.svg',
      'camera': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/camera.svg',
      'paint-brush': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/paint-brush.svg',
      'default': 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cube.svg'
    };
    
    return iconMappings[iconName] || iconMappings['default'];
  };

  return (
    <section className="capabilities" aria-labelledby="capabilities-heading">
      <div className="container">
        <h2 id="capabilities-heading" className="capabilities__heading">
          Our <span className="capabilities__heading-accent">Key Capabilities</span>
        </h2>
        <p className="capabilities__subtitle">
          Comprehensive solutions powered by cutting-edge technology
        </p>
        <div 
          className={`capabilities__grid capabilities__grid--${columns}`} 
          ref={containerRef}
        >
          {items.map((item, idx) => (
            <article key={idx} className="capabilities__card">
              <div className="capabilities__icon">
                <img 
                  src={typeof item.icon === 'string' && item.icon.startsWith('/') ? item.icon : getIconUrl(item.icon)} 
                  alt="" 
                  aria-hidden="true"
                />
              </div>
              <h3 className="capabilities__title">{item.title}</h3>
              <p className="capabilities__desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

KeyCapabilities.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  columns: PropTypes.oneOf([2, 3, 4]),
};

export default KeyCapabilities;