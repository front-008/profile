import { ArrowRight, Heart, Code, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CodeAnimation3D from './CodeAnimation3D'
import TypingCodeBackground from './TypingCodeBackground'
import heroImage from '@/assets/hero-bg.jpg'
import { useRef, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const rect = heroRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100

      heroRef.current.style.setProperty('--clip-x', `${x}%`)
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove)

      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants: Variants = {
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

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.68, -0.55, 0.265, 1.55]
      }
    }
  }

  const titleVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const featureVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <motion.section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ '--clip-x': '50%' } as React.CSSProperties}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Code Background */}
      <TypingCodeBackground />

      {/* Background with Clip Path Effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Base grayscale image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat saturate-0 brightness-75 contrast-150"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        {/* Colored overlay with clip path */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            clipPath: 'polygon(0 0, var(--clip-x, 50%) 0, var(--clip-x, 50%) 100%, 0 100%)',
            transition: 'clip-path 0.1s ease-out'
          }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-soft/20 via-background to-accent/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* 3D Animation Container */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <CodeAnimation3D />
      </motion.div>

      {/* Content with Clip Path Effect */}
      <motion.div
        className="relative z-20 container mx-auto px-6 text-center"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto relative">
          {/* Base grayscale content */}
          <div className="relative">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8"
              variants={badgeVariants}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
              >
                <Heart className="w-4 h-4 text-primary opacity-50" />
              </motion.div>
              <span className="text-sm font-medium text-primary opacity-50">Where Code Meets Heart</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              <motion.span variants={wordVariants}>Crafting</motion.span>
              <motion.span className="text-gray-300" variants={wordVariants}> Innovation </motion.span>
              <motion.span variants={wordVariants}>with</motion.span>
              <motion.span className="text-gray-300" variants={wordVariants}> Passion</motion.span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              We're a modern programming company that combines cutting-edge technology with creativity and heart.
              Building elegant, scalable solutions that empower our clients and improve lives.
            </motion.p>

            {/* Features */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-12"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.8
                  }
                }
              }}
            >
              <motion.div className="flex items-center gap-2 text-white" variants={featureVariants}>
                <Code className="w-5 h-5 text-primary opacity-50" />
                <span className="font-medium">Technical Excellence</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-white" variants={featureVariants}>
                <Heart className="w-5 h-5 text-primary opacity-50" />
                <span className="font-medium">Human-Centered Design</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-white" variants={featureVariants}>
                <Users className="w-5 h-5 text-primary opacity-50" />
                <span className="font-medium">Collaborative Spirit</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Colored content overlay with clip path */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(0 0, var(--clip-x, 50%) 0, var(--clip-x, 50%) 100%, 0 100%)',
              transition: 'clip-path 0.1s ease-out'
            }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8"
              variants={badgeVariants}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
              >
                <Heart className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-primary">Where Code Meets Heart</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              <motion.span variants={wordVariants}>Crafting</motion.span>
              <motion.span className="text-gradient" variants={wordVariants}> Innovation </motion.span>
              <motion.span variants={wordVariants}>with</motion.span>
              <motion.span className="text-gradient" variants={wordVariants}> Passion</motion.span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              We're a modern programming company that combines cutting-edge technology with creativity and heart.
              Building elegant, scalable solutions that empower our clients and improve lives.
            </motion.p>

            {/* Features */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-12"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.8
                  }
                }
              }}
            >
              <motion.div className="flex items-center gap-2 text-foreground/80" variants={featureVariants}>
                <Code className="w-5 h-5 text-primary" />
                <span className="font-medium">Technical Excellence</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-foreground/80" variants={featureVariants}>
                <Heart className="w-5 h-5 text-primary" />
                <span className="font-medium">Human-Centered Design</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-foreground/80" variants={featureVariants}>
                <Users className="w-5 h-5 text-primary" />
                <span className="font-medium">Collaborative Spirit</span>
              </motion.div>
            </motion.div>
          </div>

          {/* CTA Buttons - Always on top and clickable */}
          <motion.div
            className="relative z-30 flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 1.2
                }
              }
            }}
          >
            <motion.div
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="btn-hero group">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary hover:bg-primary/5">
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        animate={{
          y: [-10, 10, -10],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1]
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-2xl"
        animate={{
          y: [-15, 15, -15],
          rotate: [2, -2, 2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-[hsl(var(--innovation-teal))]/20 rounded-full blur-xl"
        animate={{
          y: [-8, 12, -8],
          rotate: [-1, 3, -1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          delay: 2
        }}
      />
    </motion.section>
  )
}