import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-orange-600 font-bold tracking-widest mb-4 uppercase">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">
          SHAHNWAJ ALAM. <br />
          <span className="text-orange-600">FULL STACK</span> DEVELOPER.
        </h1>
        <p className="max-w-xl text-lg text-white/70 leading-relaxed mb-8">
          I build exceptional digital experiences with modern web technologies. Specializing in{" "}
          <span className="text-white font-semibold">React</span>,{" "}
          <span className="text-white font-semibold">Node.js</span>, and creating scalable applications that make
          a difference.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-black px-8 py-3 font-bold hover:bg-orange-600 hover:text-white transition-colors flex items-center gap-2 group">
            GET RESUME <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white px-8 py-3 font-bold hover:bg-white hover:text-black transition-colors">
            VIEW MY WORK
          </button>
        </div>
      </div>
    </section>
  )
}