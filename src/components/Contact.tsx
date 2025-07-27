import { ArrowRight, Mail, MessageSquare, Calendar, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Drop us a line anytime",
    contact: "hello@innovativecode.com",
    color: "hsl(var(--primary))"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Let's talk about your project",
    contact: "+1 (555) 123-4567",
    color: "hsl(var(--innovation-blue))"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Quick questions? Chat with us",
    contact: "Available 9 AM - 6 PM EST",
    color: "hsl(var(--innovation-purple))"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our creative workspace",
    contact: "San Francisco, CA",
    color: "hsl(var(--innovation-teal))"
  }
]

export default function Contact() {
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

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const contactMethodVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-accent/10 to-background">
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
            Let's Build Something
            <span className="text-gradient"> Amazing Together</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={titleVariants}
            transition={{ delay: 0.2 }}
          >
            Ready to transform your ideas into reality? We'd love to hear about your project 
            and explore how we can help bring your vision to life.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={formVariants}
          >
            <motion.div
              variants={itemVariants}
            >
              <motion.h3 
                className="text-2xl font-semibold mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Tell Us About Your Project
              </motion.h3>
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Fill out the form below and we'll get back to you within 24 hours.
              </motion.p>
            </motion.div>
            
            <motion.form 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={itemVariants}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="John" className="w-full" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Doe" className="w-full" />
                </motion.div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <motion.label 
                  className="block text-sm font-medium mb-2"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  Email
                </motion.label>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Input type="email" placeholder="john@company.com" className="w-full" />
                </motion.div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <motion.label 
                  className="block text-sm font-medium mb-2"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  Company (Optional)
                </motion.label>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Input placeholder="Your Company" className="w-full" />
                </motion.div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <motion.label 
                  className="block text-sm font-medium mb-2"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  Project Budget
                </motion.label>
                <motion.select 
                  className="w-full p-3 border border-input rounded-md bg-background"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <option>$10k - $25k</option>
                  <option>$25k - $50k</option>
                  <option>$50k - $100k</option>
                  <option>$100k+</option>
                </motion.select>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <motion.label 
                  className="block text-sm font-medium mb-2"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  Tell us about your project
                </motion.label>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Textarea 
                    placeholder="Describe your project, goals, and any specific requirements..."
                    className="w-full min-h-[120px]"
                  />
                </motion.div>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="btn-hero w-full group">
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
          
          {/* Contact Methods */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={contactMethodVariants}
          >
            <motion.div
              variants={itemVariants}
            >
              <motion.h3 
                className="text-2xl font-semibold mb-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Get In Touch
              </motion.h3>
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Choose the method that works best for you. We're here to help!
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.div
                    key={index}
                    className="innovation-card group cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="p-3 rounded-xl pulse-glow"
                        style={{ backgroundColor: `${method.color}15`, color: method.color }}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: index * 0.1 + 0.2, 
                          duration: 0.5, 
                          ease: "backOut" 
                        }}
                        whileHover={{ 
                          rotate: 360,
                          transition: { duration: 0.6 }
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.h4 
                          className="font-semibold mb-1 group-hover:text-primary transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                        >
                          {method.title}
                        </motion.h4>
                        <motion.p 
                          className="text-sm text-muted-foreground mb-2"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
                        >
                          {method.description}
                        </motion.p>
                        <motion.p 
                          className="text-sm font-medium" 
                          style={{ color: method.color }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                        >
                          {method.contact}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
            
            <motion.div 
              className="innovation-card bg-gradient-to-br from-primary/5 to-accent/5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6, ease: "backOut" }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="flex items-center gap-4 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.5, ease: "backOut" }}
                >
                  <Calendar className="w-6 h-6 text-primary" />
                </motion.div>
                <h4 className="font-semibold">Schedule a Free Consultation</h4>
              </motion.div>
              <motion.p 
                className="text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                Book a 30-minute call to discuss your project requirements and get expert advice.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="outline" className="w-full border-primary/30 hover:border-primary hover:bg-primary/5">
                  Book Free Call
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}