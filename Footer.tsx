export default function Footer() {
  return (
    <footer
      className="px-6 md:px-20 py-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t"
      style={{ backgroundColor: '#080604', borderColor: '#1A1108' }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div
          className="w-7 h-7 flex items-center justify-center text-xs font-bold"
          style={{ backgroundColor: '#C0392B', color: '#F5EDD8' }}
        >
          西
        </div>
        <span className="font-serif text-sm tracking-wide" style={{ color: '#F5EDD8' }}>
          Xi'An Kitchen
        </span>
        <span className="text-xs ml-2" style={{ color: '#C4B49A' }}>
          503-XXX-XXXX
        </span>
      </div>

      <p className="text-xs" style={{ color: '#C4B49A' }}>
        © {new Date().getFullYear()} Xi'An Kitchen · Irvington, Portland OR · All rights reserved
      </p>

      <nav className="flex items-center gap-6">
        {['Menu', 'Story', 'Reviews', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs tracking-wide transition-colors"
            style={{ color: '#C4B49A' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#F5EDD8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#C4B49A')}
          >
            {item}
          </a>
        ))}
      </nav>
    </footer>
  )
}
