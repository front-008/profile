import { Link } from 'react-router-dom'
import { motion, Variants } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'
import { useRTLAnimations } from '@/hooks/useRTLAnimations'

const getTeamMembers = (t: (key: string) => string) => [
  {
    id: 1,
    name: t('team.members.mohammed.name'),
    title: t('team.members.mohammed.title'),
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: t('team.members.khalid.name'),
    title: t('team.members.khalid.title'),
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: t('team.members.abdullah.name'),
    title: t('team.members.abdullah.title'),
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: t('team.members.majid.name'),
    title: t('team.members.majid.title'),
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: t('team.members.saif.name'),
    title: t('team.members.saif.title'),
    image: "/placeholder.svg"
  },
  {
    id: 6,
    name: t('team.members.mohammed2.name'),
    title: t('team.members.mohammed2.title'),
    image: "/placeholder.svg"
  }
]

export default function Team() {
  const { isRTL } = useLanguage()
  const { t } = useTranslation()
  const {
    staggerContainerVariants,
    textRevealVariants,
    iconVariants,
    cardHoverVariants
  } = useRTLAnimations()

  const teamMembers = getTeamMembers(t)

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

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      x: isRTL ? 30 : -30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const titleVariants: Variants = {
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
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.68, -0.55, 0.265, 1.55]
      }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
            variants={titleVariants}
          >
            {t('team.title')}
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('team.titleHighlight')}
            </span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={titleVariants}
            transition={{ delay: 0.2 }}
          >
            {t('team.subtitle')}
          </motion.p>
        </motion.div>

        {/* Team Grid - 3 members only */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 mobile-team-rtl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {teamMembers.slice(0, 3).map((member, index) => (
            <motion.div
              key={member.id}
              className="group cursor-pointer"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-purple-100 to-pink-100"
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.h3
                  className="text-gray-900 font-bold text-xl mb-2"
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-sm"
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                >
                  {member.title}
                </motion.p>

                {/* Social Links */}
                <motion.div
                  className={`flex mt-4 ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}
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
                  <motion.div
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-colors cursor-pointer"
                    variants={socialVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-4 h-4 text-gray-600 hover:text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </motion.div>
                  <motion.div
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-colors cursor-pointer"
                    variants={socialVariants}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-4 h-4 text-gray-600 hover:text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {t('team.cta.title')}
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t('team.cta.titleHighlight')}
              </span>
            </motion.h3>
            <motion.p
              className="text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {t('team.cta.description')}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.8
                  }
                }
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/team"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 inline-block"
                >
                  {t('team.cta.meetTeam')}
                </Link>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/jobs"
                  className="border border-purple-500/30 hover:border-purple-500 hover:bg-purple-50 text-purple-600 px-8 py-3 rounded-full font-medium transition-all duration-200 inline-block"
                >
                  {t('team.cta.joinTeam')}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}