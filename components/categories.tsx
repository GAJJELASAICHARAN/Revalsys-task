import Link from 'next/link';
import { Laptop, Smartphone, Tablet, Package, Watch } from 'lucide-react';

const categories = [
  { name: 'Laptops', slug: 'laptops', icon: Laptop, count: 3 },
  { name: 'Smartphones', slug: 'smartphones', icon: Smartphone, count: 3 },
  { name: 'Tablets', slug: 'tablets', icon: Tablet, count: 2 },
  { name: 'Accessories', slug: 'accessories', icon: Package, count: 2 },
  { name: 'Wearables', slug: 'wearables', icon: Watch, count: 2 },
];

export default function Categories() {
  return (
    <section className="py-16 sm:py-24 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Shop by Category
          </h2>
          <p className="text-muted-foreground">
            Browse our wide range of electronics organized by type
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map(category => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.slug}
                href={`/products?category=${category.slug}`}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 mb-4 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} products
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
