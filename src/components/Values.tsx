import { Heart, Zap, Users, Target, Lightbulb, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [
  {
    icon: Heart,
    title: "Human-Centered Approach",
    description: "Every line of code we write serves a human purpose. We believe technology should enhance lives, not complicate them.",
    color: "hsl(var(--primary))"
  },
  {
    icon: Zap,
    title: "Technical Excellence",
    description: "Cutting-edge technologies, best practices, and continuous learning drive our pursuit of exceptional software solutions.",
    color: "hsl(var(--innovation-blue))"
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "We work as partners with our clients, fostering open communication and shared ownership of project success.",
    color: "hsl(var(--innovation-purple))"
  },
  {
    icon: Target,
    title: "User-First Design",
    description: "Intuitive interfaces and seamless experiences are at the core of everything we build. Your users are our priority.",
    color: "hsl(var(--innovation-teal))"
  },
  {
    icon: Lightbulb,
    title: "Creative Innovation",
    description: "We think outside the box, bringing fresh perspectives and innovative solutions to complex challenges.",
    color: "hsl(var(--innovation-orange))"
  },
  {
    icon: Shield,
    title: "Scalable & Reliable",
    description: "Building for today and tomorrow. Our solutions grow with your business and stand the test of time.",
    color: "hsl(var(--primary))"
  }
]

export default function Values() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
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
            What Makes Us
            <span className="text-gradient"> Different</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={titleVariants}
            transition={{ delay: 0.2 }}
          >
            Our values aren't just words on a wall. They're the principles that guide every decision, 
            every line of code, and every client interaction.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                className="innovation-card group"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="inline-flex p-3 rounded-xl mb-4 pulse-glow"
                  style={{ backgroundColor: `${value.color}20`, color: value.color }}
                  variants={iconVariants}
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.6, ease: "easeInOut" }
                  }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  {value.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                >
                  {value.description}
                </motion.p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}