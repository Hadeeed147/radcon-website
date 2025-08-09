import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import ExpertisePage from './pages/ExpertisePage/ExpertisePage';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
import './styles/variables.css';

function App() {
  // Add hero-page class to body for transparent navigation
  useEffect(() => {
    document.body.classList.add('hero-page');
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('hero-page');
    };
  }, []);

  return (
    <Router>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="App">
        <Navigation />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/expertise/:category/:service" element={<ExpertisePage />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;