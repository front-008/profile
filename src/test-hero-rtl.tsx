import React from 'react';
import { createRoot } from 'react-dom/client';
import Hero from './components/Hero';
import { LanguageProvider } from './contexts/LanguageContext';
import './index.css';

function TestHeroRTL() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Hero />
      </div>
    </LanguageProvider>
  );
}

// Create a test container
const container = document.createElement('div');
container.id = 'test-hero-rtl';
document.body.appendChild(container);

const root = createRoot(container);
root.render(<TestHeroRTL />);

console.log('Hero RTL test component rendered successfully');