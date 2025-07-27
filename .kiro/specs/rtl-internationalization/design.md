# Design Document

## Overview

This design implements a comprehensive RTL (Right-to-Left) internationalization system for the ALMUSANID website. The solution provides seamless language switching between English and Arabic with proper RTL layout support, Cairo font integration, and a scalable translation management system. The implementation leverages React Context for state management, CSS-in-JS for dynamic styling, and localStorage for persistence while maintaining the existing design aesthetics and animations.

## Architecture

### Language Context System
- **LanguageContext**: React Context providing global language state and switching functionality
- **LanguageProvider**: Context provider component wrapping the entire application
- **useLanguage**: Custom hook for accessing language state and functions throughout components
- **Language State**: Manages current language ('en' | 'ar'), direction ('ltr' | 'rtl'), and loading states

### Translation Management
- **Translation Files**: JSON files containing key-value pairs for each language
- **Translation Hook**: `useTranslation` hook providing translation function and current translations
- **Namespace Support**: Organized translations by feature/page for better maintainability
- **Fallback System**: Automatic fallback to English if Arabic translation is missing

### RTL Layout System
- **Dynamic Direction**: HTML dir attribute updated based on language selection
- **CSS Logical Properties**: Using logical properties (margin-inline-start, etc.) for RTL compatibility
- **Tailwind RTL Plugin**: Custom Tailwind utilities for RTL-specific styling
- **Component Adaptation**: Individual component modifications for RTL layout support

## Components and Interfaces

### Core Language System

```typescript
// Language Context Interface
interface LanguageContextType {
  language: 'en' | 'ar';
  direction: 'ltr' | 'rtl';
  isRTL: boolean;
  switchLanguage: (lang: 'en' | 'ar') => void;
  isLoading: boolean;
}

// Translation Interface
interface TranslationNamespace {
  [key: string]: string | TranslationNamespace;
}

interface Translations {
  common: TranslationNamespace;
  navbar: TranslationNamespace;
  hero: TranslationNamespace;
  services: TranslationNamespace;
  footer: TranslationNamespace;
  // ... other namespaces
}
```

### Translation Hook
```typescript
const useTranslation = (namespace?: string) => {
  const { language } = useLanguage();
  const t = (key: string, fallback?: string) => string;
  return { t, language };
};
```

### Font Management System
```typescript
interface FontConfig {
  english: {
    primary: string;
    weights: number[];
  };
  arabic: {
    primary: string;
    weights: number[];
  };
}
```

## Data Models

### Language Preference Storage
```typescript
interface LanguagePreference {
  language: 'en' | 'ar';
  timestamp: number;
  version: string; // For migration purposes
}
```

### Translation File Structure
```json
{
  "navbar": {
    "products": "المنتجات",
    "company": "الشركة",
    "newsroom": "غرفة الأخبار",
    "getInTouch": "تواصل معنا",
    "logistics": "اللوجستيات",
    "erp": "تخطيط موارد المؤسسة",
    "ecommerce": "التجارة الإلكترونية",
    "pos": "نقطة البيع"
  },
  "hero": {
    "title": "نحن نبني المستقبل",
    "subtitle": "حلول تقنية مبتكرة للشركات الحديثة",
    "cta": "ابدأ رحلتك"
  }
}
```

## Error Handling

### Translation Errors
- **Missing Translation**: Fallback to English translation or display key
- **Invalid Key**: Log warning and return key as display text
- **Network Errors**: Graceful degradation with cached translations
- **Malformed JSON**: Error boundary with fallback to English

### Font Loading Errors
- **Font Load Failure**: Fallback to system fonts
- **Network Issues**: Progressive enhancement approach
- **Browser Compatibility**: Feature detection and polyfills

### RTL Layout Issues
- **CSS Conflicts**: Scoped styles and specificity management
- **Animation Direction**: Conditional animation properties
- **Third-party Components**: Wrapper components for RTL adaptation

## Testing Strategy

### Unit Testing
- **Language Context**: State management and switching logic
- **Translation Hook**: Key resolution and fallback behavior
- **Font Loading**: Font detection and application
- **RTL Utilities**: CSS class generation and application

### Integration Testing
- **Language Switching**: End-to-end language toggle functionality
- **Layout Adaptation**: RTL layout rendering across components
- **Persistence**: localStorage integration and retrieval
- **Navigation**: Router integration with language state

### Visual Testing
- **RTL Layout**: Screenshot comparison for RTL vs LTR layouts
- **Font Rendering**: Arabic text rendering across different browsers
- **Animation Direction**: Motion direction in RTL mode
- **Responsive Design**: RTL behavior across breakpoints

### Accessibility Testing
- **Screen Readers**: RTL content reading order
- **Keyboard Navigation**: Tab order in RTL layout
- **ARIA Labels**: Translated accessibility labels
- **Language Attributes**: Proper lang attribute setting

## Implementation Details

### CSS Strategy
```css
/* RTL-aware utilities */
.rtl\:text-right:where([dir="rtl"], [dir="rtl"] *) {
  text-align: right;
}

.rtl\:flex-row-reverse:where([dir="rtl"], [dir="rtl"] *) {
  flex-direction: row-reverse;
}

/* Font family switching */
.font-arabic {
  font-family: 'Cairo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### Component Adaptation Pattern
```typescript
const AdaptiveComponent = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation('namespace');
  
  return (
    <div className={cn(
      "base-styles",
      isRTL && "rtl-specific-styles"
    )}>
      {t('content.key')}
    </div>
  );
};
```

### Animation Direction Handling
```typescript
const getAnimationDirection = (isRTL: boolean, baseDirection: string) => {
  const directionMap = {
    'slideInLeft': isRTL ? 'slideInRight' : 'slideInLeft',
    'slideInRight': isRTL ? 'slideInLeft' : 'slideInRight',
  };
  return directionMap[baseDirection] || baseDirection;
};
```

### Font Loading Strategy
```typescript
const loadArabicFont = async () => {
  const font = new FontFace('Cairo', 'url(/fonts/cairo.woff2)');
  await font.load();
  document.fonts.add(font);
};
```

## Performance Considerations

### Lazy Loading
- **Translation Files**: Load translations on demand
- **Font Files**: Progressive font loading with fallbacks
- **Component Chunks**: Code splitting for language-specific components

### Caching Strategy
- **Translation Cache**: Memory cache for loaded translations
- **Font Cache**: Browser font cache optimization
- **Language Preference**: localStorage with expiration

### Bundle Optimization
- **Tree Shaking**: Remove unused translations in production
- **Font Subsetting**: Include only required Arabic glyphs
- **CSS Purging**: Remove unused RTL utilities

## Migration Strategy

### Phase 1: Core Infrastructure
- Implement language context and basic translation system
- Add Cairo font loading and basic RTL CSS utilities
- Update navbar with language switching functionality

### Phase 2: Component Adaptation
- Adapt existing components for RTL layout
- Implement translation keys for all static content
- Add RTL-aware animations and transitions

### Phase 3: Content Translation
- Translate all website content to Arabic
- Implement proper Arabic typography and spacing
- Add language-specific content variations

### Phase 4: Testing and Optimization
- Comprehensive testing across browsers and devices
- Performance optimization and bundle size reduction
- Accessibility compliance verification