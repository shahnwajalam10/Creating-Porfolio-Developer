import { ExternalLink, Github } from "lucide-react"

export default function Project() {
  const projects = [
    {
      title: "Employee Management System",
      description:
        "A full-stack MERN system to manage employees, roles, and workflows with secure CRUD operations.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      liveUrl: "https://github.com/shahnwajalam10",
      githubUrl: "https://github.com/shahnwajalam10",
    },
    {
      title: "Candidate Referral System",
      description:
        "Referral platform with real-time tracking, notifications, and a secure scalable backend.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      liveUrl: "https://github.com/shahnwajalam10",
      githubUrl: "https://github.com/shahnwajalam10",
    },
  ]

  return (
    <section id="projects" className="py-28 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl font-extrabold tracking-tight">
            PROJECTS
          </h2>
          <p className="mt-3 text-black/60 max-w-xl">
            A few things I’ve built recently — focused on clean UI, solid backend,
            and real-world use cases.
          </p>
          <div className="mt-6 h-[3px] w-28 bg-orange-600" />
        </div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-black/10" />

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-10 pl-12">
                {/* Timeline dot */}
                    <div
                        className="
                        absolute -left-12 top-8
                        h-10 w-4
                        bg-orange-600
                        shadow-[0_0_0_6px_rgba(249,115,22,0.15)]
                     "
                />
            {projects.map((project, index) => (
              <div
                key={index}
                className="
                  relative p-8
                  bg-black text-white
                  border border-white/15
                  hover:border-orange-600
                  transition-all duration-300
                "
              >


                {/* Index */}
                {/* <span className="absolute top-6 right-6 text-sm font-bold text-white/40">
                  0{index + 1}
                </span> */}

                {/* Content */}
                <h3 className="text-2xl font-extrabold mb-4 text-white relative inline-block">
                    <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-orange-600"></span>
                  {project.title}
                </h3>

                <p className="text-white/75 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        text-xs font-semibold uppercase tracking-wide
                        px-3 py-1
                        border border-white/30
                        text-white/90
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:text-orange-500"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:text-orange-500"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
