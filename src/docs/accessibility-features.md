# RTL Accessibility Features Documentation

This document outlines the accessibility features implemented for RTL (Right-to-Left) support in the ALMUSANID website.

## Overview

The accessibility implementation ensures that the website is fully accessible to users with disabilities, particularly when using Arabic (RTL) language. The features comply with WCAG 2.1 guidelines and provide comprehensive support for screen readers, keyboard navigation, and other assistive technologies.

## Implemented Features

### 1. Skip Link Navigation

**Component**: `src/components/accessibility/SkipLink.tsx`

- Provides a "Skip to content" link for keyboard users
- Positioned off-screen by default, becomes visible when focused
- RTL-aware positioning (right side for Arabic)
- Allows users to bypass navigation and jump directly to main content

**Usage**:
```tsx
<SkipLink href="#main-content" />
```

### 2. Language Section Wrapper

**Component**: `src/components/accessibility/LanguageSection.tsx`

- Automatically sets `lang` and `dir` attributes based on current language
- Applies appropriate CSS classes for RTL/LTR text direction
- Supports custom ARIA attributes and roles
- Ensures proper language identification for screen readers

**Usage**:
```tsx
<LanguageSection 
  as="section" 
  id="hero" 
  aria-labelledby="hero-title"
>
  <h1 id="hero-title">Content</h1>
</LanguageSection>
```

### 3. Accessibility Provider

**Component**: `src/components/accessibility/AccessibilityProvider.tsx`

- Creates a live region for screen reader announcements
- Manages document-level accessibility attributes
- Provides utility functions for focus management
- Automatically updates `lang` and `dir` attributes on document element

**Features**:
- `announceToScreenReader(message)` - Announces messages to screen readers
- `setFocusToElement(elementId)` - Programmatically sets focus with smooth scrolling
- Automatic cleanup of live regions

### 4. Language Change Announcements

**Component**: `src/components/accessibility/LanguageAnnouncer.tsx`

- Announces language changes to screen readers
- Provides bilingual announcements (Arabic and English)
- Delayed announcements to ensure screen reader compatibility

### 5. RTL-Aware Keyboard Navigation

**Hook**: `src/hooks/useKeyboardNavigation.ts`

- Provides RTL-aware arrow key navigation
- Supports tab trapping for modal dialogs
- Escape key handling for closing menus
- Directional navigation that respects reading direction

**Features**:
- Arrow keys work correctly in RTL mode (right arrow goes to previous item)
- Home/End key support for jumping to first/last items
- Focus management utilities
- Container-scoped navigation

**Usage**:
```tsx
const navRef = useRef<HTMLElement>(null);

useKeyboardNavigation({
  enableArrowKeys: true,
  containerRef: navRef,
  onEscape: () => closeMenu()
});
```

## Implementation Details

### Document Structure

The website follows proper semantic HTML structure with appropriate landmarks:

```html
<html lang="en" dir="ltr">
  <body>
    <a href="#main-content">Skip to content</a>
    <nav role="navigation" aria-label="Main navigation">
      <!-- Navigation content -->
    </nav>
    <main id="main-content" role="main">
      <!-- Main content -->
    </main>
    <footer role="contentinfo">
      <!-- Footer content -->
    </footer>
  </body>
</html>
```

### Language Attributes

Content sections are properly marked with language attributes:

- `lang="en"` for English content
- `lang="ar"` for Arabic content
- `dir="ltr"` for left-to-right text
- `dir="rtl"` for right-to-left text

### ARIA Labels and Roles

Interactive elements include appropriate ARIA attributes:

- `aria-label` for button descriptions
- `aria-pressed` for toggle button states
- `aria-expanded` for collapsible content
- `aria-labelledby` for section headings
- `role` attributes for semantic meaning

### Screen Reader Support

- Live regions for dynamic content announcements
- Proper heading hierarchy (h1, h2, h3, etc.)
- Descriptive link text and button labels
- Alternative text for images and icons
- Form labels and error messages

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Logical tab order throughout the interface
- Visual focus indicators
- RTL-aware directional navigation
- Escape key support for closing dialogs/menus

## Testing

### Automated Testing

Run the accessibility verification script:

```bash
node verify-accessibility-features.js
```

### Manual Testing Checklist

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Verify focus indicators are visible
- [ ] Test arrow key navigation in menus
- [ ] Confirm Escape key closes modals/menus
- [ ] Check RTL arrow key behavior

#### Screen Reader Testing
- [ ] Test with NVDA, JAWS, or VoiceOver
- [ ] Verify language announcements work
- [ ] Check heading navigation
- [ ] Confirm landmark navigation
- [ ] Test form field labels

#### RTL Specific Testing
- [ ] Switch to Arabic language
- [ ] Verify text direction changes
- [ ] Test keyboard navigation in RTL mode
- [ ] Check focus order in RTL layout
- [ ] Confirm screen reader language switching

## Browser Support

The accessibility features are tested and supported in:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Compliance

This implementation aims to meet:

- WCAG 2.1 Level AA guidelines
- Section 508 compliance
- EN 301 549 European accessibility standard

## Future Enhancements

Potential improvements for future releases:

1. **High Contrast Mode Support**
   - Detect system high contrast preferences
   - Provide high contrast theme option

2. **Reduced Motion Support**
   - Respect `prefers-reduced-motion` setting
   - Provide animation toggle option

3. **Voice Navigation**
   - Add voice command support
   - Implement speech recognition for navigation

4. **Enhanced Screen Reader Support**
   - Add more detailed ARIA descriptions
   - Implement live region priorities
   - Add table navigation support

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)
- [RTL Styling Guide](https://rtlstyling.com/)

## Support

For accessibility-related issues or questions, please:

1. Check this documentation first
2. Review the implementation in the codebase
3. Test with actual assistive technologies
4. Report issues with specific steps to reproduce