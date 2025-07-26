import { ArrowRight, Heart, Code, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CodeAnimation3D from './CodeAnimation3D'
import TypingCodeBackground from './TypingCodeBackground'
import heroImage from '@/assets/hero-bg.jpg'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Code Background */}
      <TypingCodeBackground />
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-soft/20 via-background to-accent/20" />
      
      {/* 3D Animation Container */}
      <div className="absolute inset-0 z-10">
        <CodeAnimation3D />
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Where Code Meets Heart</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Crafting
            <span className="text-gradient"> Innovation </span>
            with
            <span className="text-gradient"> Passion</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We're a modern programming company that combines cutting-edge technology with creativity and heart. 
            Building elegant, scalable solutions that empower our clients and improve lives.
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-foreground/80">
              <Code className="w-5 h-5 text-primary" />
              <span className="font-medium">Technical Excellence</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <Heart className="w-5 h-5 text-primary" />
              <span className="font-medium">Human-Centered Design</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-medium">Collaborative Spirit</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero group">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary hover:bg-primary/5">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[hsl(var(--innovation-teal))]/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  )
}