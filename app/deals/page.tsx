'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import ProductCard from '@/components/product-card';
import { products } from '@/lib/products';
import { Zap, Clock } from 'lucide-react';

export default function DealsPage() {
  const deals = products.map(p => ({
    ...p,
    price: p.originalPrice ? p.price : Math.round(p.price * 0.85),
    originalPrice: p.originalPrice ?? p.price,
    badge: 'Deal' as const,
  }));

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f3f3f3]">
        {/* Banner */}
        <div className="bg-[#131921] px-4 py-8">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-7 h-7 text-[#FF9900]" />
              <h1 className="text-3xl font-bold text-white">Today&apos;s Deals</h1>
            </div>
            <p className="text-[#ccc] mb-4">Lightning deals — save big on top electronics</p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-red-600/20 border border-red-500/30">
              <Clock className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-300 font-medium">Deals end in 2 days, 14 hours</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {deals.map(deal => (
              <ProductCard key={deal.id} product={deal} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
