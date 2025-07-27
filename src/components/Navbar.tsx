import { ChevronDown, ExternalLink, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 p-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl px-6 py-4"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.68, -0.55, 0.265, 1.55] }}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to={"/"} className="flex items-center">
                            <motion.div
                                className="text-white font-bold text-2xl tracking-wider"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                ALMUSANID
                            </motion.div>
                        </Link>

                        {/* Navigation Menu */}
                        <motion.div
                            className="hidden md:flex items-center space-x-8"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6, staggerChildren: 0.1 }}
                        >
                            <div className="relative group">
                                <button className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors duration-200">
                                    <span className="text-sm font-medium">PRODUCTS</span>
                                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                                </button>

                                {/* Products Dropdown */}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[700px] max-w-[calc(100vw-2rem)] min-w-[320px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-4">
                                    <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-xl p-6 shadow-2xl">
                                        <div className="grid grid-cols-2 gap-6">
                                            {/* Logistics Card */}
                                            <div className="relative group/card cursor-pointer">
                                                <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/20 overflow-hidden relative">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
                                                    <div className="absolute top-4 right-4">
                                                        <ExternalLink className="w-4 h-4 text-white/60 group-hover/card:text-white transition-colors" />
                                                    </div>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-16 h-16 relative">
                                                            {/* Logistics/Truck Icon */}
                                                            <svg className="w-full h-full text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="absolute bottom-4 left-4">
                                                        <h3 className="text-white font-bold text-lg">LOGISTICS</h3>
                                                        <p className="text-white/70 text-sm mt-1">Supply chain management</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ERP Card */}
                                            <div className="relative group/card cursor-pointer">
                                                <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-green-900/50 to-emerald-900/50 border border-green-500/20 overflow-hidden relative">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20"></div>
                                                    <div className="absolute top-4 right-4">
                                                        <ExternalLink className="w-4 h-4 text-white/60 group-hover/card:text-white transition-colors" />
                                                    </div>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-16 h-16 relative">
                                                            {/* ERP/Settings Icon */}
                                                            <svg className="w-full h-full text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="absolute bottom-4 left-4">
                                                        <h3 className="text-white font-bold text-lg">ERP</h3>
                                                        <p className="text-white/70 text-sm mt-1">Enterprise resource planning</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* E-commerce Card */}
                                            <div className="relative group/card cursor-pointer">
                                                <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-orange-900/50 to-red-900/50 border border-orange-500/20 overflow-hidden relative">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20"></div>
                                                    <div className="absolute top-4 right-4">
                                                        <ExternalLink className="w-4 h-4 text-white/60 group-hover/card:text-white transition-colors" />
                                                    </div>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-16 h-16 relative">
                                                            {/* E-commerce/Shopping Cart Icon */}
                                                            <svg className="w-full h-full text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="absolute bottom-4 left-4">
                                                        <h3 className="text-white font-bold text-lg">E-COMMERCE</h3>
                                                        <p className="text-white/70 text-sm mt-1">Online retail platform</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* POS Card */}
                                            <div className="relative group/card cursor-pointer">
                                                <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/20 overflow-hidden relative">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
                                                    <div className="absolute top-4 right-4">
                                                        <ExternalLink className="w-4 h-4 text-white/60 group-hover/card:text-white transition-colors" />
                                                    </div>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-16 h-16 relative">
                                                            {/* POS/Credit Card Icon */}
                                                            <svg className="w-full h-full text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="absolute bottom-4 left-4">
                                                        <h3 className="text-white font-bold text-lg">POS</h3>
                                                        <p className="text-white/70 text-sm mt-1">Point of sale system</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <button className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors duration-200">
                                    <span className="text-sm font-medium">COMPANY</span>
                                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                                </button>

                                {/* Company Dropdown */}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] max-w-[calc(100vw-2rem)] min-w-[320px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-4">
                                    <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-xl p-6 shadow-2xl">
                                        <div className="grid grid-cols-3 gap-6">
                                            {/* Our Story Card */}
                                            <Link to="/our-story" className="relative group/card cursor-pointer">
                                                <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/20 overflow-hidden relative">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                                                    <div className="absolute top-4 right-4">
                                                        <ExternalLink className="w-4 h-4 text-white/60 group-hover/card:text-white transition-colors" />
                                                    </div>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-16 h-16 relative">
                                                            {/* DNA Helix Icon */}
                                                            <svg className="w-full h-full text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v-.07zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="absolute bottom-4 left-4">
                                                        <h3 className="text-white font-bold text-lg">OUR STORY</h3>
                                                    </div>
                                                </div>
                                            </Link>

                                            {/* Team Card */}
                                            <Link to="/team" className="relative group/card cursor-pointer">
                                                <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/20 overflow-hidden relative">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
                                                    <div className="absolute top-4 right-4">
                                                        <ExternalLink className="w-4 h-4 text-white/60 group-hover/card:text-white transition-colors" />
                                                    </div>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-16 h-16 relative">
                                                            {/* Hand/Team Icon */}
                                                            <svg className="w-full h-full text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5S12 9.67 12 10.5V11h2.5c.83 0 1.5.67 1.5 1.5V18h2v-6.5c0-1.38-1.12-2.5-2.5-2.5H13V9.5c0-1.38-1.12-2.5-2.5-2.5S8 8.12 8 9.5V18H4z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="absolute bottom-4 left-4">
                                                        <h3 className="text-white font-bold text-lg">TEAM</h3>
                                                    </div>
                                                </div>
                                            </Link>

                                            {/* Careers Card */}
                                            <Link to="/jobs" className="relative group/card cursor-pointer">
                                                <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-pink-900/50 to-purple-900/50 border border-pink-500/20 overflow-hidden relative">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20"></div>
                                                    <div className="absolute top-4 right-4">
                                                        <ExternalLink className="w-4 h-4 text-white/60 group-hover/card:text-white transition-colors" />
                                                    </div>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-16 h-16 relative">
                                                            {/* Brain Icon */}
                                                            <svg className="w-full h-full text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M21.33 12.91c.09-.09.15-.2.15-.33 0-.09-.03-.17-.08-.24-.01-.02-.01-.04-.02-.06-.05-.14-.13-.26-.24-.37-.01-.01-.03-.02-.04-.03-.11-.1-.24-.18-.38-.22-.01 0-.03-.01-.04-.01-.15-.04-.31-.04-.46 0-.01 0-.03.01-.04.01-.14.04-.27.12-.38.22-.01.01-.03.02-.04.03-.11.11-.19.23-.24.37-.01.02-.01.04-.02.06-.05.07-.08.15-.08.24 0 .13.06.24.15.33.09.09.2.15.33.15s.24-.06.33-.15zm-1.33-4.91c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-4-3c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="absolute bottom-4 left-4">
                                                        <h3 className="text-white font-bold text-lg">JOBS</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <Link to="/newsroom" className="text-white/90 hover:text-white transition-colors duration-200">
                                    <span className="text-sm font-medium">NEWSROOM</span>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right side - Language and CTA */}
                        <motion.div
                            className="flex items-center space-x-4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <motion.div
                                className="hidden lg:flex items-center space-x-2 text-white/70 text-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 1 }}
                            >
                                <span>EN</span>
                                <span className="text-white/30">|</span>
                                <span>عربي</span>
                            </motion.div>

                            <motion.button
                                className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 1.2, ease: [0.68, -0.55, 0.265, 1.55] }}
                            >
                                Get in touch
                            </motion.button>
                        </motion.div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <motion.button
                                className="text-white/90 hover:text-white p-2"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden fixed left-4 right-4 top-20 z-40"
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl p-6 shadow-2xl">
                            <div className="space-y-6">
                                {/* Products Section */}
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-4">PRODUCTS</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/20 rounded-lg p-3">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                                                </svg>
                                                <ExternalLink className="w-3 h-3 text-white/60" />
                                            </div>
                                            <h4 className="text-white font-medium text-sm">LOGISTICS</h4>
                                            <p className="text-white/60 text-xs mt-1">Supply chain</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/20 rounded-lg p-3">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
                                                </svg>
                                                <ExternalLink className="w-3 h-3 text-white/60" />
                                            </div>
                                            <h4 className="text-white font-medium text-sm">ERP</h4>
                                            <p className="text-white/60 text-xs mt-1">Enterprise planning</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/20 rounded-lg p-3">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                                </svg>
                                                <ExternalLink className="w-3 h-3 text-white/60" />
                                            </div>
                                            <h4 className="text-white font-medium text-sm">E-COMMERCE</h4>
                                            <p className="text-white/60 text-xs mt-1">Online retail</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-lg p-3">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                                                </svg>
                                                <ExternalLink className="w-3 h-3 text-white/60" />
                                            </div>
                                            <h4 className="text-white font-medium text-sm">POS</h4>
                                            <p className="text-white/60 text-xs mt-1">Point of sale</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Company Section */}
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-4">COMPANY</h3>
                                    <div className="grid grid-cols-3 gap-3">
                                        <Link to="/our-story" className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/20 rounded-lg p-3 text-center">
                                            <svg className="w-6 h-6 text-purple-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v-.07zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                            </svg>
                                            <h4 className="text-white font-medium text-xs">OUR STORY</h4>
                                        </Link>

                                        <Link to="/team" className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20 rounded-lg p-3 text-center">
                                            <svg className="w-6 h-6 text-indigo-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5S12 9.67 12 10.5V11h2.5c.83 0 1.5.67 1.5 1.5V18h2v-6.5c0-1.38-1.12-2.5-2.5-2.5H13V9.5c0-1.38-1.12-2.5-2.5-2.5S8 8.12 8 9.5V18H4z" />
                                            </svg>
                                            <h4 className="text-white font-medium text-xs">TEAM</h4>
                                        </Link>

                                        <Link to="/jobs" className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 border border-pink-500/20 rounded-lg p-3 text-center">
                                            <svg className="w-6 h-6 text-pink-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M21.33 12.91c.09-.09.15-.2.15-.33 0-.09-.03-.17-.08-.24-.01-.02-.01-.04-.02-.06-.05-.14-.13-.26-.24-.37-.01-.01-.03-.02-.04-.03-.11-.1-.24-.18-.38-.22-.01 0-.03-.01-.04-.01-.15-.04-.31-.04-.46 0-.01 0-.03.01-.04.01-.14.04-.27.12-.38.22-.01.01-.03.02-.04.03-.11.11-.19.23-.24.37-.01.02-.01.04-.02.06-.05.07-.08.15-.08.24 0 .13.06.24.15.33.09.09.2.15.33.15s.24-.06.33-.15zm-1.33-4.91c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-4-3c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" />
                                            </svg>
                                            <h4 className="text-white font-medium text-xs">JOBS</h4>
                                        </Link>
                                    </div>
                                </div>

                                {/* Newsroom */}
                                <div>
                                    <Link to="/newsroom" className="text-white font-bold text-lg">NEWSROOM</Link>
                                </div>

                                {/* Language and CTA */}
                                <div className="border-t border-white/10 pt-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2 text-white/70 text-sm">
                                            <span>EN</span>
                                            <span className="text-white/30">|</span>
                                            <span>عربي</span>
                                        </div>
                                        <motion.button
                                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Get in touch
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar