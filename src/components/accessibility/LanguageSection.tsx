import React, { ReactNode } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';

interface LanguageSectionProps {
    children: ReactNode;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
    lang?: string; // Override language if needed
    role?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    id?: string;
}

export const LanguageSection: React.FC<LanguageSectionProps> = ({
    children,
    className,
    as: Component = 'section',
    lang,
    role,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    id,
    ...props
}) => {
    const { language, isRTL } = useLanguage();

    // Use provided lang or fall back to current language
    const sectionLang = lang || language;

    return (
        <Component
            {...props}
            id={id}
            lang={sectionLang}
            dir={sectionLang === 'ar' ? 'rtl' : 'ltr'}
            role={role}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledby}
            className={cn(
                // Base RTL/LTR classes
                sectionLang === 'ar' ? 'text-right' : 'text-left',
                sectionLang === 'ar' ? 'font-arabic' : 'font-sans',
                className
            )}
        >
            {children}
        </Component>
    );
};