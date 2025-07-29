import { Language, Direction } from '../types/language';

/**
 * Get the direction for a given language
 */
export const getLanguageDirection = (language: Language): Direction => {
  return language === 'ar' ? 'rtl' : 'ltr';
};

/**
 * Check if a language is RTL
 */
export const isRTLLanguage = (language: Language): boolean => {
  return language === 'ar';
};

/**
 * Get the opposite direction
 */
export const getOppositeDirection = (direction: Direction): Direction => {
  return direction === 'rtl' ? 'ltr' : 'rtl';
};

/**
 * Get language display name
 */
export const getLanguageDisplayName = (language: Language, inLanguage?: Language): string => {
  const names = {
    en: {
      en: 'English',
      ar: 'English',
    },
    ar: {
      en: 'Arabic',
      ar: 'عربي',
    },
  };

  return names[language][inLanguage || language];
};

/**
 * Validate if a string is a valid language code
 */
export const isValidLanguage = (lang: string): lang is Language => {
  return ['en', 'ar'].includes(lang);
};

/**
 * Get browser language preference (if supported)
 */
export const getBrowserLanguage = (): Language => {
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language.split('-')[0];
    if (isValidLanguage(browserLang)) {
      return browserLang;
    }
  }
  return 'en'; // Default fallback
};