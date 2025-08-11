import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productPages } from '../../data/productData';
import ProductTemplate from '../../templates/ProductTemplate/ProductTemplate';

import './ProductPage.css';

const templates = {
  product: ProductTemplate,
};

const ProductPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const pageKey = useMemo(() => slug, [slug]);
  const data = productPages[pageKey];
  const Template = templates[data?.template || 'product'];

  useEffect(() => {
    document.body.classList.add('product-page');
    return () => document.body.classList.remove('product-page');
  }, []);

  useEffect(() => {
    if (!data) return;
    // If the slug doesn't match the data slug, redirect to correct URL
    if (data.slug && data.slug !== slug) {
      navigate(`/products/${data.slug}`, { replace: true });
    }
  }, [slug, data, navigate]);

  // Scroll to top when slug changes (when navigating to a new product)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [slug]);

  // Set document title and meta description
  useEffect(() => {
    if (data?.meta) {
      document.title = data.meta.title || 'Product | RADCON Technologies';
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription && data.meta.description) {
        metaDescription.setAttribute('content', data.meta.description);
      }
    }
    
    return () => {
      document.title = 'RADCON Technologies';
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'RADCON Technologies - Engineering Excellence');
      }
    };
  }, [data]);

  if (!data) {
    return (
      <main className="product-page" id="main-content">
        <div className="container product-page__notfound">
          <h1>Product Not Found</h1>
          <p>The requested product doesn't exist. Please use the navigation to find what you need.</p>
          <a className="btn btn--primary" href="/products">Back to Products</a>
        </div>
      </main>
    );
  }

  return <Template data={data} />;
};

export default ProductPage;
