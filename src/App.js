import React, { useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import './App.css';

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
    <div className="App">
      <Navigation />
      <Hero />
      {/* Add other page components here */}
    </div>
  );
}

export default App;