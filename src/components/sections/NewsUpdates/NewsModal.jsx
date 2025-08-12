import React from 'react';
import PropTypes from 'prop-types';
import './NewsModal.css';

const NewsModal = ({ isOpen, onClose, newsItem }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !newsItem) return null;

  return (
    <div className="news-modal-overlay" onClick={handleBackdropClick}>
      <div className="news-modal">
        <button className="news-modal__close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="news-modal__header">
          <div className="news-modal__icon-wrapper">
            <img 
              src={`https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/${newsItem.icon}.svg`} 
              alt="" 
              aria-hidden="true" 
              className="news-modal__icon"
            />
          </div>
          <div className="news-modal__meta">
            <span className="news-modal__category">{newsItem.category}</span>
            <span className="news-modal__date">{formatDate(newsItem.date)}</span>
            <span className="news-modal__readtime">{newsItem.readTime}</span>
          </div>
        </div>

        <div className="news-modal__content">
          <h2 className="news-modal__title">{newsItem.title}</h2>
          <div className="news-modal__excerpt">
            <p>{newsItem.excerpt}</p>
          </div>
          
          {/* Additional content can be added here */}
          <div className="news-modal__details">
            <h3>Key Highlights</h3>
            <ul>
              <li>Advanced technology implementation</li>
              <li>Enhanced security and performance</li>
              <li>Comprehensive system integration</li>
              <li>Proven reliability and efficiency</li>
            </ul>
          </div>
        </div>

        <div className="news-modal__footer">
          <button className="news-modal__btn news-modal__btn--primary" onClick={onClose}>
            Close
          </button>
          <a href="/contact" className="news-modal__btn news-modal__btn--secondary">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

NewsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  newsItem: PropTypes.object
};

export default NewsModal;
