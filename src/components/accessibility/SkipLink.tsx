import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { cn } from '../../lib/utils';

interface SkipLinkProps {
    href: string;
    className?: string;
}

export const SkipLink: React.FC<SkipLinkProps> = ({ href, className }) => {
    const { t } = useTranslation('accessibility');

    return (
        <a
            href={href}
            className={cn(
                // Base styles - positioned off-screen by default
                'absolute left-[-10000px] top-auto w-1 h-1 overflow-hidden',
                // Focus styles - bring into view when focused
                'focus:left-6 focus:top-6 focus:w-auto focus:h-auto focus:overflow-visible',
                'focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md',
                'focus:shadow-lg focus:border-2 focus:border-blue-500 focus:z-50',
                'focus:no-underline focus:font-medium',
                // RTL support
                'rtl:left-auto rtl:right-[-10000px]',
                'rtl:focus:right-6 rtl:focus:left-auto',
                className
            )}
            tabIndex={0}
        >
            {t('skipToContent')}
        </a>
    );
};