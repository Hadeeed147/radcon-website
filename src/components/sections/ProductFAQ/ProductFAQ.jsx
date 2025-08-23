import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductFAQ.css';

const ProductFAQ = ({ title, subtitle, faqs }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="product-faq">
      <div className="container">
        <div className="product-faq__header">
          <h2 className="product-faq__title">{title || 'Frequently Asked Questions'}</h2>
          {subtitle && <p className="product-faq__subtitle">{subtitle}</p>}
        </div>
        
        <div className="product-faq__content">
          {faqs && faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`product-faq__item ${openItems.has(index) ? 'product-faq__item--open' : ''}`}
            >
              <button
                className="product-faq__question"
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.has(index)}
              >
                <h3 className="product-faq__question-text">{faq.question}</h3>
                <span className="product-faq__icon">
                  {openItems.has(index) ? '−' : '+'}
                </span>
              </button>
              
              {openItems.has(index) && (
                <div className="product-faq__answer">
                  <p className="product-faq__answer-text">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

ProductFAQ.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  faqs: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  })).isRequired
};

export default ProductFAQ;
