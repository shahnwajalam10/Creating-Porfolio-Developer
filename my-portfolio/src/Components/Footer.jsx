export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="mt-8 text-l font-mono opacity-80 text-center tracking-widest">
          © {new Date().getFullYear()} SHAHNWAJ ALAM. BUILT WITH CREATIVITY
        </p>
      </div>
    </footer>
  )
}