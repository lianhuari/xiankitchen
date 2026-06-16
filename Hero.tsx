import { Play, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end pb-20 overflow-hidden"
      style={{
        background: `
          linear-gradient(to right, rgba(13,10,9,0.9) 40%, rgba(13,10,9,0.4) 100%),
          url('https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=1600&q=80') center/cover no-repeat
        `,
      }}
    >
      {/* Top eyebrow */}
      <div className="absolute top-32 left-6 md:left-20">
        <p className="eyebrow mb-1">Xi'an Tradition · Irvington, OR</p>
      </div>

      {/* Main content */}
      <div className="relative px-6 md:px-20 max-w-4xl">
        {/* Chinese title */}
        <p
          className="font-chinese text-2xl md:text-3xl mb-2 opacity-70"
          style={{ color: '#C9A84C' }}
        >
          西安食府
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6">
          <span style={{ color: '#C0392B' }}>Xi'An</span>{' '}
          <span style={{ color: '#F5EDD8' }}>Kitchen</span>
        </h1>

        <p
          className="text-sm md:text-base max-w-md leading-relaxed mb-10"
          style={{ color: '#C4B49A' }}
        >
          Hand-pulled noodles and hand-seeded breads from the ancient Silk Road capital, brought to
          a modern kitchen and served fresh every day with authentic Northwestern techniques.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <a href="#menu" className="btn-primary">
            See the menu →
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 text-sm"
            style={{ color: '#C4B49A' }}
          >
            <span
              className="w-8 h-8 rounded-full border flex items-center justify-center"
              style={{ borderColor: '#C4B49A' }}
            >
              <Play size={12} fill="currentColor" />
            </span>
            Order on today
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap items-center gap-6 text-xs" style={{ color: '#C4B49A' }}>
          <span className="flex items-center gap-1">
            <Star size={12} fill="#C9A84C" stroke="none" />
            <Star size={12} fill="#C9A84C" stroke="none" />
            <Star size={12} fill="#C9A84C" stroke="none" />
            <Star size={12} fill="#C9A84C" stroke="none" />
            <Star size={12} fill="#C9A84C" stroke="none" />
            <span className="ml-1">50+ Google reviews</span>
          </span>
          <span>·</span>
          <span>Open daily · 11AM–9PM</span>
          <span>·</span>
          <span>📍 Irvington, OR</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2">
        <div
          className="w-px h-12 animate-pulse"
          style={{ background: 'linear-gradient(to bottom, #C9A84C, transparent)' }}
        />
        <span className="text-xs tracking-widest" style={{ color: '#C9A84C', writingMode: 'vertical-rl' }}>
          SCROLL
        </span>
      </div>
    </section>
  )
}
