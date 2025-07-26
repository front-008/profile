import { Github, Linkedin, Twitter } from 'lucide-react'

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Lead Developer & Founder",
    bio: "Full-stack wizard with a passion for clean code and user experience. 8+ years building scalable applications.",
    avatar: "👨‍💻",
    color: "hsl(var(--primary))"
  },
  {
    name: "Sarah Kim",
    role: "UI/UX Designer",
    bio: "Creative visionary who transforms complex ideas into intuitive, beautiful interfaces that users love.",
    avatar: "👩‍🎨",
    color: "hsl(var(--innovation-purple))"
  },
  {
    name: "Marcus Johnson",
    role: "Cloud Architect",
    bio: "Infrastructure expert focused on building resilient, scalable systems that grow with your business.",
    avatar: "👨‍🔧",
    color: "hsl(var(--innovation-blue))"
  },
  {
    name: "Elena Rodriguez",
    role: "Frontend Specialist",
    bio: "React enthusiast who crafts pixel-perfect, performant user interfaces with attention to every detail.",
    avatar: "👩‍💻",
    color: "hsl(var(--innovation-teal))"
  }
]

export default function Team() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our
            <span className="text-gradient"> Creative Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse group of passionate developers, designers, and innovators 
            united by our love for creating exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="innovation-card text-center group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div 
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${member.color}15` }}
              >
                {member.avatar}
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              
              <p 
                className="text-sm font-medium mb-4"
                style={{ color: member.color }}
              >
                {member.role}
              </p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {member.bio}
              </p>
              
              <div className="flex justify-center gap-3">
                <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Github className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12">
          <h3 className="text-2xl font-semibold mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented, passionate individuals who share our vision 
            of creating technology that makes a positive impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero">
              View Open Positions
            </button>
            <button className="px-6 py-3 border border-primary/30 rounded-full hover:border-primary hover:bg-primary/5 transition-colors">
              Submit Your Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}