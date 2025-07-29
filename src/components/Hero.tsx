import { ArrowRight, Heart, Code, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CodeAnimation3D from './CodeAnimation3D'
import TypingCodeBackground from './TypingCodeBackground'
import heroImage from '@/assets/hero-bg.jpg'
import { useRef, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'
import { useRTLAnimations } from '@/hooks/useRTLAnimations'
import { useTranslation } from '@/hooks/useTranslation'
import { useLanguage } from '@/contexts/LanguageContext'
import { LanguageSection } from './accessibility/LanguageSection'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const { t } = useTranslation('hero')
  const { isRTL } = useLanguage()
  const {
    floatingAnimation,
    buttonHoverAnimation,
    arrowAnimation
  } = useRTLAnimations();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const rect = heroRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100

      heroRef.current.style.setProperty('--clip-x', `${x}%`)
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove)

      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  // RTL-aware animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        staggerDirection: isRTL ? -1 : 1, // Reverse stagger for RTL
      }
    }
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      x: isRTL ? 20 : -20, // Slide from reading direction
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const badgeVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: isRTL ? 10 : -10, // Subtle rotation based on reading direction
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  }

  const titleVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        staggerDirection: isRTL ? -1 : 1, // Reverse word stagger for RTL
      }
    }
  }

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      x: isRTL ? 15 : -15, // Words slide from reading direction
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const featureVariants: Variants = {
    hidden: {
      opacity: 0,
      x: isRTL ? 20 : -20, // Features slide from reading direction
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <LanguageSection
      as="section"
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        ref={heroRef}
        className="w-full h-full"
        style={{ '--clip-x': '50%' } as React.CSSProperties}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Animated Code Background */}
        <TypingCodeBackground />

        {/* Background with Clip Path Effect */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Base grayscale image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat saturate-0 brightness-75 contrast-150"
            style={{ backgroundImage: `url(${heroImage})` }}
          />

          {/* Colored overlay with clip path */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImage})`,
              clipPath: 'polygon(0 0, var(--clip-x, 50%) 0, var(--clip-x, 50%) 100%, 0 100%)',
              transition: 'clip-path 0.1s ease-out'
            }}
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-soft/20 via-background to-accent/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        {/* 3D Animation Container */}
        <motion.div
          className="absolute inset-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <CodeAnimation3D />
        </motion.div>

        {/* Content with Clip Path Effect */}
        <motion.div
          className="relative z-20 container mx-auto px-6 text-center"
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto relative">
            {/* Base grayscale content */}
            <div className="relative">
              {/* Badge */}
              <motion.div
                className={`inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 ${isRTL ? 'flex-row-reverse' : ''
                  }`}
                variants={badgeVariants}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart className="w-4 h-4 text-primary opacity-50" />
                </motion.div>
                <span className="text-sm font-medium text-primary opacity-50">{t('badge')}</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                id="hero-title"
                className={`text-5xl md:text-7xl font-bold mb-6 leading-tight text-white ${isRTL ? 'text-right' : 'text-left'
                  } text-center`}
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                <motion.span variants={wordVariants}>{t('title.part1')}</motion.span>
                <motion.span className="text-gray-300" variants={wordVariants}> {t('title.part2')} </motion.span>
                <motion.span variants={wordVariants}>{t('title.part3')}</motion.span>
                <motion.span className="text-gray-300" variants={wordVariants}> {t('title.part4')}</motion.span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className={`text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'text-right' : 'text-left'
                  } text-center`}
                variants={itemVariants}
              >
                {t('subtitle')}
              </motion.p>

              {/* Features */}
              <motion.div
                className="flex flex-wrap justify-center gap-6 mb-12"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.8,
                      staggerDirection: isRTL ? -1 : 1
                    }
                  }
                }}
              >
                <motion.div className={`flex items-center gap-2 text-white ${isRTL ? 'flex-row-reverse' : ''
                  }`} variants={featureVariants}>
                  <Code className="w-5 h-5 text-primary opacity-50" />
                  <span className="font-medium">{t('features.technical')}</span>
                </motion.div>
                <motion.div className={`flex items-center gap-2 text-white ${isRTL ? 'flex-row-reverse' : ''
                  }`} variants={featureVariants}>
                  <Heart className="w-5 h-5 text-primary opacity-50" />
                  <span className="font-medium">{t('features.design')}</span>
                </motion.div>
                <motion.div className={`flex items-center gap-2 text-white ${isRTL ? 'flex-row-reverse' : ''
                  }`} variants={featureVariants}>
                  <Users className="w-5 h-5 text-primary opacity-50" />
                  <span className="font-medium">{t('features.collaboration')}</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Colored content overlay with clip path */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(0 0, var(--clip-x, 50%) 0, var(--clip-x, 50%) 100%, 0 100%)',
                transition: 'clip-path 0.1s ease-out'
              }}
            >
              {/* Badge */}
              <motion.div
                className={`inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 ${isRTL ? 'flex-row-reverse' : ''
                  }`}
                variants={badgeVariants}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-sm font-medium text-primary">{t('badge')}</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                aria-hidden="true"
                className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${isRTL ? 'text-right' : 'text-left'
                  } text-center`}
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                <motion.span variants={wordVariants}>{t('title.part1')}</motion.span>
                <motion.span className="text-gradient" variants={wordVariants}> {t('title.part2')} </motion.span>
                <motion.span variants={wordVariants}>{t('title.part3')}</motion.span>
                <motion.span className="text-gradient" variants={wordVariants}> {t('title.part4')}</motion.span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className={`text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'text-right' : 'text-left'
                  } text-center`}
                variants={itemVariants}
              >
                {t('subtitle')}
              </motion.p>

              {/* Features */}
              <motion.div
                className="flex flex-wrap justify-center gap-6 mb-12"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.8,
                      staggerDirection: isRTL ? -1 : 1
                    }
                  }
                }}
              >
                <motion.div className={`flex items-center gap-2 text-foreground/80 ${isRTL ? 'flex-row-reverse' : ''
                  }`} variants={featureVariants}>
                  <Code className="w-5 h-5 text-primary" />
                  <span className="font-medium">{t('features.technical')}</span>
                </motion.div>
                <motion.div className={`flex items-center gap-2 text-foreground/80 ${isRTL ? 'flex-row-reverse' : ''
                  }`} variants={featureVariants}>
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="font-medium">{t('features.design')}</span>
                </motion.div>
                <motion.div className={`flex items-center gap-2 text-foreground/80 ${isRTL ? 'flex-row-reverse' : ''
                  }`} variants={featureVariants}>
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-medium">{t('features.collaboration')}</span>
                </motion.div>
              </motion.div>
            </div>

            {/* CTA Buttons - Always on top and clickable */}
            <motion.div
              className="relative z-30 flex flex-col sm:flex-row gap-4 justify-center mobile-hero-rtl mobile-btn-group-rtl"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 1.2
                  }
                }
              }}
            >
              <motion.div
                variants={buttonVariants}
                whileHover={buttonHoverAnimation}
                whileTap={{ scale: 0.95 }}
              >
                <Button className={`btn-hero group ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('cta.primary')}
                  <motion.div
                    className={isRTL ? 'mr-2' : 'ml-2'}
                    whileHover={arrowAnimation}
                  >
                    <ArrowRight className={`w-5 h-5 transition-transform ${isRTL ? 'rotate-180' : ''
                      }`} />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div
                variants={buttonVariants}
                whileHover={buttonHoverAnimation}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary hover:bg-primary/5">
                  {t('cta.secondary')}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* RTL-aware floating elements */}
        <motion.div
          className={`absolute top-20 w-20 h-20 bg-primary/10 rounded-full blur-xl ${isRTL ? 'right-10' : 'left-10'
            }`}
          animate={floatingAnimation}
        />
        <motion.div
          className={`absolute bottom-32 w-32 h-32 bg-accent/20 rounded-full blur-2xl ${isRTL ? 'left-16' : 'right-16'
            }`}
          animate={{
            y: [-15, 15, -15],
            rotate: isRTL ? [-2, 2, -2] : [2, -2, 2], // Reverse rotation for RTL
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className={`absolute top-1/2 w-16 h-16 bg-[hsl(var(--innovation-teal))]/20 rounded-full blur-xl ${isRTL ? 'right-1/4' : 'left-1/4'
            }`}
          animate={{
            y: [-8, 12, -8],
            rotate: isRTL ? [1, -3, 1] : [-1, 3, -1], // Reverse rotation for RTL
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>
    </LanguageSection>
  )
}