import Link from 'next/link';
import { Laptop, Smartphone, Tablet, Package, Watch } from 'lucide-react';
import { products, type Product } from '@/lib/products';

const categories: Array<{
  name: string;
  slug: Product['category'];
  icon: typeof Laptop;
  emoji: string;
}> = [
  { name: 'Laptops', slug: 'laptops', icon: Laptop, emoji: '💻' },
  { name: 'Smartphones', slug: 'smartphones', icon: Smartphone, emoji: '📱' },
  { name: 'Tablets', slug: 'tablets', icon: Tablet, emoji: '📲' },
  { name: 'Accessories', slug: 'accessories', icon: Package, emoji: '🎧' },
  { name: 'Wearables', slug: 'wearables', icon: Watch, emoji: '⌚' },
];

export default function Categories() {
  return (
    <section className="py-10 px-4 border-t border-[#e7e7e7]">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold text-[#0f1111] mb-5">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map(category => {
            const count = products.filter(p => p.category === category.slug).length;
            return (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="group border border-[#ddd] bg-white rounded p-4 hover:border-[#FF9900] hover:shadow-sm transition-all text-center"
            >
              <div className="text-3xl mb-2">{category.emoji}</div>
              <h3 className="font-semibold text-sm text-[#0f1111] group-hover:text-[#c45500] transition-colors">
                {category.name}
              </h3>
              <p className="text-xs text-[#565959] mt-0.5">{count} products</p>
            </Link>
          )})}
        </div>
      </div>
    </section>
  );
}
