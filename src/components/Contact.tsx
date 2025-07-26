import { ArrowRight, Mail, MessageSquare, Calendar, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

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
  return (
    <section className="py-24 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something
            <span className="text-gradient"> Amazing Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into reality? We'd love to hear about your project 
            and explore how we can help bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Tell Us About Your Project</h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="John" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Doe" className="w-full" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john@company.com" className="w-full" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Company (Optional)</label>
                <Input placeholder="Your Company" className="w-full" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Budget</label>
                <select className="w-full p-3 border border-input rounded-md bg-background">
                  <option>$10k - $25k</option>
                  <option>$25k - $50k</option>
                  <option>$50k - $100k</option>
                  <option>$100k+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Tell us about your project</label>
                <Textarea 
                  placeholder="Describe your project, goals, and any specific requirements..."
                  className="w-full min-h-[120px]"
                />
              </div>
              
              <Button className="btn-hero w-full group">
                Send Message
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
          
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-muted-foreground">
                Choose the method that works best for you. We're here to help!
              </p>
            </div>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <div
                    key={index}
                    className="innovation-card group hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="p-3 rounded-xl pulse-glow"
                        style={{ backgroundColor: `${method.color}15`, color: method.color }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {method.description}
                        </p>
                        <p className="text-sm font-medium" style={{ color: method.color }}>
                          {method.contact}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="innovation-card bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="w-6 h-6 text-primary" />
                <h4 className="font-semibold">Schedule a Free Consultation</h4>
              </div>
              <p className="text-muted-foreground mb-6">
                Book a 30-minute call to discuss your project requirements and get expert advice.
              </p>
              <Button variant="outline" className="w-full border-primary/30 hover:border-primary hover:bg-primary/5">
                Book Free Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}