import { Monitor, Smartphone, Cloud, Database, Palette, Cog } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'
import { useRTLAnimations } from '@/hooks/useRTLAnimations'

const getServices = (t: (key: string) => string) => [
  {
    icon: Monitor,
    title: t('services.webApps.title'),
    description: t('services.webApps.description'),
    features: [
      t('services.webApps.features.react'),
      t('services.webApps.features.typescript'),
      t('services.webApps.features.pwa'),
      t('services.webApps.features.performance')
    ],
    color: "hsl(var(--primary))"
  },
  {
    icon: Smartphone,
    title: t('services.mobile.title'),
    description: t('services.mobile.description'),
    features: [
      t('services.mobile.features.reactNative'),
      t('services.mobile.features.platforms'),
      t('services.mobile.features.crossPlatform'),
      t('services.mobile.features.appStore')
    ],
    color: "hsl(var(--innovation-blue))"
  },
  {
    icon: Cloud,
    title: t('services.cloud.title'),
    description: t('services.cloud.description'),
    features: [
      t('services.cloud.features.aws'),
      t('services.cloud.features.cicd'),
      t('services.cloud.features.containers'),
      t('services.cloud.features.scaling')
    ],
    color: "hsl(var(--innovation-purple))"
  },
  {
    icon: Database,
    title: t('services.backend.title'),
    description: t('services.backend.description'),
    features: [
      t('services.backend.features.apis'),
      t('services.backend.features.graphql'),
      t('services.backend.features.microservices'),
      t('services.backend.features.database')
    ],
    color: "hsl(var(--innovation-teal))"
  },
  {
    icon: Palette,
    title: t('services.design.title'),
    description: t('services.design.description'),
    features: [
      t('services.design.features.research'),
      t('services.design.features.prototyping'),
      t('services.design.features.systems'),
      t('services.design.features.accessibility')
    ],
    color: "hsl(var(--innovation-orange))"
  },
  {
    icon: Cog,
    title: t('services.consulting.title'),
    description: t('services.consulting.description'),
    features: [
      t('services.consulting.features.planning'),
      t('services.consulting.features.review'),
      t('services.consulting.features.training'),
      t('services.consulting.features.practices')
    ],
    color: "hsl(var(--primary))"
  }
]

export default function Services() {
  const { isRTL } = useLanguage()
  const { t } = useTranslation()
  const {
    staggerContainerVariants,
    textRevealVariants,
    iconVariants,
    cardHoverVariants
  } = useRTLAnimations()

  const services = getServices(t)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        staggerDirection: isRTL ? -1 : 1
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      x: isRTL ? 30 : -30,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  const featureVariants = {
    hidden: {
      opacity: 0,
      x: isRTL ? 10 : -10
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      x: isRTL ? 20 : -20
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

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
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
            {t('services.title')}
            <span className="text-gradient"> {t('services.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={titleVariants}
            transition={{ delay: 0.2 }}
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 mobile-services-rtl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                className="innovation-card group"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -15,
                  rotateY: 5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="inline-flex p-4 rounded-2xl mb-6 pulse-glow"
                  style={{ backgroundColor: `${service.color}15`, color: service.color }}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    duration: 0.6,
                    ease: "backOut"
                  }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6, ease: "easeInOut" }
                  }}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>

                <motion.h3
                  className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  className="text-muted-foreground mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                >
                  {service.description}
                </motion.p>

                <motion.ul
                  className="space-y-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: index * 0.1 + 0.6,
                        staggerDirection: isRTL ? -1 : 1
                      }
                    }
                  }}
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className={`flex items-center text-sm text-foreground/80 ${isRTL ? 'flex-row-reverse' : ''}`}
                      variants={featureVariants}
                    >
                      <motion.div
                        className={`w-1.5 h-1.5 rounded-full ${isRTL ? 'ml-3' : 'mr-3'}`}
                        style={{ backgroundColor: service.color }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + featureIndex * 0.05 + 0.7,
                          duration: 0.3,
                          ease: "backOut"
                        }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-lg text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t('services.customMessage')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, ease: "backOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="btn-hero">
              {t('services.cta')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}