interface Dish {
  id: number
  nameEn: string
  nameCn: string
  description: string
  price: string
  tag?: string
  tagColor?: string
  image: string
}

const dishes: Dish[] = [
  {
    id: 1,
    nameEn: 'Pita Bread Soaked in Stir-fried Lamb',
    nameCn: '羊肉泡馍',
    description:
      'Our hand-torn pita absorbs spectacularly deeply savory lamb broth — a dish that asks you to slow down.',
    price: '$16.99',
    tag: 'SIGNATURE',
    tagColor: '#C0392B',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80',
  },
  {
    id: 2,
    nameEn: 'Big Plate Chicken Mixed Noodles',
    nameCn: '大盘鸡拌面',
    description:
      'Braised chicken in a rich, broad sauce tossed with hand-pulled noodles — a whole dinner in one plate.',
    price: '$17.99',
    tag: 'BEST SELLER',
    tagColor: '#C9A84C',
    image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80',
  },
  {
    id: 3,
    nameEn: 'Hot & Spicy Beef Noodle',
    nameCn: '红烧牛肉面',
    description:
      'Slow-braised, tender, utterly comforting. A bowl that lingers long after the last sip.',
    price: '$15.99',
    tag: 'HOT',
    tagColor: '#E74C3C',
    image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80',
  },
]

export default function MenuSection() {
  return (
    <section id="menu" className="section-pad" style={{ backgroundColor: '#0D0A09' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="eyebrow mb-3">Our Menu · 菜单</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#F5EDD8' }}>
            Three plates that say{' '}
            <em className="italic" style={{ color: '#C0392B' }}>
              everything
            </em>
            <br />
            about Xi'an.
          </h2>
          <p className="mt-4 text-sm max-w-xl leading-relaxed" style={{ color: '#C4B49A' }}>
            Xi'an is a city we dream of — where each of our dishes is born. These three plates tell
            that story clearly, directly, with no apologies for their depth.
          </p>
        </div>

        {/* Dish grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group relative flex flex-col overflow-hidden"
              style={{ backgroundColor: '#1A1108' }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: '220px' }}>
                <img
                  src={dish.image}
                  alt={dish.nameEn}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {dish.tag && (
                  <span
                    className="absolute top-3 left-3 px-2 py-1 text-xs font-medium tracking-widest"
                    style={{ backgroundColor: dish.tagColor, color: '#F5EDD8' }}
                  >
                    {dish.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3
                      className="font-serif text-lg font-semibold leading-tight"
                      style={{ color: '#F5EDD8' }}
                    >
                      {dish.nameEn}
                    </h3>
                    <p className="font-chinese text-xs mt-0.5" style={{ color: '#C9A84C' }}>
                      {dish.nameCn}
                    </p>
                  </div>
                  <span
                    className="font-serif text-lg font-semibold shrink-0"
                    style={{ color: '#C9A84C' }}
                  >
                    {dish.price}
                  </span>
                </div>
                <p className="text-xs leading-relaxed mt-auto pt-3" style={{ color: '#C4B49A' }}>
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-start">
          <a href="#" className="btn-primary">
            See the full menu →
          </a>
        </div>
      </div>
    </section>
  )
}
