import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types/language';

// Basic translation hook - will be expanded in task 2
export const useTranslation = (namespace?: string) => {
  const { language } = useLanguage();

  // Placeholder translation function - will be implemented in task 2
  const t = (key: string, fallback?: string): string => {
    // For now, return the key or fallback until translation system is implemented
    return fallback || key;
  };

  return {
    t,
    language,
    namespace,
  };
};