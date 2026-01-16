import { CheckCircle2, MapPin, Calendar } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Quantum University Roorkee",
      period: "2020 - 2024",
      details: "GPA: 7.41/10.0",
      description: "Specialized in software development, algorithms, and database management systems."
    },
    {
      degree: "Higher Secondary Education",
      institution: "QUAZI AHMAD INTER COLLEGE",
      period: "2017 - 2019",
      details: "Percentage: 78.4%",
      description: "FOCUS AREAS: Physics Chemistry"
    },
    {
      degree: "Software Developer Trainee",
      institution: "Masai School",
      period: "2024 - 2025",
      details: "1200+ hours of coding",
      description: "Intensive coding bootcamp focusing on modern web technologies and agile development."
    }
  ]

  const certifications = [
    "Cybersecurity Awareness - Quick Heal",
    "Database Foundations - Oracle Academy",
    "Full Stack Web Development - Masai School",
    "React Advanced Concepts - Udemy",
    "AWS Cloud Practitioner - Coursera"
  ]

  return (
    <section className="py-24 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-4xl font-black">EDUCATION</h2>
              <div className="h-px bg-orange-600 flex-grow" />
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-orange-600 pl-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-black mb-2">{edu.degree}</h3>
                    <p className="text-orange-600 font-bold mb-1">{edu.institution}</p>
                    <p className="text-sm text-black/60 mb-2">{edu.period} • {edu.details}</p>
                  </div>
                  <p className="text-black/70 text-sm">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-4xl font-black">CERTIFICATIONS</h2>
              <div className="h-px bg-orange-600 flex-grow" />
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 p-4 border bg-black border-black/10 hover:border-orange-600/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary section - Now outside the grid and spans full width */}
        <div className="p-6 bg-black">
          <h3 className="text-xl font-black text-white mb-6">SUMMARY</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div>
              <p className="text-sm text-gray-400 mb-1">Highest Degree</p>
              <p className="text-white font-bold text-lg">B.Tech CSE</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Trainee Experience</p>
              <p className="text-white font-bold text-lg">1+ Years</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Certifications</p>
              <p className="text-white font-bold text-lg">5</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Location</p>
              <p className="text-white font-bold text-lg">India</p>
            </div>
          </div>
          <div className="pt-6 border-t border-gray-800">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Bengaluru, Karnataka</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}