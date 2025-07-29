/**
 * Test component to verify RTL-aware animations are working correctly
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useRTLAnimations } from '@/hooks/useRTLAnimations';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Code, Users } from 'lucide-react';

const RTLAnimationTest: React.FC = () => {
  const { 
    slideVariants,
    slideInLeftVariants,
    slideInRightVariants,
    staggerContainerVariants,
    cardHoverVariants,
    iconVariants,
    textRevealVariants,
    floatingAnimation,
    buttonHoverAnimation,
    arrowAnimation,
    isRTL
  } = useRTLAnimations();
  
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        {/* Language Toggle */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">RTL Animation Test</h1>
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={() => switchLanguage('en')}
              variant={language === 'en' ? 'default' : 'outline'}
            >
              English
            </Button>
            <Button 
              onClick={() => switchLanguage('ar')}
              variant={language === 'ar' ? 'default' : 'outline'}
            >
              عربي
            </Button>
          </div>
          <p className="mt-4 text-muted-foreground">
            Current: {language} | RTL: {isRTL ? 'Yes' : 'No'}
          </p>
        </div>

        {/* Slide Animations */}
        <motion.section 
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainerVariants}
        >
          <h2 className="text-2xl font-bold mb-6">Slide Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="p-6 bg-card rounded-lg border"
              variants={slideVariants}
            >
              <h3 className="font-semibold mb-2">Basic Slide</h3>
              <p className="text-sm text-muted-foreground">
                Slides from reading direction
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-card rounded-lg border"
              variants={slideInLeftVariants}
            >
              <h3 className="font-semibold mb-2">Slide In Left</h3>
              <p className="text-sm text-muted-foreground">
                Adapts to RTL direction
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-card rounded-lg border"
              variants={slideInRightVariants}
            >
              <h3 className="font-semibold mb-2">Slide In Right</h3>
              <p className="text-sm text-muted-foreground">
                Adapts to RTL direction
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Interactive Elements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Interactive Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="p-6 bg-card rounded-lg border cursor-pointer"
              whileHover={cardHoverVariants}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="inline-flex p-3 rounded-xl mb-4 bg-primary/10"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
              >
                <Heart className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="font-semibold mb-2">Hover Card</h3>
              <p className="text-sm text-muted-foreground">
                RTL-aware hover effects
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-card rounded-lg border"
              initial="hidden"
              animate="visible"
              variants={textRevealVariants}
            >
              <motion.div 
                className="inline-flex p-3 rounded-xl mb-4 bg-secondary/10"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
              >
                <Code className="w-6 h-6 text-secondary" />
              </motion.div>
              <h3 className="font-semibold mb-2">Text Reveal</h3>
              <p className="text-sm text-muted-foreground">
                Text slides from reading direction
              </p>
            </motion.div>
          </div>
        </section>

        {/* Button Animations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Button Animations</h2>
          <div className="flex flex-wrap gap-4">
            <motion.div
              whileHover={buttonHoverAnimation}
              whileTap={{ scale: 0.95 }}
            >
              <Button className={`group ${isRTL ? 'flex-row-reverse' : ''}`}>
                Get Started
                <motion.div
                  className={isRTL ? 'mr-2' : 'ml-2'}
                  whileHover={arrowAnimation}
                >
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isRTL ? 'rotate-180' : ''
                  }`} />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div
              whileHover={buttonHoverAnimation}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline">
                Learn More
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Floating Elements */}
        <section className="mb-12 relative h-32">
          <h2 className="text-2xl font-bold mb-6">Floating Elements</h2>
          <motion.div
            className={`absolute w-16 h-16 bg-primary/20 rounded-full blur-sm ${
              isRTL ? 'right-0' : 'left-0'
            }`}
            animate={floatingAnimation}
          />
          <motion.div
            className={`absolute w-12 h-12 bg-secondary/20 rounded-full blur-sm ${
              isRTL ? 'left-20' : 'right-20'
            }`}
            animate={{
              y: [-8, 12, -8],
              rotate: isRTL ? [2, -2, 2] : [-2, 2, -2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
              delay: 1
            }}
          />
        </section>

        {/* Feature List */}
        <motion.section 
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainerVariants}
        >
          <h2 className="text-2xl font-bold mb-6">Feature List</h2>
          <div className="space-y-4">
            {[
              { icon: Heart, text: "Human-Centered Design" },
              { icon: Code, text: "Technical Excellence" },
              { icon: Users, text: "Collaborative Spirit" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-4 p-4 bg-card rounded-lg border"
                variants={textRevealVariants}
              >
                <motion.div 
                  className="p-2 rounded-lg bg-primary/10"
                  variants={iconVariants}
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <span className="font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default RTLAnimationTest;