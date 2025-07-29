import { useLanguage } from '../contexts/LanguageContext';
import { Language, TranslationNamespace, UseTranslationReturn } from '../types/language';
import { useState, useEffect, useMemo, useCallback } from 'react';

// Enhanced translation cache with metadata
interface CachedTranslation {
    data: TranslationNamespace;
    timestamp: number;
    version: string;
}

// Translation cache with expiration and versioning
const translationCache = new Map<Language, CachedTranslation>();
const CACHE_EXPIRY = 30 * 60 * 1000; // 30 minutes
const CACHE_VERSION = '1.0.0';

// Preloading state to avoid duplicate requests
const loadingPromises = new Map<Language, Promise<TranslationNamespace>>();

// Load translation files with optimized caching
const loadTranslations = async (language: Language): Promise<TranslationNamespace> => {
    // Check if already loading
    if (loadingPromises.has(language)) {
        return loadingPromises.get(language)!;
    }

    // Check cache first
    const cached = translationCache.get(language);
    if (cached && Date.now() - cached.timestamp < CACHE_EXPIRY && cached.version === CACHE_VERSION) {
        return cached.data;
    }

    // Create loading promise
    const loadingPromise = (async () => {
        try {
            // Dynamic import with chunk naming for better caching
            const translations = await import(
                /* webpackChunkName: "translations-[request]" */
                `../translations/${language}.json`
            );
            const translationData = translations.default || translations;

            // Cache the loaded translations with metadata
            translationCache.set(language, {
                data: translationData,
                timestamp: Date.now(),
                version: CACHE_VERSION,
            });

            return translationData;
        } catch (error) {
            console.warn(`Failed to load translations for language: ${language}`, error);

            // Fallback to English if Arabic fails
            if (language === 'ar') {
                try {
                    const fallbackTranslations = await import('../translations/en.json');
                    const fallbackData = fallbackTranslations.default || fallbackTranslations;
                    return fallbackData;
                } catch (fallbackError) {
                    console.error('Failed to load fallback English translations', fallbackError);
                    return {};
                }
            }

            return {};
        } finally {
            // Remove from loading promises
            loadingPromises.delete(language);
        }
    })();

    // Store the promise to avoid duplicate requests
    loadingPromises.set(language, loadingPromise);

    return loadingPromise;
};

// Get nested value from object using dot notation with memoization
const memoizedGetters = new Map<string, (obj: any) => string | undefined>();

const getNestedValue = (obj: any, path: string): string | undefined => {
    if (!memoizedGetters.has(path)) {
        const keys = path.split('.');
        memoizedGetters.set(path, (target: any) => {
            return keys.reduce((current, key) => {
                return current && typeof current === 'object' ? current[key] : undefined;
            }, target);
        });
    }

    return memoizedGetters.get(path)!(obj);
};

// Optimized translation hook with performance improvements
export const useOptimizedTranslation = (namespace?: string): UseTranslationReturn => {
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

    // Memoized translation function with optimized lookups
    const t = useMemo(() => {
        return (key: string, fallback?: string): string => {
            try {
                // If namespace is provided, prefix the key
                const fullKey = namespace ? `${namespace}.${key}` : key;

                // Get the translation value using memoized getter
                const translation = getNestedValue(translations, fullKey);

                if (translation && typeof translation === 'string') {
                    return translation;
                }

                // Fallback to English if current language is Arabic and translation is missing
                if (language === 'ar') {
                    const englishCache = translationCache.get('en');
                    if (englishCache) {
                        const englishTranslation = getNestedValue(englishCache.data, fullKey);
                        if (englishTranslation && typeof englishTranslation === 'string') {
                            console.warn(`Missing Arabic translation for key: ${fullKey}, using English fallback`);
                            return englishTranslation;
                        }
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

// Hook for specific namespace with memoization
export const useNamespacedTranslation = (namespace: string) => {
    return useOptimizedTranslation(namespace);
};

// Preload translations for better performance
export const preloadTranslations = async (language: Language): Promise<void> => {
    try {
        await loadTranslations(language);
    } catch (error) {
        console.warn(`Failed to preload translations for ${language}:`, error);
    }
};

// Preload both languages for instant switching
export const preloadAllTranslations = async (): Promise<void> => {
    try {
        await Promise.all([
            preloadTranslations('en'),
            preloadTranslations('ar'),
        ]);
    } catch (error) {
        console.warn('Failed to preload all translations:', error);
    }
};

// Clear translation cache (useful for testing or memory management)
export const clearTranslationCache = (): void => {
    translationCache.clear();
    memoizedGetters.clear();
    loadingPromises.clear();
};

// Get cache statistics for debugging
export const getCacheStats = () => {
    return {
        cacheSize: translationCache.size,
        memoizedGettersSize: memoizedGetters.size,
        loadingPromisesSize: loadingPromises.size,
        cacheEntries: Array.from(translationCache.entries()).map(([lang, cache]) => ({
            language: lang,
            timestamp: cache.timestamp,
            version: cache.version,
            age: Date.now() - cache.timestamp,
        })),
    };
};