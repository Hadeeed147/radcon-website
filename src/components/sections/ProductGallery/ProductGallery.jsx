import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductGallery.css';

const ProductGallery = ({ title, images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  return (
    <section className="product-gallery">
      <div className="container">
        {title && (
          <div className="product-gallery__header">
            <h2 className="product-gallery__title">{title}</h2>
          </div>
        )}
        
        <div className="product-gallery__content">
          <div className="product-gallery__main">
            <img 
              src={images[selectedImage].url} 
              alt={images[selectedImage].caption}
              className="product-gallery__main-image"
              loading="lazy"
            />
            {images[selectedImage].caption && (
              <p className="product-gallery__caption">{images[selectedImage].caption}</p>
            )}
          </div>
          
          {images.length > 1 && (
            <div className="product-gallery__thumbnails">
              {images.map((image, index) => (
                <button
                  key={index}
                  className={`product-gallery__thumbnail ${
                    index === selectedImage ? 'product-gallery__thumbnail--active' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                  aria-label={`View ${image.caption || `image ${index + 1}`}`}
                >
                  <img 
                    src={image.thumbnail || image.url} 
                    alt={image.caption}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

ProductGallery.propTypes = {
  title: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    caption: PropTypes.string
  })).isRequired
};

export default ProductGallery;