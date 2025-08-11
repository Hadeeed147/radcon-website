import React from 'react';
import PropTypes from 'prop-types';
import ProductHero from '../../components/sections/ProductHero/ProductHero';
import ProductShowcase from '../../components/sections/ProductShowcase/ProductShowcase';
import SpecificationsTable from '../../components/sections/SpecificationsTable/SpecificationsTable';
import ApplicationsGrid from '../../components/sections/ApplicationsGrid/ApplicationsGrid';
import FeaturesGrid from '../../components/sections/FeaturesGrid/FeaturesGrid';
import CompetitiveAdvantages from '../../components/sections/CompetitiveAdvantages/CompetitiveAdvantages';
import ProductGallery from '../../components/sections/ProductGallery/ProductGallery';
import RelatedProducts from '../../components/sections/RelatedProducts/RelatedProducts';
import ProductCTA from '../../components/sections/ProductCTA/ProductCTA';
import './ProductTemplate.css';
import '../../styles/mobile-performance.css';

const ProductTemplate = ({ data }) => {
  const { 
    hero, 
    showcase, 
    specifications, 
    applications, 
    features, 
    advantages, 
    certifications, 
    warranty, 
    gallery, 
    relatedProducts, 
    cta 
  } = data;

  return (
    <main className="product-template" id="main-content">
      {/* Hero section data */}
      <ProductHero {...hero} />

      {/* Product showcase with highlights and quick specs */}
      <ProductShowcase {...showcase} />

      {/* Detailed specifications tables (expandable categories) */}
      {specifications && specifications.length > 0 && (
        <SpecificationsTable categories={specifications} />
      )}

      {/* Applications and use cases */}
      {applications && applications.length > 0 && (
        <ApplicationsGrid 
          title="Applications & Use Cases"
          subtitle="Industries and sectors where our products excel"
          applications={applications} 
        />
      )}

      {/* Product features */}
      {features && features.length > 0 && (
        <FeaturesGrid features={features} columns={3} />
      )}

      {/* Competitive advantages, certifications, and warranty */}
      {advantages && advantages.length > 0 && (
        <CompetitiveAdvantages 
          advantages={advantages}
          certifications={certifications}
          warranty={warranty}
        />
      )}

      {/* Image gallery references */}
      {gallery && gallery.length > 0 && (
        <ProductGallery 
          title="Product Gallery"
          images={gallery} 
        />
      )}

      {/* Related products */}
      {relatedProducts && relatedProducts.length > 0 && (
        <RelatedProducts products={relatedProducts} />
      )}

      {/* Product-specific CTAs */}
      {cta && (
        <ProductCTA {...cta} />
      )}
    </main>
  );
};

ProductTemplate.propTypes = {
  data: PropTypes.shape({
    hero: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      category: PropTypes.string,
      breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string
      })),
      backgroundImage: PropTypes.string
    }).isRequired,
    showcase: PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      highlights: PropTypes.arrayOf(PropTypes.string),
      specifications: PropTypes.object,
      primaryButton: PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      }),
      secondaryButton: PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
    }).isRequired,
    specifications: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      specs: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        note: PropTypes.string
      })).isRequired
    })),
    applications: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      examples: PropTypes.arrayOf(PropTypes.string)
    })),
    features: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      highlights: PropTypes.arrayOf(PropTypes.string)
    })),
    advantages: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })),
    certifications: PropTypes.arrayOf(PropTypes.string),
    warranty: PropTypes.shape({
      years: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }),
    gallery: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      thumbnail: PropTypes.string,
      caption: PropTypes.string
    })),
    relatedProducts: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })),
    cta: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      primaryButton: PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      }),
      secondaryButton: PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      }),
      tertiaryButton: PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
    })
  }).isRequired
};

export default ProductTemplate;
