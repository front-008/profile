/**
 * RTL-aware animation utilities
 * Provides functions to get appropriate animation classes and framer-motion variants based on text direction
 */

import { Variants } from 'framer-motion';

export type AnimationDirection = 'left' | 'right' | 'start' | 'end';
export type AnimationType = 'slide' | 'fade' | 'scale' | 'rotate';

/**
 * Get RTL-aware animation class
 */
export const getRTLAnimation = (
  type: AnimationType,
  direction: AnimationDirection,
  isRTL: boolean
): string => {
  const animationMap: Record<string, Record<string, string>> = {
    slide: {
      left: isRTL ? 'slide-in-right' : 'slide-in-left',
      right: isRTL ? 'slide-in-left' : 'slide-in-right',
      start: 'slide-in-start',
      end: 'slide-in-end',
    },
    fade: {
      left: 'fade-in-left',
      right: 'fade-in-right',
      start: 'fade-in-start',
      end: 'fade-in-end',
    },
    scale: {
      left: 'scale-bounce',
      right: 'scale-bounce',
      start: 'scale-bounce',
      end: 'scale-bounce',
    },
    rotate: {
      left: 'rotate-fade-in',
      right: 'rotate-fade-in',
      start: 'rotate-fade-in',
      end: 'rotate-fade-in',
    },
  };

  return animationMap[type]?.[direction] || 'fade-in';
};

/**
 * Get RTL-aware transform class
 */
export const getRTLTransform = (
  transform: string,
  isRTL: boolean
): string => {
  const transformMap: Record<string, string> = {
    'translate-x-full': isRTL ? '-translate-x-full' : 'translate-x-full',
    '-translate-x-full': isRTL ? 'translate-x-full' : '-translate-x-full',
    'translate-x-1/2': isRTL ? '-translate-x-1/2' : 'translate-x-1/2',
    '-translate-x-1/2': isRTL ? 'translate-x-1/2' : '-translate-x-1/2',
  };

  return transformMap[transform] || transform;
};

/**
 * Get RTL-aware positioning class
 */
export const getRTLPosition = (
  position: string,
  isRTL: boolean
): string => {
  const positionMap: Record<string, string> = {
    'left-0': isRTL ? 'right-0' : 'left-0',
    'right-0': isRTL ? 'left-0' : 'right-0',
    'left-4': isRTL ? 'right-4' : 'left-4',
    'right-4': isRTL ? 'left-4' : 'right-4',
    'left-auto': isRTL ? 'right-auto' : 'left-auto',
    'right-auto': isRTL ? 'left-auto' : 'right-auto',
  };

  return positionMap[position] || position;
};

/**
 * Get RTL-aware margin class
 */
export const getRTLMargin = (
  margin: string,
  isRTL: boolean
): string => {
  const marginMap: Record<string, string> = {
    'ml-auto': isRTL ? 'mr-auto' : 'ml-auto',
    'mr-auto': isRTL ? 'ml-auto' : 'mr-auto',
    'ml-4': isRTL ? 'mr-4' : 'ml-4',
    'mr-4': isRTL ? 'ml-4' : 'mr-4',
    'ml-6': isRTL ? 'mr-6' : 'ml-6',
    'mr-6': isRTL ? 'ml-6' : 'mr-6',
  };

  return marginMap[margin] || margin;
};

/**
 * Get RTL-aware padding class
 */
export const getRTLPadding = (
  padding: string,
  isRTL: boolean
): string => {
  const paddingMap: Record<string, string> = {
    'pl-4': isRTL ? 'pr-4' : 'pl-4',
    'pr-4': isRTL ? 'pl-4' : 'pr-4',
    'pl-6': isRTL ? 'pr-6' : 'pl-6',
    'pr-6': isRTL ? 'pl-6' : 'pr-6',
    'pl-8': isRTL ? 'pr-8' : 'pl-8',
    'pr-8': isRTL ? 'pl-8' : 'pr-8',
  };

  return paddingMap[padding] || padding;
};

/**
 * Get RTL-aware text alignment class
 */
export const getRTLTextAlign = (
  align: string,
  isRTL: boolean
): string => {
  const alignMap: Record<string, string> = {
    'text-left': isRTL ? 'text-right' : 'text-left',
    'text-right': isRTL ? 'text-left' : 'text-right',
    'text-start': 'text-start',
    'text-end': 'text-end',
  };

  return alignMap[align] || align;
};

/**
 * Combine multiple RTL-aware classes
 */
export const combineRTLClasses = (
  classes: string[],
  isRTL: boolean
): string => {
  return classes
    .map(cls => {
      if (cls.includes('translate-x')) return getRTLTransform(cls, isRTL);
      if (cls.includes('left-') || cls.includes('right-')) return getRTLPosition(cls, isRTL);
      if (cls.includes('ml-') || cls.includes('mr-')) return getRTLMargin(cls, isRTL);
      if (cls.includes('pl-') || cls.includes('pr-')) return getRTLPadding(cls, isRTL);
      if (cls.includes('text-')) return getRTLTextAlign(cls, isRTL);
      return cls;
    })
    .join(' ');
};

// ===== FRAMER-MOTION RTL-AWARE UTILITIES =====

/**
 * Get RTL-aware slide animation variants for framer-motion
 */
export const getRTLSlideVariants = (isRTL: boolean): Variants => ({
  hidden: {
    opacity: 0,
    x: isRTL ? 50 : -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

/**
 * Get RTL-aware slide in from left variants
 */
export const getRTLSlideInLeftVariants = (isRTL: boolean): Variants => ({
  hidden: {
    opacity: 0,
    x: isRTL ? 50 : -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

/**
 * Get RTL-aware slide in from right variants
 */
export const getRTLSlideInRightVariants = (isRTL: boolean): Variants => ({
  hidden: {
    opacity: 0,
    x: isRTL ? -50 : 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

/**
 * Get RTL-aware stagger container variants
 */
export const getRTLStaggerContainerVariants = (isRTL: boolean): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      staggerDirection: isRTL ? -1 : 1, // Reverse stagger direction for RTL
    },
  },
});

/**
 * Get RTL-aware card hover variants
 */
export const getRTLCardHoverVariants = (isRTL: boolean) => ({
  scale: 1.05,
  rotateY: isRTL ? -2 : 2, // Subtle rotation that respects reading direction
  transition: {
    duration: 0.3,
    ease: [0.25, 0.1, 0.25, 1],
  },
});

/**
 * Get RTL-aware icon animation variants
 */
export const getRTLIconVariants = (isRTL: boolean): Variants => ({
  hidden: { 
    scale: 0, 
    rotate: isRTL ? 180 : -180, // Rotate in opposite direction for RTL
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.68, -0.55, 0.265, 1.55],
    },
  },
});

/**
 * Get RTL-aware text reveal variants
 */
export const getRTLTextRevealVariants = (isRTL: boolean): Variants => ({
  hidden: { 
    opacity: 0, 
    x: isRTL ? 20 : -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

/**
 * Get RTL-aware floating animation
 */
export const getRTLFloatingAnimation = (isRTL: boolean) => ({
  y: [-10, 10, -10],
  rotate: isRTL ? [2, -2, 2] : [-2, 2, -2], // Reverse rotation for RTL
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: [0.4, 0, 0.6, 1],
  },
});

/**
 * Get RTL-aware button hover animation
 */
export const getRTLButtonHoverAnimation = (isRTL: boolean) => ({
  scale: 1.05,
  x: isRTL ? -2 : 2, // Subtle movement in reading direction
  transition: {
    duration: 0.2,
    ease: [0.25, 0.1, 0.25, 1],
  },
});

/**
 * Get RTL-aware arrow animation for buttons
 */
export const getRTLArrowAnimation = (isRTL: boolean) => ({
  x: isRTL ? -4 : 4, // Move arrow in reading direction
  transition: {
    duration: 0.2,
    ease: [0.25, 0.1, 0.25, 1],
  },
});

/**
 * Get RTL-aware modal/dropdown slide variants
 */
export const getRTLModalSlideVariants = (isRTL: boolean): Variants => ({
  hidden: {
    opacity: 0,
    x: isRTL ? '100%' : '-100%',
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    x: isRTL ? '100%' : '-100%',
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

/**
 * Get RTL-aware page transition variants
 */
export const getRTLPageTransitionVariants = (isRTL: boolean): Variants => ({
  initial: {
    opacity: 0,
    x: isRTL ? 100 : -100,
  },
  in: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  out: {
    opacity: 0,
    x: isRTL ? -100 : 100,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

/**
 * Create RTL-aware custom animation variants
 */
export const createRTLVariants = (
  baseVariants: Variants,
  isRTL: boolean,
  rtlOverrides?: Partial<Variants>
): Variants => {
  if (!isRTL) return baseVariants;
  
  const rtlVariants = { ...baseVariants };
  
  // Apply RTL transformations to each variant
  Object.keys(rtlVariants).forEach(key => {
    const variant = rtlVariants[key];
    if (typeof variant === 'object' && variant !== null) {
      // Flip x values
      if ('x' in variant && typeof variant.x === 'number') {
        variant.x = -variant.x;
      }
      
      // Flip rotate values
      if ('rotate' in variant && typeof variant.rotate === 'number') {
        variant.rotate = -variant.rotate;
      }
      
      // Flip rotateY values
      if ('rotateY' in variant && typeof variant.rotateY === 'number') {
        variant.rotateY = -variant.rotateY;
      }
    }
  });
  
  // Apply custom RTL overrides if provided
  if (rtlOverrides) {
    Object.assign(rtlVariants, rtlOverrides);
  }
  
  return rtlVariants;
};