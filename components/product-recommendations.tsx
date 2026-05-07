import { Product } from '@/lib/products';
import ProductCard from '@/components/product-card';

interface ProductRecommendationsProps {
  products: Product[];
  title?: string;
}

export default function ProductRecommendations({
  products,
  title = 'Recommended for You',
}: ProductRecommendationsProps) {
  if (products.length === 0) return null;

  return (
    <section className="py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
