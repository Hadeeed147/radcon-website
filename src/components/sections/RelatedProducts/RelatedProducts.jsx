import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './RelatedProducts.css';

const RelatedProducts = ({ products }) => {
  return (
    <section className="related-products">
      <div className="container">
        <div className="related-products__header">
          <h2 className="related-products__title">Related Products</h2>
          <p className="related-products__subtitle">
            Explore other products that complement your selection
          </p>
        </div>
        
        <div className="related-products__grid">
          {products.map((product, index) => (
            <Link 
              key={index} 
              to={product.href} 
              className="related-products__card"
              onClick={() => {
                // Scroll to top when clicking related product
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                  });
                }, 100);
              }}
            >
              <div className="related-products__card-header">
                <span className="related-products__category">{product.category}</span>
              </div>
              <h3 className="related-products__card-title">{product.title}</h3>
              <p className="related-products__card-description">{product.description}</p>
              <div className="related-products__card-footer">
                <span className="related-products__link">
                  Learn More 
                  <span className="related-products__arrow">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

RelatedProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  })).isRequired
};

export default RelatedProducts;