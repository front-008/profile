import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Direction, LanguageContextType, LanguagePreference } from '../types/language';

const LANGUAGE_STORAGE_KEY = 'almusanid_language_preference';
const LANGUAGE_VERSION = '1.0.0';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true);

  // Derive direction and RTL state from language
  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';
  const isRTL = language === 'ar';

  // Load language preference from localStorage and initialize HTML attributes
  useEffect(() => {
    const loadLanguagePreference = () => {
      let detectedLanguage: Language = 'en'; // Default fallback
      
      try {
        const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (stored) {
          const preference: LanguagePreference = JSON.parse(stored);
          // Validate the stored preference
          if (preference.language && ['en', 'ar'].includes(preference.language)) {
            detectedLanguage = preference.language;
          }
        }
      } catch (error) {
        console.warn('Failed to load language preference from localStorage:', error);
        // Fallback to English if there's an error
        detectedLanguage = 'en';
      }
      
      // Set language state
      setLanguage(detectedLanguage);
      
      // Immediately update HTML attributes for the detected language
      const detectedDirection = detectedLanguage === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = detectedDirection;
      document.documentElement.lang = detectedLanguage;
      
      setIsLoading(false);
    };

    loadLanguagePreference();
  }, []);

  // Save language preference to localStorage
  const saveLanguagePreference = (lang: Language) => {
    try {
      const preference: LanguagePreference = {
        language: lang,
        timestamp: Date.now(),
        version: LANGUAGE_VERSION,
      };
      localStorage.setItem(LANGUAGE_STORAGE_KEY, JSON.stringify(preference));
    } catch (error) {
      console.warn('Failed to save language preference to localStorage:', error);
    }
  };

  // Switch language function
  const switchLanguage = (lang: Language) => {
    if (lang !== language) {
      setLanguage(lang);
      saveLanguagePreference(lang);
      // HTML attributes will be updated by the useEffect below
    }
  };

  // Update HTML attributes when language changes
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [language, direction]);

  const contextValue: LanguageContextType = {
    language,
    direction,
    isRTL,
    switchLanguage,
    isLoading,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};