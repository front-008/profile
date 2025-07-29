import { useEffect, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface KeyboardNavigationOptions {
    enableArrowKeys?: boolean;
    enableTabTrapping?: boolean;
    onEscape?: () => void;
    containerRef?: React.RefObject<HTMLElement>;
}

export const useKeyboardNavigation = (options: KeyboardNavigationOptions = {}) => {
    const { isRTL } = useLanguage();
    const {
        enableArrowKeys = false,
        enableTabTrapping = false,
        onEscape,
        containerRef
    } = options;

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        const { key, target } = event;
        const activeElement = target as HTMLElement;

        // Handle Escape key
        if (key === 'Escape' && onEscape) {
            onEscape();
            return;
        }

        // Handle arrow key navigation (RTL-aware)
        if (enableArrowKeys) {
            const focusableElements = containerRef?.current?.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            if (focusableElements && focusableElements.length > 0) {
                const currentIndex = Array.from(focusableElements).indexOf(activeElement);

                if (currentIndex !== -1) {
                    let nextIndex = currentIndex;

                    switch (key) {
                        case 'ArrowRight':
                            // In RTL, right arrow should go to previous element
                            nextIndex = isRTL
                                ? (currentIndex - 1 + focusableElements.length) % focusableElements.length
                                : (currentIndex + 1) % focusableElements.length;
                            break;
                        case 'ArrowLeft':
                            // In RTL, left arrow should go to next element
                            nextIndex = isRTL
                                ? (currentIndex + 1) % focusableElements.length
                                : (currentIndex - 1 + focusableElements.length) % focusableElements.length;
                            break;
                        case 'ArrowDown':
                            nextIndex = (currentIndex + 1) % focusableElements.length;
                            break;
                        case 'ArrowUp':
                            nextIndex = (currentIndex - 1 + focusableElements.length) % focusableElements.length;
                            break;
                        case 'Home':
                            nextIndex = 0;
                            break;
                        case 'End':
                            nextIndex = focusableElements.length - 1;
                            break;
                        default:
                            return;
                    }

                    if (nextIndex !== currentIndex) {
                        event.preventDefault();
                        (focusableElements[nextIndex] as HTMLElement).focus();
                    }
                }
            }
        }

        // Handle tab trapping
        if (enableTabTrapping && containerRef?.current) {
            const focusableElements = containerRef.current.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            if (focusableElements.length > 0) {
                const firstElement = focusableElements[0] as HTMLElement;
                const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

                if (key === 'Tab') {
                    if (event.shiftKey) {
                        // Shift + Tab (backward)
                        if (activeElement === firstElement) {
                            event.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        // Tab (forward)
                        if (activeElement === lastElement) {
                            event.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            }
        }
    }, [isRTL, enableArrowKeys, enableTabTrapping, onEscape, containerRef]);

    useEffect(() => {
        const container = containerRef?.current || document;
        container.addEventListener('keydown', handleKeyDown);

        return () => {
            container.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown, containerRef]);

    return {
        // Utility function to get RTL-aware direction
        getNavigationDirection: (direction: 'left' | 'right' | 'up' | 'down') => {
            if (direction === 'left') return isRTL ? 'next' : 'previous';
            if (direction === 'right') return isRTL ? 'previous' : 'next';
            return direction;
        },

        // Utility function to focus first/last element
        focusFirst: () => {
            if (containerRef?.current) {
                const firstFocusable = containerRef.current.querySelector(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                ) as HTMLElement;
                firstFocusable?.focus();
            }
        },

        focusLast: () => {
            if (containerRef?.current) {
                const focusableElements = containerRef.current.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;
                lastFocusable?.focus();
            }
        }
    };
};