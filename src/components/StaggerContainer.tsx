import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useRTLAnimations } from '@/hooks/useRTLAnimations'

interface StaggerContainerProps {
  children: ReactNode
  staggerDelay?: number
  initialDelay?: number
  className?: string
}

export default function StaggerContainer({ 
  children, 
  staggerDelay = 0.1, 
  initialDelay = 0,
  className = ""
}: StaggerContainerProps) {
  const { isRTL } = useRTLAnimations();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
        staggerDirection: isRTL ? -1 : 1, // Reverse stagger direction for RTL
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      x: isRTL ? 20 : -20, // Add horizontal movement based on reading direction
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] // Use more sophisticated easing
      }
    }
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={itemVariants}>{children}</motion.div>
      }
    </motion.div>
  )
}