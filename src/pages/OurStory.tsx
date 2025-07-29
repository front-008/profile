import { motion } from 'framer-motion'
import { ArrowRight, Code, Users, Lightbulb, Target, Rocket, Heart } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'
import { useRTLAnimations } from '@/hooks/useRTLAnimations'

const OurStory = () => {
    const { isRTL } = useLanguage()
    const { t } = useTranslation()
    const {
        staggerContainerVariants,
        textRevealVariants,
        iconVariants,
        cardHoverVariants
    } = useRTLAnimations()

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-violet-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-6 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
                            initial={{ opacity: 0, y: 20, x: isRTL ? 20 : -20 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {t('ourStory.title')} <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{t('ourStory.titleHighlight')}</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {t('ourStory.subtitle')}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Timeline Line - Desktop centered, Mobile left-aligned */}
                        <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>

                        {/* Timeline Items */}
                        <div className="space-y-12 md:space-y-24">
                            {/* The Beginning */}
                            <motion.div
                                className="relative flex items-center"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                {/* Mobile Layout */}
                                <div className="md:hidden w-full pl-20">
                                    <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg">
                                        <div className="flex mb-4">
                                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                                                <Lightbulb className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{t('ourStory.timeline.theSpark.title')}</h3>
                                        <p className="text-gray-700 mb-3 text-sm">
                                            {t('ourStory.timeline.theSpark.description')}
                                        </p>
                                        <span className="text-purple-600 font-semibold text-sm">{t('ourStory.timeline.theSpark.date')}</span>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:flex w-full items-center">
                                    <div className="w-1/2 pr-12 text-right">
                                        <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-lg">
                                            <div className="flex justify-end mb-4">
                                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                                                    <Lightbulb className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('ourStory.timeline.theSpark.title')}</h3>
                                            <p className="text-gray-700 mb-4">
                                                {t('ourStory.timeline.theSpark.description')}
                                            </p>
                                            <span className="text-purple-600 font-semibold">{t('ourStory.timeline.theSpark.date')}</span>
                                        </div>
                                    </div>
                                    <div className="w-1/2 pl-12"></div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white"></div>
                            </motion.div>

                            {/* First Product */}
                            <motion.div
                                className="relative flex items-center"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                {/* Mobile Layout */}
                                <div className="md:hidden w-full pl-20">
                                    <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg">
                                        <div className="flex mb-4">
                                            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full">
                                                <Code className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{t('ourStory.timeline.firstCode.title')}</h3>
                                        <p className="text-gray-700 mb-3 text-sm">
                                            {t('ourStory.timeline.firstCode.description')}
                                        </p>
                                        <span className="text-blue-600 font-semibold text-sm">{t('ourStory.timeline.firstCode.date')}</span>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:flex w-full items-center">
                                    <div className="w-1/2 pr-12"></div>
                                    <div className="w-1/2 pl-12">
                                        <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-lg">
                                            <div className="flex mb-4">
                                                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full">
                                                    <Code className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('ourStory.timeline.firstCode.title')}</h3>
                                            <p className="text-gray-700 mb-4">
                                                {t('ourStory.timeline.firstCode.description')}
                                            </p>
                                            <span className="text-blue-600 font-semibold">{t('ourStory.timeline.firstCode.date')}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                            </motion.div>

                            {/* First Client */}
                            <motion.div
                                className="relative flex items-center"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                {/* Mobile Layout */}
                                <div className="md:hidden w-full pl-20">
                                    <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg">
                                        <div className="flex mb-4">
                                            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full">
                                                <Users className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{t('ourStory.timeline.firstSuccess.title')}</h3>
                                        <p className="text-gray-700 mb-3 text-sm">
                                            {t('ourStory.timeline.firstSuccess.description')}
                                        </p>
                                        <span className="text-green-600 font-semibold text-sm">{t('ourStory.timeline.firstSuccess.date')}</span>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:flex w-full items-center">
                                    <div className="w-1/2 pr-12 text-right">
                                        <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-lg">
                                            <div className="flex justify-end mb-4">
                                                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full">
                                                    <Users className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('ourStory.timeline.firstSuccess.title')}</h3>
                                            <p className="text-gray-700 mb-4">
                                                {t('ourStory.timeline.firstSuccess.description')}
                                            </p>
                                            <span className="text-green-600 font-semibold">{t('ourStory.timeline.firstSuccess.date')}</span>
                                        </div>
                                    </div>
                                    <div className="w-1/2 pl-12"></div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white"></div>
                            </motion.div>

                            {/* Expansion */}
                            <motion.div
                                className="relative flex items-center"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                {/* Mobile Layout */}
                                <div className="md:hidden w-full pl-20">
                                    <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg">
                                        <div className="flex mb-4">
                                            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full">
                                                <Target className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{t('ourStory.timeline.growingPortfolio.title')}</h3>
                                        <p className="text-gray-700 mb-3 text-sm">
                                            {t('ourStory.timeline.growingPortfolio.description')}
                                        </p>
                                        <span className="text-orange-600 font-semibold text-sm">{t('ourStory.timeline.growingPortfolio.date')}</span>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:flex w-full items-center">
                                    <div className="w-1/2 pr-12"></div>
                                    <div className="w-1/2 pl-12">
                                        <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-lg">
                                            <div className="flex mb-4">
                                                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full">
                                                    <Target className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('ourStory.timeline.growingPortfolio.title')}</h3>
                                            <p className="text-gray-700 mb-4">
                                                {t('ourStory.timeline.growingPortfolio.description')}
                                            </p>
                                            <span className="text-orange-600 font-semibold">{t('ourStory.timeline.growingPortfolio.date')}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>
                            </motion.div>

                            {/* Present Day */}
                            <motion.div
                                className="relative flex items-center"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                {/* Mobile Layout */}
                                <div className="md:hidden w-full pl-20">
                                    <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg">
                                        <div className="flex mb-4">
                                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                                                <Rocket className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{t('ourStory.timeline.todayBeyond.title')}</h3>
                                        <p className="text-gray-700 mb-3 text-sm">
                                            {t('ourStory.timeline.todayBeyond.description')}
                                        </p>
                                        <span className="text-purple-600 font-semibold text-sm">{t('ourStory.timeline.todayBeyond.date')}</span>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden md:flex w-full items-center">
                                    <div className="w-1/2 pr-12 text-right">
                                        <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-lg">
                                            <div className="flex justify-end mb-4">
                                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                                                    <Rocket className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('ourStory.timeline.todayBeyond.title')}</h3>
                                            <p className="text-gray-700 mb-4">
                                                {t('ourStory.timeline.todayBeyond.description')}
                                            </p>
                                            <span className="text-purple-600 font-semibold">{t('ourStory.timeline.todayBeyond.date')}</span>
                                        </div>
                                    </div>
                                    <div className="w-1/2 pl-12"></div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {t('ourStory.values.title')} <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{t('ourStory.values.titleHighlight')}</span>
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            {t('ourStory.values.subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-8 text-center shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                                <Code className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('ourStory.values.innovation.title')}</h3>
                            <p className="text-gray-700">
                                {t('ourStory.values.innovation.description')}
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-8 text-center shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('ourStory.values.clientSuccess.title')}</h3>
                            <p className="text-gray-700">
                                {t('ourStory.values.clientSuccess.description')}
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-8 text-center shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('ourStory.values.quality.title')}</h3>
                            <p className="text-gray-700">
                                {t('ourStory.values.quality.description')}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-12 shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {t('ourStory.cta.title')} <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{t('ourStory.cta.titleHighlight')}</span>
                        </h2>
                        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            {t('ourStory.cta.description')}
                        </p>
                        <motion.button
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 inline-flex items-center space-x-2"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>{t('ourStory.cta.button')}</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default OurStory