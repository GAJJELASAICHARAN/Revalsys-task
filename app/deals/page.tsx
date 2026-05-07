'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import ProductCard from '@/components/product-card';
import { CartProvider } from '@/lib/cart-context';
import { products } from '@/lib/products';
import { Zap, Clock } from 'lucide-react';

export default function DealsPage() {
  // Simulate deals by showing products with special pricing
  const deals = products.slice(0, 8).map(p => ({
    ...p,
    originalPrice: p.price,
    salePrice: Math.round(p.price * 0.85), // 15% off
  }));

  return (
    <CartProvider>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-yellow-500" />
              <h1 className="text-4xl font-bold text-foreground">Flash Deals</h1>
            </div>
            <p className="text-muted-foreground mb-6">
              Limited-time offers on premium electronics
            </p>

            {/* Countdown */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-destructive/10 border border-destructive/20">
              <Clock className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">
                Deals end in 2 days, 14 hours
              </span>
            </div>
          </div>

          {/* Deals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals.map(deal => (
              <div key={deal.id} className="relative">
                <ProductCard product={deal} />
                {deal.salePrice < deal.originalPrice && (
                  <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-lg text-sm font-bold">
                    -15%
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </CartProvider>
  );
}
