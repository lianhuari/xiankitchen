export default function OurStory() {
  return (
    <section id="story" className="relative overflow-hidden">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Text column */}
        <div
          className="section-pad flex flex-col justify-center"
          style={{ backgroundColor: '#0D0A09' }}
        >
          <div className="max-w-lg">
            <p className="eyebrow mb-4">Our Story · 关于我们</p>
            <div className="divider-gold mb-6" />

            <h2
              className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight"
              style={{ color: '#F5EDD8' }}
            >
              A message from our Xi'An kitchen.
            </h2>

            <p className="text-sm leading-relaxed mb-4" style={{ color: '#C4B49A' }}>
              Our kitchen is a labor of love rooted in the traditional foods of Xi'an and the Shaanxi
              province of Northwestern China. Xi'An Kitchen was born out of a deep love for the
              city's culinary tradition — from thick, chewy hand-pulled noodles to slow-braised
              meats layered in spice.
            </p>

            <p className="text-sm leading-relaxed mb-8" style={{ color: '#C4B49A' }}>
              Xi'an is a city you feel in your hands and on your tongue — ancient, generous, and
              completely itself. We're bringing those flavors and that spirit to the food-loving
              community of Portland, one bowl at a time.
            </p>

            {/* Chinese quote */}
            <blockquote
              className="border-l-2 pl-4 mb-8"
              style={{ borderColor: '#C0392B' }}
            >
              <p
                className="font-chinese text-lg"
                style={{ color: '#C9A84C' }}
              >
                西安 — 千年之都的味道
              </p>
              <p className="text-xs mt-1" style={{ color: '#C4B49A' }}>
                "Xi'an — flavors from a thousand-year capital"
              </p>
            </blockquote>

            {/* Stats */}
            <div className="flex gap-10">
              {[
                { value: '300+', label: 'Bowls served daily' },
                { value: '100%', label: 'Hand-pulled noodles' },
                { value: '2019', label: 'Est. in Portland' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl font-bold" style={{ color: '#F5EDD8' }}>
                    {stat.value}
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#C4B49A' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image column */}
        <div
          className="relative min-h-[400px] lg:min-h-0"
          style={{
            background: `url('https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=80') center/cover no-repeat`,
          }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(13,10,9,0.4) 0%, rgba(13,10,9,0) 50%)' }}
          />

          {/* Badge */}
          <div
            className="absolute bottom-8 left-8 px-4 py-3"
            style={{ backgroundColor: 'rgba(13,10,9,0.85)', borderLeft: '2px solid #C0392B' }}
          >
            <p className="font-chinese text-2xl" style={{ color: '#C9A84C' }}>北京</p>
            <p className="text-xs tracking-widest mt-1" style={{ color: '#C4B49A' }}>NORTHWESTERN CRAFT</p>
          </div>
        </div>
      </div>
    </section>
  )
}
