import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TextRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export default function TextReveal({ 
  children, 
  delay = 0, 
  duration = 0.8,
  direction = 'up',
  className = ""
}: TextRevealProps) {
  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 }
  }

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        initial={directionVariants[direction]}
        whileInView={{ 
          y: 0, 
          x: 0, 
          opacity: 1 
        }}
        viewport={{ once: true }}
        transition={{ 
          delay, 
          duration, 
          ease: "easeOut" 
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}