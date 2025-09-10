import React, { useState } from 'react';
import NewsModal from '../NewsUpdates/NewsModal';
import './NewsSection.css';

const NewsSection = () => {
  const [selectedNewsItem, setSelectedNewsItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Featured news data for homepage
  const featuredNews = [
    {
      id: 1,
      category: 'Product Launch',
      title: 'VJAM 800 Advanced Wide-Spectrum Jammer Released',
      excerpt: 'Our most powerful vehicle-mounted jammer covering 20MHz to 6GHz with 1000W output power, providing comprehensive protection against RCIED threats.',
      date: '2024-11-20',
      readTime: '3 min read',
      icon: 'shield-check'
    },
    {
      id: 2,
      category: 'Client Success',
      title: 'Electronic Countermeasures Delivered to FC KPK',
      excerpt: 'Completed deployment of advanced jamming systems including A5, HH, Vehicular & Drone Jammers for enhanced security operations.',
      date: '2024-10-15',
      readTime: '2 min read',
      icon: 'check-badge'
    },
    {
      id: 3,
      category: 'Technology',
      title: 'Next-Gen Handheld Jammers NG Series Launched',
      excerpt: 'Introducing NG1, NG2, and NG3 portable jammers with programmable spots, covering VHF, UHF, and ISM bands with enhanced battery life.',
      date: '2024-09-10',
      readTime: '4 min read',
      icon: 'device-phone-mobile'
    }
  ];

  const handleNewsItemClick = (newsItem) => {
    setSelectedNewsItem(newsItem);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNewsItem(null);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="news-section section">
      <div className="news-section__background">
        <div 
          className="news-section__background-desktop"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/globe-desktop.webp)`
          }}
        ></div>
        <div 
          className="news-section__background-mobile"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/globe-mobile.webp)`
          }}
        ></div>
        <div className="news-section__overlay"></div>
      </div>
      
      <div className="container">
        <div className="news-section__header">
          <h2 className="news-section__title">
            Latest News & <span className="news-section__highlight">Updates</span>
          </h2>
          <p className="news-section__subtitle">
            Stay informed about our latest innovations and achievements
          </p>
        </div>
        
        <div className="news-section__grid">
          {featuredNews.map((item) => (
            <article key={item.id} className="news-item">
              <div className="news-item__icon-wrapper">
                <div className="news-item__icon">
                  <img 
                    src={`https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/${item.icon}.svg`} 
                    alt="" 
                    aria-hidden="true" 
                  />
                </div>
              </div>

              <div className="news-item__content">
                <div className="news-item__meta">
                  <span className="news-item__category">{item.category}</span>
                  <span className="news-item__separator">•</span>
                  <span className="news-item__date">{formatDate(item.date)}</span>
                  <span className="news-item__separator">•</span>
                  <span className="news-item__readtime">{item.readTime}</span>
                </div>

                <h3 className="news-item__title">
                  <button 
                    onClick={() => handleNewsItemClick(item)}
                    className="news-item__title-btn"
                  >
                    {item.title}
                  </button>
                </h3>

                <p className="news-item__excerpt">{item.excerpt}</p>

                <button 
                  onClick={() => handleNewsItemClick(item)}
                  className="news-item__link"
                >
                  Read More
                  <span className="news-item__arrow">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="news-section__cta">
          <a href="/media-centre" className="btn btn--primary">
            View All News & Updates
            <span className="btn__icon">→</span>
          </a>
        </div>

        {/* News Modal */}
        <NewsModal 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          newsItem={selectedNewsItem}
        />
      </div>
    </section>
  );
};

export default NewsSection;