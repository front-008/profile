import { MapPin, Clock, DollarSign, Users, Code, Database, Cloud, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import TranslationTest from '@/components/TranslationTest'

const Jobs = () => {
  const { isRTL } = useLanguage()
  const { t } = useTranslation()
  const jobListings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / Dubai, UAE",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      experience: "5+ years",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-blue-900/50 to-cyan-900/50",
      borderColor: "border-blue-500/20",
      iconColor: "text-blue-400",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
      description: "Lead the development of our next-generation ERP and logistics platforms. Work with cutting-edge technologies to build scalable solutions."
    },
    {
      id: 2,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Dubai, UAE",
      type: "Full-time",
      salary: "$70,000 - $100,000",
      experience: "3+ years",
      icon: <Cloud className="w-6 h-6" />,
      gradient: "from-green-900/50 to-emerald-900/50",
      borderColor: "border-green-500/20",
      iconColor: "text-green-400",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      description: "Build and maintain our cloud infrastructure. Automate deployment processes and ensure high availability of our enterprise systems."
    },
    {
      id: 3,
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Remote / Dubai, UAE",
      type: "Full-time",
      salary: "$60,000 - $90,000",
      experience: "3+ years",
      icon: <Smartphone className="w-6 h-6" />,
      gradient: "from-purple-900/50 to-pink-900/50",
      borderColor: "border-purple-500/20",
      iconColor: "text-purple-400",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      description: "Develop mobile applications for our logistics and POS systems. Create intuitive user experiences for field workers and retail staff."
    },
    {
      id: 4,
      title: "Data Engineer",
      department: "Data & Analytics",
      location: "Dubai, UAE",
      type: "Full-time",
      salary: "$75,000 - $110,000",
      experience: "4+ years",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-orange-900/50 to-red-900/50",
      borderColor: "border-orange-500/20",
      iconColor: "text-orange-400",
      skills: ["Python", "Apache Spark", "Kafka", "Snowflake", "dbt"],
      description: "Design and implement data pipelines for our enterprise systems. Work with large-scale data processing and real-time analytics."
    },
    {
      id: 5,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / Dubai, UAE",
      type: "Full-time",
      salary: "$55,000 - $80,000",
      experience: "2+ years",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-indigo-900/50 to-purple-900/50",
      borderColor: "border-indigo-500/20",
      iconColor: "text-indigo-400",
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Vite"],
      description: "Create beautiful and responsive user interfaces for our web applications. Focus on user experience and modern web technologies."
    },
    {
      id: 6,
      title: "Backend Developer",
      department: "Engineering",
      location: "Dubai, UAE",
      type: "Full-time",
      salary: "$65,000 - $95,000",
      experience: "3+ years",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-teal-900/50 to-blue-900/50",
      borderColor: "border-teal-500/20",
      iconColor: "text-teal-400",
      skills: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"],
      description: "Build robust APIs and microservices for our enterprise applications. Work on high-performance systems handling millions of transactions."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('jobs.title')}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> {t('jobs.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              {t('jobs.subtitle')}
            </p>
            <div className={`flex flex-wrap justify-center gap-4 text-white/60 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Users className="w-5 h-5" />
                <span>{t('jobs.culture.remote')}</span>
              </div>
              <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MapPin className="w-5 h-5" />
                <span>{t('jobs.culture.headquarters')}</span>
              </div>
              <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <DollarSign className="w-5 h-5" />
                <span>{t('jobs.culture.salaries')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="group relative cursor-pointer"
              >
                <div className={`backdrop-blur-md bg-gradient-to-br ${job.gradient} border ${job.borderColor} rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-black/20 ${job.iconColor}`}>
                      {job.icon}
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  {/* Job Title & Department */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">{job.department}</p>

                  {/* Job Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{job.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">
                    {job.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 rounded-md text-white/80 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <Link
                    to={`/jobs/apply/${job.id}`}
                    className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 text-center"
                  >
                    {t('jobs.applyNow')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('jobs.noRole.title')}
            </h2>
            <p className="text-white/70 mb-6">
              {t('jobs.noRole.description')}
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25">
              {t('jobs.sendResume')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs