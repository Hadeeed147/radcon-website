import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import './PageHero.css';

const PageHero = ({ title, subtitle, backgroundImage, breadcrumbs, overlay = false }) => {
  const hasBg = Boolean(backgroundImage);
  const breadcrumbItems = useMemo(() => breadcrumbs || [], [breadcrumbs]);

  useEffect(() => {
    if (!hasBg) return;
    const hero = document.querySelector('.page-hero');
    if (!hero) return;
    const onScroll = () => {
      const y = window.scrollY * 0.4;
      hero.style.setProperty('--parallax-offset', `${y}px`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [hasBg]);

  return (
    <header className={`page-hero${hasBg ? ' page-hero--with-bg' : ''}${overlay ? ' page-hero--overlay' : ''}`} role="banner" style={hasBg ? { backgroundImage: `url(${backgroundImage})` } : undefined}>
      <div className="page-hero__backdrop" aria-hidden="true" />
      <div className="page-hero__content container" data-reveal>
        {breadcrumbItems?.length > 0 && (
          <nav className="page-hero__breadcrumbs" aria-label="Breadcrumb">
            <ol className="page-hero__breadcrumbs-list">
              {breadcrumbItems.map((bc, idx) => (
                <li key={idx} className="page-hero__breadcrumb">
                  {bc.href ? (
                    <a href={bc.href} className="page-hero__breadcrumb-link">{bc.label}</a>
                  ) : (
                    <span aria-current="page" className="page-hero__breadcrumb-current">{bc.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </header>
  );
};

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backgroundImage: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ),
  overlay: PropTypes.bool,
};

export default PageHero;


