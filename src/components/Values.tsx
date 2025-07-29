import { Heart, Zap, Users, Target, Lightbulb, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRTLAnimations } from '@/hooks/useRTLAnimations'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

const getValues = (t: (key: string) => string) => [
  {
    icon: Heart,
    title: t('values.humanCentered.title'),
    description: t('values.humanCentered.description'),
    color: "hsl(var(--primary))"
  },
  {
    icon: Zap,
    title: t('values.technical.title'),
    description: t('values.technical.description'),
    color: "hsl(var(--innovation-blue))"
  },
  {
    icon: Users,
    title: t('values.collaborative.title'),
    description: t('values.collaborative.description'),
    color: "hsl(var(--innovation-purple))"
  },
  {
    icon: Target,
    title: t('values.userFirst.title'),
    description: t('values.userFirst.description'),
    color: "hsl(var(--innovation-teal))"
  },
  {
    icon: Lightbulb,
    title: t('values.creative.title'),
    description: t('values.creative.description'),
    color: "hsl(var(--innovation-orange))"
  },
  {
    icon: Shield,
    title: t('values.reliable.title'),
    description: t('values.reliable.description'),
    color: "hsl(var(--primary))"
  }
]

export default function Values() {
  const { isRTL } = useLanguage()
  const { t } = useTranslation()
  const {
    staggerContainerVariants,
    textRevealVariants,
    iconVariants,
    cardHoverVariants
  } = useRTLAnimations()

  const values = getValues(t)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        staggerDirection: isRTL ? -1 : 1, // Reverse stagger for RTL
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      x: isRTL ? 30 : -30, // Slide from reading direction
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      x: isRTL ? 20 : -20, // Title slides from reading direction
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

  const rtlIconVariants = {
    hidden: {
      scale: 0,
      rotate: isRTL ? 180 : -180, // Rotate in opposite direction for RTL
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={titleVariants}
          >
            {t('values.title')}
            <span className="text-gradient"> {t('values.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={titleVariants}
            transition={{ delay: 0.2 }}
          >
            {t('values.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mobile-values-rtl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                className="innovation-card group"
                variants={itemVariants}
                whileHover={cardHoverVariants}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="inline-flex p-3 rounded-xl mb-4 pulse-glow"
                  style={{ backgroundColor: `${value.color}20`, color: value.color }}
                  variants={rtlIconVariants}
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.6, ease: "easeInOut" }
                  }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>

                <motion.h3
                  className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors"
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  {value.title}
                </motion.h3>

                <motion.p
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                >
                  {value.description}
                </motion.p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}