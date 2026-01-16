import { 
  Rocket, 
  Zap, 
  Sparkles, 
  Users,
  MapPin,
  Download,
  ArrowRight,
  Mail,
  Calendar,
  Code2,
  Layers,
  GitBranch
} from 'lucide-react';

export default function About() {
  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
    Backend: ["Node.js", "Express", "RESTful APIs", "GraphQL", "JWT"],
    Database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Mongoose"],
    Tools: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Vite"],
  }

  // const handleResumeClick = () => {
  //   const resumeUrl = "shahnwaj_alam_resume.pdf";
  //   window.open(resumeUrl, "_blank");
  // }

  const handleResumeClick = () => {
      const resumeUrl = "/shahnwaj_alam_resume.pdf";

      // open in new tab
      window.open(resumeUrl, "_blank");

      // force download
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Shahnwaj_Alam_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };


  return (
    // <section id="about" className="py-28 px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black">
    <section id="about" className="py-28 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-orange-500/5 to-orange-600/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-gray-900/5 to-gray-800/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative">
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-16">
            <div className="flex items-center gap-4">
              <div className="h-12 w-1 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
              {/* <h2 className="text-5xl font-black tracking-tighter bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"> */}
              <h2 className="text-5xl font-black tracking-tighter text-black">
                ABOUT
              </h2>
            </div>
            <div className="h-px bg-gradient-to-r from-orange-600 via-gray-300 to-transparent flex-grow" />
            {/* <span className="text-sm font-bold tracking-widest text-orange-600 uppercase">
              01.
            </span> */}
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Name and Title */}
              <div className="mb-12">
                <div className="inline-block mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold tracking-widest text-orange-600 uppercase">
                      Full-Stack Developer
                    </span>
                  </div>
                </div>
                {/* <h1 className="text-5xl lg:text-6xl font-black tracking-tighter mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"> */}
                <h1 className="text-5xl lg:text-6xl font-black tracking-tighter mb-4 text-black">
                  SHAHNWAJ ALAM
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Crafting digital experiences with modern web technologies
                </p>
              </div>

              {/* Bio Content */}
              <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
                <div className="relative">
                  <div className="absolute -left-6 top-2 h-2 w-2 bg-orange-500 rounded-full"></div>
                  <p className="pl-4">
                    Hello! I'm <span className="font-semibold text-gray-900">Shahnwaj Alam</span>, a passionate full-stack developer specializing in building exceptional digital experiences. With a keen eye for detail and a commitment to excellence, I transform complex problems into elegant solutions.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-6 top-2 h-2 w-2 bg-orange-500 rounded-full"></div>
                  <p className="pl-4">
                    My expertise spans across modern JavaScript ecosystems, where I leverage cutting-edge technologies like <span className="font-semibold text-gray-900">React</span>, <span className="font-semibold text-gray-900">Node.js</span>, and <span className="font-semibold text-gray-900">Next.js</span> to build scalable, performant applications that deliver outstanding user experiences.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                  {[
                    { 
                      text: "1+ years of intensive trainee experience", 
                      icon: <Rocket className="w-6 h-6 text-orange-500" />,
                      bgColor: "bg-orange-50"
                    },
                    { 
                      text: "Modern JavaScript ecosystem expertise", 
                      icon: <Zap className="w-6 h-6 text-orange-500" />,
                      bgColor: "bg-orange-50"
                    },
                    { 
                      text: "Clean, scalable architecture design", 
                      icon: <Sparkles className="w-6 h-6 text-orange-500" />,
                      bgColor: "bg-orange-50" 
                    },
                    { 
                      text: "Agile & collaborative team player", 
                      icon: <Users className="w-6 h-6 text-orange-500" />,
                      bgColor: "bg-orange-50"
                    },
                  ].map((item, i) => (
                    <div key={i} className="group flex items-start gap-4 p-4 bg-white/50 border border-gray-200 hover:border-orange-200 hover:bg-white transition-all duration-300">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

            {/* Resume Button */}
            <div className="mt-12">
                <button
                  onClick={handleResumeClick}
                  className="group flex items-center gap-2 px-8 py-4 bg-black text-white font-bold shadow-lg hover:shadow-xl hover:bg-black transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
            </div>
            </div>
            </div>

            {/* Right Panel - Expertise */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-white to-gray-50 p-8  shadow-xl border border-gray-200">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-1 bg-gradient-to-b from-orange-500 to-orange-600 "></div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        EXPERTISE
                      </h3>
                    </div>
                    <div className="text-xs font-bold px-3 py-1 bg-orange-100 text-orange-600 ">
                      FULL-STACK
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="space-y-8">
                    {Object.entries(skills).map(([category, skillList], index) => (
                      <div key={category} className="group">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-orange-600 transition-colors">
                            {category}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {skillList.map((skill) => (
                            <span 
                              key={skill}
                              className="px-4 py-2 bg-white border border-gray-200 text-sm font-medium text-gray-800 hover:border-orange-300 hover:text-orange-600 hover:shadow-sm transition-all duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12  bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Ready to Collaborate</p>
                        <p className="text-sm text-gray-600">Let's build something amazing together</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}