import { Link } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black backdrop-blur-md border-b border-white/20 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tighter uppercase"
        >
          <span className="text-white">SHAHNWAJ</span>
          <span className="text-orange-600">ALAM</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <Link to="/about" className="text-white hover:text-orange-600 transition">
            About
          </Link>
          <Link to="/experience" className="text-white hover:text-orange-600 transition">
            Experience
          </Link>
         <Link to="/skill" className="text-white hover:text-orange-600 transition">
            Skill
          </Link>
          <Link to="/project" className="text-white hover:text-orange-600 transition">
            Projects
          </Link>
          <Link to="/education" className="text-white hover:text-orange-600 transition">
            Education
          </Link>
          <Link to="/contact" className="text-white hover:text-orange-600 transition">
            Connect
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-black border-t border-white/10">
          <div className="flex flex-col gap-6 px-6 py-6 text-sm font-medium uppercase tracking-widest">
            <Link onClick={() => setOpen(false)} to="/about" className="text-white hover:text-orange-600">
              About
            </Link>
            <Link onClick={() => setOpen(false)} to="/experience" className="text-white hover:text-orange-600">
              Experience
            </Link>
            <Link onClick={() => setOpen(false)} to="/skill" className="text-white hover:text-orange-600">
              Skill
            </Link>
            <Link onClick={() => setOpen(false)} to="/project" className="text-white hover:text-orange-600">
              Projects
            </Link>
            <Link onClick={() => setOpen(false)} to="/education" className="text-white hover:text-orange-600">
              Education
            </Link>
            <Link onClick={() => setOpen(false)} to="/contact" className="text-white hover:text-orange-600">
              Connect
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
