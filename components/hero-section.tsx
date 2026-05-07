import Link from 'next/link';

const banners = [
  {
    title: "Today's Big Deals",
    subtitle: 'Up to 40% off on top electronics',
    cta: 'Shop now',
    href: '/deals',
    bg: 'from-[#131921] to-[#232F3E]',
    accent: 'text-[#FF9900]',
    badge: '🔥 Limited Time',
  },
  {
    title: 'New Arrivals in Tech',
    subtitle: 'Explore the latest laptops, phones & wearables',
    cta: 'See what\'s new',
    href: '/products',
    bg: 'from-[#1a3a2a] to-[#0d2b1a]',
    accent: 'text-[#4ade80]',
    badge: '✨ Just Launched',
  },
];

const promoCards = [
  { title: 'Laptops', sub: 'From ₹95,900', href: '/products?category=laptops', emoji: '💻' },
  { title: 'Smartphones', sub: 'From ₹34,300', href: '/products?category=smartphones', emoji: '📱' },
  { title: 'Wearables', sub: 'From ₹15,900', href: '/products?category=wearables', emoji: '⌚' },
  { title: "Today's Deals", sub: 'Save up to 40%', href: '/deals', emoji: '🏷️' },
];

export default function HeroSection() {
  return (
    <section>
      {/* Hero banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-3 sm:px-4 py-4 bg-[#f3f3f3]">
        {banners.map((b, i) => (
          <Link key={i} href={b.href} className="block group">
            <div className={`relative bg-gradient-to-br ${b.bg} rounded-lg overflow-hidden p-8 sm:p-10 min-h-[200px] flex flex-col justify-between`}>
              {/* Badge */}
              <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 ${b.accent} w-fit mb-4`}>
                {b.badge}
              </span>
              {/* Text */}
              <div>
                <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight mb-2">
                  {b.title}
                </h2>
                <p className="text-[#ccc] text-sm mb-6">{b.subtitle}</p>
                <span className={`inline-block text-sm font-semibold ${b.accent} bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2 rounded transition-colors group-hover:bg-white/20`}>
                  {b.cta} →
                </span>
              </div>
              {/* Decorative circle */}
              <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/5" />
              <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white/5" />
            </div>
          </Link>
        ))}
      </div>

      {/* Promo cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-3 sm:px-4 pb-4 bg-[#f3f3f3]">
        {promoCards.map(card => (
          <Link key={card.href} href={card.href} className="block group">
            <div className="bg-white border border-[#ddd] rounded-lg p-4 sm:p-5 hover:shadow-md transition-shadow text-center">
              <div className="text-3xl mb-2">{card.emoji}</div>
              <h3 className="font-bold text-[#0f1111] text-sm sm:text-base group-hover:text-[#FF9900] transition-colors">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#565959] mt-0.5">{card.sub}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
