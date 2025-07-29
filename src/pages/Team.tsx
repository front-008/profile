import Navbar from '@/components/Navbar'
import { motion, Variants } from 'framer-motion'
import { useRTLAnimations } from '@/hooks/useRTLAnimations'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

const Team = () => {
    const { isRTL } = useLanguage()
    const { t } = useTranslation()
    const {
        staggerContainerVariants,
        textRevealVariants,
        cardHoverVariants
    } = useRTLAnimations();

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

    const cardVariants: Variants = {
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

    const titleVariants: Variants = {
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

    const teamMembers = [
        {
            id: 1,
            name: t('team.members.mohammed.name'),
            title: t('team.members.mohammed.title'),
            image: "/placeholder.svg",
            position: "top-0 left-0"
        },
        {
            id: 2,
            name: t('team.members.khalid.name'),
            title: t('team.members.khalid.title'),
            image: "/placeholder.svg",
            position: "top-20 left-80"
        },
        {
            id: 3,
            name: t('team.members.abdullah.name'),
            title: t('team.members.abdullah.title'),
            image: "/placeholder.svg",
            position: "top-40 left-160"
        },
        {
            id: 4,
            name: t('team.members.majid.name'),
            title: t('team.members.majid.title'),
            image: "/placeholder.svg",
            position: "top-60 left-20"
        },
        {
            id: 5,
            name: t('team.members.saif.name'),
            title: t('team.members.saif.title'),
            image: "/placeholder.svg",
            position: "top-80 left-100"
        },
        {
            id: 6,
            name: t('team.members.mohammed2.name'),
            title: t('team.members.mohammed2.title'),
            image: "/placeholder.svg",
            position: "top-100 left-180"
        },
        {
            id: 7,
            name: t('team.members.carlos.name'),
            title: t('team.members.carlos.title'),
            image: "/placeholder.svg",
            position: "top-120 left-40"
        },
        {
            id: 8,
            name: t('team.members.ahmed.name'),
            title: t('team.members.ahmed.title'),
            image: "/placeholder.svg",
            position: "top-140 left-120"
        },

    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-20"
                        initial="hidden"
                        animate="visible"
                        variants={titleVariants}
                    >
                        <motion.h1
                            className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                            variants={titleVariants}
                        >
                            {t('team.title')}
                            <br />
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                {t('team.titleHighlight')}
                            </span>
                        </motion.h1>
                        <motion.div
                            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
                            initial={{ width: 0 }}
                            animate={{ width: 96 }}
                            transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        />
                    </motion.div>

                    {/* Team 3-Column Layout */}
                    <motion.div
                        className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {/* Column 1 */}
                        <motion.div className="flex flex-col gap-20 flex-1" variants={containerVariants}>
                            {teamMembers.filter((_, index) => index % 3 === 0).map((member, idx) => (
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
                                    <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl p-6 shadow-2xl group-hover:bg-black/30 transition-all duration-300">
                                        <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-white font-bold text-xl mb-2">{member.name}</h3>
                                        <p className="text-white/70 text-sm">{member.title}</p>

                                        {/* Social Links */}
                                        <div className="flex space-x-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Column 2 */}
                        <motion.div className="flex flex-col gap-20 flex-1 mt-24" variants={containerVariants}>
                            {teamMembers.filter((_, index) => index % 3 === 1).map((member, idx) => (
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
                                        className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl p-6 shadow-2xl group-hover:bg-black/30 transition-all duration-300"
                                        whileHover={{
                                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <motion.div
                                            className="aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50"
                                            initial={{ scale: 1.1, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: idx * 0.1 + 0.3, duration: 0.6 }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                        <motion.h3
                                            className="text-white font-bold text-xl mb-2"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 + 0.4, duration: 0.5 }}
                                        >
                                            {member.name}
                                        </motion.h3>
                                        <motion.p
                                            className="text-white/70 text-sm"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 + 0.5, duration: 0.5 }}
                                        >
                                            {member.title}
                                        </motion.p>

                                        {/* Social Links */}
                                        <motion.div
                                            className={`flex mt-4 ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: idx * 0.1 + 0.6, duration: 0.5 }}
                                        >
                                            <motion.div
                                                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </motion.div>
                                            <motion.div
                                                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                                                whileHover={{ scale: 1.1, rotate: -5 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                                </svg>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Column 3 */}
                        <motion.div className="flex flex-col gap-20 flex-1 mt-52" variants={containerVariants}>
                            {teamMembers.filter((_, index) => index % 3 === 2).map((member) => (
                                <div
                                    key={member.id}
                                    className="group cursor-pointer transition-all duration-300 hover:scale-105"
                                >
                                    <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl p-6 shadow-2xl group-hover:bg-black/30 transition-all duration-300">
                                        <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-white font-bold text-xl mb-2">{member.name}</h3>
                                        <p className="text-white/70 text-sm">{member.title}</p>

                                        {/* Social Links */}
                                        <div className="flex space-x-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Team Summary Card */}
                            <motion.div
                                className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl p-8 shadow-2xl text-center"
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.h2
                                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    {t('team.cta.title')}
                                    <br />
                                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        {t('team.cta.titleHighlight')}
                                    </span>
                                </motion.h2>
                                <motion.p
                                    className="text-white/70 text-base mb-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                >
                                    {t('team.cta.description')}
                                </motion.p>
                                <motion.button
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full text-base font-medium transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8, duration: 0.5, ease: [0.68, -0.55, 0.265, 1.55] }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {t('team.cta.joinTeam')}
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>


            </div>
            {/* Decorative Elements */}
            <div className="fixed top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="fixed bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>
    )
}

export default Team