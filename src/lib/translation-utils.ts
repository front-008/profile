import { Language, TranslationNamespace } from '../types/language';

/**
 * Validates if a translation key exists in the given translations object
 */
export const hasTranslation = (
  translations: TranslationNamespace,
  key: string
): boolean => {
  try {
    const value = key.split('.').reduce((current, keyPart) => {
      return current && typeof current === 'object' ? current[keyPart] : undefined;
    }, translations);

    return typeof value === 'string' && value.length > 0;
  } catch {
    return false;
  }
};

/**
 * Gets all available translation keys from a translations object
 */
export const getTranslationKeys = (
  translations: TranslationNamespace,
  prefix = ''
): string[] => {
  const keys: string[] = [];

  const traverse = (obj: any, currentPrefix: string) => {
    Object.keys(obj).forEach(key => {
      const fullKey = currentPrefix ? `${currentPrefix}.${key}` : key;

      if (typeof obj[key] === 'string') {
        keys.push(fullKey);
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        traverse(obj[key], fullKey);
      }
    });
  };

  traverse(translations, prefix);
  return keys;
};

/**
 * Validates translation completeness between two language files
 */
export const validateTranslationCompleteness = (
  sourceTranslations: TranslationNamespace,
  targetTranslations: TranslationNamespace
): {
  missingKeys: string[];
  extraKeys: string[];
  completeness: number;
} => {
  const sourceKeys = getTranslationKeys(sourceTranslations);
  const targetKeys = getTranslationKeys(targetTranslations);

  const sourceKeySet = new Set(sourceKeys);
  const targetKeySet = new Set(targetKeys);

  const missingKeys = sourceKeys.filter(key => !targetKeySet.has(key));
  const extraKeys = targetKeys.filter(key => !sourceKeySet.has(key));

  const completeness = sourceKeys.length > 0
    ? ((sourceKeys.length - missingKeys.length) / sourceKeys.length) * 100
    : 100;

  return {
    missingKeys,
    extraKeys,
    completeness: Math.round(completeness * 100) / 100,
  };
};

/**
 * Formats a translation key for display (useful for debugging)
 */
export const formatTranslationKey = (key: string): string => {
  return key
    .split('.')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' > ');
};

/**
 * Creates a translation key from a namespace and key
 */
export const createTranslationKey = (namespace: string, key: string): string => {
  return `${namespace}.${key}`;
};

/**
 * Extracts namespace from a full translation key
 */
export const extractNamespace = (key: string): string | null => {
  const parts = key.split('.');
  return parts.length > 1 ? parts[0] : null;
};

/**
 * Extracts the key part from a full translation key (without namespace)
 */
export const extractKey = (fullKey: string): string => {
  const parts = fullKey.split('.');
  return parts.length > 1 ? parts.slice(1).join('.') : fullKey;
};

/**
 * Type guard to check if a value is a valid translation namespace
 */
export const isTranslationNamespace = (value: any): value is TranslationNamespace => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};

/**
 * Deep merge two translation objects (useful for extending translations)
 */
export const mergeTranslations = (
  base: TranslationNamespace,
  override: TranslationNamespace
): TranslationNamespace => {
  const result = { ...base };

  Object.keys(override).forEach(key => {
    if (isTranslationNamespace(override[key]) && isTranslationNamespace(result[key])) {
      result[key] = mergeTranslations(
        result[key] as TranslationNamespace,
        override[key] as TranslationNamespace
      );
    } else {
      result[key] = override[key];
    }
  });

  return result;
};