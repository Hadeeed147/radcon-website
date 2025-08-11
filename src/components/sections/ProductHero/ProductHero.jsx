import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductHero.css';

const ProductHero = ({ title, subtitle, category, breadcrumbs, backgroundImage }) => {
  return (
    <section className="product-hero">
      {backgroundImage && (
        <div 
          className="product-hero__background" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="product-hero__overlay" />
      
      <div className="container">
        <div className="product-hero__content">
          {breadcrumbs && (
            <nav className="product-hero__breadcrumbs" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="product-hero__separator">/</span>}
                  {crumb.href ? (
                    <Link to={crumb.href} className="product-hero__crumb-link">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="product-hero__crumb-current">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
          
          {category && (
            <div className="product-hero__category">
              <span className="product-hero__category-badge">{category}</span>
            </div>
          )}
          
          <h1 className="product-hero__title">{title}</h1>
          {subtitle && <p className="product-hero__subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
};

ProductHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  category: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string
  })),
  backgroundImage: PropTypes.string
};

export default ProductHero;