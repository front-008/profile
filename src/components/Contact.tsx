import { ArrowRight, Mail, MessageSquare, Calendar, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'
import { useRTLAnimations } from '@/hooks/useRTLAnimations'

const getContactMethods = (t: (key: string) => string) => [
  {
    icon: Mail,
    title: t('contact.methods.email.title'),
    description: t('contact.methods.email.description'),
    contact: t('footer.email'),
    color: "hsl(var(--primary))"
  },
  {
    icon: Phone,
    title: t('contact.methods.phone.title'),
    description: t('contact.methods.phone.description'),
    contact: t('footer.phone'),
    color: "hsl(var(--innovation-blue))"
  },
  {
    icon: MessageSquare,
    title: t('contact.methods.chat.title'),
    description: t('contact.methods.chat.description'),
    contact: t('contact.methods.chat.availability'),
    color: "hsl(var(--innovation-purple))"
  },
  {
    icon: MapPin,
    title: t('contact.methods.visit.title'),
    description: t('contact.methods.visit.description'),
    contact: t('footer.address'),
    color: "hsl(var(--innovation-teal))"
  }
]

export default function Contact() {
  const { isRTL } = useLanguage()
  const { t } = useTranslation()
  const {
    staggerContainerVariants,
    textRevealVariants,
    iconVariants,
    cardHoverVariants
  } = useRTLAnimations()

  const contactMethods = getContactMethods(t)

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

  const containerVariants = {
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

  const itemVariants = {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const formVariants = {
    hidden: {
      opacity: 0,
      x: isRTL ? 50 : -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const contactMethodVariants = {
    hidden: {
      opacity: 0,
      x: isRTL ? -50 : 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-accent/10 to-background">
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
            {t('contact.title')}
            <span className="text-gradient"> {t('contact.titleHighlight')}</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={titleVariants}
            transition={{ delay: 0.2 }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mobile-contact-rtl">
          {/* Contact Form */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={formVariants}
          >
            <motion.div
              variants={itemVariants}
            >
              <motion.h3
                className="text-2xl font-semibold mb-4"
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {t('contact.form.title')}
              </motion.h3>
              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {t('contact.form.subtitle')}
              </motion.p>
            </motion.div>

            <motion.form
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mobile-form-rtl"
                variants={itemVariants}
              >
                <motion.div
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="block text-sm font-medium mb-2">{t('contact.form.firstName')}</label>
                  <Input placeholder={t('contact.form.firstNamePlaceholder')} className="w-full" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label className="block text-sm font-medium mb-2">{t('contact.form.lastName')}</label>
                  <Input placeholder={t('contact.form.lastNamePlaceholder')} className="w-full" />
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.label
                  className="block text-sm font-medium mb-2"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  {t('contact.form.email')}
                </motion.label>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Input type="email" placeholder={t('contact.form.emailPlaceholder')} className="w-full" />
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.label
                  className="block text-sm font-medium mb-2"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  {t('contact.form.company')}
                </motion.label>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Input placeholder={t('contact.form.companyPlaceholder')} className="w-full" />
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.label
                  className="block text-sm font-medium mb-2"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  {t('contact.form.budget')}
                </motion.label>
                <motion.select
                  className="w-full p-3 border border-input rounded-md bg-background"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <option>{t('contact.form.budgetOptions.small')}</option>
                  <option>{t('contact.form.budgetOptions.medium')}</option>
                  <option>{t('contact.form.budgetOptions.large')}</option>
                  <option>{t('contact.form.budgetOptions.enterprise')}</option>
                </motion.select>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.label
                  className="block text-sm font-medium mb-2"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  {t('contact.form.message')}
                </motion.label>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Textarea
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full min-h-[120px]"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="btn-hero w-full group">
                  {t('contact.form.submit')}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'} transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={contactMethodVariants}
          >
            <motion.div
              variants={itemVariants}
            >
              <motion.h3
                className="text-2xl font-semibold mb-4"
                initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {t('contact.methods.title')}
              </motion.h3>
              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {t('contact.methods.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
            >
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.div
                    key={index}
                    className="innovation-card group cursor-pointer"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <motion.div
                        className="p-3 rounded-xl pulse-glow"
                        style={{ backgroundColor: `${method.color}15`, color: method.color }}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + 0.2,
                          duration: 0.5,
                          ease: "backOut"
                        }}
                        whileHover={{
                          rotate: 360,
                          transition: { duration: 0.6 }
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.h4
                          className="font-semibold mb-1 group-hover:text-primary transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                        >
                          {method.title}
                        </motion.h4>
                        <motion.p
                          className="text-sm text-muted-foreground mb-2"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
                        >
                          {method.description}
                        </motion.p>
                        <motion.p
                          className="text-sm font-medium"
                          style={{ color: method.color }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                        >
                          {method.contact}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              className="innovation-card bg-gradient-to-br from-primary/5 to-accent/5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6, ease: "backOut" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="flex items-center gap-4 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.5, ease: "backOut" }}
                >
                  <Calendar className="w-6 h-6 text-primary" />
                </motion.div>
                <h4 className="font-semibold">{t('contact.consultation.title')}</h4>
              </motion.div>
              <motion.p
                className="text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                {t('contact.consultation.description')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="outline" className="w-full border-primary/30 hover:border-primary hover:bg-primary/5">
                  {t('contact.consultation.cta')}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}