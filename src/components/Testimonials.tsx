import { Star, Quote } from 'lucide-react'
import { useState } from 'react'
import { motion, Variants } from 'framer-motion'

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CTO",
        company: "TechFlow Solutions",
        content: "Working with this team transformed our entire digital infrastructure. Their technical expertise and attention to detail exceeded our expectations.",
        rating: 5,
        avatar: "SC"
    },
    {
        name: "Marcus Rodriguez",
        role: "Founder & CEO",
        company: "InnovateLab",
        content: "The user experience they crafted for our platform is phenomenal. Our customer engagement increased by 300% after the redesign.",
        rating: 5,
        avatar: "MR"
    },
    {
        name: "Emily Watson",
        role: "Product Manager",
        company: "DataVision Corp",
        content: "Their collaborative approach made all the difference. They helped us discover what we actually needed.",
        rating: 5,
        avatar: "EW"
    },
    {
        name: "David Kim",
        role: "VP of Engineering",
        company: "CloudSync Technologies",
        content: "Exceptional code quality and architecture. Six months later, our system is still running flawlessly with zero downtime.",
        rating: 5,
        avatar: "DK"
    },
    {
        name: "Lisa Thompson",
        role: "Digital Director",
        company: "RetailNext",
        content: "They delivered our e-commerce platform ahead of schedule and under budget. Performance improvements were immediate.",
        rating: 5,
        avatar: "LT"
    },
    {
        name: "Alex Johnson",
        role: "Startup Founder",
        company: "GreenTech Innovations",
        content: "As a non-technical founder, I was worried about the development process. They made everything transparent and easy to understand.",
        rating: 5,
        avatar: "AJ"
    },
    {
        name: "Rachel Park",
        role: "Head of Design",
        company: "CreativeFlow",
        content: "The design system they created is both beautiful and functional. Our design team productivity increased significantly.",
        rating: 5,
        avatar: "RP"
    },
    {
        name: "Tom Wilson",
        role: "CTO",
        company: "FinanceHub",
        content: "Security and compliance were handled flawlessly. They understood our regulatory requirements from day one.",
        rating: 5,
        avatar: "TW"
    },
    {
        name: "Maria Garcia",
        role: "Product Owner",
        company: "EduTech Pro",
        content: "The mobile app they built has over 4.8 stars in app stores. User retention improved by 150%.",
        rating: 5,
        avatar: "MG"
    },
    {
        name: "James Lee",
        role: "Founder",
        company: "HealthTech Solutions",
        content: "They delivered a HIPAA-compliant platform that scales beautifully. Our users love the intuitive interface.",
        rating: 5,
        avatar: "JL"
    },
    {
        name: "Anna Schmidt",
        role: "VP Product",
        company: "LogisticsPro",
        content: "The real-time tracking system they built handles millions of events daily without any performance issues.",
        rating: 5,
        avatar: "AS"
    },
    {
        name: "Chris Brown",
        role: "Tech Lead",
        company: "MediaStream",
        content: "Their microservices architecture reduced our deployment time from hours to minutes. Incredible work.",
        rating: 5,
        avatar: "CB"
    }
]

// Split testimonials into columns
const column1 = testimonials.slice(0, 4)
const column2 = testimonials.slice(4, 8)
const column3 = testimonials.slice(8, 12)
const sideColumns = testimonials.slice(0, 6) // For blurred side columns

const TestimonialCard = ({ testimonial, className = "", onHover, isHovered = false }: {
    testimonial: typeof testimonials[0],
    className?: string,
    onHover?: (isHovered: boolean) => void,
    isHovered?: boolean
}) => (
    <motion.div
        className={`innovation-card mb-6 relative transition-all duration-300 ${className} ${isHovered ? 'shadow-2xl z-30' : ''
            }`}
        onMouseEnter={() => onHover?.(true)}
        onMouseLeave={() => onHover?.(false)}
        style={isHovered ? {
            background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
            backgroundSize: '400% 400%',
            animation: 'gradient-move 8s ease infinite'
        } : {}}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        whileHover={{
            scale: 1.02,
            y: -5,
            transition: { duration: 0.2 }
        }}
    >
        <motion.div
            className={`absolute top-4 right-4 ${isHovered ? 'text-white/30' : 'text-primary/20'}`}
            initial={{ opacity: 0, rotate: -45, scale: 0 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
        >
            <Quote className="w-6 h-6" />
        </motion.div>

        <motion.div
            className="flex items-center gap-1 mb-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
        >
            {[...Array(testimonial.rating)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                        delay: 0.4 + i * 0.1,
                        duration: 0.3,
                        ease: [0.68, -0.55, 0.265, 1.55]
                    }}
                >
                    <Star className={`w-3 h-3 ${isHovered ? 'fill-white text-white' : 'fill-yellow-400 text-yellow-400'
                        }`} />
                </motion.div>
            ))}
        </motion.div>

        <motion.p
            className={`leading-relaxed mb-4 text-sm relative z-10 ${isHovered ? 'text-white font-medium' : 'text-muted-foreground'}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
        >
            "{testimonial.content}"
        </motion.p>

        <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
        >
            <motion.div
                className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-semibold text-xs"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, duration: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
                whileHover={{ scale: 1.1, rotate: 5 }}
            >
                {testimonial.avatar}
            </motion.div>
            <div>
                <motion.h4
                    className={`font-semibold text-sm ${isHovered ? 'text-white' : 'text-foreground'}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                >
                    {testimonial.name}
                </motion.h4>
                <motion.p
                    className={`text-xs ${isHovered ? 'text-white/90' : 'text-muted-foreground'}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                >
                    {testimonial.role}
                </motion.p>
                <motion.p
                    className={`text-xs ${isHovered ? 'text-white/80' : 'text-muted-foreground/80'}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.3 }}
                >
                    {testimonial.company}
                </motion.p>
            </div>
        </motion.div>
    </motion.div>
)

const MarqueeColumn = ({ testimonials: columnTestimonials, direction = "up", speed = "20s", onCardHover }: {
    testimonials: typeof testimonials,
    direction?: "up" | "down",
    speed?: string,
    onCardHover?: (isHovered: boolean) => void
}) => {
    const [isPaused, setIsPaused] = useState(false)
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)

    const handleCardHover = (isHovered: boolean, cardId?: string) => {
        setIsPaused(isHovered)
        setHoveredCard(isHovered ? cardId || null : null)
        onCardHover?.(isHovered)
    }

    return (
        <div className="h-full overflow-hidden relative">
            <div
                className={`flex flex-col animate-marquee-${direction}`}
                style={{
                    animationDuration: speed,
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'linear',
                    animationPlayState: isPaused ? 'paused' : 'running'
                }}
            >
                {/* First set */}
                {columnTestimonials.map((testimonial, index) => {
                    const cardId = `first-${index}`
                    return (
                        <TestimonialCard
                            key={cardId}
                            testimonial={testimonial}
                            onHover={(isHovered) => handleCardHover(isHovered, cardId)}
                            isHovered={hoveredCard === cardId}
                        />
                    )
                })}
                {/* Duplicate for seamless loop */}
                {columnTestimonials.map((testimonial, index) => {
                    const cardId = `second-${index}`
                    return (
                        <TestimonialCard
                            key={cardId}
                            testimonial={testimonial}
                            onHover={(isHovered) => handleCardHover(isHovered, cardId)}
                            isHovered={hoveredCard === cardId}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default function Testimonials() {
    const [isAnyCardHovered, setIsAnyCardHovered] = useState(false)

    const handleGlobalCardHover = (isHovered: boolean) => {
        setIsAnyCardHovered(isHovered)
    }

    const titleVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    }

    return (
        <>
            <style>{`
                @keyframes marquee-up {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                @keyframes marquee-down {
                    0% { transform: translateY(-50%); }
                    100% { transform: translateY(0); }
                }
                @keyframes marquee-up-slow {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                @keyframes marquee-down-slow {
                    0% { transform: translateY(-50%); }
                    100% { transform: translateY(0); }
                }
                @keyframes gradient-move {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-marquee-up {
                    animation: marquee-up linear infinite;
                }
                .animate-marquee-down {
                    animation: marquee-down linear infinite;
                }

            `}</style>

            <section className="min-h-screen h-[150vh] bg-gradient-to-b from-muted/30 to-background overflow-hidden flex flex-col">
                <div className="container mx-auto px-6 flex flex-col h-full">
                    <motion.div
                        className="text-center py-12 flex-shrink-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={titleVariants}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-6"
                            variants={titleVariants}
                        >
                            What Our
                            <span className="text-gradient"> Clients Say</span>
                        </motion.h2>
                        <motion.p
                            className="text-xl text-muted-foreground max-w-3xl mx-auto"
                            variants={titleVariants}
                            transition={{ delay: 0.2 }}
                        >
                            Don't just take our word for it. Here's what industry leaders and innovative companies
                            have to say about working with us.
                        </motion.p>
                    </motion.div>

                    <div className="relative w-full flex-1">


                        {/* Main container with 5 columns */}
                        <div className="flex justify-center items-start gap-6 relative h-full">
                            {/* Left blurred column */}
                            <div className="w-80 opacity-30 blur-sm scale-95 hidden xl:block h-full">
                                <MarqueeColumn testimonials={sideColumns} direction="down" speed="25s" onCardHover={handleGlobalCardHover} />
                            </div>

                            {/* Left semi-blurred column */}
                            <div className="w-80 opacity-60 blur-[1px] scale-98 hidden lg:block h-full">
                                <MarqueeColumn testimonials={sideColumns.slice(2)} direction="up" speed="22s" onCardHover={handleGlobalCardHover} />
                            </div>

                            {/* Center main columns */}
                            <div className="flex gap-6 z-10 h-full">
                                <div className="w-80 h-full">
                                    <MarqueeColumn testimonials={column1} direction="up" speed="20s" onCardHover={handleGlobalCardHover} />
                                </div>
                                <div className="w-80 h-full">
                                    <MarqueeColumn testimonials={column2} direction="down" speed="18s" onCardHover={handleGlobalCardHover} />
                                </div>
                                <div className="w-80 h-full">
                                    <MarqueeColumn testimonials={column3} direction="up" speed="22s" onCardHover={handleGlobalCardHover} />
                                </div>
                            </div>

                            {/* Right semi-blurred column */}
                            <div className="w-80 opacity-60 blur-[1px] scale-98 hidden lg:block h-full">
                                <MarqueeColumn testimonials={sideColumns.slice(1)} direction="down" speed="24s" onCardHover={handleGlobalCardHover} />
                            </div>

                            {/* Right blurred column */}
                            <div className="w-80 opacity-30 blur-sm scale-95 hidden xl:block h-full">
                                <MarqueeColumn testimonials={sideColumns.slice(3)} direction="up" speed="26s" onCardHover={handleGlobalCardHover} />
                            </div>
                        </div>

                        {/* Gradient overlays for fade effect */}
                        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none"></div>
                    </div>

                    <motion.div
                        className="text-center py-8 flex-shrink-0"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <motion.p
                            className="text-muted-foreground"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Join <motion.span
                                className="font-semibold text-primary"
                                initial={{ scale: 0.8 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
                            >
                                200+
                            </motion.span> satisfied clients who trust us with their digital transformation
                        </motion.p>
                    </motion.div>
                </div>
            </section>
        </>
    )
}