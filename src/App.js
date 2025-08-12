// App.js - Updated with Contact Us and Media Centre routes
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import MediaCentre from './pages/MediaCentre.jsx';
import DesignHouse from './pages/DesignHouse.jsx';
import ExpertiseLanding from './pages/ExpertiseLanding.jsx';
import ExpertisePage from './pages/ExpertisePage/ExpertisePage';
import ProductPage from './pages/ProductPage/ProductPage';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
import './styles/variables.css';

// Component to manage body classes based on route
function BodyClassManager() {
  const location = useLocation();
  
  useEffect(() => {
    // Remove all page-specific classes first
    document.body.classList.remove('hero-page', 'expertise-page', 'product-page', 'about-page', 'contact-page', 'media-page', 'design-house-page');
    
    // Add appropriate class based on current route
    if (location.pathname === '/') {
      document.body.classList.add('hero-page');
    } else if (location.pathname === '/about-us') {
      document.body.classList.add('about-page');
    } else if (location.pathname === '/contact') {
      document.body.classList.add('contact-page');
    } else if (location.pathname === '/media-centre') {
      document.body.classList.add('media-page');
    } else if (location.pathname === '/design-house') {
      document.body.classList.add('design-house-page');
    } else if (location.pathname === '/expertise') {
      document.body.classList.add('expertise-page');
    } else if (location.pathname.startsWith('/expertise/')) {
      document.body.classList.add('expertise-page');
    } else if (location.pathname.startsWith('/products/')) {
      document.body.classList.add('product-page');
    }
    
    // Cleanup function to remove classes when component unmounts
    return () => {
      document.body.classList.remove('hero-page', 'expertise-page', 'product-page', 'about-page', 'contact-page', 'media-page', 'design-house-page');
    };
  }, [location.pathname]);
  
  return null;
}

function App() {
  return (
    <Router>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="App">
        <BodyClassManager />
        <Navigation />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/media-centre" element={<MediaCentre />} />
            <Route path="/design-house" element={<DesignHouse />} />
            <Route path="/expertise" element={<ExpertiseLanding />} />
            <Route path="/expertise/:category/:service" element={<ExpertisePage />} />
            <Route path="/products/:slug" element={<ProductPage />} />
          </Routes>
        </ErrorBoundary>
        <Footer />
      </div>
    </Router>
  );
}

export default App;