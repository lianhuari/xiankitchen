export default function FeaturedBanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '480px' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(13,10,9,0.85) 35%, rgba(13,10,9,0.2) 100%),
            url('https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=1400&q=80') center/cover no-repeat
          `,
        }}
      />

      <div className="relative section-pad flex flex-col justify-center max-w-2xl" style={{ minHeight: '480px' }}>
        <p className="eyebrow mb-4">Our Signature · 招牌</p>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#F5EDD8' }}>
          Hand-pulled Northwestern noodles.{' '}
          <span style={{ color: '#C4B49A', fontStyle: 'italic' }}>
            Authentic Xi'an flavor in every bite.
          </span>
        </h2>

        <p className="text-sm leading-relaxed mb-8 max-w-sm" style={{ color: '#C4B49A' }}>
          Each strand pulled to order — bouncy, chewy, alive. The foundation of every dish we serve.
        </p>

        <div className="flex items-center gap-4">
          <a href="#menu" className="btn-primary">Big plates, bigger flavors.</a>
        </div>
      </div>

      {/* Badge overlay */}
      <div
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center justify-center w-24 h-24 rounded-full border text-center"
        style={{ borderColor: '#C9A84C', backgroundColor: 'rgba(13,10,9,0.7)' }}
      >
        <span className="font-chinese text-xl" style={{ color: '#C9A84C' }}>北京</span>
        <span className="text-xs tracking-wider mt-1" style={{ color: '#C4B49A' }}>STYLE</span>
      </div>
    </section>
  )
}
