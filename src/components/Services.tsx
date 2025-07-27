import { Monitor, Smartphone, Cloud, Database, Palette, Cog } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Monitor,
    title: "Web Applications",
    description: "Modern, responsive web apps built with cutting-edge frameworks and technologies.",
    features: ["React & Next.js", "TypeScript", "Progressive Web Apps", "Performance Optimization"],
    color: "hsl(var(--primary))"
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    features: ["React Native", "iOS & Android", "Cross-platform", "App Store Optimization"],
    color: "hsl(var(--innovation-blue))"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and streamlined deployment pipelines.",
    features: ["AWS & Azure", "CI/CD Pipelines", "Containerization", "Auto-scaling"],
    color: "hsl(var(--innovation-purple))"
  },
  {
    icon: Database,
    title: "Backend Systems",
    description: "Robust APIs and database architectures that power your applications.",
    features: ["RESTful APIs", "GraphQL", "Microservices", "Database Design"],
    color: "hsl(var(--innovation-teal))"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that users love and businesses need.",
    features: ["User Research", "Prototyping", "Design Systems", "Accessibility"],
    color: "hsl(var(--innovation-orange))"
  },
  {
    icon: Cog,
    title: "Consulting",
    description: "Strategic technology guidance to help your business make informed decisions.",
    features: ["Tech Stack Planning", "Architecture Review", "Team Training", "Best Practices"],
    color: "hsl(var(--primary))"
  }
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
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

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
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
            Comprehensive
            <span className="text-gradient"> Tech Solutions</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={titleVariants}
            transition={{ delay: 0.2 }}
          >
            From concept to deployment, we offer full-stack development services 
            that bring your digital vision to life with elegance and precision.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                className="innovation-card group"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -15,
                  rotateY: 5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="inline-flex p-4 rounded-2xl mb-6 pulse-glow"
                  style={{ backgroundColor: `${service.color}15`, color: service.color }}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.3, 
                    duration: 0.6, 
                    ease: "backOut" 
                  }}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6, ease: "easeInOut" }
                  }}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                >
                  {service.description}
                </motion.p>
                
                <motion.ul 
                  className="space-y-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: index * 0.1 + 0.6
                      }
                    }
                  }}
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-center text-sm text-foreground/80"
                      variants={featureVariants}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 rounded-full mr-3"
                        style={{ backgroundColor: service.color }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: index * 0.1 + featureIndex * 0.05 + 0.7,
                          duration: 0.3,
                          ease: "backOut"
                        }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )
          })}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p 
            className="text-lg text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Need something custom? We love solving unique challenges.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, ease: "backOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="btn-hero">
              Discuss Your Project
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}