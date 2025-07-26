import { useState, useEffect } from 'react'

const codeLines = [
  "// Building innovative solutions with passion",
  "class ProgrammingCompany {",
  "  constructor() {",
  "    this.mission = 'Transform ideas into reality';",
  "    this.values = ['Innovation', 'Excellence', 'Collaboration'];",
  "    this.technologies = ['React', 'Node.js', 'TypeScript', 'AI/ML'];",
  "  }",
  "",
  "  async createSolution(problem) {",
  "    const analysis = await this.analyze(problem);",
  "    const design = this.architect(analysis);", 
  "    const implementation = this.develop(design);",
  "    return this.deploy(implementation);",
  "  }",
  "",
  "  buildTeam() {",
  "    return {",
  "      developers: 'passionate and skilled',",
  "      designers: 'creative and user-focused',",
  "      architects: 'scalable and reliable',",
  "      culture: 'collaborative and innovative'",
  "    };",
  "  }",
  "",
  "  async deliverExcellence() {",
  "    while (true) {",
  "      await this.learn();",
  "      await this.improve();", 
  "      await this.inspire();",
  "      this.impact++;",
  "    }",
  "  }",
  "",
  "  connectWithClients() {",
  "    return new Promise((resolve) => {",
  "      const partnership = this.collaborate();",
  "      const trust = this.communicate();",
  "      const success = this.deliver();",
  "      resolve(partnership + trust + success);",
  "    });",
  "  }",
  "}",
  "",
  "// Initialize our journey",
  "const company = new ProgrammingCompany();",
  "company.deliverExcellence();",
  "",
  "// Ready to transform your vision into reality?",
  "export default company;"
]

const TypingCodeBackground = () => {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [displayedCode, setDisplayedCode] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!isTyping) return

    const timer = setTimeout(() => {
      if (currentLine < codeLines.length) {
        const line = codeLines[currentLine]
        
        if (currentChar < line.length) {
          // Type character by character
          setDisplayedCode(prev => {
            const newCode = [...prev]
            if (!newCode[currentLine]) newCode[currentLine] = ''
            newCode[currentLine] = line.substring(0, currentChar + 1)
            return newCode
          })
          setCurrentChar(prev => prev + 1)
        } else {
          // Move to next line
          setCurrentLine(prev => prev + 1)
          setCurrentChar(0)
          
          // Add a brief pause between lines
          setTimeout(() => {}, 200)
        }
      } else {
        // Reset and start over
        setTimeout(() => {
          setCurrentLine(0)
          setCurrentChar(0)
          setDisplayedCode([])
        }, 3000)
      }
    }, Math.random() * 50 + 30) // Variable typing speed for realism

    return () => clearTimeout(timer)
  }, [currentLine, currentChar, isTyping])

  return (
    <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
      <pre className="font-mono text-xs leading-relaxed p-8 text-foreground/40 whitespace-pre-wrap">
        {displayedCode.map((line, index) => (
          <div key={index} className="flex">
            <span className="text-muted-foreground/30 w-8 text-right mr-4 select-none">
              {(index + 1).toString().padStart(2, ' ')}
            </span>
            <span>
              {line}
              {index === currentLine && (
                <span className="animate-pulse bg-primary/60 text-primary-foreground px-0.5">
                  _
                </span>
              )}
            </span>
          </div>
        ))}
      </pre>
      
      {/* Subtle code syntax highlighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/50" />
      
      {/* Floating code elements */}
      <div className="absolute top-20 left-10 text-primary/20 text-2xl font-mono animate-pulse">
        &lt;/&gt;
      </div>
      <div className="absolute top-40 right-20 text-accent/20 text-xl font-mono animate-pulse" style={{ animationDelay: '1s' }}>
        { }
      </div>
      <div className="absolute bottom-32 left-16 text-secondary/20 text-lg font-mono animate-pulse" style={{ animationDelay: '2s' }}>
        =&gt;
      </div>
      <div className="absolute bottom-20 right-32 text-muted-foreground/20 text-lg font-mono animate-pulse" style={{ animationDelay: '3s' }}>
        [ ]
      </div>
      <div className="absolute top-60 left-1/3 text-primary/15 text-sm font-mono animate-pulse" style={{ animationDelay: '0.5s' }}>
        async/await
      </div>
      <div className="absolute top-80 right-1/4 text-accent/15 text-sm font-mono animate-pulse" style={{ animationDelay: '1.5s' }}>
        Promise.resolve()
      </div>
    </div>
  )
}

export default TypingCodeBackground