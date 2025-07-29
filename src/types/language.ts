// Language system types and interfaces

export type Language = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

export interface LanguageContextType {
  language: Language;
  direction: Direction;
  isRTL: boolean;
  switchLanguage: (lang: Language) => void;
  isLoading: boolean;
}

export interface LanguagePreference {
  language: Language;
  timestamp: number;
  version: string;
}

export interface TranslationNamespace {
  [key: string]: string | TranslationNamespace;
}

export interface Translations {
  common: TranslationNamespace;
  navbar: TranslationNamespace;
  hero: TranslationNamespace;
  services: TranslationNamespace;
  footer: TranslationNamespace;
  [key: string]: TranslationNamespace;
}

// Translation hook return type
export interface UseTranslationReturn {
  t: (key: string, fallback?: string) => string;
  language: Language;
  isLoading: boolean;
  translations: TranslationNamespace;
}

// Translation validation result
export interface TranslationValidationResult {
  missingKeys: string[];
  extraKeys: string[];
  completeness: number;
}