export default function Skill() {
  const skills = {
    Frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
    ],
    Backend: [
      "Node.js",
      "Express",
      "RESTful APIs",
      "GraphQL",
      "JWT",
      "Socket.io",
    ],
    // Database: [
    //   "PostgreSQL",
    //   "MongoDB",
    //   "MySQL",
    //   "Redis",
    //   "Prisma",
    //   "Mongoose",
    // ],
    // Tools: [
    //   "Git",
    //   "Docker",
    //   "AWS",
    //   "CI/CD",
    //   "Jest",
    //   "Vite",
    //   "Webpack",
    // ],
  }

  return (
    <section className="py-28 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl font-black mb-4 tracking-tight">
            SKILLS
          </h2>
          <div className="h-1 w-24 bg-orange-600" />
        </div>

        {/* Skill Groups */}
        <div className="space-y-16">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="text-2xl font-black mb-8 text-black tracking-tight">
                {category}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skillList.map((skill) => (
                  <div
                    key={skill}
                    className="
                      group
                      border border-black/15
                      p-4
                      text-center
                      font-semibold
                      tracking-tight
                      transition-all
                      duration-300
                      hover:border-orange-600
                      hover:bg-orange-600
                      hover:text-white
                    "
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
