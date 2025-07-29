import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { LanguageProvider } from './contexts/LanguageContext';

// Simple test component to verify navbar RTL functionality
const TestNavbarRTL = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
          <Navbar />
          <div className="pt-32 px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Navbar RTL Test</h1>
              <p className="text-lg mb-8">
                Test the navbar functionality in both LTR and RTL modes:
              </p>
              <ul className="text-left space-y-2 max-w-2xl mx-auto">
                <li>✅ Switch between English and Arabic languages</li>
                <li>✅ Check dropdown positioning in RTL mode</li>
                <li>✅ Verify mobile menu layout in RTL</li>
                <li>✅ Test ExternalLink icon positioning</li>
                <li>✅ Verify animation directions</li>
              </ul>
            </div>
          </div>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default TestNavbarRTL;