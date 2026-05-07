import ProductCard from '@/components/product-card';
import { getFeaturedProducts } from '@/lib/products';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-8 px-4 border-b border-[#e7e7e7]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-[#0f1111]">Featured Products</h2>
          <Link href="/products" className="text-sm text-[#0066c0] hover:text-[#c45500] hover:underline flex items-center gap-1">
            See all <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
