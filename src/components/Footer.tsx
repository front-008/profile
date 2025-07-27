import { Heart, Code2, Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    }
  }

  return (
    <footer className="bg-gradient-to-t from-muted/50 to-background border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Brand */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="p-2 rounded-xl bg-gradient-to-br from-primary to-innovation-orange"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, ease: "backOut" }}
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                <Code2 className="w-6 h-6 text-white" />
              </motion.div>
              <motion.span 
                className="text-xl font-bold"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                InnovativeCode
              </motion.span>
            </motion.div>
            <motion.p 
              className="text-muted-foreground text-sm leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Crafting elegant software solutions with passion, creativity, and technical excellence. 
              Where code meets heart.
            </motion.p>
            <motion.div 
              className="flex gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5
                  }
                }
              }}
            >
              <motion.button 
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                variants={socialVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-4 h-4" />
              </motion.button>
              <motion.button 
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                variants={socialVariants}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-4 h-4" />
              </motion.button>
              <motion.button 
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                variants={socialVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-4 h-4" />
              </motion.button>
              <motion.button 
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                variants={socialVariants}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Services */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h4 
              className="font-semibold"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Services
            </motion.h4>
            <motion.ul 
              className="space-y-2 text-sm text-muted-foreground"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'UI/UX Design', 'Consulting'].map((service, index) => (
                <motion.li 
                  key={service}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                  }}
                >
                  <motion.a 
                    href="#" 
                    className="hover:text-primary transition-colors"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          {/* Company */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h4 
              className="font-semibold"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Company
            </motion.h4>
            <motion.ul 
              className="space-y-2 text-sm text-muted-foreground"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {['About Us', 'Our Team', 'Careers', 'Blog', 'Press'].map((item, index) => (
                <motion.li 
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                  }}
                >
                  <motion.a 
                    href="#" 
                    className="hover:text-primary transition-colors"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h4 
              className="font-semibold"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Contact
            </motion.h4>
            <motion.ul 
              className="space-y-2 text-sm text-muted-foreground"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {['hello@innovativecode.com', '+1 (555) 123-4567', 'San Francisco, CA'].map((contact, index) => (
                <motion.li 
                  key={contact}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                  }}
                >
                  {contact}
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                }}
              >
                <motion.a 
                  href="#" 
                  className="hover:text-primary transition-colors"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  Schedule a Call
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            © 2024 InnovativeCode. All rights reserved.
          </motion.p>
          <motion.div 
            className="flex items-center gap-2 text-sm text-muted-foreground"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Heart className="w-4 h-4 text-primary" />
            </motion.div>
            <span>and cutting-edge tech</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}