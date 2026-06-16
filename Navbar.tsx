import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
      style={{ background: 'linear-gradient(to bottom, rgba(13,10,9,0.95) 0%, rgba(13,10,9,0) 100%)' }}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-3">
        <div
          className="w-8 h-8 flex items-center justify-center text-xs font-bold"
          style={{ backgroundColor: '#C0392B', color: '#F5EDD8' }}
        >
          西
        </div>
        <span className="font-serif text-lg tracking-wide" style={{ color: '#F5EDD8' }}>
          Xi'An Kitchen
        </span>
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {['Home', 'Menu', 'Story', 'Reviews'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm tracking-wide transition-colors duration-200"
            style={{ color: '#C4B49A' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#F5EDD8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#C4B49A')}
          >
            {item}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a href="#order" className="hidden md:inline-flex btn-primary text-xs tracking-widest">
        Get Directions
      </a>

      {/* Mobile toggle */}
      <button
        className="md:hidden p-2"
        style={{ color: '#F5EDD8' }}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 py-6 px-6 flex flex-col gap-4"
          style={{ backgroundColor: 'rgba(13,10,9,0.98)' }}
        >
          {['Home', 'Menu', 'Story', 'Reviews'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm tracking-wide py-2 border-b"
              style={{ color: '#C4B49A', borderColor: '#2C1F0E' }}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="#order" className="btn-primary text-center text-xs tracking-widest mt-2">
            Get Directions
          </a>
        </div>
      )}
    </nav>
  )
}
