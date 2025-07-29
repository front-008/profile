import { useLanguage } from '../contexts/LanguageContext';
import { Language, TranslationNamespace, UseTranslationReturn } from '../types/language';
import { useState, useEffect, useMemo } from 'react';

// Enhanced translation cache with metadata
interface CachedTranslation {
  data: TranslationNamespace;
  timestamp: number;
}

// Translation cache
const translationCache: Record<Language, TranslationNamespace | null> = {
  en: null,
  ar: null,
};

// Import translation files statically
import enTranslations from '../translations/en.json';
import arTranslations from '../translations/ar.json';

// Static translations map
const staticTranslations: Record<Language, TranslationNamespace> = {
  en: enTranslations,
  ar: arTranslations,
};

// Load translation files
const loadTranslations = async (language: Language): Promise<TranslationNamespace> => {
  try {
    // Check cache first
    if (translationCache[language]) {
      return translationCache[language]!;
    }

    // Get translations from static imports
    const translationData = staticTranslations[language];

    if (!translationData) {
      throw new Error(`No translations found for language: ${language}`);
    }

    // Cache the loaded translations
    translationCache[language] = translationData;

    return translationData;
  } catch (error) {
    console.warn(`Failed to load translations for language: ${language}`, error);

    // Fallback to English if Arabic fails
    if (language === 'ar') {
      try {
        const fallbackData = staticTranslations.en;
        if (fallbackData) {
          // Don't cache fallback data under Arabic key
          return fallbackData;
        }
      } catch (fallbackError) {
        console.error('Failed to load fallback English translations', fallbackError);
      }
    }

    return {};
  }
};

// Get nested value from object using dot notation
const getNestedValue = (obj: any, path: string): string | undefined => {
  return path.split('.').reduce((current, key) => {
    return current && typeof current === 'object' ? current[key] : undefined;
  }, obj);
};

// Translation hook implementation

export const useTranslation = (namespace?: string): UseTranslationReturn => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState<TranslationNamespace>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load translations when language changes
  useEffect(() => {
    let mounted = true;

    const loadCurrentTranslations = async () => {
      setIsLoading(true);
      try {
        const loadedTranslations = await loadTranslations(language);
        if (mounted) {
          setTranslations(loadedTranslations);
        }
      } catch (error) {
        console.error('Error loading translations:', error);
        if (mounted) {
          setTranslations({});
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    loadCurrentTranslations();

    return () => {
      mounted = false;
    };
  }, [language]);

  // Translation function
  const t = useMemo(() => {
    return (key: string, fallback?: string): string => {
      try {
        // If namespace is provided, prefix the key
        const fullKey = namespace ? `${namespace}.${key}` : key;

        // Get the translation value
        const translation = getNestedValue(translations, fullKey);

        if (translation && typeof translation === 'string') {
          return translation;
        }

        // Fallback to English if current language is Arabic and translation is missing
        if (language === 'ar' && translationCache.en) {
          const englishTranslation = getNestedValue(translationCache.en, fullKey);
          if (englishTranslation && typeof englishTranslation === 'string') {
            console.warn(`Missing Arabic translation for key: ${fullKey}, using English fallback`);
            return englishTranslation;
          }
        }

        // Use provided fallback
        if (fallback) {
          console.warn(`Missing translation for key: ${fullKey}, using provided fallback`);
          return fallback;
        }

        // Last resort: return the key itself
        console.warn(`Missing translation for key: ${fullKey}, returning key as fallback`);
        return key;
      } catch (error) {
        console.error(`Error getting translation for key: ${key}`, error);
        return fallback || key;
      }
    };
  }, [translations, language, namespace]);

  return {
    t,
    language,
    isLoading,
    translations,
  };
};

// Hook for specific namespace
export const useNamespacedTranslation = (namespace: string) => {
  return useTranslation(namespace);
};

// Preload translations for better performance
export const preloadTranslations = async (language: Language): Promise<void> => {
  try {
    await loadTranslations(language);
  } catch (error) {
    console.warn(`Failed to preload translations for ${language}:`, error);
  }
};

// Clear translation cache (useful for testing or memory management)
export const clearTranslationCache = (): void => {
  translationCache.en = null;
  translationCache.ar = null;
};