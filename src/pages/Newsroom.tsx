import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Newsroom = () => {
    const newsArticles = [
        {
            id: 1,
            title: "ALMUSANID Launches Revolutionary AI-Powered Logistics Platform",
            excerpt: "Our new platform integrates machine learning algorithms to optimize supply chain operations, reducing delivery times by up to 40% and operational costs by 25%.",
            date: "2024-12-15",
            readTime: "5 min read",
            category: "Product Launch",
            image: "/api/placeholder/600/400",
            featured: true
        },
        {
            id: 2,
            title: "Partnership with Leading Regional Retailers Expands E-commerce Reach",
            excerpt: "Strategic partnerships with major retail chains across the Middle East will bring our e-commerce solutions to over 500 new stores in the next quarter.",
            date: "2024-12-10",
            readTime: "3 min read",
            category: "Partnership",
            image: "/api/placeholder/600/400",
            featured: false
        },
        {
            id: 3,
            title: "ALMUSANID Wins 'Innovation in Enterprise Software' Award",
            excerpt: "Recognition for our groundbreaking ERP system that has transformed how businesses manage their operations across multiple industries.",
            date: "2024-12-05",
            readTime: "4 min read",
            category: "Awards",
            image: "/api/placeholder/600/400",
            featured: false
        },
        {
            id: 4,
            title: "New POS System Reduces Transaction Time by 60%",
            excerpt: "Our latest point-of-sale solution features advanced payment processing and inventory management capabilities that streamline retail operations.",
            date: "2024-11-28",
            readTime: "6 min read",
            category: "Product Update",
            image: "/api/placeholder/600/400",
            featured: false
        },
        {
            id: 5,
            title: "Expanding Operations: New Development Center Opens in Dubai",
            excerpt: "Our new 50,000 sq ft facility will house 200+ engineers and designers, accelerating our product development and regional expansion plans.",
            date: "2024-11-20",
            readTime: "4 min read",
            category: "Company News",
            image: "/api/placeholder/600/400",
            featured: false
        },
        {
            id: 6,
            title: "Sustainability Initiative: Carbon-Neutral Operations by 2025",
            excerpt: "ALMUSANID commits to achieving carbon neutrality across all operations through renewable energy adoption and green technology investments.",
            date: "2024-11-15",
            readTime: "7 min read",
            category: "Sustainability",
            image: "/api/placeholder/600/400",
            featured: false
        }
    ]

    const categories = ["All", "Product Launch", "Partnership", "Awards", "Product Update", "Company News", "Sustainability"]

    const getCategoryColor = (category: string) => {
        const colors = {
            "Product Launch": "from-blue-500 to-cyan-500",
            "Partnership": "from-green-500 to-emerald-500",
            "Awards": "from-yellow-500 to-orange-500",
            "Product Update": "from-purple-500 to-pink-500",
            "Company News": "from-indigo-500 to-blue-500",
            "Sustainability": "from-green-600 to-teal-500"
        }
        return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600"
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            NEWS
                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                ROOM
                            </span>
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Stay updated with the latest news, product launches, partnerships, and company milestones from ALMUSANID
                        </motion.p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        {categories.map((category, index) => (
                            <motion.button
                                key={category}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    index === 0 
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Article */}
            <section className="px-4 mb-16">
                <div className="max-w-7xl mx-auto">
                    {newsArticles.filter(article => article.featured).map((article, index) => (
                        <motion.div
                            key={article.id}
                            className="relative overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-200"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <div className="grid lg:grid-cols-2 gap-8 p-8">
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(article.category)}`}>
                                            {article.category}
                                        </span>
                                        <span className="text-gray-500 text-sm">Featured</span>
                                    </div>
                                    
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                        {article.title}
                                    </h2>
                                    
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {article.excerpt}
                                    </p>
                                    
                                    <div className="flex items-center space-x-6 text-gray-500">
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Clock className="w-4 h-4" />
                                            <span className="text-sm">{article.readTime}</span>
                                        </div>
                                    </div>
                                    
                                    <motion.button
                                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span>Read Full Article</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </div>
                                
                                <div className="relative">
                                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 border border-purple-200 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-pink-200/30"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-24 h-24 text-purple-500">
                                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* News Grid */}
            <section className="px-4 pb-20">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-3xl font-bold text-gray-900 mb-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        Latest News
                    </motion.h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsArticles.filter(article => !article.featured).map((article, index) => (
                            <motion.div
                                key={article.id}
                                className="group cursor-pointer"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="bg-white shadow-lg border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-gray-300">
                                    {/* Image */}
                                    <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(article.category)} opacity-10`}></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Tag className="w-12 h-12 text-gray-400" />
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-6 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(article.category)}`}>
                                                {article.category}
                                            </span>
                                            <div className="flex items-center space-x-4 text-gray-500 text-xs">
                                                <div className="flex items-center space-x-1">
                                                    <Calendar className="w-3 h-3" />
                                                    <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Clock className="w-3 h-3" />
                                                    <span>{article.readTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2">
                                            {article.title}
                                        </h3>
                                        
                                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                        
                                        <div className="flex items-center text-purple-600 text-sm font-medium group-hover:text-purple-700 transition-colors duration-200">
                                            <span>Read more</span>
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Newsroom