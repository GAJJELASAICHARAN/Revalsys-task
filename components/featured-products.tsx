import ProductCard from '@/components/product-card';
import { getFeaturedProducts } from '@/lib/products';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Handpicked selection of our most popular items
            </p>
          </div>
          <Link href="/products" className="hidden sm:inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link href="/products" className="inline-flex w-full items-center justify-center gap-2 text-primary font-medium">
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
