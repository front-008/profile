// Test component to verify language context functionality
import React from 'react';
import { useLanguage } from './contexts/LanguageContext';

const TestLanguageContext: React.FC = () => {
  const { language, direction, isRTL, switchLanguage, isLoading } = useLanguage();

  if (isLoading) {
    return <div>Loading language preferences...</div>;
  }

  return (
    <div>
      <h2>Language Context Test</h2>
      <p>Current Language: {language}</p>
      <p>Direction: {direction}</p>
      <p>Is RTL: {isRTL ? 'Yes' : 'No'}</p>
      <button onClick={() => switchLanguage('en')}>Switch to English</button>
      <button onClick={() => switchLanguage('ar')}>Switch to Arabic</button>
    </div>
  );
};

export default TestLanguageContext;