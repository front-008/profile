import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface AccessibilityContextType {
    announceToScreenReader: (message: string) => void;
    setFocusToElement: (elementId: string) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

interface AccessibilityProviderProps {
    children: ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
    const { language, isRTL } = useLanguage();

    // Create a live region for screen reader announcements
    useEffect(() => {
        const liveRegion = document.createElement('div');
        liveRegion.id = 'accessibility-live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.setAttribute('aria-relevant', 'text');
        liveRegion.style.position = 'absolute';
        liveRegion.style.left = '-10000px';
        liveRegion.style.width = '1px';
        liveRegion.style.height = '1px';
        liveRegion.style.overflow = 'hidden';

        document.body.appendChild(liveRegion);

        return () => {
            const existingRegion = document.getElementById('accessibility-live-region');
            if (existingRegion) {
                document.body.removeChild(existingRegion);
            }
        };
    }, []);

    // Update document attributes for accessibility
    useEffect(() => {
        // Set lang attribute on html element
        document.documentElement.lang = language;

        // Set dir attribute for RTL support
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

        // Add CSS class for RTL-specific styling
        if (isRTL) {
            document.documentElement.classList.add('rtl');
            document.documentElement.classList.remove('ltr');
        } else {
            document.documentElement.classList.add('ltr');
            document.documentElement.classList.remove('rtl');
        }
    }, [language, isRTL]);

    const announceToScreenReader = (message: string) => {
        const liveRegion = document.getElementById('accessibility-live-region');
        if (liveRegion) {
            // Clear previous message
            liveRegion.textContent = '';

            // Set new message after a brief delay to ensure screen readers pick it up
            setTimeout(() => {
                liveRegion.textContent = message;
            }, 100);
        }
    };

    const setFocusToElement = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.focus();
            // Scroll element into view if needed
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const contextValue: AccessibilityContextType = {
        announceToScreenReader,
        setFocusToElement,
    };

    return (
        <AccessibilityContext.Provider value={contextValue}>
            {children}
        </AccessibilityContext.Provider>
    );
};

export const useAccessibility = (): AccessibilityContextType => {
    const context = useContext(AccessibilityContext);
    if (context === undefined) {
        throw new Error('useAccessibility must be used within an AccessibilityProvider');
    }
    return context;
};