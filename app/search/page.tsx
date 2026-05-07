'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import ProductCard from '@/components/product-card';
import { intelligentSearch, getFilterSuggestions } from '@/lib/ai-utils';
import { useSearchParams } from 'next/navigation';
import { Suspense, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = useMemo(() => intelligentSearch(query), [query]);
  const suggestions = useMemo(() => getFilterSuggestions(query), [query]);

  if (!query) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md space-y-5">
          <Search className="w-14 h-14 text-[#aaa] mx-auto" />
          <h1 className="text-2xl font-bold text-[#0f1111]">AI-Powered Search</h1>
          <p className="text-[#565959]">
            Enter a natural language query to find exactly what you&apos;re looking for
          </p>
          <div className="space-y-2 text-left bg-white border border-[#ddd] rounded p-4">
            <p className="text-xs font-bold text-[#0f1111] uppercase mb-3">Try searching for:</p>
            {['Gaming laptop under ₹150,000', 'Best budget smartphone', 'Premium tablet for design'].map(s => (
              <Link
                key={s}
                href={`/search?q=${encodeURIComponent(s)}`}
                className="block text-sm text-[#0066c0] hover:text-[#c45500] hover:underline py-0.5"
              >
                {s}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Results header */}
      <div className="mb-5">
        <h1 className="text-xl font-normal text-[#0f1111]">
          {results.length > 0 ? (
            <>
              <span className="text-[#565959] text-base">1-{results.length} of {results.length} results for </span>
              <span className="text-[#c45500] font-bold">&quot;{query}&quot;</span>
            </>
          ) : (
            <>No results for <span className="text-[#c45500] font-bold">&quot;{query}&quot;</span></>
          )}
        </h1>

        {(suggestions.category || suggestions.priceRange) && (
          <div className="mt-3 flex items-start gap-2 p-3 rounded bg-[#fffbe6] border border-[#FFD814]">
            <Sparkles className="w-4 h-4 text-[#FF9900] mt-0.5 flex-shrink-0" />
            <p className="text-sm text-[#0f1111]">
              <strong>AI detected:</strong>{' '}
              {suggestions.category && <>Category: <em>{suggestions.category}</em></>}
              {suggestions.category && suggestions.priceRange && ' · '}
              {suggestions.priceRange && <>Budget: ₹{suggestions.priceRange.min}–₹{suggestions.priceRange.max}</>}
            </p>
          </div>
        )}
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {results.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-lg font-semibold text-[#0f1111] mb-2">No products match your search</p>
          <p className="text-[#565959] mb-6">Try different keywords or browse our categories</p>
          <Link href="/products">
            <Button className="bg-[#FFD814] hover:bg-[#F7CA00] text-[#0f1111] border border-[#FCD200]">
              Browse All Products <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      )}

      {/* Popular searches */}
      <div className="mt-12 border-t border-[#e7e7e7] pt-8">
        <h2 className="text-lg font-bold text-[#0f1111] mb-4">Related searches</h2>
        <div className="flex flex-wrap gap-2">
          {['Gaming laptop', 'Budget smartphone', 'Premium tablet', 'Wireless earbuds', 'Smartwatch', 'Ultrabook'].map(s => (
            <Link
              key={s}
              href={`/search?q=${encodeURIComponent(s)}`}
              className="px-3 py-1.5 border border-[#ddd] rounded-sm bg-white text-sm text-[#0066c0] hover:border-[#FF9900] hover:text-[#c45500] transition-colors"
            >
              {s}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f3f3f3]">
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <SearchContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
