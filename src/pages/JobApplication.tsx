import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Upload, User, Mail, Phone, MapPin, FileText, Briefcase } from 'lucide-react'
import Navbar from '@/components/Navbar'

const JobApplication = () => {
  const { jobId } = useParams()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    coverLetter: '',
    linkedIn: '',
    portfolio: '',
    resume: null as File | null
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Job data - in a real app, this would come from an API
  const jobData: Record<string, {
    title: string;
    department: string;
    location: string;
    type: string;
    salary: string;
    skills: string[];
    description: string;
    requirements: string[];
  }> = {
    1: {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / Dubai, UAE",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
      description: "Lead the development of our next-generation ERP and logistics platforms. Work with cutting-edge technologies to build scalable solutions.",
      requirements: [
        "5+ years of experience in full-stack development",
        "Strong proficiency in React and Node.js",
        "Experience with TypeScript and modern JavaScript",
        "Knowledge of database design and optimization",
        "Experience with cloud platforms (AWS preferred)",
        "Strong problem-solving and communication skills"
      ]
    },
    2: {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Dubai, UAE",
      type: "Full-time",
      salary: "$70,000 - $100,000",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      description: "Build and maintain our cloud infrastructure. Automate deployment processes and ensure high availability of our enterprise systems.",
      requirements: [
        "3+ years of DevOps experience",
        "Strong knowledge of AWS services",
        "Experience with containerization (Docker, Kubernetes)",
        "Infrastructure as Code experience (Terraform)",
        "CI/CD pipeline setup and maintenance",
        "Monitoring and logging systems experience"
      ]
    },
    3: {
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Remote / Dubai, UAE",
      type: "Full-time",
      salary: "$60,000 - $90,000",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      description: "Develop mobile applications for our logistics and POS systems. Create intuitive user experiences for field workers and retail staff.",
      requirements: [
        "3+ years of mobile development experience",
        "Proficiency in React Native or Flutter",
        "Native iOS/Android development knowledge",
        "Experience with mobile app deployment",
        "Understanding of mobile UI/UX principles",
        "API integration experience"
      ]
    },
    4: {
      title: "Data Engineer",
      department: "Data & Analytics",
      location: "Dubai, UAE",
      type: "Full-time",
      salary: "$75,000 - $110,000",
      skills: ["Python", "Apache Spark", "Kafka", "Snowflake", "dbt"],
      description: "Design and implement data pipelines for our enterprise systems. Work with large-scale data processing and real-time analytics.",
      requirements: [
        "4+ years of data engineering experience",
        "Strong Python programming skills",
        "Experience with big data technologies (Spark, Kafka)",
        "Data warehouse and ETL experience",
        "SQL and database optimization skills",
        "Cloud data platform experience"
      ]
    },
    5: {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / Dubai, UAE",
      type: "Full-time",
      salary: "$55,000 - $80,000",
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Vite"],
      description: "Create beautiful and responsive user interfaces for our web applications. Focus on user experience and modern web technologies.",
      requirements: [
        "2+ years of frontend development experience",
        "Strong proficiency in React or Vue.js",
        "Modern CSS and responsive design skills",
        "TypeScript experience",
        "Version control (Git) proficiency",
        "Understanding of web performance optimization"
      ]
    },
    6: {
      title: "Backend Developer",
      department: "Engineering",
      location: "Dubai, UAE",
      type: "Full-time",
      salary: "$65,000 - $95,000",
      skills: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"],
      description: "Build robust APIs and microservices for our enterprise applications. Work on high-performance systems handling millions of transactions.",
      requirements: [
        "3+ years of backend development experience",
        "Strong knowledge of Node.js or Python",
        "Database design and optimization skills",
        "API design and development experience",
        "Microservices architecture understanding",
        "Performance optimization and scaling experience"
      ]
    }
  }

  const job = jobId ? jobData[jobId] : undefined

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <button
            onClick={() => navigate('/jobs')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full"
          >
            Back to Jobs
          </button>
        </div>
      </div>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, resume: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        <div className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl p-8 shadow-2xl text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">Application Submitted!</h1>
              <p className="text-white/70 mb-6">
                Thank you for applying to the {job.title} position. We've received your application and will review it shortly.
                Our team will get back to you within 5-7 business days.
              </p>
              <button
                onClick={() => navigate('/jobs')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-200"
              >
                Back to Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />

      <div className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate('/jobs')}
            className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Jobs
          </button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Job Details */}
            <div className="lg:col-span-1">
              <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl p-6 shadow-2xl sticky top-32">
                <h2 className="text-2xl font-bold text-white mb-4">{job.title}</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-white/70">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <span className="w-4 h-4 text-center">💰</span>
                    <span>{job.salary}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-3">Required Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-3">Job Description</h3>
                  <p className="text-white/70 text-sm">{job.description}</p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="text-white/70 text-sm flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2">
              <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">Apply for this Position</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Current Location *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                        placeholder="Dubai, UAE"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Years of Experience *
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-8">5-8 years</option>
                        <option value="8+">8+ years</option>
                      </select>
                    </div>
                  </div>

                  {/* Professional Links */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        name="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Portfolio/Website
                      </label>
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      <FileText className="w-4 h-4 inline mr-2" />
                      Resume/CV *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/70 cursor-pointer hover:bg-white/10 transition-all flex items-center gap-2"
                      >
                        <Upload className="w-4 h-4" />
                        {formData.resume ? formData.resume.name : 'Choose file (PDF, DOC, DOCX)'}
                      </label>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Cover Letter *
                    </label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all resize-none"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 text-white py-4 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobApplication