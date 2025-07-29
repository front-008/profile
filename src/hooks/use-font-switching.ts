import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { loadCairoFont, getFontFamily, preloadCairoFont } from '../lib/font-loader';

/**
 * Hook for managing font switching based on language selection
 * Handles Cairo font loading for Arabic and fallback fonts
 */
export const useFontSwitching = () => {
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    // Preload Cairo font on component mount
    preloadCairoFont();
  }, []);

  useEffect(() => {
    const handleFontSwitching = async () => {
      if (language === 'ar') {
        // Load Cairo font for Arabic
        await loadCairoFont();
        
        // Apply Arabic font class to body
        document.body.classList.add('font-arabic');
        document.body.classList.remove('font-english');
        
        // Set CSS custom property for dynamic font switching
        document.documentElement.style.setProperty(
          '--font-family-primary',
          getFontFamily(true)
        );
      } else {
        // Apply English font class to body
        document.body.classList.add('font-english');
        document.body.classList.remove('font-arabic');
        
        // Set CSS custom property for dynamic font switching
        document.documentElement.style.setProperty(
          '--font-family-primary',
          getFontFamily(false)
        );
      }
    };

    handleFontSwitching();
  }, [language]);

  return {
    currentFont: language === 'ar' ? 'cairo' : 'inter',
    isArabicFont: language === 'ar',
    fontFamily: getFontFamily(language === 'ar'),
  };
};

/**
 * Utility function to get font class based on language
 */
export const getFontClass = (language: 'en' | 'ar'): string => {
  return language === 'ar' ? 'font-arabic' : 'font-english';
};

/**
 * Utility function to get font weight class for Arabic text
 * Arabic text often needs different font weights for optimal readability
 */
export const getArabicFontWeight = (baseWeight: string): string => {
  const weightMap: Record<string, string> = {
    'font-light': 'font-normal',     // 300 -> 400
    'font-normal': 'font-medium',    // 400 -> 500
    'font-medium': 'font-semibold',  // 500 -> 600
    'font-semibold': 'font-bold',    // 600 -> 700
    'font-bold': 'font-bold',        // 700 -> 700
  };
  
  return weightMap[baseWeight] || baseWeight;
};