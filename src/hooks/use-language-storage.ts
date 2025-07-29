import { Language, LanguagePreference } from '../types/language';

const LANGUAGE_STORAGE_KEY = 'almusanid_language_preference';
const LANGUAGE_VERSION = '1.0.0';

export const useLanguageStorage = () => {
  const getStoredLanguage = (): Language => {
    try {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (stored) {
        const preference: LanguagePreference = JSON.parse(stored);
        // Validate the stored preference
        if (preference.language && ['en', 'ar'].includes(preference.language)) {
          return preference.language;
        }
      }
    } catch (error) {
      console.warn('Failed to load language preference from localStorage:', error);
    }
    // Fallback to English
    return 'en';
  };

  const saveLanguage = (language: Language): void => {
    try {
      const preference: LanguagePreference = {
        language,
        timestamp: Date.now(),
        version: LANGUAGE_VERSION,
      };
      localStorage.setItem(LANGUAGE_STORAGE_KEY, JSON.stringify(preference));
    } catch (error) {
      console.warn('Failed to save language preference to localStorage:', error);
    }
  };

  const clearLanguagePreference = (): void => {
    try {
      localStorage.removeItem(LANGUAGE_STORAGE_KEY);
    } catch (error) {
      console.warn('Failed to clear language preference from localStorage:', error);
    }
  };

  const isLanguagePreferenceStored = (): boolean => {
    try {
      return localStorage.getItem(LANGUAGE_STORAGE_KEY) !== null;
    } catch (error) {
      return false;
    }
  };

  return {
    getStoredLanguage,
    saveLanguage,
    clearLanguagePreference,
    isLanguagePreferenceStored,
  };
};