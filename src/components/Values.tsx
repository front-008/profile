import { Heart, Zap, Users, Target, Lightbulb, Shield } from 'lucide-react'

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
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Makes Us
            <span className="text-gradient"> Different</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our values aren't just words on a wall. They're the principles that guide every decision, 
            every line of code, and every client interaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="innovation-card group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className="inline-flex p-3 rounded-xl mb-4 pulse-glow"
                  style={{ backgroundColor: `${value.color}20`, color: value.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}