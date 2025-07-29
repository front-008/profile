import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';
import { useAccessibility } from './AccessibilityProvider';

export const LanguageAnnouncer: React.FC = () => {
    const { language } = useLanguage();
    const { t } = useTranslation('accessibility');
    const { announceToScreenReader } = useAccessibility();

    useEffect(() => {
        // Announce language change to screen readers
        const languageName = language === 'ar' ? 'العربية' : 'English';
        const announcement = language === 'ar'
            ? `تم تغيير اللغة إلى ${languageName}`
            : `Language changed to ${languageName}`;

        // Delay announcement to ensure screen readers are ready
        const timeoutId = setTimeout(() => {
            announceToScreenReader(announcement);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [language, announceToScreenReader]);

    return null; // This component doesn't render anything visible
};