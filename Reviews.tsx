import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'George Hu',
    source: 'Google Review',
    rating: 5,
    text:
      "The tastiest beef noodle soup I've had — even better than my mom's. Spiced perfectly, the noodles have that perfect chew. Hands down the best Northwestern noodle spot I've been to in the Portland area.",
  },
  {
    name: 'Jennifer Lau',
    source: 'Google Review',
    rating: 5,
    text:
      "A gem in my new age. The Xi'an beef noodles are incredible — thick, springy, and the broth is deeply fragrant and savory. Can't wait to come back.",
  },
  {
    name: 'Fresh Pulls and Great Noodles',
    source: 'Yelp · First Creations Limited',
    rating: 5,
    text:
      "Fresh pulled and great noodles are back on the menu and they are as good as ever. The pita soaked in lamb broth is essential — don't skip it.",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} fill="#C9A84C" stroke="none" />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="section-pad"
      style={{ backgroundColor: '#110C06' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="eyebrow mb-3">What guests say · 客户评价</p>
          <p
            className="text-xs flex items-center gap-2"
            style={{ color: '#C4B49A' }}
          >
            <Stars count={5} />
            <span>4.8 · 50+ Google reviews</span>
          </p>
        </div>

        {/* What we always say quote */}
        <div className="mb-12 max-w-xl">
          <p className="eyebrow mb-2">What we always say</p>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold leading-tight"
            style={{ color: '#F5EDD8' }}
          >
            A freshly soft-opened kitchen —{' '}
            <span style={{ color: '#C0392B' }}>already loved.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: '#C4B49A' }}>
            We opened our doors in Irvington, OR — and it's already proving itself: nothing we
            serve is rushed, nothing is frozen, and every noodle is pulled fresh.
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-6 flex flex-col gap-4"
              style={{ backgroundColor: '#1A1108', borderTop: '2px solid #C0392B' }}
            >
              <Stars count={r.rating} />
              <p
                className="text-sm leading-relaxed flex-1 italic"
                style={{ color: '#C4B49A' }}
              >
                "{r.text}"
              </p>
              <div>
                <p className="text-sm font-medium" style={{ color: '#F5EDD8' }}>
                  {r.name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#C9A84C' }}>
                  {r.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
