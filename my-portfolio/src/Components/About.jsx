import { 
  Rocket, 
  Zap, 
  Sparkles, 
  Users,
  MapPin,
  Download,
  ArrowRight,
  Mail,
  Terminal,
  Cpu,
  Database,
  Globe,
  Shield,
  Wifi,
  Cloud,
  Code,
  Binary,
  Layers,
  GitBranch,
  Server,
  Monitor,
  Palette,
  Braces,
  Workflow,
  Bug,
  GitMerge,
  Container,
  Network,
  ShieldCheck,
  // CpuChip, GlobeLock, CloudLightning not available - using alternatives
  Globe as GlobeIcon,
  Cloud as CloudIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Code as CodeIcon
} from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('skills');
  
  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
    Backend: ["Node.js", "Express", "RESTful APIs", "GraphQL", "JWT"],
    Database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Mongoose"],
    Tools: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Vite"],
  }

  const expertise = {
    "Frontend Development": [
      { name: "SPA Development", icon: <Monitor className="w-4 h-4" /> },
      { name: "Responsive Design", icon: <Palette className="w-4 h-4" /> },
      { name: "Component Architecture", icon: <Layers className="w-4 h-4" /> },
      { name: "State Management", icon: <Workflow className="w-4 h-4" /> }
    ],
    "Backend Development": [
      { name: "API Design", icon: <Server className="w-4 h-4" /> },
      { name: "Authentication", icon: <ShieldCheck className="w-4 h-4" /> },
      { name: "Server Architecture", icon: <Cpu className="w-4 h-4" /> }, // Using Cpu instead of CpuChip
      { name: "Performance Optimization", icon: <Zap className="w-4 h-4" /> }
    ],
    "Full-Stack": [
      { name: "End-to-End Solutions", icon: <Braces className="w-4 h-4" /> },
      { name: "Database Design", icon: <Database className="w-4 h-4" /> },
      { name: "Deployment", icon: <CloudIcon className="w-4 h-4" /> }, // Using Cloud instead of CloudLightning
      { name: "Debugging", icon: <Bug className="w-4 h-4" /> }
    ]
  };

  const tools = {
    "Development": [
      { name: "VS Code", icon: <Code className="w-4 h-4" /> },
      { name: "Git/GitHub", icon: <GitMerge className="w-4 h-4" /> },
      { name: "Terminal", icon: <Terminal className="w-4 h-4" /> },
      { name: "Chrome DevTools", icon: <Monitor className="w-4 h-4" /> }
    ],
    "Deployment & DevOps": [
      { name: "Docker", icon: <Container className="w-4 h-4" /> },
      { name: "AWS", icon: <Cloud className="w-4 h-4" /> },
      { name: "Vercel/Netlify", icon: <GlobeIcon className="w-4 h-4" /> }, // Using Globe instead of GlobeLock
      { name: "CI/CD Pipelines", icon: <Workflow className="w-4 h-4" /> }
    ],
    "Testing & Monitoring": [
      { name: "Jest", icon: <Shield className="w-4 h-4" /> },
      { name: "Postman", icon: <Network className="w-4 h-4" /> },
      { name: "Lighthouse", icon: <ZapIcon className="w-4 h-4" /> },
      { name: "Chrome DevTools", icon: <Bug className="w-4 h-4" /> }
    ]
  };

  const handleResumeClick = () => {
    const resumeUrl = "/shahnwaj_alam_resume.pdf";
    window.open(resumeUrl, "_blank");
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Shahnwaj_Alam_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Accent Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-600/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-600/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        {/* Header with Terminal Design */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg mb-8 border border-orange-600/30">
            <Terminal className="w-5 h-5 text-orange-600" />
            <span className="text-orange-600 font-mono">$ whoami</span>
          </div>
          
          {/* <h1 className="text-6xl lg:text-7xl font-black tracking-tighter mb-4">
            <span className="text-orange-600">{"{"}</span>
            <span className="text-black ml-2">ShahnwajAlam</span>
            <span className="text-orange-600">{"}"}</span>
          </h1> */}

          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] lg:text-7xl font-black tracking-tighter mb-4">
              <span className="text-orange-600">{"{"}</span>
              <span className="text-black ml-1 lg:ml-2">ShahnwajAlam</span>
              <span className="text-orange-600">{"}"}</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 mt-8">
            {/* Profile Picture */}
            <div className="relative group">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-black">
                {/* Orange Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent mix-blend-multiply"></div>
                <img 
                  src="/profile_pic.png"
                  alt="Shahnwaj Alam"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-600/50 transition-all duration-500 rounded-full"></div>
              </div>
              {/* Floating Tech Icon */}
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-black border border-orange-600 rounded-full flex items-center justify-center">
                <Binary className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Title and Tagline */}
            <div className="flex-1">
              <div className="text-orange-600 font-mono text-lg mb-2 flex items-center gap-2">
                <span className="animate-pulse">▶</span>
                Full-Stack Developer
              </div>
              <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
                Building the digital future with clean code and modern solutions. Specializing in robust, scalable applications.
              </p>
              
              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">shahnwajalam10@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Bio */}
          <div className="lg:col-span-2 space-y-8">
            {/* Terminal Window - Bio */}
            <div className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-lg">
              {/* Terminal Header */}
              <div className="bg-black px-6 py-3 border-b border-orange-600 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm font-mono text-orange-600">bio.sh</span>
                </div>
                <div className="text-xs text-gray-400 font-mono">~/about</div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono">
                <div className="mb-6">
                  <span className="text-orange-600">$</span>
                  <span className="text-black ml-2">cat</span>
                  <span className="text-gray-700 ml-2">introduction.txt</span>
                </div>
                
                <div className="space-y-4 text-gray-800 ml-6">
                  <p>
                    <span className="text-orange-600">&gt;</span> Hello, I'm <span className="text-black font-semibold">Shahnwaj Alam</span>, a passionate developer focused on creating exceptional digital experiences.
                  </p>
                  <p>
                    <span className="text-orange-600">&gt;</span> With expertise in modern JavaScript ecosystems, I build scalable applications using <span className="text-black font-semibold">React</span>, <span className="text-black font-semibold">Node.js</span>, and <span className="text-black font-semibold">Next.js</span>.
                  </p>
                  <p>
                    <span className="text-orange-600">&gt;</span> I believe in writing clean, efficient code that solves real-world problems.
                  </p>
                  <p className="mt-6">
                    <span className="text-orange-600">&gt;</span> <span className="text-black font-semibold">Status:</span> <span className="text-orange-600">Active</span> • <span className="text-black font-semibold">Focus:</span> Full-Stack Development
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Tabs */}
            <div className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-lg">
              {/* Tabs Header */}
              <div className="flex border-b border-orange-600">
                {['skills', 'expertise', 'tools'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 text-sm font-mono uppercase tracking-wider ${activeTab === tab ? 'text-white bg-black border-r border-orange-600' : 'text-gray-600 hover:text-black hover:bg-gray-100'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              {/* Tabs Content */}
              <div className="p-6">
                {/* Skills Tab */}
                {activeTab === 'skills' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(skills).map(([category, skillList]) => (
                      <div key={category} className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-4 bg-orange-600"></div>
                          <span className="text-sm text-orange-600 font-mono uppercase">{category}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {skillList.map((skill) => (
                            <span 
                              key={skill}
                              className="px-3 py-1 bg-white border border-gray-300 text-sm text-gray-800 rounded hover:border-orange-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Expertise Tab */}
                {activeTab === 'expertise' && (
                  <div className="space-y-6">
                    {Object.entries(expertise).map(([area, expertiseList]) => (
                      <div key={area} className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-6 bg-orange-600 rounded-full"></div>
                          <h4 className="text-sm font-bold text-black uppercase tracking-wide">{area}</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {expertiseList.map((item, idx) => (
                            <div 
                              key={idx}
                              className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-orange-600 hover:bg-orange-50 transition-all duration-200 group"
                            >
                              <div className="p-2 bg-white border border-gray-300 rounded-md group-hover:border-orange-600 group-hover:bg-orange-100 transition-all duration-200">
                                <div className="text-orange-600">
                                  {item.icon}
                                </div>
                              </div>
                              <span className="text-sm font-medium text-gray-800 group-hover:text-black">
                                {item.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tools Tab */}
                {activeTab === 'tools' && (
                  <div className="space-y-6">
                    {Object.entries(tools).map(([category, toolsList]) => (
                      <div key={category} className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-6 bg-orange-600 rounded-full"></div>
                          <h4 className="text-sm font-bold text-black uppercase tracking-wide">{category}</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {toolsList.map((tool, idx) => (
                            <div 
                              key={idx}
                              className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-orange-600 hover:bg-orange-50 transition-all duration-200 group"
                            >
                              <div className="p-2 bg-white border border-gray-300 rounded-md group-hover:border-orange-600 group-hover:bg-orange-100 transition-all duration-200">
                                <div className="text-orange-600">
                                  {tool.icon}
                                </div>
                              </div>
                              <div className="flex-1">
                                <span className="text-sm font-medium text-gray-800 group-hover:text-black block">
                                  {tool.name}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Contact */}
          <div className="space-y-8">
            {/* Stats Card */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-orange-600" />
                <span>System Metrics</span>
              </h3>
              
              <div className="space-y-4">
                {[
                  { label: "Experience Level", value: "Full-Stack", level: 85 },
                  { label: "React Proficiency", value: "Expert", level: 90 },
                  { label: "Node.js Mastery", value: "Advanced", level: 88 },
                  { label: "Problem Solving", value: "Excellent", level: 95 },
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{stat.label}</span>
                      <span className="text-black font-semibold">{stat.value}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-600 to-orange-500 rounded-full animate-progress"
                        style={{ width: `${stat.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Wifi className="w-5 h-5 text-orange-600" />
                <span>Connect</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-300 hover:border-orange-600 hover:bg-orange-50 transition-all duration-300">
                  <Mail className="w-5 h-5 text-orange-600" />
                  <span className="text-sm text-gray-800">shahnwajalam10@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-300 hover:border-orange-600 hover:bg-orange-50 transition-all duration-300">
                  <Globe className="w-5 h-5 text-orange-600" />
                  <span className="text-sm text-gray-800">Available Worldwide</span>
                </div>
              </div>

              <button
                onClick={handleResumeClick}
                className="w-full mt-6 group flex items-center justify-center gap-3 px-6 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition-all duration-300 border-2 border-black hover:border-orange-600"
              >
                <Download className="w-5 h-5" />
                Download Resume
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Tech Stack Icons */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-lg">
              <h4 className="text-sm text-gray-600 mb-4 font-mono">ACTIVE TECHNOLOGIES</h4>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: <Code className="w-8 h-8 text-black" />, label: "React" },
                  { icon: <Database className="w-8 h-8 text-black" />, label: "Node.js" },
                  { icon: <Cloud className="w-8 h-8 text-black" />, label: "Next.js" },
                  { icon: <Shield className="w-8 h-8 text-black" />, label: "TypeScript" },
                  { icon: <Terminal className="w-8 h-8 text-black" />, label: "Express" },
                  { icon: <Cpu className="w-8 h-8 text-black" />, label: "MongoDB" },
                ].map((tech, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col items-center p-3 bg-gray-50 rounded-lg border border-gray-300 hover:border-orange-600 hover:bg-orange-50 transition-all duration-300 group"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-xs text-gray-700 mt-2 font-medium">{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Fast Development",
              description: "Quick turnaround with quality code"
            },
            {
              icon: <Sparkles className="w-6 h-6" />,
              title: "Clean Code",
              description: "Maintainable and scalable solutions"
            },
            {
              icon: <Rocket className="w-6 h-6" />,
              title: "Performance",
              description: "Optimized for speed and efficiency"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Collaboration",
              description: "Team player with clear communication"
            },
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-black rounded-xl p-6 hover:border-orange-600 hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className="inline-flex p-3 bg-orange-50 border border-orange-200 rounded-lg mb-4">
                <div className="text-orange-600">
                  {item.icon}
                </div>
              </div>
              <h4 className="font-bold text-black mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: var(--target-width); }
        }
        .animate-progress {
          animation: progress 1s ease-out forwards;
        }
      `}</style>
    </section>
  )
}



