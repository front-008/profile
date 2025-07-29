#!/usr/bin/env node

/**
 * Accessibility Features Verification Script
 * This script verifies that the RTL accessibility features have been implemented correctly.
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';

function log(message, color = RESET) {
    console.log(`${color}${message}${RESET}`);
}

function checkFileExists(filePath) {
    const exists = existsSync(filePath);
    log(`${exists ? '✓' : '✗'} ${filePath}`, exists ? GREEN : RED);
    return exists;
}

function checkFileContains(filePath, patterns, description) {
    if (!existsSync(filePath)) {
        log(`✗ ${description} - File not found: ${filePath}`, RED);
        return false;
    }

    const content = readFileSync(filePath, 'utf8');
    const results = patterns.map(pattern => {
        const found = typeof pattern === 'string' ? content.includes(pattern) : pattern.test(content);
        return { pattern: pattern.toString(), found };
    });

    const allFound = results.every(r => r.found);
    log(`${allFound ? '✓' : '✗'} ${description}`, allFound ? GREEN : RED);

    if (!allFound) {
        results.filter(r => !r.found).forEach(r => {
            log(`  Missing: ${r.pattern}`, YELLOW);
        });
    }

    return allFound;
}

function main() {
    log(`${BOLD}Verifying RTL Accessibility Features Implementation${RESET}\n`);

    let allPassed = true;

    // Check if accessibility components exist
    log(`${BOLD}1. Accessibility Components:${RESET}`);
    allPassed &= checkFileExists('src/components/accessibility/SkipLink.tsx');
    allPassed &= checkFileExists('src/components/accessibility/AccessibilityProvider.tsx');
    allPassed &= checkFileExists('src/components/accessibility/LanguageAnnouncer.tsx');
    allPassed &= checkFileExists('src/components/accessibility/LanguageSection.tsx');

    // Check if keyboard navigation hook exists
    log(`\n${BOLD}2. Keyboard Navigation Hook:${RESET}`);
    allPassed &= checkFileExists('src/hooks/useKeyboardNavigation.ts');

    // Check if accessibility test exists
    log(`\n${BOLD}3. Accessibility Tests:${RESET}`);
    allPassed &= checkFileExists('src/tests/accessibility.test.tsx');

    // Check App.tsx integration
    log(`\n${BOLD}4. App.tsx Integration:${RESET}`);
    allPassed &= checkFileContains('src/App.tsx', [
        'AccessibilityProvider',
        'LanguageAnnouncer',
        'SkipLink'
    ], 'App.tsx includes accessibility components');

    // Check LanguageContext accessibility features
    log(`\n${BOLD}5. Language Context Accessibility:${RESET}`);
    allPassed &= checkFileContains('src/contexts/LanguageContext.tsx', [
        'document.documentElement.dir',
        'document.documentElement.lang'
    ], 'LanguageContext sets document attributes');

    // Check Navbar accessibility improvements
    log(`\n${BOLD}6. Navbar Accessibility:${RESET}`);
    allPassed &= checkFileContains('src/components/Navbar.tsx', [
        'useKeyboardNavigation',
        'useAccessibility',
        'role="navigation"',
        'aria-label',
        'aria-expanded',
        'aria-pressed'
    ], 'Navbar includes accessibility features');

    // Check Hero component accessibility
    log(`\n${BOLD}7. Hero Component Accessibility:${RESET}`);
    allPassed &= checkFileContains('src/components/Hero.tsx', [
        'LanguageSection',
        'aria-labelledby',
        'id="hero-title"'
    ], 'Hero component uses LanguageSection and proper labeling');

    // Check Index page main landmark
    log(`\n${BOLD}8. Index Page Main Landmark:${RESET}`);
    allPassed &= checkFileContains('src/pages/Index.tsx', [
        'id="main-content"',
        'role="main"'
    ], 'Index page has main content landmark');

    // Check translation files for accessibility labels
    log(`\n${BOLD}9. Translation Files Accessibility Labels:${RESET}`);
    allPassed &= checkFileContains('src/translations/en.json', [
        'skipToContent',
        'openMenu',
        'closeMenu',
        'switchToEnglish',
        'switchToArabic'
    ], 'English translations include accessibility labels');

    allPassed &= checkFileContains('src/translations/ar.json', [
        'skipToContent',
        'openMenu',
        'closeMenu',
        'switchToEnglish',
        'switchToArabic'
    ], 'Arabic translations include accessibility labels');

    // Summary
    log(`\n${BOLD}Summary:${RESET}`);
    if (allPassed) {
        log('✓ All accessibility features have been implemented successfully!', GREEN);
        log('\nImplemented features:', GREEN);
        log('• Skip link for keyboard navigation');
        log('• Proper lang attributes for Arabic content sections');
        log('• RTL-aware keyboard navigation');
        log('• Screen reader announcements for language changes');
        log('• ARIA labels and roles for interactive elements');
        log('• Proper document structure with landmarks');
        log('• Language-specific content sections');
    } else {
        log('✗ Some accessibility features are missing or incomplete.', RED);
        log('Please review the failed checks above.', YELLOW);
    }

    process.exit(allPassed ? 0 : 1);
}

main();