const pillars = [
  {
    icon: '🍜',
    title: 'Dine in, live proud',
    description: 'A counter that makes every seat feel like the best seat in the house.',
  },
  {
    icon: '🌿',
    title: 'Handmade fresh daily',
    description: 'Every noodle pulled, every sauce ground fresh — no shortcuts, no apology.',
  },
  {
    icon: '🌶️',
    title: 'Bold regional flavors',
    description:
      "Signature spice profiles from Xi'an's street stalls, distilled without shortcuts.",
  },
]

export default function TrustPillars() {
  return (
    <section
      className="section-pad border-y"
      style={{ backgroundColor: '#110C06', borderColor: '#2C1F0E' }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {pillars.map((p, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-3xl mb-4">{p.icon}</span>
            <div className="divider-gold mb-4" />
            <h3
              className="font-serif text-xl font-semibold mb-3"
              style={{ color: '#F5EDD8' }}
            >
              {p.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#C4B49A' }}>
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
