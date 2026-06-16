export default function CtaSection() {
  return (
    <section
      id="order"
      className="relative overflow-hidden section-pad text-center"
      style={{ backgroundColor: '#0D0A09' }}
    >
      {/* Decorative lines */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
      />

      <div className="max-w-2xl mx-auto">
        <p className="eyebrow mb-6">Come hungry · 欢迎光临</p>

        <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-4" style={{ color: '#F5EDD8' }}>
          Come hungry.
        </h2>
        <h2
          className="font-serif text-5xl md:text-6xl font-bold leading-tight italic mb-8"
          style={{ color: '#C0392B' }}
        >
          Leave a regular.
        </h2>

        <p className="text-sm leading-relaxed mb-10" style={{ color: '#C4B49A' }}>
          Taste what happens when love for a city becomes food — every noodle pulled
          by hand, every bowl seasoned with care for the community that's welcomed us.
        </p>

        {/* Info grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left border p-6"
          style={{ borderColor: '#2C1F0E', backgroundColor: '#110C06' }}
        >
          {[
            {
              label: 'Location',
              value: 'NE Broadway St',
              sub: 'Irvington, Portland OR',
            },
            {
              label: 'Hours',
              value: 'Mon–Sat: 11AM–9PM',
              sub: 'Sunday: 11AM–8PM',
            },
            {
              label: 'Contact',
              value: 'No reservations needed',
              sub: 'Walk-ins always welcome',
            },
          ].map((item) => (
            <div key={item.label}>
              <p className="eyebrow mb-2">{item.label}</p>
              <p className="text-sm font-medium" style={{ color: '#F5EDD8' }}>
                {item.value}
              </p>
              <p className="text-xs mt-1" style={{ color: '#C4B49A' }}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="btn-primary">
            Get directions →
          </a>
          <a href="#menu" className="btn-outline">
            Browse the menu
          </a>
        </div>
      </div>
    </section>
  )
}
