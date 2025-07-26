import { Monitor, Smartphone, Cloud, Database, Palette, Cog } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive
            <span className="text-gradient"> Tech Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we offer full-stack development services 
            that bring your digital vision to life with elegance and precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="innovation-card group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div 
                  className="inline-flex p-4 rounded-2xl mb-6 pulse-glow"
                  style={{ backgroundColor: `${service.color}15`, color: service.color }}
                >
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground/80">
                      <div 
                        className="w-1.5 h-1.5 rounded-full mr-3"
                        style={{ backgroundColor: service.color }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Need something custom? We love solving unique challenges.
          </p>
          <Button className="btn-hero">
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  )
}