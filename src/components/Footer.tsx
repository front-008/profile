import { Heart, Code2, Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { motion, Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'
import { useRTLAnimations } from '@/hooks/useRTLAnimations'

export default function Footer() {
  const { isRTL } = useLanguage()
  const { t } = useTranslation()
  const { 
    staggerContainerVariants, 
    textRevealVariants, 
    iconVariants,
    cardHoverVariants 
  } = useRTLAnimations()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        staggerDirection: isRTL ? -1 : 1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      x: isRTL ? 20 : -20
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0
    }
  }

  const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1
    }
  }

  return (
    <footer className="bg-gradient-to-t from-gray-100 to-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Brand */}
          <motion.div className="space-y-4" variants={itemVariants} transition={{ duration: 0.6 }}>
            <motion.div
              className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500"
                initial={{ scale: 0, rotate: isRTL ? 180 : -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                <Code2 className="w-6 h-6 text-white" />
              </motion.div>
              <motion.span
                className="text-xl font-bold text-gray-900"
                initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {t('footer.brand')}
              </motion.span>
            </motion.div>
            <motion.p
              className="text-gray-600 text-sm leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {t('footer.brandDescription')}
            </motion.p>
            <motion.div
              className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5,
                    staggerDirection: isRTL ? -1 : 1
                  }
                }
              }}
            >
              <motion.button
                className="p-2 rounded-full bg-gray-200 hover:bg-purple-500 hover:text-white transition-colors"
                variants={socialVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
              >
                <Github className="w-4 h-4 text-gray-700" />
              </motion.button>
              <motion.button
                className="p-2 rounded-full bg-gray-200 hover:bg-purple-500 hover:text-white transition-colors"
                variants={socialVariants}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
              >
                <Twitter className="w-4 h-4 text-gray-700" />
              </motion.button>
              <motion.button
                className="p-2 rounded-full bg-gray-200 hover:bg-purple-500 hover:text-white transition-colors"
                variants={socialVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
              >
                <Linkedin className="w-4 h-4 text-gray-700" />
              </motion.button>
              <motion.button
                className="p-2 rounded-full bg-gray-200 hover:bg-purple-500 hover:text-white transition-colors"
                variants={socialVariants}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
              >
                <Mail className="w-4 h-4 text-gray-700" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Products */}
          <motion.div className="space-y-4" variants={itemVariants} transition={{ duration: 0.6 }}>
            <motion.h4
              className="font-semibold text-gray-900"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t('footer.products')}
            </motion.h4>
            <motion.ul
              className="space-y-2 text-sm text-gray-600"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                    staggerDirection: isRTL ? -1 : 1
                  }
                }
              }}
            >
              {[
                { name: t('navbar.logistics'), desc: t('navbar.logisticsDescription') },
                { name: t('navbar.erp'), desc: t('navbar.erpDescription') },
                { name: t('navbar.ecommerce'), desc: t('navbar.ecommerceDescription') },
                { name: t('navbar.pos'), desc: t('navbar.posDescription') }
              ].map((product, index) => (
                <motion.li
                  key={product.name}
                  variants={{
                    hidden: { opacity: 0, x: isRTL ? 10 : -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.a
                    href="#"
                    className="hover:text-purple-600 transition-colors block"
                    whileHover={{ x: isRTL ? -5 : 5, transition: { duration: 0.2 } }}
                  >
                    <span className="font-medium">{product.name}</span>
                    <span className="block text-xs text-gray-500">{product.desc}</span>
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Company */}
          <motion.div className="space-y-4" variants={itemVariants} transition={{ duration: 0.6 }}>
            <motion.h4
              className="font-semibold text-gray-900"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t('footer.company')}
            </motion.h4>
            <motion.ul
              className="space-y-2 text-sm text-gray-600"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                    staggerDirection: isRTL ? -1 : 1
                  }
                }
              }}
            >
              {[
                { name: t('navbar.ourStory'), path: '/our-story' },
                { name: t('navbar.team'), path: '/team' },
                { name: t('navbar.jobs'), path: '/jobs' },
                { name: t('navbar.newsroom'), path: '/newsroom' }
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, x: isRTL ? 10 : -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Link to={item.path}>
                    <motion.span
                      className="hover:text-purple-600 transition-colors block"
                      whileHover={{ x: isRTL ? -5 : 5, transition: { duration: 0.2 } }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact */}
          <motion.div className="space-y-4" variants={itemVariants} transition={{ duration: 0.6 }}>
            <motion.h4
              className="font-semibold text-gray-900"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t('footer.contact')}
            </motion.h4>
            <motion.ul
              className="space-y-2 text-sm text-gray-600"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                    staggerDirection: isRTL ? -1 : 1
                  }
                }
              }}
            >
              {[t('footer.email'), t('footer.phone'), t('footer.address')].map((contact, index) => (
                <motion.li
                  key={contact}
                  variants={{
                    hidden: { opacity: 0, x: isRTL ? 10 : -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {contact}
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: isRTL ? 10 : -10 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.4 }}
              >
                <motion.a
                  href="#"
                  className="hover:text-purple-600 transition-colors"
                  whileHover={{ x: isRTL ? -5 : 5, transition: { duration: 0.2 } }}
                >
                  {t('footer.scheduleCall')}
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div
          className={`border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.p
            className="text-sm text-gray-600"
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {t('footer.copyright')}
          </motion.p>
          <motion.div
            className={`flex items-center gap-2 text-sm text-gray-600 ${isRTL ? 'flex-row-reverse' : ''}`}
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <span>{t('footer.madeWith')}</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 text-purple-500" />
            </motion.div>
            <span>{t('footer.andTech')}</span>
          </motion.div>
        </motion.div>
      </div>
    </footer >
  )
}