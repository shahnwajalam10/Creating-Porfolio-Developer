import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Get form values
    const form = e.target
    const name = form.elements.name?.value
    const email = form.elements.email?.value
    const message = form.elements.message?.value
    
    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
      return
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
      return
    }
    
    // Show success message (UI only - no backend)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 10000)
    
    // Reset form
    form.reset()
  }

  return (
    <section id="contact" className="py-24 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-orange-600 font-bold tracking-widest mb-4 uppercase">Get In Touch</p>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              LET'S BUILD <br /> SOMETHING <br /> COOL.
            </h2>
            <div className="space-y-6 font-bold">
              <div className="flex items-center gap-4 text-black">
                <Mail className="w-5 h-5 text-orange-600" /> 
                <span>shahnwajalam10@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-black">
                <Phone className="w-5 h-5 text-orange-600" /> 
                <span>+91 7209786220</span>
              </div>
              <div className="flex items-center gap-4 text-black">
                <MapPin className="w-5 h-5 text-orange-600" /> 
                <span>Bengaluru, INDIA</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                type="text"
                placeholder="YOUR NAME"
                className="w-full bg-black/5 p-4 border-b-2 border-black/20 focus:border-orange-600 outline-none font-bold text-black"
              />
              <input
                name="email"
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-black/5 p-4 border-b-2 border-black/20 focus:border-orange-600 outline-none font-bold text-black"
              />
              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                rows={4}
                className="w-full bg-black/5 p-4 border-b-2 border-black/20 focus:border-orange-600 outline-none font-bold text-black resize-none"
              />
              
              {/* Success Message */}
              {showSuccess && (
                <div className="flex items-center gap-3 p-4 bg-green-100 border border-green-400">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-green-800 font-semibold">Message sent successfully!</p>
                    <p className="text-green-700 text-sm mt-1">Thank you! I'll get back to you soon.</p>
                  </div>
                </div>
              )}
              
              {/* Error Message */}
              {showError && (
                <div className="flex items-center gap-3 p-4 bg-red-100 border border-red-400">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="text-red-800 font-semibold">Please fill all fields correctly</p>
                    <p className="text-red-700 text-sm mt-1">Check your name, email or message format and try again</p>
                  </div>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-4 font-black hover:bg-black hover:text-white transition-colors uppercase"
              >
                <span className="flex items-center justify-center gap-3">
                  <Send className="w-5 h-5" />
                  Send Message
                </span>
              </button>
            </form>
            
            {/* Social Links */}
            <div className="flex gap-8 pt-8 border-t border-black/20">
              <a 
                href="https://github.com/shahnwajalam10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-orange-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/shahnwaj-alam-b08415206/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-orange-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com/Shahnwajalam786" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-orange-600 transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}