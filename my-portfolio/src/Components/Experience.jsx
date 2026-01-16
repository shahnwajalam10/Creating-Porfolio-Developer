export default function Experience() {
  const experiences = [
    {
      date: "Sep 2025 — Present",
      company: "Masters' Union",
      position: "Associate Software Developer",
      location: " Gurgaon, Haryana, India",
      highlights: [
        "Built and maintained production-grade web applications used by internal teams.",
        "Designed scalable REST APIs and integrated them with modern React frontends.",
        "Improved frontend performance and code quality through refactoring and best practices.",
        "Collaborated closely with product, design, and backend teams in an agile setup.",
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "MySQL"],
    },
  ]

  return (
    <section id="experience" className="py-32 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-5xl font-extrabold tracking-tight">
            Work Experience
          </h2>
          <p className="mt-4 text-black/60 max-w-2xl">
            Hands-on experience building, shipping, and maintaining real-world
            applications in fast-paced environments.
          </p>
        </div>

        {/* Experience Card */}
        <div className="relative border border-black/20 bg-black text-white">
          {/* Timeline dot */}
          <div className="absolute -left-3 top-12 h-3 w-3 bg-orange-600" />

          <div className="grid md:grid-cols-12">
            {/* Left meta */}
            <div className="md:col-span-4 p-8 border-r border-white/10">
              <p className="text-sm font-semibold text-orange-500">
                {experiences[0].date}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {experiences[0].company}
              </h3>
              <p className="mt-1 text-white/60 text-sm">
                {experiences[0].location}
              </p>
            </div>

            {/* Right content */}
            <div className="md:col-span-8 p-8">
              <h4 className="text-2xl font-semibold mb-6 text-white">
                {experiences[0].position}
              </h4>

              {/* Highlights */}
              <ul className="space-y-3 mb-8">
                {experiences[0].highlights.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-white/80 leading-relaxed"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {experiences[0].technologies.map((tech) => (
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
