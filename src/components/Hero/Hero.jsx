import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const resumeTimeoutRef = useRef(null);

  const slides = [
    {
      id: 1,
      desktopImage: '/images/hero/slide1-desktop.jpg',
      mobileImage: '/images/hero/slide1-mobile.jpg',
      heading: 'Innovative Technology Solutions',
      subheading: 'Delivering cutting-edge embedded systems, RF & microwave solutions, and advanced power systems for modern technological challenges.',
      ctaText: 'Explore Our Solutions',
      ctaLink: '/expertise',
      overlayPosition: 'left' // left, center, right
    },
    {
      id: 2,
      desktopImage: '/images/hero/slide2-desktop.jpg',
      mobileImage: '/images/hero/slide2-mobile.jpg',
      heading: 'Precision Engineering Excellence',
      subheading: 'From concept to deployment, we provide comprehensive hardware and software solutions with unmatched reliability and performance.',
      ctaText: 'View Our Products',
      ctaLink: '/products',
      overlayPosition: 'center'
    },
    {
      id: 3,
      desktopImage: '/images/hero/slide3-desktop.jpg',
      mobileImage: '/images/hero/slide3-mobile.jpg',
      heading: 'Your Vision, Our Expertise',
      subheading: 'Partner with us for custom development, lifecycle support, and innovative solutions that drive your success forward.',
      ctaText: 'Start Your Project',
      ctaLink: '/contact',
      overlayPosition: 'right'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    let interval = null;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000); // 6 seconds per slide
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  // Note: Auto-play continues during hover - no pause functionality

  // Navigate to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    
    // Clear any existing timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    
    // Resume auto-play after 10 seconds of manual interaction
    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
      resumeTimeoutRef.current = null;
    }, 10000);
  };

  // Navigate slides with keyboard
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlaying(false);
        
        // Clear any existing timeout
        if (resumeTimeoutRef.current) {
          clearTimeout(resumeTimeoutRef.current);
        }
        
        // Resume auto-play after 10 seconds
        resumeTimeoutRef.current = setTimeout(() => {
          setIsAutoPlaying(true);
          resumeTimeoutRef.current = null;
        }, 10000);
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAutoPlaying(false);
        
        // Clear any existing timeout
        if (resumeTimeoutRef.current) {
          clearTimeout(resumeTimeoutRef.current);
        }
        
        // Resume auto-play after 10 seconds
        resumeTimeoutRef.current = setTimeout(() => {
          setIsAutoPlaying(true);
          resumeTimeoutRef.current = null;
        }, 10000);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <section 
      className="hero-container"
      role="banner"
      aria-label="Hero slideshow"
    >
      {/* Background Images */}
      <div className="hero-background">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'hero-slide-active' : ''}`}
            style={{
              backgroundImage: `url(${slide.desktopImage})`,
            }}
          >
            {/* Mobile Background Image */}
            <div
              className="hero-slide-mobile"
              style={{
                backgroundImage: `url(${slide.mobileImage})`,
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="hero-overlay" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-wrapper">
          <div className={`hero-text-container hero-text-${currentSlideData.overlayPosition}`}>
            <div className="hero-text-content">
              <h1 className="hero-heading">
                {currentSlideData.heading}
              </h1>
              <p className="hero-subheading">
                {currentSlideData.subheading}
              </p>
              <div className="hero-cta-container">
                <a 
                  href={currentSlideData.ctaLink}
                  className="hero-cta-button"
                  aria-label={`${currentSlideData.ctaText} - ${currentSlideData.heading}`}
                >
                  {currentSlideData.ctaText}
                  <span className="hero-cta-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="hero-controls">
        {/* Slide Indicators */}
        <div className="hero-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-indicator ${index === currentSlide ? 'hero-indicator-active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={index === currentSlide}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        <button
          className="hero-nav-arrow hero-nav-prev"
          onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className="hero-nav-arrow hero-nav-next"
          onClick={() => goToSlide((currentSlide + 1) % slides.length)}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      {/* Progress Bar */}
      <div className="hero-progress-container">
        <div 
          className="hero-progress-bar"
          style={{
            animationDuration: isAutoPlaying ? '6s' : 'none',
            animationPlayState: isAutoPlaying ? 'running' : 'paused'
          }}
          key={currentSlide} // Reset animation on slide change
        />
      </div>
    </section>
  );
};

export default Hero;