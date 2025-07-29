/**
 * Custom hook for RTL-aware animations
 * Provides easy access to RTL-aware animation variants and utilities
 */

import { useLanguage } from '@/contexts/LanguageContext';
import {
  getRTLSlideVariants,
  getRTLSlideInLeftVariants,
  getRTLSlideInRightVariants,
  getRTLStaggerContainerVariants,
  getRTLCardHoverVariants,
  getRTLIconVariants,
  getRTLTextRevealVariants,
  getRTLFloatingAnimation,
  getRTLButtonHoverAnimation,
  getRTLArrowAnimation,
  getRTLModalSlideVariants,
  getRTLPageTransitionVariants,
  createRTLVariants,
} from '@/lib/rtl-animation-utils';
import { Variants } from 'framer-motion';

export const useRTLAnimations = () => {
  const { isRTL } = useLanguage();

  return {
    // Basic slide animations
    slideVariants: getRTLSlideVariants(isRTL),
    slideInLeftVariants: getRTLSlideInLeftVariants(isRTL),
    slideInRightVariants: getRTLSlideInRightVariants(isRTL),
    
    // Container animations
    staggerContainerVariants: getRTLStaggerContainerVariants(isRTL),
    
    // Interactive animations
    cardHoverVariants: getRTLCardHoverVariants(isRTL),
    buttonHoverAnimation: getRTLButtonHoverAnimation(isRTL),
    arrowAnimation: getRTLArrowAnimation(isRTL),
    
    // Element animations
    iconVariants: getRTLIconVariants(isRTL),
    textRevealVariants: getRTLTextRevealVariants(isRTL),
    
    // Complex animations
    floatingAnimation: getRTLFloatingAnimation(isRTL),
    modalSlideVariants: getRTLModalSlideVariants(isRTL),
    pageTransitionVariants: getRTLPageTransitionVariants(isRTL),
    
    // Utility functions
    createRTLVariants: (baseVariants: Variants, rtlOverrides?: Partial<Variants>) =>
      createRTLVariants(baseVariants, isRTL, rtlOverrides),
    
    // RTL state
    isRTL,
  };
};