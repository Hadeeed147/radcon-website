// components/sections/NewsUpdates/NewsUpdates.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NewsModal from './NewsModal';
import './NewsUpdates.css';

const NewsUpdates = ({ 
  title = "Latest News & Updates", 
  subtitle = "Stay informed about our latest innovations and achievements",
  showFilters = true,
  itemsPerPage = 6,
  compact = false 
}) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNewsItem, setSelectedNewsItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // News data based on actual company information from project knowledge
  const newsData = [
    {
      id: 1,
      category: 'Product Launch',
      title: 'VJAM 800 - Advanced Wide-Spectrum Jammer Released',
      excerpt: 'Our most powerful vehicle-mounted jammer covering 20MHz to 6GHz with 1000W output power, providing comprehensive protection against RCIED threats across VHF, UHF, GSM/LTE, and UAV bands.',
      date: '2024-11-20',
      readTime: '3 min read',
      featured: true,
      icon: 'shield-check'
    },
    {
      id: 2,
      category: 'Client Success',
      title: 'Successfully Delivered Electronic Countermeasures to FC KPK',
      excerpt: 'Completed deployment of advanced jamming systems including A5, HH, Vehicular & Drone Jammers, along with VHF Band Direction Finders for enhanced security operations.',
      date: '2024-10-15',
      readTime: '2 min read',
      featured: true,
      icon: 'check-badge'
    },
    {
      id: 3,
      category: 'Achievement',
      title: '1KW Power Amplifier Delivered for YLC-6 Radar System',
      excerpt: 'Successfully designed and delivered a 1KW final stage power amplifier for PAF YLC-6 Radar, demonstrating our expertise in high-power RF systems.',
      date: '2024-09-28',
      readTime: '3 min read',
      featured: false,
      icon: 'signal'
    },
    {
      id: 4,
      category: 'Technology',
      title: 'Next-Gen Handheld Jammers NG Series Launched',
      excerpt: 'Introducing NG1, NG2, and NG3 portable jammers with programmable spots, covering VHF, UHF, and ISM bands with enhanced battery life and lightweight design.',
      date: '2024-09-10',
      readTime: '4 min read',
      featured: false,
      icon: 'device-phone-mobile'
    },
    {
      id: 5,
      category: 'Client Success',
      title: 'Sky Guard Radar System Successfully Repaired',
      excerpt: 'Completed comprehensive repair of Sky Guard Radar including camera module, LCD, processing & memory unit, and control unit for GHQ/DGP Army.',
      date: '2024-08-25',
      readTime: '2 min read',
      featured: false,
      icon: 'wrench-screwdriver'
    },
    {
      id: 6,
      category: 'Innovation',
      title: 'UAV Detection and Jamming System RJ ADS Deployed',
      excerpt: 'Revolutionary system with 5-10 KM detection range and up to 8 KM jamming capability, providing 360° coverage against drone threats from 400 MHz to 6 GHz.',
      date: '2024-08-05',
      readTime: '3 min read',
      featured: true,
      icon: 'device-phone-mobile'
    },
    {
      id: 7,
      category: 'Achievement',
      title: 'MSTAR Radar Power Amplifier Restoration Completed',
      excerpt: 'Successfully repaired final stage power amplifier, control & driver boards, and slip ring PCB for MSTAR Radar system, ensuring operational readiness.',
      date: '2024-07-20',
      readTime: '2 min read',
      featured: false,
      icon: 'bolt'
    },
    {
      id: 8,
      category: 'Product Launch',
      title: 'Gun Jammer for Anti-Drone Operations Released',
      excerpt: 'Portable directional jammer with >1500m effective range, targeting GNSS, GPS, 2.4GHz, and 5.8GHz frequencies for tactical drone neutralization.',
      date: '2024-07-01',
      readTime: '3 min read',
      featured: false,
      icon: 'no-symbol'
    },
    {
      id: 9,
      category: 'Technology',
      title: 'Fire Control Radar System Components Delivered',
      excerpt: 'Comprehensive embedded systems solution including camera modules, LCD monitors, memory units, power supplies, and control PCBAs for radar modernization.',
      date: '2024-06-15',
      readTime: '4 min read',
      featured: false,
      icon: 'cpu-chip'
    },
    {
      id: 10,
      category: 'Client Success',
      title: 'MI-17 Helicopter Avionics Successfully Repaired',
      excerpt: 'Completed repair of weather radar and avionics systems including multifunction display, screen gauges, and altimeter for Army Aviation at Qasim Base.',
      date: '2024-05-30',
      readTime: '2 min read',
      featured: false,
      icon: 'device-phone-mobile'
    },
    {
      id: 11,
      category: 'Innovation',
      title: 'Jammer Testing Device for Field Validation',
      excerpt: 'Programmable testing device covering 20-500 MHz and ISM band, enabling field validation and calibration of jamming systems with 2-hour battery backup.',
      date: '2024-05-10',
      readTime: '3 min read',
      featured: false,
      icon: 'beaker'
    },
    {
      id: 12,
      category: 'Achievement',
      title: 'Mechanical Fabrication Parts Delivered to Strategic Organizations',
      excerpt: 'Successfully delivered high-precision mechanical parts to KRL, NDC, NESPAK, NESCOM, and HI, showcasing our CNC and fabrication capabilities.',
      date: '2024-04-25',
      readTime: '2 min read',
      featured: false,
      icon: 'cog-6-tooth'
    }
  ];

  const categories = ['all', 'Product Launch', 'Innovation', 'Client Success', 'Achievement', 'Technology'];

  // Filter news based on category
  const filteredNews = activeFilter === 'all' 
    ? newsData 
    : newsData.filter(item => item.category === activeFilter);

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = filteredNews.slice(startIndex, endIndex);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

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
    <section className={`news-updates ${compact ? 'news-updates--compact' : ''}`}>
      <div className="container">
        {/* Header */}
        <div className="news-updates__header">
          <h2 className="news-updates__title">{title}</h2>
          {subtitle && <p className="news-updates__subtitle">{subtitle}</p>}
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="news-updates__filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'filter-btn--active' : ''}`}
                onClick={() => handleFilterChange(category)}
              >
                {category === 'all' ? 'All Updates' : category}
              </button>
            ))}
          </div>
        )}

        {/* News Grid */}
        <div className="news-updates__grid">
          {currentNews.map((item) => (
            <article 
              key={item.id} 
              className={`news-card ${item.featured ? 'news-card--featured' : ''}`}
            >
              {item.featured && <span className="news-card__badge">Featured</span>}
              
              <div className="news-card__icon-wrapper">
                <div className="news-card__icon">
                  <img 
                    src={`https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/${item.icon}.svg`} 
                    alt="" 
                    aria-hidden="true" 
                  />
                </div>
              </div>

              <div className="news-card__content">
                <div className="news-card__meta">
                  <span className="news-card__category">{item.category}</span>
                  <span className="news-card__separator">•</span>
                  <span className="news-card__date">{formatDate(item.date)}</span>
                  <span className="news-card__separator">•</span>
                  <span className="news-card__readtime">{item.readTime}</span>
                </div>

                <h3 className="news-card__title">
                  <button 
                    onClick={() => handleNewsItemClick(item)}
                    className="news-card__title-btn"
                  >
                    {item.title}
                  </button>
                </h3>

                <p className="news-card__excerpt">{item.excerpt}</p>

                <button 
                  onClick={() => handleNewsItemClick(item)}
                  className="news-card__link"
                >
                  Read More
                  <span className="news-card__arrow">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && !compact && (
          <div className="news-updates__pagination">
            <button 
              className="pagination-btn pagination-btn--prev"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              ← Previous
            </button>

            <div className="pagination-numbers">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`pagination-number ${currentPage === index + 1 ? 'pagination-number--active' : ''}`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button 
              className="pagination-btn pagination-btn--next"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </div>
        )}

        {/* View All Link for Compact Mode */}
        {compact && (
          <div className="news-updates__footer">
            <a href="/media-centre" className="btn btn--primary">
              View All News & Updates
              <span className="btn__icon">→</span>
            </a>
          </div>
                 )}

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

NewsUpdates.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  showFilters: PropTypes.bool,
  itemsPerPage: PropTypes.number,
  compact: PropTypes.bool
};

export default NewsUpdates;