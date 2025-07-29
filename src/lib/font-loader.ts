/**
 * Font loading utilities for Cairo font integration
 * Handles dynamic font loading and fallback management
 */

export interface FontConfig {
  family: string;
  weights: number[];
  display: 'swap' | 'block' | 'fallback' | 'optional';
}

export const CAIRO_FONT_CONFIG: FontConfig = {
  family: 'Cairo',
  weights: [300, 400, 500, 600, 700],
  display: 'swap'
};

/**
 * Load Cairo font from Google Fonts
 */
export const loadCairoFont = async (): Promise<void> => {
  // Check if font is already loaded
  if (document.fonts.check('16px Cairo')) {
    return;
  }

  try {
    // Create font face for Cairo
    const weights = CAIRO_FONT_CONFIG.weights.join(';');
    const fontUrl = `https://fonts.googleapis.com/css2?family=Cairo:wght@${weights.replace(/;/g, ';')}&display=${CAIRO_FONT_CONFIG.display}`;
    
    // Create link element for Google Fonts
    const link = document.createElement('link');
    link.href = fontUrl;
    link.rel = 'stylesheet';
    link.crossOrigin = 'anonymous';
    
    // Add to document head
    document.head.appendChild(link);
    
    // Wait for font to load
    await document.fonts.ready;
    
    console.log('Cairo font loaded successfully');
  } catch (error) {
    console.warn('Failed to load Cairo font:', error);
  }
};

/**
 * Check if Cairo font is available
 */
export const isCairoFontLoaded = (): boolean => {
  return document.fonts.check('16px Cairo');
};

/**
 * Get font family string with fallbacks
 */
export const getFontFamily = (isArabic: boolean): string => {
  if (isArabic) {
    return "'Cairo', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', sans-serif";
  }
  return "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif";
};

/**
 * Preload Cairo font for better performance
 */
export const preloadCairoFont = (): void => {
  const weights = CAIRO_FONT_CONFIG.weights;
  
  weights.forEach(weight => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = `https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvalIhTp2mxdt0UX8.woff2`;
    document.head.appendChild(link);
  });
};