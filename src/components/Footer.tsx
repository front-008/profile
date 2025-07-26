import { Heart, Code2, Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-muted/50 to-background border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-innovation-orange">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">InnovativeCode</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting elegant software solutions with passion, creativity, and technical excellence. 
              Where code meets heart.
            </p>
            <div className="flex gap-3">
              <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consulting</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@innovativecode.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
              <li><a href="#" className="hover:text-primary transition-colors">Schedule a Call</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 InnovativeCode. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary animate-pulse" />
            <span>and cutting-edge tech</span>
          </div>
        </div>
      </div>
    </footer>
  )
}