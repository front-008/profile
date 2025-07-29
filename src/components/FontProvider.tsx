import { useEffect } from 'react';
import { useFontSwitching } from '../hooks/use-font-switching';

interface FontProviderProps {
  children: React.ReactNode;
}

/**
 * FontProvider component that handles font switching logic
 * Should be used near the root of the application
 */
export const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
  const { currentFont, isArabicFont, fontFamily } = useFontSwitching();

  useEffect(() => {
    // Apply font class to html element for global font switching
    const htmlElement = document.documentElement;
    
    if (isArabicFont) {
      htmlElement.classList.add('font-arabic');
      htmlElement.classList.remove('font-english');
    } else {
      htmlElement.classList.add('font-english');
      htmlElement.classList.remove('font-arabic');
    }
    
    // Set data attribute for CSS targeting
    htmlElement.setAttribute('data-font', currentFont);
  }, [currentFont, isArabicFont]);

  return <>{children}</>;
};