# Translation System

This directory contains the translation files and utilities for the ALMUSANID website's internationalization system.

## Structure

```
src/translations/
├── en.json          # English translations
├── ar.json          # Arabic translations
├── index.ts         # Export utilities
└── README.md        # This file
```

## Translation Files

### English (en.json)
Contains all English translations organized by namespace:
- `common`: Common UI elements (buttons, labels, etc.)
- `navbar`: Navigation menu items
- `hero`: Hero section content
- `services`: Services section content
- `footer`: Footer content

### Arabic (ar.json)
Contains Arabic translations with the same structure as English.

## Usage

### Basic Translation Hook

```typescript
import { useTranslation } from '../hooks/useTranslation';

const MyComponent = () => {
  const { t, language, isLoading } = useTranslation();
  
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
      <button>{t('common.save')}</button>
    </div>
  );
};
```

### Namespaced Translation Hook

```typescript
import { useNamespacedTranslation } from '../hooks/useTranslation';

const NavbarComponent = () => {
  const { t } = useNamespacedTranslation('navbar');
  
  return (
    <nav>
      <a href="/products">{t('products')}</a>
      <a href="/company">{t('company')}</a>
      <a href="/contact">{t('getInTouch')}</a>
    </nav>
  );
};
```

### With Fallback

```typescript
const { t } = useTranslation();

// With custom fallback
const title = t('page.title', 'Default Title');

// Key will be returned if translation missing
const subtitle = t('page.subtitle'); // Returns 'page.subtitle' if missing
```

## Key Naming Convention

- Use dot notation for nested keys: `namespace.section.key`
- Use camelCase for key names: `getInTouch`, `learnMore`
- Keep keys descriptive but concise
- Group related translations under common namespaces

## Adding New Translations

1. Add the key to both `en.json` and `ar.json`
2. Maintain the same structure in both files
3. Use meaningful, descriptive keys
4. Test with both languages

Example:
```json
// en.json
{
  "contact": {
    "form": {
      "name": "Name",
      "email": "Email",
      "message": "Message",
      "submit": "Send Message"
    }
  }
}

// ar.json
{
  "contact": {
    "form": {
      "name": "الاسم",
      "email": "البريد الإلكتروني", 
      "message": "الرسالة",
      "submit": "إرسال الرسالة"
    }
  }
}
```

## Features

- **Namespace Support**: Organize translations by feature/page
- **Fallback Mechanism**: Falls back to English if Arabic translation missing
- **Caching**: Translations are cached for performance
- **Type Safety**: Full TypeScript support
- **Missing Key Handling**: Graceful handling of missing translations
- **Development Warnings**: Console warnings for missing translations

## Validation

Use the translation utilities to validate completeness:

```typescript
import { validateTranslationCompleteness } from '../lib/translation-utils';
import enTranslations from './en.json';
import arTranslations from './ar.json';

const validation = validateTranslationCompleteness(enTranslations, arTranslations);
console.log(`Translation completeness: ${validation.completeness}%`);
console.log('Missing keys:', validation.missingKeys);
```

## Best Practices

1. **Keep translations in sync**: Always add keys to both language files
2. **Use meaningful keys**: Keys should be self-documenting
3. **Avoid hardcoded text**: All user-facing text should be translatable
4. **Test both languages**: Verify translations work in both English and Arabic
5. **Consider text length**: Arabic text may be longer/shorter than English
6. **Use namespaces**: Group related translations for better organization