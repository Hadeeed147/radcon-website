import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SpecificationsTable.css';

const SpecificationsTable = ({ categories }) => {
  const [expandedCategories, setExpandedCategories] = useState([0]);
  
  const toggleCategory = (index) => {
    setExpandedCategories(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };
  
  return (
    <section className="specifications-table">
      <div className="container">
        <div className="specifications-table__header">
          <h2 className="specifications-table__title">
            <span className="specifications-table__title-accent">Technical</span> Specifications
          </h2>
          <p className="specifications-table__subtitle">
            Detailed technical parameters and operating conditions
          </p>
        </div>
        
        <div className="specifications-table__content">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`specifications-table__category ${
                expandedCategories.includes(index) ? 'specifications-table__category--expanded' : ''
              }`}
            >
              <button
                className="specifications-table__category-header"
                onClick={() => toggleCategory(index)}
                aria-expanded={expandedCategories.includes(index)}
              >
                <span className="specifications-table__category-title">
                  {category.title}
                </span>
                <span className="specifications-table__category-icon">
                  {expandedCategories.includes(index) ? '−' : '+'}
                </span>
              </button>
              
              {expandedCategories.includes(index) && (
                <div className="specifications-table__specs">
                  <table className="specifications-table__table">
                    <tbody>
                      {category.specs.map((spec, specIndex) => (
                        <tr key={specIndex} className="specifications-table__row">
                          <td className="specifications-table__label">{spec.label}</td>
                          <td className="specifications-table__value">{spec.value}</td>
                          {spec.note && (
                            <td className="specifications-table__note">{spec.note}</td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="specifications-table__footer">
          <p className="specifications-table__disclaimer">
            * Specifications subject to change without notice. Contact us for the latest information.
          </p>
        </div>
      </div>
    </section>
  );
};

SpecificationsTable.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    specs: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      note: PropTypes.string
    })).isRequired
  })).isRequired
};

export default SpecificationsTable;