import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { useTranslation, useNamespacedTranslation } from './hooks/useTranslation';

// Test component to verify translation system
const TranslationTest: React.FC = () => {
  const { t, language, isLoading } = useTranslation();
  const navbarT = useNamespacedTranslation('navbar');
  const heroT = useNamespacedTranslation('hero');

  if (isLoading) {
    return <div>Loading translations...</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Translation System Test</h2>
      <p><strong>Current Language:</strong> {language}</p>
      
      <h3>Common Translations:</h3>
      <ul>
        <li>Loading: {t('common.loading')}</li>
        <li>Error: {t('common.error')}</li>
        <li>Save: {t('common.save')}</li>
      </ul>

      <h3>Navbar Translations (using namespace):</h3>
      <ul>
        <li>Products: {navbarT.t('products')}</li>
        <li>Company: {navbarT.t('company')}</li>
        <li>Get in Touch: {navbarT.t('getInTouch')}</li>
      </ul>

      <h3>Hero Translations (using namespace):</h3>
      <ul>
        <li>Title: {heroT.t('title')}</li>
        <li>Subtitle: {heroT.t('subtitle')}</li>
        <li>CTA: {heroT.t('cta')}</li>
      </ul>

      <h3>Fallback Test:</h3>
      <ul>
        <li>Non-existent key: {t('nonexistent.key', 'Fallback text')}</li>
        <li>Missing key without fallback: {t('missing.key')}</li>
      </ul>

      <h3>Nested Key Test:</h3>
      <ul>
        <li>Services Logistics Title: {t('services.logistics.title')}</li>
        <li>Services ERP Description: {t('services.erp.description')}</li>
      </ul>
    </div>
  );
};

// Wrapper component with language provider
const TranslationTestApp: React.FC = () => {
  return (
    <LanguageProvider>
      <TranslationTest />
    </LanguageProvider>
  );
};

export default TranslationTestApp;