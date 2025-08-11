import React from 'react';
import PropTypes from 'prop-types';
import './ApplicationsGrid.css';

const ApplicationsGrid = ({ title, subtitle, applications }) => {
  const getIcon = (iconName) => {
    // SVG Icon mapping for consistency with expertise template
    const icons = {
      'industry': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 2h12v20H6zm2 2v16h8V4H8zm2 2h4v2h-4V6zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2z"/>
        </svg>
      ),
      'aerospace': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      ),
      'medical': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-2h2v2zm0-4h-2V7h2v8zm1-8h2v8h-2V7zm2-2h-2V3h2v2z"/>
        </svg>
      ),
      'automotive': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      ),
      'telecom': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      'energy': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
        </svg>
      ),
      'marine': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l-.01-.38c-.49-4.19-1.69-6.99-2.87-8.6C16.74 9.46 14.44 9 12 9s-4.74.46-5.17 1.02C5.65 11.63 4.45 14.43 3.96 18.62L3.95 19z"/>
        </svg>
      ),
      'rail': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zM12 17c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm6-7H6V5h12v5z"/>
        </svg>
      ),
      'defense': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.4C15.4,11.7 15.8,12.3 15.8,13V16C15.8,16.6 15.3,17 14.8,17H9.2C8.6,17 8.2,16.6 8.2,16V13C8.2,12.3 8.6,11.7 9.2,11.4V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.3H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
        </svg>
      ),
      'research': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
        </svg>
      ),
      'commercial': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M5,13H7V19H5V13M10,13H12V19H10V13M15,13H17V19H15V13M2,20H20V21H2V20M4,2V4H20V2H4M2,4V6H6V4H2M22,4V6H18V4H22M4,8H20V11H4V8Z"/>
        </svg>
      ),
      'residential': (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"/>
        </svg>
      )
    };
    return icons[iconName] || (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
      </svg>
    );
  };
  
  return (
    <section className="applications-grid">
      <div className="container">
        <div className="applications-grid__header">
          <h2 className="applications-grid__title">{title || 'Applications & Use Cases'}</h2>
          {subtitle && <p className="applications-grid__subtitle">{subtitle}</p>}
        </div>
        
        <div className="applications-grid__grid">
          {applications.map((app, index) => (
            <div key={index} className="applications-grid__item">
              <div className="applications-grid__item-icon">
                {getIcon(app.icon)}
              </div>
              <h3 className="applications-grid__item-title">{app.title}</h3>
              <p className="applications-grid__item-description">{app.description}</p>
              {app.examples && (
                <ul className="applications-grid__item-examples">
                  {app.examples.map((example, idx) => (
                    <li key={idx}>{example}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

ApplicationsGrid.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  applications: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    examples: PropTypes.arrayOf(PropTypes.string)
  })).isRequired
};

export default ApplicationsGrid;