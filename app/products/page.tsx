'use client';

import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ProductCard from '@/components/product-card';
import { products } from '@/lib/products';
import { useState, useMemo } from 'react';
import { Filter, X, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['laptops', 'smartphones', 'tablets', 'accessories', 'wearables'];
const priceRanges = [
  { label: 'Under ₹40,000', min: 0, max: 40000 },
  { label: '₹40,000 – ₹80,000', min: 40000, max: 80000 },
  { label: '₹80,000 – ₹1,60,000', min: 80000, max: 160000 },
  { label: 'Over ₹1,60,000', min: 160000, max: Infinity },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<{ min: number; max: number } | null>(null);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.includes(q)
      );
    }
    if (selectedCategory) result = result.filter(p => p.category === selectedCategory);
    if (selectedPrice) result = result.filter(p => p.price >= selectedPrice.min && p.price <= selectedPrice.max);
    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      default: result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }
    return result;
  }, [selectedCategory, selectedPrice, sortBy, searchQuery]);

  const clearAll = () => {
    setSelectedCategory(null);
    setSelectedPrice(null);
    setSearchQuery('');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f3f3f3]">
        {/* Page title bar */}
        <div className="bg-white border-b border-[#ddd] px-4 py-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-[#0f1111]">
              {selectedCategory ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}` : 'All Electronics'}
            </h1>
            <p className="text-sm text-[#565959] mt-1">
              {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &quot;{selectedCategory || 'electronics'}&quot;
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-5">
            {/* Sidebar */}
            <aside className={`${isFilterOpen ? 'fixed inset-0 z-40 bg-white overflow-auto' : 'hidden'} lg:block lg:static lg:z-auto lg:bg-transparent w-full lg:w-56 flex-shrink-0`}>
              <div className="lg:sticky lg:top-20 space-y-5 p-4 lg:p-0">
                {/* Mobile close */}
                <div className="flex items-center justify-between lg:hidden">
                  <h2 className="text-lg font-bold text-[#0f1111]">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Search */}
                <div>
                  <h3 className="text-sm font-bold text-[#0f1111] mb-2">Search</h3>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full px-2.5 py-1.5 border border-[#a6a6a6] rounded-sm text-sm focus:outline-none focus:border-[#e77600]"
                  />
                </div>

                {/* Department */}
                <div>
                  <h3 className="text-sm font-bold text-[#0f1111] mb-2">Department</h3>
                  <div className="space-y-1">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`block w-full text-left text-sm px-0 py-0.5 ${selectedCategory === null ? 'font-bold text-[#c45500]' : 'text-[#0066c0] hover:text-[#c45500] hover:underline'}`}
                    >
                      All Electronics
                    </button>
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`block w-full text-left text-sm px-0 py-0.5 capitalize ${selectedCategory === cat ? 'font-bold text-[#c45500]' : 'text-[#0066c0] hover:text-[#c45500] hover:underline'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <h3 className="text-sm font-bold text-[#0f1111] mb-2">Price</h3>
                  <div className="space-y-1">
                    <button
                      onClick={() => setSelectedPrice(null)}
                      className={`block w-full text-left text-sm px-0 py-0.5 ${selectedPrice === null ? 'font-bold text-[#c45500]' : 'text-[#0066c0] hover:text-[#c45500] hover:underline'}`}
                    >
                      All Prices
                    </button>
                    {priceRanges.map((range, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedPrice(range)}
                        className={`block w-full text-left text-sm px-0 py-0.5 ${selectedPrice === range ? 'font-bold text-[#c45500]' : 'text-[#0066c0] hover:text-[#c45500] hover:underline'}`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {(selectedCategory || selectedPrice || searchQuery) && (
                  <button onClick={clearAll} className="text-sm text-[#0066c0] hover:text-[#c45500] hover:underline">
                    Clear all filters
                  </button>
                )}
              </div>
            </aside>

            {/* Products */}
            <div className="flex-1 min-w-0">
              {/* Sort bar */}
              <div className="bg-[#eaf4fe] border border-[#bcd5eb] rounded px-4 py-2 flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsFilterOpen(true)}
                    className="lg:hidden flex items-center gap-1.5 text-sm text-[#0f1111] font-medium"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    Filters
                  </button>
                  <span className="text-sm text-[#0f1111]">
                    {filtered.length} results
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm text-[#0f1111] font-medium whitespace-nowrap">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value as typeof sortBy)}
                    className="text-sm border border-[#a6a6a6] rounded-sm px-2 py-1 bg-white focus:outline-none focus:border-[#e77600]"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Avg. Customer Review</option>
                  </select>
                </div>
              </div>

              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filtered.map(p => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Filter className="w-12 h-12 text-[#aaa] mx-auto mb-4" />
                  <h2 className="text-xl font-semibold text-[#0f1111] mb-2">No results found</h2>
                  <p className="text-[#565959] mb-4">Try adjusting your filters or search terms.</p>
                  <Button onClick={clearAll} className="bg-[#FFD814] hover:bg-[#F7CA00] text-[#0f1111] border border-[#FCD200]">
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
